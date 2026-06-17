/* ==========================================================================
   2026 FIFA World Cup Dashboard & Simulator - JavaScript Logic
   ========================================================================== */

// 1. 48개국 팀 데이터 (이름, 코드, 피파 랭킹, 국기 이모지, 개최국 여부)
const TEAMS = {
  // Group A
  MEX: { name: "멕시코", code: "MEX", fifaRank: 15, flag: "🇲🇽", host: true },
  RSA: { name: "남아프리카공화국", code: "RSA", fifaRank: 59, flag: "🇿🇦", host: false },
  KOR: { name: "대한민국", code: "KOR", fifaRank: 23, flag: "🇰🇷", host: false },
  CZE: { name: "체코", code: "CZE", fifaRank: 30, flag: "🇨🇿", host: false },

  // Group B
  CAN: { name: "캐나다", code: "CAN", fifaRank: 40, flag: "🇨🇦", host: true },
  BIH: { name: "보스니아 헤르체고비나", code: "BIH", fifaRank: 74, flag: "🇧🇦", host: false },
  QAT: { name: "카타르", code: "QAT", fifaRank: 37, flag: "🇶🇦", host: false },
  SUI: { name: "스위스", code: "SUI", fifaRank: 19, flag: "🇨🇭", host: false },

  // Group C
  BRA: { name: "브라질", code: "BRA", fifaRank: 5, flag: "🇧🇷", host: false },
  MAR: { name: "모로코", code: "MAR", fifaRank: 12, flag: "🇲🇦", host: false },
  SCO: { name: "스코틀랜드", code: "SCO", fifaRank: 39, flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", host: false },
  HAI: { name: "아이티", code: "HAI", fifaRank: 86, flag: "🇭🇹", host: false },

  // Group D
  USA: { name: "미국", code: "USA", fifaRank: 11, flag: "🇺🇸", host: true },
  PAR: { name: "파라과이", code: "PAR", fifaRank: 56, flag: "🇵🇾", host: false },
  AUS: { name: "호주", code: "AUS", fifaRank: 24, flag: "🇦🇺", host: false },
  TUR: { name: "튀르키예", code: "TUR", fifaRank: 35, flag: "🇹🇷", host: false },

  // Group E
  GER: { name: "독일", code: "GER", fifaRank: 16, flag: "🇩🇪", host: false },
  ECU: { name: "에콰도르", code: "ECU", fifaRank: 31, flag: "🇪🇨", host: false },
  CIV: { name: "코트디부아르", code: "CIV", fifaRank: 38, flag: "🇨🇮", host: false },
  CUW: { name: "퀴라소", code: "CUW", fifaRank: 89, flag: "🇨🇼", host: false },

  // Group F
  NED: { name: "네덜란드", code: "NED", fifaRank: 7, flag: "🇳🇱", host: false },
  JPN: { name: "일본", code: "JPN", fifaRank: 18, flag: "🇯🇵", host: false },
  SWE: { name: "스웨덴", code: "SWE", fifaRank: 22, flag: "🇸🇪", host: false },
  TUN: { name: "튀니지", code: "TUN", fifaRank: 41, flag: "🇹🇳", host: false },

  // Group G
  BEL: { name: "벨기에", code: "BEL", fifaRank: 3, flag: "🇧🇪", host: false },
  EGY: { name: "이집트", code: "EGY", fifaRank: 36, flag: "🇪🇬", host: false },
  IRN: { name: "이란", code: "IRN", fifaRank: 20, flag: "🇮🇷", host: false },
  NZL: { name: "뉴질랜드", code: "NZL", fifaRank: 104, flag: "🇳🇿", host: false },

  // Group H
  ESP: { name: "스페인", code: "ESP", fifaRank: 8, flag: "🇪🇸", host: false },
  URU: { name: "우루과이", code: "URU", fifaRank: 14, flag: "🇺🇾", host: false },
  KSA: { name: "사우디아라비아", code: "KSA", fifaRank: 53, flag: "🇸🇦", host: false },
  CPV: { name: "카보베르데", code: "CPV", fifaRank: 65, flag: "🇨🇻", host: false },

  // Group I
  FRA: { name: "프랑스", code: "FRA", fifaRank: 2, flag: "🇫🇷", host: false },
  SEN: { name: "세네갈", code: "SEN", fifaRank: 17, flag: "🇸🇳", host: false },
  IRQ: { name: "이라크", code: "IRQ", fifaRank: 58, flag: "🇮🇶", host: false },
  NOR: { name: "노르웨이", code: "NOR", fifaRank: 47, flag: "🇳🇴", host: false },

  // Group J
  ARG: { name: "아르헨티나", code: "ARG", fifaRank: 1, flag: "🇦🇷", host: false },
  ALG: { name: "알제리", code: "ALG", fifaRank: 43, flag: "🇩🇿", host: false },
  AUT: { name: "오스트리아", code: "AUT", fifaRank: 25, flag: "🇦🇹", host: false },
  JOR: { name: "요르단", code: "JOR", fifaRank: 71, flag: "🇯🇴", host: false },

  // Group K
  POR: { name: "포르투갈", code: "POR", fifaRank: 6, flag: "🇵🇹", host: false },
  COD: { name: "민주콩고", code: "COD", fifaRank: 63, flag: "🇨🇩", host: false },
  UZB: { name: "우즈베키스탄", code: "UZB", fifaRank: 60, flag: "🇺🇿", host: false },
  COL: { name: "콜롬비아", code: "COL", fifaRank: 13, flag: "🇨🇴", host: false },

  // Group L
  ENG: { name: "잉글랜드", code: "ENG", fifaRank: 4, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", host: false },
  CRO: { name: "크로아티아", code: "CRO", fifaRank: 10, flag: "🇭🇷", host: false },
  GHA: { name: "가나", code: "GHA", fifaRank: 64, flag: "🇬🇭", host: false },
  PAN: { name: "파나마", code: "PAN", fifaRank: 45, flag: "🇵🇦", host: false }
};

// 2. 조 구성 데이터
const GROUPS = {
  A: ["MEX", "RSA", "KOR", "CZE"],
  B: ["CAN", "BIH", "QAT", "SUI"],
  C: ["BRA", "MAR", "SCO", "HAI"],
  D: ["USA", "PAR", "AUS", "TUR"],
  E: ["GER", "ECU", "CIV", "CUW"],
  F: ["NED", "JPN", "SWE", "TUN"],
  G: ["BEL", "EGY", "IRN", "NZL"],
  H: ["ESP", "URU", "KSA", "CPV"],
  I: ["FRA", "SEN", "IRQ", "NOR"],
  J: ["ARG", "ALG", "AUT", "JOR"],
  K: ["POR", "COD", "UZB", "COL"],
  L: ["ENG", "CRO", "GHA", "PAN"]
};

// 3. 경기 일정 및 상태 저장용 변수
let matchScores = {}; // matchId -> { homeScore: num, awayScore: num, pkHome: num, pkAway: num }
let lockedMatches = {}; // matchId -> boolean (실제 경기 또는 수동 입력으로 고정된 매치)
let actualMatches = {}; // matchId -> boolean (실제 월드컵 경기 결과만 고정 - UI 비활성화용)
let groupStandings = {}; // groupLetter -> array of team objects sorted
let thirdsStandings = []; // array of 12 third-place teams
let r32Pairings = {}; // matchId (73~88) -> { homeTeamCode: str, awayTeamCode: str }
let tournamentMatches = {}; // matchId (73~104) -> { homeCode: str, awayCode: str, homeScore: num, awayScore: num, pkHome: num, pkAway: num, winner: str }


// 라운드별 경기 번호 범위
const R32_MIN = 73, R32_MAX = 88;
const R16_MIN = 89, R16_MAX = 96;
const QF_MIN = 97, QF_MAX = 100;
const SF_MIN = 101, SF_MAX = 102;
const MATCH_THIRD_PLACE = 103;
const MATCH_FINAL = 104;

// 4. 조별 경기 대진 규칙 (인덱스)
// 각 조별로 4팀이 서로 한 번씩 경기 (총 6경기)
const GROUP_MATCH_SCHEME = [
  { round: 1, homeIdx: 0, awayIdx: 1 }, // Team 0 vs Team 1
  { round: 1, homeIdx: 2, awayIdx: 3 }, // Team 2 vs Team 3
  { round: 2, homeIdx: 0, awayIdx: 2 }, // Team 0 vs Team 2
  { round: 2, homeIdx: 1, awayIdx: 3 }, // Team 1 vs Team 3
  { round: 3, homeIdx: 3, awayIdx: 0 }, // Team 3 vs Team 0
  { round: 3, homeIdx: 1, awayIdx: 2 }  // Team 1 vs Team 2
];

// 토너먼트 고정 대진 규칙 (조 1/2위 연동)
// 1X = X조 1위, 2X = X조 2위
// 3X = 3위 팀 매칭 (Annex C 백트래킹 계산 결과 연동)
const R32_FIXED_SCHEME = {
  73: { home: "2A", away: "2B" },
  74: { home: "1E", away: "3rd_74" }, // 3A/B/C/D/F
  75: { home: "1F", away: "2C" },
  76: { home: "1C", away: "2F" },
  77: { home: "1I", away: "3rd_77" }, // 3C/D/F/G/H
  78: { home: "1H", away: "2J" },
  79: { home: "1D", away: "3rd_79" }, // 3B/E/F/I/J
  80: { home: "1G", away: "3rd_80" }, // 3A/E/H/I/J
  81: { home: "1B", away: "3rd_81" }, // 3E/F/G/I/J
  82: { home: "2D", away: "2G" },
  83: { home: "1J", away: "2H" },
  84: { home: "1K", away: "3rd_84" }, // 3D/E/I/J/L
  85: { home: "2E", away: "2I" },
  86: { home: "1A", away: "3rd_86" }, // 3C/E/F/H/I
  87: { home: "2K", away: "2L" },
  88: { home: "1L", away: "3rd_88" }  // 3E/H/I/J/K
};

// 토너먼트 상위 단계 진행 경로 정의
const TOURNAMENT_PATHWAYS = {
  89: { parent1: 74, parent2: 77 },
  90: { parent1: 73, parent2: 75 },
  91: { parent1: 76, parent2: 78 },
  92: { parent1: 79, parent2: 80 },
  93: { parent1: 83, parent2: 84 },
  94: { parent1: 81, parent2: 82 },
  95: { parent1: 86, parent2: 88 },
  96: { parent1: 85, parent2: 87 },
  
  97: { parent1: 89, parent2: 90 },
  98: { parent1: 93, parent2: 94 },
  99: { parent1: 91, parent2: 92 },
  100: { parent1: 95, parent2: 96 },
  
  101: { parent1: 97, parent2: 98 },
  102: { parent1: 99, parent2: 100 },
  
  103: { parent1: 101, parent2: 102, isLosers: true }, // 3·4위전
  104: { parent1: 101, parent2: 102 }                  // 결승전
};

// --- 초기화 및 앱 시작 ---
document.addEventListener("DOMContentLoaded", () => {
  initApp();
  bindEvents();
});

async function initApp() {
  resetData();
  renderGroupStageLayout();
  calculateAll();
  updateUI();
  
  // 로딩 오버레이를 실제 결과 불러오기 화면으로 전환
  const overlay = document.getElementById("loading-overlay");
  const bar = document.getElementById("loader-progress-bar");
  const statusText = document.getElementById("loader-status");
  const loaderTitle = overlay.querySelector("h2");

  overlay.classList.remove("fade-out");
  overlay.style.display = "flex";
  bar.style.width = "20%";
  loaderTitle.textContent = "실제 경기 결과 불러오는 중...";
  statusText.textContent = "API 서버에 연결 중입니다...";

  // 실제 결과 가져오기 시도
  const success = await attemptFetchActualResults(overlay, bar, statusText, loaderTitle);

  if (success) {
    // 성공: 시뮬레이션 진행 후 대시보드 표시
    bar.style.width = "60%";
    statusText.textContent = "시뮬레이션 실행 중...";

    simulateGroupStage();
    calculateAll();
    simulateKnockoutStage();
    calculateAll();
    updateUI();

    bar.style.width = "80%";
    statusText.textContent = "몬테카를로 분석 시작...";
    loaderTitle.textContent = "대한민국 기적의 우승 확률 계산 중...";

    // 몬테카를로 시뮬레이션 시작 (완료 시 오버레이 자동 닫힘)
    startMonteCarloSimulation();
  }
  // 실패 시: attemptFetchActualResults 내부에서 재시도 다이얼로그 처리
}

// 실제 결과 가져오기 (재시도 루프 포함)
async function attemptFetchActualResults(overlay, bar, statusText, loaderTitle) {
  while (true) {
    bar.style.width = "20%";
    loaderTitle.textContent = "실제 경기 결과 불러오는 중...";
    statusText.textContent = "API 서버에 연결 중입니다...";

    const result = await fetchActualGames();

    if (result.success) {
      // 성공: 실제 결과 적용
      bar.style.width = "50%";
      statusText.textContent = "실제 결과 적용 중...";
      const updated = applyActualResults(result.games);
      console.log(`[initApp] Applied ${updated} actual match results.`);
      if (updated > 0) {
        showToast(`✅ 실제 경기 결과 ${updated}개 연동 완료!`);
      } else {
        showToast("ℹ️ 동기화 완료: 진행된 새로운 실제 경기가 없습니다.");
      }
      return true;
    }

    // 실패: 사용자에게 재시도/건너뛰기 선택지 제공
    console.warn("[initApp] All fetch attempts failed:", result.error);
    bar.style.width = "0%";
    loaderTitle.textContent = "⚠️ 실제 결과를 불러올 수 없습니다";
    statusText.innerHTML = ""; // 버튼을 넣기 위해 초기화

    const userChoice = await showSyncRetryDialog(statusText);

    if (userChoice === "retry") {
      // 재시도: 데이터 초기화 후 루프 반복
      resetData();
      calculateAll();
      updateUI();
      continue;
    } else {
      // 건너뛰기: 실제 결과 없이 순수 시뮬레이션 모드
      showToast("ℹ️ 실제 결과 없이 시뮬레이션 모드로 진행합니다.");

      bar.style.width = "60%";
      loaderTitle.textContent = "시뮬레이션 모드로 진행 중...";
      statusText.textContent = "모든 경기를 시뮬레이션합니다...";

      simulateGroupStage();
      calculateAll();
      simulateKnockoutStage();
      calculateAll();
      updateUI();

      bar.style.width = "80%";
      statusText.textContent = "몬테카를로 분석 시작...";
      loaderTitle.textContent = "대한민국 기적의 우승 확률 계산 중...";
      startMonteCarloSimulation();
      return false;
    }
  }
}

// 재시도/건너뛰기 다이얼로그 (Promise로 사용자 입력 대기)
function showSyncRetryDialog(container) {
  return new Promise((resolve) => {
    container.innerHTML = `
      <div class="sync-retry-dialog">
        <p style="margin-bottom: 16px; color: var(--text-secondary); font-size: 0.9rem;">
          네트워크 상태나 API 서버 상태를 확인해 주세요.<br>
          다시 시도하거나, 실제 결과 없이 시뮬레이션을 진행할 수 있습니다.
        </p>
        <div style="display: flex; gap: 12px; justify-content: center;">
          <button id="btn-sync-retry" class="btn btn-primary" style="min-width: 140px; font-size: 0.95rem;">
            🔄 다시 시도
          </button>
          <button id="btn-sync-skip" class="btn btn-secondary" style="min-width: 140px; font-size: 0.95rem;">
            ⚡ 시뮬레이션 진행
          </button>
        </div>
      </div>
    `;
    document.getElementById("btn-sync-retry").addEventListener("click", () => resolve("retry"));
    document.getElementById("btn-sync-skip").addEventListener("click", () => resolve("skip"));
  });
}


function resetData() {
  matchScores = {};
  lockedMatches = {}; // 잠금 매치 초기화
  actualMatches = {}; // 실제 경기 초기화
  
  // 조별 경기 스코어 객체 초기화 (72경기)
  Object.keys(GROUPS).forEach(groupLetter => {
    for (let i = 0; i < 6; i++) {
      const matchId = `G_${groupLetter}_${i}`;
      matchScores[matchId] = { homeScore: null, awayScore: null };
    }
  });

  // 토너먼트 경기 객체 초기화 (73~104)
  tournamentMatches = {};
  for (let id = 73; id <= 104; id++) {
    tournamentMatches[id] = {
      homeCode: "",
      awayCode: "",
      homeScore: null,
      awayScore: null,
      pkHome: null,
      pkAway: null,
      winner: ""
    };
  }

  groupStandings = {};
  thirdsStandings = [];
  r32Pairings = {};
}

// --- 이벤트 바인딩 ---
function bindEvents() {
  // 탭 클릭 이벤트
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const tabId = btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // 테마 토글 버튼
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    const isLight = document.body.classList.contains("light-theme");
    themeToggle.querySelector(".toggle-icon").textContent = isLight ? "☀️" : "🌙";
  });

  // 전체 시뮬레이션 버튼
  document.getElementById("btn-simulate-all").addEventListener("click", () => {
    simulateGroupStage();
    calculateAll();
    simulateKnockoutStage();
    calculateAll();
    updateUI();
    startMonteCarloSimulation(); // 몬테카를로 재시작
    showToast("⚡ 전경기 시뮬레이션 완료! 대진표와 챔피언이 결정되었습니다.");
  });

  // 조별 예선만 자동 시뮬레이션
  document.getElementById("btn-quick-groups").addEventListener("click", () => {
    simulateGroupStage();
    calculateAll();
    updateUI();
    showToast("⚽ 조별 예선 시뮬레이션 완료!");
  });

  // 토너먼트만 시뮬레이션
  document.getElementById("btn-quick-knockouts").addEventListener("click", () => {
    if (!isGroupStageComplete()) {
      showToast("⚠️ 조별 예선 경기가 모두 채워진 후 토너먼트 시뮬레이션이 가능합니다.");
      return;
    }
    simulateKnockoutStage();
    calculateAll();
    updateUI();
    showToast("🌿 토너먼트 시뮬레이션 완료! 최종 우승자가 결정되었습니다.");
  });

  // 초기화 버튼
  document.getElementById("btn-reset").addEventListener("click", () => {
    initApp();
    showToast("🔄 모든 경기 결과가 초기화되었습니다.");
  });

  // 몬테카를로 재계산 버튼
  document.getElementById("btn-recalculate-mc").addEventListener("click", () => {
    startMonteCarloSimulation();
  });

}

