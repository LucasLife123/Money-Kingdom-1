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
/* ============================ INSTRUMENTS ============================ */
let activeFamily='All';

function renderFamilies(){
  const fam=[
    'All',
    ...new Set(
      instruments.map(
        i=>i.family
      )
    )
  ];

  $('#familyTabs').innerHTML=
    fam
      .map(
        f=>
          `
          <button
            class="${f===activeFamily?'active':''}"
            data-family="${f}"
          >
            ${f}
          </button>
          `
      )
      .join('');

  $$('[data-family]')
    .forEach(
      b=>
        b.onclick=
          ()=>{
            activeFamily=
              b.dataset.family;

            renderFamilies();

            renderInstruments();
          }
    );
}


function renderInstruments(){

  const q=
    $('#instrumentSearch')
      .value
      .toLowerCase();


  const list=
    instruments
      .filter(
        i=>
          (
            activeFamily==='All' ||
            i.family===activeFamily
          )
          &&
          i.name
            .toLowerCase()
            .includes(q)
      );


  $('#instrumentGrid').innerHTML=
    list
      .map(
        i=>{

          const owned=
            profile.owned.includes(
              i.name
            );


          const eq=
            profile.equipped===
            i.name;


          const u=
            getInstrumentUpgradeData(
              i.name
            );


          const need=
            getInstrumentXPNeeded(
              i.name
            );


          const up=
            getUpgradedInstrument(
              i.name
            );


          const evo=
            profile.instrumentEvolutions[
              i.name
            ];


          return `

            <article
              class="
                instrument-card
                ${eq?'equipped':''}
              "
            >

              <div class="instrument-icon">
                ${i.icon}
              </div>


              <h3>
                ${
                  evo
                    ?evo.name
                    :i.name
                }
              </h3>


              <p>

                ${i.family}

                • Mastery

                ${
                  profile.mastery[
                    i.name
                  ]||0
                }

                ${
                  evo
                    ?' • EVOLVED'
                    :''
                }

              </p>


              ${
                owned

                ?`
                <div class="instrument-level-row">

                  <strong>
                    Level ${u.level}
                  </strong>

                  <span>

                    ${
                      u.level>=20

                        ?'MAX'

                        :`${u.xp} / ${need} EXP`
                    }

                  </span>

                </div>


                <div class="instrument-xp-bar">

                  <i
                    style="
                      width:${
                        u.level>=20

                          ?100

                          :Math.min(
                            100,
                            u.xp/
                            need*
                            100
                          )
                      }%
                    "
                  ></i>

                </div>
                `

                :''
              }


              <div class="stat-line">

                <span>
                  ATK ${up.attack}
                </span>

                <span>
                  DEF ${up.defense}
                </span>

                <span>
                  MEL ${up.melody}
                </span>

                <span>
                  RHY ${up.rhythm}
                </span>

              </div>


              <div class="instrument-actions">

                ${
                  owned

                  ?`

                  <button
                    class="
                      btn
                      ${eq?'gold':'ghost'}
                    "
                    data-equip="${i.name}"
                  >

                    ${
                      eq
                        ?'Equipped'
                        :'Equip'
                    }

                  </button>


                  <button
                    class="
                      btn
                      ${
                        u.xp>=need &&
                        u.level<20

                          ?'gold'
                          :'ghost'
                      }
                    "
                    data-upgrade-instrument="${i.name}"

                    ${
                      u.xp<need ||
                      u.level>=20

                        ?'disabled'
                        :''
                    }
                  >

                    ${
                      u.level>=20
                        ?'MAX'
                        :'Upgrade'
                    }

                  </button>

                  `

                  :`

                  <button
                    class="btn gold"
                    data-buy="${i.name}"
                  >

                    🪙 ${i.price}

                  </button>

                  `
                }

              </div>

            </article>

          `;

        }
      )
      .join('');


  $$('[data-buy]')
    .forEach(
      b=>
        b.onclick=
          ()=>{

            const i=
              getInstrument(
                b.dataset.buy
              );


            if(
              profile.coins<
              i.price
            ){

              return toast(
                'Not enough coins.'
              );

            }


            profile.coins-=
              i.price;


            profile.owned.push(
              i.name
            );


            profile.equipped=
              i.name;


            persist();

            updateProfileUI();

            renderInstruments();

            refreshBattle(
              true
            );

            S.coin();

          }
    );


  $$('[data-equip]')
    .forEach(
      b=>
        b.onclick=
          ()=>{

            profile.equipped=
              b.dataset.equip;


            persist();

            renderInstruments();

            refreshBattle(
              true
            );

            renderEvolutionPanel();

            S.click();

          }
    );


  $$(
    '[data-upgrade-instrument]'
  )
  .forEach(
    b=>
      b.onclick=
        ()=>
          upgradeInstrument(
            b.dataset.upgradeInstrument
          )
  );


  renderBattleInstrumentSelect();

}


$('#instrumentSearch').oninput=
  renderInstruments;


function renderBattleInstrumentSelect(){

  const old=
    $('#battleInstrumentSelect')
      .value;


  $('#battleInstrumentSelect')
    .innerHTML=

      profile.owned
        .map(
          n=>
            `
            <option
              ${
                n===profile.equipped
                  ?'selected'
                  :''
              }
            >
              ${n}
            </option>
            `
        )
        .join('');


  if(
    profile.owned.includes(
      old
    )
  ){

    $('#battleInstrumentSelect')
      .value=
        old;

  }

}


$('#battleInstrumentSelect')
  .onchange=
    ()=>{

      profile.equipped=
        $('#battleInstrumentSelect')
          .value;


      persist();

      renderInstruments();

      refreshBattle(
        true
      );

    };


/* ============================ SOLO BATTLE ============================ */

let battle={};


const botNames=[
  'BeatKnight',
  'PianoNova',
  'RhythmFox',
  'StringStorm',
  'TempoAce',
  'ChordKing',
  'MelodyMint',
  'BassOrbit',
  'JazzPixel'
];


function refreshBattle(
  newEnemy=false
){

  const pi=
    getInstrument(
      profile.equipped
    );


  if(
    newEnemy ||
    !battle.enemy
  ){

    const ei=
      pick(
        instruments
      );


    battle={

      playerHp:
        Math.round(
          100+
          pi.defense*.4
        ),

      playerMax:
        Math.round(
          100+
          pi.defense*.4
        ),

      enemyHp:
        Math.round(
          100+
          ei.defense*.4
        ),

      enemyMax:
        Math.round(
          100+
          ei.defense*.4
        ),

      enemy:{
        name:
          pick(
            botNames
          ),

        instrument:
          ei.name
      },

      energy:0,

      shield:false,

      busy:false

    };

  }


  $('#playerBattleName')
    .textContent=
      profile.name||
      'Player';


  $('#playerInstrumentLabel')
    .textContent=
      profile.equipped;


  $('#cpuBattleName')
    .textContent=
      battle.enemy.name;


  $('#cpuInstrumentLabel')
    .textContent=
      battle.enemy.instrument;


  renderSoloBattle();

}


