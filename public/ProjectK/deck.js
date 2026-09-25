/* ProjectK internal design deck. All diagrams are editable HTML. */
const slides = [];
const add = (chapter, label, title, theme, body, foot = 'PROJECT K / INTERNAL DESIGN RECORD') => slides.push({chapter,label,title,theme,body,foot});
const lv = (label,value) => `<div class="label-value"><span>${label}</span><span>${value}</span></div>`;
const item = (n,title,detail='') => `<li><span>${n}</span><div><b>${title}</b>${detail?`<small>${detail}</small>`:''}</div></li>`;
const step = (n,title,detail,kind='') => `<div class="case-step ${kind}"><small>${n}</small><b>${title}</b><p>${detail}</p></div>`;
const node = (n,title,detail) => `<div class="diagram-node"><span class="smallcap">${n}</span><b>${title}</b><p>${detail}</p></div>`;
const picNote = `<span class="photo-credit">CONCEPT ILLUSTRATION / 게임 플레이 화면 아님</span>`;

// 01–22: production team narrative
add('promise','01 / GAME PROMISE','한 공방. 한 관리자. 만 개의 열쇠.','photo',`
  <span class="eyebrow">PROJECT K / THE LAST KEY BUREAU</span>
  <h1>마지막<br>열쇠관리국</h1>
  <div class="section-line"></div>
  <p class="deck-lead max-70">열쇠를 직접 고치고, 보낼 권한이 있는지 판단하고, 공방 안의 잠긴 기록을 연다.</p>
  <div class="spacer"></div><span class="tag">1인칭 공방 게임</span><span class="tag">내부 제작팀 기획안</span>
  ${picNote}`,'WINDUP / PROJECT K · DESIGN RECORD v2');

add('promise','01 / GAME PROMISE','게임의 약속','paper',`
  <div class="two wide-left"><div><span class="eyebrow">CORE EXPERIENCE</span><h2>열리는 열쇠와<br>전달해도 되는 열쇠는 다르다</h2><p class="deck-lead small">손으로 확인한 물리적 사실과 서류가 말하는 법적 상태 사이에서 플레이어가 최종 결정을 내린다.</p></div>
  <div class="stack">${lv('손작업','다섯 홈의 깊이를 읽고 필요한 부분만 깎는다')}${lv('판정','문 코드, 차수, 목적, 공문을 대조한다')}${lv('탐색','특수 열쇠로 설비와 숨겨진 기록을 연다')}${lv('성장','반복 업무를 자동화하고 예외 판정에 집중한다')}</div></div>
  <p class="footnote">PC · 마우스와 키보드 우선 · 12교대 완결형 캠페인. 첫 완주 약 3시간은 플레이 테스트 목표이며 확정 분량이 아니다.</p>`);

add('case','02 / PLAY CASE','대표 의뢰 No. 0417','paper',`
  <div class="two wide-right"><div class="record"><div class="record-head"><span>KEY REQUEST / K-1</span><span>No. 0417</span></div><div class="record-title">시립병원 비상문 열쇠 수선</div>
  ${lv('문 코드','R03·HSP·0088·II')}${lv('각인','B·K-0088-02')}${lv('발급 목적','응급 출입 / II')}${lv('유효 기간','교대 14까지')}${lv('승인 서명','있음')}<span class="stamp">검토 대기</span></div>
  <div><span class="eyebrow">WHAT THE PLAYER SEES</span><h2>봉투, 열쇠,<br>의뢰서</h2><p class="deck-lead small">봉투 안에는 아이의 그림이 들어 있다. 사연은 정답을 바꾸지 않지만, 열쇠의 결과가 누구에게 돌아갈지 생각하게 한다.</p><div class="rule"></div><p class="minor">교대 06의 대표 사례 · 화면과 수치는 설계 예시</p></div></div>`);

add('case','02 / PLAY CASE','한 의뢰의 일곱 동작','dark',`
  <span class="eyebrow">CASE 0417 / INTERACTION SEQUENCE</span><h2>접수부터 통지까지</h2><div class="spacer"></div>
  <div class="diagram-row">${node('01 · 보기','접수','봉투와 의뢰서, 각인 번호 확인')}${node('02 · 만지기','검사','열쇠를 돌려 몸통과 홈 확인')}${node('03 · 읽기','대조','의뢰서·장부·허가를 비교')}${node('04 · 조작','수선','닳은 홈만 등록 깊이로 복원')}${node('05 · 시험','열림','시험 자물쇠의 물리 결과 확인')}</div>
  <div class="diagram-row" style="margin-top:4px">${node('06 · 결정','봉인','오늘 회수 공문 확인 후 사건 번호 발행')}${node('07 · 피드백','다음 교대','임시 개방 통지와 새 차수 의뢰 도착')}</div>
  <p class="footnote">의뢰당 20~60초는 일반 의뢰의 플레이 테스트 목표다. 대표 사례는 공문 확인과 결과 통지까지 포함해 더 길다.</p>`);

add('case','02 / PLAY CASE','손으로 확인한 것','dark',`
  <div class="two"><div><span class="eyebrow">EXAMINE / CUT / TEST</span><h2>홈은 복원할 수 있다.<br>과절삭은 되돌릴 수 없다.</h2><p class="deck-lead small">현재 홈 1·3·5를 등록 깊이 2·3·2로 복원한다. 한 번의 절삭은 한 단계만 깊어진다.</p><div class="rule"></div><span class="code">현재 1 1 2 0 1<br>목표 2 1 3 0 2</span></div>
  <div class="specimen"><div class="specimen-top"><span>WORKBENCH / INSPECTION VIEW</span><span>예시 화면 구성</span></div><div class="specimen-main">열쇠와 의뢰서를<br>동시에 펼친다</div><div class="specimen-detail"><span>좌측 · 열쇠 회전 및 홈 확대</span><span>우측 · 등록 패턴, 문 코드, 차수</span><span>하단 · 절삭 단계와 시험 자물쇠</span></div></div></div>
  <p class="footnote">과절삭 시 실물은 폐기한다. 진행은 막히지 않으며, 재발급 허가가 없으면 보완으로 처리한다.</p>`);

