export default function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        px-5 py-2.5
        rounded-xl
        font-medium
        transition
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}