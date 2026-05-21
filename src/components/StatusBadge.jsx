export default function StatusBadge({ status, variant }) {

  const variants = {
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    gray: "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`
        px-3 py-1
        rounded-full
        text-xs
        font-semibold
        ${variants[variant]}
      `}
    >
      {status}
    </span>
  );
}