const qs = (s, root = document) => root.querySelector(s);
const qsa = (s, root = document) => [...root.querySelectorAll(s)];

const SAVE_KEY = "moneyKingdomVisualV3";

const SCENE_W = 1536;
const SCENE_H = 1024;

const HOUSE_COST = 2500;
const HOUSE_CAPACITY = 4;

/* =========================================================
   COOKIE DATA
========================================================= */

const COOKIE_DATA = [
  {
    name: "Coin Cookie",
    rarity: "RARE",
    role: "Defender",
    position: "Front",
    element: "Earth",
    level: 20,
    power: 4500,
    dough: "#cf8f59",
    hair: "#f1cf67",
    outfit: "#af7625",
    outfit2: "#6c471b",
    accent: "#e0a935",
    badge: "#f3c14d",
    prop: "coin"
  },

  {
    name: "Dollar Cookie",
    rarity: "EPIC",
    role: "Attacker",
    position: "Middle",
    element: "Light",
    level: 26,
    power: 5900,
    dough: "#d89b65",
    hair: "#6ebd75",
    outfit: "#2b7b58",
    outfit2: "#174b40",
    accent: "#315f46",
    badge: "#f0c24f",
    prop: "coin",
    hat: true
  },

  {
    name: "Budget Cookie",
    rarity: "RARE",
    role: "Support",
    position: "Rear",
    element: "Neutral",
    level: 18,
    power: 3900,
    dough: "#d0925f",
    hair: "#df735f",
    outfit: "#7f4863",
    outfit2: "#4c2e48",
    accent: "#704253",
    badge: "#eec86b",
    prop: "book"
  },

  {
    name: "Investor Cookie",
    rarity: "EPIC",
    role: "Support",
    position: "Rear",
    element: "Nature",
    level: 24,
    power: 5600,
    dough: "#ce8f5b",
    hair: "#314d6f",
    outfit: "#304d71",
    outfit2: "#1d304c",
    accent: "#263e5f",
    badge: "#7fce6b",
    prop: "book"
  },

  {
    name: "Banker Cookie",
    rarity: "EPIC",
    role: "Healer",
    position: "Rear",
    element: "Water",
    level: 25,
    power: 5700,
    dough: "#bc8055",
    hair: "#f3e6d7",
    outfit: "#242d44",
    outfit2: "#171e30",
    accent: "#272334",
    badge: "#e5ba50",
    prop: "book",
    hat: true
  },

  {
    name: "Violin Cookie",
    rarity: "EPIC",
    role: "Support",
    position: "Rear",
    element: "Light",
    level: 22,
    power: 5100,
    dough: "#d1915f",
    hair: "#7c4aa8",
    outfit: "#58326d",
    outfit2: "#321e46",
    accent: "#5f3678",
    badge: "#d99bf0",
    prop: "violin"
  },

  {
    name: "Property Cookie",
    rarity: "EPIC",
    role: "Defender",
    position: "Front",
    element: "Earth",
    level: 23,
    power: 5400,
    dough: "#d59a68",
    hair: "#e96f71",
    outfit: "#8f4d3c",
    outfit2: "#5b302e",
    accent: "#8d4738",
    badge: "#e0c177",
    prop: "hammer"
  },

  {
    name: "Lucky Cookie",
    rarity: "LEGENDARY",
    role: "Support",
    position: "Rear",
    element: "Wind",
    level: 30,
    power: 8100,
    dough: "#d89a62",
    hair: "#afe36f",
    outfit: "#277448",
    outfit2: "#174b35",
    accent: "#24673f",
    badge: "#e7c84f",
    prop: "clover",
    hat: true
  },

  {
    name: "Builder Cookie",
    rarity: "RARE",
    role: "Defender",
    position: "Front",
    element: "Earth",
    level: 20,
    power: 4300,
    dough: "#ba794f",
    hair: "#6e3d2f",
    outfit: "#9d622d",
    outfit2: "#5d3e27",
    accent: "#dca543",
    badge: "#e2b749",
    prop: "hammer",
    hat: true
  },

  {
    name: "Health Cookie",
    rarity: "RARE",
    role: "Healer",
    position: "Rear",
    element: "Nature",
    level: 18,
    power: 3850,
    dough: "#dc9b6c",
    hair: "#f49cb8",
    outfit: "#b64f78",
    outfit2: "#713754",
    accent: "#b24f74",
    badge: "#f2b3c9",
    prop: "book"
  },

  {
    name: "Education Cookie",
    rarity: "RARE",
    role: "Support",
    position: "Rear",
    element: "Light",
    level: 18,
    power: 3950,
    dough: "#c7895e",
    hair: "#74bce7",
    outfit: "#3c6b95",
    outfit2: "#274b73",
    accent: "#3a6090",
    badge: "#f0d36b",
    prop: "book"
  },

  {
    name: "Charity Cookie",
    rarity: "EPIC",
    role: "Healer",
    position: "Rear",
    element: "Light",
    level: 20,
    power: 4700,
    dough: "#d99c6b",
    hair: "#f1c674",
    outfit: "#b66076",
    outfit2: "#714052",
    accent: "#b75c71",
    badge: "#ffd786",
    prop: "clover"
  },

  {
    name: "Savings Cookie",
    rarity: "EPIC",
    role: "Support",
    position: "Middle",
    element: "Water",
    level: 21,
    power: 4880,
    dough: "#cc8b5b",
    hair: "#79c7ca",
    outfit: "#2a6e75",
    outfit2: "#174a53",
    accent: "#2d6570",
    badge: "#94e4db",
    prop: "coin"
  },

  {
    name: "Merchant Cookie",
    rarity: "EPIC",
    role: "Attacker",
    position: "Middle",
    element: "Wind",
    level: 20,
    power: 4750,
    dough: "#d39861",
    hair: "#e6b858",
    outfit: "#8a5e33",
    outfit2: "#5d3f29",
    accent: "#825430",
    badge: "#ebc252",
    prop: "coin",
    hat: true
  },

  {
    name: "Explorer Cookie",
    rarity: "EPIC",
    role: "Attacker",
    position: "Front",
    element: "Wind",
    level: 19,
    power: 4550,
    dough: "#ca895b",
    hair: "#704931",
    outfit: "#476845",
    outfit2: "#2b4934",
    accent: "#4e6740",
    badge: "#a5d26b",
    prop: "book",
    hat: true
  },

  {
    name: "Equilibra Cookie",
    rarity: "ANCIENT",
    role: "Support",
    position: "Middle",
    element: "Neutral",
    level: 40,
    power: 12800,
    dough: "#d79864",
    hair: "#eee4cf",
    outfit: "#d4b35a",
    outfit2: "#6c5d3d",
    accent: "#ede1b8",
    badge: "#fff0a2",
    prop: "coin"
  },

  {
    name: "Greed Cookie",
    rarity: "BEAST",
    role: "Attacker",
    position: "Front",
    element: "Dark",
    level: 40,
    power: 13400,
    dough: "#b47153",
    hair: "#2c253b",
    outfit: "#4f2141",
    outfit2: "#1f1525",
    accent: "#332039",
    badge: "#e09b43",
    prop: "coin",
    hat: true
  }
];


