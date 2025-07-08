export default function ChampionCard({ data }) {
  const labels = {
    "7d": "7 Days",
    "30d": "30 Day",
    "90d": "3 Month",
    "180d": "6 Month"
  };

  const getTitleColor = (title) => {
    if (title === "Wizard") return "text-yellow-400";
    if (title === "Grand Master") return "text-indigo-300";
    if (title === "Master") return "text-green-300";
    return "text-gray-400";
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-xl p-6 w-full max-w-md shadow-lg border border-purple-500">
      <div className="text-center text-2xl text-purple-200 font-bold mb-6">
        {data.username}
      </div>

      <div className="bg-black bg-opacity-20 rounded-lg px-4 py-2">
        {Object.keys(labels).map((key) => (
          <div key={key} className="flex justify-between border-b border-white/10 py-2 text-white text-sm">
            <span className="font-medium">{labels[key]}</span>
            <span className={`${getTitleColor(data[key]?.title)}`}>
              {data[key]?.rank ? `#${data[key].rank} – ${data[key].title}` : "–"}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xs text-white/40 italic text-center">Created by traderibo123</div>
    </div>
  );
}