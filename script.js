"use strict";

/* ==========================================================================
   1. CONTENT — edit the text, songs, photos and timeline here
   ========================================================================== */

const CONFIG = {
  girlfriendName: "Ananya",
  myName: "Shreyash",
  nicknames: ["Babbyy", "Meri jaan", "Princess", "my cuitess bchaa"],

  // Birthday surprise PIN
  pin: "0807",
  pinHint: "4 numbers. Birthday secret hai — sirf tumhe pata hona chahiye. 🎂🔐",
  wrongPin: "Nahi Babbyy, fir se socho 💭",

  // Files
  music: "assets/music.mp3",
  // Voice note is intentionally left empty for now; add it later without changing the page.
  voiceNote: "",
  hero: "gift/i17.png",
  musicTracks: [
    { title: "Birthday background music", src: "assets/music.mp3" },
    { title: "Aarzu edit audio", src: "assets/aarzu-edit.mp4" }
  ],

  // Exact birthday letter provided by Shreyash. Do not rewrite.
  letter: [
    "For the girl who makes ordinary days feel new,",
    "for the smile that somehow makes everything better too.",
    "For the little moments, the laughs, the memories we share,",
    "and for simply being you, with that heart so rare. ❤️",
    "May this year bring you all the happiness you deserve,",
    "more reasons to smile, more dreams to preserve.",
    "And if I get to be beside you through it all,",
    "then honestly, that's all I could ever ask for. 🥹❤️",
    "Happy Birthday, my Ananya.",
    "Keep smiling, keep being you,",
    "and never forget ",
    "you are so, so loved by your jaanuu🎂❤️"
  ],

  // [title, text]
  reasons: [
    ["Your smile",          "Tumhari hasi literally mera mood reset kar deti hai."],
    ["Your heart",          "Tum jis tarah care karti ho, woh tumhe aur bhi special banata hai."],
    ["Your madness",        "Tumhare saath boring naam ki koi cheez nahi hai."],
    ["Your voice",          "Tumhari awaaz sunte hi din thoda better lagne lagta hai."],
    ["Your little things",  "Tumhari woh tiny habits jo shayad tum khud notice bhi nahi karti."],
    ["Your strength",       "Jo kuch bhi aaye, tum phir bhi apni light carry karti ho."],
    ["Your kindness",       "Tumhari softness duniya ko thoda nicer bana deti hai."],
    ["Your dreams",         "I hope you get every beautiful thing you quietly wish for."],
    ["Just you",            "Saare reasons hata do... answer phir bhi tum hi ho. Meri Ananya. ❤️"]
  ],

  // Birthday treats / playful coupons
  coupons: [
    ["BIRTHDAY HUG",        "Long, tight, no-excuses birthday hug.",                         "SWEET"],
    ["KISS RAIN",           "Redeem this whenever you want a random number of kisses 🎲",   "PLAYFUL", "kisses"],
    ["FOREHEAD KISS",       "Slow, soft, aankhein band.",                                   "SOFT"],
    ["CHAI / COFFEE DATE",  "Jahan tum chaho. Bill mera.",                                  "DATE"],
    ["MOVIE NIGHT",         "Movie tum chuno, popcorn mera.",                               "COSY"],
    ["SLOW DANCE",          "Koi bhi gaana, sirf hum dono.",                                "ROMANTIC"],
    ["PLAYLIST FOR YOU",    "Tumhare mood ka ek playlist, meri taraf se ❤️",                "CUSTOM"],
    ["10 MIN MASSAGE",      "Sar ya haath - tum bolo, 10 minute pure pampering.",           "PAMPER"],
    ["YOU WIN",             "Birthday day par ek argument mein tum automatically right.",  "ONE DAY"],
    ["EVERYTHING PASS",     "Hug + kisses + cuddles + pampering - birthday edition 🥹",     "ULTRA RARE"]
  ]
};

const PHOTO_FILES = [
  "memory-01.jpg",
  "memory-02.jpg",
  "memory-03.jpg",
  "memory-04.jpg",
  "memory-05.jpg",
  "memory-06.jpg",
  "memory-07.jpg",
  "memory-08.jpg",
  "memory-09.jpg",
  "memory-10.jpg",
  "memory-11.jpg",
  "memory-12.jpg",
  "memory-13.jpg",
  "memory-14.jpg",
  "memory-15.jpg"
];

const PHOTO_CONFIG = {
  total: PHOTO_FILES.length
};

// Birthday chapters: this is a birthday wish sequence.
const TIMELINE = [
  ["BIRTHDAY", "01", "Make a wish.",             "Aaj tumhari har chhoti-badi wish thodi aur close ho."],
  ["WISH",     "02", "Keep smiling.",            "Tumhari smile kabhi kam na ho — bas aur zyada reasons milte rahein."],
  ["WISH",     "03", "Choose yourself.",         "Har jagah, har situation mein apni happiness ko bhi priority dena."],
  ["WISH",     "04", "Dream bigger.",            "Jo tum chahti ho, usse bhi thoda bada dream karna."],
  ["WISH",     "05", "Stay surrounded by love.", "Tumhare aas-paas hamesha woh log rahein jo tumhe genuinely value karein."],
  ["WISH",     "06", "More beautiful days.",     "Normal days bhi tumhare liye favourite memories ban jaayein."],
  ["WISH",     "07", "More little adventures.", "Random plans, silly laughs, good food aur bohot saari stories."],
  ["WISH",     "08", "A softer year.",           "Less stress, more peace, more laughter, more moments that feel like you."],
  ["BIRTHDAY", "09", "Happy Birthday, Ananya.", "Bas aise hi khush rehna, grow karna, shine karna — and keep being you. 🎂❤️"]
];

const TIMELINE_CURVE =
  "M0,148 C90,45 175,226 270,126 S450,52 540,135 S720,220 820,120 S920,72 1000,138";

// Pages after the PIN, in order. Used for the menu and the Back / Next buttons.
const CHAPTERS = [
  { id: "letter",     label: "My birthday letter", short: "Letter",       note: "Meri Ananya ke naam" },
  { id: "timeline",   label: "Birthday wishes",    short: "Wishes",       note: "9 little wishes for you" },
  { id: "memoryWall", label: "Memory wall",        short: "Memories",     note: `${PHOTO_FILES.length} favourite frames` },
  { id: "reasons",    label: "Things I adore",     short: "Things I adore",note: "Little things that make you you" },
  { id: "coupons",    label: "Birthday treats",    short: "Treats",       note: "Redeem whenever you want" },
  { id: "aarzu",      label: "Aarzu",               short: "Aarzu",        note: "Ek filmy birthday pause" },
  { id: "finale",     label: "Birthday surprise",  short: "Surprise",     note: "One last little reveal" },
  { id: "voice",      label: "Birthday voice note",short: "Voice note",   note: "A message from Shreyash" }
];

/* ==========================================================================
   2. SETTINGS, DOM SHORTCUTS AND STATE
   ========================================================================== */

const MUSIC_VOLUME = 0.24;        // normal background volume
const MUSIC_VOLUME_DUCKED = 0.08; // volume while the voice note plays
const PAGE_FADE_MS = 360;         // fade time when changing pages

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const bgm = $("#bgm");
const voice = $("#voiceNote");
const toast = $("#toast");

const state = {
  scene: "opening",
  unlocked: false,
  changingPage: false,
  menuOpen: false,
  answeredYes: false,
  pin: "",
  musicRequested: false, // we already tried to start music once
  resumeMusicAfterVideo: false,
  trackIndex: 0,
  letterTimer: null,
  letterDone: false,
  lightboxIndex: 1,
  maybeClicks: 0,

  // Memory wall
  wallView: "wall",     // "wall" | "reel" | "stack" | "cover" | "scatter" | "film" — reel is the default
  wallSpeed: "normal",  // "slow" | "normal" | "fast"
  wallEffect: "cascade", // "cascade" | "flip" | "zoom" | "slide" | "rain" | "twirl" | "blur" | "tumble"
  reelEffect: "upload", // "upload" | "fade" | "slide" | "zoom" | "flip" | "drift" | "drop" | "swing" | "spin"
  reelShape: "",
  reelToken: 0,
  stackToken: 0,
  coverToken: 0,
  scatterToken: 0,
  stackTop: 0,
  scatterCards: [],
  reelIndex: 1,
  reelPlaying: true,
  reelTimer: null,
  reelProgressTimer: null
};

// How fast the wall rushes in and how fast the reel plays, per speed setting.
const WALL_SPEED = {
  slow:   { stagger: 70, entranceCap: 4200, uploadMs: 1300, holdMs: 2600 },
  normal: { stagger: 42, entranceCap: 3000, uploadMs: 850,  holdMs: 1750 },
  fast:   { stagger: 22, entranceCap: 1600, uploadMs: 480,  holdMs: 950 }
};