/* =========================================================
   DEFAULT SAVE
========================================================= */

const DEFAULT_SAVE = {
  playerLevel: 12,

  coins: 25000,
  gems: 1200,
  wood: 340,
  stone: 220,
  tickets: 25,

  ownedCookies: [
    "Coin Cookie",
    "Dollar Cookie",
    "Budget Cookie",
    "Investor Cookie",
    "Banker Cookie",
    "Violin Cookie",
    "Property Cookie",
    "Lucky Cookie",
    "Builder Cookie",
    "Health Cookie",
    "Education Cookie",
    "Charity Cookie"
  ],

  stages: {},

  team: [
    "Coin Cookie",
    "Dollar Cookie",
    "Investor Cookie",
    "Banker Cookie",
    "Violin Cookie"
  ],

  cookieHomes: {},

  houses: [
    {
      id: "rose-cottage",
      name: "Rose Cottage",
      level: 1,
      capacity: 4,
      x: 1175,
      y: 675,
      rotation: 0,
      residents: []
    },

    {
      id: "sunny-cottage",
      name: "Sunny Cottage",
      level: 1,
      capacity: 4,
      x: 1308,
      y: 716,
      rotation: 0,
      residents: []
    }
  ]
};


/* =========================================================
   GAME STATE
========================================================= */

let save = loadSave();

let selectedCookie =
  save.ownedCookies[0] || "Coin Cookie";

let currentStage = 1;

let buildMode = false;

let placement = null;

let kingdomPhase = "morning";

let toastTimer = null;


/* =========================================================
   SAVE SYSTEM
========================================================= */

function loadSave() {

  try {

    const raw =
      localStorage.getItem(SAVE_KEY);

    if (!raw) {
      return structuredClone(DEFAULT_SAVE);
    }

    const data = {
      ...structuredClone(DEFAULT_SAVE),
      ...JSON.parse(raw)
    };

    data.houses =
      Array.isArray(data.houses)
        ? data.houses
        : structuredClone(DEFAULT_SAVE.houses);

    data.ownedCookies =
      Array.isArray(data.ownedCookies)
        ? data.ownedCookies
        : [...DEFAULT_SAVE.ownedCookies];

    data.cookieHomes =
      data.cookieHomes || {};

    data.stages =
      data.stages || {};

    return data;

  } catch {

    return structuredClone(DEFAULT_SAVE);

  }

}


function persist() {

  localStorage.setItem(
    SAVE_KEY,
    JSON.stringify(save)
  );

}


/* =========================================================
   GENERAL HELPERS
========================================================= */

function showToast(text) {

  const el = qs("#toast");

  el.textContent = text;

  el.hidden = false;

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      el.hidden = true;

    }, 2300);

}


function formatNum(n) {

  return Number(n || 0).toLocaleString();

}


function dataFor(name) {

  return (
    COOKIE_DATA.find(
      c => c.name === name
    ) || COOKIE_DATA[0]
  );

}