function renderSoloBattle(){

  const pi=
    getInstrument(
      profile.equipped
    );


  const moves=
    moveSets[
      pi.play
    ]||
    moveSets.strum;


  $('#playerHpFill')
    .style.width=
      `${
        100*
        battle.playerHp/
        battle.playerMax
      }%`;


  $('#cpuHpFill')
    .style.width=
      `${
        100*
        battle.enemyHp/
        battle.enemyMax
      }%`;


  $('#playerHpText')
    .textContent=
      `${battle.playerHp} / ${battle.playerMax}`;


  $('#cpuHpText')
    .textContent=
      `${battle.enemyHp} / ${battle.enemyMax}`;


  $('#energyPips')
    .innerHTML=

      [0,1,2]
        .map(
          i=>
            `
            <i
              class="
                ${
                  i<battle.energy
                    ?'on'
                    :''
                }
              "
            ></i>
            `
        )
        .join('');


  $('#moveButtons')
    .innerHTML=

      moves
        .map(
          (
            m,
            i
          )=>
            `
            <button
              class="
                move-btn
                ${i===3?'ultimate':''}
              "
              data-solo-move="${i}"

              ${
                battle.busy ||
                (
                  i===3 &&
                  battle.energy<3
                )

                  ?'disabled'
                  :''
              }
            >

              <strong>
                ${m[0]}
              </strong>

              <span>

                ${
                  i===3

                    ?'ULTIMATE • 3 ENERGY'

                    :m[1]
                      .toUpperCase()
                }

              </span>

              <small>

                ${
                  m[1]==='heal'

                    ?'Restore HP'

                    :m[1]==='shield'

                    ?'Block next hit'

                    :'Deal musical damage'
                }

              </small>

            </button>
            `
        )
        .join('');


  $$(
    '[data-solo-move]'
  )
  .forEach(
    b=>
      b.onclick=
        ()=>
          soloMove(
            +b.dataset.soloMove
          )
  );

}


async function soloMove(
  idx
){

  if(
    battle.busy
  )
    return;


  battle.busy=
    true;


  const inst=
    getUpgradedInstrument(
      profile.equipped
    );


  const move=
    (
      moveSets[
        inst.play
      ]||
      moveSets.strum
    )[
      idx
    ];


  let text='';


  playInstrument(
    inst.name,
    idx===3
      ?660
      :440
  );


  if(
    move[1]==='heal'
  ){

    const h=
      Math.round(
        inst.melody*.25+
        12
      );


    battle.playerHp=
      clamp(
        battle.playerHp+h,
        0,
        battle.playerMax
      );


    battle.energy=
      clamp(
        battle.energy+1,
        0,
        3
      );


    text=
      `${move[0]} restored ${h} HP.`;


    S.heal();

  }


  else if(
    move[1]==='shield'
  ){

    battle.shield=
      true;


    battle.energy=
      clamp(
        battle.energy+1,
        0,
        3
      );


    text=
      `${move[0]} created a musical shield.`;


    S.shield();

  }


  else{

    let mult=
      move[2];


    if(
      idx===3
    ){

      battle.energy=
        0;


      S.ultimate();

    }

    else{

      battle.energy=
        clamp(
          battle.energy+1,
          0,
          3
        );

    }


    let dmg=
      Math.max(
        6,

        Math.round(

          (
            inst.attack*.32
            +
            inst.rhythm*.12
            +
            rand(
              -3,
              7
            )
          )

          *
          mult

          -

          getInstrument(
            battle.enemy.instrument
          ).defense
          *
          .06

        )
      );


    const crit=
      Math.random()
      <
      .08+
      inst.melody/
      1200;


    if(
      crit
    ){

      dmg=
        Math.round(
          dmg*
          1.5
        );


      S.critical();

    }

    else{

      S.attack();

    }


    battle.enemyHp=
      clamp(
        battle.enemyHp-dmg,
        0,
        battle.enemyMax
      );


    text=
      `${move[0]} dealt ${dmg}${crit?' CRITICAL':''} damage.`;


    addMastery(
      inst.name,
      2
    );

  }


  $('#battleStatus')
    .textContent=
      text;


  $('#battleLog')
    .textContent=
      text;


  renderSoloBattle();


  if(
    battle.enemyHp<=0
  ){

    battle.busy=
      false;


    profile.wins++;


    progressQuest(
      'battle',
      1
    );


    reward(
      24,
      18,
      'Battle won!'
    );


    addInstrumentXP(
      profile.equipped,
      6
    );


    S.victory();


    setTimeout(
      ()=>
        refreshBattle(
          true
        ),
      1000
    );


    return;

  }


  await wait(
    700
  );


  const ei=
    getInstrument(
      battle.enemy.instrument
    );


  let edmg=
    Math.max(
      5,

      Math.round(

        ei.attack*.28
        +
        rand(
          -3,
          5
        )
        -
        inst.defense*.05

      )
    );


  if(
    battle.shield
  ){

    edmg=
      Math.round(
        edmg*
        .5
      );


    battle.shield=
      false;

  }


  battle.playerHp=
    clamp(
      battle.playerHp-edmg,
      0,
      battle.playerMax
    );


  playInstrument(
    ei.name,
    330
  );


  S.attack();


  $('#battleStatus')
    .textContent=
      `${battle.enemy.name} dealt ${edmg} damage.`;


  $('#battleLog')
    .textContent=
      `${text} • Enemy hit for ${edmg}.`;


  battle.busy=
    false;


  renderSoloBattle();


  if(
    battle.playerHp<=0
  ){

    profile.losses++;


    addXP(
      4
    );


    S.defeat();


    toast(
      'Defeat. +4 EXP'
    );


    setTimeout(
      ()=>
        refreshBattle(
          true
        ),
      1000
    );

  }

}


$('#newOpponentBtn')
  .onclick=
    ()=>
      refreshBattle(
        true
      );


/* ============================ TEAM BATTLE ============================ */

let multiplayerState={
  size:10,
  blue:[],
  red:[],
  playing:false,
  round:0,
  playerEnergy:0,
  waiting:false,
  resolve:null,
  blueHP:10000,
  redHP:10000,
  maxTeamHP:10000
};


function makeTeamPlayer(
  team,
  index
){

  const human=
    team==='blue' &&
    index===0;


  const inst=
    human

      ?getInstrument(
        profile.equipped
      )

      :pick(
        instruments
      );


  return{

    id:
      `${team}-${index}-${Math.random()}`,

    team,

    human,

    name:
      human

        ?(
          profile.name||
          'Player'
        )

        :pick(
          botNames
        )
        +
        rand(
          1,
          99
        ),

    instrument:
      inst.name,

    icon:
      inst.icon,

    attack:
      inst.attack,

    defense:
      inst.defense,

    melody:
      inst.melody,

    rhythm:
      inst.rhythm

  };

}


function openLobby(
  size
){

  if(
    multiplayerState.playing
  )
    return;


  multiplayerState.size=
    size;


  multiplayerState.blue=
    Array.from(
      {
        length:size
      },
      (
        _,
        i
      )=>
        makeTeamPlayer(
          'blue',
          i
        )
    );


  multiplayerState.red=
    Array.from(
      {
        length:size
      },
      (
        _,
        i
      )=>
        makeTeamPlayer(
          'red',
          i
        )
    );


  multiplayerState.blueHP=
    multiplayerState.redHP=
      multiplayerState.maxTeamHP=
        10000;


  multiplayerState.playerEnergy=
    0;


  multiplayerState.round=
    0;


  $('#concertRoundLabel')
    .textContent=
      'LOBBY';


  $('#startTeamBattleBtn')
    .disabled=
      false;


  $('#startTeamBattleBtn')
    .textContent=
      'Start Concert Battle';


  $('#teamMovePanel')
    .classList
    .add(
      'hidden'
    );


  renderConcertTeams();

  updateTeamHPBars();


  setMP(
    `<strong>${size}v${size} Concert Battle ready.</strong><span>Both teams share 10,000 HP.</span>`
  );


  $$(
    '.mp-start'
  )
  .forEach(
    b=>
      b.classList.toggle(
        'active',
        +b.dataset.team===
        size
      )
  );

}


function renderConcertTeams(
  activeId=''
){

  const render=
    (
      arr,
      team
    )=>

      arr
        .map(
          p=>
            `
            <div
              class="
                concert-player
                ${team}
                ${
                  p.id===activeId
                    ?'active'
                    :''
                }
              "
            >

              <div
                class="body"
                data-icon="${p.icon}"
              ></div>

              <div class="name">
                ${p.name}
              </div>

            </div>
            `
        )
        .join('');


  $('#blueConcertPlayers')
    .innerHTML=
      render(
        multiplayerState.blue,
        'blue'
      );


  $('#redConcertPlayers')
    .innerHTML=
      render(
        multiplayerState.red,
        'red'
      );

}


