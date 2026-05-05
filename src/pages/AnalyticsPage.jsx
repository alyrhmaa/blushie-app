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

export default function AnalyticsPage() {

  // ===== DATA =====
  const revenueData = [
    { month: "Jan", value: 8000 },
    { month: "Feb", value: 12000 },
    { month: "Mar", value: 15000 },
    { month: "Apr", value: 17000 },
    { month: "May", value: 19000 },
    { month: "Jun", value: 21000 }
  ];

  const weeklyData = [
    { day: "Mon", sales: 1200 },
    { day: "Tue", sales: 1800 },
    { day: "Wed", sales: 2200 },
    { day: "Thu", sales: 2600 },
    { day: "Fri", sales: 3200 },
    { day: "Sat", sales: 3800 },
    { day: "Sun", sales: 2900 }
  ];

  const productData = [
    { name: "Espresso", value: 28 },
    { name: "Latte", value: 24 },
    { name: "Cappuccino", value: 18 },
    { name: "Americano", value: 15 },
    { name: "Mocha", value: 15 }
  ];

  const hourlyData = [
    { time: "7 AM", orders: 10 },
    { time: "9 AM", orders: 25 },
    { time: "11 AM", orders: 45 },
    { time: "1 PM", orders: 38 },
    { time: "3 PM", orders: 30 },
    { time: "5 PM", orders: 50 }
  ];

  // ===== STATS =====
  const stats = [
    {
      title: "Total Revenue",
      value: "$91,000",
      change: "↑ 12.5%",
      color: "border-green-500"
    },
    {
      title: "Total Orders",
      value: "3,148",
      change: "↑ 8.3%",
      color: "border-blue-500"
    },
    {
      title: "Active Customers",
      value: "1,234",
      change: "↑ 15.7%",
      color: "border-purple-500"
    },
    {
      title: "Avg Order Value",
      value: "$28.90",
      change: "↑ 4.2%",
      color: "border-orange-500"
    }
  ];

  return (
    <div className="p-6 space-y-8 bg-[#f5f1e8] min-h-screen">

      {/* ===== HEADER ===== */}
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-gray-500">
          Comprehensive business insights
        </p>
      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`bg-white p-5 rounded-2xl shadow border-l-4 ${s.color}`}
          >
            <p className="text-gray-500 text-sm">{s.title}</p>
            <h2 className="text-2xl font-bold">{s.value}</h2>
            <p className="text-green-500 text-sm mt-1">
              {s.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* ===== REVENUE TREND ===== */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-bold mb-4">Revenue Trend (6 Months)</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
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

      {/* ===== GRID 2 CHART ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* WEEKLY SALES */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Weekly Sales Performance</h2>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#fb923c" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PRODUCT DISTRIBUTION */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Popular Products Distribution</h2>

          <div className="space-y-3">
            {productData.map((p, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm">
                  <span>{p.name}</span>
                  <span>{p.value}%</span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-orange-400 h-3 rounded-full"
                    style={{ width: `${p.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ===== HOURLY ORDERS ===== */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-bold mb-4">Hourly Order Volume</h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#10b981"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}