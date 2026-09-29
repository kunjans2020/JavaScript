const $=s=>document.querySelector(s);
/* menu */
$('#menuBtn').onclick=()=>$('#nav').classList.toggle('open');
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));

/* tabs helper */
function tabs(box,items,cb){
 box.innerHTML='';
 items.forEach((t,i)=>{
  const b=document.createElement('button');
  b.className='tab';b.role='tab';b.textContent=t;
  b.onclick=()=>{[...box.children].forEach(x=>x.setAttribute('aria-selected','false'));b.setAttribute('aria-selected','true');cb(i)};
  box.appendChild(b);
 });
 box.children[0].click();
}

/* machines */
const M={
 'Cardio':[['Treadmill','Chalne aur daudne ke liye. Speed aur incline set kar sakte hain.','Fat loss, stamina'],['Elliptical','Joddon par kam dabav, poore shareer ki cardio.','Fat loss, beginners'],['Spin Bike','Cycling workout, HIIT ke liye best.','Legs, stamina'],['Rowing Machine','Pair, kamar aur baanh ek saath chalti hain.','Full body']],
 'Chest & Back':[['Chest Press','Baithkar seene ka strength banayein.','Chest, triceps'],['Pec Deck','Seene ko shape dene ke liye.','Chest'],['Lat Pulldown','Pith ki chaudai badhane ke liye.','Back, biceps'],['Seated Row','Pith ki motai aur posture sudharne ke liye.','Mid back']],
 'Legs':[['Leg Press','Bhaari wazan se legs ka strength.','Quads, glutes'],['Leg Extension','Jaangh ke aage ke muscle.','Quads'],['Leg Curl','Jaangh ke peeche ke muscle.','Hamstrings'],['Smith Machine','Squats aur presses surakshit tareeke se.','Legs, shoulders']],
 'Free Weights':[['Dumbbells (2–50 kg)','Har muscle ke liye, balance behtar banate hain.','All muscles'],['Barbell & Plates','Deadlift, squat aur bench ke liye.','Strength'],['Adjustable Bench','Flat, incline aur decline kaam.','Chest, shoulders'],['Kettlebells','Swing aur functional training.','Full body']]
};
const ART=["<svg viewBox=\"0 0 240 140\" fill=\"none\" stroke=\"#ff6b2c\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 110H190L206 96H40Z\" fill=\"#171c23\"/><path d=\"M60 110V126M172 110V126\"/><path d=\"M184 104L170 34H128\"/><rect x=\"146\" y=\"14\" width=\"46\" height=\"22\" rx=\"5\" fill=\"#171c23\"/><path d=\"M154 25H180\" stroke=\"#ffb27a\"/><circle cx=\"102\" cy=\"40\" r=\"9\" stroke=\"#ffb27a\"/><path d=\"M102 50L96 80M96 80L112 98M96 80L80 98M102 58L122 68M102 58L88 72\" stroke=\"#ffb27a\"/><path d=\"M28 132H212\" stroke=\"#252c36\"/></svg>", "<svg viewBox=\"0 0 240 140\" fill=\"none\" stroke=\"#ff6b2c\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"172\" y=\"16\" width=\"34\" height=\"92\" rx=\"4\" fill=\"#171c23\"/><path d=\"M172 34H206M172 52H206M172 70H206M172 88H206\" stroke=\"#ffb27a\" stroke-width=\"2\"/><path d=\"M40 112H212M60 112V92\"/><rect x=\"56\" y=\"82\" width=\"52\" height=\"10\" rx=\"4\" fill=\"#171c23\"/><rect x=\"44\" y=\"28\" width=\"14\" height=\"56\" rx=\"6\" fill=\"#171c23\"/><path d=\"M58 54H128L172 40\" /><circle cx=\"128\" cy=\"54\" r=\"7\" fill=\"#171c23\"/><path d=\"M64 28V112\" stroke-dasharray=\"2 8\"/></svg>", "<svg viewBox=\"0 0 240 140\" fill=\"none\" stroke=\"#ff6b2c\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 118L196 44\"/><path d=\"M50 126L214 52\" stroke-width=\"2\"/><path d=\"M36 98L36 62L66 56\" /><rect x=\"60\" y=\"84\" width=\"46\" height=\"12\" rx=\"5\" fill=\"#171c23\" transform=\"rotate(-24 83 90)\"/><path d=\"M140 76L166 100\" stroke-width=\"9\"/><path d=\"M172 44V70M184 40V66M196 36V62\" stroke=\"#ffb27a\" stroke-width=\"7\"/><path d=\"M28 132H214\" stroke=\"#252c36\"/></svg>", "<svg viewBox=\"0 0 240 140\" fill=\"none\" stroke=\"#ff6b2c\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 60H218\" stroke-width=\"5\"/><rect x=\"48\" y=\"30\" width=\"12\" height=\"60\" rx=\"3\" fill=\"#171c23\"/><rect x=\"64\" y=\"38\" width=\"10\" height=\"44\" rx=\"3\" fill=\"#171c23\"/><rect x=\"180\" y=\"30\" width=\"12\" height=\"60\" rx=\"3\" fill=\"#171c23\"/><rect x=\"166\" y=\"38\" width=\"10\" height=\"44\" rx=\"3\" fill=\"#171c23\"/><path d=\"M88 116H152\" stroke-width=\"6\" stroke=\"#ffb27a\"/><rect x=\"72\" y=\"102\" width=\"14\" height=\"28\" rx=\"4\" fill=\"#171c23\" stroke=\"#ffb27a\"/><rect x=\"154\" y=\"102\" width=\"14\" height=\"28\" rx=\"4\" fill=\"#171c23\" stroke=\"#ffb27a\"/></svg>"];
tabs($('#mTabs'),Object.keys(M),i=>{
 $('#mArt').innerHTML=ART[i];
 $('#mGrid').innerHTML=M[Object.keys(M)[i]].map(m=>`<div class="card"><h3>${m[0]}</h3><small>${m[2]}</small><p>${m[1]}</p></div>`).join('');
});