add('case','02 / PLAY CASE','열리지만 보낼 수 없다','photo',`
  <span class="eyebrow">CASE 0417 / THE TURN</span><h2>시험 자물쇠는 열렸다.<br><span class="brass">오늘 공문은 02차를 회수했다.</span></h2>
  <div class="section-line"></div><p class="deck-lead max-70">플레이어는 K-0088-02를 봉인함에 넣고 사건 번호를 발행한다. 이 판단은 수선이 성공했는지와 별개다.</p>
  <div class="spacer"></div><span class="tag">물리 결과 · 열림</span><span class="tag">법적 결과 · 봉인</span>${picNote}`);

add('case','02 / PLAY CASE','결정 다음에 오는 정보','paper',`
  <div class="two"><div><span class="eyebrow">NEXT SHIFT / CONSEQUENCE</span><h2>결과는 다음 교대에<br>서류로 돌아온다</h2><p class="deck-lead small">비상문은 임시 개방 상태로 유지됐다. 새 차수인 03차 재발급 의뢰가 도착한다. 플레이어의 봉인 결정이 업무를 끝내지 않고 다음 작업을 만든다.</p></div>
  <div class="record"><div class="record-head"><span>OUTCOME NOTICE</span><span>SHIFT 07</span></div><div class="record-title">결과 통지</div>${lv('이전 의뢰','No. 0417 · 02차 봉인')}${lv('현장 상태','비상문 임시 개방 유지')}${lv('후속 의뢰','03차 새 원형 재발급')}${lv('플레이어 작업','허가 확인 → 절삭 → 각인 → 시험')}<span class="stamp">접수 완료</span></div></div>`);

add('system','03 / CORE SYSTEM','판정의 두 축','dark',`
  <span class="eyebrow">DECISION MODEL</span><h2>물리적으로 맞는가.<br>법적으로 유효한가.</h2><div class="spacer"></div>
  <div class="two"><div class="specimen"><div class="specimen-top"><span>PHYSICAL</span><span>시험 자물쇠</span></div><div class="specimen-main">몸통 형식 + 홈 5칸</div><div class="specimen-detail"><span>실물 상태와 등록 패턴을 비교</span><span>열림은 전달의 필요조건</span></div></div>
  <div class="specimen"><div class="specimen-top"><span>LEGAL</span><span>장부 / 공문</span></div><div class="specimen-main">등록 + 목적 + 시점</div><div class="specimen-detail"><span>문 코드·각인·차수·허가·회수 확인</span><span>법적 유효성은 실물 시험과 별도</span></div></div></div>`);

add('system','03 / CORE SYSTEM','세 가지 판정','paper',`
  <span class="eyebrow">OUTCOME / ONE REASON REQUIRED</span><h2>전달, 보완, 봉인</h2><div class="spacer"></div>
  <div class="three"><div class="side-fact"><b class="green">✓ 전달</b><p>기록과 허가가 유효하고 작업 후 시험을 통과했다.</p></div><div class="side-fact"><b class="brass">○ 보완</b><p>서명·등급·기한·번호 등 해결 가능한 서류 문제가 있다. 사유 도장을 함께 고른다.</p></div><div class="side-fact"><b class="red">✕ 봉인</b><p>회수 명령이나 미등록 중복 열쇠다. 사건 번호를 남긴다.</p></div></div>
  <div class="rule"></div><p class="big-check">여러 문제가 겹치면 봉인 &gt; 보완 &gt; 전달.</p><p class="footnote">대표 의뢰 No. 0417은 서류가 완결됐어도 회수 명령이 있으므로 봉인한다.</p>`);

add('system','03 / CORE SYSTEM','판정 순서와 예외','dark',`
  <div class="two wide-left"><div><span class="eyebrow">AUTHORITATIVE RESULT</span><h2>플레이어는 자유롭게 검사한다.<br>정답은 같은 기준으로 계산한다.</h2><p class="deck-lead small">화면은 검사 순서를 강제하지 않는다. 판정기는 적용 중인 공문과 장부 상태를 합쳐 최종 결과와 사유를 만든다.</p></div>
  <ol class="editorial-list">${item('01','회수·미등록 중복이면 봉인','서명 누락과 함께 있어도 봉인이 우선')}${item('02','그 밖의 누락·만료·등급 부족은 보완','가장 직접적인 사유를 도장으로 표시')}${item('03','작업 완료와 시험 통과 시 전달','물리와 법적 검사를 모두 충족')}</ol></div>
  <p class="footnote">공문 충돌은 교대 09에서 도입한다. 같은 대상의 지시가 충돌하면 최신 발효 공문을 확인하고, 발효 순서도 확정할 수 없으면 보완으로 반송한다.</p>`);

add('system','03 / CORE SYSTEM','실패도 다음 업무로 이어진다','paper',`
  <span class="eyebrow">ERROR RECOVERY</span><h2>오판정은 막다른 길이 아니다</h2><div class="spacer"></div>
  <div class="case-flow">${step('과절삭','실물 폐기','재발급 허가가 없으면 보완 처리. 감사표에 재작업 비용이 남는다.','alert')}${step('필수 열쇠 오배송','재검사함 복귀','캠페인 진행에 필요한 권한 열쇠는 다음 교대에 돌아온다.','alert')}${step('규칙 갱신 누락','감사표에 원인 표시','구버전 회수 목록으로 자동 전달했다면 누락 규칙과 의뢰 번호를 보여준다.','success')}</div>
  <p class="footnote">오류는 비용과 추가 작업을 남기되 캠페인을 중단하지 않는다. 정확도와 처리 시간은 평가 지표로만 사용한다.</p>`);

