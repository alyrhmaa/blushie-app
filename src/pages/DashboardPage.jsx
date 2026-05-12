import {
  Search,
  Bell,
  Settings,
  MoreHorizontal,
} from "lucide-react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
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
    { time: "6 PM", value: 600 },
  ];

  const weeklyCompare = [
    { day: "Mon", thisWeek: 1200, lastWeek: 900 },
    { day: "Tue", thisWeek: 1500, lastWeek: 1100 },
    { day: "Wed", thisWeek: 1800, lastWeek: 1400 },
    { day: "Thu", thisWeek: 2200, lastWeek: 1700 },
    { day: "Fri", thisWeek: 2800, lastWeek: 2100 },
    { day: "Sat", thisWeek: 3000, lastWeek: 2500 },
    { day: "Sun", thisWeek: 2600, lastWeek: 2000 },
  ];

  const topProducts = [
    {
      name: "Cappuccino",
      sold: 45,
      revenue: "$225",
      growth: "+12%",
    },
    {
      name: "Latte",
      sold: 38,
      revenue: "$190",
      growth: "+8%",
    },
    {
      name: "Espresso",
      sold: 32,
      revenue: "$128",
      growth: "+15%",
    },
    {
      name: "Americano",
      sold: 28,
      revenue: "$112",
      growth: "+5%",
    },
    {
      name: "Mocha",
      sold: 24,
      revenue: "$144",
      growth: "+10%",
    },
  ];

  const orders = [
    {
      id: "#ORD-156",
      status: "completed",
      name: "Sarah Johnson",
      detail: "2 items • $12.50",
      time: "2 min ago",
    },
    {
      id: "#ORD-155",
      status: "preparing",
      name: "Mike Chen",
      detail: "3 items • $18.75",
      time: "5 min ago",
    },
    {
      id: "#ORD-154",
      status: "completed",
      name: "Emma Wilson",
      detail: "1 item • $5.50",
      time: "8 min ago",
    },
  ];

  return (
    <div className="bg-[#F5F6FA] min-h-screen">

      {/* ===== TOPBAR ===== */}
      <div className="flex items-center justify-between mb-8">

        {/* TITLE */}
        <div>
          <h1 className="text-[32px] font-bold text-[#111827]">
            Welcome to Papi Coffee ☕
          </h1>

          <p className="text-gray-400 mt-1">
            Here's what's happening today
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <div className="hidden md:flex items-center bg-white px-4 h-12 rounded-2xl border border-gray-100 w-[240px]">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search here..."
              className="ml-3 bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* ICONS */}
          <button className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500">
            <Bell size={18} />
          </button>

          <button className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500">
            <Settings size={18} />
          </button>

        </div>
      </div>

      {/* ===== MAIN GRID ===== */}
      <div className="grid grid-cols-12 gap-6">

        {/* ===== LEFT SIDEBAR CARD ===== */}
        <div className="col-span-12 xl:col-span-3">

          <div className="bg-white rounded-[32px] p-6 h-full shadow-sm">

            {/* PROFILE */}
            <div className="w-20 h-20 rounded-[28px] bg-[#5B6CFF] flex items-center justify-center text-white text-5xl font-bold mb-5">
              C
            </div>

            <p className="text-gray-400 text-sm">
              Welcome,
            </p>

            <h2 className="text-[32px] font-bold mb-10">
              CRAFTUI
            </h2>

            {/* EVENTS */}
            <div>

              <h3 className="font-semibold mb-5">
                Upcoming events
              </h3>

              <div className="space-y-4">

                {[
                  {
                    color: "bg-blue-500",
                    time: "05:48AM",
                    title: "Meeting with a client",
                    desc: "Tell how to boost website traffic",
                  },
                  {
                    color: "bg-orange-400",
                    time: "10:28AM",
                    title: "New project discussion",
                    desc: "Business Card Does Your Business",
                  },
                  {
                    color: "bg-green-500",
                    time: "07:58PM",
                    title: "Financial data overview",
                    desc: "What Makes Flyers Unrivaled",
                  },
                ].map((event, i) => (
                  <div
                    key={i}
                    className="border border-gray-100 rounded-3xl p-4"
                  >

                    <div className="flex justify-between">

                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${event.color}`}
                      />

                      <MoreHorizontal
                        size={16}
                        className="text-gray-400"
                      />
                    </div>

                    <p className="text-xs text-[#5B6CFF] mt-2">
                      {event.time}
                    </p>

                    <h4 className="font-semibold text-sm mt-1">
                      {event.title}
                    </h4>

                    <p className="text-xs text-gray-400 mt-1">
                      {event.desc}
                    </p>

                  </div>
                ))}

              </div>
            </div>

            {/* CONVERSION */}
            <div className="mt-8 border border-gray-100 rounded-3xl p-4">

              <div className="flex justify-between mb-5">

                <div>
                  <h4 className="font-semibold text-sm">
                    Conversion history
                  </h4>

                  <p className="text-xs text-gray-400">
                    Week to week performance
                  </p>
                </div>

                <div className="text-gray-400">
                  ◫
                </div>
              </div>

              <div className="flex items-end gap-2 h-24">

                {[40, 70, 45, 80, 55, 72, 60, 75].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#5B6CFF] rounded-full"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}

              </div>
            </div>

          </div>
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div className="col-span-12 xl:col-span-9 space-y-6">

          {/* ===== STATS ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* CARD 1 */}
            <div className="bg-white rounded-[28px] p-5 shadow-sm">
              <div className="flex justify-between items-start">

                <div>
                  <p className="text-gray-400 text-sm">
                    Today's Revenue
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    $1,845
                  </h2>

                  <p className="text-green-500 text-sm mt-1">
                    ↑ 12.5%
                  </p>
                </div>

                <div className="flex items-end gap-1 h-12">
                  {[10, 20, 30, 40, 35, 45, 20].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="w-2 bg-[#5B6CFF] rounded-full"
                        style={{ height: `${h}px` }}
                      />
                    )
                  )}
                </div>

              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-[28px] p-5 shadow-sm">
              <div className="flex justify-between items-start">

                <div>
                  <p className="text-gray-400 text-sm">
                    Orders Today
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    156
                  </h2>

                  <p className="text-green-500 text-sm mt-1">
                    ↑ 8.3%
                  </p>
                </div>

                <div className="flex items-end gap-1 h-12">
                  {[15, 25, 18, 40, 45, 35, 22].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="w-2 bg-[#5B6CFF] rounded-full"
                        style={{ height: `${h}px` }}
                      />
                    )
                  )}
                </div>

              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-[28px] p-5 shadow-sm">
              <div className="flex justify-between items-start">

                <div>
                  <p className="text-gray-400 text-sm">
                    Active Members
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    1,234
                  </h2>

                  <p className="text-green-500 text-sm mt-1">
                    ↑ 15.7%
                  </p>
                </div>

                <div className="flex items-end gap-1 h-12">
                  {[12, 18, 28, 38, 48, 40, 18].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="w-2 bg-[#5B6CFF] rounded-full"
                        style={{ height: `${h}px` }}
                      />
                    )
                  )}
                </div>

              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-[28px] p-5 shadow-sm">
              <div className="flex justify-between items-start">

                <div>
                  <p className="text-gray-400 text-sm">
                    Orders in Queue
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    6
                  </h2>

                  <p className="text-orange-500 text-sm mt-1">
                    Avg wait: 4.2m
                  </p>
                </div>

                <div className="flex items-end gap-1 h-12">
                  {[15, 15, 20, 40, 48, 45, 18].map(
                    (h, i) => (
                      <div
                        key={i}
                        className={`w-2 rounded-full ${
                          i === 3
                            ? "bg-pink-400"
                            : "bg-[#5B6CFF]"
                        }`}
                        style={{ height: `${h}px` }}
                      />
                    )
                  )}
                </div>

              </div>
            </div>

          </div>

          {/* ===== CHART + TOP PRODUCT ===== */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {/* SALES TREND */}
            <div className="bg-white p-6 rounded-[32px] shadow-sm">

              <h2 className="font-bold text-lg mb-6">
                Today's Sales Trend
              </h2>

              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={salesTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#5B6CFF"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>

            </div>

            {/* TOP PRODUCT */}
            <div className="bg-white p-6 rounded-[32px] shadow-sm">

              <h2 className="font-bold text-lg mb-6">
                Top Products Today
              </h2>

              <div className="space-y-5">

                {topProducts.map((p, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center"
                  >

                    <div>
                      <p className="font-semibold">
                        {i + 1}. {p.name}
                      </p>

                      <p className="text-sm text-gray-400">
                        {p.sold} sold
                      </p>
                    </div>

                    <div className="text-right">

                      <p className="font-semibold">
                        {p.revenue}
                      </p>

                      <p className="text-green-500 text-sm">
                        {p.growth}
                      </p>

                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* ===== BOTTOM GRID ===== */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {/* WEEKLY CHART */}
            <div className="bg-white p-6 rounded-[32px] shadow-sm">

              <h2 className="font-bold text-lg mb-6">
                This Week vs Last Week
              </h2>

              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={weeklyCompare}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />

                  <Bar
                    dataKey="thisWeek"
                    fill="#5B6CFF"
                    radius={[8, 8, 0, 0]}
                  />

                  <Bar
                    dataKey="lastWeek"
                    fill="#D9DDFC"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>

            </div>

            {/* RECENT ORDER */}
            <div className="bg-white p-6 rounded-[32px] shadow-sm">

              <h2 className="font-bold text-lg mb-6">
                Recent Orders
              </h2>

              <div className="space-y-5">

                {orders.map((o, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center"
                  >

                    <div>

                      <p className="font-semibold">
                        {o.id}
                      </p>

                      <p className="text-sm text-gray-400">
                        {o.name}
                      </p>

                      <p className="text-sm">
                        {o.detail}
                      </p>

                    </div>

                    <div className="text-right">

                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          o.status === "completed"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {o.status}
                      </span>

                      <p className="text-xs text-gray-400 mt-1">
                        {o.time}
                      </p>

                    </div>
                  </div>
                ))}

              </div>

              <button className="mt-6 bg-[#5B6CFF] text-white px-5 py-3 rounded-2xl text-sm font-medium">
                View All Orders
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}