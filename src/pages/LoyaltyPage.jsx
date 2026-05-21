// src/pages/LoyaltyPage.jsx

import members from "../data/members.json";

import Button from "../components/Button";
import Card from "../components/Card";

export default function LoyaltyPage() {

  const totalPoints = members.reduce((acc, m) => acc + m.point, 0);
  const activeMembers = members.length;
  const rewardsClaimed = 1234;
  const redemptionRate = "68%";

  const countTier = (tier) =>
    members.filter((m) => m.tier === tier).length;

  return (
    <div className="p-8 bg-[#FBFCFE] min-h-screen font-sans text-[#1A1D1F]">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Loyalty Program
          </h1>

          <p className="text-gray-400 text-sm">
            Manage rewards and member tiers for Papi Coffee
          </p>
        </div>

        <Button className="bg-[#6F4FF2] hover:bg-[#5b3fd1] text-white shadow-sm">
          + Create Reward
        </Button>

      </div>

      {/* STATS SECTION */}
      <Card className="overflow-hidden mb-10">

        <div className="p-6 flex justify-between items-center border-b border-gray-50">

          <h3 className="font-bold text-lg">
            Program Insights
          </h3>

          <div className="flex bg-gray-50 p-1 rounded-xl">

            <button className="px-4 py-1.5 bg-white shadow-sm rounded-lg text-xs font-bold">
              Day
            </button>

            <button className="px-4 py-1.5 text-gray-400 text-xs font-bold">
              Week
            </button>

            <button className="px-4 py-1.5 text-gray-400 text-xs font-bold">
              Month
            </button>

          </div>

        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* CARD 1 */}
          <div>
            <h2 className="text-3xl font-bold text-[#1A1D1F]">
              {totalPoints.toLocaleString()}
            </h2>

            <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider font-semibold">
              Total Points Issued
            </p>
          </div>

          {/* CARD 2 */}
          <div className="border-l border-gray-100 pl-4">
            <h2 className="text-3xl font-bold text-[#6F4FF2]">
              {rewardsClaimed}
            </h2>

            <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider font-semibold">
              Rewards Claimed
            </p>
          </div>

          {/* CARD 3 */}
          <div className="border-l border-gray-100 pl-4">
            <h2 className="text-3xl font-bold text-[#00B074]">
              {activeMembers}
            </h2>

            <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider font-semibold">
              Active Members
            </p>
          </div>

          {/* CARD 4 */}
          <div className="border-l border-gray-100 pl-4">
            <h2 className="text-3xl font-bold text-[#FF92AE]">
              {redemptionRate}
            </h2>

            <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider font-semibold">
              Redemption Rate
            </p>
          </div>

        </div>

      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* MEMBERSHIP */}
        <div className="lg:col-span-1 space-y-6">

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            Membership Tiers

            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md">
              Live
            </span>
          </h2>

          {[
            {
              name: "Silver",
              color: "bg-gray-400",
              pts: "0+",
              count: countTier("Silver"),
              perks: "1 pt/$1 • Monthly promo"
            },
            {
              name: "Gold",
              color: "bg-[#FFB039]",
              pts: "1000+",
              count: countTier("Gold"),
              perks: "2 pts/$1 • Weekly drink"
            },
            {
              name: "Platinum",
              color: "bg-[#6F4FF2]",
              pts: "1500+",
              count: countTier("Platinum"),
              perks: "3 pts/$1 • VIP Perks"
            }
          ].map((t, idx) => (

            <Card
              key={idx}
              className="p-5 hover:shadow-md transition-shadow"
            >

              <div className="flex justify-between items-start mb-3">

                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-gray-200`}>
                  {t.name[0]}
                </div>

                <span className="text-[10px] font-bold text-gray-400 uppercase">
                  {t.pts} PTS
                </span>

              </div>

              <h3 className="font-bold text-lg">
                {t.name}
              </h3>

              <p className="text-blue-600 text-xs font-bold mb-2">
                {t.count} Members Joined
              </p>

              <p className="text-gray-400 text-xs leading-relaxed">
                {t.perks}
              </p>

            </Card>

          ))}

        </div>

        {/* REWARDS */}
        <div className="lg:col-span-2">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">
              Available Rewards
            </h2>

            <button className="text-xs font-bold text-[#6F4FF2] hover:underline">
              View All Gallery
            </button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {[
              {
                icon: "☕",
                name: "Free Coffee",
                pts: 100,
                claimed: 234,
                color: "bg-orange-50 text-orange-600"
              },
              {
                icon: "🥐",
                name: "Free Pastry",
                pts: 75,
                claimed: 189,
                color: "bg-green-50 text-green-600"
              }
            ].map((r, i) => (

              <Card
                key={i}
                className="p-5 flex items-center justify-between group hover:border-[#6F4FF2]/30 transition-all"
              >

                <div className="flex items-center gap-4">

                  <div className={`w-12 h-12 rounded-xl ${r.color} flex items-center justify-center text-2xl`}>
                    {r.icon}
                  </div>

                  <div>

                    <p className="font-bold text-sm text-[#1A1D1F]">
                      {r.name}
                    </p>

                    <div className="flex items-center gap-2 mt-0.5">

                      <span className="text-xs font-bold text-gray-500">
                        {r.pts} pts
                      </span>

                      <span className="text-[10px] text-gray-300">
                        •
                      </span>

                      <span className="text-[10px] text-gray-400">
                        {r.claimed} times claimed
                      </span>

                    </div>

                  </div>

                </div>

                <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-gray-50 rounded-lg transition-all">
                  ...
                </button>

              </Card>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}