/* diet */
const D={
 'Weight loss':{k:'Lagbhag 1500–1700 kcal / din',m:[['Subah 7:00','Garam paani + 1 glass; 2 besan cheela ya oats with fruits'],['Nashta 10:30','1 seb ya papita + 5 badam'],['Lunch 1:30','2 roti, 1 katori dal, sabzi, salad, 1 katori dahi'],['Shaam 5:00','Bhuna chana ya green tea'],['Dinner 8:00','Paneer/soya sabzi + 1 roti + salad'],['Raat 10:00','1 glass halka garam doodh (optional)']],t:'Roz 3–4 litre paani piyein. Meetha, cold drink aur tala hua khana kam karein. Roz 30–40 minute cardio karein.'},
 'Muscle gain':{k:'Lagbhag 2600–3000 kcal / din',m:[['Subah 7:00','Doodh + kela + 5 bheege badam'],['Nashta 9:00','Paneer paratha ya 3 besan cheela + dahi'],['Pre-workout 4:30','Peanut butter toast + kela'],['Post-workout 7:00','Whey protein ya chhach + soaked chana'],['Dinner 9:00','3 roti, dal, paneer/soya, chawal, salad'],['Raat 10:30','Doodh + 1 mutthi dry fruits']],t:'Roz kam se kam 1.6 g protein per kg body weight lein. 7–8 ghante ki neend zaroori hai, tabhi muscles grow karte hain.'},
 'Fit rehna':{k:'Lagbhag 2000–2200 kcal / din',m:[['Subah 7:00','Poha ya upma + 1 fruit'],['Mid-morning','Nariyal paani ya chhach'],['Lunch 1:30','2 roti, dal, sabzi, chawal thoda, salad'],['Shaam 5:00','Makhana ya sprouts chaat'],['Dinner 8:30','Khichdi ya 2 roti + sabzi + dahi'],['Raat','1 glass haldi doodh']],t:'Balanced khana khayein, junk food hafte mein ek baar hi. Hafte mein 4–5 din workout karein.'}
};
tabs($('#dTabs'),Object.keys(D),i=>{
 const d=D[Object.keys(D)[i]];
 $('#meals').innerHTML=d.m.map(r=>`<div class="row"><b>${r[0]}</b><span>${r[1]}</span></div>`).join('');
 $('#kcal').textContent=d.k;$('#tips').textContent='Tip: '+d.t+' Medical problem ho to diet shuru karne se pehle doctor se poochein.';
});