/* ==========================================================================
   3. SMALL HELPERS
   ========================================================================== */

function photoPath(index) {
  const safeIndex = ((index - 1) % PHOTO_FILES.length + PHOTO_FILES.length) % PHOTO_FILES.length;
  return `gift/${PHOTO_FILES[safeIndex]}`;
}

/** "LOVE-716-2524" style code, minted fresh each time a coupon is redeemed. */
function randomCouponCode() {
  const a = String(Math.floor(Math.random() * 900) + 100);
  const b = String(Math.floor(Math.random() * 9000) + 1000);
  return `LOVE-${a}-${b}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

/** Rising hearts and petals for celebrations. */
function burst(count = 24) {
  Sky.burst(count);
}


/* ==========================================================================
   4. BACKGROUND SKY (canvas): twinkling stars, falling petals, rising hearts,
      sparkles that follow your finger / mouse
   ========================================================================== */

const Sky = (() => {
  const canvas = $("#sky");
  const ctx = canvas.getContext("2d");

  const PETAL_COLORS = ["255,205,220", "246,169,191", "255,226,214", "233,140,170"];
  const HEART_COLORS = ["246,169,191", "255,211,222", "233,120,160", "255,217,166"];
  const WIND = 14; // constant push to the right (px per second)

  let width = 0;
  let height = 0;
  let time = 0;
  let lastFrame = 0;
  let lastSparkAt = 0;
  let stars = [];
  let petals = [];
  let hearts = [];
  let sparks = [];
  let confetti = [];

  const rand = (min, max) => min + Math.random() * (max - min);
  const pick = (list) => list[(Math.random() * list.length) | 0];

  /* ----- create things ----- */

  function makeStar() {
    return { x: rand(0, width), y: rand(0, height), r: rand(0.4, 1.5), phase: rand(0, 6.28), speed: rand(0.6, 1.8) };
  }

  function makePetal(fromTop) {
    return {
      x: rand(-40, width + 40),
      y: fromTop ? rand(-70, -10) : rand(-20, height),
      size: rand(7, 15),
      fall: rand(22, 52),
      sway: rand(14, 38),
      swaySpeed: rand(0.5, 1.2),
      phase: rand(0, 6.28),
      rot: rand(0, 6.28),
      spin: rand(-1.2, 1.2),
      flip: rand(0, 6.28),
      flipSpeed: rand(1, 2.4),
      alpha: rand(0.35, 0.8),
      color: pick(PETAL_COLORS)
    };
  }

  function makeHeart(fromBottom) {
    return {
      x: rand(0, width),
      y: fromBottom ? height + rand(10, 60) : rand(0, height),
      size: rand(6, 14),
      rise: rand(14, 34),
      phase: rand(0, 6.28),
      alpha: rand(0.1, 0.3),
      color: pick(HEART_COLORS)
    };
  }

  function populate() {
    const small = width < 600;
    stars = Array.from({ length: Math.min(90, Math.round((width * height) / 16000)) }, makeStar);
    petals = reducedOrEmpty(Array.from({ length: small ? 14 : 26 }, () => makePetal(false)));
    hearts = reducedOrEmpty(Array.from({ length: small ? 6 : 10 }, () => makeHeart(false)));
  }

  function reducedOrEmpty(list) {
    return prefersReducedMotion ? [] : list;
  }

  /* ----- drawing shapes ----- */

  function petalShape(s) {
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.bezierCurveTo(s * 0.9, -s * 0.6, s * 0.9, s * 0.5, 0, s);
    ctx.bezierCurveTo(-s * 0.9, s * 0.5, -s * 0.9, -s * 0.6, 0, -s);
  }

  function heartShape(s) {
    ctx.beginPath();
    ctx.moveTo(0, s * 0.9);
    ctx.bezierCurveTo(-s * 1.3, -s * 0.1, -s * 0.7, -s * 1.1, 0, -s * 0.4);
    ctx.bezierCurveTo(s * 0.7, -s * 1.1, s * 1.3, -s * 0.1, 0, s * 0.9);
    ctx.closePath();
  }

  function drawStars() {
    ctx.fillStyle = "#fff1de";
    stars.forEach((star) => {
      ctx.globalAlpha = 0.18 + 0.6 * (0.5 + 0.5 * Math.sin(time * star.speed + star.phase));
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, 6.283);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.scale(Math.cos(p.flip), 1); // makes the petal flutter as if turning in the air
    ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
    petalShape(p.size);
    ctx.fill();
    ctx.restore();
  }

  function drawHeart(x, y, size, color, alpha, rotation = 0) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.fillStyle = `rgba(${color},${alpha})`;
    heartShape(size);
    ctx.fill();
    ctx.restore();
  }

  /* ----- moving things ----- */

  function update(dt) {
    petals.forEach((p, i) => {
      p.y += p.fall * dt;
      p.x += (Math.sin(time * p.swaySpeed + p.phase) * p.sway + WIND) * dt;
      p.rot += p.spin * dt;
      p.flip += p.flipSpeed * dt;
      if (p.y > height + 30 || p.x > width + 60) petals[i] = makePetal(true);
    });

    hearts.forEach((h, i) => {
      h.y -= h.rise * dt;
      h.x += Math.sin(time * 0.6 + h.phase) * 10 * dt;
      if (h.y < -30) hearts[i] = makeHeart(true);
    });

    sparks = sparks.filter((s) => {
      s.life -= dt;
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.vy += 40 * dt;
      return s.life > 0;
    });

    confetti = confetti.filter((c) => {
      c.life -= dt;
      c.x += (c.vx + Math.sin(time * 2 + c.phase) * 20) * dt;
      c.y += c.vy * dt;
      c.vy += 95 * dt; // gravity slows the rise, then they drift down
      c.rot += c.spin * dt;
      return c.life > 0;
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    drawStars();
    hearts.forEach((h) => drawHeart(h.x, h.y, h.size, h.color, h.alpha));
    petals.forEach(drawPetal);

    sparks.forEach((s) => {
      drawHeart(s.x, s.y, s.size, s.color, Math.min(1, s.life / s.maxLife) * 0.9, s.rot);
    });

    confetti.forEach((c) => {
      const alpha = Math.min(1, c.life) * 0.9;
      if (c.kind === "heart") {
        drawHeart(c.x, c.y, c.size, c.color, alpha, c.rot);
      } else {
        drawPetal({ x: c.x, y: c.y, size: c.size, rot: c.rot, flip: time * 3 + c.phase, color: c.color, alpha });
      }
    });
  }

  function frame(now) {
    const dt = Math.min((now - lastFrame) / 1000, 0.05);
    lastFrame = now;
    time += dt;
    update(dt);
    draw();
    requestAnimationFrame(frame);
  }

  /* ----- public actions ----- */

  /** A shower of hearts and petals from the bottom of the screen. */
  function burst(count = 24) {
    if (prefersReducedMotion) return;
    const total = Math.min(count, 60);

    for (let i = 0; i < total; i += 1) {
      confetti.push({
        kind: Math.random() < 0.6 ? "heart" : "petal",
        x: rand(width * 0.1, width * 0.9),
        y: height + rand(0, 40),
        vx: rand(-50, 50),
        vy: -rand(200, 520),
        size: rand(7, 15),
        rot: rand(-0.6, 0.6),
        spin: rand(-2, 2),
        phase: rand(0, 6.28),
        life: rand(3, 5.5),
        color: pick(HEART_COLORS)
      });
    }
  }

  /** A few tiny hearts where the finger / mouse touches the screen. */
  function sparkle(x, y, count = 1) {
    if (prefersReducedMotion) return;

    for (let i = 0; i < count; i += 1) {
      const life = rand(0.7, 1.3);
      sparks.push({
        x, y,
        vx: rand(-40, 40),
        vy: rand(-70, -20),
        size: rand(3.5, 7),
        rot: rand(-0.5, 0.5),
        life,
        maxLife: life,
        color: pick(HEART_COLORS)
      });
    }
  }

  function setupPointer() {
    window.addEventListener("pointermove", (event) => {
      const now = performance.now();
      if (now - lastSparkAt < 55) return;
      lastSparkAt = now;
      sparkle(event.clientX, event.clientY, 1);
    }, { passive: true });

    window.addEventListener("pointerdown", (event) => {
      sparkle(event.clientX, event.clientY, 7);
    }, { passive: true });
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    populate();
    if (prefersReducedMotion) draw(); // still picture only
  }

  function init() {
    resize();

    let resizeTimer;
    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 150);
    });

    if (prefersReducedMotion) return;

    setupPointer();
    lastFrame = performance.now();
    requestAnimationFrame(frame);
  }

  return { init, burst, sparkle };
})();


/* ==========================================================================
   4b. RISE: hearts, little words and Ananya's photos float up from the bottom
       on the Aarzu page and the Voice-note page.
       - some pass OVER the page text, some pass UNDER it
       - none ever pass over the video / the voice-note card
   ========================================================================== */

const Rise = (() => {
  const WORDS = [
    "Happy Birthday Ananya 🎂", "Meri Babbyy ❤", "Meri jaan 😘", "Princess ♡",
    "My cuitess bchaa 🥹", "Birthday girl ✨", "Tumhari smile ❤", "Have the best day",
    "Aaj sirf tumhari day hai 🎉", "Love you, Ananya", "Make a wish 💫"
  ];
  const SYMBOLS = ["❤", "♡", "💗", "💕", "♥", "💖"];
  const COLORS = ["#f6a9bf", "#ffd3de", "#e98cab", "#ffd9a6", "#ff8fb1"];
  const MAX_ON_SCREEN = 30;

  let front = null;   // floats above the page text, below the video
  let back = null;    // floats below the page text
  let timer = null;
  let startTimer = null;
  let active = false;
  let sceneId = null;

  const rand = (min, max) => min + Math.random() * (max - min);
  const pick = (list) => list[(Math.random() * list.length) | 0];

  function makeLayer(kind) {
    const layer = document.createElement("div");
    layer.className = `rise-layer rise-${kind}`;
    layer.setAttribute("aria-hidden", "true");
    return layer;
  }

  function launch(el) {
    const layer = Math.random() < 0.6 ? front : back;
    if (!layer) return;
    el.style.left = `${rand(2, 90).toFixed(1)}%`;
    el.style.setProperty("--dur", `${rand(7.5, 12.5).toFixed(1)}s`);
    el.style.setProperty("--dx", `${rand(-90, 90).toFixed(0)}px`);
    el.style.setProperty("--r0", `${rand(-14, 14).toFixed(0)}deg`);
    el.style.setProperty("--r1", `${rand(-30, 30).toFixed(0)}deg`);
    el.addEventListener("animationend", () => el.remove(), { once: true });
    layer.appendChild(el);
  }

  function spawnHeart() {
    const el = document.createElement("span");
    el.className = "rise rise-heart";
    el.textContent = pick(SYMBOLS);
    el.style.fontSize = `${rand(16, 40).toFixed(0)}px`;
    el.style.color = pick(COLORS);
    launch(el);
  }

  function spawnText() {
    const el = document.createElement("span");
    el.className = "rise rise-text";
    el.textContent = pick(WORDS);
    el.style.fontSize = `${rand(1.3, 2.1).toFixed(2)}rem`;
    launch(el);
  }

  /** Ananya's photo, framed in its own shape (tall, wide or square). */
  function spawnPhoto() {
    loadPhoto(1 + Math.floor(Math.random() * PHOTO_CONFIG.total)).then((meta) => {
      if (!active || meta.missing) return;
      const el = document.createElement("div");
      el.className = "rise rise-photo";
      const ratio = clampRatio(meta.w, meta.h);
      const base = rand(64, 104);
      el.style.width = `${Math.round(ratio > 1 ? base * 1.25 : base)}px`;
      const img = new Image();
      img.src = meta.src;
      img.alt = "";
      img.style.aspectRatio = ratio.toFixed(3);
      el.appendChild(img);
      launch(el);
    });
  }

  function spawnOne() {
    const roll = Math.random();
    if (roll < 0.42) spawnHeart();
    else if (roll < 0.72) spawnText();
    else spawnPhoto();
  }

  function tick() {
    if (!active || document.hidden || !front || !back) return;
    if (front.childElementCount + back.childElementCount >= MAX_ON_SCREEN) return;
    spawnOne();
  }

  function destroy() {
    window.clearInterval(timer);
    window.clearTimeout(startTimer);
    [front, back].forEach((layer) => layer && layer.remove());
    front = back = null;
    active = false;
    sceneId = null;
  }

  function start(id) {
    if (prefersReducedMotion) return;
    if (active && sceneId === id) return;
    destroy();

    const scene = document.getElementById(id);
    if (!scene) return;

    sceneId = id;
    active = true;
    back = makeLayer("back");
    front = makeLayer("front");
    scene.prepend(back, front);

    // Wait for the page fade-in to finish so the layers sit exactly on the screen.
    startTimer = window.setTimeout(() => {
      if (!active) return;
      for (let i = 0; i < 7; i += 1) window.setTimeout(() => { if (active) spawnOne(); }, i * 170);
      timer = window.setInterval(tick, 430);
    }, 850);
  }

  function stop() {
    if (!active) return;
    const layers = [front, back];
    window.clearInterval(timer);
    window.clearTimeout(startTimer);
    active = false;
    front = back = null;
    sceneId = null;
    layers.forEach((layer) => layer && layer.classList.add("fading"));
    window.setTimeout(() => layers.forEach((layer) => layer && layer.remove()), 600);
  }

  return { start, stop };
})();


/* ==========================================================================
   5. PAGES: fade between pages, menu, Back / Next buttons
   ========================================================================== */

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 })
  : null;

/** Fades in cards (reasons, coupons) as they enter the screen. */
function observeReveal() {
  $$(".reveal-card").forEach((card) => {
    if (!revealObserver) {
      card.classList.add("visible");
      return;
    }
    // Re-observe so cards inside a freshly shown page get checked again.
    revealObserver.unobserve(card);
    revealObserver.observe(card);
  });
}

/** Changes page with a soft fade (the veil) so nothing "jumps". */
function goTo(id) {
  if (id === state.scene || state.changingPage) return;

  state.changingPage = true;
  $("#veil").classList.add("on");

  window.setTimeout(() => {
    showScene(id);
    $("#veil").classList.remove("on");
    window.setTimeout(() => { state.changingPage = false; }, 300);
  }, PAGE_FADE_MS);
}

function showScene(id) {
  state.scene = id;

  $$(".scene").forEach((scene) => scene.classList.toggle("active", scene.id === id));
  $$("#menuList button").forEach((btn) => btn.classList.toggle("active", btn.dataset.go === id));
  window.scrollTo({ top: 0, behavior: "instant" });

  // Stop media that belongs to a page we just left.
  if (id !== "voice" && !voice.paused) voice.pause();
  const aarzuVideo = $("#aarzuVideo");
  if (id !== "aarzu" && !aarzuVideo.paused) aarzuVideo.pause();

  if (id === "timeline") window.setTimeout(startTimelineShow, 120);

  if (id === "memoryWall") {
    window.setTimeout(() => startWallView(false), 120);
  } else {
    stopReelTimers();
  }

  // Small style button lives only on the memory page.
  $("#wallStyleDock").hidden = id !== "memoryWall" || !state.unlocked;
  if (id !== "memoryWall") closeStylePanel();

  // Floating hearts / words / photos on the Aarzu page and the Voice-note page.
  if (id === "aarzu" || id === "voice") Rise.start(id); else Rise.stop();

  updateCornerNav();
  requestAnimationFrame(observeReveal);
}

/* ----- Back / Next buttons in the bottom corners ----- */

function updateCornerNav() {
  const index = CHAPTERS.findIndex((chapter) => chapter.id === state.scene);
  const prev = CHAPTERS[index - 1];
  const next = CHAPTERS[index + 1];

  $("#cornerNav").hidden = !state.unlocked || index === -1;
  $("#chapterProgress").style.setProperty("--p", index === -1 ? 0 : (index + 1) / CHAPTERS.length);

  $("#prevBtn").hidden = !prev;
  $("#prevBtn").setAttribute("aria-label", prev ? `Back to ${prev.short}` : "Previous page");

  // On the final question, Next only appears after she says yes.
  const nextHidden = !next || (state.scene === "finale" && !state.answeredYes);
  $("#nextBtn").hidden = nextHidden;
  if (next) $("#nextLabel").textContent = next.short;
}

function setupCornerNav() {
  const step = (delta) => {
    const index = CHAPTERS.findIndex((chapter) => chapter.id === state.scene);
    const target = CHAPTERS[index + delta];
    if (target) goTo(target.id);
  };

  $("#prevBtn").addEventListener("click", () => step(-1));
  $("#nextBtn").addEventListener("click", () => step(1));
}

/* ----- Menu (three lines button) ----- */

function setMenu(open) {
  state.menuOpen = open;
  document.body.classList.toggle("menu-open", open);

  const button = $("#menuBtn");
  const panel = $("#menuPanel");
  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  panel.setAttribute("aria-hidden", String(!open));
  panel.inert = !open;
}

function setupMenu() {
  const list = $("#menuList");

  CHAPTERS.forEach((chapter, index) => {
    const item = document.createElement("li");
    item.style.setProperty("--i", index);
    item.innerHTML = `
      <button type="button" data-go="${chapter.id}">
        <span class="menu-num">${index + 1}</span>
        <span class="menu-text">
          <strong>${chapter.label}</strong>
          <small>${chapter.note}</small>
        </span>
        <span class="menu-heart" aria-hidden="true">♡</span>
      </button>
    `;
    item.querySelector("button").addEventListener("click", () => {
      setMenu(false);
      goTo(chapter.id);
    });
    list.appendChild(item);
  });

  $("#menuBtn").addEventListener("click", () => setMenu(!state.menuOpen));

  // Click on the empty area around the list closes the menu.
  $("#menuPanel").addEventListener("click", (event) => {
    if (event.target.id === "menuPanel" || event.target.classList.contains("menu-inner")) setMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.menuOpen) setMenu(false);
  });
}


/* ==========================================================================
   6. MUSIC
   ========================================================================== */

function setMusicUi(isPlaying) {
  $("#musicToggle").classList.toggle("playing", isPlaying);
  $("#musicIcon").textContent = isPlaying ? "Ⅱ" : "♪";
}

/** Try to play the background song; browsers may block it until a tap. */
function playBgm(blockedMessage) {
  bgm.volume = MUSIC_VOLUME;

  Promise.resolve(bgm.play())
    .then(() => setMusicUi(true))
    .catch(() => {
      setMusicUi(false);
      showToast(blockedMessage);
    });
}

function setTrack(index, autoplay = false) {
  const track = CONFIG.musicTracks[index];
  if (!track) return;

  const shouldPlay = autoplay || !bgm.paused;

  state.trackIndex = index;
  bgm.pause();
  bgm.src = track.src;
  bgm.load();

  updateTrackButtons();
  showToast(`Now playing: ${track.title}`);

  if (shouldPlay) playBgm(`Tap ♪ to play ${track.title}`);
}

function updateTrackButtons() {
  $$("#trackPanel button[data-track]").forEach((btn) => {
    btn.classList.toggle("active", Number(btn.dataset.track) === state.trackIndex);
  });
}

function renderTrackPanel() {
  const panel = $("#trackPanel");
  panel.innerHTML = "";

  CONFIG.musicTracks.forEach((track, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.track = String(index);
    btn.textContent = `${index + 1}. ${track.title}`;
    btn.addEventListener("click", () => {
      setTrack(index, true);
      panel.hidden = true;
    });
    panel.appendChild(btn);
  });

  updateTrackButtons();
}

function setupTrackSelector() {
  const toggle = $("#trackToggle");
  const panel = $("#trackPanel");

  renderTrackPanel();

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    panel.hidden = !panel.hidden;
  });

  // Click anywhere else to close the song list.
  document.addEventListener("click", (event) => {
    if (!panel.hidden && !panel.contains(event.target) && event.target !== toggle) {
      panel.hidden = true;
    }
  });
}

function setupMusicControls() {
  bgm.addEventListener("error", () => {
    setMusicUi(false);
    showToast("That song file could not be loaded. Check the file inside assets/.");
  });

  // Loop through the playlist.
  bgm.addEventListener("ended", () => {
    setTrack((state.trackIndex + 1) % CONFIG.musicTracks.length, true);
  });

  $("#musicToggle").addEventListener("click", () => {
    if (bgm.paused) {
      playBgm("Music is ready. Tap ♪ whenever you want.");
    } else {
      bgm.pause();
      setMusicUi(false);
    }
  });
}


/* ==========================================================================
   7. PIN LOCK
   ========================================================================== */

function setupKeypad() {
  $("#pinHint").textContent = CONFIG.pinHint;

  const keypad = $("#keypad");
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "⌫", "0", "OK"];

  keys.forEach((key) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = key;
    btn.setAttribute(
      "aria-label",
      key === "⌫" ? "Delete" : key === "OK" ? "Submit PIN" : `Number ${key}`
    );
    btn.addEventListener("click", () => handlePin(key));
    keypad.appendChild(btn);
  });

  // Number keys on a computer keyboard work too.
  document.addEventListener("keydown", (event) => {
    if (state.unlocked || state.scene !== "opening") return;
    if (/^[0-9]$/.test(event.key)) handlePin(event.key);
    else if (event.key === "Backspace") handlePin("⌫");
    else if (event.key === "Enter") handlePin("OK");
  });
}

function updatePinDots() {
  $$("#pinDots i").forEach((dot, index) => {
    dot.classList.toggle("filled", index < state.pin.length);
  });
}

function handlePin(key) {
  if (state.unlocked) return;

  // The first tap is a user gesture, so browsers allow music to start now.
  if (!state.musicRequested) {
    state.musicRequested = true;
    playBgm("Music is ready. Tap ♪ whenever you want.");
  }

  if (key === "⌫") {
    state.pin = state.pin.slice(0, -1);
  } else if (key === "OK") {
    checkPin();
    return;
  } else if (state.pin.length < CONFIG.pin.length) {
    state.pin += key;
  }

  updatePinDots();
  if (state.pin.length === CONFIG.pin.length) checkPin();
}

function checkPin() {
  if (state.pin === CONFIG.pin) {
    state.unlocked = true;
    burst(40);
    $("#menuBtn").hidden = false;
    $("#pinHint").textContent = "Welcome to your little memory box ♡";
    window.setTimeout(() => goTo("letter"), 650);
    return;
  }

  if (state.pin.length === CONFIG.pin.length) {
    $("#pinHint").textContent = CONFIG.wrongPin;
    state.pin = "";
    updatePinDots();
    shakePinDots();
  }
}

/** Wrong PIN: the dots shake and the phone gives a tiny buzz. */
function shakePinDots() {
  const dots = $("#pinDots");
  dots.classList.remove("shake");
  void dots.offsetWidth;
  dots.classList.add("shake");
  if (navigator.vibrate) navigator.vibrate(120);
}


/* ==========================================================================
   8. LETTER: envelope opens -> letter rises out -> text is written slowly
   ========================================================================== */

function setupLetter() {
  $("#envelope").addEventListener("click", openLetter);
  $("#skipLetterBtn").addEventListener("click", revealLetter);
}

function openLetter() {
  const stage = $("#letterStage");
  if (stage.classList.contains("is-opening")) return;

  // 1) seal breaks, flap opens, the letter peeks out
  stage.classList.add("is-opening");
  burst(14);

  // 2) envelope drops away, the paper rises
  window.setTimeout(() => {
    stage.classList.add("is-open");
    burst(22);
  }, 1300);

  // 3) the writing starts (small Skip button appears in the corner)
  window.setTimeout(() => {
    if (state.letterDone) return;
    $("#skipLetterBtn").hidden = false;
    typeLetter();
  }, 2500);
}

/** Turns plain letter text into paragraphs (blank line = new paragraph). */
function letterHtml(fullText) {
  return fullText
    .split("\n\n")
    .map((paragraph) => {
      const className = paragraph.startsWith("- Tumhara") ? ' class="signature"' : "";
      return `<p${className}>${paragraph.replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}

/** Writes one letter at a time, pausing a little at commas and full stops. */
function typeLetter() {
  if (state.letterTimer || state.letterDone) return;

  const target = $("#letterText");
  const fullText = CONFIG.letter.join("\n\n");
  let shown = 0;

  const writeNext = () => {
    shown += 1;
    target.innerHTML = letterHtml(fullText.slice(0, shown));
    if (target.lastElementChild) {
      target.lastElementChild.insertAdjacentHTML("beforeend", '<span class="caret"></span>');
    }
    keepCaretInView();

    if (shown >= fullText.length) {
      revealLetter();
      return;
    }

    const char = fullText[shown - 1];
    let delay = 26;
    if (".!?".includes(char)) delay = 260;
    else if (char === "," || char === "-") delay = 130;
    else if (char === "\n") delay = 220;

    state.letterTimer = window.setTimeout(writeNext, delay);
  };

  writeNext();
}

/** On small screens the letter is taller than the screen, so follow the pen. */
function keepCaretInView() {
  const caret = $("#letterText .caret");
  if (!caret) return;

  const bottom = caret.getBoundingClientRect().bottom;
  const limit = window.innerHeight - 150;
  if (bottom > limit) window.scrollBy({ top: bottom - limit + 40, behavior: "smooth" });
}

function revealLetter() {
  window.clearTimeout(state.letterTimer);
  state.letterTimer = null;
  state.letterDone = true;

  $("#letterText").innerHTML = letterHtml(CONFIG.letter.join("\n\n"));
  $("#skipLetterBtn").hidden = true;
}


/* ==========================================================================
   9\. BIRTHDAY WISHES
   ========================================================================== */

function timelineNodeHtml([month, date, title, text], index) {
  return `
    <button class="love-heart" type="button" aria-expanded="false" aria-label="Open chapter ${index + 1}">
      <span>♡</span>
    </button>
    <div class="love-date">${date}</div>
    <div class="love-card">
      <span class="love-chapter">Chapter ${index + 1}</span>
      <span class="love-tap" aria-hidden="true">tap to open ✦</span>
      <div class="love-more">
        <div class="love-more-inner">
          <h3>${month}</h3>
          <strong>${title}</strong>
          <p>${text}</p>
        </div>
      </div>
    </div>
  `;
}

/** Finds the height of the curve at a given x, so each heart sits exactly ON the line. */
function makeCurveSampler() {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.style.cssText = "position:absolute;visibility:hidden;pointer-events:none";
  const path = document.createElementNS(ns, "path");
  path.setAttribute("d", TIMELINE_CURVE);
  svg.appendChild(path);
  document.body.appendChild(svg);

  const total = path.getTotalLength();
  const yAtX = (x) => {
    let lo = 0;
    let hi = total;
    for (let i = 0; i < 30; i += 1) {
      const mid = (lo + hi) / 2;
      if (path.getPointAtLength(mid).x < x) lo = mid; else hi = mid;
    }
    return path.getPointAtLength((lo + hi) / 2).y;
  };

  return { yAtX, done: () => svg.remove() };
}

// Must match the track in style.css (top 200px, height 250px, viewBox height 260)
const TL_TRACK_TOP = 200;
const TL_TRACK_H = 250;

function setupTimeline() {
  const list = $("#timelineList");

  list.innerHTML = `
    <div class="love-timeline" aria-label="Our relationship timeline">
      <div class="love-timeline-track" aria-hidden="true">
        <svg class="love-timeline-svg" viewBox="0 0 1000 260" preserveAspectRatio="none">
          <path class="love-path-shadow" d="${TIMELINE_CURVE}" />
          <path class="love-path" id="lovePath" d="${TIMELINE_CURVE}" />
        </svg>
      </div>
      <div class="love-timeline-pulse" aria-hidden="true"></div>
    </div>
  `;

  const wrap = list.querySelector(".love-timeline");
  const sampler = makeCurveSampler();
  const last = TIMELINE.length - 1;

  const closeAll = () => {
    wrap.querySelectorAll(".love-node.is-selected").forEach((el) => {
      el.classList.remove("is-selected");
      el.querySelector(".love-heart").setAttribute("aria-expanded", "false");
    });
  };

  TIMELINE.forEach((entry, index) => {
    const fraction = 0.07 + (index / last) * 0.86;   // 7% -> 93% across the line
    const yPx = TL_TRACK_TOP + sampler.yAtX(fraction * 1000) * (TL_TRACK_H / 260);

    const node = document.createElement("article");
    node.className = `love-node ${index % 2 ? "below" : "above"}`; // one up, one down
    node.style.setProperty("--node-x", (fraction * 100).toFixed(2));
    node.style.setProperty("--node-y", yPx.toFixed(1));
    node.innerHTML = timelineNodeHtml(entry, index);

    // Tap the heart (or the little card) to open / close the description.
    const toggle = () => {
      const willOpen = !node.classList.contains("is-selected");
      closeAll();
      if (!willOpen) return;
      node.classList.add("is-selected");
      const heart = node.querySelector(".love-heart");
      heart.setAttribute("aria-expanded", "true");
      const rect = heart.getBoundingClientRect();
      Sky.sparkle(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);
    };
    node.querySelector(".love-heart").addEventListener("click", toggle);
    node.querySelector(".love-card").addEventListener("click", toggle);

    wrap.appendChild(node);
  });

  sampler.done();

  // The dotted line is "drawn" by animating its dash offset.
  const path = list.querySelector("#lovePath");
  const length = path.getTotalLength ? path.getTotalLength() : 1400;
  path.style.setProperty("--path-length", length);
}

function startTimelineShow() {
  const timeline = $("#timelineList");

  // Restart the line animation.
  timeline.classList.remove("timeline-live");
  void timeline.offsetWidth;
  timeline.classList.add("timeline-live");

  const nodes = $$("#timelineList .love-node");
  nodes.forEach((node) => node.classList.remove("visible", "is-selected"));

  nodes.forEach((node, index) => {
    window.setTimeout(() => node.classList.add("visible"), 160 + index * 260);
  });
}


/* ==========================================================================
   10. MEMORY WALL AND LIGHTBOX
   ========================================================================== */

function setupMemoryWall() {
  const grid = $("#memoryGrid");
  grid.innerHTML = "";

  for (let i = 1; i <= PHOTO_CONFIG.total; i += 1) {
    const item = document.createElement("button");
    item.className = "memory-item";
    item.type = "button";
    item.setAttribute("aria-label", `Open memory photo ${i}`);
    item.innerHTML = `
      <img src="${photoPath(i)}" loading="eager" decoding="async" alt="Memory photo ${i}">
      <span class="memory-label">#${i}</span>
    `;

    // If a photo is missing, show a small placeholder instead of a broken icon.
    item.querySelector("img").addEventListener("error", () => {
      item.innerHTML = `
        <div class="placeholder">#${i}<br>photo pending</div>
        <span class="memory-label">#${i}</span>
      `;
    }, { once: true });

    item.addEventListener("click", () => openLightbox(i));
    grid.appendChild(item);
  }

  $("#replayWallBtn").addEventListener("click", () => {
    startWallView(true);
    if (state.wallView === "wall") window.scrollTo({ top: 0, behavior: "smooth" });
  });

  setupWallControls();
  setupMemoryReel();
}

/** Photos rush in one by one; each gets its own delay and starting offset.
 *  Pace is controlled by the current speed setting, look by the current effect. */
function startMemoryShow() {
  const grid = $("#memoryGrid");
  const items = $$("#memoryGrid .memory-item");
  const speed = WALL_SPEED[state.wallSpeed];

  grid.dataset.effect = state.wallEffect;
  grid.classList.remove("live");
  items.forEach((item) => item.classList.remove("visible"));
  void grid.offsetWidth; // commit the reset before replaying

  grid.classList.add("live");

  items.forEach((item, index) => {
    const delay = Math.min(index * speed.stagger, speed.entranceCap);
    item.style.setProperty("--delay", `${delay}ms`);
    item.style.setProperty("--x-start", `${((index % 5) - 2) * 30}px`);
    item.style.setProperty("--y-start", `${18 + (index % 4) * 12}px`);

    window.setTimeout(() => item.classList.add("visible"), 80 + delay);
  });
}

const WALL_EFFECTS = ["cascade", "flip", "zoom", "slide", "rain", "twirl", "blur", "tumble"];
const REEL_EFFECTS = ["upload", "fade", "slide", "zoom", "flip", "drift", "drop", "swing", "spin"];
const WALL_VIEWS = {
  wall: "#memoryGrid",
  reel: "#memoryReel",
  stack: "#memoryStack",
  cover: "#memoryCover",
  scatter: "#memoryScatter",
  film: "#memoryFilm"
};
const SLIDE_VIEWS = ["reel", "stack", "cover", "scatter"]; // views driven by Prev / Play / Next
const FILM_SECONDS = { slow: 420, normal: 260, fast: 150 };

const wrapIndex = (i) => ((i - 1 + PHOTO_CONFIG.total * 10) % PHOTO_CONFIG.total) + 1;
const clampRatio = (w, h) => Math.min(2.4, Math.max(0.42, w / h));

const photoCache = new Map();
/** Loads a photo once and remembers its real size (so frames can match its shape). */
function loadPhoto(index) {
  if (photoCache.has(index)) return photoCache.get(index);
  const promise = new Promise((resolve) => {
    const im = new Image();
    im.onload = () => resolve({ index, w: im.naturalWidth || 4, h: im.naturalHeight || 5, src: im.src });
    im.onerror = () => resolve({ index, w: 4, h: 5, src: im.src, missing: true });
    im.src = encodeURI(photoPath(index));
  });
  photoCache.set(index, promise);
  return promise;
}

function makePolaroid(meta) {
  const el = document.createElement("div");
  el.className = "polaroid";
  const img = new Image();
  img.src = meta.src;
  img.alt = `Memory photo ${meta.index}`;
  img.draggable = false;
  el.appendChild(img);
  return el;
}

function closeStylePanel() {
  $("#wallStylePanel").hidden = true;
  $("#wallStyleToggle").setAttribute("aria-expanded", "false");
}

/** Wall animations only in Wall view, reel animations only in Reel view. */
function syncStyleGroups() {
  $("#wallEffectGroup").hidden = state.wallView !== "wall";
  $("#reelEffectGroup").hidden = state.wallView !== "reel";
}

function syncViews() {
  Object.entries(WALL_VIEWS).forEach(([view, selector]) => {
    $(selector).hidden = view !== state.wallView;
  });
  $("#slideNav").hidden = !SLIDE_VIEWS.includes(state.wallView);
  $$("#wallViewToggle .wall-toggle-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.view === state.wallView);
  });
  syncStyleGroups();
}

