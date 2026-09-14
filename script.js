:root {
  --navy: #1d2a4b;
  --navy-2: #263964;
  --gold: #f6c95d;
  --cream: #fff7df;
  --paper: #f4e2ba;
  --ink: #4d3828;
  --green: #5db96b;
  --red: #d95a5a;
  --shadow: 0 16px 45px rgba(22, 28, 48, .28);
}

* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;

  font-family:
    Inter,
    ui-rounded,
    "Trebuchet MS",
    Arial,
    sans-serif;

  background: #10192d;
  color: var(--ink);
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

#game,
.screen {
  position: absolute;
  inset: 0;
}

.screen {
  display: none;
  overflow: hidden;
}

.screen.active {
  display: block;
}


/* =====================================================
   KINGDOM
===================================================== */

#kingdomScreen {
  background:
    linear-gradient(
      #93d4ef,
      #d8f0d2
    );
}

#kingdomViewport {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

#kingdomScene {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 1536px;
  height: 1024px;

  transform:
    translate(-50%, -50%)
    scale(var(--sceneScale, 1));

  transform-origin: center;
}

#mapImage {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  user-select: none;
  pointer-events: none;
}

#mapError {
  position: absolute;

  left: 50%;
  top: 50%;

  transform:
    translate(-50%, -50%);

  z-index: 100;

  width: 460px;

  padding: 22px;

  border: 4px solid #804d2c;
  border-radius: 20px;

  background: #fff4d2;

  font-weight: 900;
  text-align: center;
}


/* TIME */

#timeTint {
  position: absolute;
  inset: 0;

  z-index: 5;

  pointer-events: none;

  opacity: 0;

  transition:
    background 1.5s,
    opacity 1.5s;
}

#timeTint.evening {
  opacity: .24;

  background:
    linear-gradient(
      rgba(255, 137, 71, .32),
      rgba(95, 57, 130, .18)
    );
}

#timeTint.night {
  opacity: .42;

  background:
    rgba(
      24,
      31,
      83,
      .62
    );
}


/* LAYERS */

#kingdomBuildings,
#kingdomResidents {
  position: absolute;
  inset: 0;
}

#kingdomBuildings {
  z-index: 10;
  pointer-events: none;
}

#kingdomResidents {
  z-index: 20;
  pointer-events: none;
}


/* KINGDOM LABEL */

.kingdom-title-card {
  position: absolute;

  z-index: 40;

  left: 720px;
  top: 440px;

  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 8px 14px;

  border: 3px solid rgba(91, 56, 34, .7);
  border-radius: 18px;

  background: rgba(255, 246, 218, .92);

  box-shadow:
    0 8px 18px rgba(0,0,0,.18);
}

.kingdom-title-card strong {
  font-size: 20px;
  color: #6b462b;
}

.kingdom-title-card span {
  font-size: 13px;
  color: #8b6e53;
}


/* FLOATING BUTTONS */

.floating-quest,
.floating-build {
  position: absolute;

  z-index: 60;

  border: 4px solid #624029;
  border-radius: 18px;

  padding: 13px 18px;

  color: #4e351f;
  font-weight: 1000;

  box-shadow:
    0 8px 18px rgba(0,0,0,.2);
}

.floating-quest {
  left: 340px;
  top: 760px;

  background: #fff3b6;
}

.floating-build {
  right: 310px;
  top: 760px;

  background: #f5cf5e;
}


/* =====================================================
   HUD
===================================================== */

.hud {
  position: fixed;

  z-index: 150;

  pointer-events: none;
}

.top-hud {
  top: 12px;
  left: 14px;
  right: 14px;

  display: flex;
  align-items: center;

  gap: 8px;
}

.hud button,
.hud .resource-pill {
  pointer-events: auto;
}

.profile-pill,
.resource-pill,
.hud-button,
.ticket-pill {
  min-height: 42px;

  display: flex;

  align-items: center;
  justify-content: center;

  border:
    2px solid rgba(255,255,255,.42);

  border-radius: 18px;

  background:
    rgba(
      26,
      40,
      73,
      .9
    );

  color: white;

  box-shadow:
    0 6px 18px rgba(10,17,33,.22);

  font-weight: 900;
}

