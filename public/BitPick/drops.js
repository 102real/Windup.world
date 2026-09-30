/*
 * BITPICK DROPS
 * 매주 새 게임이 나오면 이 배열 맨 위(또는 순서대로)에 한 항목을 추가하세요.
 *
 * status : "out"    = 출시됨 (steam/play 링크 노출)
 *          "soon"   = 다음 드롭 (Coming soon)
 *          "locked" = 아직 공개 전 (? 카드)
 * op     : 이 게임을 대표하는 비트 연산자 하나 (카드 메인 표기)
 * accent : 카드 포인트 컬러 (없으면 기본 라임)
 * cover  : (선택) 16:9 커버 이미지 경로. 없으면 번호 기반 픽셀 스프라이트 자동 생성
 */
window.BITPICK_DROPS = [
  {
    no: 1,
    status: "soon",
    op: "1 << 0",
    title: { en: "Coming soon", ko: "준비 중" },
    line: {
      en: "The first bit. Currently being picked.",
      ko: "첫 번째 비트. 지금 고르는 중입니다.",
    },
    tags: ["PIXEL", "2D"],
    accent: "#C6FF00",
    date: "",
    steam: "",
    play: "",
    cover: "",
  },
  {
    no: 2,
    status: "locked",
    op: "1 << 1",
    title: { en: "Locked", ko: "잠김" },
    line: { en: "One more week.", ko: "한 주 더 기다려 주세요." },
    tags: [],
    accent: "#00E5FF",
  },
  {
    no: 3,
    status: "locked",
    op: "1 << 2",
    title: { en: "Locked", ko: "잠김" },
    line: { en: "Two more weeks.", ko: "두 주 더 기다려 주세요." },
    tags: [],
    accent: "#FF3D7F",
  },
];
