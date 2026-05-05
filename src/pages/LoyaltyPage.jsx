import members from "../data/members.json";

export default function LoyaltyPage() {

  // ===== STATS =====
  const totalPoints = members.reduce((acc, m) => acc + m.point, 0);
  const activeMembers = members.length;

  const rewardsClaimed = 1234; // dummy
  const redemptionRate = "68%"; // dummy

  // ===== HITUNG TIER =====
  const countTier = (tier) =>
    members.filter((m) => m.tier === tier).length;

  return (
    <div className="p-6 space-y-8 bg-[#f5f1e8] min-h-screen">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Loyalty Program</h1>
          <p className="text-gray-500">
            Manage rewards and member tiers
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl shadow">
          + Create Reward
        </button>
      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-blue-500">
          <p className="text-gray-500 text-sm">Total Points Issued</p>
          <h2 className="text-2xl font-bold">
            {totalPoints.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-green-500">
          <p className="text-gray-500 text-sm">Rewards Claimed</p>
          <h2 className="text-2xl font-bold">{rewardsClaimed}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-purple-500">
          <p className="text-gray-500 text-sm">Active Members</p>
          <h2 className="text-2xl font-bold">{activeMembers}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-4 border-orange-500">
          <p className="text-gray-500 text-sm">Redemption Rate</p>
          <h2 className="text-2xl font-bold">{redemptionRate}</h2>
        </div>

      </div>

      {/* ===== MEMBERSHIP TIERS ===== */}
      <div>
        <h2 className="text-xl font-bold mb-4">Membership Tiers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Silver */}
          <div className="bg-white p-5 rounded-2xl shadow hover:scale-105 transition">
            <h3 className="font-bold text-lg">Silver</h3>
            <p className="text-sm text-gray-500 mb-2">0+ points</p>
            <p className="text-sm mb-3">{countTier("Silver")} members</p>

            <ul className="text-sm space-y-1">
              <li>✓ Earn 1 point per $1</li>
              <li>✓ Monthly promo access</li>
            </ul>
          </div>

          {/* Gold */}
          <div className="bg-white p-5 rounded-2xl shadow border-2 border-yellow-400 hover:scale-105 transition">
            <h3 className="font-bold text-lg">Gold</h3>
            <p className="text-sm text-gray-500 mb-2">1000+ points</p>
            <p className="text-sm mb-3">{countTier("Gold")} members</p>

            <ul className="text-sm space-y-1">
              <li>✓ Earn 2 points per $1</li>
              <li>✓ Weekly free drink</li>
              <li>✓ Priority support</li>
            </ul>
          </div>

          {/* Platinum */}
          <div className="bg-white p-5 rounded-2xl shadow border-2 border-gray-800 hover:scale-105 transition">
            <h3 className="font-bold text-lg">Platinum</h3>
            <p className="text-sm text-gray-500 mb-2">1500+ points</p>
            <p className="text-sm mb-3">{countTier("Platinum")} members</p>

            <ul className="text-sm space-y-1">
              <li>✓ Earn 3 points per $1</li>
              <li>✓ Daily free drink</li>
              <li>✓ Exclusive events</li>
              <li>✓ VIP perks</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ===== REWARDS ===== */}
      <div>
        <h2 className="text-xl font-bold mb-4">Available Rewards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            { icon: "☕", name: "Free Coffee", pts: 100, claimed: 234 },
            { icon: "🥐", name: "Free Pastry", pts: 75, claimed: 189 },
            { icon: "🎫", name: "20% Discount", pts: 150, claimed: 156 },
            { icon: "🍰", name: "Free Dessert", pts: 125, claimed: 98 },
            { icon: "🎂", name: "Birthday Special", pts: 200, claimed: 67 },
            { icon: "⭐", name: "Double Points Day", pts: 250, claimed: 45 }
          ].map((r, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl shadow flex justify-between items-center hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{r.icon}</span>
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-gray-500">
                    {r.pts} pts
                  </p>
                  <p className="text-xs text-gray-400">
                    Claimed: {r.claimed} times
                  </p>
                </div>
              </div>

              <button className="text-orange-500 text-sm font-semibold hover:underline">
                Edit
              </button>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}