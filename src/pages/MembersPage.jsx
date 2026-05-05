import { useState } from "react";
import members from "../data/members.json";

export default function MembersPage() {
  const [search, setSearch] = useState("");
  const [tier, setTier] = useState("All");

  // ===== AUTO HITUNG STATS =====
  const totalMembers = members.length;
  const platinumCount = members.filter(m => m.tier === "Platinum").length;

  // contoh dummy (karena belum ada tanggal)
  const newThisMonth = 87;
  const activeMembers = members.length; // sementara semua dianggap aktif

  // ===== FILTER =====
  const filteredMembers = members.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    const matchTier = tier === "All" || m.tier === tier;
    return matchSearch && matchTier;
  });

  // ===== STYLE TIER =====
  const getTierStyle = (tier) => {
    if (tier === "Platinum") return "bg-gray-800 text-white";
    if (tier === "Gold") return "bg-yellow-400 text-yellow-900";
    if (tier === "Silver") return "bg-gray-300 text-gray-700";
    return "bg-gray-100";
  };

  return (
    <div className="p-6 space-y-6 bg-[#f5f1e8] min-h-screen">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Members</h1>
          <p className="text-gray-500">Manage your coffee shop members</p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl shadow">
          + Add Member
        </button>
      </div>

      {/* ===== STATS CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-orange-500">
          <p className="text-gray-500 text-sm">Total Members</p>
          <h2 className="text-2xl font-bold">{totalMembers}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-yellow-500">
          <p className="text-gray-500 text-sm">New This Month</p>
          <h2 className="text-2xl font-bold">{newThisMonth}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-red-500">
          <p className="text-gray-500 text-sm">Active Members</p>
          <h2 className="text-2xl font-bold">{activeMembers}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-gray-800">
          <p className="text-gray-500 text-sm">Platinum Tier</p>
          <h2 className="text-2xl font-bold">{platinumCount}</h2>
        </div>

      </div>

      {/* ===== FILTER ===== */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search members..."
          className="flex-1 p-3 rounded-xl border outline-none focus:ring-2 focus:ring-orange-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-3 rounded-xl border outline-none focus:ring-2 focus:ring-orange-400"
          value={tier}
          onChange={(e) => setTier(e.target.value)}
        >
          <option value="All">All Tiers</option>
          <option value="Platinum">Platinum</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
        </select>
      </div>

      {/* ===== TABLE ===== */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">

          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Tier</th>
              <th className="p-4">Points</th>
            </tr>
          </thead>

          <tbody>
            {filteredMembers.map((m, i) => (
              <tr
                key={m.id}
                className={`border-t hover:bg-gray-50 transition ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-4 font-medium">{m.name}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getTierStyle(
                      m.tier
                    )}`}
                  >
                    {m.tier}
                  </span>
                </td>

                <td className="p-4">{m.point} pts</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}