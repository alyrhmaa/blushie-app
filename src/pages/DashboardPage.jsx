import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function DashboardPage() {

  // ===== DATA =====
  const salesTrend = [
    { time: "6 AM", value: 50 },
    { time: "8 AM", value: 120 },
    { time: "10 AM", value: 300 },
    { time: "12 PM", value: 450 },
    { time: "2 PM", value: 380 },
    { time: "4 PM", value: 520 },
    { time: "6 PM", value: 600 }
  ];

  const weeklyCompare = [
    { day: "Mon", thisWeek: 1200, lastWeek: 900 },
    { day: "Tue", thisWeek: 1500, lastWeek: 1100 },
    { day: "Wed", thisWeek: 1800, lastWeek: 1400 },
    { day: "Thu", thisWeek: 2200, lastWeek: 1700 },
    { day: "Fri", thisWeek: 2800, lastWeek: 2100 },
    { day: "Sat", thisWeek: 3000, lastWeek: 2500 },
    { day: "Sun", thisWeek: 2600, lastWeek: 2000 }
  ];

  const topProducts = [
    { name: "Cappuccino", sold: 45, revenue: "$225", growth: "+12%" },
    { name: "Latte", sold: 38, revenue: "$190", growth: "+8%" },
    { name: "Espresso", sold: 32, revenue: "$128", growth: "+15%" },
    { name: "Americano", sold: 28, revenue: "$112", growth: "+5%" },
    { name: "Mocha", sold: 24, revenue: "$144", growth: "+10%" }
  ];

  const orders = [
    {
      id: "#ORD-156",
      status: "completed",
      name: "Sarah Johnson",
      detail: "2 items • $12.50",
      time: "2 min ago"
    },
    {
      id: "#ORD-155",
      status: "preparing",
      name: "Mike Chen",
      detail: "3 items • $18.75",
      time: "5 min ago"
    },
    {
      id: "#ORD-154",
      status: "completed",
      name: "Emma Wilson",
      detail: "1 item • $5.50",
      time: "8 min ago"
    }
  ];

  return (
    <div className="p-6 space-y-8 bg-[#f5f1e8] min-h-screen">

      {/* ===== HEADER ===== */}
      <div>
        <h1 className="text-3xl font-bold">
          Welcome to Papi Coffe ☕
        </h1>
        <p className="text-gray-500">
          Here's what's happening today, May 4, 2026
        </p>
      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-orange-500">
          <p className="text-gray-500 text-sm">Today's Revenue</p>
          <h2 className="text-2xl font-bold">$1,845</h2>
          <p className="text-green-500 text-sm">↑ 12.5%</p>
          <p className="text-xs text-gray-400">Target: $2,000</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-green-500">
          <p className="text-gray-500 text-sm">Orders Today</p>
          <h2 className="text-2xl font-bold">156</h2>
          <p className="text-green-500 text-sm">↑ 8.3%</p>
          <p className="text-xs text-gray-400">Avg: $11.83</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-blue-500">
          <p className="text-gray-500 text-sm">Active Members</p>
          <h2 className="text-2xl font-bold">1,234</h2>
          <p className="text-green-500 text-sm">↑ 15.7%</p>
          <p className="text-xs text-gray-400">87 new</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-purple-500">
          <p className="text-gray-500 text-sm">Orders in Queue</p>
          <h2 className="text-2xl font-bold">6</h2>
          <p className="text-xs text-gray-400">Avg wait: 4.2 min</p>
        </div>

      </div>

      {/* ===== SALES TREND ===== */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-bold mb-4">
          Today's Sales Trend
        </h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#f97316"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* TOP PRODUCTS */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Top Products Today</h2>

          <div className="space-y-4">
            {topProducts.map((p, i) => (
              <div key={i} className="flex justify-between items-center">

                <div>
                  <p className="font-semibold">
                    {i + 1}. {p.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {p.sold} sold
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">{p.revenue}</p>
                  <p className="text-green-500 text-sm">
                    {p.growth}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* WEEKLY COMPARE */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold mb-4">
            This Week vs Last Week
          </h2>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyCompare}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="thisWeek" fill="#f97316" />
              <Bar dataKey="lastWeek" fill="#cbd5f5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* ===== RECENT ORDERS ===== */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-bold mb-4">Recent Orders</h2>

        <div className="space-y-4">
          {orders.map((o, i) => (
            <div key={i} className="flex justify-between items-center">

              <div>
                <p className="font-semibold">{o.id}</p>
                <p className="text-sm text-gray-500">
                  {o.name}
                </p>
                <p className="text-sm">{o.detail}</p>
              </div>

              <div className="text-right">
                <span className={`text-sm px-2 py-1 rounded-full ${
                  o.status === "completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}>
                  {o.status}
                </span>
                <p className="text-xs text-gray-400 mt-1">
                  {o.time}
                </p>
              </div>

            </div>
          ))}
        </div>

        <p className="text-orange-500 mt-4 text-sm cursor-pointer">
          View All Orders →
        </p>
      </div>

    </div>
  );
}