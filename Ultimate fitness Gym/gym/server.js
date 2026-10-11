const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const express = require('express');
const Database = require('better-sqlite3');

/* ---------- config ---------- */
const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'KUYA@2012';
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'gym.db');
const GOALS = ['Weight loss', 'Muscle gain', 'Fit rehna'];
const STATUSES = ['new', 'contacted', 'joined', 'not_interested'];

if (!ADMIN_PASSWORD) {
  console.warn('⚠  ADMIN_PASSWORD is not set. Admin panel is disabled until you set it.');
}

/* ---------- storage (SQLite) ---------- */
fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    name       TEXT NOT NULL,
    mobile     TEXT NOT NULL,
    goal       TEXT NOT NULL,
    status     TEXT NOT NULL DEFAULT 'new',
    note       TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE INDEX IF NOT EXISTS idx_leads_mobile ON leads(mobile, created_at);
`);

const q = {
  insert: db.prepare('INSERT INTO leads (name, mobile, goal) VALUES (?, ?, ?)'),
  recentDup: db.prepare("SELECT id FROM leads WHERE mobile = ? AND created_at > datetime('now','-1 day') LIMIT 1"),
  list: db.prepare('SELECT * FROM leads ORDER BY id DESC'),
  update: db.prepare('UPDATE leads SET status = COALESCE(?, status), note = COALESCE(?, note) WHERE id = ?'),
  remove: db.prepare('DELETE FROM leads WHERE id = ?'),
};

/* ---------- helpers ---------- */
const hits = new Map(); // simple in-memory rate limiter
function limit(key, max, windowMs) {
  const now = Date.now();
  const arr = (hits.get(key) || []).filter(t => now - t < windowMs);
  if (arr.length >= max) { hits.set(key, arr); return false; }
  arr.push(now); hits.set(key, arr); return true;
}
setInterval(() => hits.clear(), 60 * 60 * 1000).unref();

function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

function requireAdmin(req, res, next) {
  if (!ADMIN_PASSWORD) return res.status(503).json({ error: 'Admin password server par set nahi hai.' });
  if (!limit('admin:' + req.ip, 60, 60 * 1000)) return res.status(429).json({ error: 'Bahut zyada requests. Thodi der baad try karein.' });
  const given = req.get('x-admin-password') || '';
  if (!safeEqual(given, ADMIN_PASSWORD)) {
    limit('adminfail:' + req.ip, 1e9, 15 * 60 * 1000); // record failure
    if ((hits.get('adminfail:' + req.ip) || []).length > 10) return res.status(429).json({ error: 'Bahut galat attempts. 15 minute baad try karein.' });
    return res.status(401).json({ error: 'Galat password.' });
  }
  next();
}

const csvCell = v => {
  let s = String(v ?? '');
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; // block spreadsheet formula injection
  return '"' + s.replace(/"/g, '""') + '"';
};

/* ---------- app ---------- */
const app = express();
app.set('trust proxy', 1);
app.disable('x-powered-by');
app.use(express.json({ limit: '10kb' }));

app.use((req, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  next();
});

/* public: free trial form */
app.post('/api/trial', (req, res) => {
  if (!limit('trial:' + req.ip, 5, 10 * 60 * 1000)) {
    return res.status(429).json({ error: 'Bahut zyada requests. Thodi der baad try karein.' });
  }
  const name = String(req.body?.name ?? '').trim().replace(/\s+/g, ' ');
  const mobile = String(req.body?.mobile ?? '').replace(/\D/g, '').slice(-10);
  const goal = String(req.body?.goal ?? '');

  if (name.length < 2 || name.length > 60) return res.status(400).json({ error: 'Kripya apna sahi naam likhein.' });
  if (!/^[6-9]\d{9}$/.test(mobile)) return res.status(400).json({ error: 'Kripya 10 digit ka sahi mobile number likhein.' });
  if (!GOALS.includes(goal)) return res.status(400).json({ error: 'Kripya apna goal chuniye.' });

  if (q.recentDup.get(mobile)) {
    // Treat as success so the visitor isn't confused; no duplicate row saved.
    return res.json({ ok: true, duplicate: true });
  }
  q.insert.run(name, mobile, goal);
  res.status(201).json({ ok: true });
});

/* admin */
app.get('/api/leads', requireAdmin, (req, res) => res.json({ leads: q.list.all() }));

app.patch('/api/leads/:id', requireAdmin, (req, res) => {
  const id = Number(req.params.id);
  const { status, note } = req.body || {};
  if (status !== undefined && !STATUSES.includes(status)) return res.status(400).json({ error: 'Invalid status.' });
  if (note !== undefined && String(note).length > 500) return res.status(400).json({ error: 'Note bahut lamba hai.' });
  const r = q.update.run(status ?? null, note === undefined ? null : String(note), id);
  if (!r.changes) return res.status(404).json({ error: 'Lead nahi mila.' });
  res.json({ ok: true });
});

app.delete('/api/leads/:id', requireAdmin, (req, res) => {
  const r = q.remove.run(Number(req.params.id));
  if (!r.changes) return res.status(404).json({ error: 'Lead nahi mila.' });
  res.json({ ok: true });
});

app.get('/api/leads.csv', requireAdmin, (req, res) => {
  const rows = q.list.all();
  const head = ['ID', 'Name', 'Mobile', 'Goal', 'Status', 'Note', 'Created (UTC)'];
  const csv = [head.map(csvCell).join(',')]
    .concat(rows.map(r => [r.id, r.name, r.mobile, r.goal, r.status, r.note, r.created_at].map(csvCell).join(',')))
    .join('\r\n');
  res.set({ 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="leads.csv"' });
  res.send('\ufeff' + csv);
});

app.use('/api', (req, res) => res.status(404).json({ error: 'Not found' }));

/* static site (only the public/ folder is exposed) */
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.status === 400 ? 'Invalid request.' : 'Server error. Thodi der baad try karein.' });
});

const server = app.listen(PORT, () => console.log(`Ultimate Fitness running → http://localhost:${PORT}`));
process.on('SIGTERM', () => server.close(() => { db.close(); process.exit(0); }));