// --- 조별 예선 카드 생성 및 렌더링 ---
function renderGroupStageLayout() {
  const container = document.getElementById("groups-container");
  container.innerHTML = "";

  Object.entries(GROUPS).forEach(([groupLetter, teamCodes]) => {
    const groupCard = document.createElement("div");
    groupCard.className = "card glass group-card";
    
    // 헤더 영역
    const header = document.createElement("div");
    header.className = "group-header";
    header.innerHTML = `
      <h3>Group ${groupLetter}</h3>
      <div class="group-actions">
        <button class="btn btn-secondary btn-mini btn-sim-group" data-group="${groupLetter}">조 시뮬레이션</button>
      </div>
    `;
    groupCard.appendChild(header);

    // 순위표 영역
    const tableWrapper = document.createElement("div");
    tableWrapper.className = "table-wrapper";
    tableWrapper.innerHTML = `
      <table class="standing-table">
        <thead>
          <tr>
            <th>순위</th>
            <th style="text-align: left;">국가</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>득실</th>
            <th>득점</th>
            <th>승점</th>
          </tr>
        </thead>
        <tbody id="table-body-${groupLetter}">
          <!-- JS로 순위 행 채움 -->
        </tbody>
      </table>
    `;
    groupCard.appendChild(tableWrapper);

    // 경기 리스트 영역
    const matchContainer = document.createElement("div");
    matchContainer.className = "group-matches";
    
    for (let i = 0; i < 6; i++) {
      const matchId = `G_${groupLetter}_${i}`;
      const scheme = GROUP_MATCH_SCHEME[i];
      const homeTeam = TEAMS[teamCodes[scheme.homeIdx]];
      const awayTeam = TEAMS[teamCodes[scheme.awayIdx]];

      const matchItem = document.createElement("div");
      matchItem.className = "match-item";
      matchItem.innerHTML = `
        <div class="match-team team-home">
          <span class="team-name" title="${homeTeam.name}">${homeTeam.name}</span>
          <span class="flag-emoji">${homeTeam.flag}</span>
        </div>
        <div class="match-score-inputs">
          <input type="number" min="0" max="99" class="score-input group-score-input" 
                 id="score-${matchId}-home" data-match="${matchId}" data-side="home" placeholder="-">
          <span class="match-divider">:</span>
          <input type="number" min="0" max="99" class="score-input group-score-input" 
                 id="score-${matchId}-away" data-match="${matchId}" data-side="away" placeholder="-">
        </div>
        <div class="match-team team-away">
          <span class="flag-emoji">${awayTeam.flag}</span>
          <span class="team-name" title="${awayTeam.name}">${awayTeam.name}</span>
        </div>
      `;
      matchContainer.appendChild(matchItem);
    }
    groupCard.appendChild(matchContainer);
    container.appendChild(groupCard);
  });

  // 경기 점수 입력 이벤트 바인딩
  document.querySelectorAll(".group-score-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const matchId = e.target.getAttribute("data-match");
      const side = e.target.getAttribute("data-side");
      const val = e.target.value === "" ? null : parseInt(e.target.value, 10);
      
      if (side === "home") {
        matchScores[matchId].homeScore = val;
      } else {
        matchScores[matchId].awayScore = val;
      }
      
      // 수동 입력 완료 시 고정(Lock) 처리
      if (matchScores[matchId].homeScore !== null && matchScores[matchId].awayScore !== null) {
        lockedMatches[matchId] = true;
      } else {
        delete lockedMatches[matchId];
      }
      
      calculateAll();
      updateUI();
    });
  });

  // 특정 조 시뮬레이션 버튼 이벤트 바인딩
  document.querySelectorAll(".btn-sim-group").forEach(btn => {
    btn.addEventListener("click", () => {
      const groupLetter = btn.getAttribute("data-group");
      simulateGroup(groupLetter);
      calculateAll();
      updateUI();
      showToast(`⚽ Group ${groupLetter} 시뮬레이션이 완료되었습니다.`);
    });
  });
}

