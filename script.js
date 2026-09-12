const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];const rand=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;const pick=a=>a[Math.floor(Math.random()*a.length)];const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));const wait=ms=>new Promise(r=>setTimeout(r,ms));
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}function load(k,f){try{const v=localStorage.getItem(k);return v?JSON.parse(v):f}catch{return f}}

/* ============================ SOUND ============================ */
const SoundEngine={context:null,master:null,sfxVolume:.6,enabled:true,init(){if(this.context)return;const A=window.AudioContext||window.webkitAudioContext;if(!A)return;this.context=new A();this.master=this.context.createGain();this.master.gain.value=.7;this.master.connect(this.context.destination)},resume(){this.init();if(this.context?.state==='suspended')this.context.resume()},tone(f=440,d=.15,t='sine',v=.18,delay=0){if(!this.enabled)return;this.resume();if(!this.context)return;const now=this.context.currentTime+delay,o=this.context.createOscillator(),g=this.context.createGain();o.type=t;o.frequency.setValueAtTime(f,now);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(Math.max(.001,v*this.sfxVolume),now+.015);g.gain.exponentialRampToValueAtTime(.0001,now+d);o.connect(g);g.connect(this.master);o.start(now);o.stop(now+d+.04)},chord(notes,d=.3,t='sine',v=.12){notes.forEach((n,i)=>this.tone(n,d,t,v,i*.025))},noise(d=.15,v=.12){if(!this.enabled)return;this.resume();const c=this.context;if(!c)return;const b=c.createBuffer(1,c.sampleRate*d,c.sampleRate),data=b.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;const s=c.createBufferSource(),g=c.createGain();s.buffer=b;g.gain.setValueAtTime(v*this.sfxVolume,c.currentTime);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+d);s.connect(g);g.connect(this.master);s.start()}};

const S={
click(){SoundEngine.tone(620,.07,'sine',.12)},
coin(){SoundEngine.tone(880,.08,'square',.11);SoundEngine.tone(1320,.12,'square',.08,.07)},
xp(){SoundEngine.tone(523,.09,'sine',.08);SoundEngine.tone(659,.1,'sine',.08,.06);SoundEngine.tone(784,.14,'sine',.09,.12)},
level(){SoundEngine.chord([523,659,784],.3,'triangle',.12);SoundEngine.tone(1046,.5,'sine',.14,.24)},
attack(){SoundEngine.tone(180,.12,'sawtooth',.13);SoundEngine.tone(260,.15,'square',.06,.04)},
critical(){SoundEngine.tone(880,.1,'square',.14);SoundEngine.tone(1174,.16,'square',.12,.06);SoundEngine.tone(1568,.25,'sine',.12,.12)},
ultimate(){[220,330,440,660,880].forEach((n,i)=>SoundEngine.tone(n,.32,'sawtooth',.1,i*.08))},
shield(){SoundEngine.chord([440,554,659],.4,'sine',.08)},
heal(){[523,659,784,1046].forEach((n,i)=>SoundEngine.tone(n,.2,'sine',.08,i*.07))},
perfect(){SoundEngine.tone(1046,.11,'sine',.14);SoundEngine.tone(1568,.14,'sine',.09,.05)},
great(){SoundEngine.tone(880,.1,'triangle',.1)},
good(){SoundEngine.tone(660,.09,'triangle',.07)},
miss(){SoundEngine.tone(150,.16,'sawtooth',.07)},
correct(){SoundEngine.tone(660,.1,'sine',.11);SoundEngine.tone(990,.16,'sine',.1,.08)},
wrong(){SoundEngine.tone(220,.18,'square',.07);SoundEngine.tone(165,.22,'square',.06,.09)},
victory(){[523,659,784,1046].forEach((n,i)=>SoundEngine.tone(n,.35,'triangle',.11,i*.13))},
defeat(){[392,330,262,196].forEach((n,i)=>SoundEngine.tone(n,.3,'triangle',.07,i*.14))},
jump(){SoundEngine.tone(280,.1,'square',.06);SoundEngine.tone(560,.1,'square',.04,.06)},
mine(){SoundEngine.noise(.07,.09);SoundEngine.tone(110,.07,'square',.05)},
treasure(){[784,988,1174,1568].forEach((n,i)=>SoundEngine.tone(n,.2,'sine',.09,i*.07))},
gacha(){for(let i=0;i<7;i++)SoundEngine.tone(300+i*100,.16,'triangle',.07,i*.08)}
};

function crowd(strength=.5){
for(let i=0;i<6+strength*8;i++)
setTimeout(
()=>SoundEngine.noise(rand(15,35)/100,.015+Math.random()*.02),
Math.random()*500
);
}

