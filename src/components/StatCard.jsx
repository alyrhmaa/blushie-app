export default function StatCard({ label, value }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p>{label}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}