add('growth','04 / GROWTH','한 명이 만 개를 다루는 방법','dark',`
  <div class="two"><div><span class="eyebrow">SCALE / DEFINITION</span><h2>1만 개는<br>공방의 누적 물량</h2><p class="deck-lead small">플레이어가 손으로 처리하는 것은 교대당 약 8~20개의 특수 의뢰다. 나머지는 입고 더미, 계수기, 선별기와 출고 라인으로 표현한다.</p></div>
  <div><div class="stat-line"><strong>10,000</strong><span>캠페인 동안 공방이 다루는 전체 물량 목표</span></div><div class="stat-line"><strong>8–20</strong><span>교대당 직접 처리할 특수 의뢰의 설계 범위</span></div><div class="stat-line"><strong>12</strong><span>완결형 캠페인의 교대 수</span></div><p class="footnote">전체 물량과 손작업량은 별개 지표다. 물량 목표는 후반의 시각적 성장과 장비 가동감을 검증하며 조정한다.</p></div></div>`);

add('growth','04 / GROWTH','권한판과 장비','paper',`
  <div class="two wide-right"><div><span class="eyebrow">AUTHORITY BOARD</span><h2>열쇠가<br>장비를 연다</h2><p class="deck-lead small">R00·BUR 문 코드를 가진 특수 열쇠가 공방의 권한판에 맞는다. 문 번호가 구멍 번호다.</p><div class="rule"></div><p class="minor">01–08 장비 / 09–11 숨겨진 방 / 12 최종 기록실</p></div>
  <div class="mini-map"><span class="focus">01 확대등</span><span class="focus">02 홈 게이지</span><span class="focus">03 절삭 지그</span><span>04 재각인기</span><span>05 묶음 집게</span><span>06 서류 판독기</span><span>07 선별기</span><span>08 출고 라인</span><span class="seal">09–12 기록과 방</span></div></div>
  <p class="footnote">열쇠는 개방 조건, 예산은 설치 비용이다. 두 조건이 한 교대 안팎에서 만나도록 플레이 테스트한다.</p>`);

add('growth','04 / GROWTH','자동화 이후의 플레이','dark',`
  <span class="eyebrow">AUTOMATION / PLAYER RESPONSIBILITY</span><h2>기계는 확실한 의뢰만 처리한다</h2><div class="spacer"></div>
  <div class="diagram-row">${node('입고','서류 판독','필수 칸과 번호 형식 확인')}${node('선별','규칙 대조','몸통·홈·차수·목적·회수 목록')}${node('확정','자동 출고','모든 검사 통과 시 일반 의뢰 처리')}${node('예외','검토함','충돌·회수·특수 의뢰는 손으로')}</div>
  <div class="rule"></div><p class="big-check">공문이 바뀌면 플레이어가 설정판과 회수 목록을 갱신한다.</p>
  <p class="footnote">자동화가 판정을 숨기지 않도록 처리 로그와 예외 사유를 열람할 수 있게 한다.</p>`);

add('growth','04 / GROWTH','12교대의 리듬','paper',`
  <span class="eyebrow">CAMPAIGN / HIGH-LEVEL ARC</span><h2>규칙, 설비, 이야기가 함께 열린다</h2><div class="spacer"></div>
  <div class="three"><div class="side-fact"><span class="minor">교대 01–04</span><b>손작업을 배운다</b><p>형식·홈·등록·차수·복제를 익힌다. 보수 창고를 발견한다.</p></div><div class="side-fact"><span class="minor">교대 05–08</span><b>기록을 의심한다</b><p>등급·회수·임시 허가가 추가된다. 반송 기록실과 선별기가 열린다.</p></div><div class="side-fact"><span class="minor">교대 09–12</span><b>시스템을 다룬다</b><p>공문 충돌과 자동화 설정을 확인한다. 비상 분배실과 최종 기록실에 도달한다.</p></div></div>
  <p class="footnote">새 규칙의 첫 등장에는 이유를 즉시 설명한다. 이후 오류는 교대 말 감사표에서 의뢰 번호와 함께 확인한다.</p>`);

add('world','05 / WORLD','열쇠등록법이 필요한 이유','chapter',`
  <span class="eyebrow">WORLD / REPUBLIC OF RADREN</span><h2>모든 문에는 번호가 있다.<br>모든 열쇠에는 기록이 남는다.</h2><div class="section-line"></div><p class="deck-lead max-70">대형 화재의 구조 지연 뒤 등록법이 생겼다. 공익을 위해 만든 제도가 중앙 기록에 지나치게 의존하면서 새로운 위험을 만든다.</p>`);

add('world','05 / WORLD','이야기는 결과 통지로 전해진다','dark',`
  <div class="two"><div><span class="eyebrow">ENVIRONMENTAL NARRATIVE</span><h2>사람은 보이지 않는다.<br>결과는 도착한다.</h2><p class="deck-lead small">의뢰서 한 줄, 봉투 속 물건, 마모된 열쇠, 다음 교대의 통지가 플레이어의 결정과 사람의 삶을 연결한다.</p></div>
  <div class="specimen paperish"><div class="specimen-top"><span>NOTICE / R12·APT·0311</span><span>교대 03</span></div><div class="specimen-main">공용 현관 정상 출입 확인</div><div class="specimen-detail"><span>지난 교대 · 관리인의 급한 수선 요청</span><span>오늘 · 세입자들의 출입 복구 통지</span><span>추가 대사나 대면 NPC 없음</span></div></div></div>`);

