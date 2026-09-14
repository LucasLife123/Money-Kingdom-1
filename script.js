const SAVE_KEY="moneyKingdomFullBodyCookiesV1";

let saveData=JSON.parse(
  localStorage.getItem(SAVE_KEY)||"{}"
);

saveData.stages=saveData.stages||{};

saveData.ownedCookies=saveData.ownedCookies||[
  "Coin Cookie",
  "Dollar Cookie",
  "Budget Cookie",
  "Investor Cookie",
  "Violin Cookie",
  "Lucky Cookie",
  "Property Cookie",
  "Banker Cookie"
];


const cookies=[

["Coin Cookie","RARE","Defender","Earth","coin","A steadfast guardian who turns small savings into lasting safety."],

["Dollar Cookie","EPIC","Attacker","Neutral","dollar","Bold and ambitious, Dollar Cookie charges ahead to build a brighter future."],

["Budget Cookie","RARE","Support","Neutral","book","Calm and practical, always keeping every plan in balance."],

["Investor Cookie","EPIC","Support","Nature","leaf","Patient and hopeful, Investor Cookie believes every seed can grow."],

["Banker Cookie","EPIC","Healer / Support","Water","bank","Reliable and composed, offering structure and stability to the team."],

["Credit Cookie","EPIC","Support","Lightning","card","Quick-thinking and flashy, but careful with every promise."],

["Business Cookie","EPIC","Attacker","Fire","briefcase","Driven and energetic, turning ideas into momentum."],

["Tax Cookie","RARE","Support","Neutral","receipt","Orderly, exact, and always prepared with the fine print."],

["Insurance Cookie","EPIC","Defender","Water","shield","Protects friends from the unexpected with layered defenses."],

["Health Cookie","EPIC","Healer","Light","heart","Warm-hearted and attentive, always caring for others first."],

["Education Cookie","RARE","Support","Arcane","book","Curious and encouraging, unlocking knowledge wherever they go."],

["Property Cookie","EPIC","Defender","Earth","house","A sturdy protector who makes every place feel safe and secure."],

["Retirement Cookie","EPIC","Support","Light","sun","Wise and thoughtful, planning for peaceful tomorrows."],

["Side Hustle Cookie","RARE","Attacker","Wind","hammer","Restless and inventive, always chasing the next opportunity."],

["Spendthrift Cookie","EPIC","Bomber","Fire","bag","Excitable and impulsive, burning through resources in a flash."],

["Charity Cookie","EPIC","Healer","Light","gift","A gentle soul who believes true wealth is shared."],

["Sustainability Cookie","EPIC","Support","Nature","recycle","Protects what matters and helps every system last longer."],

["Family Cookie","RARE","Support","Light","homeheart","Keeps the group united with comfort, trust, and warmth."],

["Explorer Cookie","EPIC","Ambush","Wind","compass","Fearless and adventurous, always first to discover a new path."],

["Time Cookie","EPIC","Support","Arcane","clock","Quiet and precise, making every second count."],

["Savings Cookie","RARE","Defender","Earth","pig","Small but dependable, building strength one coin at a time."],

["Security Cookie","EPIC","Defender","Earth","lock","Watches over allies with calm focus and strong barriers."],

["Merchant Cookie","RARE","Support","Neutral","basket","Friendly and clever, always knows what others need."],

["Builder Cookie","RARE","Defender","Earth","hammer","Strong and grounded, raising homes and hopes brick by brick."],

["Harvest Cookie","RARE","Healer","Nature","wheat","Brings nourishment, rest, and simple abundance."],

["Trader Cookie","EPIC","Support","Wind","scale","Balances value and timing with a sharp eye."],

["Analyst Cookie","EPIC","Magic","Arcane","chart","Reads patterns with uncanny clarity and cool precision."],

["Scamwatch Cookie","EPIC","Support","Lightning","search","Never fooled twice—sharp instincts expose danger fast."],

["Piano Cookie","EPIC","Support","Arcane","piano","Elegant melodies strengthen the whole party."],

["Violin Cookie","EPIC","Support","Wind + Arcane","violin","A graceful performer whose music lifts every heart."],

["Drummer Cookie","RARE","Support","Earth","drum","Steady rhythms keep the team's courage alive."],

["Flute Cookie","EPIC","Healer","Wind + Nature","music","Soft melodies drift like a breeze and soothe all wounds."],

["DJ Cookie","SUPER EPIC","Support","Lightning + Arcane","headphones","A modern maestro who electrifies the field with powerful beats."],

["Music Box Cookie","SUPER EPIC","Magic","Ice + Arcane","musicbox","Plays a dreamy tune that traps enemies in a frozen lullaby."],

["Conductor Cookie","SUPER EPIC","Support","Arcane + Light","baton","Directs harmony and momentum with masterful precision."],

["Rockstar Cookie","EPIC","Charge","Lightning + Fire","guitar","Loud, fearless, and impossible to ignore."],

["Saxophone Cookie","EPIC","Magic","Wind","sax","Smooth and stylish, striking with jazzy gusts."],

["Bell Cookie","RARE","Support","Light","bell","Rings out blessings and warding notes."],

["Lucky Cookie","LEGENDARY","All-Rounder","Wind + Light","star","Fortune itself seems to bend toward Lucky Cookie."],

["Golden Cookie","LEGENDARY","Attacker","Light","crown","A radiant hero shining with confidence and power."],

["Chronos Cookie","LEGENDARY","Support","Arcane + Light","hourglass","Controls the flow of battle with timeless calm."],

["Compound Cookie","LEGENDARY","Support","Nature","vine","Steady growth becomes overwhelming strength over time."],

["Diamond Cookie","LEGENDARY","Defender","Earth","diamond","Unbreakable and brilliant, with defenses that sparkle."],

["Opportuna Cookie","LEGENDARY","Ambush","Wind","door","Appears exactly when fate opens a hidden door."],

["Verdantis Cookie","LEGENDARY","Defender","Nature","tree","Protector of the forest and ancient living roots."],

["Stellara Cookie","LEGENDARY","Magic","Light + Arcane","starfall","Calls starfire from above to guide allies and punish foes."],

["Equilibra Cookie","ANCIENT","Support","Neutral","balance","An Ancient who protects balance between abundance and restraint."],

["Sapheon Cookie","ANCIENT","Support","Light","eye","Sees truth clearly and once guided knowledge with kindness."],

["Florentia Cookie","ANCIENT","Healer","Nature + Light","flower","A nurturing Ancient whose gardens once fed entire kingdoms."],

["Liberis Cookie","ANCIENT","All-Rounder","Wind + Light","wing","Bearer of freedom, carrying hope beyond every wall."],

["Memoria Cookie","ANCIENT","Summoner / Defender","Light + Arcane","scroll","Guardian of memory, history, and the wisdom of ages."],

["Greed Cookie","BEAST","Attacker","Dark + Fire","claw","Once noble ambition, now endless hunger made flesh."],

["Deception Cookie","BEAST","Magic","Dark + Arcane","mask","Once keeper of truth, now a master of irresistible lies."],

["Ruin Cookie","BEAST","Bomber","Fire + Dark","crack","Born from growth turned reckless destruction."],

["Debt Cookie","BEAST","Defender","Dark + Earth","chain","Twists promises into chains that are hard to escape."],

["Oblivion Cookie","BEAST","Magic","Dark + Arcane","void","Seeks to erase the pain of memory by erasing everything."],

["Phoenix Sugar Cookie","SUPER EPIC","Attacker","Fire + Light","flame","A blazing fighter said to rise stronger after every fall."],

["Nightmare Cookie","SUPER EPIC","Magic","Dark + Arcane","moon","A dreamwalker whose shadows prey on fear."],

["Paradise Cookie","LEGENDARY","Healer","Nature + Light","flower","Brings peace, renewal, and gentle paradise winds."]

];


const descriptions={

"Frostpeak Mountains":
"A snowy chapter about courage, preparation and learning how to begin.",

"Sunpetal Fields":
"A bright farming region where saving, patience and growth shape the adventure.",

"Azure Coast":
"A lively port where trade, travel, risk and protection become important.",

"Starfall Islands":
"A magical chain of islands where wishes, choices and opportunities collide.",

"Evergreen Woods":
"A deep forest about balance, long-term thinking and sustainable growth.",

"Crystal Caves":
"A mysterious cave system filled with treasure, danger and difficult choices.",

"Willow Marsh":
"A quiet region about small habits, mistakes and steady improvement.",

"The Forgotten Ruins":
"Ancient ruins holding the forgotten lessons of Prospera.",

"Moonlight Lake":
"A dreamlike region where memories and hidden Cookie stories return.",

"Windmill Valley":
"A hardworking valley focused on production, teamwork and progress.",

"Golden Dunes":
"A desert region where resilience matters more than riches.",

"The Republic of Cookies":
"A distant island republic filled with travelers, Guest Cookies and new adventures."

};


