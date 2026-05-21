export default function StatCard({
  title,
  value,
  color = "",
}) {
  return (
    <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </h2>

    </div>
  );
}