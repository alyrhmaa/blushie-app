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
      change: "↑ 12.5%"
    },
    {
      title: "Total Orders",
      value: "3,148",
      change: "↑ 8.3%"
    },
    {
      title: "Active Customers",
      value: "1,234",
      change: "↑ 15.7%"
    },
    {
      title: "Avg Order Value",
      value: "$28.90",
      change: "↑ 4.2%"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-start mb-8">

        <div>
          <h1 className="text-5xl font-bold text-[#1f2937]">
            Analytics
          </h1>

          <p className="text-gray-400 text-xl mt-2">
            Comprehensive business insights
          </p>
        </div>

        <button className="bg-[#5B7CFF] text-white px-6 py-3 rounded-2xl shadow-sm hover:opacity-90 transition">
          Export Report
        </button>

      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-sm"
          >

            <h3 className="text-2xl font-bold text-gray-800">
              {s.value}
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              {s.title}
            </p>

            <p className="text-sm text-green-500 mt-2">
              {s.change} from last month
            </p>

            {/* MINI CHART */}
            <div className="mt-3 h-10">
              <svg
                viewBox="0 0 100 30"
                className="w-full h-full"
              >
                <path
                  d="M0 15 Q20 5 35 15 T70 20 T100 8"
                  fill="none"
                  stroke="#5B7CFF"
                  strokeWidth="2"
                />
              </svg>
            </div>

          </div>
        ))}

      </div>

      {/* ===== REVENUE CHART ===== */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">

        {/* TOP */}
        <div className="flex justify-between items-center mb-5">

          <h2 className="font-semibold text-gray-800 text-lg">
            Revenue Trend
          </h2>

          <div className="flex gap-3 text-sm text-gray-400">
            <button>Day</button>
            <button>Week</button>
            <button className="text-gray-800 font-medium">
              Month
            </button>
          </div>

        </div>

        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={revenueData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#9ca3af" }}
            />

            <YAxis
              tick={{ fill: "#9ca3af" }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#5B7CFF"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* ===== GRID SECTION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

        {/* ===== WEEKLY SALES ===== */}
        <div className="bg-white rounded-2xl shadow-sm p-5">

          {/* TOP */}
          <div className="flex justify-between items-center mb-5">

            <h2 className="font-semibold text-gray-800 text-lg">
              Weekly Sales
            </h2>

            <p className="text-sm text-gray-400">
              Last 7 days
            </p>

          </div>

          <ResponsiveContainer width="100%" height={280}>

            <BarChart data={weeklyData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
              />

              <XAxis
                dataKey="day"
                tick={{ fill: "#9ca3af" }}
              />

              <YAxis
                tick={{ fill: "#9ca3af" }}
              />

              <Tooltip />

              <Bar
                dataKey="sales"
                fill="#5B7CFF"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* ===== PRODUCT DISTRIBUTION ===== */}
        <div className="bg-white rounded-2xl shadow-sm p-5">

          {/* TOP */}
          <div className="flex justify-between items-center mb-5">

            <h2 className="font-semibold text-gray-800 text-lg">
              Popular Products
            </h2>

            <p className="text-sm text-gray-400">
              Distribution
            </p>

          </div>

          <div className="space-y-5">

            {productData.map((p, i) => (
              <div key={i}>

                <div className="flex justify-between mb-2">

                  <p className="text-sm text-gray-700">
                    {p.name}
                  </p>

                  <p className="text-sm font-semibold">
                    {p.value}%
                  </p>

                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-[#5B7CFF] rounded-full"
                    style={{ width: `${p.value}%` }}
                  ></div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* ===== HOURLY ORDERS ===== */}
      <div className="bg-white rounded-2xl shadow-sm p-5">

        {/* TOP */}
        <div className="flex justify-between items-center mb-5">

          <h2 className="font-semibold text-gray-800 text-lg">
            Hourly Order Volume
          </h2>

          <p className="text-sm text-gray-400">
            Peak hours analytics
          </p>

        </div>

        <ResponsiveContainer width="100%" height={300}>

          <LineChart data={hourlyData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="time"
              tick={{ fill: "#9ca3af" }}
            />

            <YAxis
              tick={{ fill: "#9ca3af" }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="orders"
              stroke="#5B7CFF"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}