function updateTeamHPBars(){

  const m=
    multiplayerState.maxTeamHP;


  const b=
    clamp(
      multiplayerState.blueHP/
      m*
      100,
      0,
      100
    );


  const r=
    clamp(
      multiplayerState.redHP/
      m*
      100,
      0,
      100
    );


  $('#blueTeamHPFill')
    .style.width=
      b+'%';


  $('#redTeamHPFill')
    .style.width=
      r+'%';


  $('#blueTeamHPText')
    .textContent=
      `${Math.round(
        multiplayerState.blueHP
      ).toLocaleString()} / ${m.toLocaleString()} HP`;


  $('#redTeamHPText')
    .textContent=
      `${Math.round(
        multiplayerState.redHP
      ).toLocaleString()} / ${m.toLocaleString()} HP`;

}


function setMP(
  html
){

  $('#multiplayerBattleMessage')
    .innerHTML=
      html;

}


function teamDamage(
  attacker,
  mult=1
){

  const targetTeam=
    attacker.team==='blue'
      ?'red'
      :'blue';


  let dmg=
    Math.max(
      120,

      Math.round(

        (
          attacker.attack*
          4.2

          +

          attacker.rhythm*
          1.7

          +

          rand(
            -40,
            70
          )
        )

        *
        mult

      )
    );


  const critical=
    Math.random()
    <
    .05+
    attacker.melody/
    1000;


  if(
    critical
  ){

    dmg=
      Math.round(
        dmg*
        1.5
      );

  }


  multiplayerState[
    targetTeam+
    'HP'
  ]=

    Math.max(
      0,

      multiplayerState[
        targetTeam+
        'HP'
      ]
      -
      dmg
    );


  updateTeamHPBars();


  return{
    dmg,
    critical
  };

}


function waitHumanMove(){

  return new Promise(
    resolve=>{

      multiplayerState.resolve=
        resolve;


      showTeamMoves();

    }
  );

}


function showTeamMoves(){

  const p=
    multiplayerState.blue[
      0
    ];


  const inst=
    getInstrument(
      p.instrument
    );


  const moves=
    moveSets[
      inst.play
    ]||
    moveSets.strum;


  multiplayerState.waiting=
    true;


  $('#teamMovePanel')
    .classList
    .remove(
      'hidden'
    );


  $('#teamTurnTitle')
    .textContent=
      `${p.name}, choose your move`;


  $('#teamEnergyLabel')
    .textContent=
      `${multiplayerState.playerEnergy} / 3`;


  $('#teamMoveButtons')
    .innerHTML=

      moves
        .map(
          (
            m,
            i
          )=>
            `
            <button
              class="
                move-btn
                ${i===3?'ultimate':''}
              "
              data-team-move="${i}"

              ${
                i===3 &&
                multiplayerState.playerEnergy<3

                  ?'disabled'
                  :''
              }
            >

              <strong>
                ${m[0]}
              </strong>

              <span>

                ${
                  i===3

                    ?'ULTIMATE • 3 ENERGY'

                    :m[1]
                      .toUpperCase()
                }

              </span>

              <small>

                ${
                  m[1]==='heal'

                    ?'Restore team HP'

                    :m[1]==='shield'

                    ?'Reduce next enemy hit'

                    :'Damage Team Red'
                }

              </small>

            </button>
            `
        )
        .join('');


  $$(
    '[data-team-move]'
  )
  .forEach(
    b=>
      b.onclick=
        ()=>{

          if(
            !multiplayerState.waiting
          )
            return;


          multiplayerState.waiting=
            false;


          $('#teamMovePanel')
            .classList
            .add(
              'hidden'
            );


          const r=
            multiplayerState.resolve;


          multiplayerState.resolve=
            null;


          r(
            +b.dataset.teamMove
          );

        }
  );

}


async function executeTeamMove(
  idx
){

  const p=
    multiplayerState.blue[
      0
    ];


  const inst=
    getInstrument(
      p.instrument
    );


  const move=
    (
      moveSets[
        inst.play
      ]||
      moveSets.strum
    )[
      idx
    ];


  renderConcertTeams(
    p.id
  );


  playInstrument(
    inst.name,
    idx===3
      ?659
      :440
  );


  if(
    move[1]==='heal'
  ){

    const h=
      Math.round(
        inst.melody*
        7
        +
        220
      );


    multiplayerState.blueHP=
      clamp(
        multiplayerState.blueHP+h,
        0,
        10000
      );


    multiplayerState.playerEnergy=
      clamp(
        multiplayerState.playerEnergy+1,
        0,
        3
      );


    S.heal();


    setMP(
      `<strong>💚 ${move[0]}</strong><span>Team Blue restored ${h} HP.</span>`
    );

  }


  else if(
    move[1]==='shield'
  ){

    multiplayerState.teamShield=
      true;


    multiplayerState.playerEnergy=
      clamp(
        multiplayerState.playerEnergy+1,
        0,
        3
      );


    S.shield();


    setMP(
      `<strong>🛡️ ${move[0]}</strong><span>Team Blue is shielded against the next attack.</span>`
    );

  }


  else{

    let mult=
      move[2];


    if(
      idx===3
    ){

      mult*=
        1.5;


      multiplayerState.playerEnergy=
        0;


      S.ultimate();

      crowd(
        1
      );

    }

    else{

      multiplayerState.playerEnergy=
        clamp(
          multiplayerState.playerEnergy+1,
          0,
          3
        );


      S.attack();

    }


    const hit=
      teamDamage(
        p,
        mult
      );


    if(
      hit.critical
    ){

      S.critical();

      crowd(
        .8
      );

    }


    setMP(
      `<strong>🔵 ${p.name} used ${move[0]}!</strong><span>${hit.dmg} damage${hit.critical?' • CRITICAL PERFORMANCE!':''}</span>`
    );


    addMastery(
      inst.name,
      3
    );

  }


  updateTeamHPBars();


  await wait(
    500
  );


  renderConcertTeams();

}


async function aiTeamTurn(
  p
){

  renderConcertTeams(
    p.id
  );


  playInstrument(
    p.instrument,
    p.team==='blue'
      ?420
      :320
  );


  S.attack();


  let hit=
    teamDamage(
      p,
      .8
    );


  if(
    p.team==='red' &&
    multiplayerState.teamShield
  ){

    const restore=
      Math.round(
        hit.dmg*
        .45
      );


    multiplayerState.blueHP=
      Math.min(
        10000,
        multiplayerState.blueHP+
        restore
      );


    hit.dmg-=
      restore;


    multiplayerState.teamShield=
      false;


    S.shield();


    updateTeamHPBars();

  }


  if(
    hit.critical
  ){

    S.critical();

  }


  setMP(
    `<strong>${p.team==='blue'?'🔵':'🔴'} ${p.name} performs!</strong><span>${p.instrument} deals ${hit.dmg} team damage${hit.critical?' • CRITICAL!':''}</span>`
  );


  await wait(
    multiplayerState.size>=10
      ?150
      :350
  );

}