// --- 계산 핵심 로직 (Standings & Rankings) ---
function calculateAll() {
  calculateGroupStageStandings();
  calculateThirdPlaceStandings();
  
  if (isGroupStageComplete()) {
    document.getElementById("btn-quick-knockouts").removeAttribute("disabled");
    buildRoundOf32Matches();
  } else {
    document.getElementById("btn-quick-knockouts").setAttribute("disabled", "true");
    clearRoundOf32Matches();
  }

  propagateKnockouts();
}

// 조별 순위 계산
function calculateGroupStageStandings() {
  Object.entries(GROUPS).forEach(([groupLetter, teamCodes]) => {
    // 임시 순위 객체 생성
    const stats = {};
    teamCodes.forEach(code => {
      stats[code] = { teamCode: code, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 };
    });

    // 6경기 결과 누적
    for (let i = 0; i < 6; i++) {
      const matchId = `G_${groupLetter}_${i}`;
      const score = matchScores[matchId];
      if (score.homeScore !== null && score.awayScore !== null) {
        const scheme = GROUP_MATCH_SCHEME[i];
        const homeCode = teamCodes[scheme.homeIdx];
        const awayCode = teamCodes[scheme.awayIdx];

        stats[homeCode].p++;
        stats[awayCode].p++;
        stats[homeCode].gf += score.homeScore;
        stats[homeCode].ga += score.awayScore;
        stats[awayCode].gf += score.awayScore;
        stats[awayCode].ga += score.homeScore;

        if (score.homeScore > score.awayScore) {
          stats[homeCode].w++;
          stats[homeCode].pts += 3;
          stats[awayCode].l++;
        } else if (score.homeScore < score.awayScore) {
          stats[awayCode].w++;
          stats[awayCode].pts += 3;
          stats[homeCode].l++;
        } else {
          stats[homeCode].d++;
          stats[homeCode].pts += 1;
          stats[awayCode].d++;
          stats[awayCode].pts += 1;
        }

        stats[homeCode].gd = stats[homeCode].gf - stats[homeCode].ga;
        stats[awayCode].gd = stats[awayCode].gf - stats[awayCode].ga;
      }
    }

    // 한 경기라도 치러졌는지 확인
    const hasStarted = Object.values(stats).some(t => t.p > 0);
    
    let sorted;
    if (hasStarted) {
      // 정렬 규칙: 승점 > 골득실 > 다득점 > 피파랭킹(낮을수록 우수)
      sorted = Object.values(stats).sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.gd !== a.gd) return b.gd - a.gd;
        if (b.gf !== a.gf) return b.gf - a.gf;
        // 피파랭킹 역비교 (1등이 가장 좋으므로 오름차순)
        return TEAMS[a.teamCode].fifaRank - TEAMS[b.teamCode].fifaRank;
      });
    } else {
      // 경기가 시작되지 않은 경우 GROUPS[groupLetter]의 기본 대진 추첨 순서(조 시드 순서) 유지
      sorted = Object.values(stats).sort((a, b) => {
        return GROUPS[groupLetter].indexOf(a.teamCode) - GROUPS[groupLetter].indexOf(b.teamCode);
      });
    }

    groupStandings[groupLetter] = sorted;
  });
}

// 3위 팀 순위 비교
function calculateThirdPlaceStandings() {
  const thirdsList = [];
  
  Object.entries(groupStandings).forEach(([groupLetter, sortedTeams]) => {
    // 조별 계산 결과가 있고 최소 1경기 이상 치러진 경우에만 3위 팀 추출 가능
    if (sortedTeams && sortedTeams.length === 4) {
      const thirdPlaceTeam = sortedTeams[2]; // 0-indexed: 2가 3위
      thirdsList.push({
        group: groupLetter,
        ...thirdPlaceTeam
      });
    }
  });

  // 정렬 규칙: 승점 > 골득실 > 다득점 > 피파랭킹
  thirdsStandings = thirdsList.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return TEAMS[a.teamCode].fifaRank - TEAMS[b.teamCode].fifaRank;
  });
}

// 조별 리그 완료 확인
function isGroupStageComplete() {
  // 12개 조 * 6경기 = 72경기가 모두 스코어 입력되었는지 검사
  let complete = true;
  Object.keys(GROUPS).forEach(groupLetter => {
    for (let i = 0; i < 6; i++) {
      const matchId = `G_${groupLetter}_${i}`;
      if (matchScores[matchId].homeScore === null || matchScores[matchId].awayScore === null) {
        complete = false;
      }
    }
  });
  return complete;
}

// --- 백트래킹을 이용한 32강 3위 팀 매칭 (Annex C) ---
function buildRoundOf32Matches() {
  // 1. 3위 팀 중 상위 8개 조 추출
  const qualifiedThirds = thirdsStandings.slice(0, 8);
  const qualifiedGroups = qualifiedThirds.map(t => t.group).sort(); // 예: ['A', 'C', 'E', 'F', 'G', 'H', 'I', 'L']

  // 2. 이분 매칭 백트래킹 수행
  const assignments = matchThirdPlaceTeams(qualifiedGroups);

  // 3. 32강 매치 완성
  // 32강에 올라갈 조 1위(1st), 조 2위(2nd) 매핑 딕셔너리 구축
  const firsts = {};
  const seconds = {};
  Object.entries(groupStandings).forEach(([groupLetter, sorted]) => {
    firsts[groupLetter] = sorted[0].teamCode;
    seconds[groupLetter] = sorted[1].teamCode;
  });

  // 각 32강 대진 채우기
  for (let matchId = R32_MIN; matchId <= R32_MAX; matchId++) {
    const scheme = R32_FIXED_SCHEME[matchId];
    let homeCode = "";
    let awayCode = "";

    // 홈 팀 결정
    if (scheme.home.startsWith("1")) {
      homeCode = firsts[scheme.home.charAt(1)];
    } else if (scheme.home.startsWith("2")) {
      homeCode = seconds[scheme.home.charAt(1)];
    }

    // 어웨이 팀 결정
    if (scheme.away.startsWith("3rd")) {
      // 백트래킹 매칭 결과를 토대로 해당 슬롯에 지정된 조의 3위 팀 대입
      const matchedGroup = assignments ? assignments[matchId] : null;
      if (matchedGroup) {
        const thirdTeamObj = thirdsStandings.find(t => t.group === matchedGroup);
        awayCode = thirdTeamObj ? thirdTeamObj.teamCode : "";
      } else {
        // 백트래킹 실패 시 비상용 폴백: 상위 3위 팀 중 인덱스로 대충 매핑
        const fallbackIdx = matchId - R32_MIN;
        if (fallbackIdx < qualifiedThirds.length) {
          awayCode = qualifiedThirds[fallbackIdx].teamCode;
        }
      }
    } else if (scheme.away.startsWith("2")) {
      awayCode = seconds[scheme.away.charAt(1)];
    } else if (scheme.away.startsWith("1")) {
      awayCode = firsts[scheme.away.charAt(1)];
    }

    tournamentMatches[matchId].homeCode = homeCode;
    tournamentMatches[matchId].awayCode = awayCode;
  }
}

function clearRoundOf32Matches() {
  for (let id = 73; id <= 104; id++) {
    tournamentMatches[id] = {
      homeCode: "", awayCode: "",
      homeScore: null, awayScore: null,
      pkHome: null, pkAway: null, winner: ""
    };
  }
}

// 3위 팀 매칭 백트래킹 알고리즘
function matchThirdPlaceTeams(qualifiedGroups) {
  const slots = [
    { id: 74, options: ['A', 'B', 'C', 'D', 'F'] },
    { id: 77, options: ['C', 'D', 'F', 'G', 'H'] },
    { id: 79, options: ['B', 'E', 'F', 'I', 'J'] },
    { id: 80, options: ['A', 'E', 'H', 'I', 'J'] },
    { id: 81, options: ['E', 'F', 'G', 'I', 'J'] },
    { id: 84, options: ['D', 'E', 'I', 'J', 'L'] },
    { id: 86, options: ['C', 'E', 'F', 'H', 'I'] },
    { id: 88, options: ['E', 'H', 'I', 'J', 'K'] }
  ];

  const assignment = {};
  const used = new Set();

  function backtrack(slotIndex) {
    if (slotIndex === slots.length) return true;
    const slot = slots[slotIndex];
    for (const group of qualifiedGroups) {
      if (!used.has(group) && slot.options.includes(group)) {
        assignment[slot.id] = group;
        used.add(group);
        if (backtrack(slotIndex + 1)) return true;
        used.delete(group);
        delete assignment[slot.id];
      }
    }
    return false;
  }

  if (backtrack(0)) return assignment;
  return null;
}

// --- 토너먼트 매치 결과 전파 (Round of 32 -> Final) ---
function propagateKnockouts() {
  // 32강전(73)부터 결승전(104)까지 순서대로 계산 및 대진팀 전파 수행
  // 부모 매치의 인덱스는 자식 매치보다 항상 작으므로 단일 패스로 모든 라운드 계산 가능
  for (let matchId = R32_MIN; matchId <= MATCH_FINAL; matchId++) {
    const score = tournamentMatches[matchId];
    
    // 1. 현재 매치의 승자 결정 (스코어가 존재할 경우)
    if (score.homeCode && score.awayCode && score.homeScore !== null && score.awayScore !== null) {
      if (score.homeScore > score.awayScore) {
        score.winner = score.homeCode;
      } else if (score.homeScore < score.awayScore) {
        score.winner = score.awayCode;
      } else {
        // 무승부일 경우 승부차기(PK) 결과를 검사하여 승자 판별
        if (score.pkHome !== null && score.pkAway !== null) {
          score.winner = score.pkHome > score.pkAway ? score.homeCode : score.awayCode;
        } else {
          score.winner = ""; // PK 입력 대기
        }
      }
    } else {
      score.winner = "";
    }

    // 2. 현재 매치 결과를 토대로 하위 매치 대진 팀 세팅 (16강전부터 시작)
    if (matchId >= R16_MIN) {
      const pathway = TOURNAMENT_PATHWAYS[matchId];
      if (pathway) {
        const parent1 = tournamentMatches[pathway.parent1];
        const parent2 = tournamentMatches[pathway.parent2];

        let homeCode = "";
        let awayCode = "";

        if (pathway.isLosers) {
          // 3·4위전: 부모 매치(준결승)의 패자들 간 대결
          homeCode = parent1.winner ? (parent1.winner === parent1.homeCode ? parent1.awayCode : parent1.homeCode) : "";
          awayCode = parent2.winner ? (parent2.winner === parent2.homeCode ? parent2.awayCode : parent2.homeCode) : "";
        } else {
          // 일반 토너먼트: 부모 매치의 승자 대결
          homeCode = parent1.winner || "";
          awayCode = parent2.winner || "";
        }

        // 기존 매치업 정보와 달라질 경우 정보 리셋 후 세팅
        if (tournamentMatches[matchId].homeCode !== homeCode || tournamentMatches[matchId].awayCode !== awayCode) {
          tournamentMatches[matchId].homeCode = homeCode;
          tournamentMatches[matchId].awayCode = awayCode;
          tournamentMatches[matchId].homeScore = null;
          tournamentMatches[matchId].awayScore = null;
          tournamentMatches[matchId].pkHome = null;
          tournamentMatches[matchId].pkAway = null;
          tournamentMatches[matchId].winner = "";
        }
      }
    }
  }
}

