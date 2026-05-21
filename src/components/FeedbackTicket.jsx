export default function FeedbackTicket({
  customer,
  message,
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

      <div className="flex justify-between items-center">

        <h3 className="font-semibold">
          {customer}
        </h3>

        <span className="
          text-xs
          bg-green-100
          text-green-600
          px-3 py-1
          rounded-xl
        ">
          {status}
        </span>

      </div>

      <p className="text-sm text-gray-500 mt-3">
        {message}
      </p>

    </div>
  );
}