import members from "../data/members.json";

export default function SegmentationPage() {

  // ===== STATS =====
  const totalSegments = 6;
  const largestSegment = 234;
  const avgSize = 89;
  const campaigns = 5;

  // ===== STYLE =====
  const segmentCard =
    "bg-white p-5 rounded-2xl shadow hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-200 transition-all duration-300";

  return (
    <div className="p-6 space-y-8 bg-[#f5f1e8] min-h-screen">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Customer Segmentation</h1>
          <p className="text-gray-500">
            Analyze and target customer groups
          </p>
        </div>

        <button className="bg-orange-500 text-white px-5 py-2 rounded-xl shadow">
          + Create Segment
        </button>
      </div>

      {/* ===== STATS (NO HOVER + ADA WARNA SAMPING) ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-blue-500">
          <p className="text-gray-500 text-sm">Total Segments</p>
          <h2 className="text-2xl font-bold">{totalSegments}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-green-500">
          <p className="text-gray-500 text-sm">Largest Segment</p>
          <h2 className="text-2xl font-bold">{largestSegment}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-purple-500">
          <p className="text-gray-500 text-sm">Avg Segment Size</p>
          <h2 className="text-2xl font-bold">{avgSize}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-orange-500">
          <p className="text-gray-500 text-sm">Active Campaigns</p>
          <h2 className="text-2xl font-bold">{campaigns}</h2>
        </div>

      </div>

      {/* ===== SEGMENT CARDS (PAKAI HOVER) ===== */}
      <div>
        <h2 className="text-xl font-bold mb-4">Customer Segments</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              name: "Morning Regulars",
              count: 234,
              desc: "Customers who visit between 6-10 AM",
              spend: "$8.50"
            },
            {
              name: "Afternoon Crowd",
              count: 189,
              desc: "Customers who visit between 12-3 PM",
              spend: "$12.30"
            },
            {
              name: "Weekend Warriors",
              count: 156,
              desc: "Primarily weekend customers",
              spend: "$15.20"
            },
            {
              name: "High Spenders",
              count: 98,
              desc: "Customers with $20+ average order",
              spend: "$24.50"
            },
            {
              name: "Loyalty Champions",
              count: members.filter(m => m.tier === "Platinum").length,
              desc: "Platinum tier members",
              spend: "$18.75"
            },
            {
              name: "New Members",
              count: 123,
              desc: "Joined in last 30 days",
              spend: "$9.80"
            }
          ].map((s, i) => (
            <div key={i} className={segmentCard}>
              <h3 className="font-bold text-lg">{s.name}</h3>
              <p className="text-2xl font-bold mt-1">{s.count}</p>

              <p className="text-sm text-gray-500 mt-2">{s.desc}</p>

              <div className="mt-3 text-sm">
                <p className="text-gray-500">Avg Spend</p>
                <p className="font-semibold">{s.spend}</p>
              </div>

              <button className="mt-4 text-orange-500 text-sm font-semibold">
                Target →
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* ===== BEHAVIOR CHART ===== */}
      <div>
        <h2 className="text-xl font-bold mb-4">
          Customer Behavior Patterns
        </h2>

        <div className="bg-white p-6 rounded-2xl shadow space-y-4">

          {[
            { label: "Orders Espresso-based drinks", value: 68 },
            { label: "Prefers mobile ordering", value: 52 },
            { label: "Buys pastries regularly", value: 48 },
            { label: "Visits daily", value: 24 },
            { label: "Uses rewards often", value: 39 }
          ].map((b, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{b.label}</span>
                <span>{b.value}%</span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div
                  className="bg-orange-500 h-3 rounded-full"
                  style={{ width: `${b.value}%` }}
                ></div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}