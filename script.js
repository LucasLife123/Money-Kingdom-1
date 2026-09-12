/* =========================================================
   MONEY KINGDOM
========================================================= */

const EXP_PER_LEVEL = 1000;


const EXP_CANDIES = {

  XS: {
    exp: 100,
    icon: "🍬"
  },

  S: {
    exp: 150,
    icon: "🍬"
  },

  M: {
    exp: 200,
    icon: "🍬"
  },

  L: {
    exp: 300,
    icon: "🍬"
  },

  XL: {
    exp: 400,
    icon: "🍬"
  }

};



/* =========================================================
   COOKIE ROSTER
========================================================= */

const cookieRoster = [

  {
    id: "dollar",

    name:
      "Dollar Cookie",

    title:
      "The Bright Earner",

    rarity:
      "EPIC",

    icon:
      "💵",

    role:
      "Attacker",

    position:
      "Middle",

    baseHP:
      1250,

    baseATK:
      320,

    baseDEF:
      140
  },


  {
    id: "coin",

    name:
      "Coin Cookie",

    title:
      "The Golden Guardian",

    rarity:
      "EPIC",

    icon:
      "🪙",

    role:
      "Defender",

    position:
      "Front",

    baseHP:
      1650,

    baseATK:
      220,

    baseDEF:
      230
  },


  {
    id: "budget",

    name:
      "Budget Cookie",

    title:
      "The Clever Planner",

    rarity:
      "EPIC",

    icon:
      "📘",

    role:
      "Support",

    position:
      "Rear",

    baseHP:
      1150,

    baseATK:
      240,

    baseDEF:
      150
  },


  {
    id: "investor",

    name:
      "Investor Cookie",

    title:
      "The Patient Builder",

    rarity:
      "EPIC",

    icon:
      "📈",

    role:
      "Support",

    position:
      "Middle",

    baseHP:
      1250,

    baseATK:
      280,

    baseDEF:
      155
  },


  {
    id: "lucky",

    name:
      "Lucky Cookie",

    title:
      "Fortune's Favourite",

    rarity:
      "LEGENDARY",

    icon:
      "🍀",

    role:
      "Support",

    position:
      "Rear",

    baseHP:
      1550,

    baseATK:
      390,

    baseDEF:
      185
  },


  {
    id: "chronos",

    name:
      "Chronos Cookie",

    title:
      "Keeper of Time",

    rarity:
      "LEGENDARY",

    icon:
      "⏳",

    role:
      "Support",

    position:
      "Rear",

    baseHP:
      1500,

    baseATK:
      400,

    baseDEF:
      180
  },


  {
    id: "equilibra",

    name:
      "Equilibra Cookie",

    title:
      "Keeper of Balance",

    rarity:
      "ANCIENT",

    icon:
      "⚖️",

    role:
      "Support",

    position:
      "Rear",

    baseHP:
      1900,

    baseATK:
      470,

    baseDEF:
      245
  },


  {
    id: "florentia",

    name:
      "Florentia Cookie",

    title:
      "Bringer of Prosperity",

    rarity:
      "ANCIENT",

    icon:
      "🌸",

    role:
      "Healer",

    position:
      "Rear",

    baseHP:
      1850,

    baseATK:
      430,

    baseDEF:
      240
  },


  {
    id: "liberis",

    name:
      "Liberis Cookie",

    title:
      "Guide of Freedom",

    rarity:
      "ANCIENT",

    icon:
      "🕊️",

    role:
      "All-Rounder",

    position:
      "Middle",

    baseHP:
      2000,

    baseATK:
      500,

    baseDEF:
      260
  },


  {
    id: "greed",

    name:
      "Greed Cookie",

    title:
      "The Insatiable",

    rarity:
      "BEAST",

    icon:
      "👹",

    role:
      "Ambush",

    position:
      "Middle",

    baseHP:
      2100,

    baseATK:
      590,

    baseDEF:
      250
  },


  {
    id: "debt",

    name:
      "Debt Cookie",

    title:
      "The Endless Chain",

    rarity:
      "BEAST",

    icon:
      "⛓️",

    role:
      "Control",

    position:
      "Front",

    baseHP:
      2350,

    baseATK:
      480,

    baseDEF:
      330
  },


  {
    id: "oblivion",

    name:
      "Oblivion Cookie",

    title:
      "The Forgotten",

    rarity:
      "BEAST",

    icon:
      "🌑",

    role:
      "Magic",

    position:
      "Rear",

    baseHP:
      2050,

    baseATK:
      620,

    baseDEF:
      235
  }

];



/* =========================================================
   STORY
========================================================= */

