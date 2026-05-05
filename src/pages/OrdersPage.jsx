import { useState } from "react";
import orders from "../data/orders.json";

export default function OrdersPage() {
  const [search, setSearch] = useState("");

  // ===== FILTER =====
  const filteredOrders = orders.filter((o) =>
    o.customer.toLowerCase().includes(search.toLowerCase()) ||
    o.id.toLowerCase().includes(search.toLowerCase())
  );

  // ===== STATS =====
  const totalOrders = orders.length;
  const inProgress = orders.filter(o => o.status === "In Progress").length;
  const completed = orders.filter(o => o.status === "Completed").length;
  const revenue = orders
    .filter(o => o.status === "Completed")
    .reduce((acc, curr) => acc + curr.total, 0);

  // ===== STATUS STYLE =====
  const getStatusStyle = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-700";
    if (status === "In Progress") return "bg-yellow-100 text-yellow-700";
    if (status === "Pending") return "bg-blue-100 text-blue-700";
    if (status === "Cancelled") return "bg-red-100 text-red-700";
    return "bg-gray-100";
  };

  return (
    <div className="p-6 space-y-6 bg-[#f5f1e8] min-h-screen">

      {/* ===== HEADER ===== */}
      <div>
        <h1 className="text-3xl font-bold">Orders</h1>
        <p className="text-gray-500">Manage your coffee shop orders</p>
      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-blue-500">
          <p className="text-gray-500 text-sm">Today's Orders</p>
          <h2 className="text-2xl font-bold">{totalOrders}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-yellow-500">
          <p className="text-gray-500 text-sm">In Progress</p>
          <h2 className="text-2xl font-bold">{inProgress}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-green-500">
          <p className="text-gray-500 text-sm">Completed</p>
          <h2 className="text-2xl font-bold">{completed}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-orange-500">
          <p className="text-gray-500 text-sm">Revenue</p>
          <h2 className="text-2xl font-bold">
            ${revenue.toFixed(2)}
          </h2>
        </div>

      </div>

      {/* ===== SEARCH ===== */}
      <input
        type="text"
        placeholder="Search orders by ID, customer name..."
        className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-orange-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ===== TABLE ===== */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">

          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Items</th>
              <th className="p-4">Total</th>
              <th className="p-4">Time</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((o, i) => (
              <tr
                key={o.id}
                className={`border-t hover:bg-gray-50 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-4 font-medium">{o.id}</td>

                <td className="p-4">{o.customer}</td>

                <td className="p-4">
                  {o.items.map((item, idx) => (
                    <div key={idx} className="text-sm">
                      {item}
                    </div>
                  ))}
                </td>

                <td className="p-4 font-semibold text-green-600">
                  ${o.total.toFixed(2)}
                </td>

                <td className="p-4">{o.time}</td>

                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyle(o.status)}`}>
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}