document.addEventListener('pointerdown',()=>SoundEngine.resume(),{once:true});

$('#soundToggle').onclick=()=>{
SoundEngine.enabled=!SoundEngine.enabled;
$('#soundToggle').textContent=SoundEngine.enabled?'🔊':'🔇';
if(SoundEngine.enabled)S.click();
};

/* ============================ DATA ============================ */

const instruments=[
['Guitar','Strings','🎸',78,58,72,76,'strum'],
['Ukulele','Strings','🪕',86,38,70,82,'strum'],
['Piano','Keys','🎹',62,88,92,70,'keys'],
['Flute','Woodwind','🪈',58,48,96,82,'wind'],
['Drums','Percussion','🥁',92,72,38,96,'drums'],
['Clarinet','Woodwind','🎶',60,64,88,72,'wind'],
['Trumpet','Brass','🎺',88,54,68,74,'brass'],
['Violin','Strings','🎻',72,52,98,84,'bow'],
['Saxophone','Woodwind','🎷',76,62,88,78,'wind'],
['Cello','Strings','🎻',70,84,94,58,'bow'],
['Xylophone','Percussion','🔔',68,50,76,92,'mallet'],
['Trombone','Brass','🎺',84,70,62,64,'brass'],
['Synthesizer','Keys','🎛️',74,58,90,86,'keys'],
['French Horn','Brass','📯',72,82,86,58,'brass'],
['Oboe','Woodwind','🎼',64,56,94,68,'wind'],
['Digital Piano','Keys','🎹',68,78,88,78,'keys'],
['Organ','Keys','🎹',76,92,90,48,'keys'],
['Drum Machine','Percussion','🎛️',82,54,58,100,'pads'],
['Electric Guitar','Strings','🎸',94,48,68,88,'strum'],
['Bass Guitar','Strings','🎸',86,76,54,90,'pluck'],
['Harp','Strings','🪕',52,64,100,72,'pluck'],
['Banjo','Strings','🪕',82,44,64,94,'pluck'],
['Mandolin','Strings','🪕',80,46,78,90,'pluck'],
['Double Bass','Strings','🎻',82,90,72,54,'bow'],
['Accordion','Keys','🪗',72,74,82,78,'bellows'],
['Keytar','Keys','🎹',86,46,76,92,'keys'],
['Harpsichord','Keys','🎹',70,60,92,80,'keys'],
['Marimba','Percussion','🔔',66,58,84,94,'mallet'],
['Timpani','Percussion','🥁',90,86,42,72,'drums'],
['Bongos','Percussion','🥁',78,42,54,98,'drums'],
['Congas','Percussion','🥁',82,58,50,94,'drums'],
['Tambourine','Percussion','🪘',70,34,58,100,'shake'],
['Steel Pan','Percussion','🛢️',68,56,86,88,'mallet'],
['Tuba','Brass','🎺',90,94,54,38,'brass'],
['Euphonium','Brass','🎺',76,84,78,54,'brass'],
['Cornet','Brass','🎺',84,58,74,76,'brass'],
['Piccolo','Woodwind','🪈',66,32,96,92,'wind'],
['Bassoon','Woodwind','🎼',68,86,84,48,'wind'],
['Recorder','Woodwind','🪈',70,44,78,84,'wind'],
['Erhu','World','🎻',74,54,98,82,'bow'],
['Guzheng','World','🎶',78,62,96,88,'pluck'],
['Pipa','World','🪕',84,50,88,92,'pluck'],
['Kalimba','World','🎵',58,60,90,86,'pluck'],
['Sitar','World','🪕',76,64,96,80,'pluck'],
['Shamisen','World','🪕',88,48,74,92,'pluck']
].map((x,i)=>({
name:x[0],
family:x[1],
icon:x[2],
attack:x[3],
defense:x[4],
melody:x[5],
rhythm:x[6],
play:x[7],
price:i===0?0:220+i*95
}));

const getInstrument=n=>instruments.find(i=>i.name===n)||instruments[0];