async function startTeamBattle(){

  if(
    multiplayerState.playing
  )
    return;


  multiplayerState.playing=
    true;


  $('#startTeamBattleBtn')
    .disabled=
      true;


  $('#startTeamBattleBtn')
    .textContent=
      'Concert in Progress...';


  let round=
    1;


  while(
    multiplayerState.blueHP>0 &&
    multiplayerState.redHP>0 &&
    round<=50
  ){

    multiplayerState.round=
      round;


    $('#concertRoundLabel')
      .textContent=
        `ROUND ${round}`;


    setMP(
      `<strong>🎵 Round ${round}: Your turn!</strong><span>Choose one of your instrument moves.</span>`
    );


    const move=
      await waitHumanMove();


    await executeTeamMove(
      move
    );


    if(
      multiplayerState.redHP<=0
    )
      break;


    for(
      const p of
      multiplayerState.blue.slice(
        1
      )
    ){

      await aiTeamTurn(
        p
      );


      if(
        multiplayerState.redHP<=0
      )
        break;

    }


    if(
      multiplayerState.redHP<=0
    )
      break;


    for(
      const p of
      multiplayerState.red
    ){

      await aiTeamTurn(
        p
      );


      if(
        multiplayerState.blueHP<=0
      )
        break;

    }


    round++;

  }


  multiplayerState.playing=
    false;


  $('#teamMovePanel')
    .classList
    .add(
      'hidden'
    );


  const won=
    multiplayerState.blueHP>
    multiplayerState.redHP;


  $('#concertRoundLabel')
    .textContent=
      won
        ?'VICTORY'
        :'DEFEAT';


  if(
    won
  ){

    crowd(
      1
    );


    S.victory();


    progressQuest(
      'battle',
      1
    );


    reward(

      24+
      multiplayerState.size*
      2,

      18+
      multiplayerState.size*
      2,

      'Concert victory!'

    );


    addInstrumentXP(
      profile.equipped,
      10
    );


    setMP(
      `<strong>🏆 TEAM BLUE WINS!</strong><span>${Math.round(multiplayerState.blueHP).toLocaleString()} HP remaining.</span>`
    );

  }

  else{

    S.defeat();


    addXP(
      6
    );


    setMP(
      `<strong>Team Red wins the concert.</strong><span>+18 EXP for performing.</span>`
    );

  }


  $('#startTeamBattleBtn')
    .disabled=
      false;


  $('#startTeamBattleBtn')
    .textContent=
      'Play Again';

}


$$(
  '.mp-start'
)
.forEach(
  b=>
    b.onclick=
      ()=>
        openLobby(
          +b.dataset.team
        )
);


$('#startTeamBattleBtn')
  .onclick=
    startTeamBattle;
/* ============================ DAILY REWARDS ============================ */

const dailyRewardTable=[
  {
    day:1,
    label:'15 Coins',
    icon:'🪙',
    coins:15
  },
  {
    day:2,
    label:'10 EXP',
    icon:'⭐',
    xp:10
  },
  {
    day:3,
    label:'8 Instrument EXP',
    icon:'🎵',
    instrumentXP:8
  },
  {
    day:4,
    label:'25 Coins + 10 EXP',
    icon:'🎁',
    coins:25,
    xp:10
  },
  {
    day:5,
    label:'15 Star Dust',
    icon:'💫',
    dust:15
  },
  {
    day:6,
    label:'Pet Egg',
    icon:'🥚',
    petEgg:true
  },
  {
    day:7,
    label:'Weekly Chest',
    icon:'👑',
    coins:50,
    xp:30,
    instrumentXP:15,
    weeklyChest:true
  }
];


function getLocalDateKey(
  date=new Date()
){

  const y=
    date.getFullYear();

  const m=
    String(
      date.getMonth()+1
    )
    .padStart(
      2,
      '0'
    );

  const d=
    String(
      date.getDate()
    )
    .padStart(
      2,
      '0'
    );

  return `${y}-${m}-${d}`;

}


function getYesterdayDateKey(){

  const d=
    new Date();

  d.setDate(
    d.getDate()-1
  );

  return getLocalDateKey(
    d
  );

}


function canClaimDailyReward(){

  return (
    profile.dailyRewards.lastClaim !==
    getLocalDateKey()
  );

}


function getNextDailyRewardDay(){

  const today=
    getLocalDateKey();

  const y=
    getYesterdayDateKey();


  if(
    profile.dailyRewards.lastClaim===today
  ){

    return (
      profile.dailyRewards.streak||
      1
    );

  }


  if(
    profile.dailyRewards.lastClaim===y
  ){

    return (
      profile.dailyRewards.streak%7
    )+1;

  }


  return 1;

}


function giveDailyPetEgg(){

  const eggs=[

    {
      egg:'Meadow Egg',
      icon:'🌱',
      pet:'Music Bunny',
      layer:'Daily Reward'
    },

    {
      egg:'Cave Egg',
      icon:'🪨',
      pet:'Mole Beat',
      layer:'Daily Reward'
    },

    {
      egg:'Stone Egg',
      icon:'🐾',
      pet:'Rock Pup',
      layer:'Daily Reward'
    },

    {
      egg:'Golden Egg',
      icon:'🪙',
      pet:'Gold Chick',
      layer:'Daily Reward'
    },

    {
      egg:'Crystal Egg',
      icon:'💎',
      pet:'Crystal Fox',
      layer:'Daily Reward'
    }

  ];


  const egg=
    pick(
      Math.random()<.08
        ?eggs.slice(3)
        :eggs.slice(0,3)
    );


  profile.petEggs.push({

    id:
      `daily-${Date.now()}-${Math.random()}`,

    ...egg,

    hatched:false

  });


  toast(
    `${egg.icon} You received a ${egg.egg}!`
  );

}


function rollWeeklyChestBonus(){

  const r=
    Math.random();


  if(
    r<.03
  ){

    profile.petEggs.push({

      id:
        `weekly-${Date.now()}-${Math.random()}`,

      egg:
        'Celestial Egg',

      icon:
        '✨',

      pet:
        'Star Phoenix',

      layer:
        'Weekly Chest',

      hatched:false

    });


    toast(
      '✨ JACKPOT! Celestial Egg!'
    );

  }

  else if(
    r<.15
  ){

    profile.dust+=25;


    toast(
      '💫 Weekly Chest bonus: +25 Star Dust!'
    );

  }

}


function claimDailyReward(){

  if(
    !canClaimDailyReward()
  ){

    return toast(
      "You already claimed today's reward!"
    );

  }


  profile.dailyRewards.streak=
    profile.dailyRewards.lastClaim===
    getYesterdayDateKey()

      ?(
        profile.dailyRewards.streak%7
      )+1

      :1;


  const r=
    dailyRewardTable[
      profile.dailyRewards.streak-1
    ];


  if(
    r.coins
  ){

    profile.coins+=
      r.coins;

  }


  if(
    r.xp
  ){

    addXP(
      r.xp
    );

  }


  if(
    r.dust
  ){

    profile.dust+=
      r.dust;

  }


  if(
    r.instrumentXP
  ){

    addInstrumentXP(
      profile.equipped,
      r.instrumentXP
    );

  }


  if(
    r.petEgg
  ){

    giveDailyPetEgg();

  }


  if(
    r.weeklyChest
  ){

    rollWeeklyChestBonus();

  }


  profile.dailyRewards.lastClaim=
    getLocalDateKey();


  persist();

  updateProfileUI();

  renderDailyRewards();

  renderCraftEggs();

  S.treasure();


  toast(
    `${r.icon} Day ${r.day}: ${r.label}!`
  );

}


function renderDailyRewards(){

  const grid=
    $('#dailyRewardGrid');


  if(
    !grid
  )
    return;


  const next=
    getNextDailyRewardDay();


  const claimable=
    canClaimDailyReward();


  $('#dailyStreakLabel')
    .textContent=
      profile.dailyRewards.streak||
      0;


  grid.innerHTML=
    dailyRewardTable
      .map(
        r=>
          `
          <div
            class="
              daily-reward-card
              ${
                claimable &&
                r.day===next
                  ?'current'
                  :''
              }

              ${
                !claimable &&
                r.day===
                profile.dailyRewards.streak
                  ?'claimed'
                  :''
              }

              ${
                r.day===7
                  ?'day-seven'
                  :''
              }
            "
          >

            <span class="daily-day">
              DAY ${r.day}
            </span>

            <div class="daily-icon">
              ${r.icon}
            </div>

            <strong>
              ${r.label}
            </strong>

          </div>
          `
      )
      .join('');


  const b=
    $('#claimDailyBtn');


  b.disabled=
    !claimable;


  b.textContent=
    claimable
      ?`CLAIM DAY ${next}`
      :'COME BACK TOMORROW';

}


