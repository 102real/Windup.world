// RAMU GDD — page behaviour: table-of-contents highlight, island map (season picker + region hover), character filter.
(() => {
  // ---------- table of contents: highlight the section in view ----------
  const links = [...document.querySelectorAll(".toc a, .pills a")];
  const byId = {};
  links.forEach((a) => { const id = a.getAttribute("href").slice(1); (byId[id] ||= []).push(a); });
  const secs = Object.keys(byId).map((id) => document.getElementById(id)).filter(Boolean);
  function spy() {
    let cur = secs[0];
    const y = window.scrollY + window.innerHeight * 0.28;
    for (const s of secs) if (s.offsetTop <= y) cur = s;
    links.forEach((a) => a.classList.remove("on"));
    if (!cur) return;
    (byId[cur.id] || []).forEach((a) => {
      a.classList.add("on");
      if (a.closest(".pills")) a.scrollIntoView({ block: "nearest", inline: "nearest" });
    });
  }
  let raf = 0;
  window.addEventListener("scroll", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(spy); }, { passive: true });
  spy();

  // ---------- character filter ----------
  const fbtn = [...document.querySelectorAll(".filters button")];
  fbtn.forEach((b) => b.addEventListener("click", () => {
    const v = b.dataset.v;
    fbtn.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    document.querySelectorAll(".village-block").forEach((blk) => { blk.hidden = v !== "all" && blk.dataset.v !== v; });
  }));

  // ---------- island map ----------
  const I = window.ISLAND;
  const cvTop = document.getElementById("cv-top"), cvUnder = document.getElementById("cv-under"), cvSky = document.getElementById("cv-sky");
  if (!I || !cvTop) return;
  const ORDER = ["summer", "autumn", "winter", "spring"];
  const NAME = { summer: "여름", autumn: "가을", winter: "겨울", spring: "봄" };
  const OPEN = { v: "summer", b: "summer", f: "summer", p: "summer", m: "autumn", l: "autumn", s: "autumn", c: "autumn",
    u: "winter", k: "winter", g: "winter", x: "winter", y: "spring" };
  const AREA_NAME = { v: "나사마을", b: "남쪽 해변", f: "서쪽 숲", p: "갈매기항", m: "동쪽 풀밭", l: "폭포", s: "버섯·늪 마을",
    c: "해안 절벽 마을", u: "양떼 고원", k: "눈 정상", g: "지하 동굴 마을", x: "화산 마을", y: "구름 마을" };
  const GROUND = {
    summer: { g: "#86bf4f", f: "#5f9a3c", tree: "#3e7a2e", treeHi: "#5a9c3c" },
    autumn: { g: "#d9a85a", f: "#c47a3a", tree: "#b8532c", treeHi: "#dd8a3c" },
    winter: { g: "#e8edf1", f: "#dfe6ec", tree: "#b9c7d4", treeHi: "#f4f7fa" },
    spring: { g: "#f0c6d3", f: "#e6abc0", tree: "#d9849f", treeHi: "#f3b9cb" },
  };
  const FIX = { p: "#d6c296", s: "#ecd8a0", r: "#a9a39b", t: "#cdc6b6", m: "#8d7558", b: "#b07a4a", d: "#b07a4a",
    k: "#6f6782", n: "#f3f6f9", l: "#e0582a", w: "#5b8fc9" };
  const PX = 6, W = I.W, ID = I.island_d, UY = I.under_y, SY = I.sky_y || I.D;
  let season = "summer", focus = "";

  function shade(hex, k) {
    const n = parseInt(hex.slice(1), 16);
    const r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    const f = (c) => Math.max(0, Math.min(255, Math.round(k >= 0 ? c + (255 - c) * k : c * (1 + k))));
    return `rgb(${f(r)},${f(g)},${f(b)})`;
  }
  const hAt = (x, y) => (y < 0 || y >= I.D || x < 0 || x >= W) ? 0 : parseInt(I.h[y][x], 16);
  const areaAt = (x, y) => (y < 0 || y >= I.D || x < 0 || x >= W) ? "." : I.area[y][x];

  function draw(ctx, y0, y1) {
    const G = GROUND[season];
    const idx = ORDER.indexOf(season);
    ctx.fillStyle = y0 >= SY ? "#bfe0f2" : (y0 >= UY ? "#3a3340" : (season === "winter" ? "#6f9bc8" : "#4f86bd"));
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let y = y0; y < y1; y++) {
      for (let x = 0; x < W; x++) {
        const a = I.area[y][x], s = I.surf[y][x], h = hAt(x, y);
        const yy = (y - y0) * PX;
        if (a === ".") {
          if (y < UY && (x * 7 + y * 13) % 29 === 0) { ctx.fillStyle = "rgba(255,255,255,.18)"; ctx.fillRect(x * PX + 1, yy + 2, 3, 1); }
          continue;
        }
        if (a === "?") { ctx.fillStyle = "#4a4250"; ctx.fillRect(x * PX, yy, PX, PX); continue; }
        let col = s === "g" ? G.g : s === "f" ? G.f : (FIX[s] || G.g);
        if (season === "winter" && s === "s") col = "#e9ecef";
        if (a === "w" || s === "w") col = season === "winter" ? "#86b3dc" : FIX.w;
        const flat = a === "w" || s === "w" || s === "l";
        ctx.fillStyle = shade(col, flat ? 0 : (h - 3) * 0.035);
        ctx.fillRect(x * PX, yy, PX, PX);
        if (a !== "w" && y + 1 < y1 && hAt(x, y + 1) < h && areaAt(x, y + 1) !== ".") { ctx.fillStyle = "rgba(40,25,30,.35)"; ctx.fillRect(x * PX, yy + PX - 2, PX, 2); }
        if (hAt(x - 1, y) < h && areaAt(x - 1, y) !== ".") { ctx.fillStyle = "rgba(255,255,255,.18)"; ctx.fillRect(x * PX, yy, 1, PX); }
      }
    }
    if (y0 < UY) {
      const [fx, fy, fw, fh] = I.farm;
      ctx.fillStyle = "#6b4a33"; ctx.fillRect(fx * PX, fy * PX, fw * PX, fh * PX);
      ctx.fillStyle = "#87603f";
      for (let r = 0; r < fh * PX; r += 3) ctx.fillRect(fx * PX, fy * PX + r, fw * PX, 1);
    }
    for (const [tx, ty] of I.trees) {
      if (ty < y0 || ty >= y1) continue;
      const cx = tx * PX + PX / 2, cy = (ty - y0) * PX + PX / 2;
      ctx.fillStyle = "rgba(30,20,30,.25)"; ctx.beginPath(); ctx.arc(cx + 1, cy + 2, 4, 0, 7); ctx.fill();
      ctx.fillStyle = G.tree; ctx.beginPath(); ctx.arc(cx, cy, 4, 0, 7); ctx.fill();
      ctx.fillStyle = G.treeHi; ctx.beginPath(); ctx.arc(cx - 1.2, cy - 1.2, 1.8, 0, 7); ctx.fill();
    }
    for (const st of I.structures) {
      for (const [sx, sy] of st.cells) {
        if (sy < y0 || sy >= y1) continue;
        ctx.fillStyle = "#3b2d3a"; ctx.fillRect(sx * PX, (sy - y0) * PX, PX, PX);
        ctx.fillStyle = st.id === "parcel_window" ? "#e9bb67" : "#c8574a"; ctx.fillRect(sx * PX + 1, (sy - y0) * PX + 1, PX - 2, 2);
      }
    }
    for (let y = y0; y < y1; y++) {
      for (let x = 0; x < W; x++) {
        const a = I.area[y][x];
        const yy = (y - y0) * PX;
        const op = OPEN[a];
        if (focus) {
          if (op && a !== focus) { ctx.fillStyle = "rgba(25,18,28,.42)"; ctx.fillRect(x * PX, yy, PX, PX); }
          continue;
        }
        if (!op || ORDER.indexOf(op) <= idx) continue;
        ctx.fillStyle = "rgba(25,18,28,.48)"; ctx.fillRect(x * PX, yy, PX, PX);
        if ((x + y) % 3 === 0) { ctx.fillStyle = "rgba(255,255,255,.12)"; ctx.fillRect(x * PX, yy, PX, 1); }
      }
    }
  }

  const PINS = [
    [47.5, 54.5, "클립의 밭"], [42, 49.2, "이장님 벤치"], [82, 57, "소포 창구"], [93.5, 62.4, "잔교 → 나라섬"],
    [72, 5, "풍차"], [53, 19.8, "등대"], [72, 41, "물탱크"], [26, 29.8, "① 옛 광산"],
    [68, 17.6, "② 승강기"], [16, 40.6, "벌집 정원"], [24, 46.8, "큰 고목"], [30, 76, "철새 모래톱"],
  ];
  const centres = (() => {
    const acc = {};
    for (let y = 0; y < I.D; y++) for (let x = 0; x < W; x++) {
      const a = I.area[y][x];
      if (!AREA_NAME[a]) continue;
      (acc[a] ||= [0, 0, 0]);
      acc[a][0] += x; acc[a][1] += y; acc[a][2]++;
    }
    const out = {};
    for (const a in acc) out[a] = [acc[a][0] / acc[a][2], acc[a][1] / acc[a][2]];
    Object.assign(out, { v: [47, 40], u: [76, 10], f: [12, 51], b: [30, 80.5], p: [79, 66] });
    return out;
  })();
  const topBox = document.getElementById("surface"), underBox = document.getElementById("under"), skyBox = document.getElementById("sky");
  function labels() {
    const idx = ORDER.indexOf(season);
    for (const box of [topBox, underBox, skyBox]) if (box) box.querySelectorAll(".lb").forEach((e) => e.remove());
    for (const a in centres) {
      const [cx, cy] = centres[a];
      const sky = cy >= SY, under = !sky && cy >= UY;
      if (sky && !skyBox) continue;
      const el = document.createElement("div");
      const dim = focus ? a !== focus : ORDER.indexOf(OPEN[a]) > idx;
      el.className = "lb" + (dim ? " locked" : "");
      el.textContent = AREA_NAME[a];
      el.style.left = ((cx + .5) / W * 100) + "%";
      el.style.top = (((sky ? cy - SY : under ? cy - UY : cy) + .5) / (sky ? I.D - SY : under ? SY - UY : ID) * 100) + "%";
      (sky ? skyBox : under ? underBox : topBox).appendChild(el);
    }
    if (focus) return;
    for (const [x, y, t] of PINS) {
      const el = document.createElement("div");
      el.className = "lb pin";
      el.textContent = t;
      el.style.left = (x / W * 100) + "%";
      el.style.top = (y / ID * 100) + "%";
      topBox.appendChild(el);
    }
  }
  cvTop.width = W * PX; cvTop.height = ID * PX;
  cvUnder.width = W * PX; cvUnder.height = (SY - UY) * PX;
  if (cvSky) { cvSky.width = W * PX; cvSky.height = (I.D - SY) * PX; }
  const note = document.getElementById("open-note");
  function render() {
    draw(cvTop.getContext("2d"), 0, ID);
    draw(cvUnder.getContext("2d"), UY, SY);
    if (cvSky && SY < I.D) draw(cvSky.getContext("2d"), SY, I.D);
    labels();
    const idx = ORDER.indexOf(season);
    const open = Object.keys(OPEN).filter((a) => ORDER.indexOf(OPEN[a]) <= idx);
    const fresh = Object.keys(OPEN).filter((a) => OPEN[a] === season);
    note.innerHTML = `<b>${idx + 1}장 ${NAME[season]}</b> · 열린 지역 ${open.length}/${Object.keys(OPEN).length}` +
      (fresh.length ? ` · 새로 열림: ${fresh.map((a) => AREA_NAME[a]).join(", ")}` : " · 새 지역 없음");
    document.querySelectorAll(".seasons button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.s === season)));
    document.querySelectorAll(".region").forEach((r) => r.classList.toggle("dim", ORDER.indexOf(r.dataset.season) > idx));
  }
  document.querySelectorAll(".seasons button").forEach((b) => b.addEventListener("click", () => { season = b.dataset.s; render(); }));
  document.querySelectorAll(".region").forEach((r) => {
    const on = () => { focus = r.dataset.area; render(); };
    const off = () => { focus = ""; render(); };
    r.addEventListener("mouseenter", on); r.addEventListener("mouseleave", off);
    r.addEventListener("focusin", on); r.addEventListener("focusout", off);
  });
  render();
})();