.profile-pill {
  padding: 0 16px;
}

.resource-pill {
  min-width: 90px;

  padding: 0 14px;
}

.hud-button {
  width: 44px;
  border-radius: 50%;
}

.hud-spacer {
  flex: 1;
}


/* =====================================================
   KINGDOM LAUNCHERS
===================================================== */

.kingdom-launchers {
  position: fixed;

  z-index: 140;

  left: 50%;
  bottom: 16px;

  transform: translateX(-50%);

  display: flex;

  gap: 12px;
}

.kingdom-launchers button {
  min-width: 118px;

  padding: 12px 18px;

  display: flex;

  gap: 8px;

  align-items: center;
  justify-content: center;

  border:
    3px solid rgba(255,255,255,.35);

  border-radius: 20px;

  background:
    rgba(
      26,
      40,
      73,
      .94
    );

  color: white;

  box-shadow: var(--shadow);

  font-weight: 1000;
}

.kingdom-launchers span {
  font-size: 13px;

  letter-spacing: .4px;
}


/* =====================================================
   BUILD DRAWER
===================================================== */

.build-drawer {
  position: fixed;

  z-index: 240;

  left: 18px;
  right: 18px;
  bottom: 14px;

  padding: 14px;

  border: 3px solid #6a482e;
  border-radius: 24px;

  background:
    rgba(
      255,
      247,
      223,
      .97
    );

  box-shadow:
    0 18px 55px rgba(15,22,40,.35);

  transform:
    translateY(
      calc(100% + 30px)
    );

  transition:
    transform .28s ease;
}

.build-drawer.open {
  transform: translateY(0);
}

.build-drawer-head {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 16px;
}

.build-drawer-head strong {
  color: var(--navy);

  font-size: 18px;
}

.build-drawer-head small {
  display: block;

  margin-top: 2px;

  color: #78644f;
}

.build-drawer-head button,
.build-controls button {
  border: 0;

  border-radius: 12px;

  padding: 9px 13px;

  background: var(--navy);

  color: white;

  font-weight: 900;
}

.build-tabs {
  display: flex;

  gap: 7px;

  margin: 12px 0;
}

.build-tabs button {
  padding: 7px 10px;

  border: 1px solid #ceb88c;
  border-radius: 10px;

  background: #f6ead0;

  color: #7e684f;

  font-weight: 800;
}

.build-tabs .active {
  background: var(--gold);

  color: #543b1e;
}

.build-items {
  display: flex;

  gap: 10px;
}

.build-item {
  width: 230px;

  display: flex;

  gap: 12px;

  align-items: center;

  padding: 11px;

  border: 2px solid #c59d57;
  border-radius: 16px;

  background: #fffaf0;

  text-align: left;

  touch-action: none;
}

.build-item-art {
  font-size: 34px;
}

.build-item b,
.build-item small,
.build-item em {
  display: block;
}

.build-item small {
  color: #7c6a58;

  margin: 3px 0;
}

.build-item em {
  color: #a16c14;

  font-style: normal;

  font-weight: 900;
}

.build-controls {
  position: absolute;

  right: 14px;
  bottom: 14px;

  display: flex;

  gap: 8px;
}


/* =====================================================
   BUILD GHOST
===================================================== */

#buildGhost {
  position: fixed;

  z-index: 500;

  width: 88px;
  height: 88px;

  display: none;

  pointer-events: none;

  transform:
    translate(-50%, -50%)
    rotate(
      var(--ghostRotation, 0deg)
    );

  transform-origin: center;
}

#buildGhost.visible {
  display: block;
}

.ghost-house {
  position: absolute;

  left: 10px;
  top: 3px;

  width: 68px;
  height: 60px;

  display: grid;

  place-items: center;

  font-size: 46px;

  filter:
    drop-shadow(
      0 6px 6px
      rgba(0,0,0,.25)
    );
}

#ghostFootprint {
  position: absolute;

  left: 4px;
  right: 4px;
  bottom: 0;

  height: 29px;

  border: 4px solid var(--green);
  border-radius: 50%;

  background:
    rgba(
      93,
      185,
      107,
      .24
    );
}