const scene=
document.getElementById("scene");

const tooltip=
document.getElementById("tooltip");

const panel=
document.getElementById("panel");

const panelTitle=
document.getElementById("panelTitle");

const panelText=
document.getElementById("panelText");

const panelBody=
document.getElementById("panelBody");

const cookiePanel=
document.getElementById("cookiePanel");

const cookieGrid=
document.getElementById("cookieGrid");

const cookieDetail=
document.getElementById("cookieDetail");

const ownershipTabs=
document.getElementById("ownershipTabs");

const rarityFilters=
document.getElementById("rarityFilters");

const cookieSearch=
document.getElementById("cookieSearch");

const sortSelect=
document.getElementById("sortSelect");

const kingdomPanel=
document.getElementById("kingdomPanel");

const residentField=
document.getElementById("residentField");

const toast=
document.getElementById("toast");


let ownershipFilter="ALL";

let rarityFilter="ALL";

let selectedCookieName=
cookies[0][0];


const rarityClassMap={

"RARE":"rare",

"EPIC":"epic",

"SUPER EPIC":"super-epic",

"LEGENDARY":"legendary",

"ANCIENT":"ancient",

"BEAST":"beast"

};


function hashColor(
  name,
  offset=0
){

  let h=0;

  for(
    let i=0;
    i<name.length;
    i++
  ){

    h=
    (
      h*31+
      name.charCodeAt(i)+
      offset
    )%360;

  }

  return `hsl(${h} 72% 58%)`;

}


function motifSVG(
  type,
  color="#fff6d8"
){

  const stroke=
  "#50321c";

  const s=
  `stroke="${stroke}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"`;

  const fill=
  `fill="${color}"`;


  const map={

    coin:
    `<circle cx="0" cy="0" r="18" ${fill} ${s}/>
    <path d="M-7 0h14M0-8v16" ${s} fill="none"/>`,

    dollar:
    `<path d="M0-19v38M10-12c-3-4-19-6-20 3-1 8 19 5 19 14 0 10-17 9-22 3" ${s} fill="none"/>`,

    book:
    `<path d="M-20-14q10-5 20 1v31q-10-6-20-1zM20-14q-10-5-20 1v31q10-6 20-1z" ${fill} ${s}/>`,

    leaf:
    `<path d="M-18 10Q-12-18 20-18Q16 12-10 18Q2 3 14-10" ${fill} ${s}/>`,

    bank:
    `<path d="M-22-8L0-23 22-8zM-18-6v24M-6-6v24M6-6v24M18-6v24M-24 20h48" ${s} fill="none"/>`,

    card:
    `<rect x="-23" y="-15" width="46" height="30" rx="6" ${fill} ${s}/>
    <path d="M-21-5h42" ${s}/>`,

    briefcase:
    `<rect x="-22" y="-10" width="44" height="28" rx="5" ${fill} ${s}/>
    <path d="M-10-10v-8h20v8M-22 2h44" ${s} fill="none"/>`,

    receipt:
    `<path d="M-16-22h32v44l-5-4-5 4-6-4-6 4-5-4-5 4z" ${fill} ${s}/>
    <path d="M-8-10h16M-8 0h16M-8 10h10" ${s}/>`,

    shield:
    `<path d="M0-22L20-14v14Q16 16 0 24Q-16 16-20 0v-14z" ${fill} ${s}/>`,

    heart:
    `<path d="M0 21L-19 2Q-27-8-18-17Q-8-25 0-12Q8-25 18-17Q27-8 19 2z" ${fill} ${s}/>`,

    house:
    `<path d="M-22 0L0-22 22 0v22h-44zM-7 22V8h14v14" ${fill} ${s}/>`,

    sun:
    `<circle cx="0" cy="0" r="13" ${fill} ${s}/>
    <path d="M0-25v7M0 18v7M-25 0h7M18 0h7M-18-18l5 5M13 13l5 5M18-18l-5 5M-13 13l-5 5" ${s}/>`,

    hammer:
    `<path d="M-18-14h28v12h-28zM1-2l-15 26" ${fill} ${s}/>`,

    bag:
    `<path d="M-18-7h36l-4 29h-28zM-9-7q0-13 9-13t9 13" ${fill} ${s}/>`,

    gift:
    `<rect x="-21" y="-10" width="42" height="30" rx="3" ${fill} ${s}/>
    <path d="M0-10v30M-24-10h48M0-10q-15-3-14-13q11-3 14 13q15-3 14-13q-11-3-14 13" ${s} fill="none"/>`,

    recycle:
    `<path d="M-15-8l8-12 5 10M11-10l9 12-11 1M4 17h-15l6-9" ${s} fill="none"/>`,

    homeheart:
    `<path d="M-22 1L0-20 22 1v21h-44z" ${fill} ${s}/>
    <path d="M0 15L-9 6Q-14 0-9-5Q-4-8 0-2Q4-8 9-5Q14 0 9 6z" fill="#ff8d9d" ${s}/>`,

    compass:
    `<circle cx="0" cy="0" r="21" ${fill} ${s}/>
    <path d="M7-8l-5 15-9 5 5-15z" ${s} fill="none"/>`,

    clock:
    `<circle cx="0" cy="0" r="21" ${fill} ${s}/>
    <path d="M0-11V2l10 7" ${s} fill="none"/>`,

    pig:
    `<ellipse cx="0" cy="3" rx="22" ry="17" ${fill} ${s}/>
    <circle cx="19" cy="-4" r="7" ${fill} ${s}/>
    <path d="M-11-9l-6-7M-1-11l-1-8M-13 20v5M8 20v5" ${s}/>`,

    lock:
    `<rect x="-18" y="-3" width="36" height="25" rx="6" ${fill} ${s}/>
    <path d="M-10-3v-7q0-12 10-12t10 12v7" ${s} fill="none"/>`,

    basket:
    `<path d="M-22-7h44l-5 28h-34zM-12-7q4-16 12-16t12 16" ${fill} ${s}/>`,

    wheat:
    `<path d="M0-22v44M0-15l-10-6M0-8l10-6M0 0l-10-6M0 7l10-6" ${s} fill="none"/>`,

    scale:
    `<path d="M0-22v44M-20-12h40M-15-12l-9 18h18zM15-12L6 6h18z" ${fill} ${s}/>`,

    chart:
    `<path d="M-22 20V-20M-22 20h44M-15 8l8-12 9 6 13-17" ${s} fill="none"/>`,

    search:
    `<circle cx="-4" cy="-5" r="15" ${fill} ${s}/>
    <path d="M7 7l16 16" ${s}/>`,

    piano:
    `<rect x="-22" y="-16" width="44" height="32" rx="5" ${fill} ${s}/>
    <path d="M-13-16v22M-4-16v22M5-16v22M14-16v22" ${s}/>`,

    violin:
    `<path d="M0-22v44M-7-12q-12 5-6 15q6 8 13 3q7 5 13-3q6-10-6-15" ${fill} ${s}/>
    <path d="M8-22h9M12-22v-5" ${s}/>`,

    drum:
    `<ellipse cx="0" cy="-12" rx="20" ry="8" ${fill} ${s}/>
    <path d="M-20-12v26q20 12 40 0v-26" ${fill} ${s}/>
    <path d="M-10-18l-10-9M10-18l10-9" ${s}/>`,

    music:
    `<path d="M5-20v28q-4-6-12-3q-8 3-4 10q4 6 12 2q4-2 4-8V-9l18-5v17q-5-5-12-2q-8 4-4 10q4 6 12 2q4-2 4-8v-31z" ${fill} ${s}/>`,

    headphones:
    `<path d="M-20 4v-6q0-20 20-20t20 20v6M-20 4v13h9V3h-9M20 4v13h-9V3h9" ${fill} ${s}/>`,

    musicbox:
    `<rect x="-20" y="-9" width="40" height="28" rx="5" ${fill} ${s}/>
    <path d="M-10-9q10-15 20 0M0-20v11" ${s} fill="none"/>`,

    baton:
    `<path d="M-20 18L17-19M15-21l6 6" ${s} fill="none"/>`,

    guitar:
    `<path d="M-8 3q-12-5-12 8q0 13 13 9q8-3 6-11l15-19 8 6-16 18q-8 2-14-11z" ${fill} ${s}/>`,

    sax:
    `<path d="M-8-20h16M0-20v20q0 18 14 18q10 0 10-9q0-8-8-8q-7 0-9 6" ${s} fill="none"/>`,

    bell:
    `<path d="M-17 11h34q-7-7-7-20q0-11-10-11t-10 11q0 13-7 20zM-5 15q5 8 10 0" ${fill} ${s}/>`,

    star:
    `<path d="M0-24l7 15 17 2-12 12 3 17-15-8-15 8 3-17-12-12 17-2z" ${fill} ${s}/>`,

    crown:
    `<path d="M-22 13l4-28 12 13 8-18 8 18 12-13 4 28zM-18 19h36" ${fill} ${s}/>`,

    hourglass:
    `<path d="M-16-22h32M-16 22h32M-12-20q0 13 12 20q-12 7-12 20M12-20q0 13-12 20q12 7 12 20" ${fill} ${s}/>`,

    vine:
    `<path d="M-18 18Q-2 10-7-4Q-11-17 5-20Q20-22 18-7Q16 6 2 8Q-8 9-18 18" ${s} fill="none"/>
    <circle cx="-5" cy="2" r="5" ${fill} ${s}/>`,

    diamond:
    `<path d="M-22-6L-12-20h24L22-6 0 24zM-22-6h44M-12-20L0 24M12-20L0 24" ${fill} ${s}/>`,

    door:
    `<path d="M-16-22h32v44h-32zM8 0h2" ${fill} ${s}/>`,

    tree:
    `<path d="M0 4v20M0 4q-16 2-18-11q-2-12 10-15q7-1 8 6q1-7 8-6q12 3 10 15q-2 13-18 11" ${fill} ${s}/>`,

    starfall:
    `<path d="M8-22l5 10 12 2-9 8 3 12-11-6-11 6 3-12-9-8 12-2zM-21 16l10-10M-17 21l10-10" ${fill} ${s}/>`,

    balance:
    `<path d="M0-22v44M-20-12h40M-15-12l-9 18h18zM15-12L6 6h18z" ${fill} ${s}/>`,

    eye:
    `<path d="M-24 0q24-24 48 0q-24 24-48 0z" ${fill} ${s}/>
    <circle cx="0" cy="0" r="7" fill="#fff" ${s}/>`,

    flower:
    `<circle cx="0" cy="0" r="6" fill="#ffcf6e" ${s}/>
    <circle cx="0" cy="-14" r="9" ${fill} ${s}/>
    <circle cx="14" cy="0" r="9" ${fill} ${s}/>
    <circle cx="0" cy="14" r="9" ${fill} ${s}/>
    <circle cx="-14" cy="0" r="9" ${fill} ${s}/>`,

    wing:
    `<path d="M0 18q-20-2-24-18q13 5 18-8q3 12 6 26q20-2 24-18q-13 5-18-8q-3 12-6 26" ${fill} ${s}/>`,

    scroll:
    `<path d="M-16-18h26q8 0 8 8v28h-27q-8 0-8-8t8-8h27M-16-18v28" ${fill} ${s}/>`,

    claw:
    `<path d="M-18 20q7-22 14-35M0 20q2-23 5-38M18 20q-4-22-3-38" ${s} fill="none"/>`,

    mask:
    `<path d="M-22-15q22-12 44 0v18q-4 18-22 22q-18-4-22-22zM-12-4q5-6 10 0M2-4q5-6 10 0" ${fill} ${s}/>`,

    crack:
    `<path d="M0-23L-5-5 7-1-8 10 2 14-5 24" ${s} fill="none"/>`,

    chain:
    `<path d="M-18 8l10-10q6-6 12 0t0 12l-10 10q-6 6-12 0t0-12zM6-20l10 10q6 6 0 12t-12 0L-6-8q-6-6 0-12t12 0z" ${fill} ${s}/>`,

    void:
    `<circle cx="0" cy="0" r="20" fill="#241a32" ${s}/>
    <circle cx="5" cy="-5" r="8" fill="#6d4f90"/>`,

    flame:
    `<path d="M0 24q-18-10-15-27q2-12 12-20q-2 13 6 18q5-8 4-16q14 11 13 26q-1 14-20 19z" ${fill} ${s}/>`,

    moon:
    `<path d="M12-22q-22 6-20 25q2 18 21 18q8 0 13-5q-19 3-22-14q-3-15 8-24z" ${fill} ${s}/>`

  };


  return map[type]||map.star;

}