/* fees */
const dur=[['1 Mahina',1,0],['3 Mahine',3,10],['6 Mahine',6,20],['12 Mahine',12,30]];
const base={Normal:[['Basic',800,['Gym floor access','Cardio + weights','Locker (shared)']],['Standard',1200,['Basic ke sab fayde','Group classes (Zumba/Yoga)','Steam room','Diet chart (ek baar)']],['Premium',1700,['Standard ke sab fayde','Personal locker','Monthly body check-up','Guest pass (2/month)']]],
 Personal:[['PT Starter',3500,['Hafte mein 3 session','Personalised workout plan','Custom diet chart']],['PT Pro',5000,['Roz 1-on-1 session','Weekly progress tracking','Diet + supplement guidance','Whatsapp support']],['PT Elite',7500,['Roz 1-on-1 (senior coach)','Body composition analysis','Full diet management','Priority slot booking']]]};
let type='Normal',di=0;
const inr=n=>'₹'+Math.round(n).toLocaleString('en-IN');
function drawPlans(){
 $('#plans').innerHTML=base[type].map((p,i)=>{
  const [,mo,off]=dur[di],full=p[1]*mo,net=full*(1-off/100);
  return `<div class="plan ${i==1?'best':''}"><h3>${p[0]}${i==1?' ★':''}</h3>
  <div class="price">${inr(net/mo)}<small> / mahina</small></div>
  <div class="old">${off?inr(p[1])+' / mahina':''}</div>
  <p style="margin:4px 0 0;font-weight:600">Total: ${inr(net)} ${off?`<span style="color:var(--blue)">(${off}% off)</span>`:''}</p>
  <ul>${p[2].map(f=>`<li>${f}</li>`).join('')}</ul>
  <a class="btn" href="#join">Join karein</a></div>`}).join('');
}
function setType(t){type=t;$('#tNormal').setAttribute('aria-pressed',t=='Normal');$('#tPersonal').setAttribute('aria-pressed',t=='Personal');drawPlans()}
$('#tNormal').onclick=()=>setType('Normal');
$('#tPersonal').onclick=()=>setType('Personal');
tabs($('#dur'),dur.map(d=>d[0]+(d[2]?' (-'+d[2]+'%)':'')),i=>{di=i;drawPlans()});

/* counters */
const io=new IntersectionObserver(es=>es.forEach(e=>{
 if(!e.isIntersecting)return;io.unobserve(e.target);
 const n=+e.target.dataset.n,plus=n>=40&&n!=15?'+':'';let c=0;
 const t=setInterval(()=>{c+=Math.ceil(n/40);if(c>=n){c=n;clearInterval(t)}e.target.textContent=c+plus},30);
}),{threshold:.6});
document.querySelectorAll('[data-n]').forEach(el=>io.observe(el));

/* card spotlight */
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.card,.plan');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')});

/* form */
$('#jf').onsubmit=e=>{e.preventDefault();
 const f=new FormData(e.target);
 $('#msg').textContent='Shukriya '+f.get('n')+'! Hamari team jaldi hi aapko call karegi.';e.target.reset();
};