#buildGhost.invalid #ghostFootprint {
  border-color: var(--red);

  background:
    rgba(
      217,
      90,
      90,
      .25
    );
}


/* =====================================================
   HOUSES
===================================================== */

.kingdom-house {
  position: absolute;

  width: 86px;
  height: 90px;

  transform:
    translate(-50%, -55%)
    rotate(
      var(--houseRotation, 0deg)
    );

  transform-origin:
    center bottom;

  pointer-events: auto;

  border: 0;

  background: transparent;

  padding: 0;
}

.kingdom-house-art {
  display: grid;

  place-items: center;

  width: 74px;
  height: 64px;

  margin: auto;

  border:
    3px solid rgba(98,64,41,.76);

  border-radius:
    22px
    22px
    12px
    12px;

  background:
    linear-gradient(
      #ffd985,
      #ecaa5b
    );

  box-shadow:
    0 7px 12px rgba(0,0,0,.2);

  font-size: 38px;

  transition:
    transform .2s;
}

.kingdom-house:hover
.kingdom-house-art {
  transform:
    translateY(-5px)
    scale(1.06);
}

.kingdom-house-label {
  margin-top: 2px;

  padding: 2px 5px;

  display: inline-block;

  border-radius: 8px;

  background:
    rgba(
      33,
      41,
      61,
      .78
    );

  color: white;

  font-size: 9px;

  font-weight: 900;

  white-space: nowrap;
}

.kingdom-house.move-target
.kingdom-house-art {
  outline:
    5px solid
    #6fc77d;
}


/* =====================================================
   KINGDOM COOKIES
===================================================== */

.kingdom-cookie {
  position: absolute;

  width: 72px;
  height: 86px;

  transform:
    translate(-50%, -80%);

  transition:
    left 3.6s ease-in-out,
    top 3.6s ease-in-out;

  pointer-events: auto;

  cursor: pointer;

  transform-origin:
    center bottom;
}

.kingdom-cookie .cookie-avatar {
  width: 100%;
  height: 100%;
}

.kingdom-cookie.walk-left
.cookie-avatar {
  transform:
    scaleX(-1);
}

.kingdom-cookie.idle
.cookie-avatar {
  animation:
    cookieIdle
    1.7s
    ease-in-out
    infinite;
}

.kingdom-cookie.sleeping
.cookie-avatar {
  opacity: .86;

  animation:
    cookieSleep
    2.2s
    ease-in-out
    infinite;
}

@keyframes cookieIdle {

  50% {
    transform:
      translateY(-3px);
  }

}

@keyframes cookieSleep {

  50% {
    transform:
      translateY(2px)
      rotate(2deg);
  }

}

.cookie-name {
  position: absolute;

  left: 50%;
  bottom: -12px;

  transform:
    translateX(-50%);

  display: none;

  padding: 2px 7px;

  border-radius: 9px;

  background:
    rgba(
      24,
      31,
      52,
      .86
    );

  color: white;

  font-size: 8px;

  font-weight: 900;

  white-space: nowrap;
}

.kingdom-cookie:hover
.cookie-name {
  display: block;
}

.cookie-work-icon {
  position: absolute;

  right: -3px;
  top: 1px;

  width: 23px;
  height: 23px;

  display: grid;

  place-items: center;

  border: 2px solid #62442c;

  border-radius: 50%;

  background: white;

  font-size: 12px;
}

.cookie-speech {
  position: absolute;

  left: 50%;
  bottom: 82px;

  transform:
    translateX(-50%)
    translateY(5px);

  max-width: 155px;

  width: max-content;

  padding: 7px 9px;

  border: 2px solid #68462e;

  border-radius: 12px;

  background: #fffdf6;

  color: #4e3828;

  font-size: 9px;

  font-weight: 800;

  text-align: center;

  box-shadow:
    0 5px 12px rgba(0,0,0,.16);

  opacity: 0;

  pointer-events: none;

  transition:
    opacity .2s,
    transform .2s;
}

.cookie-speech.show {
  opacity: 1;

  transform:
    translateX(-50%)
    translateY(-2px);
}


/* =====================================================
   COOKIE ART
===================================================== */