/** Small ✦ button (right side, above Next) that opens the Style panel. */
function setupWallControls() {
  const toggle = $("#wallStyleToggle");
  const panel = $("#wallStylePanel");

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    toggle.setAttribute("aria-expanded", String(willOpen));
  });

  document.addEventListener("click", (event) => {
    if (!panel.hidden && !panel.contains(event.target) && !toggle.contains(event.target)) closeStylePanel();
  });

  const bind = (selector, key, handler) => {
    $(selector).addEventListener("click", (event) => {
      const btn = event.target.closest(".wall-toggle-btn");
      if (btn) handler(btn.dataset[key]);
    });
  };

  bind("#wallViewToggle", "view", setWallView);
  bind("#wallSpeedToggle", "speed", setWallSpeed);
  bind("#wallEffectToggle", "effect", setWallEffect);
  bind("#reelEffectToggle", "reel", setReelEffect);

  syncViews();
}

/** Starts whichever view is selected (wall, reel, stack, cover, scatter or film). */
function startWallView(fromStart) {
  stopReelTimers();
  clearSlideViews();
  syncViews();
  if (fromStart) state.reelIndex = 1;

  const view = state.wallView;
  if (view === "wall") startMemoryShow();
  else if (view === "film") startFilm();
  else showSlide(state.reelIndex || 1, 1);
}

