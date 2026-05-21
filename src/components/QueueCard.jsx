import Avatar from "./Avatar";

export default function QueueCard({
  q,
  getStatusColor,
}) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex gap-3">

        <Avatar
          name={q.name}
          className="
            rounded-xl
            bg-[#eef2ff]
            text-[#5B7CFF]
          "
        />

        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            {q.name}
          </h3>

          <p className="text-xs text-gray-400 mt-1">
            {q.code} • {q.items.join(", ")}
          </p>
        </div>

      </div>

      <div className="text-right">

        <p className="font-semibold text-sm text-gray-800">
          {q.wait}
        </p>

        <p
          className={`text-xs mt-1 ${getStatusColor(
            q.status
          )}`}
        >
          {q.status}
        </p>

      </div>

    </div>
  );
}