import { useState } from "react";
import { Link } from "react-router-dom";
import orders from "../data/orders.json";

export default function OrdersPage() {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(
    (o) =>
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase())
  );

  const totalOrders = orders.length;

  const inProgress = orders.filter(
    (o) => o.status === "In Progress"
  ).length;

  const completed = orders.filter(
    (o) => o.status === "Completed"
  ).length;

  const revenue = orders
    .filter((o) => o.status === "Completed")
    .reduce((acc, curr) => acc + curr.total, 0);

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
    <div className="p-6 space-y-6 bg-[#F9FAFB] min-h-screen">

      {/* HEADER */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Orders
          </h1>

          <p className="text-gray-500">
            Manage your coffee shop orders
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-2xl font-medium transition">
          + Add Order
        </button>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-sm">
            Total Orders
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {totalOrders}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-sm">
            In Progress
          </p>

          <h2 className="text-3xl font-bold text-yellow-500 mt-2">
            {inProgress}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-sm">
            Completed
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {completed}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-sm">
            Revenue
          </p>

          <h2 className="text-3xl font-bold text-orange-500 mt-2">
            ${revenue.toFixed(2)}
          </h2>
        </div>

      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-3xl border border-gray-100 p-4 shadow-sm">

        <input
          type="text"
          placeholder="Search order by ID or customer..."
          className="w-full outline-none text-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* ORDER CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredOrders.map((o) => (
          <Link
            to={`/orders/${o.id}`}
            key={o.id}
          >

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer h-full">

              {/* TOP */}
              <div className="flex items-start justify-between mb-5">

                <div>
                  <p className="text-sm text-gray-400">
                    Order ID
                  </p>

                  <h2 className="text-lg font-bold text-gray-900">
                    {o.id}
                  </h2>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusStyle(
                    o.status
                  )}`}
                >
                  {o.status}
                </span>

              </div>

              {/* CUSTOMER */}
              <div className="mb-4">

                <p className="text-sm text-gray-400">
                  Customer
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  {o.customer}
                </p>

              </div>

              {/* ITEMS */}
              <div className="mb-5">

                <p className="text-sm text-gray-400 mb-2">
                  Items
                </p>

                <div className="space-y-2">
                  {o.items.slice(0, 3).map((item, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-xl px-3 py-2 text-sm text-gray-700"
                    >
                      • {item}
                    </div>
                  ))}
                </div>

              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between border-t pt-4">

                <div>
                  <p className="text-xs text-gray-400">
                    Order Time
                  </p>

                  <p className="text-sm font-medium text-gray-700">
                    {o.time}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-400">
                    Total
                  </p>

                  <p className="text-xl font-bold text-orange-500">
                    ${o.total.toFixed(2)}
                  </p>
                </div>

              </div>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
}