.cookie-avatar {
  position: relative;

  display: inline-block;

  width: 100px;
  height: 118px;

  filter:
    drop-shadow(
      0 7px 5px
      rgba(0,0,0,.18)
    );
}

.cookie-head {
  position: absolute;

  left: 50%;
  top: 8px;

  width: 62px;
  height: 62px;

  transform:
    translateX(-50%);

  border: 4px solid #643d24;

  border-radius:
    46%
    48%
    45%
    50%;

  background: #d99555;
}

.cookie-frosting {
  position: absolute;

  left: 50%;
  top: -8px;

  width: 58px;
  height: 27px;

  transform:
    translateX(-50%);

  border: 4px solid #643d24;
  border-bottom-width: 2px;

  border-radius:
    50%
    50%
    40%
    40%;

  background:
    var(--cookieFrosting);
}

.cookie-eye {
  position: absolute;

  top: 28px;

  width: 6px;
  height: 9px;

  border-radius: 50%;

  background: #4f2d1d;
}

.cookie-eye.left {
  left: 16px;
}

.cookie-eye.right {
  right: 16px;
}

.cookie-mouth {
  position: absolute;

  left: 50%;
  top: 43px;

  width: 17px;
  height: 8px;

  transform:
    translateX(-50%);

  border-bottom:
    3px solid #633725;

  border-radius: 50%;
}

.cookie-body {
  position: absolute;

  left: 50%;
  top: 61px;

  width: 52px;
  height: 43px;

  transform:
    translateX(-50%);

  border: 4px solid #643d24;

  border-radius:
    15px
    15px
    20px
    20px;

  background:
    linear-gradient(
      var(--cookiePrimary),
      var(--cookieSecondary)
    );
}

.cookie-motif {
  position: absolute;

  left: 50%;
  top: 12px;

  transform:
    translateX(-50%);

  color: #fff8c7;

  font-size: 16px;

  font-weight: 1000;

  text-shadow:
    0 2px 0 rgba(82,49,28,.5);
}

.cookie-arm,
.cookie-leg {
  position: absolute;

  background: #d99555;

  border: 3px solid #643d24;

  border-radius: 20px;
}

.cookie-arm {
  width: 11px;
  height: 34px;

  top: 67px;
}

.cookie-arm.left {
  left: 14px;

  transform:
    rotate(24deg);
}

.cookie-arm.right {
  right: 14px;

  transform:
    rotate(-24deg);
}

.cookie-leg {
  width: 12px;
  height: 27px;

  top: 95px;
}

.cookie-leg.left {
  left: 33px;

  transform:
    rotate(5deg);
}

.cookie-leg.right {
  right: 33px;

  transform:
    rotate(-5deg);
}

.rarity-crown {
  position: absolute;

  left: 50%;
  top: -12px;

  transform:
    translateX(-50%);

  z-index: 4;

  font-size: 22px;
}


/* =====================================================
   OTHER SCREENS
===================================================== */

.panel-screen,
.gacha-screen {
  overflow-y: auto;

  background:
    radial-gradient(
      circle at 50% 0,
      #435f95,
      #182744 55%,
      #111a2c
    );

  color: white;
}

.screen-header {
  position: sticky;

  z-index: 100;

  top: 0;

  min-height: 70px;

  padding: 12px 18px;

  display: grid;

  grid-template-columns:
    1fr
    auto
    1fr;

  align-items: center;

  background:
    rgba(
      16,
      26,
      47,
      .94
    );

  border-bottom:
    1px solid rgba(255,255,255,.12);
}

.screen-header h1 {
  margin: 0;

  font-size: 22px;

  letter-spacing: 1px;
}

.screen-header > :last-child {
  justify-self: end;
}

.back-button {
  justify-self: start;

  padding: 10px 14px;

  border:
    1px solid rgba(255,255,255,.2);

  border-radius: 14px;

  background:
    rgba(255,255,255,.09);

  color: white;

  font-weight: 900;
}


/* =====================================================
   ADVENTURE
===================================================== */

.adventure-hub {
  width:
    min(
      980px,
      94vw
    );

  margin:
    30px
    auto
    80px;

  display: grid;

  grid-template-columns:
    repeat(
      2,
      1fr
    );

  gap: 18px;
}

