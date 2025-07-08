import { useState } from 'react';
import ChampionCard from '../components/ChampionCard';

export default function Home() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`/api/getUser?username=${username}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Anoma × Kaito Champions</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        className="text-black px-4 py-2 rounded mb-4"
      />
      <button onClick={fetchData} className="bg-purple-600 px-6 py-2 rounded mb-6">
        Generate Card
      </button>
      {data && <ChampionCard data={data} />}
    </div>
  );
}