const moveSets={
strum:[
['Power Strum','attack',1],
['Rapid Riff','rhythm',.9],
['Harmony Guard','shield',0],
['Dragon Solo','ultimate',1.8]
],

keys:[
['Power Chord','attack',1],
['Rapid Keys','rhythm',.9],
['Sustain Shield','shield',0],
['Grand Crescendo','ultimate',1.8]
],

drums:[
['Power Beat','attack',1],
['Drum Roll','rhythm',.95],
['Rhythm Barrier','shield',0],
['Thunder Beat','ultimate',1.85]
],

wind:[
['Focused Note','attack',1],
['Rapid Scale','rhythm',.9],
['Breath Heal','heal',0],
['Cyclone Symphony','ultimate',1.8]
],

brass:[
['Brass Blast','attack',1],
['Fanfare Rush','rhythm',.92],
['Royal Guard','shield',0],
['Solar Fanfare','ultimate',1.85]
],

bow:[
['Power Bow','attack',1],
['Rapid Bow','rhythm',.92],
['Harmony Strings','heal',0],
['Phoenix Symphony','ultimate',1.8]
],

mallet:[
['Mallet Strike','attack',1],
['Scale Rush','rhythm',.95],
['Resonance','shield',0],
['Rainbow Cascade','ultimate',1.8]
],

pads:[
['Beat Drop','attack',1],
['Pad Rush','rhythm',.98],
['Bass Sequence','shield',0],
['Mega Beat Drop','ultimate',1.9]
],

pluck:[
['Crystal Pluck','attack',1],
['Finger Rush','rhythm',.95],
['Resonance','heal',0],
['Starlight Cascade','ultimate',1.82]
],

bellows:[
['Squeeze Beat','attack',1],
['Polka Rush','rhythm',.95],
['Bellows Guard','shield',0],
['Festival Frenzy','ultimate',1.85]
],

shake:[
['Rhythm Shake','attack',1],
['Jingle Rush','rhythm',.98],
['Tempo Guard','shield',0],
['Carnival Storm','ultimate',1.8]
]
};

function playInstrument(name,note=440){
const p=getInstrument(name).play;

const map={
strum:['triangle',.22],
keys:['sine',.3],
drums:['square',.1],
wind:['sine',.42],
brass:['sawtooth',.28],
bow:['triangle',.5],
mallet:['sine',.15],
pads:['square',.16],
pluck:['triangle',.18],
bellows:['sawtooth',.38],
shake:['square',.08]
};

if(p==='drums'||p==='shake')
SoundEngine.noise(.12,.12);

const [t,d]=map[p]||['sine',.2];

SoundEngine.tone(note,d,t,.08);
}

const defaultProfile={
name:'',
level:1,
xp:0,
totalXp:0,
coins:500,
dust:0,

owned:[
'Guitar'
],

equipped:'Guitar',

mastery:{},

instrumentUpgrades:{},

instrumentEvolutions:{},

wins:0,
losses:0,

avatar:{
preset:'Hero',
skin:'#dca57b',
hair:'#201915',
outfit:'#19345b'
},

inventory:[],

equipmentInventory:[
{
name:'Starter Headphones',
slot:'Head',
attack:1,
defense:0
},
{
name:'Canvas Jacket',
slot:'Body',
attack:0,
defense:2
}
],

equippedGear:{},

pets:[],

petEggs:[],

equippedPet:null,

materials:{},

quests:{},

rpg:{
zone:0,
x:1,
y:1,
hp:100,
maxHp:100,
storyStep:0
},

dailyRewards:{
lastClaim:'',
streak:0
},

skillTree:{
power1:0,
power2:0,
power3:0,

rhythm1:0,
rhythm2:0,
rhythm3:0,

harmony1:0,
harmony2:0,
harmony3:0
}
};

let profile={
...defaultProfile,
...load('musicverseProfile',{})
};

profile.avatar={
...defaultProfile.avatar,
...(profile.avatar||{})
};

profile.owned=
Array.isArray(profile.owned)
?profile.owned
:['Guitar'];

if(!profile.owned.includes('Guitar'))
profile.owned.unshift('Guitar');

profile.mastery=
profile.mastery||{};

profile.inventory=
profile.inventory||[];

profile.instrumentUpgrades=
profile.instrumentUpgrades||{};

profile.instrumentEvolutions=
profile.instrumentEvolutions||{};

profile.equipmentInventory=
Array.isArray(profile.equipmentInventory)
?profile.equipmentInventory
:defaultProfile.equipmentInventory;

profile.equippedGear=
profile.equippedGear||{};

profile.pets=
Array.isArray(profile.pets)
?profile.pets
:[];

profile.petEggs=
Array.isArray(profile.petEggs)
?profile.petEggs
:[];

profile.materials=
profile.materials||{};

profile.quests=
profile.quests||{};

profile.rpg={
...defaultProfile.rpg,
...(profile.rpg||{})
};

profile.dailyRewards={
...defaultProfile.dailyRewards,
...(profile.dailyRewards||{})
};

profile.skillTree={
...defaultProfile.skillTree,
...(profile.skillTree||{})
};

profile.coins=
Math.max(
0,
Number(profile.coins)||0
);

