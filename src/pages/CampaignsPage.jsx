import campaigns from "../data/campaigns.json";

export default function CampaignsPage() {

  // ===== STATS =====
  const active = campaigns.filter(
    (c) => c.status === "Active"
  ).length;

  const totalSent = campaigns.reduce(
    (acc, c) => acc + c.sent,
    0
  );

  const avgOpen = "68.5%";
  const clickRate = "22.3%";

  const getStatusColor = (status) => {
    if (status === "Active")
      return "text-green-500";

    if (status === "Scheduled")
      return "text-blue-500";

    if (status === "Completed")
      return "text-gray-500";

    if (status === "Draft")
      return "text-orange-500";

    return "text-gray-400";
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-start mb-8">

        <div>
          <h1 className="text-5xl font-bold text-[#1f2937]">
            Campaigns
          </h1>

          <p className="text-gray-400 text-xl mt-2">
            Create and manage promotional campaigns
          </p>
        </div>

        <button className="bg-[#5B7CFF] text-white px-6 py-3 rounded-2xl shadow-sm hover:opacity-90 transition">
          + New Campaign
        </button>

      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800">
            {active}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Active campaigns
          </p>

          <div className="mt-3 h-10">
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

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800">
            {totalSent.toLocaleString()}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Total sent
          </p>

          <div className="mt-3 h-10">
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

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800">
            {avgOpen}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Avg open rate
          </p>

          <div className="mt-3 h-10">
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

        {/* CARD 4 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800">
            {clickRate}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Click rate
          </p>

          <div className="mt-3 h-10">
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

      {/* ===== MAIN CONTENT ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ===== QUICK START ===== */}
        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="flex justify-between items-center mb-5">

            <h2 className="font-semibold text-gray-800 text-lg">
              Quick Start Templates
            </h2>

            <div className="flex gap-3 text-sm text-gray-400">
              <button>Day</button>
              <button>Week</button>
              <button className="text-gray-800 font-medium">
                Month
              </button>
            </div>

          </div>

          <div className="space-y-4">

            {[
              {
                name: "Email Campaign",
                desc: "Send promotional emails to customers",
                type: "Marketing"
              },
              {
                name: "Push Notification",
                desc: "Instant alerts to app users",
                type: "Mobile"
              },
              {
                name: "SMS Campaign",
                desc: "Text message promotions",
                type: "SMS"
              }
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center justify-between"
              >

                <div className="flex gap-3">

                  <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#5B7CFF] font-bold">
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {t.name}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      {t.desc}
                    </p>
                  </div>

                </div>

                <p className="text-sm font-medium text-[#5B7CFF]">
                  {t.type}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-6 flex items-center gap-4">

            <button className="bg-[#5B7CFF] text-white text-sm px-5 py-2 rounded-xl">
              All Templates
            </button>

            <p className="text-sm text-gray-400">
              12 Available Templates
            </p>

          </div>

        </div>

        {/* ===== CAMPAIGNS ===== */}
        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="flex justify-between items-center mb-5">

            <h2 className="font-semibold text-gray-800 text-lg">
              All Campaigns
            </h2>

            <div className="flex gap-3 text-sm text-gray-400">
              <button>Day</button>
              <button>Week</button>
              <button className="text-gray-800 font-medium">
                Month
              </button>
            </div>

          </div>

          {/* HEADER */}
          <div className="flex justify-between text-xs text-gray-400 border-b pb-3 mb-3 px-1">
            <span>Campaign</span>
            <span>Performance</span>
          </div>

          {/* ITEMS */}
          <div className="space-y-5">

            {campaigns.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between"
              >

                {/* LEFT */}
                <div className="flex gap-3">

                  <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#5B7CFF] font-bold">
                    {c.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {c.name}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      {c.type} • {c.created}
                    </p>
                  </div>

                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <p className="font-semibold text-sm text-gray-800">
                    {c.sent}
                  </p>

                  <p
                    className={`text-xs mt-1 ${getStatusColor(
                      c.status
                    )}`}
                  >
                    {c.status}
                  </p>
                </div>

              </div>
            ))}

          </div>

          <div className="mt-6 flex items-center gap-4">

            <button className="bg-[#5B7CFF] text-white text-sm px-5 py-2 rounded-xl">
              All Campaigns
            </button>

            <p className="text-sm text-gray-400">
              {campaigns.length} Total Campaigns
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}