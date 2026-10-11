# Ultimate Fitness – website + backend

Express + SQLite. Free-trial form ka data database mein save hota hai, aur `/admin` page par aap sab leads dekh sakte hain.

## Folder
```
server.js        backend (API + static server)
public/          website files (index.html, style.css, script.js, admin.html)
data/gym.db      database (auto-create hota hai)
```

## Local par chalayein
Node.js 18+ chahiye.
```bash
npm install
ADMIN_PASSWORD="apna-lamba-password" npm start        # Mac/Linux
# Windows (PowerShell):  $env:ADMIN_PASSWORD="apna-lamba-password"; npm start
```
- Website: http://localhost:3000
- Admin:   http://localhost:3000/admin  (naam, mobile, status, note, CSV download)

> `index.html` ko seedha double-click karke kholne par form kaam nahi karega – server chalna zaroori hai.

## Online (deploy) karein
Kisi bhi Node host par chalega (Render, Railway, Fly.io, VPS).
1. Environment variable `ADMIN_PASSWORD` set karein.
2. **Database ko persistent disk par rakhein**: `DB_PATH=/var/data/gym.db` (disk mount karke). Bina disk ke free hosts restart par data mita dete hain.
3. HTTPS zaroor on rakhein (admin password header mein jaata hai).
4. `data/gym.db` ka regular backup lein, ya admin se CSV download karte rahein.

## API
| Method | Path | Auth | Kaam |
|---|---|---|---|
| POST | `/api/trial` | – | `{name, mobile, goal}` save karta hai (rate-limited, 24h mein same number duplicate nahi) |
| GET | `/api/leads` | `x-admin-password` | saari leads |
| PATCH | `/api/leads/:id` | admin | status / note update |
| DELETE | `/api/leads/:id` | admin | lead delete |
| GET | `/api/leads.csv` | admin | Excel/CSV export |
