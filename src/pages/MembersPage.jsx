import { useState } from "react";
import members from "../data/members.json";

export default function MembersPage() {
  const [search, setSearch] = useState("");
  const [tier, setTier] = useState("All");

  // ===== AUTO HITUNG STATS =====
  const totalMembers = members.length;
  const platinumCount = members.filter(m => m.tier === "Platinum").length;
  const newThisMonth = 87;
  const activeMembers = members.length;

  // ===== FILTER =====
  const filteredMembers = members.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    const matchTier = tier === "All" || m.tier === tier;
    return matchSearch && matchTier;
  });

  // ===== STYLE TIER (Sesuai warna status di Figma) =====
  const getTierStyle = (tier) => {
    if (tier === "Platinum") return "bg-purple-100 text-purple-600"; // Mirip 'Processing'
    if (tier === "Gold") return "bg-green-100 text-green-600";     // Mirip 'Shipped'
    if (tier === "Silver") return "bg-orange-100 text-orange-600"; // Mirip 'Processing' (alt)
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="p-8 bg-[#FBFCFE] min-h-screen font-sans text-[#1A1D1F]">
      
      {/* ===== HEADER & SEARCH AREA ===== */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Members Directory</h1>
          <p className="text-gray-400 text-sm">Monitor and manage your coffee shop loyalists</p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input
              type="text"
              placeholder="Search members..."
              className="w-full pl-4 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="bg-[#6F4FF2] hover:bg-[#5b3fd1] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all">
            + Add Member
          </button>
        </div>
      </div>

      {/* ===== STATS CARDS (Style Figma) ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Members", val: totalMembers, color: "text-blue-600" },
          { label: "New This Month", val: newThisMonth, color: "text-green-600" },
          { label: "Active Now", val: activeMembers, color: "text-purple-600" },
          { label: "Platinum", val: platinumCount, color: "text-orange-600" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">{stat.label}</p>
            <h2 className={`text-2xl font-bold ${stat.color}`}>{stat.val}</h2>
          </div>
        ))}
      </div>

      {/* ===== TABLE SECTION (Tampilan Dashboard Figma) ===== */}
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h3 className="font-bold text-lg">Latest Members</h3>
          <select
            className="text-sm bg-gray-50 border-none rounded-lg px-3 py-1.5 focus:ring-0 text-gray-500 font-medium"
            value={tier}
            onChange={(e) => setTier(e.target.value)}
          >
            <option value="All">All Tiers</option>
            <option value="Platinum">Platinum</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-xs uppercase text-left">
                <th className="px-8 py-4 font-medium">Member Name</th>
                <th className="px-8 py-4 font-medium">Tier Status</th>
                <th className="px-8 py-4 font-medium">Total Points</th>
                <th className="px-8 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredMembers.map((m) => (
                <tr key={m.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                        {m.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{m.name}</p>
                        <p className="text-xs text-gray-400">ID: {m.id.toString().padStart(4, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-4 py-1.5 rounded-xl text-xs font-bold ${getTierStyle(m.tier)}`}>
                      {m.tier}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-gray-600">
                    {m.point.toLocaleString()} <span className="text-gray-400 font-normal">pts</span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Dimensions-horizontal" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}