function setWallView(view) {
  if (!WALL_VIEWS[view]) return;
  state.wallView = view;
  state.reelPlaying = true;
  $("#reelPlayBtn").textContent = "❚❚";
  startWallView(false);
}

function setWallSpeed(speed) {
  if (!WALL_SPEED[speed]) return;
  state.wallSpeed = speed;

  $$("#wallSpeedToggle .wall-toggle-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.speed === speed);
  });

  if (state.wallView === "wall") startMemoryShow();
  else if (state.wallView === "film") applyFilmSpeed();
  else showSlide(state.reelIndex, 1);
}

function setWallEffect(effect) {
  if (!WALL_EFFECTS.includes(effect)) return;
  state.wallEffect = effect;

  $$("#wallEffectToggle .wall-toggle-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.effect === effect);
  });

  if (state.wallView === "wall") startMemoryShow();
}

function setReelEffect(effect) {
  if (!REEL_EFFECTS.includes(effect)) return;
  state.reelEffect = effect;

  $$("#reelEffectToggle .wall-toggle-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.reel === effect);
  });

  $("#reelStage").dataset.effect = effect;
  if (state.wallView === "reel") showSlide(state.reelIndex, 1);
}


/* ---- Shared "one photo at a time" controls (Reel / Stack / Cover / Scatter) ---- */