const EXPRESSIONS=[

  "cheerful",
  "determined",
  "curious",
  "serene",
  "mischievous",
  "confident",
  "gentle",
  "focused",
  "wink",
  "surprised",
  "sleepy",
  "brave",
  "smug",
  "dreamy",
  "stern"

];


function hashNumber(
  text
){

  let h=2166136261;

  for(
    let i=0;
    i<text.length;
    i++
  ){

    h^=
    text.charCodeAt(i);

    h=
    Math.imul(
      h,
      16777619
    );

  }

  return Math.abs(
    h>>>0
  );

}


function cookiePosition(
  role
){

  const r=
  role.toLowerCase();


  if(
    r.includes("summoner")||
    r.includes("support")||
    r.includes("healer")
  ){

    return "REAR";

  }


  if(
    r.includes("defender")||
    r.includes("charge")||
    r.includes("all-rounder")
  ){

    return "FRONT";

  }


  return "MIDDLE";

}


function cookieExpression(
  cookie
){

  const [
    name,
    rarity
  ]=cookie;


  if(
    rarity==="BEAST"
  ){

    const beastFaces=[
      "stern",
      "smug",
      "mischievous",
      "determined"
    ];

    return beastFaces[
      hashNumber(name)%
      beastFaces.length
    ];

  }


  if(
    rarity==="ANCIENT"
  ){

    const ancientFaces=[
      "serene",
      "gentle",
      "focused",
      "brave"
    ];

    return ancientFaces[
      hashNumber(name)%
      ancientFaces.length
    ];

  }


  return EXPRESSIONS[
    hashNumber(name)%
    EXPRESSIONS.length
  ];

}