function rarityColor(rarity) {

  return (
    {
      RARE: "#57a7e8",

      EPIC: "#c66bdc",

      "SUPER EPIC": "#e578b8",

      LEGENDARY: "#f0c356",

      ANCIENT: "#f0dfaa",

      BEAST: "#e55b65"
    }[rarity] || "#7aa2c9"
  );

}


/* =========================================================
   HUD
========================================================= */

function updateHUD() {

  qs("#playerLevel").textContent =
    save.playerLevel;

  qs("#coinValue").textContent =
    formatNum(save.coins);

  qs("#gemValue").textContent =
    formatNum(save.gems);

  qs("#woodValue").textContent =
    formatNum(save.wood);

  qs("#stoneValue").textContent =
    formatNum(save.stone);

  qs("#ticketValue").textContent =
    save.tickets;


  const capacity =
    save.houses.reduce(
      (total, house) =>
        total + house.capacity,
      0
    );


  qs("#residentValue").textContent =
    `${save.ownedCookies.length}/${capacity}`;


  qsa(".headerCoins").forEach(
    el => {

      el.textContent =
        formatNum(save.coins);

    }
  );


  qs("#questOwned").textContent =
    `${Math.min(
      save.ownedCookies.length,
      8
    )} / 8`;

}


/* =========================================================
   SCREEN ROUTER
========================================================= */

function showScreen(id) {

  qsa(".screen").forEach(
    screen => {

      screen.classList.remove("active");

    }
  );


  const next =
    qs(`#${id}`);


  if (next) {

    next.classList.add("active");

  }


  if (id !== "kingdomScreen") {

    exitBuildMode();

  }


  if (id === "cookiesScreen") {

    renderCookieCollection();

  }


  if (id === "worldScreen") {

    renderStages();

  }


  if (id === "gachaScreen") {

    updateHUD();

  }

}


qsa("[data-open]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        showScreen(
          button.dataset.open
        );

      }
    );

  }
);


qsa("[data-close]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        qs(
          `#${button.dataset.close}`
        ).hidden = true;

      }
    );

  }
);


/* =========================================================
   COOKIE CHARACTER MARKUP
========================================================= */

function cookieMarkup(
  cookie,
  extraClass = ""
) {

  const c =
    typeof cookie === "string"
      ? dataFor(cookie)
      : cookie;


  const propClass =
    c.prop || "coin";


  return `
    <div
      class="cookie-card-art ${extraClass}"

      style="
        --dough:${c.dough};
        --hair:${c.hair};
        --outfit:${c.outfit};
        --outfit2:${c.outfit2};
        --accent:${c.accent};
        --badge:${c.badge};
      "
    >

      <div class="cookie-character">

        <span class="cookie-leg left"></span>

        <span class="cookie-leg right"></span>

        <span class="cookie-shoe left"></span>

        <span class="cookie-shoe right"></span>


        <span class="cookie-arm left"></span>

        <span class="cookie-arm right"></span>


        <span class="cookie-body"></span>


        <span class="cookie-head">

          <span class="cookie-mouth"></span>

          <i class="cookie-blush left"></i>

          <i class="cookie-blush right"></i>

        </span>


        <span
          class="cookie-hair ${
            c.hat ? "short" : ""
          }"
        ></span>


        ${
          c.hat
            ? `<span class="cookie-hat"></span>`
            : ""
        }


        <span class="cookie-badge"></span>


        <span
          class="cookie-prop ${propClass}"
        ></span>

      </div>

    </div>
  `;

}


/* =========================================================
   KINGDOM LOCATIONS
========================================================= */

const LOCATIONS = {

  castle: {
    x: 768,
    y: 330,
    rx: 90,
    ry: 50
  },

  bank: {
    x: 525,
    y: 585,
    rx: 74,
    ry: 42
  },

  market: {
    x: 1055,
    y: 600,
    rx: 95,
    ry: 55
  },

  academy: {
    x: 340,
    y: 345,
    rx: 75,
    ry: 50
  },

  concert: {
    x: 1280,
    y: 390,
    rx: 95,
    ry: 50
  },

  bakery: {
    x: 250,
    y: 600,
    rx: 85,
    ry: 48
  },

  plaza: {
    x: 770,
    y: 650,
    rx: 140,
    ry: 68
  },

  forest: {
    x: 470,
    y: 780,
    rx: 120,
    ry: 70
  }

};


/* =========================================================
   COOKIE JOB LOCATION
========================================================= */

function jobLocation(cookie) {

  const name =
    cookie.name.toLowerCase();


  if (
    name.includes("bank") ||
    name.includes("invest") ||
    name.includes("dollar") ||
    name.includes("saving")
  ) {

    return LOCATIONS.bank;

  }


  if (
    name.includes("violin")
  ) {

    return LOCATIONS.concert;

  }


  if (
    name.includes("education") ||
    name.includes("budget")
  ) {

    return LOCATIONS.academy;

  }


  if (
    name.includes("merchant")
  ) {

    return LOCATIONS.market;

  }


  if (
    name.includes("builder") ||
    name.includes("property")
  ) {

    return LOCATIONS.castle;

  }


  if (
    name.includes("health") ||
    name.includes("charity") ||
    name.includes("lucky")
  ) {

    return LOCATIONS.plaza;

  }


  return LOCATIONS.bakery;

}


