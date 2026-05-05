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
    { code: "Q-045", name: "Alex Thompson", time: "11:30 AM", dur: "4 min" },
    { code: "Q-044", name: "Maria Garcia", time: "11:25 AM", dur: "3 min" },
    { code: "Q-043", name: "John Smith", time: "11:20 AM", dur: "5 min" }
  ];

  // ===== HITUNG =====
  const inQueue = queue.length;
  const preparing = queue.filter(q => q.status.includes("Preparing")).length;
  const ready = queue.filter(q => q.status === "Ready").length;
  const avgWait = "4.2 min";

  const getStatusStyle = (status) => {
    if (status.includes("Preparing")) return "bg-blue-100 text-blue-600";
    if (status === "Waiting") return "bg-yellow-100 text-yellow-600";
    if (status === "Ready") return "bg-green-100 text-green-600";
    return "bg-gray-100";
  };

  return (
    <div className="p-6 space-y-8 bg-[#f5f1e8] min-h-screen">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Order Queue</h1>
          <p className="text-gray-500">
            Real-time order tracking and management
          </p>
        </div>

        <button className="bg-orange-500 text-white px-5 py-2 rounded-xl shadow">
          View History
        </button>
      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-blue-500">
          <p className="text-gray-500 text-sm">In Queue</p>
          <h2 className="text-2xl font-bold">{inQueue}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-yellow-500">
          <p className="text-gray-500 text-sm">Preparing</p>
          <h2 className="text-2xl font-bold">{preparing}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-green-500">
          <p className="text-gray-500 text-sm">Ready</p>
          <h2 className="text-2xl font-bold">{ready}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-orange-500">
          <p className="text-gray-500 text-sm">Avg Wait Time</p>
          <h2 className="text-2xl font-bold">{avgWait}</h2>
        </div>

      </div>

      {/* ===== CURRENT QUEUE ===== */}
      <div>
        <h2 className="text-xl font-bold mb-4">Current Queue</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {queue.map((q, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow">

              {/* header */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{q.id}</h3>
                <span className="text-sm text-gray-500">{q.code}</span>
              </div>

              <p className="font-medium mt-1">{q.name}</p>

              {/* status */}
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${getStatusStyle(q.status)}`}>
                {q.status}
              </span>

              {/* items */}
              <div className="mt-3 text-sm">
                {q.items.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>

              {/* wait */}
              <p className="text-sm text-gray-500 mt-2">
                Wait: {q.wait}
              </p>

              {/* button */}
              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-xl">
                {q.status === "Waiting"
                  ? "Start Preparing"
                  : q.status.includes("Preparing")
                  ? "Mark as Ready"
                  : "Done"}
              </button>

            </div>
          ))}

        </div>
      </div>

      {/* ===== COMPLETED ===== */}
      <div>
        <h2 className="text-xl font-bold mb-4">Completed Today</h2>

        <div className="bg-white p-5 rounded-2xl shadow space-y-4">

          {completed.map((c, i) => (
            <div key={i} className="flex justify-between items-center border-b pb-2 last:border-none">
              
              <div>
                <p className="font-semibold">{c.code}</p>
                <p className="text-sm text-gray-500">{c.name}</p>
              </div>

              <div className="text-right text-sm text-gray-500">
                <p>{c.time}</p>
                <p>{c.dur}</p>
              </div>

            </div>
          ))}

          <div className="text-center text-gray-400 pt-2">
            45 orders completed
          </div>

        </div>
      </div>

    </div>
  );
}