function expressionSVG(
  cookie,
  outline
){

  const exp=
  cookieExpression(cookie);

  const seed=
  hashNumber(cookie[0]);
  const eyeY =
    78 +
    (seed % 4) -
    2;

  const eyeSep =
    17 +
    (seed % 5);

  const lx =
    110 - eyeSep;

  const rx =
    110 + eyeSep;


  const cheek = `
    <ellipse
      cx="81"
      cy="96"
      rx="8"
      ry="5"
      fill="#ef8a87"
      opacity=".62"
    />

    <ellipse
      cx="139"
      cy="96"
      rx="8"
      ry="5"
      fill="#ef8a87"
      opacity=".62"
    />
  `;


  const openEyes = `
    <ellipse
      cx="${lx}"
      cy="${eyeY}"
      rx="6"
      ry="9"
      fill="${outline}"
    />

    <ellipse
      cx="${rx}"
      cy="${eyeY}"
      rx="6"
      ry="9"
      fill="${outline}"
    />

    <circle
      cx="${lx - 2}"
      cy="${eyeY - 3}"
      r="2.2"
      fill="#fff"
    />

    <circle
      cx="${rx - 2}"
      cy="${eyeY - 3}"
      r="2.2"
      fill="#fff"
    />
  `;


  const happyEyes = `
    <path
      d="M${lx - 7} ${eyeY} Q${lx} ${eyeY - 9} ${lx + 7} ${eyeY}"
      fill="none"
      stroke="${outline}"
      stroke-width="5"
      stroke-linecap="round"
    />

    <path
      d="M${rx - 7} ${eyeY} Q${rx} ${eyeY - 9} ${rx + 7} ${eyeY}"
      fill="none"
      stroke="${outline}"
      stroke-width="5"
      stroke-linecap="round"
    />
  `;


  const sleepyEyes = `
    <path
      d="M${lx - 7} ${eyeY} Q${lx} ${eyeY + 3} ${lx + 7} ${eyeY}"
      fill="none"
      stroke="${outline}"
      stroke-width="5"
      stroke-linecap="round"
    />

    <path
      d="M${rx - 7} ${eyeY} Q${rx} ${eyeY + 3} ${rx + 7} ${eyeY}"
      fill="none"
      stroke="${outline}"
      stroke-width="5"
      stroke-linecap="round"
    />
  `;


  const brows = (a, b) => `
    <path
      d="M${lx - 8} ${eyeY - 15} l16 ${a}"
      stroke="${outline}"
      stroke-width="4"
      stroke-linecap="round"
    />

    <path
      d="M${rx - 8} ${eyeY - 15} l16 ${b}"
      stroke="${outline}"
      stroke-width="4"
      stroke-linecap="round"
    />
  `;


  const smile = `
    <path
      d="M97 98 Q110 111 123 98"
      fill="none"
      stroke="${outline}"
      stroke-width="5"
      stroke-linecap="round"
    />
  `;


  const smallSmile = `
    <path
      d="M102 100 Q110 106 118 100"
      fill="none"
      stroke="${outline}"
      stroke-width="4"
      stroke-linecap="round"
    />
  `;


  const openSmile = `
    <path
      d="M98 98 Q110 116 122 98 Q110 105 98 98Z"
      fill="#7e3a32"
      stroke="${outline}"
      stroke-width="4"
    />
  `;


  const smirk = `
    <path
      d="M101 101 Q113 107 123 98"
      fill="none"
      stroke="${outline}"
      stroke-width="5"
      stroke-linecap="round"
    />
  `;


  const oMouth = `
    <ellipse
      cx="110"
      cy="102"
      rx="6"
      ry="8"
      fill="#7e3a32"
      stroke="${outline}"
      stroke-width="3"
    />
  `;


  switch (exp) {

    case "cheerful":

      return (
        happyEyes +
        cheek +
        openSmile
      );


    case "determined":

      return (
        openEyes +
        brows(5, -5) +
        `
        <path
          d="M101 103 Q110 98 119 103"
          fill="none"
          stroke="${outline}"
          stroke-width="5"
          stroke-linecap="round"
        />
        `
      );


    case "curious":

      return (
        openEyes +
        brows(-2, 5) +
        smallSmile
      );


    case "serene":

      return (
        sleepyEyes +
        cheek +
        smallSmile
      );


    case "mischievous":

      return (
        openEyes +
        brows(4, -1) +
        smirk
      );


    case "confident":

      return (
        openEyes +
        brows(2, -2) +
        smirk
      );


    case "gentle":

      return (
        happyEyes +
        cheek +
        smallSmile
      );


    case "focused":

      return (
        openEyes +
        brows(4, -4) +
        `
        <path
          d="M103 102 h14"
          stroke="${outline}"
          stroke-width="4"
          stroke-linecap="round"
        />
        `
      );


    case "wink":

      return `
        <path
          d="M${lx - 7} ${eyeY} Q${lx} ${eyeY + 4} ${lx + 7} ${eyeY}"
          fill="none"
          stroke="${outline}"
          stroke-width="5"
          stroke-linecap="round"
        />

        <ellipse
          cx="${rx}"
          cy="${eyeY}"
          rx="6"
          ry="9"
          fill="${outline}"
        />

        <circle
          cx="${rx - 2}"
          cy="${eyeY - 3}"
          r="2.2"
          fill="#fff"
        />

        ${cheek}

        ${smile}
      `;


    case "surprised":

      return (
        openEyes +
        brows(-3, 3) +
        oMouth
      );


    case "sleepy":

      return (
        sleepyEyes +
        `
        <path
          d="M103 104 Q110 100 117 104"
          fill="none"
          stroke="${outline}"
          stroke-width="4"
        />
        `
      );


    case "brave":

      return (
        openEyes +
        brows(3, -3) +
        smile
      );


    case "smug":

      return (
        sleepyEyes +
        smirk
      );


    case "dreamy":

      return (
        happyEyes +
        cheek +
        `
        <path
          d="M101 101 Q110 108 119 101"
          fill="none"
          stroke="${outline}"
          stroke-width="4"
        />
        `
      );


    case "stern":

      return (
        openEyes +
        brows(6, -6) +
        `
        <path
          d="M102 104 h16"
          stroke="${outline}"
          stroke-width="5"
          stroke-linecap="round"
        />
        `
      );


    default:

      return (
        openEyes +
        cheek +
        smile
      );

  }

}


/* =========================================================
   RARITY SYMBOL
========================================================= */

function rarityOrnament(rarity) {

  return (
    {
      "RARE": "✦",
      "EPIC": "◆",
      "SUPER EPIC": "✧",
      "LEGENDARY": "✹",
      "ANCIENT": "♛",
      "BEAST": "☾"
    }
  )[rarity] || "✦";

}


/* =========================================================
   COOKIE REVEAL DIALOGUE
========================================================= */

function revealLine(cookie) {

  const specials = {

    "Coin Cookie":
      "Small beginnings can guard the greatest dreams.",

    "Dollar Cookie":
      "Come on. We have a kingdom to build!",

    "Investor Cookie":
      "Give it time. Even tiny seeds remember how to grow.",

    "Lucky Cookie":
      "Fortune favors the Cookie who still takes the first step.",

    "Equilibra Cookie":
      "Prosperity without balance is only another kind of hunger.",

    "Sapheon Cookie":
      "Truth does not need to shout. It only needs to endure.",

    "Florentia Cookie":
      "What we nurture today becomes shelter tomorrow.",

    "Liberis Cookie":
      "No chain is stronger than a Cookie who remembers freedom.",

    "Memoria Cookie":
      "A kingdom survives as long as someone remembers why it mattered.",

    "Greed Cookie":
      "Enough? What a tiny, frightened word.",

    "Deception Cookie":
      "Truth is predictable. Shall we try something more interesting?",

    "Ruin Cookie":
      "If it can be built, it can be broken beautifully.",

    "Debt Cookie":
      "Every promise has a weight. I simply make sure you feel it.",

    "Oblivion Cookie":
      "Close your eyes. Soon there will be nothing left to remember."

  };


  if (specials[cookie[0]]) {

    return specials[cookie[0]];

  }


  const lines = [

    `${cookie[0].replace(" Cookie", "")} is here. Let's make this chance count.`,

    "One good choice can change the road ahead.",

    "I'm ready. Show me where Prospera needs me.",

    "A brighter future? Sounds like something worth fighting for.",

    "We don't need perfect luck. We need a good next step.",

    "Then let's begin with what we have."

  ];


  return lines[
    hashNumber(cookie[0]) %
    lines.length
  ];

}


/* =========================================================
   FULL BODY CHIBI COOKIE
========================================================= */