const storyStages = [

  {
    id: 1,

    name:
      "1-1",

    title:
      "The Empty Road",

    enemy:
      "👾",

    power:
      900,

    coins:
      450,

    candy:
      {
        XS: 3
      }
  },


  {
    id: 2,

    name:
      "1-2",

    title:
      "Lost Savings",

    enemy:
      "👺",

    power:
      1200,

    coins:
      600,

    candy:
      {
        XS: 4
      }
  },


  {
    id: 3,

    name:
      "1-3",

    title:
      "The Broken Market",

    enemy:
      "🦹",

    power:
      1700,

    coins:
      800,

    candy:
      {
        XS: 3,
        S: 2
      },

    unlockCookie:
      "investor"
  },


  {
    id: 4,

    name:
      "1-4",

    title:
      "Impulse Imps",

    enemy:
      "😈",

    power:
      2300,

    coins:
      1000,

    candy:
      {
        S: 3
      }
  },


  {
    id: 5,

    name:
      "1-5",

    title:
      "The Temptation Trail",

    enemy:
      "🎭",

    power:
      3100,

    coins:
      1300,

    candy:
      {
        S: 2,
        M: 2
      }
  },


  {
    id: 6,

    name:
      "1-6",

    title:
      "Fortune's Test",

    enemy:
      "🧿",

    power:
      4000,

    coins:
      1700,

    candy:
      {
        M: 3
      },

    unlockCookie:
      "lucky"
  },


  {
    id: 7,

    name:
      "1-7",

    title:
      "Road to the Beast",

    enemy:
      "🐲",

    power:
      5200,

    coins:
      2200,

    candy:
      {
        M: 2,
        L: 2
      }
  },


  {
    id: 8,

    name:
      "1-8",

    title:
      "Shopping Beast",

    enemy:
      "👹",

    power:
      6800,

    coins:
      3500,

    gems:
      100,

    candy:
      {
        L: 3,
        XL: 1
      }
  }

];



/* =========================================================
   DEFAULT SAVE
========================================================= */

const defaultState = {

  coins:
    5000,

  wood:
    250,

  stone:
    80,

  gems:
    300,

  castleLevel:
    1,

  buildings: {

    farm: 1,

    lumber: 1,

    quarry: 1,

    bakery: 1,

    bank: 1

  },

  candies: {

    XS: 10,

    S: 3,

    M: 0,

    L: 0,

    XL: 0

  },

  storyUnlocked:
    1,

  clearedStages:
    [],

  ownedCookies: [

    "dollar",

    "coin",

    "budget"

  ],

  cookieProgress: {

    dollar: {
      level: 1,
      exp: 0
    },

    coin: {
      level: 1,
      exp: 0
    },

    budget: {
      level: 1,
      exp: 0
    }

  }

};



let state =
  loadGame();


let selectedCookieId =
  null;


let currentFilter =
  "ALL";


let toastTimer =
  null;



/* =========================================================
   SAVE / LOAD
========================================================= */

function cloneDefaultState() {

  return JSON.parse(
    JSON.stringify(
      defaultState
    )
  );

}


function loadGame() {

  try {

    const saved =
      localStorage.getItem(
        "moneyKingdomSaveV4"
      );


    if (!saved) {

      return cloneDefaultState();

    }


    const loaded =
      JSON.parse(saved);


    return {
      ...cloneDefaultState(),
      ...loaded,

      buildings: {
        ...defaultState.buildings,
        ...(loaded.buildings || {})
      },

      candies: {
        ...defaultState.candies,
        ...(loaded.candies || {})
      },

      cookieProgress: {
        ...defaultState.cookieProgress,
        ...(loaded.cookieProgress || {})
      }
    };

  }

  catch {

    return cloneDefaultState();

  }

}


function saveGame() {

  localStorage.setItem(
    "moneyKingdomSaveV4",
    JSON.stringify(state)
  );

}



/* =========================================================
   NAVIGATION
========================================================= */

document
  .querySelectorAll(
    ".nav-btn"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".nav-btn"
          )
          .forEach(btn =>
            btn.classList.remove(
              "active"
            )
          );


        button.classList.add(
          "active"
        );


        document
          .querySelectorAll(
            ".screen"
          )
          .forEach(screen =>
            screen.classList.remove(
              "active-screen"
            )
          );


        const id =
          button.dataset.screen;


        document
          .getElementById(id)
          .classList.add(
            "active-screen"
          );


        if (
          id ===
          "cookiesScreen"
        ) {

          renderCookies();

        }


        if (
          id ===
          "storyScreen"
        ) {

          renderStory();

        }

      }
    );

  });



/* =========================================================
   RENDER HUD
========================================================= */

function renderHUD() {

  document
    .getElementById(
      "coinsText"
    )
    .textContent =
    formatNumber(
      state.coins
    );


  document
    .getElementById(
      "woodText"
    )
    .textContent =
    formatNumber(
      state.wood
    );


  document
    .getElementById(
      "stoneText"
    )
    .textContent =
    formatNumber(
      state.stone
    );


  document
    .getElementById(
      "gemsText"
    )
    .textContent =
    formatNumber(
      state.gems
    );

}


