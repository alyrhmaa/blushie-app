export default function Avatar({
  name,
  className = "",
}) {
  return (
    <div
      className={`
        w-10 h-10
        rounded-full
        bg-blue-50
        flex items-center justify-center
        text-blue-600
        font-bold text-xs
        ${className}
      `}
    >
      {name.charAt(0)}
    </div>
  );
}