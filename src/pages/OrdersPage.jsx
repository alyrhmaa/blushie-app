import { useState } from "react";
import orders from "../data/orders.json";

export default function OrdersPage() {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((o) =>
    o.customer.toLowerCase().includes(search.toLowerCase()) ||
    o.id.toLowerCase().includes(search.toLowerCase())
  );

  const totalOrders = orders.length;
  const inProgress = orders.filter(o => o.status === "In Progress").length;
  const completed = orders.filter(o => o.status === "Completed").length;
  const revenue = orders
    .filter(o => o.status === "Completed")
    .reduce((acc, curr) => acc + curr.total, 0);

  const getStatusStyle = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-700";
    if (status === "In Progress") return "bg-yellow-100 text-yellow-700";
    if (status === "Pending") return "bg-blue-100 text-blue-700";
    if (status === "Cancelled") return "bg-red-100 text-red-700";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="p-6 space-y-6 bg-[#F9FAFB] min-h-screen">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-500">Manage your coffee shop orders</p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 p-5">
          <p className="text-gray-500 text-sm">Total Orders</p>
          <h2 className="text-2xl font-bold">{totalOrders}</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 p-5">
          <p className="text-gray-500 text-sm">In Progress</p>
          <h2 className="text-2xl font-bold text-yellow-500">{inProgress}</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 p-5">
          <p className="text-gray-500 text-sm">Completed</p>
          <h2 className="text-2xl font-bold text-green-600">{completed}</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 p-5">
          <p className="text-gray-500 text-sm">Revenue</p>
          <h2 className="text-2xl font-bold text-orange-500">
            ${revenue.toFixed(2)}
          </h2>
        </div>

      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search orders..."
        className="w-full p-3 rounded-2xl border border-gray-100 bg-white outline-none focus:ring-2 focus:ring-orange-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredOrders.map((o) => (
          <div
            key={o.id}
            className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 p-5 space-y-3"
          >

            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-900">{o.id}</p>

              <span className={`text-xs px-3 py-1 rounded-full ${getStatusStyle(o.status)}`}>
                {o.status}
              </span>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Customer</p>
              <p className="font-medium">{o.customer}</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Items</p>
              <div className="text-sm text-gray-600">
                {o.items.map((item, i) => (
                  <p key={i}>• {item}</p>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-3 border-t border-gray-100">
              <p className="text-gray-400 text-sm">{o.time}</p>
              <p className="font-bold text-orange-500">
                ${o.total.toFixed(2)}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}