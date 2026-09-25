const key = (label = '302', compact = false) => `<svg class="key-drawing${compact ? ' compact' : ''}" viewBox="0 0 600 180" role="img" aria-label="${label}번 문에 맞춘 열쇠"><circle cx="86" cy="82" r="51"/><circle class="key-hole" cx="86" cy="82" r="21"/><path d="M136 65H548V104H517V130H486V104H447V147H416V104H374V120H342V104H303V137H270V104H136Z"/><text x="166" y="89">${label}</text></svg>`;
const phases = (items, className = '') => `<ol class="phases ${className}">${items.map(([title,detail],i)=>`<li><span class="step-number">0${i+1}</span><b>${title}</b><small>${detail}</small></li>`).join('')}</ol>`;
const slides = [
  {chapter:'story',title:'모든 문은 국가가 열 수 있다',theme:'cover',body:`
    <div class="cover-copy"><span class="eyebrow">가상의 공산주의 공국 · 1인칭 시뮬레이터</span><h1>공국<br>열쇠관리소</h1><p class="manifesto">모든 문은 국가가 원할 때<br>열 수 있어야 한다.</p><p class="summary">열쇠의 제작과 복제는 국가가 독점한다.<br>당신은 이곳의 공무원이자 열쇠 제작자다.</p></div>`,caption:'세계관 콘셉트 일러스트'},
  {chapter:'story',title:'당신은 열쇠관리 공무원이다',theme:'paper',body:`
    <div class="heading"><span class="eyebrow">01 / 평범한 국가 업무</span><h2>당신은 열쇠관리<br>공무원이다</h2></div>
    <div class="order-scene"><div class="order-ticket"><span class="micro">국가 공인 제작 의뢰</span><strong>302호 현관용,<br>두 개.</strong><div class="ticket-row"><span>형식 B</span><span>관리용 사본 +1</span></div></div><div class="key-allocation"><div>${key('302 × 2')}<span>국민에게 출고</span></div><div>${key('302 / 국가')}<span>국가 보관함에 수납</span></div></div></div>
    <p class="summary">주문은 투입구로, 열쇠는 운송함으로 오간다.<br>국민에게 보낼 열쇠와 국가가 보관할 사본을 함께 만든다.</p>`},
  {chapter:'story',title:'관리소 안쪽의 문들',theme:'corridor',body:`
    <div class="scene-copy"><span class="eyebrow">02 / 공무원에게도 닫힌 문</span><h2>남의 집 열쇠가<br>여기에도 맞는다.</h2><p class="summary">어느 주문의 관리용 열쇠가 잠긴 설비실을 연다.<br>얇은 벽 너머로, 도시의 집들이 이어진 통로가 나타난다.</p></div>`,caption:'도시의 문 뒤편 · 서사 콘셉트 일러스트'},
  {chapter:'story',title:'모든 문을 맡는 사람',theme:'dark',body:`
    <div class="heading"><span class="eyebrow">03 / 이야기의 결말</span><h2>모든 문을 맡는 사람</h2></div>
    <div class="access-diagram" role="img" aria-label="중앙 장치에 마지막 열쇠를 꽂으면 도시의 잠금장치가 차례로 열린다"><div class="master-key">${key('중앙 개방')}<span>마지막 관리용 열쇠</span></div><div class="lock-bank">${['101','302','406','512','608','701'].map(n=>`<div class="lock-module"><span>${n}</span><i></i><b>개방</b></div>`).join('')}</div></div>
    <p class="summary">중앙 장치가 작동하면, 만들어 온 열쇠들의 잠금장치가 차례로 열린다.<br>전체 접근 권한을 얻은 뒤에도 관리소의 업무는 계속된다.</p>`},
  {chapter:'play',title:'열쇠 한 개를 만드는 과정',theme:'paper',body:`
    <div class="heading"><span class="eyebrow">작업 / 짧은 주문, 분명한 결과</span><h2>열쇠 한 개를 만드는 과정</h2></div>
    ${phases([['주문 확인','문 번호 · 형식 · 수량 · 복제 지시'],['원형 선택','형식에 맞는 재료'],['절삭','필요한 홈을 깎기'],['시험','잠금장치가 돌아가는지'],['수량 확인','출고분과 국가 사본'],['출고·보관','작업 보상 수령']],'workflow')}
    <p class="summary">집 문에 맞는 열쇠를 만들어 보낸다.<br>반복할수록 손이 익고, 보상으로 다음 장비를 들인다.</p>`},
  {chapter:'play',title:'깎고, 맞추고, 돌린다',theme:'dark',body:`
    <div class="heading"><span class="eyebrow">손맛 / 절삭과 시험</span><h2>깎고, 맞추고, 돌린다</h2></div>
    <div class="cutting-diagram" role="img" aria-label="홈 위치와 깊이를 조절해 절삭하고 시험 장치의 다섯 핀을 정렬한다"><div class="cutting-key">${key('절삭 위치·깊이')}<span>줄질 · 금속 가루 · 깊어지는 홈</span></div><div class="pin-test"><span class="micro">시험 장치의 검사창</span><div class="pins">${[2,1,3,1,2].map(n=>`<div class="pin"><i style="--depth:${n}"></i><em></em></div>`).join('')}</div><b>핀이 맞물리는 순간, 딸깍.</b></div></div>
    <p class="summary">과절삭은 새 원형으로 다시 만들고, 오출고는 반송함에서 회수한다.<br>기본 재료와 수동 도구는 항상 사용할 수 있어 게임오버 없이 이어간다.</p>`},
  {chapter:'play',title:'손에서 설비로',theme:'paper',body:`
    <div class="heading"><span class="eyebrow">성장 / 같은 일의 다른 풍경</span><h2>손에서 설비로</h2></div>
    <div class="growth-diagram"><article><span class="micro">처음</span><div class="batch">${key('한 개')}</div><h3>직접 깎는다</h3><p>수동 줄 · 깊이 게이지</p></article><article><span class="micro">숙련</span><div class="batch">${key('기준')}${key('복제')}</div><h3>기준을 복제한다</h3><p>절삭 지그 · 복제 장치</p></article><article><span class="micro">확장</span><div class="batch many">${Array.from({length:5},()=>key('묶음',true)).join('')}</div><h3>한 번에 처리한다</h3><p>묶음 처리 장비</p></article></div>
    <p class="summary">장비가 늘면 조작 방식과 공방의 풍경이 바뀐다.<br>원형과 기준 열쇠 선택, 특수 주문의 시험은 계속 직접 맡는다.</p>`},
  {chapter:'play',title:'작업이 공간을 연다',theme:'dark',body:`
    <div class="heading"><span class="eyebrow">진행 / 업무와 발견의 연결</span><h2>작업이 공간을 연다</h2></div>
    ${phases([['주문 처리','보상과 작업 진행도'],['설비 개선','반복 작업이 편해짐'],['관리용 열쇠','잠긴 구역의 단서'],['새 구역 발견','장비와 다음 통로']],'discovery')}
    <div class="return-line">발견한 장비를 작업대로 가져온다</div>
    <p class="summary">진행에 맞춰 중요한 열쇠가 도착하고, 잃어버리면 재지급된다.<br>작업 보상은 설비로, 완성한 열쇠는 더 깊은 공간으로 이어진다.</p>`},
  {chapter:'play',title:'차갑고 기묘한 국가 작업장',theme:'paper',body:`
    <div class="heading"><span class="eyebrow">공간 / 재질 / 소리</span><h2>차갑고 기묘한 국가 작업장</h2></div>
    <div class="space-layout"><div class="floor-diagram" role="img" aria-label="왼쪽 투입구, 중앙 작업대, 오른쪽 출고함과 국가 보관함, 뒤쪽 잠긴 통로"><div class="floor-door">잠긴 문 · 도시 뒤편의 통로</div><div class="floor-in">투입구</div><div class="floor-bench">작업대<small>검사 · 절삭 · 시험</small></div><div class="floor-out">출고함<br>국가 보관함</div><div class="floor-machines">성장하며 늘어나는 설비</div></div><div class="material-notes"><p><b>차가운 콘크리트</b><span>올리브 철제 설비 · 닳은 황동</span></p><p><b>작업등 아래만 따뜻하다</b><span>청록 개방등 · 문자와 기호 병기</span></p><p><b>사람 대신 기계가 말한다</b><span>줄질 · 핀의 딸깍임 · 운송관 소리</span></p></div></div>
    <p class="summary">서류와 열쇠를 한눈에 놓고, 작은 각인은 확대해 읽는다.<br>이상한 공간은 익숙한 공방 바로 뒤에 숨어 있다.</p>`},
  {chapter:'play',title:'계속 운영하고 싶은 공방',theme:'dark',body:`
    <div class="heading"><span class="eyebrow">결말 이후 / 반복 플레이</span><h2>계속 운영하고 싶은 공방</h2></div>
    <div class="clip-strip"><article><span>01 / 손맛</span><h3>맞아 돌아가는<br>열쇠</h3><p>절삭부터 딸깍임까지</p></article><article><span>02 / 성장</span><h3>동시에 깎이는<br>열쇠들</h3><p>같은 작업의 전후 비교</p></article><article><span>03 / 발견</span><h3>벽 너머로 열린<br>불가능한 공간</h3><p>한 장면으로 전하는 미스터리</p></article></div>
    <p class="summary">결말 뒤에도 형식·패턴·수량을 조합한 주문과 설비 개선이 이어진다.<br>이야기를 초기화하지 않고, 자기 속도로 관리소를 운영한다.</p>`}
];