add('world','05 / WORLD','공방 안의 네 문','paper',`
  <div class="two wide-right"><div><span class="eyebrow">SPACE / EXPLORATION</span><h2>같은 방에서<br>다른 기록을 찾는다</h2><p class="deck-lead small">권한판은 작업대에서 보이는 북쪽 벽에 있다. 숨겨진 방의 퍼즐은 이미 배운 대조·수선·순서 조작만 사용한다.</p></div>
  <ol class="editorial-list">${item('09','보수 창고','옛 작업 메모와 절삭 설비')}${item('10','반송 기록실','어긋난 접수·전달·회수 기록')}${item('11','비상 분배실','중앙 수거의 이유와 누락된 증거')}${item('12','최종 기록실','원본 장부 확인과 결말 선택')}</ol></div>`);

add('world','05 / WORLD','마지막 선택','dark',`
  <span class="eyebrow">ENDING / NO CANONICAL CORRECT ANSWER</span><h2>기록을 어떻게 고칠 것인가</h2><div class="spacer"></div>
  <div class="two"><div class="side-fact"><span class="minor">A / 정식 시정</span><b>감사 통로로 원본과 오류 증거를 보낸다</b><p>제도를 유지하며 비상 출입 규정 개정을 요구한다.</p></div><div class="side-fact"><span class="minor">B / 공개 분배</span><b>기록을 지역 기록소와 비상 공방에 보낸다</b><p>검증 권한을 넓히되 통제의 예측 가능성은 낮아진다.</p></div></div>
  <p class="footnote">증거를 놓쳐도 결말에 도달한다. 확보한 증거는 후속 통지의 구체성을 바꾼다.</p>`);

add('production','06 / PRODUCTION','관리국 기록물의 화면 언어','paper',`
  <div class="two wide-left"><div><span class="eyebrow">ART / READABILITY</span><h2>규격화된 질서 위에<br>손때가 남는다</h2><p class="deck-lead small">관청의 반복된 번호와 서식, 황동과 낡은 목재의 마모, 기능에만 쓰는 신호색을 한 화면에서 구분한다.</p></div>
  <div><div class="stat-line"><strong>01</strong><span>모든 서류는 같은 항목을 같은 위치에 둔다</span></div><div class="stat-line"><strong>02</strong><span>색과 기호를 함께 써서 판정을 구분한다</span></div><div class="stat-line"><strong>03</strong><span>작업대가 가장 밝고 읽기 쉬운 자리다</span></div></div></div>
  <p class="footnote">본문의 작업 화면은 인터페이스 구성 예시다. 콘셉트 일러스트는 실제 게임 화면을 뜻하지 않는다.</p>`);

add('production','06 / PRODUCTION','1~3교대 버티컬 슬라이스','dark',`
  <span class="eyebrow">FIRST BUILD / PRODUCTION SCOPE</span><h2>핵심 반복을 먼저 플레이할 수 있게</h2><div class="spacer"></div>
  <div class="three"><div class="side-fact"><span class="minor">교대 01</span><b>기본 수선</b><p>열쇠 검사, 5칸 절삭, 시험, 전달과 교대 말 감사.</p></div><div class="side-fact"><span class="minor">교대 02</span><b>등록 대조</b><p>의뢰서와 각인 번호 대조, 보완 판정, 첫 장비 해금.</p></div><div class="side-fact"><span class="minor">교대 03</span><b>차수와 탐색</b><p>재발급·옛 차수 회수, 권한판, 보수 창고 1곳.</p></div></div>
  <p class="footnote">이 단계는 전체 스토리와 자동 출고 라인을 제작하기 전, 손작업·판정·탐색의 연결을 검증하는 범위다.</p>`);

add('production','06 / PRODUCTION','버티컬 슬라이스의 검증 질문','chapter',`
  <span class="eyebrow">PLAYTEST / DECISION GATES</span><h2>재미와 이해도를<br>플레이로 확인한다</h2><div class="spacer"></div>
  <ol class="editorial-list">${item('01','손작업과 서류 판정이 한 의뢰 안에서 함께 재미있는가','관찰: 절삭을 생략하고 싶어 하는지, 대조를 건너뛰는지')}${item('02','오류 이유를 플레이어가 설명할 수 있는가','관찰: 전달·보완·봉인과 사유 도장을 구분하는지')}${item('03','장비를 얻은 뒤 반복감이 줄어드는가','관찰: 검사가 빨라지고 새 판단에 시간을 쓰는지')}</ol>
  <p class="footnote">3시간 완주, 의뢰당 20~60초, 교대당 8~20개는 이 테스트의 관찰 결과에 따라 조정한다.</p>`);

// 23–36: reference appendix
add('appendix','APPENDIX / 01','열쇠 데이터 모델','paper',`
  <span class="eyebrow">REFERENCE / KEY SCHEMA</span><h2>실물과 장부가 공유하는 값</h2><div class="spacer"></div>
  <div class="two wide-left"><div class="record"><div class="record-head"><span>KEY / EXAMPLE</span><span>R03·HSP·0088·II</span></div><div class="record-title mono">B·K-0088-02</div>${lv('몸통 형식','B / 클로버')}${lv('홈 5칸','2 · 1 · 3 · 0 · 2')}${lv('문 번호','0088')}${lv('발급 차수','02')}${lv('현재 상태','회수 공문 발효 시 무효')}</div>
  <div><ol class="editorial-list">${item('A–C','몸통 형식','원형·클로버·사각. 구멍 실루엣으로 구분')}${item('0–3','각 홈의 깊이','5칸 × 4단계 = 1,024개 패턴')}${item('01+','발급 차수','재발급하면 증가. 이전 차수는 회수 대상')}${item('I–IV','문 등급','공용·공공·기관·비상/기록')}</ol></div></div>
  <p class="footnote">판정은 데이터 비교로 구현한다. 실제 잠금장치의 물리 시뮬레이션을 요구하지 않는다.</p>`);