function ratioLabel(ratio) {
  const known = [[9 / 16, "9:16"], [3 / 4, "3:4"], [4 / 5, "4:5"], [1, "1:1"], [4 / 3, "4:3"], [3 / 2, "3:2"], [16 / 9, "16:9"]];
  let best = null;
  known.forEach(([value, label]) => {
    const off = Math.abs(ratio - value) / value;
    if (off < 0.06 && (!best || off < best.off)) best = { off, label };
  });
  return best ? best.label : "";
}

function updateReelLabel() {
  const shape = state.reelShape ? ` · ${state.reelShape}` : "";
  $("#reelIndexLabel").textContent = `${state.reelIndex} / ${PHOTO_CONFIG.total}${shape}`;
  $("#slideCounter").textContent = `${state.reelIndex} / ${PHOTO_CONFIG.total}`;
}

/** Go to a photo in the current view. dir = 1 (forward) or -1 (back). */
function showSlide(index, dir = 1) {
  const target = wrapIndex(index);
  const view = state.wallView;

  if (view === "reel") {
    goToReelSlide(target);
    return;
  }

  stopReelTimers();
  state.reelIndex = target;
  updateReelLabel();

  if (view === "stack") renderStack(target, dir);
  else if (view === "cover") renderCover(target, dir);
  else if (view === "scatter") renderScatter(target, dir);

  if (state.reelPlaying) scheduleNextReelSlide();
}