/* ============================ QUESTS / GEAR / PETS ============================ */

const questDefs=[

  {
    id:'fight',
    name:'Battle Practice',
    goal:3,
    label:'Defeat 3 RPG enemies',
    xp:10,
    coins:6
  },

  {
    id:'mine',
    name:'Deep Miner',
    goal:20,
    label:'Mine 20 MusicCraft blocks',
    xp:10,
    coins:6
  },

  {
    id:'battle',
    name:'Arena Winner',
    goal:1,
    label:'Win 1 Solo or Team Battle',
    xp:12,
    coins:8
  }

];


function ensureQuests(){

  questDefs
    .forEach(
      q=>{

        if(
          !profile.quests[
            q.id
          ]
        ){

          profile.quests[
            q.id
          ]={

            progress:0,

            claimed:false

          };

        }

      }
    );

}


function progressQuest(
  id,
  n=1
){

  ensureQuests();


  const q=
    questDefs.find(
      x=>
        x.id===id
    );


  const s=
    profile.quests[
      id
    ];


  if(
    !q ||
    s.claimed
  )
    return;


  s.progress=
    Math.min(
      q.goal,
      s.progress+n
    );


  persist();

  renderQuests();

}


function claimQuest(
  id
){

  const q=
    questDefs.find(
      x=>
        x.id===id
    );


  const s=
    profile.quests[
      id
    ];


  if(
    !q ||
    !s ||
    s.progress<q.goal ||
    s.claimed
  )
    return;


  s.claimed=
    true;


  reward(
    q.xp,
    q.coins,
    `${q.name} complete!`
  );


  renderQuests();

}


function renderQuests(){

  const el=
    $('#questList');


  if(
    !el
  )
    return;


  ensureQuests();


  el.innerHTML=
    questDefs
      .map(
        q=>{

          const s=
            profile.quests[
              q.id
            ];


          const pct=
            Math.min(
              100,
              s.progress/
              q.goal*
              100
            );


          return `
            <div class="quest-card">

              <strong>
                ${q.name}
              </strong>

              <span>
                ${q.label}
              </span>

              <div class="quest-progress">
                <i
                  style="
                    width:${pct}%
                  "
                ></i>
              </div>

              <small>

                ${s.progress}/${q.goal}

                • ${q.xp} EXP

                • ${q.coins} Coins

              </small>


              ${
                s.progress>=q.goal &&
                !s.claimed

                  ?`
                  <button
                    class="btn gold small"
                    data-quest-claim="${q.id}"
                  >
                    Claim
                  </button>
                  `

                  :s.claimed

                    ?'<small> ✓ Claimed</small>'

                    :''
              }

            </div>
          `;

        }
      )
      .join('');


  $$(
    '[data-quest-claim]'
  )
  .forEach(
    b=>
      b.onclick=
        ()=>
          claimQuest(
            b.dataset.questClaim
          )
  );

}


function renderEquipment(){

  const el=
    $('#equipmentList');


  if(
    !el
  )
    return;


  el.innerHTML=
    profile.equipmentInventory
      .map(
        (
          g,
          i
        )=>{

          const eq=
            profile.equippedGear[
              g.slot
            ]?.name===
            g.name;


          return `
            <div class="gear-card">

              <div>

                <strong>
                  ${g.name}
                </strong>

                <small>

                  ${g.slot}

                  •

                  ${
                    g.attack
                      ?`+${g.attack} ATK `
                      :''
                  }

                  ${
                    g.defense
                      ?`+${g.defense} DEF`
                      :''
                  }

                </small>

              </div>


              <button
                class="
                  btn
                  small
                  ${
                    eq
                      ?'gold'
                      :'ghost'
                  }
                "
                data-gear="${i}"
              >

                ${
                  eq
                    ?'Equipped'
                    :'Equip'
                }

              </button>

            </div>
          `;

        }
      )
      .join('');


  $$(
    '[data-gear]'
  )
  .forEach(
    b=>
      b.onclick=
        ()=>{

          const g=
            profile.equipmentInventory[
              +b.dataset.gear
            ];


          profile.equippedGear[
            g.slot
          ]=
            g;


          persist();

          renderEquipment();

          renderInstruments();

          S.click();

        }
  );

}


const petTypes={

  'Music Bunny':'melody',

  'Mole Beat':'defense',

  'Rock Pup':'attack',

  'Shadow Bat':'attack',

  'Gear Fox':'defense',

  'Echo Spider':'melody',

  'Gold Chick':'all',

  'Crystal Fox':'melody',

  'Diamond Dragon':'attack',

  'Obsidian Wolf':'defense',

  'Relic Guardian':'defense',

  'Lava Dragon':'attack',

  'Echo Spirit':'melody',

  'Star Phoenix':'all',

  'Harmony Dragon':'all'

};


function hatchCraftEgg(
  id
){

  const egg=
    profile.petEggs.find(
      e=>
        e.id===id
    );


  if(
    !egg ||
    egg.hatched
  )
    return;


  egg.hatched=
    true;


  const existing=
    profile.pets.find(
      p=>
        p.name===
        egg.pet
    );


  if(
    existing
  ){

    profile.dust+=10;


    toast(
      `✨ Duplicate ${egg.pet}! +10 Star Dust`
    );

  }

  else{

    profile.pets.push({

      id:
        `pet-${Date.now()}-${Math.random()}`,

      name:
        egg.pet,

      level:1,

      xp:0,

      type:
        petTypes[
          egg.pet
        ]||
        'all',

      source:
        egg.layer

    });


    toast(
      `🐾 ${egg.pet} hatched!`
    );

  }


  persist();

  renderCraftEggs();

  renderPets();

  updateProfileUI();

  S.gacha();

}


function renderPets(){

  const el=
    $('#petList');


  if(
    !el
  )
    return;


  if(
    !profile.pets.length
  ){

    el.innerHTML=
      '<p class="muted">Hatch eggs in MusicCraft to collect pets.</p>';


    return;

  }


  el.innerHTML=
    profile.pets
      .map(
        p=>{

          const need=
            (
              p.level||
              1
            )*
            40;


          const eq=
            profile.equippedPet===
            p.id;


          return `
            <div class="pet-card">

              <div>

                <strong>

                  ${p.name}

                  • Lv.${p.level||1}

                </strong>

                <small>
                  ${p.type} pet
                </small>

                <div class="pet-xp">

                  <i
                    style="
                      width:${
                        Math.min(
                          100,
                          (
                            p.xp||
                            0
                          )/
                          need*
                          100
                        )
                      }%
                    "
                  ></i>

                </div>

              </div>


              <button
                class="
                  btn
                  small
                  ${
                    eq
                      ?'gold'
                      :'ghost'
                  }
                "
                data-pet="${p.id}"
              >

                ${
                  eq
                    ?'Active'
                    :'Equip'
                }

              </button>

            </div>
          `;

        }
      )
      .join('');


  $$(
    '[data-pet]'
  )
  .forEach(
    b=>
      b.onclick=
        ()=>{

          profile.equippedPet=
            b.dataset.pet;


          persist();

          renderPets();

          renderInstruments();

          S.click();

        }
  );

}


