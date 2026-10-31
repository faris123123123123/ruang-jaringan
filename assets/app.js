const D=window.LEARNING_DATA,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];

const PL={fundamental:['encap'],application:['dns'],transport:['handshake','tcpudp'],subnetting:['subnet']};
const pr=(a,b,c)=>`<div class="pr"><b>${a}</b><div>${b}${c?`<small>${c}</small>`:''}</div></div>`;
const P={
osi:()=>`<div class="poster" style="background:var(--c2)"><span class="tag">🧱</span><h3>7 Layer OSI</h3><p class="ps">Kirim: turun dari atas ↓ · Terima: naik dari bawah ↑</p>${[[7,'Application','HTTP, DNS, SMTP','data'],[6,'Presentation','format, kompresi, enkripsi','data'],[5,'Session','buka, jaga, tutup sesi','data'],[4,'Transport','TCP, UDP, port','segment'],[3,'Network','IP, router','packet'],[2,'Data Link','MAC, switch, Ethernet','frame'],[1,'Physical','kabel, fiber, radio','bit']].map(r=>pr(r[0],r[1]+' <span class="pb">'+r[3]+'</span>',r[2])).join('')}<p class="ps" style="margin:6px 0 0">🧠 All People Seem To Need Data Processing</p></div>`,
encap:()=>`<div class="poster" style="background:var(--c4)"><span class="tag">🎁</span><h3>Encapsulation</h3><p class="ps">Data dibungkus berlapis seperti kado, sampai siap dikirim.</p><div class="nest">Frame: Header Ethernet (MAC)<div class="nest">Packet: Header IP (IP sumber/tujuan)<div class="nest">Segment: Header TCP/UDP (port)<div class="nest">Data aplikasi 💌</div></div></div>+ Trailer</div><p class="ps" style="margin-top:10px">Penerima membuka bungkus dari luar ke dalam: <b>decapsulation</b>.</p></div>`,
handshake:()=>`<div class="poster" style="background:var(--c3)"><span class="tag">🤝</span><h3>TCP 3-Way Handshake</h3><p class="ps">Kenalan dulu sebelum ngobrol.</p><div class="two"><div><h4>💻 Client</h4>Mau mulai ya?</div><div><h4>🖥️ Server</h4>Siap!</div></div><div class="ar">1. SYN ➜</div><div class="ar">⬅ 2. SYN + ACK</div><div class="ar">3. ACK ➜</div><p class="ps" style="margin-top:10px">Setelah itu koneksi <b>established</b> dan data boleh mengalir. Ujung koneksi ditutup dengan FIN.</p></div>`,
dns:()=>`<div class="poster" style="background:var(--c1)"><span class="tag">📖</span><h3>Perjalanan DNS</h3><p class="ps">Ketik nama, dapat alamat IP.</p>${[['Browser cache','sudah pernah? langsung pakai'],['Cache OS','cek lokal'],['DNS resolver','tanya atas nama kita'],['Root ➜ TLD ➜ Authoritative','tanya berjenjang'],['IP dikembalikan ke browser','baru buka web server']].map((r,i)=>pr(i+1,r[0],r[1])).join('')}<p class="ps" style="margin-top:8px"><span class="pb">A: IPv4</span><span class="pb">AAAA: IPv6</span><span class="pb">CNAME: alias</span><span class="pb">MX: email</span></p></div>`,
tcpudp:()=>`<div class="poster" style="background:var(--c2)"><span class="tag">⚖️</span><h3>TCP vs UDP</h3><p class="ps">Pilih keandalan atau kecepatan?</p><div class="two"><div><h4>🐢 TCP</h4>Handshake dulu<br>Ada ACK + retransmisi<br>Data berurutan<br>Flow + congestion control<br><b>Web, email, file</b></div><div><h4>🐇 UDP</h4>Langsung kirim<br>Tanpa jaminan<br>Header kecil<br>Latensi rendah<br><b>Game, voice, streaming, DNS</b></div></div></div>`,
devices:()=>`<div class="poster" style="background:var(--c3)"><span class="tag">🔀</span><h3>Hub, Switch, Router</h3><p class="ps">Siapa meneruskan apa, dan berdasarkan apa.</p>${pr('L1','Hub','menyalin sinyal ke semua port')}${pr('L2','Switch','pilih port lewat MAC (switch table)')}${pr('L3','Router','pilih jalur antarjaringan lewat IP (routing table)')}<p class="ps" style="margin-top:6px">Switch = dalam satu LAN. Router = antar jaringan.</p></div>`,
arp:()=>`<div class="poster" style="background:var(--c4)"><span class="tag">🔎</span><h3>ARP: IP ➜ MAC</h3><p class="ps">Host A ingin kirim ke 192.168.1.5 di LAN yang sama.</p>${pr(1,'A menyiarkan: "Siapa pemilik 192.168.1.5?"','broadcast ke semua perangkat')}${pr(2,'Pemilik IP membalas: "Itu aku, MAC-ku AA:BB…"','unicast ke A')}${pr(3,'A menyimpan di ARP table, lalu kirim frame','frame berisi MAC tujuan')}<p class="ps" style="margin-top:6px">Ke subnet lain? Frame dikirim ke MAC <b>gateway</b>.</p></div>`,
dhcp:()=>`<div class="poster" style="background:var(--c1)"><span class="tag">🏷️</span><h3>DHCP: DORA</h3><p class="ps">Cara perangkat dapat IP otomatis.</p>${[['D','Discover','"Ada DHCP server?" (broadcast)'],['O','Offer','server menawarkan IP'],['R','Request','"Aku ambil yang itu"'],['A','Acknowledge','server menyetujui + gateway, DNS, lease']].map(r=>pr(r[0],r[1],r[2])).join('')}</div>`,
subnet:()=>{const z=[['/26 Poli','.0–.63',64,'var(--c1)'],['/27 Lab','.64–.95',32,'var(--c2)'],['/27 Apotek','.96–.127',32,'var(--c4)'],['/27 Radiologi','.128–.159',32,'var(--c1)'],['/29 Server','.160–.167',8,'var(--c2)'],['bebas','.168–.255',88,'#fff8']];return `<div class="poster" style="background:var(--c3)"><span class="tag">🧮</span><h3>Subnet Binus Sehat</h3><p class="ps">Satu blok 192.168.10.0/24 dipecah dengan VLSM (terbesar dulu).</p><div class="bar2">${z.map(x=>`<span style="flex:${x[2]};background:${x[3]}" title="${x[0]}">${x[2]>20?x[0].split(' ')[0]:''}</span>`).join('')}</div>${z.slice(0,5).map(x=>pr(x[2],x[0],x[1])).join('')}<p class="ps" style="margin-top:6px">Rumus: host usable = 2<sup>n</sup> − 2 · block size = 256 − mask oktet.</p></div>`},
binary:()=>`<div class="poster" style="background:var(--c2)"><span class="tag">🔢</span><h3>Bit ➜ Desimal</h3><p class="ps">Klik kotak bit untuk menyalakan 1 atau 0!</p><div class="bits" id="bits">${[128,64,32,16,8,4,2,1].map((w,i)=>`<div class="bit${i<2?' on':''}" data-w="${w}">${i<2?1:0}<small>${w}</small></div>`).join('')}</div><div style="text-align:center;font:800 40px 'Bricolage Grotesque'" id="bv">192</div><p class="ps" style="text-align:center">Jumlahkan bobot bit yang menyala. 11000000 = 192</p></div>`
};
document.addEventListener('click',e=>{const b=e.target.closest('.bit');if(!b)return;b.classList.toggle('on');b.firstChild.textContent=b.classList.contains('on')?1:0;$$('.bit').forEach(x=>0);const w=b.parentElement;const rows=[...document.querySelectorAll('.bits')];rows.forEach(r=>{const v=[...r.children].reduce((a,x)=>a+(x.classList.contains('on')?+x.dataset.w:0),0);r.parentElement.querySelector('#bv').textContent=v})});
const fx=s=>String(s).replace(/(\w)'(\w)/g,"$1’$2");
const EM={osi:['🧱','var(--c3)'],network:['🛣️','var(--c4)'],link:['🔌','var(--c1)'],numerasi:['🔢','var(--c2)'],fundamental:['🌍','var(--c4)'],application:['💬','var(--c1)'],transport:['🚚','var(--c2)'],subnetting:['🧮','var(--c3)']};
let S={};try{S=JSON.parse(localStorage.getItem('rj')||'{}')}catch(e){}
S.done=S.done||{};S.best=S.best||{};
const save=()=>{try{localStorage.setItem('rj',JSON.stringify(S))}catch(e){}};
const prog=l=>Math.round(l.sections.filter((_,i)=>S.done[l.id+i]).length/l.sections.length*100);
const VIEWS=['home','materi','kuis','poster','bengkel'];
function show(v){$$('.view').forEach(x=>x.classList.toggle('on',x.id==='v-'+v));$$('nav button').forEach(b=>b.classList.toggle('on',b.dataset.go===v||(v==='lesson'&&b.dataset.go==='materi')));scrollTo(0,0)}
function go(v){if(VIEWS.includes(v)){if(location.hash!=='#'+v)location.hash=v;else route()}else show(v)}
function route(){const v=location.hash.slice(1);const p=VIEWS.includes(v)?v:'home';if(p==='materi')renderTopics();if(p==='kuis')renderQPick();if(p==='poster')$('#pgrid').innerHTML=Object.keys(P).map(k=>P[k]()).join('');show(p)}
addEventListener('hashchange',route);
$('#th').onclick=()=>{const d=document.documentElement,dark=d.dataset.theme?d.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;d.dataset.theme=dark?'light':'dark'};
document.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(b)go(b.dataset.go)});
function renderTopics(){$('#topics').innerHTML=D.lessons.map((l,i)=>`<button class="card topic" style="background:${EM[l.id][1]};color:#2a2440" data-open="${l.id}"><div class="em">${EM[l.id][0]}</div><h3>${fx(l.title)}</h3><p>${fx(l.desc)}</p><div class="bar"><i style="width:${prog(l)}%"></i></div><small><b>${prog(l)}%</b> sudah dipahami</small></button>`).join('');
$$('[data-open]').forEach(b=>b.onclick=()=>openLesson(b.dataset.open))}
function openLesson(id){const l=D.lessons.find(x=>x.id===id);
$('#lesson').innerHTML=`<button class="back" data-go="materi">← Balik ke daftar materi</button><h1>${EM[id][0]} ${fx(l.title)}</h1><p class="sub" style="margin-bottom:0">${fx(l.desc)}</p><div class="pbar" style="margin-top:16px"><i id="lp"></i></div>
<div class="lg"><aside class="toc"><div class="side">Isi bagian</div><div class="chips">${l.sections.map((s,i)=>`<button data-j="${i}">${i+1}. ${fx(s[0])}</button>`).join('')}</div></aside><div class="lbody">
${l.sections.map((s,i)=>`<div class="card sec" id="s${i}"><h3><span>${i+1}</span>${fx(s[0])}</h3>${s[1].split('\n').map(p=>'<p>'+fx(p)+'</p>').join('')}<label class="done"><input type="checkbox" data-d="${i}" ${S.done[id+i]?'checked':''}> Oke, aku sudah paham bagian ini</label></div>`).join('')}
${(l.posters||PL[id]||[]).length?`<h3 style="margin:30px 0 12px">Poster ringkas 🎨</h3><div class="pgrid" style="grid-template-columns:1fr">${(l.posters||PL[id]).map(k=>P[k]()).join('')}</div>`:''}<div class="row" style="margin-top:26px"><button class="btn" id="tq">Uji pemahaman 🎯</button><button class="btn alt" data-go="materi">Topik lain</button></div><p class="src">Sumber: ${fx(l.source)}</p></div></div>`;
const up=()=>{$('#lp').style.width=prog(l)+'%'};up();
$$('[data-d]').forEach(c=>c.onchange=()=>{S.done[id+c.dataset.d]=c.checked;save();up();if(prog(l)===100&&c.checked)confetti()});
$$('[data-j]').forEach(b=>b.onclick=()=>$('#s'+b.dataset.j).scrollIntoView({behavior:'smooth',block:'center'}));
$$('.toc [data-j]').forEach(b=>b.onclick=()=>$('#s'+b.dataset.j).scrollIntoView({behavior:'smooth',block:'start'}));$('#tq').onclick=()=>startQuiz(id);show('lesson')}
function renderQPick(){$('#qpick').hidden=false;$('#qstage').hidden=true;
$('#qgrid').innerHTML=D.lessons.map(l=>`<button class="card topic" style="background:${EM[l.id][1]};color:#2a2440;min-height:150px" data-q="${l.id}"><div class="em">${EM[l.id][0]}</div><h3>${fx(l.title)}</h3>${S.best[l.id]!=null?`<small>Skor terbaik: <b>${S.best[l.id]}%</b></small>`:'<small>Belum pernah dicoba</small>'}</button>`).join('')+`<button class="card topic" style="min-height:150px" data-q="all"><div class="em">🎲</div><h3>Campur semua</h3><small>10 soal acak dari semua topik</small></button>`;
$$('[data-q]').forEach(b=>b.onclick=()=>startQuiz(b.dataset.q))}
const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
let Q=null;
function startQuiz(id){let src=id==='all'?Object.values(D.questions).flat():D.questions[id];
const pool=shuf(src).slice(0,10).map(q=>({q:q[0],ex:q[4],o:shuf(q[2].map((t,i)=>({t,ok:i===q[3]})))}));
Q={id,pool,i:0,score:0,streak:0,wrong:[],picked:null};
VIEWS.includes('kuis');location.hash!=='#kuis'?(history.replaceState(null,'','#kuis')):0;
$('#qpick').hidden=true;$('#qstage').hidden=false;show('kuis');ask()}
function ask(){const q=Q.pool[Q.i];Q.picked=null;
$('#qstage').innerHTML=`<div class="meta"><span>Soal ${Q.i+1} dari ${Q.pool.length}</span><span>${Q.streak>1?'🔥 '+Q.streak+' beruntun':'Skor '+Q.score}</span></div><div class="pbar" style="margin-top:8px"><i style="width:${Q.i/Q.pool.length*100}%"></i></div>
<div class="q">${fx(q.q)}</div>${q.o.map((o,i)=>`<button class="ans" data-a="${i}"><i>${'ABCD'[i]}</i>${fx(o.t)}</button>`).join('')}<div id="fb"></div>
<div class="row" style="justify-content:space-between;margin-top:14px"><button class="back" id="ex">Udahan dulu</button><button class="btn" id="nx" hidden></button></div>`;
$$('.ans').forEach(b=>b.onclick=()=>pick(+b.dataset.a));$('#ex').onclick=()=>go('kuis')}
function pick(i){if(Q.picked!==null)return;Q.picked=i;const q=Q.pool[Q.i],ok=q.o[i].ok;
$$('.ans').forEach((b,k)=>{b.disabled=true;if(q.o[k].ok)b.classList.add('good');else if(k===i)b.classList.add('wrong')});
if(ok){Q.score++;Q.streak++}else{Q.streak=0;Q.wrong.push(q)}
const yes=['Mantap! 🎉','Yes, tepat!','Kamu paham nih 👏','Benar banget!'],no=['Hampir! Nggak apa-apa.','Belum pas, tapi ini wajar.','Eits, simak ini dulu ya.'];
$('#fb').innerHTML=`<div class="fb ${ok?'':'no'}"><b>${shuf(ok?yes:no)[0]}</b> ${ok?'':'Jawabannya: <b>'+fx(q.o.find(o=>o.ok).t)+'</b>. '}${fx(q.ex)}</div>`;
const n=$('#nx');n.hidden=false;n.textContent=Q.i===Q.pool.length-1?'Lihat hasil 🏁':'Lanjut →';n.onclick=()=>{Q.i++;Q.i>=Q.pool.length?finish():ask()};
if(ok&&Q.streak===3)confetti(14)}
function finish(){const pct=Math.round(Q.score/Q.pool.length*100);if((S.best[Q.id]||0)<pct){S.best[Q.id]=pct;save()}if(pct>=80)confetti();
const msg=pct>=80?'Keren! Kamu udah kuat di topik ini 💪':pct>=50?'Lumayan! Tinggal rapikan beberapa bagian.':'Santai, ini baru pemanasan. Baca materinya sekali lagi, lalu coba lagi ya 🌱';
$('#qstage').innerHTML=`<div class="card" style="text-align:center"><div class="meta" style="justify-content:center">SESI SELESAI</div><div class="score">${pct}%</div><h3>${Q.score} dari ${Q.pool.length} benar</h3><p>${msg}</p>
${Q.wrong.length?`<details style="text-align:left;margin:14px 0"><summary style="cursor:pointer;font-weight:700">Lihat ${Q.wrong.length} soal yang meleset</summary>${Q.wrong.map(w=>`<p><b>${fx(w.q)}</b><br>✔ ${fx(w.o.find(o=>o.ok).t)} — ${fx(w.ex)}</p>`).join('')}</details>`:''}
<div class="row" style="justify-content:center"><button class="btn" id="ag">Main lagi 🔁</button><button class="btn alt" data-go="kuis">Pilih topik lain</button></div></div>`;$('#ag').onclick=()=>startQuiz(Q.id)}
function confetti(n=40){const c=['🎉','✨','💛','🟡','🟣','🩷','📦'];for(let i=0;i<n;i++){const s=document.createElement('span');s.className='cf';s.textContent=c[i%c.length];s.style.left=Math.random()*100+'vw';s.style.animationDelay=Math.random()*.6+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),3200)}}
function calc(){const o=$('#cres'),p=$('#ip').value.trim().split('.').map(Number),n=+$('#px').value;
if(p.length!==4||p.some(x=>!Number.isInteger(x)||x<0||x>255)||!Number.isInteger(n)||n<0||n>32||$('#px').value.trim()===''){o.innerHTML='<div>Hmm, IP-nya belum valid. Contoh: 192.168.10.70 dengan prefix 27 😊</div>';return}
const ip=((p[0]*2**24)+(p[1]<<16)+(p[2]<<8)+p[3])>>>0,size=2**(32-n),net=Math.floor(ip/size)*size,bc=net+size-1,mask=n===0?0:(0xFFFFFFFF<<(32-n))>>>0;
const t=x=>[x>>>24,(x>>>16)&255,(x>>>8)&255,x&255].join('.'),us=n>=31?(n===32?1:2):size-2;
const R=[['Network',t(net)],['Broadcast',t(bc)],['Subnet mask',t(mask)],['Total alamat',size.toLocaleString('id-ID')],['Host usable',us.toLocaleString('id-ID')],['Host pertama',n>=31?'—':t(net+1)],['Host terakhir',n>=31?'—':t(bc-1)],['Block size',size>256?'(lebih dari 1 oktet)':String(size)]];
o.innerHTML=R.map(r=>`<div>${r[0]}<b>${r[1]}</b></div>`).join('')}
$('#ip').oninput=$('#px').oninput=calc;calc();route();