function fullBodySVG(
  cookie,
  small = false
) {

  const [
    name,
    rarity,
    role,
    element,
    motif
  ] = cookie;


  const primary =
    hashColor(
      name,
      11
    );


  const secondary =
    hashColor(
      name,
      149
    );


  const frosting =
    hashColor(
      name,
      239
    );


  const skin =
    "#d9904f";


  const outline =
    "#5c351e";


  const beast =
    rarity === "BEAST";


  const ancient =
    rarity === "ANCIENT";


  const legendary =
    rarity === "LEGENDARY";


  const position =
    cookiePosition(
      role
    );


  const expression =
    cookieExpression(
      cookie
    );


  const roleLower =
    role.toLowerCase();


  const accessory =
    motifSVG(
      motif,

      beast
        ? "#c294e6"
        : ancient
        ? "#ffe47d"
        : legendary
        ? "#8ff0e1"
        : "#fff2b8"
    );


  const cape =
    ancient ||
    legendary ||
    rarity === "SUPER EPIC" ||
    beast;


  const id =
    name.replace(
      /\W/g,
      ""
    );


  const pose = {

    FRONT: {

      g:
        "translate(-3 4) rotate(-2 110 150)",

      leftArm:
        "M78 136 Q49 132 36 154",

      rightArm:
        "M142 136 Q166 129 181 151",

      leftLeg:
        "M91 181 L78 216",

      rightLeg:
        "M128 183 L140 215",

      shoeL:
        [73, 220, 21, 10],

      shoeR:
        [146, 218, 21, 10]

    },


    MIDDLE: {

      g:
        "translate(0 0) rotate(2 110 150)",

      leftArm:
        "M78 136 Q51 146 43 171",

      rightArm:
        "M142 136 Q167 143 180 163",

      leftLeg:
        "M92 183 L88 218",

      rightLeg:
        "M128 183 L135 215",

      shoeL:
        [83, 223, 20, 10],

      shoeR:
        [140, 220, 20, 10]

    },


    REAR: {

      g:
        "translate(2 0)",

      leftArm:
        "M79 136 Q61 151 55 169",

      rightArm:
        "M141 136 Q153 121 169 114",

      leftLeg:
        "M95 183 L94 217",

      rightLeg:
        "M126 183 L126 217",

      shoeL:
        [90, 222, 19, 10],

      shoeR:
        [130, 222, 19, 10]

    }

  }[position];


  const headShape =
    beast

      ?

      `
      <path
        d="
          M74 46
          Q110 20 146 46
          Q163 71 151 103
          Q143 124 110 129
          Q77 124 69 103
          Q57 71 74 46
          Z
        "
        fill="${skin}"
        stroke="${outline}"
        stroke-width="6"
      />
      `

      :

      `
      <circle
        cx="110"
        cy="78"
        r="48"
        fill="${skin}"
        stroke="${outline}"
        stroke-width="6"
      />
      `;


  const horns =
    beast

      ?

      `
      <path
        d="
          M77 48
          Q56 35 63 16
          Q79 30 88 43

          M143 48
          Q164 35 157 16
          Q141 30 132 43
        "
        fill="${secondary}"
        stroke="${outline}"
        stroke-width="6"
        stroke-linejoin="round"
      />
      `

      :

      "";


  const crown =
    ancient

      ?

      `
      <path
        d="
          M83 37
          L91 16
          L106 31
          L120 11
          L132 31
          L148 17
          L145 41
          Z
        "
        fill="#ffe477"
        stroke="${outline}"
        stroke-width="5"
        stroke-linejoin="round"
      />
      `

      :

      "";


  const halo =
    legendary

      ?

      `
      <ellipse
        cx="110"
        cy="28"
        rx="43"
        ry="10"
        fill="none"
        stroke="#fff2a0"
        stroke-width="6"
      />
      `

      :

      "";


  const capeSvg =
    cape

      ?

      `
      <path
        d="
          M76 128
          Q50 156 63 209
          Q85 197 110 188
          Q135 197 157 209
          Q170 156 144 128
          Z
        "
        fill="${secondary}"
        stroke="${outline}"
        stroke-width="6"
      />
      `

      :

      "";


  let prop = "";


  if (position === "FRONT") {

    prop = `
      <path
        d="
          M174 131
          Q204 124 204 155
          V190
          Q188 205 170 211
          Q151 204 139 188
          V154
          Q143 129 174 131
          Z
        "
        fill="${secondary}"
        stroke="${outline}"
        stroke-width="6"
      />

      <path
        d="
          M171 144v52
          M150 169h42
        "
        stroke="#fff5c7"
        stroke-width="5"
        stroke-linecap="round"
        opacity=".8"
      />
    `;

  }

  else if (position === "MIDDLE") {

    prop =
      roleLower.includes("magic") ||
      roleLower.includes("bomber")

        ?

        `
        <circle
          cx="179"
          cy="126"
          r="26"
          fill="${secondary}"
          stroke="${outline}"
          stroke-width="6"
        />

        <path
          d="
            M179 112v28
            M165 126h28
          "
          stroke="#fff7cf"
          stroke-width="5"
          stroke-linecap="round"
        />
        `

        :

        `
        <path
          d="
            M164 139L202 94
            M187 92l18 17
            M156 145l15 15
          "
          fill="none"
          stroke="${outline}"
          stroke-width="7"
          stroke-linecap="round"
        />
        `;

  }

  else {

    prop =
      roleLower.includes("healer")

        ?

        `
        <circle
          cx="174"
          cy="117"
          r="28"
          fill="${secondary}"
          stroke="${outline}"
          stroke-width="6"
        />

        <path
          d="
            M174 101v32
            M158 117h32
          "
          stroke="#fff8b0"
          stroke-width="8"
          stroke-linecap="round"
        />
        `

        :

        `
        <path
          d="M174 109v92"
          stroke="${outline}"
          stroke-width="7"
          stroke-linecap="round"
        />

        <circle
          cx="174"
          cy="101"
          r="20"
          fill="${secondary}"
          stroke="${outline}"
          stroke-width="6"
        />
        `;

  }


  return `

  <svg
    class="full-cookie-svg ${small ? "mini-cookie-svg" : ""}"
    viewBox="0 0 220 250"
    role="img"
    aria-label="${name}, ${position.toLowerCase()} position, ${expression} expression"
  >

    <defs>

      <linearGradient
        id="body-${id}"
        x1="0"
        y1="0"
        x2="0"
        y2="1"
      >

        <stop
          offset="0"
          stop-color="${primary}"
        />

        <stop
          offset="1"
          stop-color="${secondary}"
        />

      </linearGradient>

    </defs>


    <g transform="${pose.g}">

      ${halo}

      ${capeSvg}

      ${horns}

      ${crown}

      ${headShape}


      <path
        d="
          M73 62
          Q84 34 109 32
          Q135 34 148 61
          Q134 51 126 58
          Q117 43 109 55
          Q99 42 91 57
          Q82 49 73 62
          Z
        "
        fill="${frosting}"
        stroke="${outline}"
        stroke-width="5"
        stroke-linejoin="round"
      />


      ${expressionSVG(cookie, outline)}


      <path
        d="
          M79 122
          Q110 108 141 122
          L151 183
          Q110 201 69 183
          Z
        "
        fill="url(#body-${id})"
        stroke="${outline}"
        stroke-width="6"
      />


      <g
        transform="
          translate(110 151)
          scale(.68)
        "
      >

        ${accessory}

      </g>


      <path
        d="${pose.leftArm}"
        fill="none"
        stroke="${skin}"
        stroke-width="17"
        stroke-linecap="round"
      />


      <path
        d="${pose.rightArm}"
        fill="none"
        stroke="${skin}"
        stroke-width="17"
        stroke-linecap="round"
      />


      <circle
        cx="${
          position === "FRONT"
            ? 36
            : position === "MIDDLE"
            ? 43
            : 55
        }"
        cy="${
          position === "FRONT"
            ? 154
            : position === "MIDDLE"
            ? 171
            : 169
        }"
        r="10"
        fill="${skin}"
        stroke="${outline}"
        stroke-width="5"
      />


      <circle
        cx="${
          position === "FRONT"
            ? 181
            : position === "MIDDLE"
            ? 180
            : 169
        }"
        cy="${
          position === "FRONT"
            ? 151
            : position === "MIDDLE"
            ? 163
            : 114
        }"
        r="10"
        fill="${skin}"
        stroke="${outline}"
        stroke-width="5"
      />


      <path
        d="${pose.leftLeg}"
        stroke="${skin}"
        stroke-width="17"
        stroke-linecap="round"
      />


      <path
        d="${pose.rightLeg}"
        stroke="${skin}"
        stroke-width="17"
        stroke-linecap="round"
      />


      <ellipse
        cx="${pose.shoeL[0]}"
        cy="${pose.shoeL[1]}"
        rx="${pose.shoeL[2]}"
        ry="${pose.shoeL[3]}"
        fill="${secondary}"
        stroke="${outline}"
        stroke-width="5"
      />


      <ellipse
        cx="${pose.shoeR[0]}"
        cy="${pose.shoeR[1]}"
        rx="${pose.shoeR[2]}"
        ry="${pose.shoeR[3]}"
        fill="${secondary}"
        stroke="${outline}"
        stroke-width="5"
      />


      ${prop}

    </g>

  </svg>

  `;

}


/* =========================================================
   FIT MAP TO SCREEN
========================================================= */

function fitScene() {

  const scale =
    Math.min(
      innerWidth / 1536,
      innerHeight / 1024
    );


  scene.style.setProperty(
    "--scale",
    scale
  );

}


fitScene();


addEventListener(
  "resize",
  fitScene
);


/* =========================================================
   SAVE GAME
========================================================= */

function save() {

  localStorage.setItem(
    SAVE_KEY,
    JSON.stringify(saveData)
  );

}


/* =========================================================
   TOAST MESSAGE
========================================================= */

function showToast(msg) {

  toast.textContent =
    msg;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    showToast.t
  );


  showToast.t =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      1600
    );

}


/* =========================================================
   OPEN STORY WORLD
========================================================= */

function openWorld(btn) {

  const name =
    btn.dataset.name;


  const id =
    btn.dataset.id;


  const stages =
    Number(
      btn.dataset.stages ||
      30
    );


  panelTitle.textContent =
    name;


  panelText.textContent =
    descriptions[name] ||
    "Explore this part of Money Kingdom.";


  panelBody.innerHTML =
    "";


  const grid =
    document.createElement(
      "div"
    );


  grid.className =
    "stage-grid";


  for (
    let i = 1;
    i <= stages;
    i++
  ) {

    const key =
      id +
      ":" +
      i;


    const done =
      Boolean(
        saveData.stages[key]
      );


    const b =
      document.createElement(
        "button"
      );


    const type =
      i === 10

        ? "Mini Boss"

        : i === 20

        ? "Story Reveal"

        : i === 30

        ? "World Boss"

        : "Adventure";


    b.className =
      "stage" +
      (
        done
          ? " done"
          : ""
      );


    b.innerHTML = `
      <b>
        Stage ${i}
      </b>

      <br>

      <small>
        ${type}
      </small>

      <br>

      <small>
        ${
          done
            ? "⭐⭐⭐"
            : "☆ ☆ ☆"
        }
      </small>
    `;


    b.onclick =
      () => {

        saveData.stages[key] =
          true;


        save();


        b.classList.add(
          "done"
        );


        b.innerHTML = `
          <b>
            Stage ${i}
          </b>

          <br>

          <small>
            ${type}
          </small>

          <br>

          <small>
            ⭐⭐⭐
          </small>
        `;


        showToast(
          `${name} Stage ${i} cleared!`
        );

      };


    grid.appendChild(
      b
    );

  }


  panelBody.appendChild(
    grid
  );


  panel.classList.add(
    "open"
  );

}


