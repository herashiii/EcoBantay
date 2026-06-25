export default function StatCard({ title, value, note }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h3>{value}</h3>
      {note && <span>{note}</span>}
    </div>
  );
}