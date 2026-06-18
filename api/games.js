// Vercel 서버리스 프록시: 실제 월드컵 경기 결과 제공
// 서버 측에서 호출하므로 CORS 제약이 없고, 토큰을 환경변수로 숨길 수 있다.
//   1순위: football-data.org (빠름, ~1.7s) → 내부 표준 형식으로 변환
//   2순위: worldcup26.ir (느림, ~14s) — football-data.org 실패 시 폴백
//
// 응답 형식: { games: [{ home_team_name_en, away_team_name_en, home_score, away_score,
//                        finished, type, group, home_pk, away_pk, id }] }

// 토큰은 Vercel 환경변수(FOOTBALL_DATA_TOKEN)에서만 읽는다.
// 미설정 시 football-data.org 호출은 실패하고 worldcup26.ir 폴백으로 넘어간다.
const FOOTBALL_DATA_TOKEN = process.env.FOOTBALL_DATA_TOKEN;

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 8000, ...rest } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(resource, { ...rest, signal: controller.signal });
  } finally {
    clearTimeout(id);
  }
}

// football-data.org 응답 → 내부 표준 형식
function transformFootballData(data) {
  return data.matches.map((m) => ({
    home_team_name_en: m.homeTeam.name,
    away_team_name_en: m.awayTeam.name,
    home_score: m.score.fullTime.home,
    away_score: m.score.fullTime.away,
    finished: "TRUE",
    type: m.stage === "GROUP_STAGE" ? "group" : "knockout",
    group: m.group ? m.group.replace("GROUP_", "") : null,
    home_pk: m.score.penalties ? m.score.penalties.home : null,
    away_pk: m.score.penalties ? m.score.penalties.away : null,
    id: m.id,
  }));
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  // 1순위: football-data.org
  try {
    const apiRes = await fetchWithTimeout(
      "https://api.football-data.org/v4/competitions/WC/matches?season=2026&status=FINISHED",
      { timeout: 8000, headers: { "X-Auth-Token": FOOTBALL_DATA_TOKEN } }
    );
    if (!apiRes.ok) throw new Error(`football-data.org HTTP ${apiRes.status}`);
    const data = await apiRes.json();
    if (!data || !data.matches) throw new Error("Invalid football-data.org response");
    return res.status(200).json({ games: transformFootballData(data) });
  } catch (err1) {
    console.warn("[api/games] football-data.org 실패, worldcup26.ir 폴백:", err1.message);

    // 2순위: worldcup26.ir
    try {
      const apiRes = await fetchWithTimeout("https://worldcup26.ir/get/games", { timeout: 15000 });
      if (!apiRes.ok) throw new Error(`worldcup26.ir HTTP ${apiRes.status}`);
      const data = await apiRes.json();
      return res.status(200).json(data);
    } catch (err2) {
      return res
        .status(502)
        .json({ error: `football-data.org: ${err1.message}; worldcup26.ir: ${err2.message}` });
    }
  }
};
