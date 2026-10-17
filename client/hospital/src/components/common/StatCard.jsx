export default function StatCard({ title, value, icon, color }) {
  return (
    <article className="stat-card">
      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
      <div className={`stat-icon ${color || ""}`}>{icon}</div>
    </article>
  );
}