
import { useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setData(null);
    try {
      const res = await fetch(`/api/getUser?username=${username}`);
      const json = await res.json();
      setData(json);
    } catch (e) {
      alert("Failed to fetch data");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Anoma × Kaito Champion Cards</h1>
      <input
        type="text"
        placeholder="Enter your username (e.g. traderibo123)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 text-black rounded mb-4 w-full max-w-md"
      />
      <button
        onClick={fetchData}
        disabled={!username || loading}
        className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded"
      >
        {loading ? "Loading..." : "Generate Card"}
      </button>

      {data && <Card data={data} />}
    </div>
  );
}