/* =========================================================
   RANDOM KINGDOM POSITION
========================================================= */

function randomSpot(
  location,
  seed = 0
) {

  const angle =
    (seed * 1.97) % 6.28;


  const radius =
    0.4 +
    0.5 *
    (((seed * 17) % 10) / 10);


  return {

    x:
      location.x +
      Math.cos(angle) *
      location.rx *
      radius,

    y:
      location.y +
      Math.sin(angle) *
      location.ry *
      radius

  };

}


/* =========================================================
   HOUSING
========================================================= */

function ensureHousing() {

  save.houses.forEach(
    house => {

      house.residents = [];

    }
  );


  save.ownedCookies.forEach(
    name => {

      const homeId =
        save.cookieHomes[name];


      let house =
        save.houses.find(
          h =>
            h.id === homeId &&
            h.residents.length <
              h.capacity
        );


      if (!house) {

        house =
          save.houses.find(
            h =>
              h.residents.length <
              h.capacity
          );

      }


      if (house) {

        house.residents.push(name);

        save.cookieHomes[name] =
          house.id;

      } else {

        save.cookieHomes[name] =
          "castle-guest";

      }

    }
  );


  persist();

}


/* =========================================================
   HOME POSITION
========================================================= */

function homeSpot(
  name,
  index
) {

  const id =
    save.cookieHomes[name];


  const house =
    save.houses.find(
      h => h.id === id
    );


  if (house) {

    return {

      x:
        house.x -
        28 +
        (index % 3) * 28,

      y:
        house.y +
        22 +
        Math.floor(index / 3) * 16

    };

  }


  return {

    x:
      768 +
      (index % 5 - 2) * 30,

    y:
      385 +
      Math.floor(index / 5) * 18

  };

}


/* =========================================================
   RENDER KINGDOM
========================================================= */

function renderKingdom() {

  ensureHousing();


  const buildingLayer =
    qs("#kingdomBuildings");


  buildingLayer.innerHTML = "";


  save.houses.forEach(
    house => {

      const el =
        document.createElement(
          "button"
        );


      el.className =
        "placed-building";


      el.style.left =
        house.x + "px";


      el.style.top =
        house.y + "px";


      el.style.transform =
        `translate(-50%,-50%) rotate(${house.rotation || 0}deg)`;


      el.innerHTML = `

        <div class="mini-house">

          <div class="house-roof"></div>

          <div class="house-body">

            <span class="window window-left"></span>

            <span class="window window-right"></span>

            <span class="door"></span>

          </div>

          <div class="chimney"></div>

        </div>


        <span class="occupancy">

          ${house.residents.length}/${house.capacity}

        </span>
      `;


      el.addEventListener(
        "click",
        event => {

          event.stopPropagation();


          if (buildMode) {

            beginMoveHouse(
              house.id
            );

          } else {

            openHouse(
              house.id
            );

          }

        }
      );


      buildingLayer.appendChild(el);

    }
  );


  const residentLayer =
    qs("#kingdomResidents");


  residentLayer.innerHTML = "";


  save.ownedCookies.forEach(
    (name, index) => {

      const cookie =
        dataFor(name);


      const el =
        document.createElement(
          "div"
        );


      el.className =
        "cookie-resident";


      el.dataset.cookie =
        name;


      el.innerHTML = `

        <div class="cookie-shadow"></div>

        ${cookieMarkup(cookie)}

        <span class="cookie-nameplate">
          ${name}
        </span>

      `;


      residentLayer.appendChild(el);

    }
  );


  applyPhase();

  updateHUD();

}


/* =========================================================
   KINGDOM DAY / NIGHT
========================================================= */

function applyPhase() {

  qs("#phaseLabel").textContent =
    kingdomPhase[0].toUpperCase() +
    kingdomPhase.slice(1);


  const tint =
    qs("#timeTint");


  tint.className =
    `time-tint ${kingdomPhase}`;


  qsa(".cookie-resident").forEach(
    (el, index) => {

      const name =
        el.dataset.cookie;


      const cookie =
        dataFor(name);


      let position;


      if (
        kingdomPhase === "morning"
      ) {

        position =
          randomSpot(
            LOCATIONS.plaza,
            index + 2
          );

      }

      else if (
        kingdomPhase === "work"
      ) {

        position =
          randomSpot(
            jobLocation(cookie),
            index + 4
          );

      }

      else if (
        kingdomPhase === "evening"
      ) {

        position =
          randomSpot(
            LOCATIONS.plaza,
            index + 9
          );

      }

      else {

        position =
          homeSpot(
            name,
            index
          );

      }


      el.style.left =
        position.x + "px";


      el.style.top =
        position.y + "px";


      el.classList.toggle(
        "walking",
        kingdomPhase !== "night"
      );


      el.classList.toggle(
        "working",
        kingdomPhase === "work"
      );


      el.classList.toggle(
        "sleeping",
        kingdomPhase === "night"
      );

    }
  );

}