function renderEvolutionPanel(){

  const el=
    $('#evolutionPanel');


  if(
    !el
  )
    return;


  const name=
    profile.equipped;


  const u=
    getInstrumentUpgradeData(
      name
    );


  const done=
    profile.instrumentEvolutions[
      name
    ];


  const req={

    Stone:20,

    Crystal:5

  };


  if(
    done
  ){

    el.innerHTML=
      `
      <div class="evolution-card">

        <strong>
          ${done.name}
        </strong>

        <span>
          Evolution complete • +10% base stats
        </span>

      </div>
      `;


    return;

  }


  const can=
    u.level>=10
    &&
    (
      profile.materials.Stone||
      0
    )>=20
    &&
    (
      profile.materials.Crystal||
      0
    )>=5;


  el.innerHTML=
    `
    <div class="evolution-card">

      <strong>
        ${name} Evolution
      </strong>

      <span>
        Requires Instrument Lv.10 + 20 Stone + 5 Crystal
      </span>

      <button
        id="evolveInstrumentBtn"
        class="
          btn
          ${
            can
              ?'gold'
              :'ghost'
          }
          small
        "
        ${
          can
            ?''
            :'disabled'
        }
      >
        Evolve
      </button>

    </div>
    `;


  if(
    can
  ){

    $('#evolveInstrumentBtn')
      .onclick=
        ()=>{

          profile.materials.Stone-=20;

          profile.materials.Crystal-=5;


          profile.instrumentEvolutions[
            name
          ]={

            name:
              `${name} ★ Harmonic`

          };


          persist();

          S.ultimate();


          toast(
            `✨ ${name} evolved!`
          );


          renderEvolutionPanel();

          renderInstruments();

        };

  }

}


/* ============================ MUSICVERSE ADVENTURE RPG ============================ */


/* ============================ SKILL TREE ============================ */

const skillTreeDefs={

  power:{

    name:
      'Power',

    icon:
      '⚔️',

    desc:
      'Stronger attacks and special moves.',

    nodes:[

      {

        id:
          'power1',

        icon:
          '🎸',

        name:
          'Forte',

        desc:
          '+3% attack damage per rank.',

        max:3,

        requires:null

      },

      {

        id:
          'power2',

        icon:
          '💥',

        name:
          'Critical Ear',

        desc:
          '+2% critical chance per rank.',

        max:3,

        requires:
          'power1'

      },

      {

        id:
          'power3',

        icon:
          '🔥',

        name:
          'Encore Strike',

        desc:
          '+5% special move damage per rank.',

        max:3,

        requires:
          'power2'

      }

    ]

  },


  rhythm:{

    name:
      'Rhythm',

    icon:
      '🥁',

    desc:
      'Defence, dodging and tempo control.',

    nodes:[

      {

        id:
          'rhythm1',

        icon:
          '🛡️',

        name:
          'Tempo Guard',

        desc:
          '+3% defence per rank.',

        max:3,

        requires:null

      },

      {

        id:
          'rhythm2',

        icon:
          '💨',

        name:
          'Quick Beat',

        desc:
          '+2% dodge chance per rank.',

        max:3,

        requires:
          'rhythm1'

      },

      {

        id:
          'rhythm3',

        icon:
          '⚡',

        name:
          'Momentum',

        desc:
          '+4% normal attack damage per rank.',

        max:3,

        requires:
          'rhythm2'

      }

    ]

  },


  harmony:{

    name:
      'Harmony',

    icon:
      '🎼',

    desc:
      'More HP, healing and pet growth.',

    nodes:[

      {

        id:
          'harmony1',

        icon:
          '❤️',

        name:
          'Vital Chorus',

        desc:
          '+5 max RPG HP per rank.',

        max:3,

        requires:null

      },

      {

        id:
          'harmony2',

        icon:
          '✨',

        name:
          'Healing Notes',

        desc:
          '+8% healing per rank.',

        max:3,

        requires:
          'harmony1'

      },

      {

        id:
          'harmony3',

        icon:
          '🐾',

        name:
          'Companion Bond',

        desc:
          '+10% pet EXP per rank.',

        max:3,

        requires:
          'harmony2'

      }

    ]

  }

};


function totalSkillPointsEarned(){

  return Math.floor(
    (
      profile.level-1
    )/
    2
  );

}


function spentSkillPoints(){

  return Object
    .values(
      profile.skillTree||
      {}
    )
    .reduce(
      (
        a,
        b
      )=>

        a+
        (
          Number(
            b
          )||
          0
        ),

      0
    );

}


function availableSkillPoints(){

  return Math.max(
    0,

    totalSkillPointsEarned()
    -
    spentSkillPoints()
  );

}


function skillRank(
  id
){

  return Number(
    profile.skillTree?.[
      id
    ]||
    0
  );

}


function canBuySkill(
  node
){

  if(
    availableSkillPoints()<=0
  ){

    return false;

  }


  if(
    skillRank(
      node.id
    )>=
    node.max
  ){

    return false;

  }


  if(
    node.requires
    &&
    skillRank(
      node.requires
    )<=0
  ){

    return false;

  }


  return true;

}


function buySkill(
  id
){

  let node=
    null;


  for(
    const branch of
    Object.values(
      skillTreeDefs
    )
  ){

    node=
      branch.nodes.find(
        n=>
          n.id===id
      );


    if(
      node
    )
      break;

  }


  if(
    !node
  )
    return;


  if(
    !canBuySkill(
      node
    )
  ){

    if(
      availableSkillPoints()<=0
    ){

      toast(
        'You need another Skill Point.'
      );

    }

    else if(
      node.requires
      &&
      skillRank(
        node.requires
      )<=0
    ){

      toast(
        'Unlock the previous skill first.'
      );

    }


    return;

  }


  profile.skillTree[
    id
  ]=

    skillRank(
      id
    )+
    1;


  applySkillTreeVitals();

  persist();

  S.level();


  toast(
    `🌳 ${node.name} is now Rank ${profile.skillTree[id]}!`
  );


  renderSkillTree();

  renderRpgMap();


  if(
    rpgEnemy
  ){

    renderRpgBattle();

  }

}


function getSkillBonuses(){

  return{

    attackPct:
      skillRank(
        'power1'
      )*
      .03,


    critChance:
      skillRank(
        'power2'
      )*
      .02,


    specialPct:
      skillRank(
        'power3'
      )*
      .05,


    defensePct:
      skillRank(
        'rhythm1'
      )*
      .03,


    dodgeChance:
      skillRank(
        'rhythm2'
      )*
      .02,


    normalPct:
      skillRank(
        'rhythm3'
      )*
      .04,


    maxHp:
      skillRank(
        'harmony1'
      )*
      5,


    healPct:
      skillRank(
        'harmony2'
      )*
      .08,


    petXpPct:
      skillRank(
        'harmony3'
      )*
      .10

  };

}


function applySkillTreeVitals(){

  const b=
    getSkillBonuses();


  const oldMax=
    profile.rpg.maxHp||
    100;


  const newMax=
    100+
    b.maxHp;


  profile.rpg.maxHp=
    newMax;


  if(
    profile.rpg.hp>
    newMax
  ){

    profile.rpg.hp=
      newMax;

  }


  if(
    newMax>
    oldMax
  ){

    profile.rpg.hp=
      Math.min(

        newMax,

        profile.rpg.hp+
        (
          newMax-
          oldMax
        )

      );

  }

}