function formatNumber(number) {

  return Math.floor(
    number
  ).toLocaleString();

}



/* =========================================================
   KINGDOM
========================================================= */

const castleCosts = {

  1: {
    coins: 3000,
    wood: 150,
    stone: 50
  },

  2: {
    coins: 6000,
    wood: 250,
    stone: 100
  },

  3: {
    coins: 10000,
    wood: 400,
    stone: 180
  },

  4: {
    coins: 16000,
    wood: 600,
    stone: 300
  },

  5: {
    coins: 25000,
    wood: 900,
    stone: 500
  }

};


function getCastleCost() {

  const level =
    state.castleLevel;


  if (
    castleCosts[level]
  ) {

    return castleCosts[level];

  }


  return {

    coins:
      level * 7000,

    wood:
      level * 180,

    stone:
      level * 100

  };

}


function getCastleEmoji() {

  const level =
    state.castleLevel;


  if (level >= 25) {

    return "🏰";

  }


  if (level >= 10) {

    return "🏯";

  }


  if (level >= 5) {

    return "🏰";

  }


  if (level >= 3) {

    return "🏠";

  }


  return "🏚️";

}


function renderKingdom() {

  renderHUD();


  document
    .getElementById(
      "castleLevelText"
    )
    .textContent =
    state.castleLevel;


  document
    .getElementById(
      "castleBadgeLevel"
    )
    .textContent =
    state.castleLevel;


  document
    .getElementById(
      "castleEmoji"
    )
    .textContent =
    getCastleEmoji();


  Object
    .keys(
      state.buildings
    )
    .forEach(id => {

      const el =
        document.getElementById(
          `${id}Level`
        );


      if (el) {

        el.textContent =
          state.buildings[id];

      }

    });


  updateBuildingUnlocks();

  renderCastleUpgrade();

  renderKingdomProgress();

  renderWalkers();

}


function updateBuildingUnlocks() {

  unlockBuilding(
    "quarry",
    2
  );

  unlockBuilding(
    "bakery",
    3
  );

  unlockBuilding(
    "tree",
    4
  );

  unlockBuilding(
    "bank",
    5
  );

}


function unlockBuilding(
  id,
  requiredLevel
) {

  const building =
    document.getElementById(
      `${id}Building`
    );


  if (!building) {

    return;

  }


  const lock =
    document.getElementById(
      `${id}Lock`
    );


  const bubble =
    document.getElementById(
      `${id}Bubble`
    );


  const unlocked =
    state.castleLevel >=
    requiredLevel;


  building
    .classList
    .toggle(
      "locked-building",
      !unlocked
    );


  if (lock) {

    lock.classList.toggle(
      "hidden",
      unlocked
    );

  }


  if (bubble) {

    bubble.classList.toggle(
      "hidden",
      !unlocked
    );

  }

}



function renderCastleUpgrade() {

  const cost =
    getCastleCost();


  const container =
    document.getElementById(
      "castleRequirements"
    );


  const requirements = [

    {
      icon: "🪙",
      amount: cost.coins,
      owned: state.coins
    },

    {
      icon: "🪵",
      amount: cost.wood,
      owned: state.wood
    },

    {
      icon: "🪨",
      amount: cost.stone,
      owned: state.stone
    }

  ];


  container.innerHTML =
    requirements
      .map(item => {

        const met =
          item.owned >=
          item.amount;


        return `
          <div class="
            requirement
            ${met
              ? "met"
              : "not-met"}
          ">
            ${item.icon}

            ${formatNumber(
              item.owned
            )}

            /

            ${formatNumber(
              item.amount
            )}
          </div>
        `;

      })
      .join("");


  const canUpgrade =

    state.coins >= cost.coins &&
    state.wood >= cost.wood &&
    state.stone >= cost.stone;


  document
    .getElementById(
      "upgradeCastleBtn"
    )
    .disabled =
    !canUpgrade;

}


document
  .getElementById(
    "upgradeCastleBtn"
  )
  .addEventListener(
    "click",
    upgradeCastle
  );


function upgradeCastle() {

  const cost =
    getCastleCost();


  if (
    state.coins <
    cost.coins
    ||
    state.wood <
    cost.wood
    ||
    state.stone <
    cost.stone
  ) {

    showToast(
      "Not enough resources!"
    );

    return;

  }


  state.coins -=
    cost.coins;

  state.wood -=
    cost.wood;

  state.stone -=
    cost.stone;


  state.castleLevel++;


  saveGame();

  renderKingdom();


  showToast(
    `🏰 Fortune Castle upgraded to Lv. ${state.castleLevel}!`
  );

}



