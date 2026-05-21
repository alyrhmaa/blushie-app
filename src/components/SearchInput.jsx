export default function SearchInput({
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="
        w-full
        border border-gray-200
        rounded-xl
        px-4 py-2.5
        outline-none
      "
      value={value}
      onChange={onChange}
    />
  );
}