function renderSkillTree(){

  const el=
    $('#skillTree');


  if(
    !el
  )
    return;


  applySkillTreeVitals();


  $('#skillPointsAvailable')
    .textContent=
      availableSkillPoints();


  el.innerHTML=

    Object
      .values(
        skillTreeDefs
      )
      .map(
        branch=>
          `
          <div class="skill-branch">

            <div class="skill-branch-title">

              <strong>
                ${branch.icon}
                ${branch.name}
              </strong>

              <span>
                ${branch.desc}
              </span>

            </div>


            ${

              branch.nodes
                .map(
                  (
                    n,
                    i
                  )=>{

                    const rank=
                      skillRank(
                        n.id
                      );


                    const locked=
                      n.requires
                      &&
                      skillRank(
                        n.requires
                      )<=0;


                    const maxed=
                      rank>=
                      n.max;


                    return `

                      ${
                        i
                          ?'<div class="skill-connector"></div>'
                          :''
                      }

                      <div
                        class="
                          skill-node
                          ${
                            locked
                              ?'locked'
                              :''
                          }

                          ${
                            maxed
                              ?'maxed'
                              :''
                          }
                        "
                      >

                        <div class="skill-icon">
                          ${n.icon}
                        </div>

                        <div>

                          <strong>
                            ${n.name}
                          </strong>

                          <small>
                            ${n.desc}
                          </small>

                        </div>

                        <div>

                          <div class="skill-rank">

                            Rank
                            ${rank}
                            /
                            ${n.max}

                          </div>

                          <button
                            data-skill="${n.id}"

                            ${
                              maxed
                              ||
                              locked
                              ||
                              availableSkillPoints()<=0

                                ?'disabled'

                                :''
                            }
                          >

                            ${
                              maxed
                                ?'MAX'

                                :locked
                                  ?'LOCKED'

                                  :'UPGRADE'
                            }

                          </button>

                        </div>

                      </div>
                    `;

                  }
                )
                .join('')

            }

          </div>
          `
      )
      .join('')

    +

    `
    <div class="skill-summary">

      <div>

        <b>
          +${
            Math.round(
              getSkillBonuses()
                .attackPct*
              100
            )
          }%
        </b>

        <span>
          Attack
        </span>

      </div>


      <div>

        <b>
          +${getSkillBonuses().maxHp}
        </b>

        <span>
          RPG Max HP
        </span>

      </div>


      <div>

        <b>
          +${
            Math.round(
              getSkillBonuses()
                .petXpPct*
              100
            )
          }%
        </b>

        <span>
          Pet EXP
        </span>

      </div>

    </div>
    `;


  $$(
    '[data-skill]'
  )
  .forEach(
    b=>
      b.onclick=
        ()=>
          buySkill(
            b.dataset.skill
          )
  );

}


/* ============================ RPG WORLD ============================ */

const rpgZones=[

  {
    name:'Melody Village',
    emoji:'🏡',
    enemy:'Slime Note',
    boss:'Village Maestro'
  },

  {
    name:'Rhythm Forest',
    emoji:'🌲',
    enemy:'Beat Bug',
    boss:'Tempo Wolf'
  },

  {
    name:'Echo Caves',
    emoji:'🕳️',
    enemy:'Echo Bat',
    boss:'Crystal Golem'
  },

  {
    name:'Brass Kingdom',
    emoji:'🏰',
    enemy:'Horn Guard',
    boss:'Royal Conductor'
  },

  {
    name:'Crystal Highlands',
    emoji:'💎',
    enemy:'Shard Sprite',
    boss:'Crystal Maestro'
  },

  {
    name:'Shadow Ruins',
    emoji:'🗿',
    enemy:'Shadow Note',
    boss:'Silent Knight'
  },

  {
    name:'Magma Canyon',
    emoji:'🔥',
    enemy:'Fire Beat',
    boss:'Inferno Dragon'
  },

  {
    name:'Celestial Valley',
    emoji:'✨',
    enemy:'Star Wisp',
    boss:'Celestial Titan'
  },

  {
    name:'Void Realm',
    emoji:'🌌',
    enemy:'Void Spirit',
    boss:'Abyss Titan'
  },

  {
    name:'MusicVerse Citadel',
    emoji:'🎼',
    enemy:'Dark Virtuoso',
    boss:'The Silent King'
  }

];


let rpgMapData=[];

let rpgEnemy=null;


function makeRpgMap(){

  rpgMapData=
    Array.from(
      {
        length:8
      },
      (
        _,
        y
      )=>

        Array.from(
          {
            length:12
          },
          (
            _,
            x
          )=>

            x===0
            ||
            x===11
            ||
            y===0
            ||
            y===7

              ?'wall'

              :'floor'
        )
    );


  for(
    let i=0;
    i<10;
    i++
  ){

    const x=
      rand(
        2,
        10
      );


    const y=
      rand(
        1,
        6
      );


    if(
      x!==profile.rpg.x
      ||
      y!==profile.rpg.y
    ){

      rpgMapData[
        y
      ][
        x
      ]=
        'wall';

    }

  }


  for(
    let i=0;
    i<4;
    i++
  ){

    const x=
      rand(
        2,
        10
      );


    const y=
      rand(
        1,
        6
      );


    if(
      rpgMapData[
        y
      ][
        x
      ]===
      'floor'
    ){

      rpgMapData[
        y
      ][
        x
      ]=
        'enemy';

    }

  }


  for(
    let i=0;
    i<2;
    i++
  ){

    const x=
      rand(
        2,
        10
      );


    const y=
      rand(
        1,
        6
      );


    if(
      rpgMapData[
        y
      ][
        x
      ]===
      'floor'
    ){

      rpgMapData[
        y
      ][
        x
      ]=
        'chest';

    }

  }


  rpgMapData[
    6
  ][
    10
  ]=
    'exit';


  profile.rpg.x=
    1;


  profile.rpg.y=
    1;


  persist();

  renderRpgMap();

}


function renderRpgMap(){

  const el=
    $('#rpgMap');


  if(
    !el
  )
    return;


  $('#rpgZoneName')
    .textContent=
      rpgZones[
        profile.rpg.zone
      ].name;


  $('#rpgHpText')
    .textContent=
      `${profile.rpg.hp} / ${profile.rpg.maxHp}`;


  $('#rpgStoryText')
    .textContent=
      `${profile.rpg.storyStep+1} / ${rpgZones.length}`;


  el.innerHTML=
    rpgMapData
      .flatMap(
        (
          row,
          y
        )=>

          row.map(
            (
              t,
              x
            )=>{

              const p=
                x===profile.rpg.x
                &&
                y===profile.rpg.y;


              const icon=
                p

                  ?'🎸'

                  :t==='wall'

                    ?''

                    :t==='enemy'

                      ?'👾'

                      :t==='chest'

                        ?'🎁'

                        :t==='exit'

                          ?'🚪'

                          :'';


              return `
                <div
                  class="
                    rpg-tile
                    ${
                      p
                        ?'player'
                        :t
                    }
                  "
                >
                  ${icon}
                </div>
              `;

            }
          )
      )
      .join('');

}


function moveRpg(
  dx,
  dy
){

  if(
    rpgEnemy
  )
    return;


  const nx=
    profile.rpg.x+
    dx;


  const ny=
    profile.rpg.y+
    dy;


  const t=
    rpgMapData[
      ny
    ]?.[
      nx
    ];


  if(
    !t
    ||
    t==='wall'
  )
    return;


  if(
    t==='enemy'
  ){

    profile.rpg.x=
      nx;


    profile.rpg.y=
      ny;


    startRpgBattle(
      false
    );


    return;

  }


  if(
    t==='chest'
  ){

    rpgMapData[
      ny
    ][
      nx
    ]=
      'floor';


    const coins=
      rand(
        2,
        7
      );


    profile.coins+=
      coins;


    if(
      Math.random()<.35
    ){

      profile.equipmentInventory.push({

        name:
          pick(
            [
              'Echo Ring',
              'Rhythm Boots',
              'Crystal Charm'
            ]
          ),

        slot:
          pick(
            [
              'Ring',
              'Feet',
              'Charm'
            ]
          ),

        attack:
          rand(
            1,
            3
          ),

        defense:
          rand(
            1,
            3
          )

      });

    }


    persist();

    updateProfileUI();

    renderEquipment();

    S.treasure();


    toast(
      `🎁 Chest: +${coins} Coins`
    );

  }


  if(
    t==='exit'
  ){

    startRpgBattle(
      true
    );


    return;

  }


  profile.rpg.x=
    nx;


  profile.rpg.y=
    ny;


  persist();

  renderRpgMap();

}


function startRpgBattle(
  boss
){

  const z=
    rpgZones[
      profile.rpg.zone
    ];


  const inst=
    getUpgradedInstrument(
      profile.equipped
    );


  rpgEnemy={

    name:
      boss
        ?z.boss
        :z.enemy,


    hp:
      boss
        ?220+
         profile.rpg.zone*
         70
        :75+
         profile.rpg.zone*
         25,


    max:
      boss
        ?220+
         profile.rpg.zone*
         70
        :75+
         profile.rpg.zone*
         25,


    boss,

    attack:
      boss
        ?12+
         profile.rpg.zone*
         2
        :6+
         profile.rpg.zone

  };


  renderRpgBattle();

}