.mode-card {
  min-height: 190px;

  padding: 25px;

  display: flex;

  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-end;

  border:
    2px solid rgba(255,255,255,.18);

  border-radius: 26px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.13),
      rgba(255,255,255,.04)
    );

  color: white;

  text-align: left;

  box-shadow:
    var(--shadow);
}

.mode-card.hero-mode {
  grid-column:
    1 / -1;

  min-height: 240px;

  background:
    linear-gradient(
      145deg,
      #5b85bd,
      #2d4e80
    );
}

.mode-icon {
  font-size: 48px;

  margin-bottom: 15px;
}

.mode-card b {
  font-size: 23px;
}

.mode-card small {
  margin-top: 7px;

  color: #d9e5ff;
}


/* =====================================================
   WORLD
===================================================== */

.world-layout {
  width:
    min(
      1180px,
      95vw
    );

  margin:
    24px
    auto
    70px;
}

.world-map-card {
  position: relative;

  height: 310px;

  overflow: hidden;

  border:
    2px solid rgba(255,255,255,.18);

  border-radius: 26px;

  box-shadow:
    var(--shadow);
}

.world-map-card img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.world-map-caption {
  position: absolute;

  left: 20px;
  bottom: 18px;

  padding: 10px 14px;

  border-radius: 14px;

  background:
    rgba(20,31,55,.88);

  font-weight: 900;
}

.stage-route-wrap {
  margin-top: 18px;

  padding: 20px;

  border-radius: 24px;

  background:
    rgba(255,255,255,.08);
}

.stage-route-title h2 {
  margin: 0;
}

.stage-route-title p {
  margin:
    4px
    0
    18px;

  color: #c9d6ee;
}

.stage-route {
  display: flex;

  flex-wrap: wrap;

  align-items: center;

  gap: 12px;
}

.stage-node {
  width: 74px;
  height: 74px;

  border: 3px solid #d3ddef;
  border-radius: 50%;

  background: #31486e;

  color: white;

  font-weight: 1000;
}

.stage-node.done {
  background: #6a9b64;

  border-color: #dff0a8;
}

.stage-node.boss {
  background: #7f4151;

  border-color: #ffd78e;
}


/* =====================================================
   STAGE
===================================================== */

.stage-detail-card {
  width:
    min(
      760px,
      92vw
    );

  margin:
    45px
    auto
    90px;

  padding: 28px;

  border-radius: 28px;

  background:
    rgba(255,255,255,.09);

  box-shadow:
    var(--shadow);
}

.enemy-preview {
  padding: 35px;

  margin-bottom: 20px;

  border-radius: 20px;

  background:
    rgba(0,0,0,.15);

  text-align: center;

  font-size: 50px;
}

.stage-stat,
.reward-row {
  display: flex;

  justify-content: space-between;

  gap: 20px;

  padding:
    13px
    0;

  border-bottom:
    1px solid rgba(255,255,255,.12);
}

.team-preview {
  display: flex;

  gap: 10px;

  flex-wrap: wrap;

  margin:
    15px
    0
    24px;
}

.team-mini {
  width: 88px;

  padding: 8px;

  border-radius: 16px;

  background:
    rgba(255,255,255,.08);

  text-align: center;

  font-size: 9px;
}

.team-mini .cookie-avatar {
  width: 64px;
  height: 74px;
}

.stage-actions {
  display: flex;

  justify-content: flex-end;

  gap: 12px;
}

.primary-action,
.secondary-action {
  padding: 12px 18px;

  border: 0;
  border-radius: 14px;

  font-weight: 1000;
}

.primary-action {
  background:
    linear-gradient(
      #f7d365,
      #e8a938
    );

  color: #52380f;
}

.secondary-action {
  background: #314b77;

  color: white;
}


/* =====================================================
   COOKIE COLLECTION
===================================================== */

.cookies-layout {
  width:
    min(
      1300px,
      96vw
    );

  margin:
    24px
    auto
    70px;

  display: grid;

  grid-template-columns:
    340px
    1fr;

  gap: 20px;
}

.cookie-detail {
  min-height: 560px;

  padding: 20px;

  border:
    2px solid rgba(255,255,255,.14);

  border-radius: 24px;

  background:
    rgba(255,255,255,.08);

  text-align: center;
}

