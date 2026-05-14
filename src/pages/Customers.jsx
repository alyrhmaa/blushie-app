import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/Customers.json";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6 bg-[#F9FAFB] min-h-screen">

      {/* PAGE HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Customers
          </h1>

          <p className="text-gray-400 mt-1">
            Home / Customers
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-2xl font-medium transition"
        >
          Add Customer
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-5 bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-500 border-b">
          <span>ID</span>
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
          <span>Status</span>
        </div>

        {/* TABLE BODY */}
        {data.customers.map((item) => (
          <div
            key={item.customer_id}
            className="grid grid-cols-5 px-6 py-4 border-b hover:bg-gray-50 transition"
          >
            {/* ID */}
            <span className="font-medium text-gray-700">
              #{item.customer_id}
            </span>

            {/* NAME */}
            <span>
              <Link
                to={`/customers/${item.customer_id}`}
                className="text-[#5B6CFF] hover:underline font-medium"
              >
                {item.customer_name}
              </Link>
            </span>

            {/* EMAIL */}
            <span className="text-gray-600">
              {item.email}
            </span>

            {/* PHONE */}
            <span className="text-gray-600">
              {item.phone}
            </span>

            {/* STATUS */}
            <span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    item.loyalty.includes("Platinum")
                      ? "bg-purple-100 text-purple-700"
                      : item.loyalty.includes("Gold")
                      ? "bg-yellow-100 text-yellow-700"
                      : item.loyalty.includes("Silver")
                      ? "bg-gray-200 text-gray-700"
                      : item.loyalty.includes("Bronze")
                      ? "bg-orange-100 text-orange-700"
                      : "bg-red-100 text-red-600"
                  }`}
              >
                {item.loyalty}
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-3xl p-6 w-[400px]">

            {/* TITLE */}
            <h2 className="text-2xl font-bold mb-5">
              Add Customer
            </h2>

            {/* FORM */}
            <div className="space-y-4">

              <input
                type="text"
                placeholder="Customer Name"
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <select className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400">
                <option>Non Member</option>
                <option>Bronze Member</option>
                <option>Silver Member</option>
                <option>Gold Member</option>
                <option>Platinum Member</option>
              </select>

            </div>

            {/* BUTTON */}
            <div className="flex gap-3 mt-6">

              <button
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-2xl transition"
              >
                Cancel
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl transition"
              >
                Save
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}