function renderKingdomProgress() {

  const level =
    state.castleLevel;


  const percentage =
    Math.min(
      100,
      level / 50 * 100
    );


  document
    .getElementById(
      "kingdomProgressBar"
    )
    .style.width =
    `${percentage}%`;


  document
    .getElementById(
      "kingdomProgressText"
    )
    .textContent =
    `Castle Lv. ${level} / 50`;


  let title =
    "Grow Prospera";

  let description =
    "Keep building your kingdom.";


  if (level < 2) {

    title =
      "Unlock Stone Quarry";

    description =
      "Upgrade Fortune Castle to level 2.";

  }

  else if (level < 3) {

    title =
      "Unlock Golden Bakery";

    description =
      "Reach Castle level 3.";

  }

  else if (level < 4) {

    title =
      "Awaken the Tree of Fortune";

    description =
      "Reach Castle level 4.";

  }

  else if (level < 5) {

    title =
      "Unlock Golden Bank";

    description =
      "Reach Castle level 5.";

  }

  else if (level < 10) {

    title =
      "Build the Capital";

    description =
      "Reach Castle level 10.";

  }

  else {

    title =
      "Restore Prospera";

    description =
      "Continue expanding toward Castle level 50.";

  }


  document
    .getElementById(
      "nextUnlockTitle"
    )
    .textContent =
    title;


  document
    .getElementById(
      "nextUnlockDescription"
    )
    .textContent =
    description;

}



function renderWalkers() {

  const container =
    document.getElementById(
      "kingdomWalkers"
    );


  container.innerHTML = "";


  const owned =
    cookieRoster.filter(
      cookie =>
        state.ownedCookies.includes(
          cookie.id
        )
    );


  owned
    .slice(
      0,
      6
    )
    .forEach(
      (
        cookie,
        index
      ) => {

        const walker =
          document.createElement(
            "div"
          );


        walker.className =
          "kingdom-walker";


        walker.style.bottom =
          `${
            45 +
            index * 26
          }px`;


        walker.style.setProperty(
          "--walk-time",
          `${
            16 +
            index * 4
          }s`
        );


        walker.style.animationDelay =
          `${index * -3}s`;


        walker.innerHTML = `
          ${cookie.icon}
          <span>
            ${cookie.name}
          </span>
        `;


        container.appendChild(
          walker
        );

      }
    );

}



/* =========================================================
   BUILDING COLLECTION
========================================================= */

document
  .querySelectorAll(
    "[data-building]"
  )
  .forEach(building => {

    building.addEventListener(
      "click",
      () => {

        const id =
          building.dataset.building;


        collectBuilding(
          id
        );

      }
    );

  });


function collectBuilding(id) {

  const unlockLevels = {

    farm: 1,

    lumber: 1,

    quarry: 2,

    bakery: 3,

    bank: 5

  };


  if (
    state.castleLevel <
    unlockLevels[id]
  ) {

    showToast(
      `🔒 Requires Castle Lv. ${unlockLevels[id]}`
    );

    return;

  }


  const level =
    state.buildings[id] || 1;


  if (
    id ===
    "farm"
  ) {

    const amount =
      350 * level;

    state.coins +=
      amount;

    showToast(
      `🌾 Farm produced ${formatNumber(amount)} coins!`
    );

  }


  if (
    id ===
    "lumber"
  ) {

    const amount =
      40 * level;

    state.wood +=
      amount;

    showToast(
      `🪵 Collected ${amount} wood!`
    );

  }


  if (
    id ===
    "quarry"
  ) {

    const amount =
      25 * level;

    state.stone +=
      amount;

    showToast(
      `🪨 Collected ${amount} stone!`
    );

  }


  if (
    id ===
    "bakery"
  ) {

    const amount =
      650 * level;

    state.coins +=
      amount;

    showToast(
      `🥐 Bakery earned ${formatNumber(amount)} coins!`
    );

  }


  if (
    id ===
    "bank"
  ) {

    const amount =
      1200 * level;

    state.coins +=
      amount;

    showToast(
      `🏦 Bank earned ${formatNumber(amount)} coins!`
    );

  }


  saveGame();

  renderKingdom();

}



/* =========================================================
   STORY MAP
========================================================= */