.cookie-detail .cookie-avatar {
  width: 190px;
  height: 220px;

  margin:
    12px
    auto;
}

.cookie-detail h2 {
  margin:
    2px
    0
    5px;
}

.detail-rarity {
  font-weight: 1000;

  color: #ffe191;
}

.detail-meta {
  margin:
    12px
    0;

  color: #d7e2f7;
}

.detail-lore {
  padding: 12px;

  border-radius: 14px;

  background:
    rgba(0,0,0,.15);

  color: #dfe8f7;

  line-height: 1.5;
}

.cookie-browser {
  min-width: 0;
}

.cookie-toolbar {
  display: flex;

  gap: 8px;

  margin-bottom: 12px;
}

.cookie-toolbar input,
.cookie-toolbar select {
  min-height: 42px;

  border:
    1px solid rgba(255,255,255,.18);

  border-radius: 12px;

  background:
    rgba(255,255,255,.09);

  color: white;

  padding:
    0
    12px;
}

.cookie-toolbar input {
  flex: 1;
}

.cookie-toolbar select option {
  color: #111;
}

.cookie-grid {
  display: grid;

  grid-template-columns:
    repeat(
      auto-fill,
      minmax(
        145px,
        1fr
      )
    );

  gap: 12px;
}

.cookie-card {
  position: relative;

  min-height: 205px;

  padding: 10px;

  border:
    2px solid rgba(255,255,255,.14);

  border-radius: 18px;

  background:
    rgba(255,255,255,.07);

  color: white;

  text-align: center;
}

.cookie-card.owned {
  border-color:
    rgba(
      255,
      220,
      120,
      .6
    );
}

.cookie-card.locked .cookie-avatar {
  filter:
    grayscale(.75)
    brightness(.55);
}

.cookie-card .cookie-avatar {
  width: 96px;
  height: 112px;

  margin: auto;
}

.cookie-card b {
  display: block;

  font-size: 12px;
}

.cookie-card small {
  color: #c8d6ef;
}

.cookie-status {
  position: absolute;

  left: 9px;
  right: 9px;
  bottom: 8px;

  padding: 4px 7px;

  border-radius: 8px;

  background:
    rgba(9,16,28,.55);

  font-size: 9px;

  font-weight: 900;
}


/* =====================================================
   GACHA
===================================================== */

.gacha-screen {
  background:
    radial-gradient(
      circle at 50% 40%,
      #4c5e8d,
      #1b2744 50%,
      #0c1428
    );
}

.translucent-header {
  background:
    rgba(12,20,40,.65);
}

.gacha-lobby {
  min-height:
    calc(
      100vh - 72px
    );

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding:
    35px
    18px
    70px;

  text-align: center;
}

.fortune-tree {
  position: relative;

  width: 280px;
  height: 300px;

  margin-bottom: 5px;
}

.fortune-glow {
  position: absolute;

  left: 50%;
  top: 38%;

  width: 220px;
  height: 220px;

  transform:
    translate(-50%, -50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(255,231,126,.75),
      rgba(255,231,126,0)
    );

  animation:
    pulseGlow
    2s
    ease-in-out
    infinite;
}

@keyframes pulseGlow {

  50% {

    transform:
      translate(-50%, -50%)
      scale(1.12);

    opacity: .7;

  }

}

.fortune-leaves {
  position: absolute;

  left: 50%;
  top: 20px;

  transform:
    translateX(-50%);

  font-size: 100px;

  line-height: .85;

  filter:
    drop-shadow(
      0 10px 20px
      rgba(0,0,0,.32)
    );
}

.fortune-trunk {
  position: absolute;

  left: 50%;
  bottom: 22px;

  width: 45px;
  height: 100px;

  transform:
    translateX(-50%);

  border-radius: 20px;

  background:
    linear-gradient(
      #92613b,
      #5e3d28
    );
}

.gacha-lobby h2 {
  margin:
    0
    0
    7px;
}

.gacha-lobby p {
  max-width: 650px;

  color: #cedaf0;
}

.gacha-buttons {
  display: flex;

  gap: 14px;

  margin:
    18px
    0;
}