// --- 시뮬레이터 가우시안/포아송 기반 엔진 ---
// FIFA 랭킹 가중치를 활용하여 현실감 넘치는 점수 모델 구상
function simulateMatchScore(team1Code, team2Code) {
  const t1 = TEAMS[team1Code];
  const t2 = TEAMS[team2Code];

  // 1. 피파 랭킹 기반 강도 산출 (높을수록 강함)
  // 지수함수를 이용해 상위 랭킹(1위 부근)의 강도 격차를 더 정교하게 반사
  const rating1 = 1200 / (t1.fifaRank + 4);
  const rating2 = 1200 / (t2.fifaRank + 4);

  // 2. 골 기대값 (Lambda) 산출
  let lambda1 = 1.35 * Math.sqrt(rating1 / rating2);
  let lambda2 = 1.35 / Math.sqrt(rating1 / rating2);

  // 3. 공동 개최국 버프 부여 (+10% 기대 득점 증가)
  if (t1.host) lambda1 *= 1.1;
  if (t2.host) lambda2 *= 1.1;

  // 4. 포아송 분포 근사값으로 실제 골수 산출
  const goals1 = poissonRandom(lambda1);
  const goals2 = poissonRandom(lambda2);

  return { goals1, goals2 };
}

// 포아송 난수 생성기
function poissonRandom(lambda) {
  const L = Math.exp(-lambda);
  let k = 0;
  let p = 1.0;
  do {
    k++;
    p *= Math.random();
  } while (p > L && k < 10);
  return k - 1;
}

// 특정 조 시뮬레이션
function simulateGroup(groupLetter) {
  const teamCodes = GROUPS[groupLetter];
  for (let i = 0; i < 6; i++) {
    const matchId = `G_${groupLetter}_${i}`;
    // 실제 경기 결과(API 동기화)만 시뮬레이션에서 건너뜀
    if (actualMatches[matchId]) {
      continue;
    }
    
    // 고정되지 않은 경기는 초기화 후 시뮬레이션
    matchScores[matchId] = { homeScore: null, awayScore: null };
    const scheme = GROUP_MATCH_SCHEME[i];
    const homeCode = teamCodes[scheme.homeIdx];
    const awayCode = teamCodes[scheme.awayIdx];

    const result = simulateMatchScore(homeCode, awayCode);
    matchScores[matchId].homeScore = result.goals1;
    matchScores[matchId].awayScore = result.goals2;
  }
}

// 전체 조별 예선 시뮬레이션
function simulateGroupStage() {
  Object.keys(GROUPS).forEach(groupLetter => {
    simulateGroup(groupLetter);
  });
}

// 전체 토너먼트 시뮬레이션
function simulateKnockoutStage() {
  // 조별 경기가 다 안 채워져 있다면 그냥 먼저 채움
  if (!isGroupStageComplete()) {
    simulateGroupStage();
    calculateAll();
  }

  // 32강부터 결승전까지 차례대로 결과 채워나감
  for (let matchId = R32_MIN; matchId <= MATCH_FINAL; matchId++) {
    const match = tournamentMatches[matchId];
    if (match.homeCode && match.awayCode) {
      // 실제 경기 결과(API 동기화)만 보존
      if (actualMatches[matchId]) {
        continue;
      }
      
      // 고정되지 않은 경기는 리셋 후 재시뮬레이션
      match.homeScore = null;
      match.awayScore = null;
      match.pkHome = null;
      match.pkAway = null;
      match.winner = "";
      const result = simulateMatchScore(match.homeCode, match.awayCode);
      match.homeScore = result.goals1;
      match.awayScore = result.goals2;

      // 무승부일 경우 승부차기 시뮬레이션
      if (result.goals1 === result.goals2) {
        // 승부차기는 최소 3-2 등 결정이 날 때까지 롤링
        // 피파 랭킹 높은 팀에게 52%의 미세한 우위 제공
        const rankHome = TEAMS[match.homeCode].fifaRank;
        const rankAway = TEAMS[match.awayCode].fifaRank;
        const homeAdvantage = rankHome < rankAway ? 0.52 : 0.48;

        let pkH = 0;
        let pkA = 0;
        
        // 5회 킥 기준 시뮬레이션
        for (let j = 0; j < 5; j++) {
          if (Math.random() < (0.75 * (homeAdvantage / 0.5))) pkH++;
          if (Math.random() < (0.75 * ((1 - homeAdvantage) / 0.5))) pkA++;
        }
        
        // 동점 시 서든데스
        while (pkH === pkA) {
          if (Math.random() < 0.7) pkH++;
          if (Math.random() < 0.7) pkA++;
        }

        match.pkHome = pkH;
        match.pkAway = pkA;
      } else {
        match.pkHome = null;
        match.pkAway = null;
      }
      propagateKnockouts();
    }
  }
}

// --- UI 렌더링 및 동기화 업데이트 ---
function updateUI() {
  updateHUDStats();
  renderGroupTablesAndInputs();
  renderThirdsTable();
  renderKnockoutBracket();
  updateChampionBanner();
}

// HUD 스탯 업데이트
function updateHUDStats() {
  let completedGroup = 0;
  let totalGoals = 0;

  // 조별 경기 통계
  Object.values(matchScores).forEach(score => {
    if (score.homeScore !== null && score.awayScore !== null) {
      completedGroup++;
      totalGoals += score.homeScore + score.awayScore;
    }
  });

  // 토너먼트 통계
  let completedKO = 0;
  Object.values(tournamentMatches).forEach(match => {
    if (match.homeCode && match.awayCode && match.homeScore !== null && match.awayScore !== null) {
      completedKO++;
      totalGoals += match.homeScore + match.awayScore;
    }
  });

  const totalCompleted = completedGroup + completedKO;
  const progressPercent = Math.round((totalCompleted / 104) * 100);

  document.getElementById("hdr-progress").textContent = `${progressPercent}%`;
  document.getElementById("hdr-progress-bar").style.width = `${progressPercent}%`;
  document.getElementById("hdr-matches").textContent = `${totalCompleted} / 104`;
  document.getElementById("hdr-goals").textContent = `${totalGoals} 골`;

  document.getElementById("stat-matches-completed").textContent = totalCompleted;
  document.getElementById("stat-total-goals").textContent = totalGoals;
  document.getElementById("stat-avg-goals").textContent = totalCompleted > 0 ? (totalGoals / totalCompleted).toFixed(2) : "0.00";

  // 대한민국 대표팀 상태 표시
  updateKoreaStatus();
}

// 한국팀 상태 계산 및 표시
function updateKoreaStatus() {
  const card = document.getElementById("korea-stat-card");
  const el = document.getElementById("korea-status");
  
  // 한국팀 그룹(A조) 순위 확인
  const groupA = groupStandings["A"];
  if (!groupA) {
    el.textContent = "조별 리그 대기";
    card.style.borderLeftColor = "#ef4444";
    return;
  }

  // 1. 조별리그 경기 수 검사
  const playedMatches = groupA.reduce((sum, t) => sum + t.p, 0) / 2;
  const isKORInGroup = groupA.some(t => t.teamCode === "KOR");
  
  if (!isKORInGroup) {
    el.textContent = "참가 대기";
    return;
  }

  const korStandings = groupA.find(t => t.teamCode === "KOR");
  const korIdx = groupA.findIndex(t => t.teamCode === "KOR");

  if (playedMatches === 0) {
    el.textContent = "조별 예선 대기";
    card.style.borderLeftColor = "var(--card-border)";
    return;
  } else if (playedMatches < 6) {
    el.textContent = `A조 ${korIdx + 1}위 (진행 중)`;
    card.style.borderLeftColor = "#ef4444";
    return;
  }

  // 조별리그 종료 후 상태 검증
  // 1) 32강 확인
  let survived = false;
  let currentRound = "조별 리그 탈락 ❌";

  // 조 1, 2위는 다이렉트 진출
  if (korIdx < 2) {
    survived = true;
    currentRound = "32강 진출 🎉";
  } else if (korIdx === 2) {
    // 3위 팀 비교 검사
    const inTopThirds = thirdsStandings.slice(0, 8).some(t => t.teamCode === "KOR");
    if (inTopThirds) {
      survived = true;
      currentRound = "32강 진출 (와일드카드) 🃏";
    }
  }

  if (survived) {
    // 본선 진행률 검사
    // 32강 승리 여부
    const r32Match = Object.entries(tournamentMatches).find(([id, m]) => 
      (m.homeCode === "KOR" || m.awayCode === "KOR") && parseInt(id) <= R32_MAX
    );

    if (r32Match) {
      const matchId = parseInt(r32Match[0]);
      const match = r32Match[1];
      
      if (match.winner === "KOR") {
        currentRound = "16강 진출! 🇰🇷";
        // 16강 경기 확인
        const r16Match = Object.entries(tournamentMatches).find(([id, m]) => 
          (m.homeCode === "KOR" || m.awayCode === "KOR") && parseInt(id) >= R16_MIN && parseInt(id) <= R16_MAX
        );

        if (r16Match) {
          const match16 = r16Match[1];
          if (match16.winner === "KOR") {
            currentRound = "8강 신화! 🔥";
            // 8강 확인
            const qfMatch = Object.entries(tournamentMatches).find(([id, m]) => 
              (m.homeCode === "KOR" || m.awayCode === "KOR") && parseInt(id) >= QF_MIN && parseInt(id) <= QF_MAX
            );

            if (qfMatch) {
              const matchQF = qfMatch[1];
              if (matchQF.winner === "KOR") {
                currentRound = "4강 기적! 🌟";
                // 4강 확인
                const sfMatch = Object.entries(tournamentMatches).find(([id, m]) => 
                  (m.homeCode === "KOR" || m.awayCode === "KOR") && parseInt(id) >= SF_MIN && parseInt(id) <= SF_MAX
                );

                if (sfMatch) {
                  const matchSF = sfMatch[1];
                  if (matchSF.winner === "KOR") {
                    currentRound = "결승전 돌풍! ⚡";
                    // 결승전 확인
                    const finalMatch = tournamentMatches[MATCH_FINAL];
                    if (finalMatch.winner === "KOR") {
                      currentRound = "🏆 우승국 등극! 🌟🇰🇷🏆";
                    } else if (finalMatch.winner && finalMatch.winner !== "KOR") {
                      currentRound = "준우승 🥈";
                    }
                  } else if (matchSF.winner) {
                    currentRound = "4강 패배 (3위 결정전행)";
                    const play3rd = tournamentMatches[MATCH_THIRD_PLACE];
                    if (play3rd.winner === "KOR") {
                      currentRound = "최종 3위 🥉";
                    } else if (play3rd.winner) {
                      currentRound = "최종 4위 🌟";
                    }
                  }
                }
              } else if (matchQF.winner) {
                currentRound = "8강 탈락 (최종 8강) 👏";
              }
            }
          } else if (match16.winner) {
            currentRound = "16강 탈락 (최종 16강) 👍";
          }
        }
      } else if (match.winner) {
        currentRound = "32강 탈락 (최종 32강) 👏";
      }
    }
  }

  el.textContent = currentRound;
  card.style.borderLeftColor = survived ? "#00f5a0" : "#ef4444";
}