function renderStory() {

  const container =
    document.getElementById(
      "storyStageList"
    );


  container.innerHTML = "";


  const positions = [

    {
      left: 14,
      top: 78
    },

    {
      left: 35,
      top: 65
    },

    {
      left: 57,
      top: 72
    },

    {
      left: 70,
      top: 52
    },

    {
      left: 48,
      top: 40
    },

    {
      left: 27,
      top: 48
    },

    {
      left: 17,
      top: 26
    },

    {
      left: 51,
      top: 13
    }

  ];


  storyStages.forEach(
    (
      stage,
      index
    ) => {

      const unlocked =
        stage.id <=
        state.storyUnlocked;


      const cleared =
        state.clearedStages.includes(
          stage.id
        );


      const button =
        document.createElement(
          "button"
        );


      button.className =
        "stage-node";


      if (cleared) {

        button.classList.add(
          "stage-cleared"
        );

      }


      if (!unlocked) {

        button.classList.add(
          "stage-locked"
        );

      }


      button.style.left =
        `${positions[index].left}%`;


      button.style.top =
        `${positions[index].top}%`;


      button.innerHTML = `
        <small>
          ${unlocked
            ? stage.title
            : "LOCKED"}
        </small>

        <strong>
          ${unlocked
            ? stage.name
            : "🔒"}
        </strong>

        ${
          cleared
            ? `
              <div class="stage-stars">
                ★★★
              </div>
            `
            : ""
        }
      `;


      if (unlocked) {

        button.addEventListener(
          "click",
          () =>
            openBattle(stage)
        );

      }


      container.appendChild(
        button
      );

    }
  );

}



/* =========================================================
   STORY BATTLE
========================================================= */

function getOwnedTeam() {

  return cookieRoster
    .filter(
      cookie =>
        state.ownedCookies.includes(
          cookie.id
        )
    )
    .slice(
      0,
      5
    );

}


function getCookieProgress(id) {

  if (
    !state.cookieProgress[id]
  ) {

    state.cookieProgress[id] = {

      level: 1,

      exp: 0

    };

  }


  return state.cookieProgress[id];

}



function getCookieStats(cookie) {

  const progress =
    getCookieProgress(
      cookie.id
    );


  const level =
    progress.level;


  const multiplier =
    1 +
    (
      level - 1
    )
    *
    .08;


  const hp =
    Math.round(
      cookie.baseHP *
      multiplier
    );


  const atk =
    Math.round(
      cookie.baseATK *
      multiplier
    );


  const def =
    Math.round(
      cookie.baseDEF *
      multiplier
    );


  const power =
    Math.round(
      hp * .8 +
      atk * 3 +
      def * 2
    );


  return {

    hp,
    atk,
    def,
    power

  };

}



function calculateTeamPower() {

  return getOwnedTeam()
    .reduce(
      (
        total,
        cookie
      ) => {

        return (
          total +
          getCookieStats(
            cookie
          ).power
        );

      },
      0
    );

}



function openBattle(stage) {

  const modal =
    document.getElementById(
      "battleModal"
    );


  const content =
    document.getElementById(
      "battleContent"
    );


  const team =
    getOwnedTeam();


  const teamPower =
    calculateTeamPower();


  content.innerHTML = `

    <p class="battle-title">
      STORY ${stage.name}
    </p>

    <h2>
      ${stage.title}
    </h2>

    <p class="muted">
      Recommended Power:
      ${formatNumber(
        stage.power
      )}
    </p>


    <div class="battle-vs">

      <div class="battle-team">

        ${
          team
            .map(
              cookie => `
                <span class="battle-cookie">
                  ${cookie.icon}
                </span>
              `
            )
            .join("")
        }

      </div>


      <div class="vs-text">
        VS
      </div>


      <div class="enemy-icon">
        ${stage.enemy}
      </div>

    </div>


    <p>
      Team Power:
      <strong>
        ${formatNumber(
          teamPower
        )}
      </strong>
    </p>


    <button
      id="startBattleBtn"
      class="gold-button large-button"
    >
      ⚔️ Start Battle
    </button>

  `;


  modal.classList.remove(
    "hidden"
  );


  document
    .getElementById(
      "startBattleBtn"
    )
    .addEventListener(
      "click",
      () =>
        runBattle(stage)
    );

}