function persist(){
save(
'musicverseProfile',
profile
);
}

function toast(t){

const el=
$('#toast');

el.textContent=t;

el.classList.add(
'show'
);

clearTimeout(
toast.t
);

toast.t=
setTimeout(
()=>el.classList.remove('show'),
2200
);
}

function getPlayerXPNeeded(){

return Math.round(
100+
(profile.level-1)*35
);

}

function addXP(amount){

amount=
Math.max(
0,
Math.round(amount)
);

profile.xp+=amount;

profile.totalXp+=amount;

let levels=0;

let needed=
getPlayerXPNeeded();

while(
profile.xp>=needed
){

profile.xp-=needed;

profile.level++;

profile.coins+=20;

levels++;

needed=
getPlayerXPNeeded();

}

persist();

updateProfileUI();

renderLeaderboard();

if(
typeof renderSkillTree==='function'
)
renderSkillTree();

if(levels){

S.level();

toast(
`🎉 Level ${profile.level}! +20 Coins`
);

}else if(amount){

S.xp();

}

return amount;
}

function addMastery(
name,
amount
){

profile.mastery[name]=
(profile.mastery[name]||0)
+
Math.max(
0,
Math.round(amount)
);

persist();
}

function getInstrumentUpgradeData(
name
){

if(
!profile.instrumentUpgrades[name]
){

profile.instrumentUpgrades[name]={
level:1,
xp:0
};

}

return profile.instrumentUpgrades[name];
}

function getInstrumentXPNeeded(
name
){

const d=
getInstrumentUpgradeData(
name
);

return Math.round(
120+
(d.level-1)*90
);
}

function addInstrumentXP(
name,
amount
){

const d=
getInstrumentUpgradeData(
name
);

if(
d.level>=20
)
return;

d.xp+=
Math.max(
0,
Math.round(amount)
);

persist();

if(
d.xp>=
getInstrumentXPNeeded(name)
){

toast(
`🎵 ${name} can be upgraded!`
);

}

renderInstruments();
}

function upgradeInstrument(
name
){

const d=
getInstrumentUpgradeData(
name
);

const need=
getInstrumentXPNeeded(
name
);

if(
d.level>=20
){

return toast(
`${name} is already max level!`
);

}

if(
d.xp<need
){

return toast(
`Need ${need-d.xp} more Instrument EXP.`
);

}

d.xp-=need;

d.level++;

persist();

S.level();

toast(
`🎉 ${name} upgraded to Level ${d.level}!`
);

renderInstruments();

refreshBattle(
false
);

renderEvolutionPanel();
}

function getEvolutionBonus(
name
){

const evo=
profile.instrumentEvolutions[name];

return evo
?1.1
:1;
}

function getGearBonuses(){

return Object
.values(
profile.equippedGear||{}
)
.reduce(
(a,g)=>{

if(g){

a.attack+=g.attack||0;
a.defense+=g.defense||0;
a.melody+=g.melody||0;
a.rhythm+=g.rhythm||0;

}

return a;

},
{
attack:0,
defense:0,
melody:0,
rhythm:0
}
);

}

function getPetBonus(){

const p=
profile.pets.find(
x=>x.id===profile.equippedPet
);

if(!p){

return{
attack:0,
defense:0,
melody:0,
rhythm:0
};

}

const level=
p.level||1;

const base=
Math.max(
1,
Math.floor(level/2)
);

return p.type==='attack'
?{
attack:base,
defense:0,
melody:0,
rhythm:0
}

:p.type==='melody'
?{
attack:0,
defense:0,
melody:base,
rhythm:0
}

:p.type==='defense'
?{
attack:0,
defense:base,
melody:0,
rhythm:0
}

:{
attack:base,
defense:base,
melody:base,
rhythm:base
};

}

function getUpgradedInstrument(
name
){

const base=
getInstrument(
name
);

const u=
getInstrumentUpgradeData(
name
);

const mult=
(
1+
(u.level-1)*.01
)
*
getEvolutionBonus(
name
);

const g=
getGearBonuses();

const p=
getPetBonus();

return{
...base,

attack:
Math.round(
base.attack*mult+
g.attack+
p.attack
),

defense:
Math.round(
base.defense*mult+
g.defense+
p.defense
),

melody:
Math.round(
base.melody*mult+
g.melody+
p.melody
),

rhythm:
Math.round(
base.rhythm*mult+
g.rhythm+
p.rhythm
)
};

}

