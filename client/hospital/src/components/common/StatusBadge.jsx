export default function StatusBadge({ status }) {
  const normalized = (status || "Pending").toLowerCase();

  return (
    <span className={`status-badge status-${normalized}`}>
      {status || "Pending"}
    </span>
  );
}