function runBattle(stage) {

  const content =
    document.getElementById(
      "battleContent"
    );


  const team =
    getOwnedTeam();


  const teamPower =
    calculateTeamPower();


  content.innerHTML = `

    <p class="battle-title">
      BATTLE
    </p>

    <h2>
      ${stage.name}
    </h2>


    <div class="battle-vs">

      <div class="battle-team">

        ${
          team
            .map(
              cookie => `
                <span class="battle-cookie">
                  ${cookie.icon}
                </span>
              `
            )
            .join("")
        }

      </div>


      <div class="vs-text">
        ⚔️
      </div>


      <div class="enemy-icon">
        ${stage.enemy}
      </div>

    </div>


    <div class="battle-bar">
      <div
        id="battleHealth"
        class="battle-health"
      ></div>
    </div>


    <p
      id="battleText"
      class="battle-text"
    >
      Your Cookies charge into battle!
    </p>

  `;


  let enemyHP =
    100;


  let tick =
    0;


  const interval =
    setInterval(
      () => {

        tick++;


        const ratio =
          Math.max(
            .35,
            Math.min(
              2,
              teamPower /
              stage.power
            )
          );


        const damage =
          7 +
          Math.random() *
          9 *
          ratio;


        enemyHP -=
          damage;


        enemyHP =
          Math.max(
            0,
            enemyHP
          );


        document
          .getElementById(
            "battleHealth"
          )
          .style.width =
          `${enemyHP}%`;


        const attacker =
          team[
            Math.floor(
              Math.random() *
              team.length
            )
          ];


        const messages = [

          `${attacker.name} attacks!`,

          `${attacker.name} uses their skill!`,

          `The enemy is pushed back!`,

          `${attacker.name} lands a powerful hit!`

        ];


        document
          .getElementById(
            "battleText"
          )
          .textContent =
          messages[
            Math.floor(
              Math.random() *
              messages.length
            )
          ];


        if (
          enemyHP <= 0
          ||
          tick >= 14
        ) {

          clearInterval(
            interval
          );


          setTimeout(
            () => {

              finishBattle(
                stage,
                teamPower
              );

            },
            500
          );

        }

      },
      450
    );

}



function finishBattle(
  stage,
  teamPower
) {

  const winChance =
    Math.min(
      .98,
      .55 +
      (
        teamPower -
        stage.power
      )
      /
      (
        stage.power * 2
      )
    );


  const victory =
    Math.random() <
    Math.max(
      .3,
      winChance
    );


  if (!victory) {

    document
      .getElementById(
        "battleContent"
      )
      .innerHTML = `

        <h1>
          Defeat
        </h1>

        <div style="
          font-size:90px;
          margin:20px 0;
        ">
          💥
        </div>

        <p class="muted">
          Your Cookies need more power.
        </p>

        <p>
          Complete earlier stages and use EXP Candies
          to level them up.
        </p>

        <button
          id="closeBattleResult"
          class="gold-button large-button"
        >
          Return
        </button>
      `;


    document
      .getElementById(
        "closeBattleResult"
      )
      .onclick =
      closeBattleModal;


    return;

  }


  giveStoryRewards(
    stage
  );


  const firstClear =
    !state.clearedStages.includes(
      stage.id
    );


  if (firstClear) {

    state.clearedStages.push(
      stage.id
    );


    if (
      stage.id ===
      state.storyUnlocked
    ) {

      state.storyUnlocked =
        Math.min(
          storyStages.length,
          state.storyUnlocked + 1
        );

    }


    if (
      stage.unlockCookie
    ) {

      unlockCookie(
        stage.unlockCookie
      );

    }

  }


  saveGame();

  renderHUD();

  renderStory();

  renderCookies();


  const rewards =
    createRewardHTML(
      stage
    );


  document
    .getElementById(
      "battleContent"
    )
    .innerHTML = `

      <h1>
        ⭐ VICTORY! ⭐
      </h1>

      <div style="
        font-size:75px;
        margin:12px 0;
      ">
        🏆
      </div>

      <p>
        ${stage.name}
        •
        ${stage.title}
      </p>


      <div class="reward-grid">

        ${rewards}

      </div>


      ${
        firstClear &&
        stage.unlockCookie
          ? `
            <p style="
              color:#ffdc64;
              font-weight:900;
            ">
              ✨ NEW COOKIE DISCOVERED!
            </p>
          `
          : ""
      }


      <button
        id="closeBattleResult"
        class="gold-button large-button"
      >
        Continue
      </button>

    `;


  document
    .getElementById(
      "closeBattleResult"
    )
    .onclick =
    closeBattleModal;

}



function giveStoryRewards(stage) {

  state.coins +=
    stage.coins || 0;


  state.gems +=
    stage.gems || 0;


  Object
    .entries(
      stage.candy || {}
    )
    .forEach(
      (
        [
          size,
          amount
        ]
      ) => {

        state.candies[size] +=
          amount;

      }
    );

}



function createRewardHTML(stage) {

  let html = `

    <div class="reward-item">
      <span>🪙</span>
      <strong>
        ${formatNumber(
          stage.coins
        )}
      </strong>
    </div>

  `;


  if (stage.gems) {

    html += `

      <div class="reward-item">
        <span>💎</span>
        <strong>
          ${stage.gems}
        </strong>
      </div>

    `;

  }


  Object
    .entries(
      stage.candy || {}
    )
    .forEach(
      (
        [
          size,
          amount
        ]
      ) => {

        html += `

          <div class="reward-item">
            <span>🍬</span>

            <strong>
              ${size}
              ×${amount}
            </strong>

            <small>
              ${
                EXP_CANDIES[size]
                  .exp
              }
              EXP each
            </small>
          </div>

        `;

      }
    );


  return html;

}



