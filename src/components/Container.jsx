export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        p-6
        min-h-screen
        bg-[#F9FAFB]
        ${className}
      `}
    >
      {children}
    </div>
  );
}