add('appendix','APPENDIX / 02','의뢰서와 증빙','paper',`
  <span class="eyebrow">REFERENCE / REQUEST FORM K-1</span><h2>플레이어가 확인할 칸</h2><div class="spacer"></div>
  <div class="two"><div class="record"><div class="record-head"><span>KEY WORK REQUEST</span><span>No. 0417</span></div><div class="record-title">수선 의뢰</div>${lv('① 유형','수선 / 재발급 / 복제 / 회수 / 특수')}${lv('② 지역','R03 · 시립병원')}${lv('③ 문 코드','R03·HSP·0088·II')}${lv('④ 각인','B·K-0088-02')}${lv('⑤ 목적','응급 출입 / II')}${lv('⑥ 기한','교대 14까지')}${lv('⑦ 복제 수','허용 2 / 기발급 2')}${lv('⑧ 서명','있음')}</div>
  <div><ol class="editorial-list">${item('③④','문 코드·각인·장부의 문 번호와 차수 대조')}${item('⑤','발급 목적 등급이 문 등급 이상인지 확인')}${item('⑥','오늘 교대와 최신 공문의 발효 여부 확인')}${item('⑦⑧','복제 수량과 승인 서명 확인')}</ol><p class="footnote">의뢰서는 작성 당시 상태다. 이후 발효된 회수 공문은 의뢰서의 유효 기간보다 우선한다.</p></div></div>`);

add('appendix','APPENDIX / 03','다섯 가지 의뢰 유형','dark',`
  <span class="eyebrow">REFERENCE / WORK ORDERS</span><h2>같은 작업대, 다른 요구</h2><div class="spacer"></div>
  <div class="table-wrap"><table class="data-table"><thead><tr><th>유형</th><th>플레이어 작업</th><th>주요 검사</th><th>다음 상태</th></tr></thead><tbody>
  <tr><td>정상 수선</td><td>검사 → 필요한 홈 절삭 → 시험</td><td>등록 깊이·회수 차수</td><td>전달 또는 보완·봉인</td></tr>
  <tr><td>재발급</td><td>새 원형 절삭 → 차수 +1 각인</td><td>변경·재발급 허가</td><td>새 차수 전달, 옛 차수 회수</td></tr>
  <tr><td>복제</td><td>같은 차수의 사본 제작</td><td>허용 수 &gt; 기발급 수, 서명</td><td>정상 수량만 전달</td></tr>
  <tr><td>회수</td><td>실물·공문 대조 → 사건 번호 발행</td><td>회수 대상 코드와 차수</td><td>봉인 보관</td></tr>
  <tr><td>특수 의뢰</td><td>관리국 코드 추론 → 권한판 시험</td><td>R00·BUR와 배송 지시</td><td>장비·방 개방 또는 일반 판정</td></tr>
  </tbody></table></div><p class="footnote">재발급은 기존 각인을 고쳐 쓰지 않는다. 변경 명령은 새 원형 제작과 옛 열쇠 회수를 함께 지시한다.</p>`);

add('appendix','APPENDIX / 04','판정 우선순위와 예외','paper',`
  <span class="eyebrow">REFERENCE / DECISION CONTRACT</span><h2>최종 판정의 단일 기준</h2><div class="spacer"></div>
  <div class="table-wrap"><table class="data-table"><thead><tr><th>우선</th><th>조건</th><th>결과</th><th>사유 기록</th></tr></thead><tbody>
  <tr><td>1</td><td>유효한 회수 명령 또는 미등록 중복</td><td>✕ 봉인</td><td>공문 번호 또는 중복 기록</td></tr>
  <tr><td>2</td><td>필수 칸·서명·첨부 명령 누락</td><td>○ 보완</td><td>누락 항목</td></tr>
  <tr><td>3</td><td>기한 만료, 번호 불일치, 목적 등급 부족</td><td>○ 보완</td><td>갱신·정정할 항목</td></tr>
  <tr><td>4</td><td>복제 수량 초과</td><td>○ 보완</td><td>초과 수량</td></tr>
  <tr><td>5</td><td>수선·재발급 완료 후 물리 시험 실패</td><td>○ 보완</td><td>재작업 필요</td></tr>
  <tr><td>6</td><td>상기 문제 없음, 물리 시험 통과</td><td>✓ 전달</td><td>장부에 출고 기록</td></tr>
  </tbody></table></div><p class="footnote">교대 09의 공문 충돌은 최신 발효 공문을 확인한다. 발효 순서를 확정할 수 없다면 작업을 보류하고 보완 처리한다.</p>`);

add('appendix','APPENDIX / 05','절삭의 입력과 피드백','dark',`
  <div class="two wide-left"><div><span class="eyebrow">REFERENCE / HANDS-ON MECHANIC</span><h2>한 번 긁으면<br>한 단계 깊어진다</h2><p class="deck-lead small">플레이어는 홈 5칸 중 하나를 고른 뒤 짧게 절삭한다. 목표 깊이에 닿으면 소리와 손끝의 걸림으로 알려준다.</p><div class="spacer"></div><span class="code">현재 1 1 2 0 1<br>목표 2 1 3 0 2<br>작업 1·3·5칸</span></div>
  <ol class="editorial-list">${item('01','검사','확대등은 마모와 각인 읽기를 돕는다')}${item('02','절삭','홈 게이지는 현재 깊이를 수치로 보여준다')}${item('03','방지','절삭 지그는 목표 깊이에서 멈춘다')}${item('04','실패','과절삭 실물은 폐기하고 재작업으로 연결')}</ol></div>
  <p class="footnote">손작업의 입력은 자유형 깎기보다 명확한 단계와 소리·저항 피드백에 집중한다.</p>`);