/* =========================================================
   BEAST AREA
========================================================= */

function openBeasts(name) {

  panelTitle.textContent =
    name;


  panelText.innerHTML = `
    The five Beast prisons
    each contain
    <b>100 stages</b>
    and hold the fallen
    wonders of the world.
  `;


  panelBody.innerHTML =
    "";


  const g =
    document.createElement(
      "div"
    );


  g.className =
    "stage-grid";


  [
    "Greed",
    "Deception",
    "Ruin",
    "Debt",
    "Oblivion"
  ]

  .forEach(
    x => {

      const b =
        document.createElement(
          "button"
        );


      b.className =
        "stage";


      b.innerHTML = `
        <b>
          ${x}
        </b>

        <br>

        <small>
          100 Stages
        </small>
      `;


      b.onclick =
        () => {

          showToast(
            `${x} prison selected`
          );

        };


      g.appendChild(
        b
      );

    }
  );


  panelBody.appendChild(
    g
  );


  panel.classList.add(
    "open"
  );

}


/* =========================================================
   OWNERSHIP FILTERS
========================================================= */

function renderOwnershipTabs() {

  const tabs = [
    "ALL",
    "OWNED",
    "NOT OBTAINED"
  ];


  ownershipTabs.innerHTML =
    "";


  tabs.forEach(
    t => {

      const b =
        document.createElement(
          "button"
        );


      b.className =
        "seg-btn" +
        (
          ownershipFilter === t
            ? " active"
            : ""
        );


      b.textContent =
        t;


      b.onclick =
        () => {

          ownershipFilter =
            t;


          renderOwnershipTabs();


          renderCookieCollection();

        };


      ownershipTabs.appendChild(
        b
      );

    }
  );

}


/* =========================================================
   RARITY FILTERS
========================================================= */

function renderRarityFilters() {

  const list = [
    "ALL",
    "RARE",
    "EPIC",
    "SUPER EPIC",
    "LEGENDARY",
    "ANCIENT",
    "BEAST"
  ];


  rarityFilters.innerHTML =
    "";


  list.forEach(
    t => {

      const b =
        document.createElement(
          "button"
        );


      b.className =
        "rarity-btn" +
        (
          rarityFilter === t
            ? " active"
            : ""
        );


      b.textContent =
        t;


      b.onclick =
        () => {

          rarityFilter =
            t;


          renderRarityFilters();


          renderCookieCollection();

        };


      rarityFilters.appendChild(
        b
      );

    }
  );

}


/* =========================================================
   FILTER COOKIE LIST
========================================================= */

function filteredCookies() {

  const term =
    (
      cookieSearch.value ||
      ""
    )
    .trim()
    .toLowerCase();


  let list =
    [...cookies];


  if (
    ownershipFilter ===
    "OWNED"
  ) {

    list =
      list.filter(
        c =>
          saveData.ownedCookies.includes(
            c[0]
          )
      );

  }


  if (
    ownershipFilter ===
    "NOT OBTAINED"
  ) {

    list =
      list.filter(
        c =>
          !saveData.ownedCookies.includes(
            c[0]
          )
      );

  }


  if (
    rarityFilter !==
    "ALL"
  ) {

    list =
      list.filter(
        c =>
          c[1] === rarityFilter
      );

  }


  if (term) {

    list =
      list.filter(
        c =>
          c[0]
            .toLowerCase()
            .includes(term)
      );

  }


  const sortMode =
    sortSelect.value;


  if (
    sortMode ===
    "name"
  ) {

    list.sort(
      (a, b) =>
        a[0].localeCompare(
          b[0]
        )
    );

  }


  if (
    sortMode ===
    "owned"
  ) {

    list.sort(
      (a, b) =>

        Number(
          saveData.ownedCookies.includes(
            b[0]
          )
        )

        -

        Number(
          saveData.ownedCookies.includes(
            a[0]
          )
        )

        ||

        a[0].localeCompare(
          b[0]
        )
    );

  }


  if (
    sortMode ===
    "rarity"
  ) {

    const order = {
      "BEAST": 0,
      "ANCIENT": 1,
      "LEGENDARY": 2,
      "SUPER EPIC": 3,
      "EPIC": 4,
      "RARE": 5
    };


    list.sort(
      (a, b) =>

        (
          order[a[1]] ??
          99
        )

        -

        (
          order[b[1]] ??
          99
        )

        ||

        a[0].localeCompare(
          b[0]
        )
    );

  }


  return list;

}


/* =========================================================
   SELECTED COOKIE DETAIL
========================================================= */

function renderCookieDetail(cookie) {

  const owned =
    saveData.ownedCookies.includes(
      cookie[0]
    );


  const rc =
    rarityClassMap[
      cookie[1]
    ];


  const position =
    cookiePosition(
      cookie[2]
    );


  const expression =
    cookieExpression(
      cookie
    );


  cookieDetail.innerHTML = `

    <div
      class="detail-portrait-wrap ${rc}"
    >

      ${
        fullBodySVG(
          cookie,
          false
        )
      }

    </div>


    <div
      class="detail-rarity ${rc}"
    >

      ${
        rarityOrnament(
          cookie[1]
        )
      }

      ${cookie[1]}

    </div>


    <div
      class="detail-name"
    >

      ${cookie[0]}

    </div>


    <div
      class="detail-meta"
    >

      <b>Role:</b>
      ${cookie[2]}

      <br>

      <b>Element:</b>
      ${cookie[3]}

      <br>

      <b>Position:</b>
      ${position}

      <br>

      <b>Expression:</b>
      ${expression}

    </div>


    <div
      class="
        detail-status
        ${
          owned
            ? ""
            : "locked"
        }
      "
    >

      ${
        owned

          ? "Owned • Ready for Adventure"

          : "Not Obtained • Visible in Collection"
      }

    </div>


    <div
      class="detail-lore"
    >

      ${cookie[5]}

    </div>

  `;

}
/* =========================================================
   COOKIE COLLECTION GRID
========================================================= */

function renderCookieCollection() {

  const list =
    filteredCookies();


  const ownedCount =
    document.getElementById(
      "ownedCount"
    );


  const totalCount =
    document.getElementById(
      "totalCount"
    );


  const gridCount =
    document.getElementById(
      "gridCount"
    );


  if (ownedCount) {

    ownedCount.textContent =
      saveData.ownedCookies.length;

  }


  if (totalCount) {

    totalCount.textContent =
      cookies.length;

  }


  if (gridCount) {

    gridCount.textContent =
      `${list.length} Cookies`;

  }


  if (
    !list.find(
      c =>
        c[0] ===
        selectedCookieName
    )
    &&
    list.length
  ) {

    selectedCookieName =
      list[0][0];

  }


  const selected =
    list.find(
      c =>
        c[0] ===
        selectedCookieName
    )
    ||
    cookies[0];


  renderCookieDetail(
    selected
  );


  cookieGrid.innerHTML =
    "";


  list.forEach(
    cookie => {

      const owned =
        saveData.ownedCookies.includes(
          cookie[0]
        );


      const rc =
        rarityClassMap[
          cookie[1]
        ];


      const position =
        cookiePosition(
          cookie[2]
        );


      const expression =
        cookieExpression(
          cookie
        );


      const card =
        document.createElement(
          "article"
        );


      card.className = `
        cookie-card
        ${
          owned
            ? ""
            : "unowned"
        }
        ${
          selectedCookieName === cookie[0]
            ? "selected"
            : ""
        }
      `;


      card.innerHTML = `

        ${
          owned
            ? ""
            : `
              <div
                class="not-obtained"
              >
                NOT OBTAINED
              </div>
            `
        }


        <div
          class="rarity-crest ${rc}"
          title="${cookie[1]}"
        >

          ${
            rarityOrnament(
              cookie[1]
            )
          }

        </div>


        <div
          class="cookie-frame ${rc}"
        >

          ${
            fullBodySVG(
              cookie,
              true
            )
          }

        </div>


        <div
          class="cookie-name"
        >

          ${cookie[0]}

        </div>


        <div
          class="cookie-role"
        >

          ${cookie[2]}

        </div>


        <div
          class="cookie-badges"
        >

          <span
            class="badge rarity ${rc}"
          >

            ${cookie[1]}

          </span>


          <span
            class="badge state"
          >

            ${position}

          </span>

        </div>


        <div
          class="cookie-badges"
        >

          <span
            class="badge state"
          >

            ${expression}

          </span>


          <span
            class="badge state"
          >

            ${
              owned
                ? "Owned"
                : "Locked"
            }

          </span>

        </div>

      `;


      card.addEventListener(
        "click",
        () => {

          selectedCookieName =
            cookie[0];


          renderCookieCollection();


          showToast(
            owned
              ? `${cookie[0]} selected`
              : `${cookie[0]} has not been obtained yet`
          );

        }
      );


      card.addEventListener(
        "dblclick",
        () => {

          openGachaReveal(
            cookie,
            false
          );

        }
      );


      cookieGrid.appendChild(
        card
      );

    }
  );

}


