const KEY = 'jomo-desktop-v18';

const HUNGARY_CENTER = [47.1625, 19.5033];
const HUNGARY_BOUNDS = [
  [45.5, 15.8],
  [48.8, 23.2]
];

const seed = {
  points: 180,
  focusMinutes: 38,
  gardenStage: 0,
  streak: 6,
  digestMode: 'hourly',
  urgentFilter: true,
  notifications: [
    {source:'Instagram',text:'12 új kedvelés és 3 komment a tegnapi posztodon.',time:'09:12',urgent:false},
    {source:'Messenger',text:'Anya: „Szombaton ebéd?”',time:'09:24',urgent:true},
    {source:'TikTok',text:'5 új értesítés a követett profiloktól.',time:'10:08',urgent:false},
    {source:'LinkedIn',text:'2 új reakció és egy új kapcsolatfelkérés.',time:'10:41',urgent:false},
    {source:'WhatsApp',text:'Márk: „Fél hatkor a parkban?”',time:'11:16',urgent:true}
  ],
  events: [
    {id:1,city:'Dunaújváros',title:'Telefonmentes társas est',cat:'Játék',when:'Ma · 18:00',place:'Belvárosi közösségi tér',lat:46.9585,lng:18.9377,people:18,emoji:'🎲',saved:true,joined:false},
    {id:2,city:'Dunaújváros',title:'Lassú jóga a zöldben',cat:'Mozgás',when:'Ma · 19:15',place:'Dunaújvárosi park',lat:46.9660,lng:18.9417,people:11,emoji:'🧘',saved:false,joined:false},
    {id:3,city:'Dunaújváros',title:'Könyvklub – Esti regényest',cat:'Kultúra',when:'Holnap · 17:30',place:'József Attila Könyvtár környéke',lat:46.9597,lng:18.9316,people:9,emoji:'📚',saved:false,joined:false},
    {id:4,city:'Dunaújváros',title:'Duna-parti Sunset Séta',cat:'Séta',when:'Holnap · 20:00',place:'Szalki-sziget (Duna-part)',lat:46.9680,lng:18.9480,people:14,emoji:'🌇',saved:false,joined:false},
    {id:5,city:'Dunaújváros',title:'Csendes kávézó & telefonmentes olvasás',cat:'Kultúra',when:'Szerda · 16:30',place:'Fő tér környéki kávézó',lat:46.9610,lng:18.9350,people:7,emoji:'☕',saved:false,joined:false},
    {id:6,city:'Budapest',title:'Sziget Fesztivál – Telefonmentes Nap',cat:'Kultúra',when:'Augusztus · 16:00',place:'Óbudai-sziget (Duna-part)',lat:47.5595,lng:19.0540,people:45000,emoji:'🎸',saved:false,joined:false},
    {id:7,city:'Debrecen',title:'Debreceni Virágkarnevál',cat:'Kultúra',when:'Augusztus 20. · 09:00',place:'Nagyerdő, Békás-tó',lat:47.5610,lng:21.6285,people:30000,emoji:'🌸',saved:false,joined:false},
    {id:8,city:'Szeged',title:'Szegedi Szabadtéri Játékok',cat:'Kultúra',when:'Július · 21:00',place:'Dóm tér / Tisza-part',lat:46.2520,lng:20.1485,people:4000,emoji:'🎭',saved:false,joined:false},
    {id:9,city:'Pécs',title:'Zsolnay Negyed Kulturális Piknik',cat:'Kultúra',when:'Június · 17:00',place:'Zsolnay Kulturális Negyed',lat:46.0790,lng:18.2410,people:5000,emoji:'🎟️',saved:false,joined:false},
    {id:10,city:'Győr',title:'Rábca-parti Nyári Koncertek',cat:'Mozgás',when:'Július · 19:30',place:'Radó-sziget',lat:47.6860,lng:17.6330,people:8000,emoji:'🎶',saved:false,joined:false},
    {id:11,city:'Veszprém',title:'VeszprémFest – Historia Kert',cat:'Kultúra',when:'Július · 20:00',place:'Historia Kert (Vár alja)',lat:47.0910,lng:17.9070,people:3500,emoji:'🎷',saved:false,joined:false},
    {id:12,city:'Eger',title:'Egri Vári Vigadalmak',cat:'Kultúra',when:'Július · 10:00',place:'Egri Vár belső udvara',lat:47.9045,lng:20.3815,people:12000,emoji:'🛡️',saved:false,joined:false},
    {id:13,city:'Sopron',title:'VOLT Fesztivál Erdei Séta',cat:'Játék',when:'Június · 15:00',place:'Lővérek erdei tisztás',lat:47.6750,lng:16.5850,people:25000,emoji:'🏕️',saved:false,joined:false},
    {id:14,city:'Szentendre',title:'Dunakorzói Művész Séta',cat:'Séta',when:'Augusztus · 18:00',place:'Szentendrei Duna-korzó',lat:47.6680,lng:19.0775,people:4000,emoji:'🎨',saved:false,joined:false},
    {id:15,city:'Balatonfüred',title:'Tagore sétányi Naplemente Séta',cat:'Kultúra',when:'Július · 17:00',place:'Tagore sétány (Balaton part)',lat:46.9555,lng:17.8920,people:6000,emoji:'🌹',saved:false,joined:false},
    {id:16,city:'Kecskemét',title:'Családi Zöld Piknik',cat:'Játék',when:'Szeptember · 10:00',place:'Rákóczi úti Városliget',lat:46.9080,lng:19.6880,people:15000,emoji:'🎡',saved:false,joined:false},
    {id:17,city:'Miskolc',title:'Borsodi Népzenei Találkozó',cat:'Kultúra',when:'Október · 18:00',place:'Miskolctapolca Barlangfürdő park',lat:48.0620,lng:20.7350,people:2200,emoji:'🎻',saved:false,joined:false},
    {id:18,city:'Kaposvár',title:'Rippl-Rónai Sétányi Piknik',cat:'Séta',when:'Szeptember · 15:00',place:'Deseda-tó partja',lat:46.4020,lng:17.7750,people:2500,emoji:'🖼️',saved:false,joined:false},
    {id:19,city:'Orfű',title:'Fishing on Orfű Partmenti Jam',cat:'Játék',when:'Június · 16:00',place:'Pécsi-tó szabadstrand part',lat:46.1415,lng:18.1480,people:12000,emoji:'⛺',saved:false,joined:false}
  ]
};