/* =========================================================
   KINGDOM TIME LOOP
========================================================= */

function startDayCycle() {

  const phases = [
    "morning",
    "work",
    "evening",
    "night"
  ];


  let index = 0;


  setInterval(
    () => {

      index =
        (index + 1) %
        phases.length;


      kingdomPhase =
        phases[index];


      applyPhase();

    },
    30000
  );

}


/* =========================================================
   KINGDOM SCALING
========================================================= */

function scaleScene() {

  const scene =
    qs("#kingdomScene");


  const viewport =
    qs("#kingdomViewport");


  const scale =
    Math.max(
      viewport.clientWidth /
        SCENE_W,

      viewport.clientHeight /
        SCENE_H
    );


  scene.style.transform =
    `translate(-50%,-50%) scale(${scale})`;

}


window.addEventListener(
  "resize",
  scaleScene
);


/* =========================================================
   OPEN HOUSE
========================================================= */

function openHouse(id) {

  const house =
    save.houses.find(
      h => h.id === id
    );


  if (!house) {
    return;
  }


  qs("#homePanel").hidden =
    false;


  qs("#homePanel").dataset.house =
    id;


  qs("#homeName").textContent =
    house.name;


  qs("#homeLevel").textContent =
    house.level;


  qs("#homeCapacity").textContent =
    `${house.residents.length}/${house.capacity}`;


  const list =
    qs("#homeResidents");


  list.innerHTML =
    house.residents.length
      ? ""
      : `
        <div class="resident-row">
          <b>
            This home is ready for a resident.
          </b>
        </div>
      `;


  house.residents.forEach(
    name => {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "resident-row";


      row.innerHTML = `

        <div class="tiny-cookie">

          ${cookieMarkup(name)}

        </div>


        <b>
          ${name}
        </b>


        <button type="button">
          Move
        </button>
      `;


      row
        .querySelector("button")
        .onclick =
        () =>
          moveResident(
            name,
            house.id
          );


      list.appendChild(row);

    }
  );

}


/* =========================================================
   MOVE RESIDENT
========================================================= */

function moveResident(
  name,
  currentHouse
) {

  const target =
    save.houses.find(
      house =>
        house.id !== currentHouse &&
        house.residents.length <
          house.capacity
    );


  if (!target) {

    return showToast(
      "No other house has free space."
    );

  }


  save.cookieHomes[name] =
    target.id;


  ensureHousing();

  renderKingdom();

  openHouse(currentHouse);


  showToast(
    `${name} moved to ${target.name}.`
  );

}


/* =========================================================
   UPGRADE HOUSE
========================================================= */

qs("#upgradeHouseButton")
  .addEventListener(
    "click",
    () => {

      const id =
        qs("#homePanel")
          .dataset.house;


      const house =
        save.houses.find(
          h => h.id === id
        );


      if (!house) {
        return;
      }


      const cost =
        house.level * 1000;


      if (
        save.coins < cost
      ) {

        return showToast(
          "Not enough coins."
        );

      }


      save.coins -= cost;


      house.level++;


      house.capacity += 2;


      persist();

      renderKingdom();

      openHouse(id);


      showToast(
        `${house.name} upgraded.`
      );

    }
  );


/* =========================================================
   BUILD MODE
========================================================= */

function enterBuildMode() {

  buildMode = true;


  qs("#buildDrawer")
    .classList
    .add("open");


  qs("#buildDrawer")
    .setAttribute(
      "aria-hidden",
      "false"
    );


  qs("#buildGrid")
    .classList
    .add("show");


  qs("#kingdomLaunchers")
    .style.opacity = "0";


  qs("#kingdomLaunchers")
    .style.pointerEvents =
    "none";


  qs("#buildButton")
    .style.opacity = "0";

}


function exitBuildMode() {

  buildMode = false;

  placement = null;


  qs("#buildDrawer")
    .classList
    .remove("open");


  qs("#buildGrid")
    .classList
    .remove("show");


  qs("#buildGhost").hidden =
    true;


  qs("#kingdomLaunchers")
    .style.opacity = "1";


  qs("#kingdomLaunchers")
    .style.pointerEvents =
    "auto";


  qs("#buildButton")
    .style.opacity = "1";

}


qs("#buildButton")
  .addEventListener(
    "click",
    enterBuildMode
  );


qs("#exitBuildButton")
  .addEventListener(
    "click",
    exitBuildMode
  );


qs("#cancelBuildButton")
  .addEventListener(
    "click",
    () => {

      placement = null;


      qs("#buildGhost").hidden =
        true;


      qs("#placementHint")
        .textContent =
        "Choose a building, then place it in Prospera.";

    }
  );


/* =========================================================
   NEW COOKIE HOUSE
========================================================= */

