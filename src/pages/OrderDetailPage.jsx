import { useParams } from "react-router-dom";
import orders from "../data/orders.json";

export default function OrderDetailPage() {
  const { id } = useParams();

  const order = orders.find(
    (o) => o.id === id
  );

  if (!order) {
    return (
      <div className="p-6">
        Order tidak ditemukan
      </div>
    );
  }

  const getStatusStyle = (status) => {
    if (status === "Completed")
      return "bg-green-100 text-green-700";

    if (status === "In Progress")
      return "bg-yellow-100 text-yellow-700";

    if (status === "Pending")
      return "bg-blue-100 text-blue-700";

    if (status === "Cancelled")
      return "bg-red-100 text-red-700";

    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="p-6 bg-[#F9FAFB] min-h-screen flex justify-center">

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 w-full max-w-2xl space-y-6">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <div>
            <p className="text-gray-400 text-sm">
              Order ID
            </p>

            <h1 className="text-3xl font-bold">
              {order.id}
            </h1>
          </div>

          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusStyle(
              order.status
            )}`}
          >
            {order.status}
          </span>

        </div>

        {/* CUSTOMER */}
        <div>

          <p className="text-gray-400 text-sm mb-1">
            Customer
          </p>

          <p className="text-xl font-semibold text-gray-800">
            {order.customer}
          </p>

        </div>

        {/* ITEMS */}
        <div>

          <p className="text-gray-400 text-sm mb-3">
            Order Items
          </p>

          <div className="space-y-3">
            {order.items.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3"
              >
                • {item}
              </div>
            ))}
          </div>

        </div>

        {/* INFO */}
        <div className="grid grid-cols-2 gap-5">

          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-sm text-gray-400">
              Order Time
            </p>

            <p className="font-semibold mt-1">
              {order.time}
            </p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-4">
            <p className="text-sm text-orange-400">
              Total Payment
            </p>

            <p className="text-2xl font-bold text-orange-500 mt-1">
              ${order.total.toFixed(2)}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}