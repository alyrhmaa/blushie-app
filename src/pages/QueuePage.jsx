export default function QueuePage() {

  // ===== DUMMY DATA =====
  const queue = [
    {
      id: "001",
      name: "Sarah Johnson",
      code: "Q-001",
      status: "Preparing",
      items: ["Latte", "Croissant"],
      wait: "2 min"
    },
    {
      id: "002",
      name: "Mike Chen",
      code: "Q-002",
      status: "Waiting",
      items: ["Cappuccino", "Muffin"],
      wait: "5 min"
    },
    {
      id: "003",
      name: "Emma Wilson",
      code: "Q-003",
      status: "Priority Preparing",
      items: ["Espresso"],
      wait: "1 min"
    },
    {
      id: "004",
      name: "James Brown",
      code: "Q-004",
      status: "Waiting",
      items: ["Americano", "Bagel", "Orange Juice"],
      wait: "8 min"
    },
    {
      id: "005",
      name: "Lisa Anderson",
      code: "Q-005",
      status: "Ready",
      items: ["Mocha", "Cookie"],
      wait: "0 min"
    },
    {
      id: "006",
      name: "David Martinez",
      code: "Q-006",
      status: "Priority Preparing",
      items: ["Flat White"],
      wait: "3 min"
    }
  ];

  const completed = [
    {
      code: "Q-045",
      name: "Alex Thompson",
      time: "11:30 AM",
      dur: "4 min"
    },
    {
      code: "Q-044",
      name: "Maria Garcia",
      time: "11:25 AM",
      dur: "3 min"
    },
    {
      code: "Q-043",
      name: "John Smith",
      time: "11:20 AM",
      dur: "5 min"
    }
  ];

  // ===== STATS =====
  const inQueue = queue.length;

  const preparing = queue.filter((q) =>
    q.status.includes("Preparing")
  ).length;

  const ready = queue.filter(
    (q) => q.status === "Ready"
  ).length;

  const avgWait = "4.2 min";

  const getStatusColor = (status) => {
    if (status.includes("Preparing"))
      return "text-blue-500";

    if (status === "Waiting")
      return "text-yellow-500";

    if (status === "Ready")
      return "text-green-500";

    return "text-gray-400";
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-start mb-8">

        <div>
          <h1 className="text-5xl font-bold text-[#1f2937]">
            Queue
          </h1>

          <p className="text-gray-400 text-xl mt-2">
            Real-time order tracking and management
          </p>
        </div>

        <button className="bg-[#5B7CFF] text-white px-6 py-3 rounded-2xl shadow-sm hover:opacity-90 transition">
          View History
        </button>

      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800">
            {inQueue}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            In queue
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
            {preparing}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Preparing
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
            {ready}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Ready
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
            {avgWait}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Avg wait time
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

      {/* ===== MAIN SECTION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ===== CURRENT QUEUE ===== */}
        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="flex justify-between items-center mb-5">

            <h2 className="font-semibold text-gray-800 text-lg">
              Current Queue
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
            <span>Customer</span>
            <span>Status</span>
          </div>

          {/* ITEMS */}
          <div className="space-y-5">

            {queue.map((q, i) => (
              <div
                key={i}
                className="flex items-center justify-between"
              >

                {/* LEFT */}
                <div className="flex gap-3">

                  <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#5B7CFF] font-bold">
                    {q.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {q.name}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      {q.code} • {q.items.join(", ")}
                    </p>
                  </div>

                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <p className="font-semibold text-sm text-gray-800">
                    {q.wait}
                  </p>

                  <p
                    className={`text-xs mt-1 ${getStatusColor(
                      q.status
                    )}`}
                  >
                    {q.status}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* BUTTON */}
          <div className="mt-6 flex items-center gap-4">

            <button className="bg-[#5B7CFF] text-white text-sm px-5 py-2 rounded-xl">
              All Queue
            </button>

            <p className="text-sm text-gray-400">
              {queue.length} Active Orders
            </p>

          </div>

        </div>

        {/* ===== COMPLETED ===== */}
        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="flex justify-between items-center mb-5">

            <h2 className="font-semibold text-gray-800 text-lg">
              Completed Today
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
            <span>Order</span>
            <span>Duration</span>
          </div>

          {/* ITEMS */}
          <div className="space-y-5">

            {completed.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between"
              >

                {/* LEFT */}
                <div className="flex gap-3">

                  <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#5B7CFF] font-bold">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {c.code}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      {c.name}
                    </p>
                  </div>

                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <p className="font-semibold text-sm text-gray-800">
                    {c.dur}
                  </p>

                  <p className="text-xs mt-1 text-green-500">
                    {c.time}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* BUTTON */}
          <div className="mt-6 flex items-center gap-4">

            <button className="bg-[#5B7CFF] text-white text-sm px-5 py-2 rounded-xl">
              All History
            </button>

            <p className="text-sm text-gray-400">
              45 Orders Completed
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}