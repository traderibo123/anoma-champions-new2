
const fetchRankForDuration = async (username, duration) => {
  const url = `https://hub.kaito.ai/api/v1/gateway/ai/kol/mindshare/top-leaderboard?duration=${duration}&topic_id=ANOMA&top_n=100&customized_community=customized&community_yaps=true`;
  const res = await fetch(url);
  const json = await res.json();
  const leaderboard = Array.isArray(json) ? json : json.data;

  const user = leaderboard.find(
    (entry) => entry.username.toLowerCase() === username.toLowerCase()
  );
  if (!user) return { rank: null, title: "Participant" };

  let title = "Participant";
  const rank = parseInt(user.rank);
  if (rank <= 20) title = "Wizard";
  else if (rank <= 40) title = "Grand Master";
  else if (rank <= 100) title = "Master";

  return { rank, title };
};

export default async function handler(req, res) {
  const { username } = req.query;
  const durations = ["7d", "30d", "90d", "180d"];

  try {
    const results = await Promise.all(
      durations.map((d) => fetchRankForDuration(username, d))
    );

    const response = durations.reduce((acc, d, i) => {
      acc[d] = results[i];
      return acc;
    }, { username });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch leaderboard data",
      details: error.message,
    });
  }
}
