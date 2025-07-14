import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function UserStats() {
  const { id } = useParams<{ id: string }>();
  const [stats, setStats] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://1393998996585844816.discordsays.com/.proxy/api/user/${id}`, {
        method: "GET"
    })
      .then(res => {
        if (!res.ok) throw new Error("User not found or rate limited");
        return res.json();
      })
      .then(data => setStats(data))
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!stats) return <p>Loading...</p>;

  return (
    <div>
      <h1>Stats for User ID: {stats.user_id}</h1>
      <ul>
        {Object.entries(stats.stats).map(([key, value]) => (
          <li key={key}>
            <strong>{key.replace(/_/g, ' ')}:</strong> {value as string | number}
          </li>
        ))}
      </ul>
    </div>
  );
}