// 조별 순위표 및 입력폼 렌더링
function renderGroupTablesAndInputs() {
  Object.keys(GROUPS).forEach(groupLetter => {
    const tbody = document.getElementById(`table-body-${groupLetter}`);
    if (!tbody) return;

    tbody.innerHTML = "";
    const standings = groupStandings[groupLetter];
    const topThirds = thirdsStandings.slice(0, 8).map(t => t.teamCode);
    const hasStarted = standings.some(t => t.p > 0);

    standings.forEach((row, idx) => {
      const team = TEAMS[row.teamCode];
      const tr = document.createElement("tr");

      // 다이렉트 진출(1, 2위) 및 3위 와일드카드 진출 시각화 (경기가 진행된 조만 적용)
      if (hasStarted) {
        if (idx < 2) {
          tr.className = "qualify-direct";
        } else if (idx === 2) {
          // 와일드카드 진출 조건 검증
          if (isGroupStageComplete() && topThirds.includes(row.teamCode)) {
            tr.className = "qualify-direct"; // 진출 완료된 3위팀
          } else {
            tr.className = "qualify-third"; // 진출 대기선
          }
        }
      }

      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td>
          <div class="team-cell">
            <span class="flag-emoji">${team.flag}</span>
            <span class="team-name" title="${team.name}">${team.name}</span>
          </div>
        </td>
        <td>${row.p}</td>
        <td>${row.w}</td>
        <td>${row.d}</td>
        <td>${row.l}</td>
        <td>${row.gd > 0 ? "+" + row.gd : row.gd}</td>
        <td>${row.gf}</td>
        <td><strong>${row.pts}</strong></td>
      `;
      tbody.appendChild(tr);
    });

    // 기존 입력창 값 동기화 및 이미 완료된 경기(실제 경기/동기화) 비활성화
    for (let i = 0; i < 6; i++) {
      const matchId = `G_${groupLetter}_${i}`;
      const score = matchScores[matchId];
      const homeInput = document.getElementById(`score-${matchId}-home`);
      const awayInput = document.getElementById(`score-${matchId}-away`);
      
      if (homeInput && awayInput) {
        homeInput.value = score.homeScore !== null ? score.homeScore : "";
        awayInput.value = score.awayScore !== null ? score.awayScore : "";
        
        // 실제 결과로 고정된(actual) 경우에만 입력창 잠금 및 시각적 구분
        if (actualMatches[matchId]) {
          homeInput.setAttribute("disabled", "true");
          awayInput.setAttribute("disabled", "true");
          homeInput.closest('.match-item').classList.add('actual-match');
        } else {
          homeInput.removeAttribute("disabled");
          awayInput.removeAttribute("disabled");
          homeInput.closest('.match-item').classList.remove('actual-match');
        }
      }
    }
  });
}

// 3위 팀 순위표 렌더링
function renderThirdsTable() {
  const tbody = document.getElementById("thirds-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  const hasStarted = thirdsStandings.some(t => t.p > 0);
  if (thirdsStandings.length === 0 || !hasStarted) {
    tbody.innerHTML = `
      <tr>
        <td colspan="11" class="placeholder-text" style="padding: 30px;">
          조별리그 경기가 하나 이상 진행되면 비교 순위가 여기에 실시간으로 표시됩니다.
        </td>
      </tr>
    `;
    return;
  }

  const complete = isGroupStageComplete();

  thirdsStandings.forEach((row, idx) => {
    const team = TEAMS[row.teamCode];
    const tr = document.createElement("tr");
    
    const isQualifying = idx < 8;
    tr.className = complete ? (isQualifying ? "row-qualify" : "row-eliminate") : "";

    let statusText = complete ? "탈락" : "진출 대기";
    let badgeClass = "badge-neutral";
    
    if (isQualifying) {
      statusText = complete ? "진출 확정" : "진출권 유지";
      badgeClass = "badge-success";
    } else if (complete) {
      badgeClass = "badge-danger";
    }

    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><strong>Group ${row.group}</strong></td>
      <td>
        <div class="team-cell" style="justify-content: center;">
          <span class="flag-emoji">${team.flag}</span>
          <span class="team-name" title="${team.name}">${team.name}</span>
        </div>
      </td>
      <td>${row.p}</td>
      <td>${row.w}</td>
      <td>${row.d}</td>
      <td>${row.l}</td>
      <td>${row.gd > 0 ? "+" + row.gd : row.gd}</td>
      <td>${row.gf}</td>
      <td><strong>${row.pts}</strong></td>
      <td><span class="badge ${badgeClass}">${statusText}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// 토너먼트 대진표 렌더링
function renderKnockoutBracket() {
  const isComplete = isGroupStageComplete();

  // 1. 대진표 컨테이너 초기화
  renderRoundColumn("r32-matches", R32_MIN, R32_MAX, "R32");
  renderRoundColumn("r16-matches", R16_MIN, R16_MAX, "R16");
  renderRoundColumn("qf-matches", QF_MIN, QF_MAX, "QF");
  renderRoundColumn("sf-matches", SF_MIN, SF_MAX, "SF");
  
  // 단독 대치 컨테이너용
  renderSingleMatchCard("final-match-container", MATCH_FINAL, "FINAL");
  renderSingleMatchCard("third-place-match-container", MATCH_THIRD_PLACE, "3rdPlace");
}

function renderRoundColumn(containerId, minId, maxId, roundKey) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  
  for (let matchId = minId; matchId <= maxId; matchId++) {
    const card = buildMatchCardElement(matchId, roundKey);
    container.appendChild(card);
  }
}

function renderSingleMatchCard(containerId, matchId, roundKey) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  const card = buildMatchCardElement(matchId, roundKey);
  container.appendChild(card);
}

// 하나의 매치 카드 DOM 구성
function buildMatchCardElement(matchId, roundKey) {
  const match = tournamentMatches[matchId];
  const card = document.createElement("div");
  card.className = "ko-match-card";

  // 한국팀 출전 시 외곽선 빨간색 하이라이트 효과 적용
  const hasKorea = match.homeCode === "KOR" || match.awayCode === "KOR";
  if (hasKorea) {
    card.classList.add("korea-highlight");
  }

  const homeTeam = match.homeCode ? TEAMS[match.homeCode] : null;
  const awayTeam = match.awayCode ? TEAMS[match.awayCode] : null;

  const homeLabel = homeTeam ? homeTeam.name : getPlaceholderLabel(matchId, "home");
  const awayLabel = awayTeam ? awayTeam.name : getPlaceholderLabel(matchId, "away");

  const homeFlag = homeTeam ? homeTeam.flag : "❓";
  const awayFlag = awayTeam ? awayTeam.flag : "❓";

  const isHomeWinner = match.winner && match.winner === match.homeCode;
  const isAwayWinner = match.winner && match.winner === match.awayCode;

  // 무승부 PK 상황 유무 검사
  const showPK = match.homeScore !== null && match.awayScore !== null && match.homeScore === match.awayScore;
  
  const isFinished = actualMatches[matchId] === true;
  const isHomeDisabled = !homeTeam || !awayTeam || isFinished;
  const isAwayDisabled = !homeTeam || !awayTeam || isFinished;

  if (isFinished) {
    card.classList.add('actual-match');
  } else {
    card.classList.remove('actual-match');
  }

  card.innerHTML = `
    <div class="ko-match-header">
      <span>Match ${matchId}</span>
      <span class="ko-match-sim" data-id="${matchId}" title="이 경기 시뮬레이션">⚡</span>
    </div>
    
    <!-- 홈 팀 행 -->
    <div class="ko-team-row ${isHomeWinner ? 'winner' : ''} ${match.winner && !isHomeWinner ? 'loser' : ''}">
      <div class="ko-team-info">
        <span class="flag-emoji">${homeFlag}</span>
        <span class="team-name" title="${homeLabel}">${homeLabel}</span>
      </div>
      <div class="ko-score-block">
        ${showPK ? `<input type="number" class="pk-input ko-pk-input" id="pk-${matchId}-home" data-match="${matchId}" data-side="home" placeholder="PK" value="${match.pkHome !== null ? match.pkHome : ''}" ${isFinished ? 'disabled' : ''}>` : ''}
        <input type="number" min="0" max="99" class="score-input ko-score ko-score-input" 
               id="score-${matchId}-home" data-match="${matchId}" data-side="home" placeholder="-" 
               value="${match.homeScore !== null ? match.homeScore : ''}" ${isHomeDisabled ? 'disabled' : ''}>
      </div>
    </div>
    
    <!-- 어웨이 팀 행 -->
    <div class="ko-team-row ${isAwayWinner ? 'winner' : ''} ${match.winner && !isAwayWinner ? 'loser' : ''}">
      <div class="ko-team-info">
        <span class="flag-emoji">${awayFlag}</span>
        <span class="team-name" title="${awayLabel}">${awayLabel}</span>
      </div>
      <div class="ko-score-block">
        ${showPK ? `<input type="number" class="pk-input ko-pk-input" id="pk-${matchId}-away" data-match="${matchId}" data-side="away" placeholder="PK" value="${match.pkAway !== null ? match.pkAway : ''}" ${isFinished ? 'disabled' : ''}>` : ''}
        <input type="number" min="0" max="99" class="score-input ko-score ko-score-input" 
               id="score-${matchId}-away" data-match="${matchId}" data-side="away" placeholder="-" 
               value="${match.awayScore !== null ? match.awayScore : ''}" ${isAwayDisabled ? 'disabled' : ''}>
      </div>
    </div>
  `;

  // 개별 경기 시뮬레이션 이벤트
  card.querySelector(".ko-match-sim").addEventListener("click", () => {
    simulateSingleKnockout(matchId);
  });

  // 경기 점수 변경 핸들러
  card.querySelectorAll(".ko-score-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const side = e.target.getAttribute("data-side");
      const val = e.target.value === "" ? null : parseInt(e.target.value, 10);
      
      if (side === "home") {
        match.homeScore = val;
      } else {
        match.awayScore = val;
      }

      // 수동 입력 완료 시 고정(Lock) 처리
      if (match.homeScore !== null && match.awayScore !== null) {
        lockedMatches[matchId] = true;
      } else {
        delete lockedMatches[matchId];
      }
      
      calculateAll();
      updateUI();
    });
  });

  // 승부차기 점수 변경 핸들러
  card.querySelectorAll(".ko-pk-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const side = e.target.getAttribute("data-side");
      const val = e.target.value === "" ? null : parseInt(e.target.value, 10);
      
      if (side === "home") {
        match.pkHome = val;
      } else {
        match.pkAway = val;
      }

      // 승부차기 입력 완료 시 고정(Lock) 처리
      if (match.pkHome !== null && match.pkAway !== null) {
        lockedMatches[matchId] = true;
      }
      
      calculateAll();
      updateUI();
    });
  });

  return card;
}

// 미결정 경기 대진팀 설명 텍스트
function getPlaceholderLabel(matchId, side) {
  if (matchId <= R32_MAX) {
    const scheme = R32_FIXED_SCHEME[matchId];
    const rawVal = side === "home" ? scheme.home : scheme.away;
    if (rawVal.startsWith("3rd")) {
      return `조 3위 와일드카드`;
    }
    const rank = rawVal.startsWith("1") ? "1위" : "2위";
    const group = rawVal.charAt(1);
    return `${group}조 ${rank}`;
  } else {
    const path = TOURNAMENT_PATHWAYS[matchId];
    if (path.isLosers) {
      return `M${side === "home" ? path.parent1 : path.parent2} 패자`;
    }
    return `M${side === "home" ? path.parent1 : path.parent2} 승자`;
  }
}

// 개별 토너먼트 경기 시뮬레이션
function simulateSingleKnockout(matchId) {
  const match = tournamentMatches[matchId];
  if (!match.homeCode || !match.awayCode) {
    showToast("⚠️ 아직 진출 국가가 결정되지 않았습니다.");
    return;
  }

  // 실제 완료된 경기는 시뮬레이션 불가 처리
  if (actualMatches[matchId]) {
    showToast("⚠️ 이미 종료된 실제 경기입니다. 결과를 변경할 수 없습니다.");
    return;
  }

  const result = simulateMatchScore(match.homeCode, match.awayCode);
  match.homeScore = result.goals1;
  match.awayScore = result.goals2;

  if (result.goals1 === result.goals2) {
    // 동점 시 승부차기 강제 시뮬레이션
    const rankHome = TEAMS[match.homeCode].fifaRank;
    const rankAway = TEAMS[match.awayCode].fifaRank;
    const homeAdvantage = rankHome < rankAway ? 0.52 : 0.48;

    let pkH = 0;
    let pkA = 0;
    
    for (let j = 0; j < 5; j++) {
      if (Math.random() < (0.75 * (homeAdvantage / 0.5))) pkH++;
      if (Math.random() < (0.75 * ((1 - homeAdvantage) / 0.5))) pkA++;
    }
    
    while (pkH === pkA) {
      if (Math.random() < 0.7) pkH++;
      if (Math.random() < 0.7) pkA++;
    }

    match.pkHome = pkH;
    match.pkAway = pkA;
  } else {
    match.pkHome = null;
    match.pkAway = null;
  }

  calculateAll();
  updateUI();
  showToast(`⚡ Match ${matchId} 시뮬레이션 완료!`);
}

// 챔피언 배너 업데이트
function updateChampionBanner() {
  const final = tournamentMatches[MATCH_FINAL];
  const infoEl = document.getElementById("champion-info");
  
  if (final.winner) {
    const winnerTeam = TEAMS[final.winner];
    const isKOR = final.winner === "KOR";
    
    infoEl.innerHTML = `
      <div class="champ-display">
        <span class="champ-flag">${winnerTeam.flag}</span>
        <span class="champ-name">${winnerTeam.name}</span>
        <span class="champ-stats">${isKOR ? '🌟 역사상 최초 우승 달성! 대한민국 만세! 🌟' : `피파 랭킹 ${winnerTeam.fifaRank}위 · 우승을 축하합니다!`}</span>
      </div>
    `;
    
    // 챔피언 카드 테두리 골드빛 강화
    const champCard = document.querySelector(".champion-card");
    champCard.style.borderColor = "var(--color-gold)";
    champCard.style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.3)";
  } else {
    infoEl.innerHTML = `
      <p class="placeholder-text">모든 토너먼트 경기가 끝나면<br>여기에 우승국이 발표됩니다!</p>
    `;
    const champCard = document.querySelector(".champion-card");
    champCard.style.borderColor = "";
    champCard.style.boxShadow = "";
  }
}

// --- 토스트 알림창 헬퍼 ---
function showToast(message) {
  // 기존 토스트 제거
  const oldToast = document.querySelector(".toast-msg");
  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerHTML = `<span>📢</span> <span>${message}</span>`;
  document.body.appendChild(toast);

  // 3.5초 뒤 제거
  setTimeout(() => {
    toast.style.animation = "slideIn 0.3s ease reverse forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// 몬테카를로 10,000회 시뮬레이션 엔진 및 UI 연동
// ==========================================================================

let mcStats = {
  totalRuns: 0,
  korRounds: {
    groupOut: 0,
    r32: 0,
    r16: 0,
    qf: 0,
    sf: 0,
    final: 0,
    champ: 0
  },
  r32Opponents: {}
};

// 몬테카를로 시뮬레이션 비동기 실행 및 프로그레스바 렌더링
function startMonteCarloSimulation() {
  const overlay = document.getElementById("loading-overlay");
  const bar = document.getElementById("loader-progress-bar");
  const statusText = document.getElementById("loader-status");

  // 로딩 오버레이 노출 및 리셋
  overlay.classList.remove("fade-out");
  overlay.style.display = "flex";
  bar.style.width = "0%";
  statusText.textContent = "시뮬레이션 분석 준비 중...";

  mcStats = {
    totalRuns: 0,
    korRounds: { groupOut: 0, r32: 0, r16: 0, qf: 0, sf: 0, final: 0, champ: 0 },
    r32Opponents: {}
  };

  const totalRuns = 10000;
  const chunkSize = 1000; // 프레임 드랍을 막기 위한 청크 분할 시뮬레이션
  let currentRun = 0;

  function runNextChunk() {
    const endRun = Math.min(currentRun + chunkSize, totalRuns);
    
    for (let run = currentRun; run < endRun; run++) {
      const result = runSingleWorldCupSimulation();
      mcStats.korRounds[result.korStage]++;
      if (result.korR32Opponent) {
        mcStats.r32Opponents[result.korR32Opponent] = (mcStats.r32Opponents[result.korR32Opponent] || 0) + 1;
      }
    }
    
    currentRun = endRun;
    mcStats.totalRuns = currentRun;
    const progress = Math.round((currentRun / totalRuns) * 100);
    bar.style.width = `${progress}%`;
    statusText.textContent = `시뮬레이션 진행률: ${currentRun.toLocaleString()} / 10,000 회 분석 완료`;

    if (currentRun < totalRuns) {
      requestAnimationFrame(runNextChunk); // 브라우저가 프로그레스바를 다시 렌더링할 시간을 양보
    } else {
      setTimeout(() => {
        overlay.classList.add("fade-out");
        renderMonteCarloUI();
      }, 600);
    }
  }

  // 부드러운 로딩 연출을 위해 약간의 딜레이 후 시작
  setTimeout(runNextChunk, 800);
}

// 몬테카를로 분석 결과 카드 UI 렌더링
function renderMonteCarloUI() {
  const container = document.getElementById("mc-results-container");
  if (!container) return;

  const total = mcStats.totalRuns;
  const rounds = mcStats.korRounds;

  const pGroupOut = (rounds.groupOut / total) * 100;
  const pR32 = ((total - rounds.groupOut) / total) * 100;
  const pR16 = ((rounds.r16 + rounds.qf + rounds.sf + rounds.final + rounds.champ) / total) * 100;
  const pQF = ((rounds.qf + rounds.sf + rounds.final + rounds.champ) / total) * 100;
  const pSF = ((rounds.sf + rounds.final + rounds.champ) / total) * 100;
  const pFinal = ((rounds.final + rounds.champ) / total) * 100;
  const pChamp = (rounds.champ / total) * 100;

  const data = [
    { label: "조별 리그 탈락률", pct: pGroupOut, color: "var(--color-loss)" },
    { label: "32강 진출 성공률", pct: pR32, color: "var(--color-win)" },
    { label: "16강 진출 확률", pct: pR16, color: "var(--accent-primary)" },
    { label: "8강 진출 확률", pct: pQF, color: "var(--accent-secondary)" },
    { label: "4강 진출 확률", pct: pSF, color: "#a855f7" },
    { label: "결승 진출 확률", pct: pFinal, color: "#ec4899" },
    { label: "우승 (🏆치어 업)", pct: pChamp, color: "var(--color-gold)" }
  ];

  container.innerHTML = data.map(item => `
    <div class="mc-result-item">
      <div class="mc-item-header">
        <span class="mc-item-label">${item.label}</span>
        <span class="mc-item-pct">${item.pct.toFixed(2)}%</span>
      </div>
      <div class="mc-bar-container">
        <div class="mc-bar-fill" style="width: ${item.pct}%; background: ${item.color}; box-shadow: 0 0 6px ${item.color}80;"></div>
      </div>
    </div>
  `).join("");

  // 예상 32강 상대 리스트 렌더링
  const oppContainer = document.getElementById("mc-opponent-container");
  if (!oppContainer) return;

  const sortedOpps = Object.entries(mcStats.r32Opponents)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);

  if (sortedOpps.length > 0) {
    const badges = sortedOpps.map(([code, count]) => {
      const team = TEAMS[code];
      const pct = (count / total) * 100;
      return `
        <div class="mc-opponent-badge">
          <span>${team.flag}</span>
          <span>${team.name}</span>
          <span class="pct">${pct.toFixed(1)}%</span>
        </div>
      `;
    }).join("");

    oppContainer.innerHTML = `
      <h4 class="mc-opponent-title">💡 가장 확률이 높은 32강 예상 맞대결 상대 (Top 4)</h4>
      <div class="mc-opponent-list">${badges}</div>
    `;
  } else {
    oppContainer.innerHTML = "";
  }
}

// 몬테카를로 분석용 무부하 단일 월드컵 시뮬레이터 (로컬 변수로만 동작)
function runSingleWorldCupSimulation() {
  const standings = {};
  Object.entries(GROUPS).forEach(([groupLetter, teamCodes]) => {
    standings[groupLetter] = teamCodes.map(code => ({
      code, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0
    }));
  });

  // 12개 조 리그 시뮬레이션
  Object.entries(GROUPS).forEach(([groupLetter, teamCodes]) => {
    const groupStats = standings[groupLetter];
    for (let i = 0; i < 6; i++) {
      const matchId = `G_${groupLetter}_${i}`;
      const scheme = GROUP_MATCH_SCHEME[i];
      const homeIdx = scheme.homeIdx;
      const awayIdx = scheme.awayIdx;
      
      const homeCode = teamCodes[homeIdx];
      const awayCode = teamCodes[awayIdx];

      let g1, g2;
      // 글로벌 matchScores에 실제 경기 결과(actual)가 등록되어 있는지 체크
      if (actualMatches[matchId]) {
        const globalScore = matchScores[matchId];
        g1 = globalScore.homeScore;
        g2 = globalScore.awayScore;
      } else {
        const t1 = TEAMS[homeCode];
        const t2 = TEAMS[awayCode];
        const rating1 = 1200 / (t1.fifaRank + 4);
        const rating2 = 1200 / (t2.fifaRank + 4);
        let lambda1 = 1.35 * Math.sqrt(rating1 / rating2);
        let lambda2 = 1.35 / Math.sqrt(rating1 / rating2);
        if (t1.host) lambda1 *= 1.1;
        if (t2.host) lambda2 *= 1.1;

        g1 = poissonRandom(lambda1);
        g2 = poissonRandom(lambda2);
      }

      const hStat = groupStats[homeIdx];
      const aStat = groupStats[awayIdx];

      hStat.p++;
      aStat.p++;
      hStat.gf += g1;
      hStat.ga += g2;
      aStat.gf += g2;
      aStat.ga += g1;

      if (g1 > g2) {
        hStat.w++;
        hStat.pts += 3;
        aStat.l++;
      } else if (g1 < g2) {
        aStat.w++;
        aStat.pts += 3;
        hStat.l++;
      } else {
        hStat.d++;
        hStat.pts += 1;
        aStat.d++;
        aStat.pts += 1;
      }
      hStat.gd = hStat.gf - hStat.ga;
      aStat.gd = aStat.gf - aStat.ga;
    }

    // 그룹 순위 정렬
    groupStats.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.gd !== a.gd) return b.gd - a.gd;
      if (b.gf !== a.gf) return b.gf - a.gf;
      return TEAMS[a.code].fifaRank - TEAMS[b.code].fifaRank;
    });
  });

  // 3위 팀 순위 산출
  const thirds = Object.entries(standings).map(([groupLetter, sorted]) => {
    return { group: groupLetter, ...sorted[2] };
  });
  thirds.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return TEAMS[a.code].fifaRank - TEAMS[b.code].fifaRank;
  });

  // 대한민국 Group A 통과 판별
  const groupA = standings['A'];
  const korIdx = groupA.findIndex(t => t.code === 'KOR');
  let survived = false;
  let korStage = 'groupOut';

  if (korIdx < 2) {
    survived = true;
    korStage = 'r32';
  } else if (korIdx === 2) {
    const inTop8Thirds = thirds.slice(0, 8).some(t => t.code === 'KOR');
    if (inTop8Thirds) {
      survived = true;
      korStage = 'r32';
    }
  }

  // 조별 예선에서 탈락 시 연산 단축을 위해 즉시 리턴
  if (!survived) {
    return { korStage: 'groupOut', korR32Opponent: null };
  }

  // 8개 와일드카드 3위 팀 대진 백트래킹 매칭
  const qualifiedThirds = thirds.slice(0, 8);
  const qualifiedGroups = qualifiedThirds.map(t => t.group).sort();
  const assignments = matchThirdPlaceTeamsLocal(qualifiedGroups);

  const firsts = {};
  const seconds = {};
  Object.entries(standings).forEach(([groupLetter, sorted]) => {
    firsts[groupLetter] = sorted[0].code;
    seconds[groupLetter] = sorted[1].code;
  });

  // 로컬 토너먼트 매치북 초기화
  const localMatches = {};
  for (let matchId = R32_MIN; matchId <= MATCH_FINAL; matchId++) {
    localMatches[matchId] = { homeCode: "", awayCode: "", winner: "" };
  }

  // 32강 매치 세팅
  for (let matchId = R32_MIN; matchId <= R32_MAX; matchId++) {
    const scheme = R32_FIXED_SCHEME[matchId];
    let homeCode = "";
    let awayCode = "";

    if (scheme.home.startsWith("1")) {
      homeCode = firsts[scheme.home.charAt(1)];
    } else if (scheme.home.startsWith("2")) {
      homeCode = seconds[scheme.home.charAt(1)];
    }

    if (scheme.away.startsWith("3rd")) {
      const matchedGroup = assignments ? assignments[matchId] : null;
      if (matchedGroup) {
        const thirdTeamObj = thirds.find(t => t.group === matchedGroup);
        awayCode = thirdTeamObj ? thirdTeamObj.code : "";
      } else {
        const fallbackIdx = matchId - R32_MIN;
        if (fallbackIdx < qualifiedThirds.length) {
          awayCode = qualifiedThirds[fallbackIdx].code;
        }
      }
    } else if (scheme.away.startsWith("2")) {
      awayCode = seconds[scheme.away.charAt(1)];
    } else if (scheme.away.startsWith("1")) {
      awayCode = firsts[scheme.away.charAt(1)];
    }

    localMatches[matchId].homeCode = homeCode;
    localMatches[matchId].awayCode = awayCode;
  }

  // 본선 토너먼트 시뮬레이션 수행
  for (let matchId = R32_MIN; matchId <= MATCH_FINAL; matchId++) {
    const m = localMatches[matchId];
    
    if (matchId >= R16_MIN) {
      const pathway = TOURNAMENT_PATHWAYS[matchId];
      if (pathway) {
        const parent1 = localMatches[pathway.parent1];
        const parent2 = localMatches[pathway.parent2];
        if (pathway.isLosers) {
          m.homeCode = parent1.winner ? (parent1.winner === parent1.homeCode ? parent1.awayCode : parent1.homeCode) : "";
          m.awayCode = parent2.winner ? (parent2.winner === parent2.homeCode ? parent2.awayCode : parent2.homeCode) : "";
        } else {
          m.homeCode = parent1.winner || "";
          m.awayCode = parent2.winner || "";
        }
      }
    }

    if (m.homeCode && m.awayCode) {
      // 글로벌 tournamentMatches에 실제 결과(actual)가 존재하고 매치업 국가가 동일하다면 그대로 사용
      if (actualMatches[matchId]) {
        const globalKO = tournamentMatches[matchId];
        if (globalKO && globalKO.homeCode === m.homeCode && globalKO.awayCode === m.awayCode) {
          m.winner = globalKO.winner;
        } else {
          m.winner = simulateWinnerLocal(m.homeCode, m.awayCode);
        }
      } else {
        m.winner = simulateWinnerLocal(m.homeCode, m.awayCode);
      }
    }
  }

  // 대한민국의 대진 경로 추적
  let koreaMatch = Object.keys(localMatches).find(id => id <= 88 && (localMatches[id].homeCode === 'KOR' || localMatches[id].awayCode === 'KOR'));
  koreaMatch = parseInt(koreaMatch);
  const opp = localMatches[koreaMatch].homeCode === 'KOR' ? localMatches[koreaMatch].awayCode : localMatches[koreaMatch].homeCode;

  if (localMatches[koreaMatch].winner !== 'KOR') {
    return { korStage: 'r32', korR32Opponent: opp };
  }

  // 16강 진출 여부 확인
  let nextMatchId = Object.keys(TOURNAMENT_PATHWAYS).find(id => TOURNAMENT_PATHWAYS[id].parent1 === koreaMatch || TOURNAMENT_PATHWAYS[id].parent2 === koreaMatch);
  nextMatchId = parseInt(nextMatchId);
  if (localMatches[nextMatchId].winner !== 'KOR') {
    return { korStage: 'r16', korR32Opponent: opp };
  }

  // 8강 진출 여부 확인
  koreaMatch = nextMatchId;
  nextMatchId = Object.keys(TOURNAMENT_PATHWAYS).find(id => TOURNAMENT_PATHWAYS[id].parent1 === koreaMatch || TOURNAMENT_PATHWAYS[id].parent2 === koreaMatch);
  nextMatchId = parseInt(nextMatchId);
  if (localMatches[nextMatchId].winner !== 'KOR') {
    return { korStage: 'qf', korR32Opponent: opp };
  }

  // 4강 진출 여부 확인
  koreaMatch = nextMatchId;
  nextMatchId = Object.keys(TOURNAMENT_PATHWAYS).find(id => TOURNAMENT_PATHWAYS[id].parent1 === koreaMatch || TOURNAMENT_PATHWAYS[id].parent2 === koreaMatch);
  nextMatchId = parseInt(nextMatchId);
  if (localMatches[nextMatchId].winner !== 'KOR') {
    return { korStage: 'sf', korR32Opponent: opp };
  }

  // 결승/우승 검사
  if (localMatches[104].winner === 'KOR') {
    return { korStage: 'champ', korR32Opponent: opp };
  } else {
    return { korStage: 'final', korR32Opponent: opp };
  }
}

// 몬테카를로 내부용 경기 우승자 판별 (PK 판정 포함)
function simulateWinnerLocal(code1, code2) {
  const t1 = TEAMS[code1];
  const t2 = TEAMS[code2];
  const rating1 = 1200 / (t1.fifaRank + 4);
  const rating2 = 1200 / (t2.fifaRank + 4);
  let lambda1 = 1.35 * Math.sqrt(rating1 / rating2);
  let lambda2 = 1.35 / Math.sqrt(rating1 / rating2);
  if (t1.host) lambda1 *= 1.1;
  if (t2.host) lambda2 *= 1.1;

  const g1 = poissonRandom(lambda1);
  const g2 = poissonRandom(lambda2);

  if (g1 > g2) return code1;
  if (g1 < g2) return code2;

  // 승부차기 시뮬레이션 (랭킹이 높은 팀에게 52% 확률적 이점 부여)
  const rankHome = t1.fifaRank;
  const rankAway = t2.fifaRank;
  const homeAdvantage = rankHome < rankAway ? 0.52 : 0.48;
  return Math.random() < homeAdvantage ? code1 : code2;
}

// 몬테카를로 내부용 3위 매치 백트래킹 포뮬러
function matchThirdPlaceTeamsLocal(qualifiedGroups) {
  const slots = [
    { id: 74, options: ['A', 'B', 'C', 'D', 'F'] },
    { id: 77, options: ['C', 'D', 'F', 'G', 'H'] },
    { id: 79, options: ['B', 'E', 'F', 'I', 'J'] },
    { id: 80, options: ['A', 'E', 'H', 'I', 'J'] },
    { id: 81, options: ['E', 'F', 'G', 'I', 'J'] },
    { id: 84, options: ['D', 'E', 'I', 'J', 'L'] },
    { id: 86, options: ['C', 'E', 'F', 'H', 'I'] },
    { id: 88, options: ['E', 'H', 'I', 'J', 'K'] }
  ];

  const assignment = {};
  const used = new Set();

  function backtrack(slotIndex) {
    if (slotIndex === slots.length) return true;
    const slot = slots[slotIndex];
    for (const group of qualifiedGroups) {
      if (!used.has(group) && slot.options.includes(group)) {
        assignment[slot.id] = group;
        used.add(group);
        if (backtrack(slotIndex + 1)) return true;
        used.delete(group);
        delete assignment[slot.id];
      }
    }
    return false;
  }

  if (backtrack(0)) return assignment;
  return null;
}

// ==========================================================================
// 실제 월드컵 경기 결과 API 연동 및 파싱 엔진 (CORS 대응 및 팀 매핑)
// ==========================================================================

const ENGLISH_NAME_TO_CODE = {
  "Mexico": "MEX", "South Africa": "RSA", "South Korea": "KOR", "Korea Republic": "KOR", "South Korea Republic": "KOR", "Czech Republic": "CZE", "Czechia": "CZE",
  "Canada": "CAN", "Bosnia and Herzegovina": "BIH", "Bosnia-Herzegovina": "BIH", "Qatar": "QAT", "Switzerland": "SUI",
  "Brazil": "BRA", "Morocco": "MAR", "Scotland": "SCO", "Haiti": "HAI",
  "United States": "USA", "USA": "USA", "Paraguay": "PAR", "Australia": "AUS", "Turkey": "TUR", "Türkiye": "TUR",
  "Germany": "GER", "Ecuador": "ECU", "Ivory Coast": "CIV", "Cote d'Ivoire": "CIV", "Curaçao": "CUW", "Curacao": "CUW",
  "Netherlands": "NED", "Japan": "JPN", "Sweden": "SWE", "Tunisia": "TUN",
  "Belgium": "BEL", "Egypt": "EGY", "Iran": "IRN", "New Zealand": "NZL",
  "Spain": "ESP", "Uruguay": "URU", "Saudi Arabia": "KSA", "Cape Verde": "CPV", "Cabo Verde": "CPV", "Cape Verde Islands": "CPV",
  "France": "FRA", "Senegal": "SEN", "Iraq": "IRQ", "Norway": "NOR",
  "Argentina": "ARG", "Algeria": "ALG", "Austria": "AUT", "Jordan": "JOR",
  "Portugal": "POR", "DR Congo": "COD", "Congo DR": "COD", "Uzbekistan": "UZB", "Colombia": "COL",
  "England": "ENG", "Croatia": "CRO", "Ghana": "GHA", "Panama": "PAN"
};

// fetch에 타임아웃을 설정하는 헬퍼 함수
async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 3000 } = options; // 기본 타임아웃 3초
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

// 실제 월드컵 API 결과를 가져오는 순수 데이터 페치 함수
// 성공 시 { success: true, games: [...] } 반환
// 실패 시 { success: false, error: "..." } 반환
async function fetchActualGames() {
  // ──────────────────────────────────────────────
  // 1순위: football-data.org (빠르고 안정적, CORS 지원)
  // ──────────────────────────────────────────────
  try {
    console.log('[fetchActualGames] 1순위: football-data.org ...');
    const res = await fetchWithTimeout(
      'https://api.football-data.org/v4/competitions/WC/matches?season=2026&status=FINISHED',
      {
        timeout: 8000,
        headers: { 'X-Auth-Token': '4aa5a4b8290d4feeac6d972f01282670' }
      }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data && data.matches) {
      // football-data.org 응답 → 내부 표준 형식으로 변환
      const games = data.matches.map(m => ({
        home_team_name_en: m.homeTeam.name,
        away_team_name_en: m.awayTeam.name,
        home_score: m.score.fullTime.home,
        away_score: m.score.fullTime.away,
        finished: "TRUE",
        type: m.stage === "GROUP_STAGE" ? "group" : "knockout",
        group: m.group ? m.group.replace("GROUP_", "") : null,
        // 승부차기 정보 (penalties 필드가 존재할 경우)
        home_pk: m.score.penalties ? m.score.penalties.home : null,
        away_pk: m.score.penalties ? m.score.penalties.away : null,
        id: m.id
      }));
      console.log(`[fetchActualGames] football-data.org 성공: ${games.length}경기 (${Date.now()})`);
      return { success: true, games };
    }
    throw new Error("Invalid football-data.org response");
  } catch (err1) {
    console.warn("[fetchActualGames] football-data.org 실패:", err1.message);

    // ──────────────────────────────────────────────
    // 2순위: worldcup26.ir (Vercel 프록시 경유)
    // ──────────────────────────────────────────────
    try {
      console.log('[fetchActualGames] 2순위: Vercel proxy → worldcup26.ir ...');
      const res = await fetchWithTimeout('/api/games', { timeout: 15000 });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data && data.games) {
        console.log(`[fetchActualGames] Vercel proxy 성공: ${data.games.length}경기`);
        return { success: true, games: data.games };
      }
      throw new Error("Invalid Vercel proxy response");
    } catch (err2) {
      console.warn("[fetchActualGames] Vercel proxy 실패:", err2.message);

      // ──────────────────────────────────────────────
      // 3순위: worldcup26.ir (직접 호출, CORS 이슈 가능)
      // ──────────────────────────────────────────────
      try {
        console.log('[fetchActualGames] 3순위: worldcup26.ir 직접 호출 ...');
        const res = await fetchWithTimeout('https://worldcup26.ir/get/games', { timeout: 15000 });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (data && data.games) {
          console.log(`[fetchActualGames] worldcup26.ir 직접 성공: ${data.games.length}경기`);
          return { success: true, games: data.games };
        }
        throw new Error("Invalid direct API response");
      } catch (err3) {
        console.error("[fetchActualGames] 모든 API 시도 실패:", err3.message);
        return { success: false, error: `football-data.org: ${err1.message}, proxy: ${err2.message}, direct: ${err3.message}` };
      }
    }
  }
}

// API 결과를 로컬 데이터 상태에 적용
function applyActualResults(apiGames) {
  let updatedCount = 0;
  
  apiGames.forEach(game => {
    const homeCode = ENGLISH_NAME_TO_CODE[game.home_team_name_en];
    const awayCode = ENGLISH_NAME_TO_CODE[game.away_team_name_en];
    
    if (!homeCode || !awayCode) return;

    const finished = String(game.finished).toUpperCase() === "TRUE";
    if (!finished) return; // 아직 종료되지 않은 경기는 무시

    const homeScore = parseInt(game.home_score, 10);
    const awayScore = parseInt(game.away_score, 10);
    if (isNaN(homeScore) || isNaN(awayScore)) return;

    // 1. 조별 예선 경기 매칭
    if (game.type === "group" || String(game.id).startsWith("G") || parseInt(game.id, 10) <= 72) {
      const groupLetter = game.group || getGroupLetterForTeams(homeCode, awayCode);
      if (!groupLetter) return;

      const teamCodes = GROUPS[groupLetter];
      if (teamCodes) {
        for (let i = 0; i < 6; i++) {
          const scheme = GROUP_MATCH_SCHEME[i];
          const homeSchemeCode = teamCodes[scheme.homeIdx];
          const awaySchemeCode = teamCodes[scheme.awayIdx];
          
          if ((homeCode === homeSchemeCode && awayCode === awaySchemeCode) ||
              (homeCode === awaySchemeCode && awayCode === homeSchemeCode)) {
            const matchId = `G_${groupLetter}_${i}`;
            
            // 데이터 변경이 있을 때만 갱신
            const existing = matchScores[matchId];
            const nextScore = homeCode === homeSchemeCode 
              ? { homeScore, awayScore } 
              : { homeScore: awayScore, awayScore: homeScore };

            if (!existing || existing.homeScore !== nextScore.homeScore || existing.awayScore !== nextScore.awayScore) {
              matchScores[matchId] = nextScore;
              lockedMatches[matchId] = true; // 실제 결과 고정(Lock)
              actualMatches[matchId] = true; // 실제 결과 표시(UI 비활성화용)
              console.log(`[applyActualResults] Group ${groupLetter} match ${matchId}: ${homeCode} ${nextScore.homeScore}-${nextScore.awayScore} ${awayCode} → LOCKED`);
              updatedCount++;
            }
            break;
          }
        }
      }
    } 
    // 2. 토너먼트 경기 매칭
    else {
      // 32강부터 결승전까지 팀 대진이 구성된 상태에서 실제 결과 적용
      for (let matchId = R32_MIN; matchId <= MATCH_FINAL; matchId++) {
        const match = tournamentMatches[matchId];
        // 현재 매치 슬롯의 국가들과 일치하는지 체크
        if ((match.homeCode === homeCode && match.awayCode === awayCode) ||
            (match.homeCode === awayCode && match.awayCode === homeCode)) {
          
          const targetHomeScore = match.homeCode === homeCode ? homeScore : awayScore;
          const targetAwayScore = match.homeCode === homeCode ? awayScore : homeScore;

          if (match.homeScore !== targetHomeScore || match.awayScore !== targetAwayScore) {
            match.homeScore = targetHomeScore;
            match.awayScore = targetAwayScore;

            // 승부차기 처리 (무승부인 경우)
            if (targetHomeScore === targetAwayScore) {
              const pkHome = parseInt(game.home_pk || game.pk_home || game.home_penalty, 10);
              const pkAway = parseInt(game.away_pk || game.pk_away || game.away_penalty, 10);
              
              if (!isNaN(pkHome) && !isNaN(pkAway)) {
                match.pkHome = pkHome;
                match.pkAway = pkAway;
                match.winner = pkHome > pkAway ? match.homeCode : match.awayCode;
              } else {
                // 승부차기 결과가 없거나 파싱 실패 시, 승패 결정을 위해 임의 시뮬레이션 적용
                const rankHome = TEAMS[match.homeCode].fifaRank;
                const rankAway = TEAMS[match.awayCode].fifaRank;
                const homeAdv = rankHome < rankAway ? 5 : 4;
                const awayAdv = rankHome < rankAway ? 4 : 5;
                match.pkHome = homeAdv;
                match.pkAway = awayAdv;
                match.winner = homeAdv > awayAdv ? match.homeCode : match.awayCode;
              }
            } else {
              match.pkHome = null;
              match.pkAway = null;
              match.winner = targetHomeScore > targetAwayScore ? match.homeCode : match.awayCode;
            }
            lockedMatches[matchId] = true; // 실제 결과 고정(Lock)
            actualMatches[matchId] = true; // 실제 결과 표시(UI 비활성화용)
            updatedCount++;
          }
          break;
        }
      }
    }
  });

  if (updatedCount > 0) {
    calculateAll();
    updateUI();
  }

  return updatedCount;
}

// 두 국가가 속한 조를 찾는 헬퍼 함수
function getGroupLetterForTeams(code1, code2) {
  for (const [group, teams] of Object.entries(GROUPS)) {
    if (teams.includes(code1) && teams.includes(code2)) {
      return group;
    }
  }
  return null;
}