function closeBattleModal() {

  document
    .getElementById(
      "battleModal"
    )
    .classList.add(
      "hidden"
    );

}



/* =========================================================
   UNLOCK COOKIE
========================================================= */

function unlockCookie(id) {

  if (
    state.ownedCookies.includes(
      id
    )
  ) {

    return;

  }


  state.ownedCookies.push(
    id
  );


  state.cookieProgress[id] = {

    level: 1,

    exp: 0

  };


  const cookie =
    getCookieById(id);


  showToast(
    `✨ ${cookie.name} joined your kingdom!`
  );

}



/* =========================================================
   COOKIES SCREEN
========================================================= */

function renderCookies() {

  renderCandyInventory();


  const container =
    document.getElementById(
      "cookieGrid"
    );


  container.innerHTML = "";


  const visible =
    currentFilter === "ALL"

      ? cookieRoster

      : cookieRoster.filter(
          cookie =>
            cookie.rarity ===
            currentFilter
        );


  visible.forEach(cookie => {

    const owned =
      state.ownedCookies.includes(
        cookie.id
      );


    const progress =
      getCookieProgress(
        cookie.id
      );


    const stats =
      getCookieStats(
        cookie
      );


    const entry =
      document.createElement(
        "div"
      );


    entry.className =
      `cookie-entry rarity-${cookie.rarity.toLowerCase()}`;


    if (!owned) {

      entry.classList.add(
        "locked-cookie"
      );

    }


    entry.innerHTML = `

      ${
        !owned
          ? `
            <div class="roster-lock">
              🔒
            </div>
          `
          : ""
      }


      <div class="cookie-roster-character">
        ${cookie.icon}
      </div>


      <div class="roster-rarity">
        ${cookie.rarity}
      </div>


      <h3>
        ${cookie.name}
      </h3>


      ${
        owned

          ? `
            <div class="roster-bottom">

              <span>
                Lv.
                ${progress.level}
              </span>

              <span>
                ⚔
                ${formatNumber(
                  stats.power
                )}
              </span>

            </div>
          `

          : `
            <div class="not-obtained">
              NOT OBTAINED
            </div>
          `
      }

    `;


    entry.addEventListener(
      "click",
      () =>
        openCookieModal(
          cookie.id
        )
    );


    container.appendChild(
      entry
    );

  });


  document
    .getElementById(
      "collectionCount"
    )
    .textContent =
    `${
      state.ownedCookies.length
    } / ${
      cookieRoster.length
    }`;

}



document
  .querySelectorAll(
    ".filter-btn"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".filter-btn"
          )
          .forEach(btn =>
            btn.classList.remove(
              "active"
            )
          );


        button.classList.add(
          "active"
        );


        currentFilter =
          button.dataset.filter;


        renderCookies();

      }
    );

  });



function renderCandyInventory() {

  [
    "XS",
    "S",
    "M",
    "L",
    "XL"
  ]
    .forEach(size => {

      document
        .getElementById(
          `candy${size}Count`
        )
        .textContent =
        `×${state.candies[size]}`;

    });

}



/* =========================================================
   COOKIE MODAL
========================================================= */

function openCookieModal(id) {

  selectedCookieId =
    id;


  const cookie =
    getCookieById(id);


  const owned =
    state.ownedCookies.includes(
      id
    );


  document
    .getElementById(
      "profileCookieIcon"
    )
    .textContent =
    cookie.icon;


  document
    .getElementById(
      "profileCookieName"
    )
    .textContent =
    cookie.name;


  document
    .getElementById(
      "profileCookieTitle"
    )
    .textContent =
    cookie.title;


  document
    .getElementById(
      "profileRarity"
    )
    .textContent =
    cookie.rarity;


  document
    .getElementById(
      "profileRole"
    )
    .textContent =
    cookie.role;


  document
    .getElementById(
      "profilePosition"
    )
    .textContent =
    cookie.position;


  document
    .getElementById(
      "profileCookieIcon"
    )
    .style.opacity =
    owned
      ? "1"
      : ".35";


  document
    .getElementById(
      "profileCookieIcon"
    )
    .style.filter =
    owned
      ? ""
      : "grayscale(1)";


  document
    .getElementById(
      "lockedCookieArea"
    )
    .classList.toggle(
      "hidden",
      owned
    );


  document
    .getElementById(
      "ownedCookieArea"
    )
    .classList.toggle(
      "hidden",
      !owned
    );


  if (owned) {

    updateCookieUpgradeUI(
      cookie
    );

  }


  document
    .getElementById(
      "cookieModal"
    )
    .classList.remove(
      "hidden"
    );

}



