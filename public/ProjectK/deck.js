// Static HTML is the source of slides, chapters, and page counts.
const pad = n => String(n).padStart(2, '0');
const sections = [...document.querySelectorAll('.slide')];
const chapters = [...document.querySelectorAll('[data-jump]')];
const nav = document.querySelector('.deck-nav');
sections.forEach((s, i) => {
  s.querySelector('.page-count').textContent = pad(i+1) + ' / ' + pad(sections.length);
  const b = document.createElement('button');
  b.type = 'button';
  b.setAttribute('aria-label', (i+1) + '. ' + s.getAttribute('aria-label'));
  b.title = s.getAttribute('aria-label');
  b.addEventListener('click', () => go(i));
  nav.appendChild(b);
});
const navButtons = [...nav.querySelectorAll('button')];
const input = document.getElementById('passwordInput');
const storageKey = 'windup-projectk-unlocked';
function activeIndex() {
  let active = 0;
  sections.forEach((s,i) => { if(s.getBoundingClientRect().top <= innerHeight*.35) active=i; });
  return active;
}
function sync() {
  if(document.body.classList.contains('locked')) return;
  const current = activeIndex();
  document.getElementById('barCount').textContent = pad(current+1) + ' / ' + pad(sections.length);
  navButtons.forEach((b,i) => {
    b.classList.toggle('active',i===current);
    if(i===current) b.setAttribute('aria-current','step'); else b.removeAttribute('aria-current');
  });
  chapters.forEach(b => b.setAttribute('aria-pressed',String(b.dataset.jump===sections[current].dataset.chapter)));
}
function go(i) {
  sections[Math.max(0,Math.min(sections.length-1,i))].scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}
function unlock() {
  document.body.classList.remove('locked');
  chapters[0].focus({preventScroll:true});
  requestAnimationFrame(sync);
}
try { if(localStorage.getItem(storageKey)==='true') unlock(); else input.focus(); } catch { input.focus(); }
document.getElementById('passwordForm').addEventListener('submit',event=>{
  event.preventDefault();
  if(input.value==='WINDUP!') {
    try { localStorage.setItem(storageKey,'true'); } catch {}
    input.value=''; unlock();
  } else {
    document.getElementById('passwordError').textContent='비밀번호를 다시 확인해 주세요';
    input.value=''; input.focus();
  }
});
chapters.forEach(b=>b.addEventListener('click',()=>go(sections.findIndex(s=>s.dataset.chapter===b.dataset.jump))));
document.getElementById('brandLink').addEventListener('click',event=>{event.preventDefault();go(0);});
window.addEventListener('keydown',event=>{
  if(document.body.classList.contains('locked')||event.defaultPrevented) return;
  if(event.target instanceof Element&&event.target.closest('input,textarea,select,[contenteditable="true"]')) return;
  if(event.target instanceof Element&&event.target.closest('button,a')&&event.key===' ') return;
  let next=activeIndex();
  if(['ArrowDown','PageDown',' '].includes(event.key)) next++;
  else if(['ArrowUp','PageUp'].includes(event.key)) next--;
  else if(event.key==='Home') next=0;
  else if(event.key==='End') next=sections.length-1;
  else return;
  event.preventDefault();go(next);
});
let queued=false;
const schedule=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;sync();});};
window.addEventListener('scroll',schedule,{passive:true});
window.addEventListener('resize',schedule);
requestAnimationFrame(sync);
