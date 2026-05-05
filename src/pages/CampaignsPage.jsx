import campaigns from "../data/campaigns.json";

export default function CampaignsPage() {

  // ===== STATS =====
  const active = campaigns.filter(c => c.status === "Active").length;
  const totalSent = campaigns.reduce((acc, c) => acc + c.sent, 0);

  const avgOpen = "68.5%";
  const clickRate = "22.3%";

  const getStatusStyle = (status) => {
    if (status === "Active") return "bg-green-100 text-green-600";
    if (status === "Scheduled") return "bg-blue-100 text-blue-600";
    if (status === "Completed") return "bg-gray-200 text-gray-700";
    if (status === "Draft") return "bg-yellow-100 text-yellow-600";
    return "bg-gray-100";
  };

  return (
    <div className="p-6 space-y-8 bg-[#f5f1e8] min-h-screen">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Marketing Campaigns</h1>
          <p className="text-gray-500">
            Create and manage promotional campaigns
          </p>
        </div>

        <button className="bg-orange-500 text-white px-5 py-2 rounded-xl shadow">
          + New Campaign
        </button>
      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-green-500">
          <p className="text-gray-500 text-sm">Active Campaigns</p>
          <h2 className="text-2xl font-bold">{active}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-blue-500">
          <p className="text-gray-500 text-sm">Total Sent</p>
          <h2 className="text-2xl font-bold">
            {totalSent.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-purple-500">
          <p className="text-gray-500 text-sm">Avg Open Rate</p>
          <h2 className="text-2xl font-bold">{avgOpen}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-orange-500">
          <p className="text-gray-500 text-sm">Click Rate</p>
          <h2 className="text-2xl font-bold">{clickRate}</h2>
        </div>

      </div>

      {/* ===== QUICK START ===== */}
      <div>
        <h2 className="text-xl font-bold mb-4">Quick Start Templates</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            {
              name: "Email Campaign",
              desc: "Send promotional emails to customers"
            },
            {
              name: "Push Notification",
              desc: "Instant alerts to app users"
            },
            {
              name: "SMS Campaign",
              desc: "Text message promotions"
            }
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg">{t.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{t.desc}</p>
            </div>
          ))}

        </div>
      </div>

      {/* ===== TABLE ===== */}
      <div>
        <h2 className="text-xl font-bold mb-4">All Campaigns</h2>

        <div className="bg-white rounded-2xl shadow overflow-hidden">

          <table className="w-full text-left">

            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3">Campaign Name</th>
                <th className="p-3">Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Sent</th>
                <th className="p-3">Opened</th>
                <th className="p-3">Clicked</th>
                <th className="p-3">Created</th>
              </tr>
            </thead>

            <tbody>
              {campaigns.map((c, i) => (
                <tr
                  key={c.id}
                  className={`border-t ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="p-3 font-medium">{c.name}</td>
                  <td className="p-3">{c.type}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                        c.status
                      )}`}
                    >
                      {c.status}
                    </span>
                  </td>

                  <td className="p-3">{c.sent}</td>

                  <td className="p-3">
                    {c.opened || "-"}
                  </td>

                  <td className="p-3">
                    {c.clicked || "-"}
                  </td>

                  <td className="p-3">{c.created}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}