function addPetXP(
id,
amount
){

const p=
profile.pets.find(
x=>x.id===id
);

if(!p)
return;

const petBonus=
typeof getSkillBonuses==='function'
?getSkillBonuses().petXpPct
:0;

amount=
Math.round(
amount*
(1+petBonus)
);

p.xp=
(p.xp||0)
+
Math.max(
0,
Math.round(amount)
);

let need=
(p.level||1)*40;

while(
p.xp>=need &&
p.level<20
){

p.xp-=need;

p.level++;

need=
p.level*40;

toast(
`🐾 ${p.name} reached Level ${p.level}!`
);

}

persist();

renderPets();
}

function reward(
xp,
coins=0,
msg='Reward earned!'
){

addXP(
xp
);

profile.coins+=coins;

persist();

updateProfileUI();

if(coins)
S.coin();

toast(
`${msg} +${xp} EXP${coins?` • +${coins} Coins`:''}`
);

}

function updateProfileUI(){

[
'coinTop',
'heroCoins',
'gachaCoins'
]
.forEach(
id=>
$('#'+id)&&
(
$('#'+id).textContent=
profile.coins.toLocaleString()
)
);

$('#levelTop').textContent=
profile.level;

$('#heroName').textContent=
profile.name||'Player';

$('#heroLevel').textContent=
profile.level;

$('#heroDust').textContent=
profile.dust;

$('#gachaDust').textContent=
profile.dust;

$('#heroLifetime').textContent=
profile.totalXp.toLocaleString();

const needed=
getPlayerXPNeeded();

$('#xpText').textContent=
`${profile.xp} / ${needed}`;

$('#xpFill').style.width=
`${Math.min(
100,
profile.xp/needed*100
)}%`;

document.documentElement.style.setProperty(
'--avatar-skin',
profile.avatar.skin
);

document.documentElement.style.setProperty(
'--avatar-outfit',
profile.avatar.outfit
);

}

/* ============================ SETUP ============================ */

function setupProfile(){

const presets=[
'Hero',
'Swift',
'Power',
'Star',
'Neo',
'Legend'
];

const skins=[
['Light','#f2c8a8'],
['Warm','#dca57b'],
['Tan','#bd8058'],
['Deep','#8d5d42'],
['Dark','#5d3a2c']
];

const hairs=[
['Black','#151515'],
['Dark Brown','#201915'],
['Brown','#4c2e20'],
['Blonde','#c49a5a'],
['Silver','#aeb6c0']
];

const outfits=[
['Royal Navy','#19345b'],
['Crimson','#6c2636'],
['Emerald','#1f5a48'],
['Purple','#52376f'],
['Midnight','#111827']
];

$('#avatarPresetSelect').innerHTML=
presets
.map(
x=>`<option>${x}</option>`
)
.join('');

$('#skinSelect').innerHTML=
skins
.map(
x=>`<option value="${x[1]}">${x[0]}</option>`
)
.join('');

$('#hairSelect').innerHTML=
hairs
.map(
x=>`<option value="${x[1]}">${x[0]}</option>`
)
.join('');

$('#outfitSelect').innerHTML=
outfits
.map(
x=>`<option value="${x[1]}">${x[0]}</option>`
)
.join('');

$('#avatarPresetSelect').value=
profile.avatar.preset;

$('#skinSelect').value=
profile.avatar.skin;

$('#hairSelect').value=
profile.avatar.hair;

$('#outfitSelect').value=
profile.avatar.outfit;

const prev=()=>{

$('#previewHead').style.background=
$('#skinSelect').value;

$('#previewHair').style.background=
$('#hairSelect').value;

$('#previewBody').style.background=
$('#outfitSelect').value;

$$(
'.preview-arm,.preview-leg'
)
.forEach(
x=>
x.style.background=
$('#outfitSelect').value
);

};

[
'avatarPresetSelect',
'skinSelect',
'hairSelect',
'outfitSelect'
]
.forEach(
id=>
$('#'+id).onchange=
prev
);

prev();

if(
!profile.name
){

$('#setupOverlay')
.classList
.remove(
'hidden'
);

}

$('#startBtn').onclick=()=>{

const n=
$('#playerNameInput')
.value
.trim();

if(!n){

$('#setupError').textContent=
'Please enter a stage name.';

return;

}

profile.name=n;

profile.avatar={
preset:
$('#avatarPresetSelect').value,

skin:
$('#skinSelect').value,

hair:
$('#hairSelect').value,

outfit:
$('#outfitSelect').value
};

persist();

$('#setupOverlay')
.classList
.add(
'hidden'
);

updateProfileUI();

refreshBattle(
true
);

S.victory();

};

$('#playerNameInput')
.addEventListener(
'keydown',
e=>{

if(
e.key==='Enter'
)
$('#startBtn').click();

}
);

}
