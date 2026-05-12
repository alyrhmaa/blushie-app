import feedback from "../data/feedback.json";

export default function FeedbackPage() {

  // ===== STATS =====
  const avgRating = "4.6";
  const totalReviews = feedback.length;
  const positive = "91%";
  const growth = "+15%";

  // ===== RATING =====
  const ratingData = [
    { star: 5, count: 234 },
    { star: 4, count: 78 },
    { star: 3, count: 18 },
    { star: 2, count: 8 },
    { star: 1, count: 6 }
  ];

  const maxRating = Math.max(
    ...ratingData.map((r) => r.count)
  );

  // ===== CATEGORY =====
  const categoryData = [
    { name: "Service", count: 145 },
    { name: "Product", count: 98 },
    { name: "Ambiance", count: 67 },
    { name: "Loyalty", count: 34 }
  ];

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-start mb-8">

        <div>
          <h1 className="text-5xl font-bold text-[#1f2937]">
            Feedback
          </h1>

          <p className="text-gray-400 text-xl mt-2">
            Reviews and ratings from your customers
          </p>
        </div>

        <button className="bg-[#5B7CFF] text-white px-6 py-3 rounded-2xl shadow-sm hover:opacity-90 transition">
          View Reports
        </button>

      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <h3 className="text-2xl font-bold text-gray-800">
            {avgRating}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Average rating
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
            {totalReviews}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Total reviews
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
            {positive}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Positive feedback
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
            {growth}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            This month
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

        {/* ===== RECENT FEEDBACK ===== */}
        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="flex justify-between items-center mb-5">

            <h2 className="font-semibold text-gray-800 text-lg">
              Recent Feedback
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
            <span>Rating</span>
          </div>

          {/* ITEMS */}
          <div className="space-y-5">

            {feedback.map((f) => (
              <div
                key={f.id}
                className="flex items-center justify-between"
              >

                {/* LEFT */}
                <div className="flex gap-3">

                  <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#5B7CFF] font-bold">
                    {f.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {f.name}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      {f.category} • {f.date}
                    </p>

                    <p className="text-sm text-gray-500 mt-2 max-w-[280px] truncate">
                      {f.comment}
                    </p>
                  </div>

                </div>

                {/* RIGHT */}
                <div className="text-right">

                  <p className="font-semibold text-sm text-gray-800">
                    ⭐ {f.rating}
                  </p>

                  <p className="text-xs mt-1 text-green-500">
                    Positive
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* BUTTON */}
          <div className="mt-6 flex items-center gap-4">

            <button className="bg-[#5B7CFF] text-white text-sm px-5 py-2 rounded-xl">
              All Reviews
            </button>

            <p className="text-sm text-gray-400">
              {feedback.length} Total Feedback
            </p>

          </div>

        </div>

        {/* ===== ANALYTICS ===== */}
        <div className="space-y-6">

          {/* ===== RATING DISTRIBUTION ===== */}
          <div className="bg-white rounded-2xl shadow-sm p-5">

            <div className="flex justify-between items-center mb-5">

              <h2 className="font-semibold text-gray-800 text-lg">
                Rating Distribution
              </h2>

              <p className="text-sm text-gray-400">
                Customer Ratings
              </p>

            </div>

            <div className="space-y-5">

              {ratingData.map((r, i) => (
                <div key={i}>

                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-700">
                      {r.star} Stars
                    </p>

                    <p className="text-sm font-semibold">
                      {r.count}
                    </p>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-[#5B7CFF] rounded-full"
                      style={{
                        width: `${
                          (r.count / maxRating) * 100
                        }%`
                      }}
                    ></div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* ===== CATEGORY ===== */}
          <div className="bg-white rounded-2xl shadow-sm p-5">

            <div className="flex justify-between items-center mb-5">

              <h2 className="font-semibold text-gray-800 text-lg">
                Feedback Categories
              </h2>

              <p className="text-sm text-gray-400">
                Top Topics
              </p>

            </div>

            <div className="space-y-5">

              {categoryData.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between"
                >

                  <div className="flex items-center gap-3">

                    <div className="w-3 h-3 rounded-full bg-[#5B7CFF]"></div>

                    <p className="text-sm text-gray-700">
                      {c.name}
                    </p>

                  </div>

                  <p className="font-semibold text-sm text-gray-800">
                    {c.count}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}