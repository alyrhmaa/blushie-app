export default function PageHeader({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-2xl font-bold">
          {title}
        </h1>

        <p className="text-gray-400 text-sm">
          {subtitle}
        </p>
      </div>

      {children}

    </div>
  );
}