document
  .getElementById(
    "closeCookieModal"
  )
  .addEventListener(
    "click",
    () => {

      document
        .getElementById(
          "cookieModal"
        )
        .classList.add(
          "hidden"
        );

    }
  );



function updateCookieUpgradeUI(
  cookie
) {

  const progress =
    getCookieProgress(
      cookie.id
    );


  const stats =
    getCookieStats(
      cookie
    );


  document
    .getElementById(
      "profileLevel"
    )
    .textContent =
    progress.level;


  document
    .getElementById(
      "profilePower"
    )
    .textContent =
    formatNumber(
      stats.power
    );


  document
    .getElementById(
      "profileHP"
    )
    .textContent =
    formatNumber(
      stats.hp
    );


  document
    .getElementById(
      "profileATK"
    )
    .textContent =
    formatNumber(
      stats.atk
    );


  document
    .getElementById(
      "profileDEF"
    )
    .textContent =
    formatNumber(
      stats.def
    );


  document
    .getElementById(
      "profileExpText"
    )
    .textContent =
    `${
      progress.exp
    } / ${EXP_PER_LEVEL}`;


  document
    .getElementById(
      "profileExpBar"
    )
    .style.width =
    `${
      progress.exp /
      EXP_PER_LEVEL *
      100
    }%`;


  renderUpgradeCandyButtons();

}



/* =========================================================
   EXP CANDIES
========================================================= */

function renderUpgradeCandyButtons() {

  const container =
    document.getElementById(
      "upgradeCandyList"
    );


  container.innerHTML = "";


  Object
    .entries(
      EXP_CANDIES
    )
    .forEach(
      (
        [
          size,
          candy
        ]
      ) => {

        const amount =
          state.candies[size];


        const button =
          document.createElement(
            "button"
          );


        button.className =
          "upgrade-candy-button";


        button.disabled =
          amount <= 0;


        button.innerHTML = `

          <span class="big-candy">
            ${candy.icon}
          </span>

          <strong>
            ${size}
          </strong>

          <small>
            +${candy.exp} EXP
          </small>

          <b>
            ×${amount}
          </b>

        `;


        button.addEventListener(
          "click",
          () =>
            giveCandy(
              size
            )
        );


        container.appendChild(
          button
        );

      }
    );

}



function giveCandy(size) {

  if (
    !selectedCookieId
  ) {

    return;

  }


  if (
    state.candies[size] <=
    0
  ) {

    return;

  }


  const cookie =
    getCookieById(
      selectedCookieId
    );


  const progress =
    getCookieProgress(
      selectedCookieId
    );


  const oldLevel =
    progress.level;


  state.candies[size]--;


  progress.exp +=
    EXP_CANDIES[size].exp;


  while (
    progress.exp >=
    EXP_PER_LEVEL
  ) {

    progress.exp -=
      EXP_PER_LEVEL;


    progress.level++;

  }


  saveGame();


  renderCandyInventory();

  updateCookieUpgradeUI(
    cookie
  );

  renderCookies();


  if (
    progress.level >
    oldLevel
  ) {

    playLevelUpAnimation(
      cookie,
      oldLevel,
      progress.level
    );

  }

}



/* =========================================================
   LEVEL-UP ANIMATION
========================================================= */

function playLevelUpAnimation(
  cookie,
  oldLevel,
  newLevel
) {

  document
    .getElementById(
      "levelUpCookieIcon"
    )
    .textContent =
    cookie.icon;


  document
    .getElementById(
      "levelUpCookieName"
    )
    .textContent =
    cookie.name;


  document
    .getElementById(
      "levelUpNumbers"
    )
    .textContent =
    `${oldLevel} → ${newLevel}`;


  const overlay =
    document.getElementById(
      "levelUpOverlay"
    );


  overlay.classList.remove(
    "hidden"
  );


  setTimeout(
    () => {

      overlay.classList.add(
        "hidden"
      );

    },
    1600
  );

}



/* =========================================================
   HELPERS
========================================================= */

function getCookieById(id) {

  return cookieRoster.find(
    cookie =>
      cookie.id === id
  );

}



function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2200
    );

}



/* =========================================================
   CLOSE MODALS FROM BACKGROUND
========================================================= */

document
  .getElementById(
    "cookieModal"
  )
  .addEventListener(
    "click",
    event => {

      if (
        event.target.id ===
        "cookieModal"
      ) {

        event.currentTarget
          .classList
          .add(
            "hidden"
          );

      }

    }
  );


document
  .getElementById(
    "battleModal"
  )
  .addEventListener(
    "click",
    event => {

      if (
        event.target.id ===
        "battleModal"
      ) {

        closeBattleModal();

      }

    }
  );



/* =========================================================
   INITIALIZE
========================================================= */

function initializeGame() {

  renderHUD();

  renderKingdom();

  renderStory();

  renderCookies();

}


initializeGame();
