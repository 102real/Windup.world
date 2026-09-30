(() => {
  "use strict";

  /* ─────────── CONFIG: 도메인/계정 확정되면 여기만 바꾸면 됨 ─────────── */
  const CONFIG = {
    email: "hello@bitpickgames.com",
    socials: [
      { label: "X", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Steam", href: "#" },
      { label: "itch.io", href: "#" },
    ],
  };

  /* ─────────── COPY (EN / KO) ─────────── */
  const DICT = {
    en: {
      "nav.label": "Studio",
      "nav.drops": "Games",
      "nav.rules": "Rules",
      "nav.contact": "Contact",
      "hero.status": "Game #001 — Coming soon",
      "hero.tag": "Small games. One good idea.",
      "hero.sub": "A game company making small pixel games.<br>A new game every week.",
      "hero.cta": "See our games",
      "hero.kind": "Pixel game company",
      "hero.scroll": "Scroll",
      "hero.readout": "pick the smallest bit",
      "label.h": "A game doesn't have to be big<br>to be remembered.<br><em>We make those games.</em>",
      "label.lead": "BITPICK is a small game company making tiny games — each one built around a single good idea.",
      "label.p1": "We look for the one idea that feels fun the moment you touch it, then polish it until that fun comes through as clearly as possible. Strange arcade games, compact simulations, tiny strategy, experimental action — anything we think is worth turning into a game.",
      "label.p2": "We care about how a game feels, not how big it is.<br>Every game ships complete, polished, and worth coming back to.",
      "stat.week": "A new game every week",
      "stat.idea": "One good idea per game",
      "drops.pill": "Every week",
      "drops.sub": "Every game starts by picking one bit — one good idea, grown into a complete game.",
      "card.soon": "Coming soon",
      "card.locked": "Locked",
      "card.steam": "Get on Steam",
      "card.play": "Play",
      "card.next": "Next",
      "rules.cap": "Five rules every game follows.",
      "contact.h": "Pick one.<br><em>Play for a while.</em>",
      "contact.sub": "Press, partnerships, or an idea you think deserves to be a game — we would love to hear from you.",
      "footer.tag": "Small games. One good idea.",
      "footer.top": "Top ↑",
    },
    ko: {
      "nav.label": "회사소개",
      "nav.drops": "게임",
      "nav.rules": "규칙",
      "nav.contact": "연락",
      "hero.status": "게임 #001 — 준비 중",
      "hero.tag": "작은 게임. 좋은 아이디어 하나.",
      "hero.sub": "작은 픽셀 게임을 만드는 게임회사.<br>매주 새로운 게임 하나.",
      "hero.cta": "게임 보기",
      "hero.kind": "픽셀 게임 회사",
      "hero.scroll": "스크롤",
      "hero.readout": "가장 작은 비트 하나를 고른다",
      "label.h": "크지 않아도<br>오래 기억되는 게임이 있습니다.<br><em>우리는 그런 게임을 만듭니다.</em>",
      "label.lead": "BITPICK은 작은 게임을 만드는 게임회사입니다. 모든 게임은 좋은 아이디어 하나에서 시작합니다.",
      "label.p1": "처음 만져보는 순간 재미가 느껴지는 아이디어 하나를 찾고, 그 재미가 가장 선명하게 전달되도록 끝까지 다듬습니다. 이상한 아케이드, 작은 시뮬레이션, 짧은 전략 게임, 실험적인 액션까지 — 게임이 될 만한 아이디어라면 무엇이든.",
      "label.p2": "크기보다 손에 닿는 재미와 완성도를 먼저 생각합니다.<br>모든 게임은 끝까지 다듬어진 완성된 모습으로 찾아갑니다.",
      "stat.week": "매주 새로운 게임",
      "stat.idea": "게임 하나에 좋은 아이디어 하나",
      "drops.pill": "매주 출시",
      "drops.sub": "모든 게임은 비트 하나를 고르는 데서 시작합니다 — 좋은 아이디어 하나를 완성된 게임으로.",
      "card.soon": "준비 중",
      "card.locked": "잠김",
      "card.steam": "Steam에서 보기",
      "card.play": "플레이",
      "card.next": "다음",
      "rules.cap": "모든 게임이 지키는 다섯 가지 규칙.",
      "contact.h": "하나 골라서,<br><em>잠깐 놀다 가세요.</em>",
      "contact.sub": "취재, 파트너십, 혹은 게임이 되었으면 하는 아이디어가 있다면 언제든 연락 주세요.",
      "footer.tag": "작은 게임. 좋은 아이디어 하나.",
      "footer.top": "맨 위로 ↑",
    },
  };

  /* ─────────── THE BITPICK RULES ─────────── */
  const RULES = [
    { en: ["One Idea.", "One core idea per game. If it can't be explained in one sentence, we don't make it."],
      ko: ["아이디어 하나.", "게임 하나에 핵심 아이디어 하나. 한 문장으로 설명되지 않으면 만들지 않습니다."] },
    { en: ["Small Scope.", "We never grow a game past what it needs. One or two mechanics, no more."],
      ko: ["작은 범위.", "필요 이상으로 키우지 않습니다. 중심 메커니즘은 한두 개면 충분합니다."] },
    { en: ["No Filler.", "We don't pad a small game with repetitive grinding."],
      ko: ["채우기 금지.", "부족한 콘텐츠를 반복 노가다로 메우지 않습니다."] },
    { en: ["Ship It Finished.", "Every game has an ending or a clear goal. No \"we'll finish it in updates\"."],
      ko: ["완성해서 출시.", "엔딩이나 명확한 목표가 있습니다. 업데이트를 전제로 미완성 상태로 내지 않습니다."] },
    { en: ["Keep Making.", "Many fun experiments beat one perfect thing. Then next week, another one."],
      ko: ["계속 만든다.", "완벽한 하나보다 재미있는 여러 실험. 그리고 다음 주에 또 하나."] },
  ];

  const MARQUEE_1 = {
    en: ["ONE GOOD IDEA", "A NEW GAME EVERY WEEK", "SMALL GAMES", "PICK ONE"],
    ko: ["좋은 아이디어 하나", "매주 새로운 게임", "작은 게임", "하나만 골라"],
  };
  const MARQUEE_2 = ["SMALL", "WEIRD", "FUN"];

  const drops = (window.BITPICK_DROPS || []).slice().sort((a, b) => a.no - b.no);
  const pad = (n, w = 3) => String(n).padStart(w, "0");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ─────────── LANGUAGE ─────────── */
  let lang = "en";
  try { lang = localStorage.getItem("bitpick-lang") || ""; } catch (_) { lang = ""; }
  if (!DICT[lang]) lang = (navigator.language || "").toLowerCase().startsWith("ko") ? "ko" : "en";

  function applyLang() {
    document.documentElement.lang = lang;
    const d = DICT[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = d[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll(".lang [data-lang]").forEach((s) => s.classList.toggle("is-on", s.dataset.lang === lang));
    renderDrops();
    renderRules();
    renderMarquees();
    updateReadout();
  }

  document.getElementById("langToggle").addEventListener("click", () => {
    lang = lang === "en" ? "ko" : "en";
    try { localStorage.setItem("bitpick-lang", lang); } catch (_) {}
    applyLang();
  });

  /* ─────────── PIXEL SPRITES (per-drop, seeded) ─────────── */
  function rng(seed) {
    return () => {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const QMARK = ["..####..", ".##..##.", "......##", "....###.", "...##...", "...##...", "........", "...##..."];

  function spriteCanvas(drop, locked) {
    const N = 10;
    const c = document.createElement("canvas");
    c.width = N; c.height = N;
    const g = c.getContext("2d");
    const color = locked ? "#ffffff" : drop.accent || "#C6FF00";
    if (locked) {
      g.fillStyle = color;
      QMARK.forEach((row, y) => [...row].forEach((ch, x) => ch === "#" && g.fillRect(x + 1, y + 1, 1, 1)));
      return c;
    }
    const r = rng(drop.no * 9973 + 17);
    // symmetric "critter": left half random, mirrored; eyes cut out
    for (let y = 1; y < N - 1; y++) {
      for (let x = 1; x < N / 2; x++) {
        const edge = (y === 1 || y === N - 2) ? 0.35 : 0.62;
        if (r() < edge) {
          g.fillStyle = color;
          g.fillRect(x, y, 1, 1);
          g.fillRect(N - 1 - x, y, 1, 1);
        }
      }
    }
    g.fillStyle = color;
    g.fillRect(3, 3, 4, 3);
    g.clearRect(3, 4, 1, 1);
    g.clearRect(6, 4, 1, 1);
    return c;
  }

  /* ─────────── DROPS ─────────── */
  function renderDrops() {
    const d = DICT[lang];
    const grid = document.getElementById("dropGrid");
    const released = drops.filter((x) => x.status === "out").length;
    document.getElementById("dropCount").textContent = `(${pad(released, 2)})`;

    grid.innerHTML = "";
    drops.forEach((drop, i) => {
      const locked = drop.status === "locked";
      const soon = drop.status === "soon";
      const card = document.createElement("article");
      card.className = `card notch reveal is-in ${locked ? "is-locked" : ""}`;
      card.style.setProperty("--d", i % 3);
      if (drop.accent) card.style.setProperty("--a", drop.accent);

      const title = drop.title?.[lang] ?? drop.title?.en ?? "";
      const line = drop.line?.[lang] ?? drop.line?.en ?? "";
      const status = locked ? d["card.locked"] : soon ? d["card.next"] : drop.date || "OUT";

      let action;
      if (drop.status === "out" && (drop.steam || drop.play)) {
        action = drop.steam
          ? `<a class="btn" href="${esc(drop.steam)}" target="_blank" rel="noopener">${d["card.steam"]} ↗</a>`
          : `<a class="btn" href="${esc(drop.play)}">${d["card.play"]} ▸</a>`;
      } else {
        action = `<span class="btn is-ghost">${locked ? "???" : d["card.soon"]}</span>`;
      }

      card.innerHTML = `
        <div class="card-art">
          ${drop.cover && !locked ? `<img src="${esc(drop.cover)}" alt="${esc(title)}" loading="lazy">` : ""}
          <div class="card-tags">
            <span class="chip">GAME #${pad(drop.no)}</span>
            <span class="chip ${locked ? "" : "is-a"}">${esc(status)}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="card-op">${esc(locked ? "? ? ?" : drop.op)}</div>
          <h3 class="card-name">${esc(title)}</h3>
          <p class="card-line">${esc(line)}</p>
          ${drop.tags?.length ? `<div class="card-meta">${drop.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>` : ""}
          <div class="card-foot">
            ${action}
          </div>
        </div>`;
      if (!drop.cover || locked) card.querySelector(".card-art").prepend(spriteCanvas(drop, locked));
      grid.appendChild(card);
    });
  }

  /* ─────────── RULES ─────────── */
  function renderRules() {
    const list = document.getElementById("rulesList");
    list.innerHTML = RULES.map((r, i) => {
      const [h, p] = r[lang] || r.en;
      return `<li class="rule">
        <span class="rule-no">${pad(i + 1, 2)}</span>
        <div><h3>${esc(h)}</h3><p>${esc(p)}</p></div>
      </li>`;
    }).join("");
  }

  /* ─────────── MARQUEES ─────────── */
  function marqueeHTML(words) {
    const once = words.map((w) => `<span>${esc(w)}<b>✦</b></span>`).join("");
    return once + once + once + once;
  }
  function renderMarquees() {
    document.getElementById("marquee1").innerHTML = marqueeHTML(MARQUEE_1[lang]);
    document.getElementById("marquee2").innerHTML = MARQUEE_2.map((w) => `<span>${w}<b>·</b></span>`).join("").repeat(4);
  }

  /* ─────────── HERO: pick the smallest bit ─────────── */
  const bitsEl = document.getElementById("bits");
  const readout = document.getElementById("readout");
  const state = new Array(8).fill(0);
  const cells = [];
  for (let i = 0; i < 8; i++) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "bit";
    b.textContent = "0";
    b.setAttribute("aria-label", `bit ${7 - i}`);
    b.addEventListener("click", () => {
      if (scanning) return;
      state[i] ^= 1; // XOR flip
      paint();
      b.classList.remove("is-pop"); void b.offsetWidth; b.classList.add("is-pop");
    });
    bitsEl.appendChild(b);
    cells.push(b);
  }
  let scanning = false;

  function paint() {
    cells.forEach((c, i) => {
      c.textContent = state[i];
      c.classList.toggle("is-on", !!state[i]);
      c.setAttribute("aria-pressed", state[i] ? "true" : "false");
    });
    const onCount = state.reduce((a, b) => a + b, 0);
    cells.forEach((c, i) => c.classList.toggle("is-picked", onCount === 1 && state[i] === 1));
    updateReadout();
  }
  function updateReadout() {
    const bin = state.join("");
    const val = parseInt(bin, 2);
    const hint = DICT[lang]["hero.readout"];
    readout.innerHTML = val === 0
      ? `x = 0b${bin} <span>// ${esc(hint)}</span>`
      : `x = 0b${bin} = <b>${val}</b> <span>// ${val === 1 ? "x & 1 → PICK" : "0x" + val.toString(16).toUpperCase().padStart(2, "0")}</span>`;
  }

  function runPick() {
    if (reduced) { state[7] = 1; paint(); return; }
    scanning = true;
    const path = [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 4, 5, 6, 7];
    let k = 0;
    const tick = () => {
      cells.forEach((c) => c.classList.remove("is-scan"));
      if (k < path.length) {
        cells[path[k]].classList.add("is-scan");
        k++;
        setTimeout(tick, k > 10 ? 150 : 85);
      } else {
        scanning = false;
        state[7] = 1; // the smallest bit: LSB
        paint();
        cells[7].classList.add("is-pop");
      }
    };
    setTimeout(tick, 900);
  }

  /* ─────────── HEADER + ACTIVE NAV ─────────── */
  const header = document.getElementById("header");
  const navLinks = [...document.querySelectorAll("[data-nav]")];
  const sections = navLinks.map((a) => document.getElementById(a.dataset.nav));
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
    const mark = window.innerHeight / 3;
    let active = null;
    sections.forEach((s) => { if (s.getBoundingClientRect().top <= mark) active = s.id; });
    navLinks.forEach((a) => a.classList.toggle("is-active", a.dataset.nav === active));
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ─────────── REVEAL ─────────── */
  function initReveal() {
    const els = document.querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window) || reduced) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
  }

  /* ─────────── CONTACT ─────────── */
  function initContact() {
    const mail = `mailto:${CONFIG.email}`;
    const big = document.getElementById("emailBig");
    const small = document.getElementById("emailSmall");
    big.href = small.href = mail;
    big.textContent = CONFIG.email;
    small.textContent = `${CONFIG.email} ↗`;
    document.getElementById("socials").innerHTML = CONFIG.socials
      .map((s) => `<a href="${esc(s.href)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  /* ─────────── BOOT ─────────── */
  initContact();
  applyLang();
  initReveal();
  onScroll();
  runPick();
})();