function setupMemoryReel() {
  $("#reelStage").dataset.effect = state.reelEffect;
  updateReelLabel();

  $("#reelImg").addEventListener("click", () => openLightbox(state.reelIndex));

  $("#reelPrevBtn").addEventListener("click", () => showSlide(state.reelIndex - 1, -1));
  $("#reelNextBtn").addEventListener("click", () => showSlide(state.reelIndex + 1, 1));

  $("#reelPlayBtn").addEventListener("click", () => {
    state.reelPlaying = !state.reelPlaying;
    $("#reelPlayBtn").textContent = state.reelPlaying ? "❚❚" : "►";

    if (state.reelPlaying) {
      scheduleNextReelSlide();
    } else {
      window.clearTimeout(state.reelProgressTimer); // stop "go to next", not the current reveal
      state.reelProgressTimer = null;
    }
  });

  // Swipe left / right on a phone.
  ["#reelStage", "#stackStage", "#coverStage", "#scatterStage"].forEach((selector) => {
    const el = $(selector);
    let startX = 0;
    el.addEventListener("touchstart", (e) => { startX = e.changedTouches[0].clientX; }, { passive: true });
    el.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 50) return;
      const dir = dx < 0 ? 1 : -1;
      showSlide(state.reelIndex + dir, dir);
    }, { passive: true });
  });

  setupSlideViews();
}

function stopReelTimers() {
  window.clearTimeout(state.reelTimer);
  window.clearTimeout(state.reelProgressTimer);
  state.reelTimer = null;
  state.reelProgressTimer = null;
}

function scheduleNextReelSlide() {
  window.clearTimeout(state.reelProgressTimer);
  const speed = WALL_SPEED[state.wallSpeed];
  const extra = state.wallView === "reel" ? 0 : 650; // let the other views finish their move
  state.reelProgressTimer = window.setTimeout(() => {
    if (!state.reelPlaying || !SLIDE_VIEWS.includes(state.wallView)) return;
    showSlide(state.reelIndex + 1, 1);
  }, speed.holdMs + extra);
}


/* ---- REEL: the whole frame animates and takes the SHAPE of each photo ---- */

function startReelProgress(ms) {
  const bar = $("#reelProgressBar");
  const wrap = bar.parentElement;
  wrap.classList.remove("animating");
  bar.style.width = "0%";
  void bar.offsetWidth;
  wrap.classList.add("animating");
  bar.style.transitionDuration = `${ms}ms`;
  bar.style.width = "100%";
}

function setReelFrame(width, height) {
  const ratio = clampRatio(width, height);
  $("#reelPhotoWrap").style.aspectRatio = ratio.toFixed(4);
  $("#reelStage").style.setProperty("--reel-ratio", ratio.toFixed(4));
  state.reelShape = ratioLabel(ratio);
  updateReelLabel();
}

function playFrameEnter() {
  const stage = $("#reelStage");
  stage.classList.remove("enter");
  void stage.offsetWidth;
  stage.classList.add("enter");
}

function goToReelSlide(index) {
  stopReelTimers();

  state.reelIndex = wrapIndex(index);
  const token = ++state.reelToken;
  const speed = WALL_SPEED[state.wallSpeed];
  const isUpload = state.reelEffect === "upload";
  const minWait = isUpload ? speed.uploadMs : 180;

  const img = $("#reelImg");
  const uploading = $("#reelUploading");

  $("#reelUploadingNum").textContent = state.reelIndex;
  updateReelLabel();

  uploading.classList.toggle("show", isUpload);
  if (isUpload) startReelProgress(speed.uploadMs);

  let meta = null;
  let waited = false;

  const reveal = () => {
    if (token !== state.reelToken || !meta || !waited) return;
    uploading.classList.remove("show");
    setReelFrame(meta.w, meta.h);        // frame takes the photo's shape...
    img.src = meta.src;
    img.alt = `Memory photo ${state.reelIndex}`;
    playFrameEnter();                    // ...and the whole frame animates in
    if (!isUpload) startReelProgress(speed.holdMs);
    if (state.reelPlaying) scheduleNextReelSlide();
  };

  loadPhoto(state.reelIndex).then((m) => { meta = m; reveal(); });
  state.reelTimer = window.setTimeout(() => { waited = true; reveal(); }, minWait);

  loadPhoto(wrapIndex(state.reelIndex + 1)); // warm up the next one
}