function beginNewHouse() {

  if (
    save.coins < HOUSE_COST
  ) {

    return showToast(
      "You need 2,500 coins."
    );

  }


  placement = {

    type: "new",

    x: 850,

    y: 730,

    rotation: 0,

    valid: true

  };


  qs("#buildGhost").hidden =
    false;


  updateGhost();


  qs("#placementHint")
    .textContent =
    "Move the house onto an open area and click to place.";

}


/* =========================================================
   MOVE COOKIE HOUSE
========================================================= */

function beginMoveHouse(id) {

  const house =
    save.houses.find(
      h => h.id === id
    );


  if (!house) {
    return;
  }


  placement = {

    type: "move",

    id,

    x: house.x,

    y: house.y,

    rotation:
      house.rotation || 0,

    valid: true

  };


  qs("#buildGhost").hidden =
    false;


  updateGhost();


  qs("#placementHint")
    .textContent =
    `Moving ${house.name}. Click an open area to place.`;

}


/* =========================================================
   BUILD BUTTONS
========================================================= */

qs("#cookieHouseBuildItem")
  .addEventListener(
    "click",
    beginNewHouse
  );


qs("#rotateBuildButton")
  .addEventListener(
    "click",
    () => {

      if (!placement) {
        return;
      }


      placement.rotation =
        (
          placement.rotation +
          90
        ) % 360;


      updateGhost();

    }
  );


/* =========================================================
   SCREEN TO KINGDOM COORDINATES
========================================================= */

function clientToScene(
  x,
  y
) {

  const rect =
    qs("#kingdomScene")
      .getBoundingClientRect();


  return {

    x:
      (x - rect.left) *
      (SCENE_W / rect.width),

    y:
      (y - rect.top) *
      (SCENE_H / rect.height)

  };

}


/* =========================================================
   BUILDING COLLISION
========================================================= */

function canPlace(
  x,
  y,
  id = null
) {

  if (
    x < 190 ||
    x > 1400 ||
    y < 430 ||
    y > 900
  ) {

    return false;

  }


  if (
    Math.hypot(
      x - 768,
      y - 400
    ) < 165
  ) {

    return false;

  }


  return !save.houses.some(
    house =>

      house.id !== id &&

      Math.hypot(
        x - house.x,
        y - house.y
      ) < 115
  );

}


/* =========================================================
   UPDATE BUILD GHOST
========================================================= */

function updateGhost() {

  if (!placement) {
    return;
  }


  const ghost =
    qs("#buildGhost");


  ghost.style.left =
    placement.x + "px";


  ghost.style.top =
    placement.y + "px";


  ghost.style.transform =
    `translate(-50%,-50%) rotate(${placement.rotation}deg)`;


  placement.valid =
    canPlace(
      placement.x,
      placement.y,
      placement.type === "move"
        ? placement.id
        : null
    );


  ghost.classList.toggle(
    "invalid",
    !placement.valid
  );

}


/* =========================================================
   BUILD POINTER MOVE
========================================================= */

qs("#kingdomScene")
  .addEventListener(
    "pointermove",
    event => {

      if (
        !buildMode ||
        !placement
      ) {

        return;

      }


      const point =
        clientToScene(
          event.clientX,
          event.clientY
        );


      placement.x =
        point.x;


      placement.y =
        point.y;


      updateGhost();

    }
  );


/* =========================================================
   PLACE BUILDING
========================================================= */

qs("#kingdomScene")
  .addEventListener(
    "click",
    event => {

      if (
        !buildMode ||
        !placement
      ) {

        return;

      }


      const point =
        clientToScene(
          event.clientX,
          event.clientY
        );


      placement.x =
        point.x;


      placement.y =
        point.y;


      updateGhost();


      if (
        !placement.valid
      ) {

        return showToast(
          "That space is blocked."
        );

      }


      if (
        placement.type === "new"
      ) {

        if (
          save.coins <
          HOUSE_COST
        ) {

          return showToast(
            "Not enough coins."
          );

        }


        save.coins -=
          HOUSE_COST;


        const number =
          save.houses.length + 1;


        save.houses.push({

          id:
            `cookie-house-${Date.now()}`,

          name:
            `Cookie House ${number}`,

          level: 1,

          capacity:
            HOUSE_CAPACITY,

          x:
            Math.round(point.x),

          y:
            Math.round(point.y),

          rotation:
            placement.rotation,

          residents: []

        });


        showToast(
          "Cookie House built."
        );

      }

      else {

        const house =
          save.houses.find(
            h =>
              h.id ===
              placement.id
          );


        if (house) {

          house.x =
            Math.round(point.x);


          house.y =
            Math.round(point.y);


          house.rotation =
            placement.rotation;


          showToast(
            `${house.name} moved.`
          );

        }

      }


      placement = null;


      qs("#buildGhost").hidden =
        true;


      persist();

      renderKingdom();

    }
  );


/* =========================================================
   BUILD KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (!buildMode) {
      return;
    }


    if (
      event.key.toLowerCase() ===
        "r" &&
      placement
    ) {

      placement.rotation =
        (
          placement.rotation +
          90
        ) % 360;


      updateGhost();

    }


    if (
      event.key === "Escape"
    ) {

      placement = null;


      qs("#buildGhost").hidden =
        true;

    }

  }
);


/* =========================================================
   BUILD TABS
========================================================= */