add('appendix','APPENDIX / 06','규칙 도입표','paper',`
  <span class="eyebrow">REFERENCE / 12 SHIFT RULE RAMP</span><h2>한 번에 하나씩 배우는 규칙</h2><div class="spacer"></div>
  <div class="table-wrap"><table class="data-table compact"><thead><tr><th>첫 교대</th><th>새 규칙</th><th>처음 배우는 방식</th><th>반복 시 피드백</th></tr></thead><tbody>
  <tr><td>01</td><td>몸통 형식과 홈</td><td>시험 자물쇠와 등록 패턴</td><td>교대 말 감사</td></tr><tr><td>02</td><td>각인·문 코드 일치</td><td>장부 대조</td><td>의뢰 번호 표시</td></tr><tr><td>03</td><td>차수·옛 열쇠 회수</td><td>재발급 의뢰</td><td>무효 차수 설명</td></tr><tr><td>04</td><td>복제 허용 수</td><td>수량 칸 대조</td><td>초과 수량 표시</td></tr><tr><td>05</td><td>목적·등급</td><td>문 등급 비교</td><td>부족한 등급 표시</td></tr><tr><td>06</td><td>만료·회수 공문</td><td>No. 0417 사례</td><td>공문 번호 표시</td></tr><tr><td>07</td><td>임시 허가</td><td>기한 도장</td><td>만료 교대 표시</td></tr><tr><td>08</td><td>설비 설정 갱신</td><td>새 회수 목록 장착</td><td>설정 버전 표시</td></tr><tr><td>09</td><td>공문 충돌</td><td>발효 시점 확인</td><td>판단 근거 표시</td></tr>
  </tbody></table></div><p class="footnote">새 규칙의 첫 사례는 정답 이유를 즉시 설명한다. 이후에는 플레이어가 감사표로 복기한다.</p>`);

add('appendix','APPENDIX / 07','권한판 장비 8개','dark',`
  <span class="eyebrow">REFERENCE / EQUIPMENT</span><h2>반복 업무를 줄이는 순서</h2><div class="spacer"></div>
  <div class="table-wrap"><table class="data-table compact"><thead><tr><th>구멍</th><th>장비</th><th>플레이어에게 생기는 변화</th><th>공방의 변화</th></tr></thead><tbody>
  <tr><td>01</td><td>확대 검사등</td><td>마모·각인을 쉽게 본다</td><td>작업대에 따뜻한 빛</td></tr><tr><td>02</td><td>홈 게이지</td><td>5칸 깊이를 수치로 읽는다</td><td>측정대 설치</td></tr><tr><td>03</td><td>절삭 지그</td><td>과절삭을 방지한다</td><td>절삭 장치 가동</td></tr><tr><td>04</td><td>재각인기</td><td>새 차수를 한 번에 찍는다</td><td>번호 프레스 설치</td></tr><tr><td>05</td><td>묶음 집게</td><td>동일 유형 여러 개를 이동한다</td><td>열쇠 산이 낮아짐</td></tr><tr><td>06</td><td>서류 판독기</td><td>번호 불일치를 미리 표시한다</td><td>기록대 표시등</td></tr><tr><td>07</td><td>1차 선별기</td><td>일반 의뢰를 분류한다</td><td>동쪽 라인 가동</td></tr><tr><td>08</td><td>출고 라인</td><td>확정 의뢰를 자동 처리한다</td><td>기계 소리와 출고 계수 증가</td></tr>
  </tbody></table></div><p class="footnote">장비 열쇠는 개방 조건이다. 설치 예산은 감사 보상으로 지급한다. 해금과 구매 시점은 한 교대 안팎을 목표로 테스트한다.</p>`);

add('appendix','APPENDIX / 08','필수 열쇠와 권한판','paper',`
  <div class="two wide-right"><div><span class="eyebrow">REFERENCE / AUTHORITY BOARD</span><h2>진행에 필요한 열쇠는<br>사라지지 않는다</h2><p class="deck-lead small">R00·BUR·0009는 09번 구멍의 관리국 내부 열쇠다. 몸통 실루엣과 문 번호가 추론 단서다.</p><div class="rule"></div><p class="side-fact">잘못 전달하거나 봉인한 필수 열쇠는 다음 교대 재검사함으로 복귀한다. 선택 열쇠의 경로만 달라진다.</p></div>
  <div class="mini-map"><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span><span>07</span><span>08</span><span class="focus">09 보수 창고</span><span class="focus">10 반송 기록</span><span class="focus">11 비상 분배</span><span class="seal">12 최종 기록</span></div></div>`);

add('appendix','APPENDIX / 09','자동화 판정 계약','dark',`
  <span class="eyebrow">REFERENCE / MACHINE ROUTING</span><h2>확정만 자동 출고한다</h2><div class="spacer"></div>
  <div class="diagram-row">${node('01','입고','일반 의뢰의 데이터와 계수')}${node('02','서류 판독','필수 칸·서명·번호 형식')}${node('03','선별','몸통·홈·차수·목적·법적 상태')}${node('04','분기','모든 검사 확정이면 출고, 하나라도 불명확하면 검토함')}</div>
  <div class="rule"></div><div class="two"><div class="side-fact"><b>설정판</b><p>물리 호환, 등록·차수, 권한 등급, 법적 상태의 검사 스위치와 회수 목록 버전을 보여준다.</p></div><div class="side-fact"><b>책임과 복기</b><p>플레이어가 구버전 목록을 장착한 채 출고하면 감사표에 의뢰 번호와 누락된 설정을 남긴다.</p></div></div>`);