/* ---- STACK: a pile of photos, the top one flies away ---- */

const stackCards = new Map();

async function renderStack(index, dir) {
  const stage = $("#stackStage");
  const token = ++state.stackToken;
  const want = [0, 1, 2, 3].map((d) => wrapIndex(index + d));
  const metas = await Promise.all(want.map(loadPhoto));
  if (token !== state.stackToken) return;

  const W = stage.clientWidth;
  const H = stage.clientHeight;
  const prevTop = state.stackTop;
  state.stackTop = index;

  // Cards that are no longer part of the pile: the old top card flies away, others just vanish.
  [...stackCards.keys()].forEach((idx) => {
    if (want.includes(idx)) return;
    const el = stackCards.get(idx);
    stackCards.delete(idx);
    if (dir > 0 && idx === prevTop) {
      const side = idx % 2 ? 1 : -1;
      el.style.zIndex = 20;
      el.style.opacity = "0";
      el.style.transform = `translate(-50%, -50%) translate(${side * W * 0.75}px, -40px) rotate(${side * 28}deg)`;
      window.setTimeout(() => el.remove(), 750);
    } else {
      el.remove();
    }
  });

  const pose = (depth, rot) =>
    `translate(-50%, -50%) translateY(${depth * 18}px) scale(${1 - depth * 0.055}) rotate(${rot}deg)`;

  want.forEach((idx, depth) => {
    const meta = metas[depth];
    const ratio = clampRatio(meta.w, meta.h);
    let el = stackCards.get(idx);
    const isNew = !el;

    if (isNew) {
      el = makePolaroid(meta);
      el.classList.add("stack-card");
      stage.appendChild(el);
      stackCards.set(idx, el);
    }

    el.style.width = `${Math.round(Math.min(W * 0.9, (H * 0.86 - 18) * ratio))}px`;
    el.dataset.i = idx;

    const rot = depth === 0 ? ((idx * 13) % 5 - 2) * 0.7 : ((idx * 37) % 11 - 5) * 1.1;

    if (isNew) {
      el.style.transition = "none";
      if (depth === 0 && dir < 0) {           // going back: the photo flies in
        const side = idx % 2 ? -1 : 1;
        el.style.transform = `translate(-50%, -50%) translate(${side * W * 0.75}px, -40px) rotate(${side * -28}deg)`;
      } else {
        el.style.transform = pose(depth + 1, rot);
      }
      el.style.opacity = "0";
      void el.offsetWidth;
      el.style.transition = "";
    }

    el.style.zIndex = 10 - depth;
    el.style.transform = pose(depth, rot);
    el.style.opacity = depth === 3 ? ".55" : "1";
  });
}


/* ---- COVER: 3D carousel ---- */

const coverCards = new Map();

async function renderCover(index) {
  const stage = $("#coverStage");
  const token = ++state.coverToken;
  const offsets = [-3, -2, -1, 0, 1, 2, 3];
  const want = offsets.map((o) => wrapIndex(index + o));
  const metas = await Promise.all(want.map(loadPhoto));
  if (token !== state.coverToken) return;

  const W = stage.clientWidth;
  const H = stage.clientHeight;
  const cardH = Math.min(H * 0.8, 500);
  const widthOf = (m) => Math.min(cardH * clampRatio(m.w, m.h), W * 0.6);
  const centerW = widthOf(metas[3]);
  const pitch = Math.max(56, Math.min(W * 0.15, 170));

  [...coverCards.keys()].forEach((idx) => {
    if (want.includes(idx)) return;
    const el = coverCards.get(idx);
    coverCards.delete(idx);
    el.style.opacity = "0";
    window.setTimeout(() => el.remove(), 600);
  });

  const pose = (o) => {
    const sign = Math.sign(o);
    const abs = Math.abs(o);
    const x = o === 0 ? 0 : sign * (centerW * 0.3 + abs * pitch);
    const rotateY = o === 0 ? 0 : -sign * 50;
    return `translate(-50%, -50%) translateX(${x}px) translateZ(${-abs * 110}px) rotateY(${rotateY}deg) scale(${1 - abs * 0.05})`;
  };

  offsets.forEach((o, k) => {
    const idx = want[k];
    const meta = metas[k];
    let el = coverCards.get(idx);
    const isNew = !el;

    if (isNew) {
      el = makePolaroid(meta);
      el.classList.add("cover-card");
      stage.appendChild(el);
      coverCards.set(idx, el);
    }

    el.style.width = `${Math.round(widthOf(meta))}px`;
    el.dataset.i = idx;
    el.dataset.o = o;

    if (isNew) {
      el.style.transition = "none";
      el.style.transform = pose(o === 0 ? 0 : Math.sign(o) * 4);
      el.style.opacity = "0";
      void el.offsetWidth;
      el.style.transition = "";
    }

    const abs = Math.abs(o);
    el.style.zIndex = 10 - abs;
    el.style.transform = pose(o);
    el.style.opacity = abs >= 3 ? ".45" : abs === 2 ? ".8" : "1";
    el.style.filter = `brightness(${1 - abs * 0.17})`;
  });
}


/* ---- SCATTER: photos get dropped on a table one by one ---- */

let scatterZ = 1;

function removeScatterCard(el) {
  el.classList.add("leaving");
  window.setTimeout(() => el.remove(), 550);
}

async function renderScatter(index, dir) {
  const stage = $("#scatterStage");
  const token = ++state.scatterToken;
  const meta = await loadPhoto(index);
  if (token !== state.scatterToken) return;

  const cards = state.scatterCards;

  if (dir < 0 && cards.length > 1) {          // going back: lift the last photo off the table
    removeScatterCard(cards.pop());
    return;
  }
  if (dir > 0 && index === 1) cards.splice(0).forEach(removeScatterCard); // new round

  const W = stage.clientWidth;
  const H = stage.clientHeight;
  const ratio = clampRatio(meta.w, meta.h);
  const w = Math.min(W * 0.4, (H * 0.58 - 18) * ratio);
  const h = w / ratio + 18;
  const rand = (min, max) => min + Math.random() * (max - min);

  const el = makePolaroid(meta);
  el.classList.add("scatter-card");
  el.style.width = `${Math.round(w)}px`;
  el.style.left = `${rand(w / 2 + 8, Math.max(w / 2 + 9, W - w / 2 - 8)).toFixed(0)}px`;
  el.style.top = `${rand(h / 2 + 8, Math.max(h / 2 + 9, H - h / 2 - 8)).toFixed(0)}px`;
  el.style.setProperty("--rot", `${rand(-15, 15).toFixed(1)}deg`);
  el.style.zIndex = ++scatterZ;
  el.dataset.i = index;
  stage.appendChild(el);
  cards.push(el);

  while (cards.length > 14) removeScatterCard(cards.shift());
}


/* ---- Clicks on the stack / cover / scatter cards ---- */

function setupSlideViews() {
  $("#stackStage").addEventListener("click", (event) => {
    const card = event.target.closest(".stack-card");
    if (card && Number(card.dataset.i) === state.reelIndex) openLightbox(state.reelIndex);
  });

  $("#coverStage").addEventListener("click", (event) => {
    const card = event.target.closest(".cover-card");
    if (!card) return;
    const idx = Number(card.dataset.i);
    if (idx === state.reelIndex) openLightbox(idx);
    else showSlide(idx, Number(card.dataset.o) > 0 ? 1 : -1);
  });

  $("#scatterStage").addEventListener("click", (event) => {
    const card = event.target.closest(".scatter-card");
    if (card) openLightbox(Number(card.dataset.i));
  });

  $("#memoryFilm").addEventListener("click", (event) => {
    const item = event.target.closest(".film-item");
    if (item) openLightbox(Number(item.dataset.i));
  });
}

function clearSlideViews() {
  state.stackToken += 1;
  state.coverToken += 1;
  state.scatterToken += 1;
  state.stackTop = 0;
  stackCards.clear();
  coverCards.clear();
  state.scatterCards = [];
  ["#stackStage", "#coverStage", "#scatterStage"].forEach((selector) => { $(selector).innerHTML = ""; });
}