qsa(".build-tab").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        qsa(".build-tab")
          .forEach(
            tab => {

              tab.classList.remove(
                "active"
              );

            }
          );


        button.classList.add(
          "active"
        );


        if (
          button.dataset.tab !==
          "buildings"
        ) {

          showToast(
            `${button.textContent} items are coming next.`
          );

        }

      }
    );

  }
);


/* =========================================================
   QUESTS
========================================================= */

qs("#questButton")
  .addEventListener(
    "click",
    () => {

      qs("#questPanel").hidden =
        false;

    }
  );


/* =========================================================
   COOKIE COLLECTION
========================================================= */

function renderCookieCollection() {

  qs("#ownedCount")
    .textContent =
    `${save.ownedCookies.length} / ${COOKIE_DATA.length}`;


  const query =
    qs("#cookieSearch")
      .value
      .toLowerCase();


  const rarity =
    qs("#rarityFilter")
      .value;


  const ownedMode =
    qs("#ownedFilter")
      .value;


  const filtered =
    COOKIE_DATA.filter(
      cookie => {

        const matchesSearch =
          !query ||
          cookie.name
            .toLowerCase()
            .includes(query);


        const matchesRarity =
          rarity === "ALL" ||
          cookie.rarity === rarity;


        const matchesOwned =
          ownedMode === "ALL" ||
          save.ownedCookies.includes(
            cookie.name
          );


        return (
          matchesSearch &&
          matchesRarity &&
          matchesOwned
        );

      }
    );


  const grid =
    qs("#cookieGrid");


  grid.innerHTML = "";


  filtered.forEach(
    cookie => {

      const owned =
        save.ownedCookies.includes(
          cookie.name
        );


      const card =
        document.createElement(
          "button"
        );


      card.className =
        `cookie-card ${
          cookie.name ===
          selectedCookie
            ? "selected"
            : ""
        }`;


      card.style.setProperty(
        "--rarity",
        rarityColor(
          cookie.rarity
        )
      );


      card.innerHTML = `

        <span class="cookie-level">
          Lv. ${cookie.level}
        </span>

        ${cookieMarkup(cookie)}

        <div class="cookie-card-copy">

          <strong>
            ${cookie.name}
          </strong>

          <span>
            ${
              owned
                ? cookie.rarity
                : "Not Owned"
            }
          </span>

        </div>
      `;


      card.onclick =
        () => {

          selectedCookie =
            cookie.name;


          renderCookieCollection();

        };


      grid.appendChild(card);

    }
  );


  renderFeatured();

}


/* =========================================================
   FEATURED COOKIE
========================================================= */

function renderFeatured() {

  const cookie =
    dataFor(selectedCookie);


  qs("#featuredName")
    .textContent =
    cookie.name;


  qs("#featuredRarity")
    .textContent =
    cookie.rarity;


  qs("#featuredRarity")
    .style.background =
    rarityColor(
      cookie.rarity
    );


  qs("#featuredCookieArt")
    .innerHTML =
    cookieMarkup(cookie);


  qs("#featuredRole")
    .textContent =
    cookie.role;


  qs("#featuredPosition")
    .textContent =
    cookie.position;


  qs("#featuredLevel")
    .textContent =
    cookie.level;


  qs("#featuredPower")
    .textContent =
    formatNum(
      cookie.power
    );


  const home =
    save.houses.find(
      house =>
        house.id ===
        save.cookieHomes[
          cookie.name
        ]
    );


  qs("#featuredHome")
    .textContent =
    home
      ? home.name
      : "Fortune Castle";

}


/* =========================================================
   COOKIE FILTERS
========================================================= */

[
  "cookieSearch",
  "rarityFilter",
  "ownedFilter"
].forEach(
  id => {

    qs(`#${id}`)
      .addEventListener(
        "input",
        renderCookieCollection
      );

  }
);


qs("#levelCookieButton")
  .addEventListener(
    "click",
    () => {

      showToast(
        "EXP Candy leveling is the next upgrade."
      );

    }
  );


/* =========================================================
   STAGE MAP
========================================================= */

function stagePos(i) {

  const column =
    (i - 1) % 10;


  const row =
    Math.floor(
      (i - 1) / 10
    );


  const x =
    8 +
    column * 8.7 +
    (row % 2 ? 3 : 0);


  const curve =
    Math.sin(
      (column / 9) *
      Math.PI
    ) * 10;


  const y =
    80 -
    row * 30 -
    curve;


  return {
    x,
    y
  };

}


/* =========================================================
   RENDER STAGES
========================================================= */