.gacha-buttons button {
  min-width: 180px;

  padding:
    14px
    20px;

  border:
    2px solid #f9df8a;

  border-radius: 18px;

  background:
    linear-gradient(
      #f3c95d,
      #c9912f
    );

  color: #452d0e;

  font-weight: 1000;
}

.gacha-buttons small {
  display: block;

  margin-top: 3px;
}

.summon-results {
  width:
    min(
      980px,
      95vw
    );

  display: grid;

  grid-template-columns:
    repeat(
      auto-fit,
      minmax(
        110px,
        1fr
      )
    );

  gap: 10px;

  margin-top: 15px;
}

.summon-card {
  padding: 9px;

  border:
    2px solid rgba(255,255,255,.16);

  border-radius: 16px;

  background:
    rgba(255,255,255,.08);

  color: white;
}

.summon-card.new {
  border-color: #ffe17f;

  box-shadow:
    0 0 25px rgba(255,215,105,.2);
}

.summon-card .cookie-avatar {
  width: 80px;
  height: 92px;
}

.summon-card b {
  display: block;

  font-size: 11px;
}


/* =====================================================
   MODALS
===================================================== */

.modal-layer {
  position: fixed;
  inset: 0;

  z-index: 1000;

  display: none;

  place-items: center;

  padding: 18px;

  background:
    rgba(
      8,
      14,
      29,
      .68
    );
}

.modal-layer.open {
  display: grid;
}

.modal-card {
  position: relative;

  width:
    min(
      500px,
      92vw
    );

  max-height: 82vh;

  overflow-y: auto;

  padding: 24px;

  border: 4px solid #735039;

  border-radius: 24px;

  background:
    linear-gradient(
      #fff9e8,
      #f1dfba
    );

  color: #4a3525;

  box-shadow:
    0 20px 70px rgba(0,0,0,.42);
}

.modal-close {
  position: absolute;

  right: 12px;
  top: 12px;

  width: 34px;
  height: 34px;

  border: 0;

  border-radius: 50%;

  background: #65442f;

  color: white;
}

.home-summary {
  display: flex;

  gap: 10px;

  margin:
    10px
    0
    18px;
}

.home-summary span {
  padding:
    6px
    9px;

  border-radius: 10px;

  background: #f4e2ba;

  font-weight: 800;
}

.home-resident-list {
  display: grid;

  gap: 8px;

  margin:
    15px
    0;
}

.home-resident {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 10px;

  padding:
    9px
    10px;

  border-radius: 12px;

  background:
    rgba(255,255,255,.7);
}

.home-resident button {
  border: 0;

  border-radius: 9px;

  padding:
    6px
    9px;

  background: #79553b;

  color: white;

  font-weight: 800;
}

.empty-house-slot {
  padding: 9px;

  border:
    2px dashed rgba(86,58,39,.27);

  border-radius: 10px;

  text-align: center;

  color: #8c765e;
}

.quest-card {
  padding: 16px;

  border-radius: 14px;

  background:
    rgba(255,255,255,.7);
}


/* =====================================================
   TOAST
===================================================== */

#toast {
  position: fixed;

  z-index: 4000;

  left: 50%;
  top: 90px;

  transform:
    translate(-50%, -15px);

  padding:
    10px
    15px;

  border-radius: 14px;

  background:
    rgba(
      20,
      30,
      54,
      .94
    );

  color: white;

  font-weight: 900;

  box-shadow:
    var(--shadow);

  opacity: 0;

  pointer-events: none;

  transition:
    opacity .2s,
    transform .2s;
}

#toast.show {
  opacity: 1;

  transform:
    translate(-50%, 0);
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 820px) {

  .cookies-layout {
    grid-template-columns: 1fr;
  }

  .cookie-detail {
    min-height: 0;
  }

  .adventure-hub {
    grid-template-columns: 1fr;
  }

  .mode-card.hero-mode {
    grid-column: auto;
  }

  .kingdom-launchers button {
    min-width: 92px;

    padding: 10px;
  }

  .kingdom-launchers span {
    display: none;
  }

  .resource-pill {
    min-width: 70px;

    padding: 0 8px;
  }

}
