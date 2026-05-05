import feedback from "../data/feedback.json";

export default function FeedbackPage() {

  // ===== STATS =====
  const avgRating = "4.6";
  const totalReviews = feedback.length;
  const positive = "91%";
  const growth = "+15%";

  // ===== RATING DISTRIBUTION =====
  const ratingData = [
    { star: 5, count: 234 },
    { star: 4, count: 78 },
    { star: 3, count: 18 },
    { star: 2, count: 8 },
    { star: 1, count: 6 }
  ];

  const maxRating = Math.max(...ratingData.map(r => r.count));

  // ===== CATEGORY =====
  const categoryData = [
    { name: "Service", count: 145 },
    { name: "Product", count: 98 },
    { name: "Ambiance", count: 67 },
    { name: "Loyalty", count: 34 }
  ];

  return (
    <div className="p-6 space-y-8 bg-[#f5f1e8] min-h-screen">

      {/* ===== HEADER ===== */}
      <div>
        <h1 className="text-3xl font-bold">Customer Feedback</h1>
        <p className="text-gray-500">
          Reviews and ratings from your customers
        </p>
      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-yellow-500">
          <p className="text-gray-500 text-sm">Average Rating</p>
          <h2 className="text-2xl font-bold">{avgRating}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-blue-500">
          <p className="text-gray-500 text-sm">Total Reviews</p>
          <h2 className="text-2xl font-bold">{totalReviews}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-green-500">
          <p className="text-gray-500 text-sm">Positive Feedback</p>
          <h2 className="text-2xl font-bold">{positive}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-orange-500">
          <p className="text-gray-500 text-sm">This Month</p>
          <h2 className="text-2xl font-bold">{growth}</h2>
        </div>

      </div>

      {/* ===== RECENT FEEDBACK ===== */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Feedback</h2>

        <div className="space-y-4">

          {feedback.map((f) => (
            <div key={f.id} className="bg-white p-5 rounded-2xl shadow">
              
              <div className="flex justify-between items-center">
                <p className="font-semibold">{f.name}</p>
                <p className="text-sm text-gray-500">{f.date}</p>
              </div>

              <p className="text-sm text-orange-500 mt-1">{f.category}</p>

              <p className="mt-2 text-gray-700">{f.comment}</p>

              <p className="mt-2 text-yellow-500">⭐ {f.rating}</p>

            </div>
          ))}

        </div>
      </div>

      {/* ===== RATING DISTRIBUTION ===== */}
      <div>
        <h2 className="text-xl font-bold mb-4">Rating Distribution</h2>

        <div className="bg-white p-6 rounded-2xl shadow space-y-4">

          {ratingData.map((r, i) => (
            <div key={i}>

              <div className="flex justify-between text-sm mb-1">
                <span>{r.star} ⭐</span>
                <span>{r.count}</span>
              </div>

              {/* bar */}
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div
                  className="bg-yellow-400 h-3 rounded-full"
                  style={{
                    width: `${(r.count / maxRating) * 100}%`
                  }}
                ></div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ===== CATEGORY ===== */}
      <div>
        <h2 className="text-xl font-bold mb-4">
          Feedback by Category
        </h2>

        <div className="bg-white p-6 rounded-2xl shadow space-y-4">

          {categoryData.map((c, i) => (
            <div key={i} className="flex justify-between">
              <span>{c.name}</span>
              <span className="font-semibold">{c.count}</span>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}