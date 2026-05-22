export default function FeedbackTicket({
  name,
  category,
  date,
  comment,
  rating,
}) {
  return (
    <div className="
      bg-white
      rounded-2xl
      border border-gray-100
      p-5
      shadow-sm
    ">

      <div className="flex justify-between items-start">

        <div>
          <h3 className="font-semibold text-lg">
            {name}
          </h3>

          <p className="text-xs text-gray-400 mt-1">
            {category} • {date}
          </p>
        </div>

        <span className="
          bg-yellow-100
          text-yellow-600
          px-3 py-1
          rounded-xl
          text-xs font-bold
        ">
          ⭐ {rating}
        </span>

      </div>

      <p className="text-sm text-gray-500 mt-4">
        {comment}
      </p>

    </div>
  );
}