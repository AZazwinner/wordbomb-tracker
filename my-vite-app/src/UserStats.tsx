import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function UserStats() {
  const { id } = useParams<{ id: string }>();
  const [stats, setStats] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://1393998996585844816.discordsays.com/.proxy/api/user/${id}`, {
        method: "GET",
        cache: "force-cache"
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

// messages: 1935
// suggest points: 4
// voice time hours: 46.45
// voice time seconds: 167209
    return (
    <div className="stats-container">
        <h1 className="stats-title">Stats for User ID: {stats.user_id}</h1>
        <div className="stats-list">
        <div className="stats-item">
            <span className="stats-label">Messages:</span>
            <span className="stats-value">{stats.stats.messages || 0}</span>
        </div>
        <div className="stats-item">
            <span className="stats-label">Suggest Points:</span>
            <span className="stats-value">{stats.stats.suggest_points || 0}</span>
        </div>
        <div className="stats-item">
            <span className="stats-label">Voice Time Hours:</span>
            <span className="stats-value">{stats.stats.voice_time_hours || 0}</span>
        </div>
        <div className="stats-item">
            <span className="stats-label">Voice Time Seconds:</span>
            <span className="stats-value">{stats.stats.voice_time_seconds || 0}</span>
        </div>
        <div className="stats-item">
            <span className="stats-label">Bug Points:</span>
            <span className="stats-value">{stats.stats.bug_points || 0}</span>
        </div>
        <div className="stats-item">
            <span className="stats-label">Idea Points:</span>
            <span className="stats-value">{stats.stats.idea_points || 0}</span>
        </div>
        <div className="stats-item">
            <img className="stats-icon" src="/candy.png"/>
            <span className="stats-label">Candies:</span>
            <span className="stats-value">{stats.stats.candies || 0}</span>
        </div>
        </div>
    </div>
    );
}