add('appendix','APPENDIX / 10','감사와 예산','paper',`
  <div class="two"><div class="record"><div class="record-head"><span>AUDIT / SHIFT 06</span><span>AUD-06</span></div><div class="record-title">교대 말 감사표</div>${lv('정확한 전달 9건','+90')}${lv('정당한 보완 4건','+35')}${lv('올바른 봉인 2건','+30')}${lv('오판정 1건','−25')}${lv('최소 운영비','+40')}${lv('이번 교대 예산','170')}<span class="stamp">확인 완료</span></div>
  <div><span class="eyebrow">REWARD RULE</span><h2>정확한 판정에<br>보상한다</h2><p class="deck-lead small">전달만 많이 하는 전략이 유리하지 않도록 세 결과 모두 올바르면 보상을 준다. 보완의 사유 도장도 평가한다.</p><div class="rule"></div><p class="side-fact">오판정에는 감점과 재작업이 있지만 교대당 손실 한도와 최소 운영비가 있어 자금 부족으로 캠페인이 막히지 않는다.</p></div></div>
  <p class="footnote">수치는 설계 예시다. 보상 규모와 장비 가격은 버티컬 슬라이스 후 조정한다.</p>`);

add('appendix','APPENDIX / 11','12교대 상세 진행표','paper',`
  <span class="eyebrow">REFERENCE / CAMPAIGN BEATS</span><h2>한 교대에 하나의 새 판단</h2><div class="spacer"></div>
  <div class="table-wrap"><table class="data-table compact"><thead><tr><th>교대</th><th>업무·규칙</th><th>장비·탐색</th><th>변화</th></tr></thead><tbody>
  <tr><td>01</td><td>몸통·홈 수선</td><td>권한판 발견</td><td>맨손과 줄</td></tr><tr><td>02</td><td>각인 번호 대조</td><td>확대 검사등</td><td>검사가 빨라짐</td></tr><tr><td>03</td><td>재발급·옛 차수 회수</td><td>보수 창고</td><td>홈 게이지·절삭 지그</td></tr><tr><td>04</td><td>복제 허용 수량</td><td>기록의 첫 불일치</td><td>재각인기</td></tr><tr><td>05</td><td>발급 목적과 등급</td><td>장비함</td><td>묶음 집게</td></tr><tr><td>06</td><td>만료·회수 명령</td><td>반송 기록실 단서</td><td>서류 판독기</td></tr><tr><td>07</td><td>임시 허가</td><td>반송 기록실</td><td>선별기 시작</td></tr><tr><td>08</td><td>규칙 변경과 설정판</td><td>누락된 문 확인</td><td>열쇠 더미 감소</td></tr><tr><td>09</td><td>공문 충돌</td><td>비상 분배실 단서</td><td>자동 출고 확대</td></tr><tr><td>10</td><td>봉인 열쇠 특별 감사</td><td>비상 분배실</td><td>대량 처리 완성</td></tr><tr><td>11</td><td>최종 배송과 특수 열쇠</td><td>12번 구멍의 조건</td><td>공방 바닥이 드러남</td></tr><tr><td>12</td><td>원본 장부 대조</td><td>최종 기록실</td><td>결말 선택</td></tr>
  </tbody></table></div><p class="footnote">각 교대의 직접 의뢰 수와 전체 처리량은 플레이 테스트 결과로 재조정한다.</p>`);

add('appendix','APPENDIX / 12','중앙 공방 배치','dark',`
  <div class="two wide-left"><div class="mini-map"><span class="seal">북쪽 / 최종 봉인문</span><span>권한판</span><span>기록함</span><span>입고 / 열쇠 산</span><span class="focus">중앙 작업대</span><span>판정함 ✓ ○ ✕</span><span>보수 창고</span><span>출입구 / 남쪽</span><span>선별·출고 라인</span></div>
  <div><span class="eyebrow">REFERENCE / ONE-ROOM BLOCKOUT</span><h2>7m × 9m의<br>밀도 높은 작업실</h2><p class="deck-lead small">서쪽 입고, 중앙 작업대, 동쪽 출고, 북쪽 권한판을 기능 축으로 둔다. 작업대에서 권한판이 바로 보이게 한다.</p><div class="rule"></div><p class="note">배치는 기능 관계를 설명하는 안이다. 실제 거리와 동선은 블록아웃에서 확인한다. 숨겨진 방은 2~3분 안에 둘러볼 작은 부속실을 목표로 한다.</p></div></div>`);

add('appendix','APPENDIX / 13','숨겨진 방의 설계','paper',`
  <span class="eyebrow">REFERENCE / ROOMS 09–12</span><h2>배운 동작으로 기록을 연다</h2><div class="spacer"></div>
  <div class="table-wrap"><table class="data-table"><thead><tr><th>구멍 / 공간</th><th>해금</th><th>플레이</th><th>획득 정보</th></tr></thead><tbody>
  <tr><td>09 보수 창고</td><td>초기 서비스 열쇠 복원</td><td>자물쇠 3개와 정비표 대조</td><td>전임 관리자들의 작업 흔적</td></tr><tr><td>10 반송 기록실</td><td>같은 번호의 두 열쇠 추적</td><td>접수·전달·회수 날짜 정렬</td><td>기록에 없는 문의 배송 경로</td></tr><tr><td>11 비상 분배실</td><td>틀린 각인 발견과 재발급</td><td>비상 출입 순서대로 꽂기</td><td>중앙 수거의 이유와 누락된 증거</td></tr><tr><td>12 최종 기록실</td><td>마지막 특수 열쇠</td><td>원본 장부와 처리 기록 대조</td><td>두 결말의 근거</td></tr>
  </tbody></table></div><p class="footnote">방 퍼즐은 수선·대조·순서 조작을 재사용한다. 장시간 이동이나 새 조작 체계가 필요하지 않게 설계한다.</p>`);