/* =========================================================
   GACHA / TREE OF FORTUNE
========================================================= */

let gachaTimers =
  [];


/* CLEAR OLD ANIMATION TIMERS */

function clearGachaTimers() {

  gachaTimers.forEach(
    timer => {

      clearTimeout(
        timer
      );

    }
  );


  gachaTimers =
    [];

}


/* =========================================================
   RANDOM SUMMON
========================================================= */

function pickRandomCookie() {

  const weights = {

    "RARE":
      45,

    "EPIC":
      34,

    "SUPER EPIC":
      10,

    "LEGENDARY":
      6,

    "ANCIENT":
      4,

    "BEAST":
      1

  };


  const pool =
    [];


  cookies.forEach(
    cookie => {

      const amount =
        weights[
          cookie[1]
        ]
        ||
        1;


      for (
        let i = 0;
        i < amount;
        i++
      ) {

        pool.push(
          cookie
        );

      }

    }
  );


  return pool[
    Math.floor(
      Math.random() *
      pool.length
    )
  ];

}


/* =========================================================
   CREATE GACHA UI
========================================================= */

function ensureGachaUI() {

  if (
    document.getElementById(
      "gachaPanel"
    )
  ) {

    return;

  }


  const gachaPanel =
    document.createElement(
      "div"
    );


  gachaPanel.id =
    "gachaPanel";


  gachaPanel.className =
    "overlay gacha-overlay";


  gachaPanel.innerHTML = `

    <div
      class="gacha-card"
      id="gachaCard"
    >

      <button
        class="close gacha-close"
        id="closeGacha"
        aria-label="Close summon screen"
      >
        ✕
      </button>


      <div
        class="gacha-stage"
        id="gachaStage"
      >


        <div
          class="gacha-rings"
        >

          <i></i>
          <i></i>
          <i></i>

        </div>


        <div
          class="gacha-tree"
        >

          <div
            class="tree-crown"
          ></div>


          <div
            class="tree-trunk"
          ></div>


          <div
            class="tree-seed"
          >
            ✦
          </div>

        </div>


        <div
          class="gacha-particles"
          id="gachaParticles"
        ></div>


        <div
          class="gacha-silhouette"
          id="gachaSilhouette"
        ></div>


        <div
          class="gacha-character"
          id="gachaCharacter"
        ></div>


        <div
          class="gacha-flash"
        ></div>

      </div>


      <div
        class="gacha-copy"
      >

        <div
          class="gacha-kicker"
          id="gachaKicker"
        >
          THE TREE OF FORTUNE STIRS...
        </div>


        <div
          class="gacha-rarity"
          id="gachaRarity"
        >
          FORTUNE SUMMON
        </div>


        <h2
          id="gachaName"
        >
          A Golden Seed is glowing...
        </h2>


        <div
          class="gacha-tags"
          id="gachaTags"
        ></div>


        <p
          class="gacha-quote"
          id="gachaQuote"
        >
          The Tree of Fortune is calling someone to Prospera.
        </p>

      </div>


      <div
        class="gacha-actions"
      >

        <button
          class="gacha-primary"
          id="summonAgain"
        >
          Summon Again
        </button>


        <button
          class="gacha-secondary"
          id="closeGachaContinue"
        >
          Continue
        </button>

      </div>

    </div>

  `;


  document.body.appendChild(
    gachaPanel
  );


  document
    .getElementById(
      "closeGacha"
    )
    .addEventListener(
      "click",
      closeGacha
    );


  document
    .getElementById(
      "closeGachaContinue"
    )
    .addEventListener(
      "click",
      closeGacha
    );


  document
    .getElementById(
      "summonAgain"
    )
    .addEventListener(
      "click",
      () => {

        openGachaReveal(
          pickRandomCookie(),
          true
        );

      }
    );


  gachaPanel.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        gachaPanel
      ) {

        closeGacha();

      }

    }
  );

}


/* =========================================================
   CLOSE GACHA
========================================================= */

function closeGacha() {

  clearGachaTimers();


  const gp =
    document.getElementById(
      "gachaPanel"
    );


  if (gp) {

    gp.classList.remove(
      "open"
    );

  }

}


/* =========================================================
   GACHA PARTICLES
========================================================= */

function makeParticles(
  rarity
) {

  const holder =
    document.getElementById(
      "gachaParticles"
    );


  if (!holder) {

    return;

  }


  holder.innerHTML =
    "";


  let count =
    28;


  if (
    rarity ===
    "LEGENDARY"
  ) {

    count =
      40;

  }


  if (
    rarity ===
    "ANCIENT"
    ||
    rarity ===
    "BEAST"
  ) {

    count =
      50;

  }


  for (
    let i = 0;
    i < count;
    i++
  ) {

    const spark =
      document.createElement(
        "span"
      );


    spark.style.setProperty(
      "--x",

      `${
        Math.round(
          (
            Math.random() -
            0.5
          )
          *
          520
        )
      }px`
    );


    spark.style.setProperty(
      "--y",

      `${
        Math.round(
          (
            Math.random() -
            0.5
          )
          *
          360
        )
      }px`
    );


    spark.style.setProperty(
      "--delay",

      `${
        (
          Math.random() *
          0.8
        )
        .toFixed(2)
      }s`
    );


    spark.style.setProperty(
      "--size",

      `${
        4 +
        Math.random() *
        9
      }px`
    );


    holder.appendChild(
      spark
    );

  }

}


/* =========================================================
   OPEN COOKIE REVEAL
========================================================= */

function openGachaReveal(
  cookie,
  summoned = true
) {

  ensureGachaUI();


  clearGachaTimers();


  const gp =
    document.getElementById(
      "gachaPanel"
    );


  const card =
    document.getElementById(
      "gachaCard"
    );


  const rc =
    rarityClassMap[
      cookie[1]
    ];


  const position =
    cookiePosition(
      cookie[2]
    );


  const expression =
    cookieExpression(
      cookie
    );


  card.className =
    `gacha-card gacha-${rc}`;


  gp.classList.add(
    "open"
  );


  gp.classList.remove(
    "is-charging"
  );


  gp.classList.remove(
    "is-revealed"
  );


  const character =
    document.getElementById(
      "gachaCharacter"
    );


  const silhouette =
    document.getElementById(
      "gachaSilhouette"
    );


  character.innerHTML =
    fullBodySVG(
      cookie,
      false
    );


  silhouette.innerHTML =
    fullBodySVG(
      cookie,
      false
    );


  document
    .getElementById(
      "gachaKicker"
    )
    .textContent =

      summoned

        ? "THE TREE OF FORTUNE STIRS..."

        : "COOKIE MEMORY REVEAL";


  document
    .getElementById(
      "gachaRarity"
    )
    .textContent =
      "FORTUNE SUMMON";


  document
    .getElementById(
      "gachaName"
    )
    .textContent =
      "A Golden Seed is glowing...";


  document
    .getElementById(
      "gachaTags"
    )
    .innerHTML =
      "";


  document
    .getElementById(
      "gachaQuote"
    )
    .textContent =
      "The light is getting stronger...";


  makeParticles(
    cookie[1]
  );


  /* START CHARGING */

  gachaTimers.push(

    setTimeout(
      () => {

        gp.classList.add(
          "is-charging"
        );

      },

      180
    )

  );


  /* REVEAL COOKIE */

  gachaTimers.push(

    setTimeout(
      () => {

        gp.classList.add(
          "is-revealed"
        );


        document
          .getElementById(
            "gachaKicker"
          )
          .textContent =

            summoned

              ? "A NEW COOKIE HAS ANSWERED"

              : "COOKIE MEMORY";


        document
          .getElementById(
            "gachaRarity"
          )
          .textContent =
            `${
              rarityOrnament(
                cookie[1]
              )
            } ${cookie[1]}`;


        document
          .getElementById(
            "gachaName"
          )
          .textContent =
            cookie[0];


        document
          .getElementById(
            "gachaTags"
          )
          .innerHTML = `

            <span>
              ${position}
            </span>

            <span>
              ${cookie[2]}
            </span>

            <span>
              ${cookie[3]}
            </span>

            <span>
              ${expression}
            </span>

          `;


        document
          .getElementById(
            "gachaQuote"
          )
          .textContent =
            revealLine(
              cookie
            );


        /* ADD COOKIE TO OWNED LIST */

        if (
          summoned
          &&
          !saveData.ownedCookies.includes(
            cookie[0]
          )
        ) {

          saveData.ownedCookies.push(
            cookie[0]
          );


          save();


          renderCookieCollection();


          showToast(
            `${cookie[0]} joined your kingdom!`
          );

        }

        else if (
          summoned
        ) {

          showToast(
            `${cookie[0]} was summoned again!`
          );

        }

      },

      1100
    )

  );

}