/* ---- FILM: two endless film strips moving in opposite directions ---- */

function applyFilmSpeed() {
  $("#memoryFilm").style.setProperty("--film-dur", `${FILM_SECONDS[state.wallSpeed]}s`);
}

function startFilm() {
  const box = $("#memoryFilm");
  applyFilmSpeed();
  if (box.dataset.state === "built" || box.dataset.state === "building") return;

  box.dataset.state = "building";
  box.innerHTML = '<p class="film-loading">Loading the film…</p>';

  const all = Array.from({ length: PHOTO_CONFIG.total }, (_, i) => i + 1);
  Promise.all(all.map(loadPhoto)).then((metas) => {
    const row = (list, reverse) => {
      const items = list.map((m) => `
        <button class="film-item" type="button" data-i="${m.index}" style="aspect-ratio:${clampRatio(m.w, m.h).toFixed(3)}" aria-label="Open memory photo ${m.index}">
          <img src="${m.src}" alt="Memory photo ${m.index}" draggable="false">
        </button>`).join("");
      // The list is written twice so the loop never shows a gap.
      return `<div class="film-row${reverse ? " rev" : ""}"><div class="film-track">${items}${items}</div></div>`;
    };

    const half = Math.ceil(metas.length / 2);
    box.innerHTML = row(metas.slice(0, half), false) + row(metas.slice(half), true);
    box.dataset.state = "built";
  });
}


function openLightbox(index) {
  state.lightboxIndex = index;
  $("#lightbox").hidden = false;
  renderLightbox();
}

function closeLightbox() {
  $("#lightbox").hidden = true;
  $("#lightboxImg").removeAttribute("src");
}

function renderLightbox() {
  const img = $("#lightboxImg");
  img.src = photoPath(state.lightboxIndex);
  img.alt = `Memory photo ${state.lightboxIndex}`;
  $("#lightboxCaption").textContent = `Memory ${state.lightboxIndex} of ${PHOTO_CONFIG.total}`;

  // Replay the small "pop" each time the photo changes.
  img.classList.remove("pop");
  void img.offsetWidth;
  img.classList.add("pop");
}

/** Moves to the next/previous photo and wraps around at the ends. */
function moveLightbox(delta) {
  const total = PHOTO_CONFIG.total;
  state.lightboxIndex = ((state.lightboxIndex - 1 + delta + total) % total) + 1;
  renderLightbox();
}

function setupLightbox() {
  const box = $("#lightbox");

  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxPrev").addEventListener("click", () => moveLightbox(-1));
  $("#lightboxNext").addEventListener("click", () => moveLightbox(1));

  // Click on the dark background to close.
  box.addEventListener("click", (event) => {
    if (event.target.id === "lightbox") closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (box.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  });

  // Swipe left / right on a phone.
  let touchStartX = 0;
  box.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  box.addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 50) moveLightbox(distance < 0 ? 1 : -1);
  }, { passive: true });
}


/* ==========================================================================
   11. REASONS AND COUPONS
   ========================================================================== */

function setupCards() {
  const reasonGrid = $("#reasonGrid");
  CONFIG.reasons.forEach(([title, text], index) => {
    const card = document.createElement("article");
    card.className = "reveal-card";
    card.style.transitionDelay = `${(index % 3) * 80}ms`;
    card.innerHTML = `
      <span class="reason-no" aria-hidden="true">${index + 1}</span>
      <strong>${title}</strong>
      <p>${text}</p>
    `;
    reasonGrid.appendChild(card);
  });

  const couponGrid = $("#couponGrid");
  CONFIG.coupons.forEach(([title, text, category, randomUnit]) => {
    const coupon = document.createElement("button");
    coupon.type = "button";
    coupon.className = "reveal-card coupon";
    coupon.innerHTML = `
      <small>${category}</small>
      <strong>${title}</strong>
      <p>${text}</p>
      <span class="coupon-code" aria-hidden="true"></span>
    `;
    const codeEl = coupon.querySelector(".coupon-code");

    coupon.addEventListener("click", (event) => {
      const redeeming = !coupon.classList.contains("stamped");
      coupon.classList.toggle("stamped");

      if (redeeming) {
        const extra = randomUnit ? ` · ${Math.floor(Math.random() * 8) + 2} ${randomUnit}` : "";
        codeEl.textContent = `${randomCouponCode()}${extra}`;
        Sky.sparkle(event.clientX, event.clientY, 10);
      }
    });

    couponGrid.appendChild(coupon);
  });
}


/* ==========================================================================
   12. FINAL QUESTION
   ========================================================================== */

function setupFinale() {
  const yesBtn = $("#yesBtn");
  const maybeBtn = $("#maybeBtn");
  const maybeTexts = ["Pakka? 😭", "Birthday surprise dikhaun? 🥺", "Bas ek click aur 🎂"];

  // Every "Sochne do" tap changes the text and makes the Yes button a bit bigger.
  maybeBtn.addEventListener("click", () => {
    state.maybeClicks += 1;
    yesBtn.style.setProperty("--yes-scale", (1 + Math.min(state.maybeClicks, 4) * 0.12).toFixed(2));

    if (state.maybeClicks <= maybeTexts.length) {
      maybeBtn.textContent = maybeTexts[state.maybeClicks - 1];
    } else {
      maybeBtn.classList.add("gone");
    }
  });

  yesBtn.addEventListener("click", () => {
    state.answeredYes = true;
    $("#finalQuestion").hidden = true;
    $("#finalReveal").hidden = false;
    burst(60);
    updateCornerNav(); // the Next button (Voice note) appears now
  });
}


/* ==========================================================================
   13. VIDEO + VOICE NOTE
   ========================================================================== */

/** The Aarzu video has its own sound, so the background music pauses while it plays. */
function setupVideo() {
  const video = $("#aarzuVideo");

  video.addEventListener("play", () => {
    if (bgm.paused) return;
    bgm.pause();
    setMusicUi(false);
    state.resumeMusicAfterVideo = true;
  });

  const resume = () => {
    if (!state.resumeMusicAfterVideo) return;
    state.resumeMusicAfterVideo = false;
    playBgm("Tap ♪ to bring the music back.");
  };

  video.addEventListener("pause", resume);
  video.addEventListener("ended", resume);
}

function setupVoiceNote() {
  const card = $("#voiceCard");

  voice.addEventListener("error", () => {
    $("#voiceStatus").textContent =
      "Voice note coming soon — this space is saved for your birthday message. 🎙️❤️";
  });

  // Lower the music while the voice note plays.
  voice.addEventListener("play", () => {
    card.classList.add("is-playing");
    if (!bgm.paused) bgm.volume = MUSIC_VOLUME_DUCKED;
  });

  voice.addEventListener("pause", () => {
    card.classList.remove("is-playing");
    if (!bgm.paused) bgm.volume = MUSIC_VOLUME;
  });

  voice.addEventListener("ended", () => {
    card.classList.remove("is-playing");
    if (!bgm.paused) bgm.volume = MUSIC_VOLUME;
    $("#voiceAfter").hidden = false;
    burst(60);
  });
}


/* ==========================================================================
   14. OPENING DETAILS (hero photo, changing nickname)
   ========================================================================== */

function setupHero() {
  const hero = $("#heroImage");
  hero.src = CONFIG.hero;
  hero.addEventListener("error", () => hero.classList.add("is-missing"), { once: true });
}

/** "Babbyy" -> "Meri jaan" -> "Princess" ... */
function setupNicknames() {
  const label = $("#nickname");
  const names = CONFIG.nicknames;
  if (!label || names.length < 2) return;

  let index = 0;
  label.textContent = names[0];
  if (prefersReducedMotion) return;

  window.setInterval(() => {
    label.classList.add("swap");
    window.setTimeout(() => {
      index = (index + 1) % names.length;
      label.textContent = names[index];
      label.classList.remove("swap");
    }, 350);
  }, 2600);
}


/* ==========================================================================
   15. START
   ========================================================================== */

function init() {
  bgm.src = CONFIG.music;
  if (CONFIG.voiceNote) voice.src = CONFIG.voiceNote;

  Sky.init();

  setupHero();
  setupNicknames();
  setupKeypad();
  setupMenu();
  setupCornerNav();
  setupLetter();
  setupTimeline();
  setupMemoryWall();
  setupCards();
  setupFinale();
  setupMusicControls();
  setupVideo();
  setupVoiceNote();
  setupTrackSelector();
  setupLightbox();
  observeReveal();
}

document.addEventListener("DOMContentLoaded", init);