let state = load();
let page = 'home';
let mobile = false;
let darkMode = localStorage.getItem('jomo-dark-mode') === 'true';
let timer = null;
let mapInstance = null;
let mapMarkers = [];
let userLocation = null;
let locationConsent = false;
let locationPrompted = false;
let mapFilter = 'Összes';
let cityFilter = 'Összes';

function load(){
  try {
    const raw = localStorage.getItem(KEY);
    const saved = raw ? JSON.parse(raw) : {};
    const loadedState = {...structuredClone(seed), ...saved, events: seed.events};
    loadedState.points = Math.min(5000, loadedState.points);
    updateGardenStage(loadedState);
    return loadedState;
  } catch {
    return structuredClone(seed);
  }
}
function save(){ 
  state.points = Math.min(5000, state.points);
  localStorage.setItem(KEY, JSON.stringify(state)); 
}
function esc(v){
  return String(v||'').replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]||c));
}
function toast(msg){
  const t = document.querySelector('#toast');
  if(!t)return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._hide);
  t._hide = setTimeout(()=>t.classList.remove('show'),2200);
}
function setPage(p){
  page=p;
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===p));
  render();
}
function toggleDarkMode(){darkMode=!darkMode;localStorage.setItem('jomo-dark-mode',String(darkMode));render();toast(darkMode?'Sötét mód bekapcsolva':'Világos mód bekapcsolva');}
function fmtTime(s){
  const m=String(Math.floor(s/60)).padStart(2,'0');
  const sec=String(s%60).padStart(2,'0');
  return `${m}:${sec}`;
}
function startTimer(){
  let left=25*60;
  clearInterval(timer);
  renderTimer(left,true);
  timer=setInterval(()=>{
    left--;
    renderTimer(left,true);
    if(left<=0){
      clearInterval(timer);
      state.focusMinutes+=25;
      addPoints(50);
      toast('Kész a 25 perces fókusz. 🌱');
      render();
    }
  },1000);
}
function renderTimer(left,running){
  const el=document.getElementById('timer');
  if(el)el.textContent=fmtTime(left);
  const b=document.getElementById('focusBtn');
  if(b){b.textContent=running?'Fókusz fut…':'25 perc fókusz indítása';b.disabled=running;}
}

function addPoints(pts){
  if(state.points >= 5000){
    toast('Elérted a maximum 5000 pontot! Válts be kuponra! 🎟️');
    return;
  }
  state.points = Math.min(5000, state.points + pts);
  updateGardenStage(state);
  save();
}

function demoFocus(min){
  state.focusMinutes+=min;
  addPoints(min * 2);
  render();
}

function updateGardenStage(st){
  st.points = Math.min(5000, Math.max(0, st.points));
  const thresholds=[0, 200, 500, 1000, 2000, 3500, 5000];
  let stage = 0;
  for(let i = thresholds.length - 1; i >= 0; i--){
    if(st.points >= thresholds[i]){
      stage = i;
      break;
    }
  }
  st.gardenStage = stage;
}

function socialAttempt(app){
  state.points=Math.max(0,state.points-40);
  updateGardenStage(state);
  state.notifications.unshift({source:'JOMO',text:`Megállítottuk a(z) ${app} megnyitását. Pontlevonás: -40 pont.`,time:new Date().toLocaleTimeString('hu-HU',{hour:'2-digit',minute:'2-digit'}),urgent:false});
  save();
  toast(`Tiltott app észlelve (${app})! −40 pont ⚠️`);
  render();
}
function logActivity(type){
  let pts = 0;
  let mins = 0;
  let msg = '';
  if(type === 'book'){ pts = 35; mins = 30; msg = 'Könyv olvasás rögzítve! 📚'; }
  else if(type === 'walk'){ pts = 25; mins = 30; msg = 'Offline séta rögzítve! 🌳'; }
  else if(type === 'sport'){ pts = 50; mins = 45; msg = 'Sport / Edzés rögzítve! ⚽'; }
  else if(type === 'study'){ pts = 40; mins = 40; msg = 'Telefonmentes tanulás! 📝'; }

  state.focusMinutes += mins;
  addPoints(pts);
  toast(msg);
  render();
}
function redeemCoupon(title, cost){
  if(state.points >= cost){
    state.points -= cost;
    updateGardenStage(state);
    save();
    toast(`Sikeres kupon beváltás: ${title}! 🎟️`);
    render();
  } else {
    toast(`Nincs elegendő pontod! (${cost} pont szükséges) 🌿`);
  }
}
function deliverDigest(){
  const kept=state.notifications.filter(n=>n.urgent&&state.urgentFilter);
  const delivered=state.notifications.length-kept.length;
  state.notifications=kept;
  save();
  toast(delivered?`${delivered} értesítés becsomagolva.`:'Nincs új zaj a csomagban.');
  render();
}
function toggleNotif(v){state.urgentFilter=v;save();render();}
function setDigest(v){state.digestMode=v;save();render();}
function toggleEvent(id,action){
  const e=state.events.find(x=>x.id===id);
  if(!e)return;
  if(action==='save')e.saved=!e.saved;
  if(action==='join') {
    e.joined=!e.joined;
    if(e.joined){
      addPoints(60);
      toast('Ott leszel! +60 pont az offline programért 🎉');
    } else {
      state.points = Math.max(0, state.points - 60);
      updateGardenStage(state);
      toast('Részvétel visszavonva (−60 pont)');
    }
  }
  save();
  render();
}
function resetDemo(){
  localStorage.removeItem(KEY);
  state=structuredClone(seed);
  save();
  toast('Demo állapot visszaállítva.');
  render();
}

