export default function CampaignCard({
  title,
  desc,
  status,
}) {
  return (
    <div className="
      bg-white
      rounded-2xl
      border border-gray-100
      p-5
      shadow-sm
    ">

      <h3 className="font-bold text-lg">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mt-2">
        {desc}
      </p>

      <div className="mt-4">
        <span className="
          bg-blue-100
          text-blue-600
          px-3 py-1
          rounded-xl
          text-xs font-bold
        ">
          {status}
        </span>
      </div>

    </div>
  );
}