const deck = document.getElementById('deck');
const pad = n => String(n).padStart(2,'0');
slides.forEach((slide,i)=>{
  const section=document.createElement('section');
  section.className='slide';section.id=`slide-${i+1}`;section.dataset.chapter=slide.chapter;
  section.setAttribute('aria-label',slide.title);
  section.innerHTML=`<div class="sheet ${slide.theme}"><div class="inner"><header class="topline"><span>${slide.chapter==='story'?'세계와 이야기':'게임플레이'}</span><span>공국 열쇠관리소</span></header><div class="slide-body">${slide.body}</div><footer class="bottomline"><span>${slide.caption||'게임 설계 도해 · 실제 플레이 화면 아님'}</span><span>${pad(i+1)} / ${pad(slides.length)}</span></footer></div></div>`;
  deck.appendChild(section);
});
const sections=[...document.querySelectorAll('.slide')];
const nav=document.querySelector('.deck-nav');
sections.forEach((s,i)=>{const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',`${i+1}. ${slides[i].title}`);button.title=slides[i].title;button.addEventListener('click',()=>go(i));nav.appendChild(button)});
const navButtons=[...nav.querySelectorAll('button')];
const input=document.getElementById('passwordInput');
const storageKey='windup-projectk-unlocked';
let current=0;
function activeIndex(){
  // Use section starts so long mobile pages do not skip their own position.
  let active=0;sections.forEach((s,i)=>{if(s.getBoundingClientRect().top<=innerHeight*.35)active=i});return active;
}
function sync(){if(document.body.classList.contains('locked'))return;current=activeIndex();document.getElementById('barCount').textContent=`${pad(current+1)} / ${pad(slides.length)}`;navButtons.forEach((b,i)=>{b.classList.toggle('active',i===current);if(i===current)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')});document.getElementById('storyJump').setAttribute('aria-pressed',String(current<4));document.getElementById('playJump').setAttribute('aria-pressed',String(current>=4))}
function go(i){sections[Math.max(0,Math.min(sections.length-1,i))].scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}
function unlock(){document.body.classList.remove('locked');document.getElementById('storyJump').focus({preventScroll:true});requestAnimationFrame(sync)}
try{if(localStorage.getItem(storageKey)==='true')unlock();else input.focus()}catch{input.focus()}
document.getElementById('passwordForm').addEventListener('submit',event=>{event.preventDefault();if(input.value==='WINDUP!'){try{localStorage.setItem(storageKey,'true')}catch{}input.value='';unlock()}else{document.getElementById('passwordError').textContent='비밀번호를 다시 확인해 주세요';input.value='';input.focus()}});
document.getElementById('storyJump').addEventListener('click',()=>go(0));
document.getElementById('playJump').addEventListener('click',()=>go(4));
document.getElementById('brandLink').addEventListener('click',event=>{event.preventDefault();go(0)});
window.addEventListener('keydown',event=>{if(document.body.classList.contains('locked')||event.defaultPrevented)return;if(event.target instanceof Element&&event.target.closest('input,textarea,select,[contenteditable="true"]'))return;if(event.target instanceof Element&&event.target.closest('button,a')&&event.key===' ')return;let next=activeIndex();if(['ArrowDown','PageDown',' '].includes(event.key))next++;else if(['ArrowUp','PageUp'].includes(event.key))next--;else if(event.key==='Home')next=0;else if(event.key==='End')next=sections.length-1;else return;event.preventDefault();go(next)});
let queued=false;const schedule=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;sync()})};
window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);requestAnimationFrame(sync);