function realisticGardenVisual(stage){
  const scenes = [
    { title: 'Friss csíra a termékeny földben', badge: '1. Szint: Ébredés', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80' },
    { title: 'Gyökerező zöld palánta', badge: '2. Szint: Növekedés', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80' },
    { title: 'Virágzó kis kert & lombosodás', badge: '3. Szint: Virágzás', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80' },
    { title: 'Teljes pompájú tavaszi liget', badge: '4. Szint: Virágdús oázis', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80' },
    { title: 'Gazdag, burjánzó fás liget', badge: '5. Szint: Érett liget', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80' },
    { title: 'Élő, lüktető erdei ökoszisztéma', badge: '6. Szint: Élő Ökoszisztéma', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80' },
    { title: 'Teljes JOMO Oázis & Pillangó birodalom', badge: '7. Szint: MAX / Csúcsszint', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80' }
  ];
  const current = scenes[stage] || scenes[0];
  return `
    <div style="position: relative; width: 100%; height: 210px; border-radius: 18px; overflow: hidden; box-shadow: 0 16px 32px rgba(0,0,0,0.35); border: 2px solid rgba(255,255,255,0.25);">
      <img src="${current.image}" alt="Kert élethű látvány" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85) contrast(1.1); transform: scale(1.03); transition: transform 0.5s ease;">
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%);"></div>
      <div style="position: absolute; top: 14px; left: 16px; background: rgba(47, 125, 91, 0.95); color: #fff; padding: 5px 12px; border-radius: 99px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">${current.badge}</div>
      <div style="position: absolute; bottom: 16px; left: 18px; right: 18px; color: #fff;">
        <h3 style="margin: 0; font-size: 20px; font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.6);">${current.title}</h3>
        <div style="font-size: 12px; color: #d4ece1; margin-top: 3px; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">4D térhatású élő szimuláció</div>
      </div>
    </div>
  `;
}

function sectionTitle(title,right=''){return `<div class="section-head"><h2>${title}</h2>${right?`<span>${right}</span>`:''}</div>`;}
function appLogo(source){
  const key=String(source||'').toLowerCase();
  const icons={
    instagram:`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.6" cy="6.7" r="1.2" fill="currentColor"/></svg>`,
    messenger:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8C6.6 2.8 2.5 6.7 2.5 12c0 2.7 1.1 5 3.1 6.6V22l3.5-1.9c.9.3 1.9.4 2.9.4 5.4 0 9.5-3.9 9.5-8.5S17.4 2.8 12 2.8Z" fill="currentColor"/><path d="m6.8 14.5 4.1-4.4 2.8 2.2 3.5-2.2-4.1 4.4-2.8-2.2Z" fill="#fff"/></svg>`,
    tiktok:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.1a4.1 4.1 0 1 1-3.3-4v3.2a1.2 1.2 0 1 0 .4 1V3h3c.3 2.3 1.7 3.8 4.1 4.2v3A8.2 8.2 0 0 1 14 8.7Z" fill="currentColor"/></svg>`,
    linkedin:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.3 8.5H2.5V21h2.8V8.5ZM3.9 3a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM21.5 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.8 2V8.5h-2.8V21H13v-6.2c0-1.6.3-3.2 2.3-3.2s2 1.9 2 3.3V21h2.8Z" fill="currentColor"/></svg>`,
    whatsapp:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a8.5 8.5 0 0 0-7.3 12.9l-1 4 4.1-1A8.5 8.5 0 1 0 12 3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 8c-.5 0-.9.6-.9 1.2 0 2 2.6 4.7 4.8 5.4.7.2 1.5-.3 1.8-.9l.2-.8-2-1-.8.8c-.9-.4-1.7-1.2-2.1-2l.6-.7-.9-1.8Z" fill="currentColor"/></svg>`
  };
  return icons[key]||`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 4C11 4 5 8 5 15c0 3 2 5 5 5 6 0 10-8 9-16Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 21c4-6 8-9 13-12" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
}
function notificationRows(){
  return state.notifications.map(n=>{
    const key=String(n.source||'jomo').toLowerCase().replace(/[^a-z0-9-]/g,'');
    return `<div class="notice"><div class="app-logo app-logo-${esc(key)} ${n.urgent?'urgent':''}" title="${esc(n.source)}" aria-label="${esc(n.source)}">${appLogo(n.source)}</div><div class="list-main"><div class="between"><div class="list-title">${esc(n.source)}</div><div class="tiny">${esc(n.time)}</div></div><div class="list-copy">${esc(n.text)}</div></div>${n.urgent?'<span class="urgent-tag">Sürgős</span>':''}</div>`;
  }).join('');
}
function haversineKm(aLat,aLng,bLat,bLng){
  const R=6371;
  const dLat=(bLat-aLat)*Math.PI/180;
  const dLng=(bLng-aLng)*Math.PI/180;
  const x=Math.sin(dLat/2)**2 + Math.cos(aLat*Math.PI/180)*Math.cos(bLat*Math.PI/180)*Math.sin(dLng/2)**2;
  return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));
}
function eventDistance(e){
  const cityStr = e.city || 'Magyarország';
  if(!userLocation) return cityStr;
  const km = haversineKm(userLocation.lat, userLocation.lng, e.lat, e.lng);
  if(km < 1) return `${Math.round(km*1000)} m (${cityStr})`;
  return `${km.toFixed(0)} km (${cityStr})`;
}
function getFilteredEvents(){
  return state.events.filter(e => {
    if(mapFilter === '★ Mentve') {
      if(!e.saved) return false;
    } else if(mapFilter !== 'Összes' && e.cat !== mapFilter) {
      return false;
    }
    const matchCity = cityFilter === 'Összes' || e.city === cityFilter;
    return matchCity;
  });
}
function eventRows(){
  const filtered = getFilteredEvents();
  if(filtered.length === 0){
    return `<div class="empty">Nincs megjeleníthető program ebben a szűrésben. 🌿</div>`;
  }
  return filtered.map(e=>`<div class="event" id="event-row-${e.id}"><div class="icon-box">${e.emoji}</div><div class="list-main"><div class="between"><div class="list-title">${esc(e.title)}</div><div class="tiny">${eventDistance(e)}</div></div><div class="list-copy"><b>${esc(e.city)}</b> · ${esc(e.when)} · ${esc(e.place)} · ${e.people} résztvevő</div><div style="margin-top:9px;display:flex;gap:7px;flex-wrap:wrap"><button class="secondary" onclick="toggleEvent(${e.id},'save')">${e.saved?'★ Mentve':'☆ Mentés'}</button><button class="primary" onclick="toggleEvent(${e.id},'join')">${e.joined?'✓ Ott leszel':'Ott leszek'}</button><button class="secondary" onclick="focusEvent(${e.id})">⌖ Térképen</button></div></div></div>`).join('');
}
function setEventFilter(filter){mapFilter=filter;render();}
function setCityFilter(city){cityFilter=city;render();}

function openLocationConsent(){
  const modal=document.getElementById('locationModal');
  if(modal)modal.classList.remove('hidden');
}
function closeLocationConsent(){document.getElementById('locationModal')?.classList.add('hidden');}
async function allowLocation(){
  try{
    if(window.jomoDesktop?.grantGeolocation) await window.jomoDesktop.grantGeolocation();
    closeLocationConsent();
    navigator.geolocation.getCurrentPosition(pos=>{
      userLocation={lat:pos.coords.latitude,lng:pos.coords.longitude,accuracy:pos.coords.accuracy};
      locationConsent=true;
      toast('Helyzet engedélyezve. A távolságokat kiszámoltuk.');
      render();
    },err=>{
      try{window.jomoDesktop?.revokeGeolocation();}catch{}
      toast(err.code===1?'A helyzetengedélyt nem adtad meg.':'A helyzet most nem érhető el.');
    },{enableHighAccuracy:true,timeout:10000,maximumAge:120000});
  }catch(e){closeLocationConsent();toast('A helyzetengedély most nem érhető el.');}
}
function denyLocation(){closeLocationConsent();toast('Rendben, maradunk a Magyarország alapnézetnél.');}
function useMyLocation(){
  if(locationConsent&&userLocation){focusUser();return;}
  openLocationConsent();
}
function focusUser(){
  if(mapInstance&&userLocation)mapInstance.setView([userLocation.lat,userLocation.lng],13,{animate:true});
}
function resetMapView(){
  if(mapInstance){
    mapInstance.setView(HUNGARY_CENTER, 7, {animate: true});
  }
}
function focusEvent(id){
  const e=state.events.find(x=>x.id===id);
  if(!e||!mapInstance)return;
  mapInstance.setView([e.lat,e.lng],13,{animate:true});
  const item=mapMarkers.find(m=>m.id===id);
  if(item?.marker)item.marker.openPopup();
  document.getElementById(`event-row-${id}`)?.scrollIntoView({behavior:'smooth',block:'center'});
}

function initMap(){
  const el=document.getElementById('jomoMap');
  if(!el || typeof L==='undefined')return;
  if(mapInstance){try{mapInstance.remove();}catch{}mapInstance=null;mapMarkers=[];}
  
  mapInstance=L.map(el,{
    scrollWheelZoom:true,
    zoomControl:true,
    attributionControl:true,
    maxBounds: HUNGARY_BOUNDS,
    maxBoundsViscosity: 0.8,
    minZoom: 6,
    maxZoom: 18
  }).setView(HUNGARY_CENTER, 7);

  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; OpenStreetMap France | Map data &copy; OpenStreetMap contributors'
  }).addTo(mapInstance);

  const filtered=getFilteredEvents();
  filtered.forEach(e=>{
    const marker=L.marker([e.lat,e.lng],{
      icon:L.divIcon({
        className:'jomo-map-marker',
        html:`<span><b>${esc(e.emoji)}</b></span>`,
        iconSize:[42,42],
        iconAnchor:[21,40]
      })
    }).addTo(mapInstance);
    
    marker.bindPopup(`<div style="min-width:210px">
      <div style="font-size:11px;color:#2f7d5b;font-weight:800;text-transform:uppercase">${esc(e.city)}</div>
      <strong>${esc(e.emoji)} ${esc(e.title)}</strong>
      <div style="margin-top:6px;color:#6f817a;font-size:12px">${esc(e.when)} · ${esc(e.place)}</div>
      <div style="margin-top:4px;color:#6f817a;font-size:12px">${e.people} résztvevő · ${eventDistance(e)}</div>
      <button onclick="toggleEvent(${e.id},'join')" style="margin-top:10px;padding:7px 10px;border:0;border-radius:9px;background:#2f7d5b;color:#fff;font-weight:800;cursor:pointer;width:100%">${e.joined?'✓ Ott leszel':'Ott leszek'}</button>
    </div>`);
    
    mapMarkers.push({id:e.id,marker});
  });

  if(userLocation){
    L.circle([userLocation.lat,userLocation.lng],{radius:Math.max(25,userLocation.accuracy||40),color:'#2f7d5b',fillOpacity:.12,weight:2}).addTo(mapInstance);
    L.circleMarker([userLocation.lat,userLocation.lng],{radius:8,color:'#fff',weight:3,fillColor:'#2f7d5b',fillOpacity:1}).addTo(mapInstance).bindPopup('<strong>A te helyzeted</strong>');
  }
  setTimeout(()=>mapInstance?.invalidateSize(),120);
}

function render(){
  document.getElementById('points').textContent=state.points;
  const title={home:'Jó, hogy itt vagy.',noise:'A zaj nem vezet.',garden:'A figyelmedből nő.',offline:'Programok a telefon helyett.',profile:'Te állítod be a határaid.'}[page];
  document.getElementById('pageTitle').textContent=title;
  document.body.classList.toggle('mobile-mode',mobile);
  document.body.classList.toggle('dark-mode',darkMode);
  const themeButton=document.getElementById('themeToggle');
  if(themeButton) themeButton.innerHTML=darkMode?'☀️ Világos mód':'🌙 Sötét mód';
  const app=document.getElementById('app');
  app.innerHTML=mobile?`<div class="mobile-frame"><div class="mobile-screen">${views[page]()}</div></div>`:views[page]();
  if(page==='offline'){
    setTimeout(()=>{
      initMap();
      if(mobile&&!locationConsent&&!locationPrompted){
        locationPrompted=true;
        setTimeout(openLocationConsent,450);
      }
    },0);
  }
}

const views={
  home:()=>{const p=Math.min(state.focusMinutes/60,1)*100;return `<div class="home-intro"><div><span class="pill green">A TE NYUGODT TERED</span><h2>Kevesebb zaj. Több jelenlét.</h2><p>Apró lépésekkel alakíthatod úgy a napodat, hogy arra figyelj, ami igazán fontos.</p></div><div class="home-leaf" aria-hidden="true">🌿</div></div><div class="home-dashboard"><div class="home-main-column"><div class="card hero focus-card"><div class="between"><div><span class="pill green">MAI FÓKUSZ</span><div class="metric">${state.focusMinutes}<small> perc</small></div><div class="muted">A napi 60 perces cél ${Math.round(p)}%-a</div></div><div class="garden-emoji" style="font-size:64px">🌳</div></div><div class="progress"><i style="width:${p}%"></i></div><button class="primary wide" onclick="startTimer()">▶ 25 perc fókusz indítása</button><p class="helper-copy">Fókuszidő alatt pontokat és kerti energiát gyűjtesz.</p></div><div class="home-stats"><div class="stat"><span>Várakozó értesítések</span><b>${state.notifications.length}</b><small>egy helyen átnézheted</small></div><div class="stat"><span>Összegyűjtött pontok</span><b>${state.points}</b><small>jutalmakhoz használhatod</small></div><div class="stat"><span>Aktív sorozat</span><b>${state.streak} nap</b><small>minden nap számít</small></div></div><div class="card home-quick"><div><span class="pill">GYORS MŰVELET</span><h3>Válassz egy következő lépést</h3><p class="muted">Nem kell mindent egyszerre megváltoztatnod.</p></div><div class="quick-actions"><button class="secondary" onclick="demoFocus(5)">＋ 5 perc fókusz</button><button class="secondary" onclick="setPage('noise')">Értesítések rendezése →</button><button class="secondary" onclick="setPage('garden')">Megnézem a kertem →</button></div></div></div><div class="home-side-column"><div class="card home-event-card"><div class="event-art">🎲</div><span class="pill">AJÁNLOTT OFFLINE PROGRAM</span><h3>Telefonmentes társas est</h3><p class="muted">Dunaújváros · Ma · 18 résztvevő</p><button class="secondary wide" onclick="setPage('offline')">Programok megtekintése</button></div><div class="card home-notifications"><div class="between"><h3>Mai értesítések</h3><button class="text-action" onclick="setPage('noise')">Mind →</button></div><p class="muted small-copy">A fontos dolgok egy helyen, a saját idődben.</p><div class="list">${notificationRows().slice(0,3)||'<div class="empty">Most csend van. 🌿</div>'}</div><button class="secondary wide" style="margin-top:12px" onclick="setPage('noise')">Zajcsökkentő megnyitása</button></div><div class="card home-tip"><span>🌱 EMLÉKEZTETŐ</span><p>A pihenés nem elvesztegetett idő. Néha a legjobb lépés az, ha leteszed a telefont.</p></div></div></div>`},
  noise:()=>`<div class="grid"><div><div class="card hero"><span class="pill green">INTELLIGENS SZŰRŐ</span><h2 class="title" style="margin-top:12px">Te döntöd el, mi kap figyelmet.</h2><p class="subtitle">A fontos üzenetek maradhatnak elöl, a többi értesítést pedig nyugodtan átnézheted egy helyen, amikor neked megfelel.</p><div class="grid3" style="margin-top:18px"><div class="stat"><b>2</b><span class="muted">aktív sürgős</span></div><div class="stat"><b>${state.notifications.length}</b><span class="muted">várakozó</span></div><div class="stat"><b>${state.digestMode==='hourly'?'Óránként':'Napi 2×'}</b><span class="muted">digest mód</span></div></div></div>${sectionTitle('Beérkező értesítések','azonnali + csomag')}<div class="card"><div class="list">${notificationRows()||'<div class="empty">Üres a zajdoboz. Jó jel. 🌿</div>'}</div></div></div><div><div class="card"><div class="between"><div><h3 style="margin:0">Sürgősségi szűrő</h3><div class="muted" style="margin-top:3px">Csak az időérzékeny üzenetek jöjjenek át.</div></div><button class="toggle ${state.urgentFilter?'on':''}" onclick="toggleNotif(${!state.urgentFilter})"><i></i></button></div></div><div class="card"><h3 style="margin:0 0 10px">Összevont hírfolyam</h3><div class="tabs"><button class="tab ${state.digestMode==='hourly'?'active':''}" onclick="setDigest('hourly')">Óránként</button><button class="tab ${state.digestMode==='twice'?'active':''}" onclick="setDigest('twice')">2× naponta</button></div><p class="muted" style="line-height:1.5">A lájkok, kommentek és sztori-jelzések nem szakítják meg a napodat. Egy csomagban jelennek meg.</p><button class="primary wide" onclick="deliverDigest()">Digest kézbesítése most</button></div><div class="card"><span class="pill">JOMO SZABÁLY</span><h3 style="margin:11px 0 4px">Azonnali válasz csak annak, aki tényleg vár.</h3><p class="muted">Család, munka és saját kivételek kerülhetnek a sürgős listára. Éles verzióban ezt AI + felülírási szabályok kezelhetik.</p></div></div></div>`,
  garden:()=>{
    const thresholds=[0, 200, 500, 1000, 2000, 3500, 5000];
    const stage = state.gardenStage;
    const prevPts = thresholds[stage];
    const nextPts = stage < 6 ? thresholds[stage + 1] : 5000;
    
    let progressPct = 100;
    if(stage < 6 && nextPts > prevPts){
      progressPct = Math.min(Math.max(((state.points - prevPts) / (nextPts - prevPts)) * 100, 0), 100);
    }

    const isMax = state.points >= 5000;

    return `<div class="grid"><div><div class="card" style="background: linear-gradient(155deg, #1b382b 0%, #0d2118 100%); box-shadow: 0 20px 45px rgba(20,60,40,0.35), inset 0 3px 10px rgba(255,255,255,0.25); border: 2px solid #3c7d5c; border-radius: 28px; padding: 26px; color: #fff; position: relative; overflow: hidden;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span class="pill green" style="background: rgba(47,125,91,0.8); color: #fff; border: 1px solid #5aa783; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">4D ÉLETHŰ OÁZIS</span>
        <strong style="font-size: 18px; color: #8ee2b8; text-shadow: 0 2px 4px rgba(0,0,0,0.5)">${state.points} pont</strong>
      </div>
      ${realisticGardenVisual(stage)}
      <div class="progress" style="margin: 22px 0 12px; height: 14px; background: rgba(255,255,255,0.15); box-shadow: inset 0 2px 4px rgba(0,0,0,0.4)">
        <i style="width:${progressPct}%; background: linear-gradient(90deg, #42b883, #8ee2b8); border-radius: 99px; box-shadow: 0 0 10px rgba(66,184,131,0.6); transition: width 0.4s ease;"></i>
      </div>
      <div class="between"><span style="font-size: 13px; color: #b5d8c6; font-weight: 600;">Következő szinthez: 5000 pont kell</span><span style="font-size: 13px; color: #b5d8c6;">${state.points} / 5000 pont</span></div>
    </div>
    ${isMax ? `<div class="card" style="background: #2d1618; border: 2px solid #e74c3c; color: #ff8e8e; padding: 16px; font-weight: bold; border-radius: 16px; margin-top: 15px; text-align: center;">
      🛑 ELÉRTED AZ 5000 PONTOS MAXIMUMOT! A pontgyűjtés zárolva van, amíg fel nem használod a pontjaidat kuponokra!
    </div>` : ''}
    ${sectionTitle('Offline tevékenység rögzítése','kiegyensúlyozott pontok')}<div class="card" style="background:var(--soft);border-color:#cae4d3;display:grid;gap:10px"><div style="display:flex;justify-content:space-between;align-items:center"><div><b>Könyv olvasás</b><div class="muted" style="font-size:12px">Olvastál egy könyvet offline? (+35 pont)</div></div><button class="primary" onclick="logActivity('book')">Rögzítés 📚</button></div><div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #dce8e1;padding-top:8px"><div><b>Offline séta / Kirándulás</b><div class="muted" style="font-size:12px">Voltál a levegőn telefon nélkül? (+25 pont)</div></div><button class="primary" onclick="logActivity('walk')">Rögzítés 🌳</button></div><div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #dce8e1;padding-top:8px"><div><b>Sport / Edzés</b><div class="muted" style="font-size:12px">Mozogtál a szabadban vagy teremben? (+50 pont)</div></div><button class="primary" onclick="logActivity('sport')">Rögzítés ⚽</button></div><div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #dce8e1;padding-top:8px"><div><b>Telefonmentes tanulás</b><div class="muted" style="font-size:12px">Koncentrált feladatok, leckeírás (+40 pont)</div></div><button class="primary" onclick="logActivity('study')">Rögzítés 📝</button></div></div>${sectionTitle('Kuponok & Jutalomboltra beváltás','kötelező beváltás 5000p-nél')}<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;"><div class="card reward" style="cursor:pointer" onclick="redeemCoupon('Libri 5000 Ft Könyv Utalvány', 1200)"><div><b>5000 Ft Könyv Utalvány</b><div class="muted">−1200 pont</div></div><strong>Libri / Líra</strong></div><div class="card reward" style="cursor:pointer" onclick="redeemCoupon('Kávézó 1 Hónapos Bérlet', 850)"><div><b>Kávézó Bérlet</b><div class="muted">−850 pont</div></div><strong>Napi 1 kávé</strong></div><div class="card reward" style="cursor:pointer" onclick="redeemCoupon('Éves Könyvtári Bérlet', 1500)"><div><b>Éves Könyvtári Bérlet</b><div class="muted">−1500 pont</div></div><strong>Ingyen bérlet</strong></div><div class="card reward" style="cursor:pointer" onclick="redeemCoupon('Koncert & Fesztivál VIP Jegy', 2200)"><div><b>VIP Koncertjegy</b><div class="muted">−2200 pont</div></div><strong>Ingyen belépő</strong></div><div class="card reward" style="cursor:pointer" onclick="redeemCoupon('Színház Páros Belépő', 1800)"><div><b>Színház Páros Jegy</b><div class="muted">−1800 pont</div></div><strong>2 főre ingyen</strong></div><div class="card reward" style="cursor:pointer" onclick="redeemCoupon('Mozi Bérlet (5 alkalom)', 1400)"><div><b>Mozi Bérlet (5x)</b><div class="muted">−1400 pont</div></div><strong>5 mozijegy</strong></div></div></div><div><div class="card hero"><span class="pill">PONTRENDSZÉR & SZABÁLYOK</span><h3 style="margin:8px 0 6px">Hogyan gyűjts pontot?</h3><p class="muted" style="line-height:1.5">• Fókuszálás: +2 pont / perc<br>• Offline esemény részvétel: +60 pont<br>• Sport / Edzés: +50 pont<br>• Tanulás: +40 pont<br>• Könyv olvasás: +35 pont<br>• Séta: +25 pont<br>• Tiltott app (TikTok, Insta): <b>−40 pont</b><br>• <b>Max pontszám: 5000 pont!</b></p></div><div class="card"><h3 style="margin:0 0 8px">Tiltott app szimuláció</h3><p class="muted" style="line-height:1.55">Ha megnyitod a közösségi médiát fókuszidőben, a rendszer észleli és levonja a pontjaidat.</p><button class="secondary wide" onclick="socialAttempt('TikTok')">TikTok megnyitás kísérlet (-40 pont)</button></div></div></div>`
  },
  offline:()=>{
    const cities = ['Összes', 'Balatonfüred', 'Budapest', 'Debrecen', 'Dunaújváros', 'Eger', 'Győr', 'Kaposvár', 'Kecskemét', 'Keszthely', 'Miskolc', 'Orfű', 'Pécs', 'Sopron', 'Szeged', 'Szentendre', 'Veszprém'];
    const joinedEvents = state.events.filter(e => e.joined);
    return `<div class="grid"><div><div class="card"><div class="between"><div><span class="pill green">MAGYARORSZÁG</span><h2 class="title" style="margin-top:11px">Országos offline nagyrendezvények</h2><p class="subtitle">A térkép egész Magyarország területét mutatja a helyi és hazai programokkal.</p></div><div style="font-size:56px">🇭🇺</div></div><div class="location-banner"><div><strong>${locationConsent&&userLocation?'Saját helyzet aktív · a távolságok hozzád igazodnak':'Magyarország teljes nézet · valós helyszínek'}</strong><div class="muted" style="margin-top:3px">${locationConsent?'A pontos helyed nincs elmentve a profilodba.':'Válassz várost vagy böngészd a térképet.'}</div></div><div style="display:flex;gap:6px;"><button class="secondary" onclick="resetMapView()">🇭🇺 Teljes ország</button><button class="secondary" onclick="useMyLocation()">⌖ ${locationConsent?'Saját helyem':'Helyzetem'}</button></div></div><div id="jomoMap" class="real-map"></div><div class="map-help"><span>↔ Húzd a térképet</span><span>＋ / − Zoom</span><span>⌖ Saját helyzet</span><span>● Valós helyszíni programok</span></div></div></div><div><div class="card" style="margin-bottom:15px;background:var(--soft);border-color:#cae4d3;"><h3 style="margin:0 0 6px;color:var(--green)">📌 Hol leszel (Jelenlegi részvétel)</h3>${joinedEvents.length === 0 ? '<div class="muted" style="font-size:13px;">Még nem jelölted meg, hogy hova mész. Kattints az "Ott leszel" gombra egy programnál! (+60 pont)</div>' : `<div style="display:grid;gap:8px;margin-top:8px">${joinedEvents.map(e=>`<div style="background:#fff;padding:10px;border-radius:12px;border:1px solid #dce8e1;display:flex;justify-content:space-between;align-items:center"><div><strong style="font-size:13px;">${esc(e.emoji)} ${esc(e.title)}</strong><div style="font-size:11px;color:var(--muted)">${esc(e.city)} · ${esc(e.when)} · ${esc(e.place)}</div></div><button class="secondary" style="padding:5px 8px;font-size:11px;" onclick="focusEvent(${e.id})">⌖ Mutasd</button></div>`).join('')}</div>`}</div><div style="margin-bottom:12px;display:flex;gap:10px;align-items:center;flex-wrap:wrap"><label style="font-weight:800;font-size:13px;">Város szűrő:</label><select class="city-select" onchange="setCityFilter(this.value)">${cities.map(c=>`<option value="${c}" ${cityFilter===c?'selected':''}>${c}</option>`).join('')}</select></div><div class="tabs" style="margin-bottom:10px">${['Összes','★ Mentve','Kultúra','Mozgás','Séta','Játék'].map(f=>`<button class="tab ${mapFilter===f?'active':''}" onclick="setEventFilter('${f}')">${f}</button>`).join('')}</div><div class="card"><div class="list scrollable-list">${eventRows()}</div></div></div></div>`
  },
  profile:()=>`<div class="grid"><div><div class="card"><div class="between"><div><div class="pill">JOMO KEZDŐ</div><h2 class="title" style="margin-top:12px">Anna</h2><p class="subtitle">${state.streak} napos sorozat · ${state.points} pont · ${state.focusMinutes} fókuszperc</p></div><div style="font-size:60px">🌿</div></div><div class="grid3" style="margin-top:15px"><div class="stat"><b>${state.points}</b><span class="muted">pont</span></div><div class="stat"><b>${state.focusMinutes}</b><span class="muted">perc</span></div><div class="stat"><b>${state.streak}</b><span class="muted">nap</span></div></div></div>${sectionTitle('Megjelenés')}<div class="card appearance-card"><div class="setting between"><div><b>Sötét mód</b><div class="muted">Kímélő, sötétebb színek gyenge fényben.</div></div><button class="toggle ${darkMode?'on':''}" onclick="toggleDarkMode()" aria-label="Sötét mód váltása"><i></i></button></div><button class="secondary wide" onclick="toggleDarkMode()">${darkMode?'☀️ Váltás világos módra':'🌙 Sötét mód bekapcsolása'}</button></div>${sectionTitle('Értesítési beállítások')}<div class="card"><div class="setting between"><div><b>Sürgősségi szűrő</b><div class="muted">Csak valóban időérzékeny üzenet legyen hangos.</div></div><button class="toggle ${state.urgentFilter?'on':''}" onclick="toggleNotif(${!state.urgentFilter})"><i></i></button></div><div class="setting"><b>Normál értesítések</b><div class="muted" style="margin:4px 0 8px">${state.digestMode==='hourly'?'Óránként':'Naponta kétszer'}</div><div class="tabs"><button class="tab ${state.digestMode==='hourly'?'active':''}" onclick="setDigest('hourly')">Óránként</button><button class="tab ${state.digestMode==='twice'?'active':''}" onclick="setDigest('twice')">2× naponta</button></div></div></div></div><div><div class="card"><h3 style="margin:0">Adat & bizalom</h3><p class="muted" style="line-height:1.55">A demo az adatokat helyben, az Electron localStorage-ban tárolja. A pontos helyzetet nem mentjük el.</p><button class="secondary wide" onclick="resetDemo()">Demo állapot visszaállítása</button></div><div class="card"><span class="pill">MOBIL</span><h3 style="margin:10px 0 4px">Ugyanez telefonméretben</h3><p class="muted">A bal oldali kapcsolóval az egész felület mobil app-szerű, keskeny nézetre vált.</p></div></div></div>`
};

document.querySelectorAll('.nav-item').forEach(b=>b.addEventListener('click',()=>setPage(b.dataset.page)));
document.getElementById('modeToggle').addEventListener('click',()=>{
  mobile=!mobile;
  document.getElementById('modeLabel').textContent=mobile?'Asztali nézet':'Mobil nézet';
  render();
  toast(mobile?'Mobil nézet bekapcsolva':'Asztali nézet bekapcsolva');
});
document.getElementById('locationAllow')?.addEventListener('click',allowLocation);
document.getElementById('locationDeny')?.addEventListener('click',denyLocation);
render();