/* =========================================================
   KINGDOM RESIDENTS
========================================================= */

let residentTimers =
  [];


/* CLEAR MOVEMENT TIMERS */

function clearResidents() {

  residentTimers.forEach(
    timer => {

      clearInterval(
        timer
      );

    }
  );


  residentTimers =
    [];

}


/* =========================================================
   SHOW OWNED COOKIES IN KINGDOM
========================================================= */

function renderResidents() {

  clearResidents();


  residentField.innerHTML =
    "";


  const owned =
    cookies.filter(
      cookie =>

        saveData
          .ownedCookies
          .includes(
            cookie[0]
          )

    );


  owned.forEach(
    (
      cookie,
      index
    ) => {

      const resident =
        document.createElement(
          "div"
        );


      resident.className =
        "resident full-resident";


      resident.innerHTML = `

        ${
          fullBodySVG(
            cookie,
            true
          )
        }


        <div
          class="resident-name"
        >
          ${cookie[0]}
        </div>

      `;


      resident.style.left =
        (
          30 +
          (
            index *
            110
          )
          %
          850
        )
        +
        "px";


      resident.style.top =
        (
          280 +
          (
            index %
            3
          )
          *
          70
        )
        +
        "px";


      residentField.appendChild(
        resident
      );


      resident.addEventListener(
        "click",
        () => {

          showToast(
            revealLine(
              cookie
            )
          );

        }
      );


      const timer =
        setInterval(
          () => {

            const maxX =
              Math.max(
                120,
                residentField.clientWidth -
                110
              );


            const maxY =
              Math.max(
                320,
                residentField.clientHeight -
                120
              );


            resident.style.left =
              (
                20 +
                Math.random() *
                (
                  maxX -
                  20
                )
              )
              +
              "px";


            resident.style.top =
              (
                245 +
                Math.random() *
                (
                  maxY -
                  245
                )
              )
              +
              "px";

          },

          2500 +
          Math.random() *
          1600

        );


      residentTimers.push(
        timer
      );

    }
  );

}


/* =========================================================
   STORY WORLD BUTTONS
========================================================= */

document
  .querySelectorAll(
    ".world"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          openWorld(
            button
          );

        }
      );

    }
  );


/* =========================================================
   BEAST BUTTONS
========================================================= */

document
  .querySelectorAll(
    ".beast"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          openBeasts(
            button.dataset.name
          );

        }
      );

    }
  );


/* =========================================================
   MAIN ACTION BUTTONS
========================================================= */

document
  .querySelectorAll(
    ".action"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const action =
            button.dataset.action;


          /* COOKIE COLLECTION */

          if (
            action ===
            "cookies"
          ) {

            renderOwnershipTabs();

            renderRarityFilters();

            renderCookieCollection();


            cookiePanel.classList.add(
              "open"
            );


            return;

          }


          /* KINGDOM */

          if (
            action ===
            "kingdom"
          ) {

            renderResidents();


            kingdomPanel.classList.add(
              "open"
            );


            return;

          }


          /* SUMMON */

          if (
            action ===
            "summon"
          ) {

            openGachaReveal(
              pickRandomCookie(),
              true
            );


            return;

          }


          /* WORLD MAP */

          if (
            action ===
            "map"
          ) {

            showToast(
              "World Map"
            );


            return;

          }


          /* WONDERLANDS */

          if (
            action ===
            "wonderlands"
          ) {

            showToast(
              "The Wonder Gate is waiting..."
            );


            return;

          }


          /* PLACEHOLDER ACTION */

          showToast(
            button.dataset.name ||
            action
          );

        }
      );

    }
  );


/* =========================================================
   SUMMON BUTTON INSIDE COLLECTION
========================================================= */

const summonOneButton =
  document.getElementById(
    "summonOneButton"
  );


if (
  summonOneButton
) {

  summonOneButton.addEventListener(
    "click",
    () => {

      openGachaReveal(
        pickRandomCookie(),
        true
      );

    }
  );

}


/* =========================================================
   MAP HOTSPOT TOOLTIPS
========================================================= */

document
  .querySelectorAll(
    ".hotspot"
  )
  .forEach(
    button => {

      button.addEventListener(
        "mouseenter",
        () => {

          tooltip.textContent =
            button.dataset.name ||
            "Open";


          tooltip.style.display =
            "block";

        }
      );


      button.addEventListener(
        "mousemove",
        event => {

          tooltip.style.left =
            (
              event.clientX +
              14
            )
            +
            "px";


          tooltip.style.top =
            (
              event.clientY +
              14
            )
            +
            "px";

        }
      );


      button.addEventListener(
        "mouseleave",
        () => {

          tooltip.style.display =
            "none";

        }
      );

    }
  );


/* =========================================================
   COOKIE SEARCH
========================================================= */

cookieSearch.addEventListener(
  "input",
  renderCookieCollection
);


/* =========================================================
   COOKIE SORT
========================================================= */

sortSelect.addEventListener(
  "change",
  renderCookieCollection
);


/* =========================================================
   CLOSE STORY PANEL
========================================================= */

const closePanelButton =
  document.getElementById(
    "closePanel"
  );


if (
  closePanelButton
) {

  closePanelButton.addEventListener(
    "click",
    () => {

      panel.classList.remove(
        "open"
      );

    }
  );

}


/* =========================================================
   CLOSE COOKIE COLLECTION
========================================================= */

const closeCookiesButton =
  document.getElementById(
    "closeCookies"
  );


if (
  closeCookiesButton
) {

  closeCookiesButton.addEventListener(
    "click",
    () => {

      cookiePanel.classList.remove(
        "open"
      );

    }
  );

}


/* =========================================================
   CLOSE KINGDOM
========================================================= */

const closeKingdomButton =
  document.getElementById(
    "closeKingdom"
  );


if (
  closeKingdomButton
) {

  closeKingdomButton.addEventListener(
    "click",
    () => {

      kingdomPanel.classList.remove(
        "open"
      );


      clearResidents();

    }
  );

}


/* =========================================================
   CLICK BACKGROUND TO CLOSE PANELS
========================================================= */

[
  panel,
  cookiePanel,
  kingdomPanel
]

.forEach(
  overlay => {

    if (!overlay) {

      return;

    }


    overlay.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          overlay
        ) {

          overlay.classList.remove(
            "open"
          );


          if (
            overlay ===
            kingdomPanel
          ) {

            clearResidents();

          }

        }

      }
    );

  }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key !==
      "Escape"
    ) {

      return;

    }


    panel.classList.remove(
      "open"
    );


    cookiePanel.classList.remove(
      "open"
    );


    kingdomPanel.classList.remove(
      "open"
    );


    closeGacha();


    clearResidents();

  }
);


/* =========================================================
   MAP IMAGE CHECK

   If money-kingdom-map.png is missing,
   this shows an error message instead
   of leaving you with only a blue screen.
========================================================= */

const mapImageElement =
  document.getElementById(
    "mapImage"
  );


const mapErrorElement =
  document.getElementById(
    "mapError"
  );


if (
  mapImageElement &&
  mapErrorElement
) {

  mapImageElement.addEventListener(
    "load",
    () => {

      mapErrorElement.hidden =
        true;

    }
  );


  mapImageElement.addEventListener(
    "error",
    () => {

      mapErrorElement.hidden =
        false;

    }
  );


  if (
    mapImageElement.complete
  ) {

    if (
      mapImageElement.naturalWidth >
      0
    ) {

      mapErrorElement.hidden =
        true;

    }

    else {

      mapErrorElement.hidden =
        false;

    }

  }

}


/* =========================================================
   INITIALIZE MONEY KINGDOM
========================================================= */

ensureGachaUI();


renderOwnershipTabs();


renderRarityFilters();


renderCookieCollection();


save();


console.log(
  "Money Kingdom loaded successfully."
);
