import members from "../data/members.json";

export default function SegmentationPage() {
  // ===== STATS =====
  const totalSegments = 6;
  const largestSegment = 234;
  const avgSize = 89;
  const campaigns = 5;

  // ===== SEGMENTS =====
  const segments = [
    {
      name: "Morning Regulars",
      count: 234,
      desc: "Customers who visit between 6-10 AM",
      spend: "$8.50",
      status: "Active",
    },
    {
      name: "Afternoon Crowd",
      count: 189,
      desc: "Customers who visit between 12-3 PM",
      spend: "$12.30",
      status: "Growing",
    },
    {
      name: "Weekend Warriors",
      count: 156,
      desc: "Primarily weekend customers",
      spend: "$15.20",
      status: "Active",
    },
    {
      name: "High Spenders",
      count: 98,
      desc: "Customers with $20+ average order",
      spend: "$24.50",
      status: "Premium",
    },
    {
      name: "Loyalty Champions",
      count: members.filter((m) => m.tier === "Platinum").length,
      desc: "Platinum tier members",
      spend: "$18.75",
      status: "VIP",
    },
    {
      name: "New Members",
      count: 123,
      desc: "Joined in last 30 days",
      spend: "$9.80",
      status: "New",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6">
      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-5xl font-bold text-[#1f2937]">Segmentation</h1>

          <p className="text-gray-400 text-xl mt-2">
            Analyze customer groups and behavior insights
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-400">
            ⌕
          </div>

          <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-400">
            ⊙
          </div>
        </div>
      </div>
      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800">{totalSegments}</h3>

          <p className="text-sm text-gray-400 mt-1">Total segments</p>

          <div className="mt-3">
            <div className="w-full h-10">
              <svg viewBox="0 0 100 30" className="w-full h-full">
                <path
                  d="M0 15 Q15 2 30 15 T60 15 T100 18"
                  fill="none"
                  stroke="#5B7CFF"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800">{largestSegment}</h3>

          <p className="text-sm text-gray-400 mt-1">Largest segment</p>

          <div className="mt-3">
            <div className="w-full h-10">
              <svg viewBox="0 0 100 30" className="w-full h-full">
                <path
                  d="M0 20 Q20 28 35 12 T70 15 T100 10"
                  fill="none"
                  stroke="#5B7CFF"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800">{avgSize}</h3>

          <p className="text-sm text-gray-400 mt-1">Avg segment size</p>

          <div className="mt-3">
            <div className="w-full h-10">
              <svg viewBox="0 0 100 30" className="w-full h-full">
                <path
                  d="M0 15 Q20 5 35 15 T70 20 T100 8"
                  fill="none"
                  stroke="#5B7CFF"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800">{campaigns}</h3>

          <p className="text-sm text-gray-400 mt-1">Active campaigns</p>

          <div className="mt-3">
            <div className="w-full h-10">
              <svg viewBox="0 0 100 30" className="w-full h-full">
                <path
                  d="M0 10 Q15 25 30 10 T60 12 T100 20"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TABLE SECTION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ===== SEGMENT LIST ===== */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          {/* TOP */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-semibold text-gray-800 text-lg">
              Customer Segments
            </h2>

            <div className="flex gap-3 text-sm text-gray-400">
              <button>Day</button>
              <button>Week</button>
              <button className="text-gray-800 font-medium">Month</button>
            </div>
          </div>

          {/* TABLE HEADER */}
          <div className="flex justify-between text-xs text-gray-400 border-b pb-3 mb-2 px-1">
            <span>Segment</span>
            <span>Details</span>
          </div>

          {/* ITEMS */}
          <div className="space-y-4">
            {segments.map((s, i) => (
              <div key={i} className="flex items-center justify-between">
                {/* LEFT */}
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#5B7CFF] font-bold">
                    {s.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {s.name}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">{s.desc}</p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <p className="font-semibold text-sm text-gray-800">
                    {s.spend}
                  </p>

                  <p
                    className={`text-xs mt-1
                      ${
                        s.status === "Active"
                          ? "text-green-500"
                          : s.status === "Growing"
                            ? "text-yellow-500"
                            : s.status === "Premium"
                              ? "text-purple-500"
                              : s.status === "VIP"
                                ? "text-blue-500"
                                : "text-orange-500"
                      }
                    `}
                  >
                    {s.status}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-6 flex items-center gap-4">
            <button className="bg-[#5B7CFF] text-white text-sm px-5 py-2 rounded-xl">
              All Segments
            </button>

            <p className="text-sm text-gray-400">2.480 Total Customers</p>
          </div>
        </div>

        {/* ===== BEHAVIOR SECTION ===== */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          {/* TOP */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-semibold text-gray-800 text-lg">
              Customer Behavior
            </h2>

            <div className="flex gap-3 text-sm text-gray-400">
              <button>Day</button>
              <button>Week</button>
              <button className="text-gray-800 font-medium">Month</button>
            </div>
          </div>

          {/* HEADER */}
          <div className="flex justify-between text-xs text-gray-400 border-b pb-3 mb-3 px-1">
            <span>Behavior</span>
            <span>Rate</span>
          </div>

          {/* ITEMS */}
          <div className="space-y-5">
            {[
              { label: "Orders Espresso-based drinks", value: 68 },
              { label: "Prefers mobile ordering", value: 52 },
              { label: "Buys pastries regularly", value: 48 },
              { label: "Visits daily", value: 24 },
              { label: "Uses rewards often", value: 39 },
            ].map((b, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-gray-700">{b.label}</p>

                  <p className="text-sm font-semibold">{b.value}%</p>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#5B7CFF] rounded-full"
                    style={{ width: `${b.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-6 flex items-center gap-4">
            <button className="bg-[#5B7CFF] text-white text-sm px-5 py-2 rounded-xl">
              All Reports
            </button>

            <p className="text-sm text-gray-400">1.520 Total Analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
}