function renderStages() {

  const route =
    qs("#stageRoute");


  route.innerHTML = "";


  let cleared = 0;


  for (
    let i = 1;
    i <= 30;
    i++
  ) {

    const position =
      stagePos(i);


    const button =
      document.createElement(
        "button"
      );


    button.className =
      `stage-node ${
        save.stages[i]
          ? "cleared"
          : ""
      } ${
        i % 10 === 0
          ? "boss"
          : ""
      }`;


    button.style.left =
      position.x + "%";


    button.style.top =
      position.y + "%";


    button.innerHTML = `

      <span>
        ${i}
      </span>

      <small>

        ${
          i % 10 === 0
            ? "Boss"
            : "Stage 1-" + i
        }

      </small>
    `;


    button.onclick =
      () =>
        openStage(i);


    route.appendChild(
      button
    );


    if (
      save.stages[i]
    ) {

      cleared++;

    }

  }


  qs("#worldStars")
    .textContent =
    cleared * 3;


  qs("#questStage")
    .textContent =
    save.stages[3]
      ? "1 / 1"
      : "0 / 1";

}


/* =========================================================
   OPEN STAGE
========================================================= */

function openStage(i) {

  currentStage = i;


  qs("#stageTitle")
    .textContent =
    `Stage 1-${i}`;


  qs("#stageSubtitle")
    .textContent =

    i % 10 === 0
      ? "The Guardian of Frostpeak"

      : i < 10
      ? "Footprints in the Snow"

      : i < 20
      ? "Across the Frozen Pass"

      : "The Summit Draws Near";


  qs("#recommendedPower")
    .textContent =
    formatNum(
      3500 +
      i * 210
    );


  renderTeam();


  showScreen(
    "stageScreen"
  );

}


/* =========================================================
   TEAM PREVIEW
========================================================= */

function renderTeam() {

  const wrap =
    qs("#teamPreview");


  wrap.innerHTML = "";


  save.team.forEach(
    name => {

      const cookie =
        dataFor(name);


      const el =
        document.createElement(
          "div"
        );


      el.className =
        "team-mini";


      el.innerHTML = `

        ${cookieMarkup(cookie)}

        <b>
          ${
            name.replace(
              " Cookie",
              ""
            )
          }
        </b>
      `;


      wrap.appendChild(el);

    }
  );

}


/* =========================================================
   BATTLE PLACEHOLDER
========================================================= */

qs("#battleButton")
  .addEventListener(
    "click",
    () => {

      save.stages[
        currentStage
      ] = true;


      save.coins += 500;

      save.wood += 8;


      persist();

      updateHUD();

      renderStages();


      showToast(
        `Victory! Stage 1-${currentStage} cleared.`
      );


      setTimeout(
        () => {

          showScreen(
            "worldScreen"
          );

        },
        800
      );

    }
  );


qs("#editTeamButton")
  .addEventListener(
    "click",
    () => {

      showScreen(
        "cookiesScreen"
      );


      showToast(
        "Choose Cookies from your collection."
      );

    }
  );


/* =========================================================
   SUMMON WEIGHTS
========================================================= */

function weightedCookie() {

  const pool = [];


  const weights = {

    RARE: 45,

    EPIC: 34,

    "SUPER EPIC": 10,

    LEGENDARY: 6,

    ANCIENT: 4,

    BEAST: 1

  };


  COOKIE_DATA.forEach(
    cookie => {

      const weight =
        weights[
          cookie.rarity
        ] || 1;


      for (
        let i = 0;
        i < weight;
        i++
      ) {

        pool.push(cookie);

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
   SUMMON
========================================================= */

function summon(count) {

  if (
    save.tickets < count
  ) {

    return showToast(
      "Not enough Fortune Tickets."
    );

  }


  save.tickets -= count;


  let last = null;

  let newCount = 0;


  for (
    let i = 0;
    i < count;
    i++
  ) {

    const cookie =
      weightedCookie();


    last = cookie;


    if (
      !save.ownedCookies.includes(
        cookie.name
      )
    ) {

      save.ownedCookies.push(
        cookie.name
      );


      newCount++;

    }

  }


  ensureHousing();

  persist();

  renderKingdom();

  updateHUD();


  const box =
    qs("#summonResult");


  box.classList.remove(
    "empty"
  );


  box.innerHTML = `

    <div>

      <div
        class="rarity-ribbon"

        style="
          background:
          ${rarityColor(last.rarity)}
        "
      >

        ${last.rarity}

      </div>


      <div>

        ${cookieMarkup(last)}

      </div>


      <h2>
        ${last.name}
      </h2>


      ${
        newCount

          ? `
            <span class="new-badge">
              NEW FRIEND
            </span>
          `

          : `
            <span>
              Duplicate rewards received
            </span>
          `
      }


      <p>

        ${
          count === 10

            ? `${newCount} new Cookies joined Prospera.`

            : "A new wish has answered."
        }

      </p>

    </div>
  `;

}


/* =========================================================
   SUMMON BUTTONS
========================================================= */

qs("#summonOne")
  .addEventListener(
    "click",
    () =>
      summon(1)
  );


qs("#summonTen")
  .addEventListener(
    "click",
    () =>
      summon(10)
  );


/* =========================================================
   INITIALISE GAME
========================================================= */

ensureHousing();

renderKingdom();

renderStages();

renderCookieCollection();

updateHUD();

scaleScene();

startDayCycle();