function renderRpgBattle(){

  const p=
    $('#rpgBattlePanel');


  if(
    !p
    ||
    !rpgEnemy
  )
    return;


  p.classList
    .remove(
      'hidden'
    );


  const inst=
    getUpgradedInstrument(
      profile.equipped
    );


  p.innerHTML=
    `
    <div class="story-banner">

      ${
        rpgEnemy.boss

          ?`Boss guarding the fragment of the Grand Melody: ${rpgEnemy.name}`

          :`A ${rpgEnemy.name} blocks your path.`
      }

    </div>


    <div class="rpg-battle-grid">

      <div>

        <strong>
          ${profile.name||'Player'}
        </strong>

        <p>
          HP ${profile.rpg.hp}/${profile.rpg.maxHp}
        </p>

        <small>
          ${inst.icon} ${profile.equipped}
        </small>

      </div>


      <div>

        <strong>

          ${
            rpgEnemy.boss
              ?'👑'
              :'👾'
          }

          ${rpgEnemy.name}

        </strong>

        <p>
          HP ${rpgEnemy.hp}/${rpgEnemy.max}
        </p>

      </div>

    </div>


    <div class="rpg-actions">

      <button
        class="btn gold"
        id="rpgAttack"
      >
        Attack
      </button>

      <button
        class="btn ghost"
        id="rpgSkill"
      >
        Special Move
      </button>

      <button
        class="btn ghost"
        id="rpgHeal"
      >
        Heal
      </button>

      <button
        class="btn ghost"
        id="rpgRun"
      >
        Run
      </button>

    </div>
    `;


  $('#rpgAttack')
    .onclick=
      ()=>
        rpgPlayerAction(
          'attack'
        );


  $('#rpgSkill')
    .onclick=
      ()=>
        rpgPlayerAction(
          'skill'
        );


  $('#rpgHeal')
    .onclick=
      ()=>
        rpgPlayerAction(
          'heal'
        );


  $('#rpgRun')
    .onclick=
      ()=>{

        if(
          rpgEnemy.boss
        ){

          return toast(
            'You cannot run from a boss!'
          );

        }


        rpgEnemy=
          null;


        p.classList
          .add(
            'hidden'
          );


        rpgMapData[
          profile.rpg.y
        ][
          profile.rpg.x
        ]=
          'floor';


        renderRpgMap();

      };

}


function rpgPlayerAction(
  type
){

  const inst=
    getUpgradedInstrument(
      profile.equipped
    );


  const skills=
    getSkillBonuses();


  if(
    type==='heal'
  ){

    const base=
      Math.round(
        inst.melody*
        .12
      )+
      6;


    const heal=
      Math.round(

        base*

        (
          1+
          skills.healPct
        )

      );


    profile.rpg.hp=
      Math.min(

        profile.rpg.maxHp,

        profile.rpg.hp+
        heal

      );


    S.heal();


    toast(
      `✨ Healed ${heal} HP`
    );

  }

  else{

    let mult=
      type==='skill'
        ?1.45
        :1;


    mult*=
      1+
      skills.attackPct;


    mult*=
      type==='skill'

        ?1+
         skills.specialPct

        :1+
         skills.normalPct;


    let damage=
      Math.max(

        5,

        Math.round(

          (
            inst.attack*.22

            +

            inst.rhythm*.08

            +

            rand(
              0,
              6
            )
          )

          *

          mult

        )

      );


    const crit=
      Math.random()
      <
      .06
      +
      inst.melody/
      1600
      +
      skills.critChance;


    if(
      crit
    ){

      damage=
        Math.round(
          damage*
          1.5
        );


      S.critical();


      toast(
        '💥 Critical hit!'
      );

    }


    rpgEnemy.hp=
      Math.max(

        0,

        rpgEnemy.hp-
        damage

      );


    playInstrument(

      profile.equipped,

      type==='skill'
        ?660
        :440

    );


    type==='skill'
      ?S.ultimate()
      :S.attack();

  }


  if(
    rpgEnemy.hp<=0
  ){

    finishRpgBattle();

    return;

  }


  if(
    Math.random()<
    skills.dodgeChance
  ){

    S.great();


    toast(
      '💨 Quick Beat! You dodged the attack.'
    );


    persist();

    renderRpgBattle();

    renderRpgMap();


    return;

  }


  const effectiveDefense=
    inst.defense*
    (
      1+
      skills.defensePct
    );


  const hurt=
    Math.max(

      1,

      rpgEnemy.attack

      -

      Math.round(
        effectiveDefense*
        .035
      )

    );


  profile.rpg.hp=
    Math.max(

      0,

      profile.rpg.hp-
      hurt

    );


  if(
    profile.rpg.hp<=0
  ){

    profile.rpg.hp=
      profile.rpg.maxHp;


    rpgEnemy=
      null;


    $('#rpgBattlePanel')
      .classList
      .add(
        'hidden'
      );


    profile.rpg.x=
      1;


    profile.rpg.y=
      1;


    persist();

    S.defeat();


    toast(
      'Defeated! You returned to the zone entrance.'
    );


    renderRpgMap();


    return;

  }


  persist();

  renderRpgBattle();

  renderRpgMap();

}


function finishRpgBattle(){

  const boss=
    rpgEnemy.boss;


  const name=
    rpgEnemy.name;


  progressQuest(
    'fight',
    1
  );


  addInstrumentXP(

    profile.equipped,

    boss
      ?8
      :2

  );


  if(
    profile.equippedPet
  ){

    addPetXP(

      profile.equippedPet,

      boss
        ?12
        :3

    );

  }


  reward(

    boss
      ?28
      :6,

    boss
      ?18
      :3,

    `${name} defeated!`

  );


  if(
    boss
  ){

    profile.rpg.storyStep=
      Math.max(

        profile.rpg.storyStep,

        profile.rpg.zone+1

      );


    if(
      profile.rpg.zone<
      rpgZones.length-1
    ){

      profile.rpg.zone++;


      profile.rpg.hp=
        profile.rpg.maxHp;


      toast(
        `🗺️ ${rpgZones[profile.rpg.zone].name} unlocked!`
      );

    }

    else{

      toast(
        '🎼 The Grand Melody has been restored!'
      );

    }


    makeRpgMap();

  }

  else{

    rpgMapData[
      profile.rpg.y
    ][
      profile.rpg.x
    ]=
      'floor';

  }


  rpgEnemy=
    null;


  $('#rpgBattlePanel')
    .classList
    .add(
      'hidden'
    );


  persist();

  renderRpgMap();

  renderQuests();

}


function setupRpg(){

  if(
    !rpgMapData.length
  ){

    makeRpgMap();

  }


  const map=
    $('#rpgMap');


  if(
    map
  ){

    map.onkeydown=
      e=>{

        const k=
          e.key
            .toLowerCase();


        const m={

          arrowup:[
            0,
            -1
          ],

          w:[
            0,
            -1
          ],

          arrowdown:[
            0,
            1
          ],

          s:[
            0,
            1
          ],

          arrowleft:[
            -1,
            0
          ],

          a:[
            -1,
            0
          ],

          arrowright:[
            1,
            0
          ],

          d:[
            1,
            0
          ]

        }[
          k
        ];


        if(
          m
        ){

          e.preventDefault();

          moveRpg(
            ...m
          );

        }

      };

  }


  [

    [
      'rpgUp',
      0,
      -1
    ],

    [
      'rpgDown',
      0,
      1
    ],

    [
      'rpgLeft',
      -1,
      0
    ],

    [
      'rpgRight',
      1,
      0
    ]

  ]
  .forEach(
    (
      [
        id,
        x,
        y
      ]
    )=>{

      $('#'+id)
        .onclick=
          ()=>
            moveRpg(
              x,
              y
            );

    }
  );

}
