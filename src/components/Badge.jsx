export default function Badge({
  children,
  className = "",
}) {
  return (
    <span
      className={`
        px-4 py-1.5
        rounded-xl
        text-xs font-bold
        ${className}
      `}
    >
      {children}
    </span>
  );
}