add('appendix','APPENDIX / 14','아트·사운드·접근성 기준','paper',`
  <span class="eyebrow">REFERENCE / PRODUCTION LANGUAGE</span><h2>읽을 수 있는 기록물</h2><div class="spacer"></div>
  <div class="three"><div class="side-fact"><span class="minor">VISUAL</span><b>재질과 신호</b><p>그을린 철, 올리브 금속, 황동, 누런 종이. 청록은 권한, 초록은 전달, 노랑은 보완, 빨강은 봉인에 사용한다.</p></div><div class="side-fact"><span class="minor">SOUND</span><b>결정마다 다른 소리</b><p>전달은 출고음, 보완은 두 번의 도장, 봉인은 무거운 걸쇠, 권한 해금은 깊은 회전음으로 구분한다.</p></div><div class="side-fact"><span class="minor">ACCESSIBILITY</span><b>색과 형태를 함께</b><p>✓ ○ ✕와 문 코드, 확대 보기, 글자 크기 옵션을 제공한다. 의뢰서는 열쇠 옆에 동시에 펼친다.</p></div></div>
  <div class="rule"></div><p class="big-check">작업대가 가장 밝다. 한 화면에서 열쇠, 의뢰서, 현재 규칙을 읽을 수 있어야 한다.</p>`);

if (slides.length !== 36) throw new Error(`Expected 36 slides, got ${slides.length}`);

const deck = document.getElementById('deck');
const pad = value => String(value).padStart(2,'0');
slides.forEach((s,index) => {
  const section = document.createElement('section');
  section.className = 'slide'; section.id = `slide-${index+1}`;
  section.dataset.chapter = s.chapter; section.setAttribute('aria-label',s.title);
  section.innerHTML = `<div class="sheet ${s.theme}"><div class="inner"><header class="topline"><span class="section-id">${s.label}</span><span>THE LAST KEY BUREAU / ${index<22?'MAIN FILE':'APPENDIX'}</span></header><div class="slide-body">${s.body}</div><footer class="bottomline"><span>${s.foot}</span><span class="folio">${pad(index+1)} / 36</span></footer></div></div>`;
  deck.appendChild(section);
});

const chapterNames = {promise:'01 / 게임의 약속',case:'02 / 대표 의뢰',system:'03 / 핵심 시스템',growth:'04 / 성장과 자동화',world:'05 / 세계와 이야기',production:'06 / 제작 검증',appendix:'상세 부록'};
const sections = Array.from(document.querySelectorAll('.slide'));
const nav = document.querySelector('.deck-nav');
const keys = Object.keys(chapterNames);
keys.forEach(key => {const members = sections.filter(s=>s.dataset.chapter===key); const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',chapterNames[key]);b.title=chapterNames[key];b.style.setProperty('--weight',members.length);b.addEventListener('click',()=>goto(sections.indexOf(members[0])));nav.appendChild(b)});
const navButtons = Array.from(nav.querySelectorAll('button'));
const form = document.getElementById('passwordForm');
const input = document.getElementById('passwordInput');
const error = document.getElementById('passwordError');
const storageKey = 'windup-projectk-unlocked';
const password = 'WINDUP!';
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function unlock(){document.body.classList.remove('locked');requestAnimationFrame(sync)}
try {if(localStorage.getItem(storageKey)==='true') unlock(); else input.focus()} catch {input.focus()}
form.addEventListener('submit',event=>{event.preventDefault();if(input.value===password){try{localStorage.setItem(storageKey,'true')}catch{}unlock()}else{error.textContent='비밀번호를 다시 확인해 주세요';input.value='';input.focus()}});
function activeIndex(){let best=0,distance=Infinity;sections.forEach((s,i)=>{const r=s.getBoundingClientRect();const d=Math.abs(r.top+r.height/2-innerHeight/2);if(d<distance){distance=d;best=i}});return best}
function goto(index){sections[Math.max(0,Math.min(sections.length-1,index))].scrollIntoView({behavior:reduced()?'auto':'smooth'})}
function sync(){if(document.body.classList.contains('locked'))return;const i=activeIndex();document.getElementById('barCount').textContent=`${pad(i+1)} / 36`;navButtons.forEach((b,j)=>{const on=keys[j]===sections[i].dataset.chapter;b.classList.toggle('active',on);if(on)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')})}
let scheduled=false;function requestSync(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;sync()})}
window.addEventListener('scroll',requestSync,{passive:true});window.addEventListener('resize',requestSync);
document.getElementById('mainJump').addEventListener('click',()=>goto(0));
document.getElementById('appendixJump').addEventListener('click',()=>goto(22));
document.getElementById('brandLink').addEventListener('click',event=>{event.preventDefault();goto(0)});
window.addEventListener('keydown',event=>{if(document.body.classList.contains('locked'))return;if(event.defaultPrevented||event.target.closest('input,textarea,select,button,[contenteditable="true"]'))return;let next=activeIndex();if(['ArrowDown','PageDown',' '].includes(event.key))next++;else if(['ArrowUp','PageUp'].includes(event.key))next--;else if(event.key==='Home')next=0;else if(event.key==='End')next=sections.length-1;else return;event.preventDefault();goto(next)});
requestAnimationFrame(sync);
