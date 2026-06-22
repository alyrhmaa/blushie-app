import members from "../data/members.json";

import Card from "../components/Card";
import StatsCard from "../components/StatsCard";
import Button from "../components/Button";

export default function SegmentationPage() {

  const totalSegments = 6;
  const largestSegment = 234;
  const avgSize = 89;
  const campaigns = 5;

  const segments = [
    {
      name: "Morning Regulars",
      count: 234,
      desc: "Customers who visit between 6-10 AM",
      spend: "$8.50",
      status: "Active",
    },
    {
      name: "Loyalty Champions",
      count: members.filter((m) => m.tier === "Platinum").length,
      desc: "Platinum tier members",
      spend: "$18.75",
      status: "VIP",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6">

      {/* HEADER */}
      <div className="flex justify-between items-start mb-8">

        <div>

          <h1 className="text-5xl font-bold text-[#1f2937]">
            Segmentation
          </h1>

          <p className="text-gray-400 text-xl mt-2">
            Analyze customer groups and behavior insights
          </p>

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

        <StatsCard
          title="Total segments"
          value={totalSegments}
        />

        <StatsCard
          title="Largest segment"
          value={largestSegment}
        />

        <StatsCard
          title="Avg segment size"
          value={avgSize}
        />

        <StatsCard
          title="Active campaigns"
          value={campaigns}
        />

      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* SEGMENTS */}
        <Card className="p-5">

          <div className="flex justify-between items-center mb-5">

            <h2 className="font-semibold text-gray-800 text-lg">
              Customer Segments
            </h2>

          </div>

          <div className="space-y-4">

            {segments.map((s, i) => (

              <div
                key={i}
                className="flex items-center justify-between"
              >

                <div className="flex gap-3">

                  <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#5B7CFF] font-bold">
                    {s.name.charAt(0)}
                  </div>

                  <div>

                    <h3 className="text-sm font-semibold text-gray-800">
                      {s.name}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      {s.desc}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <p className="font-semibold text-sm text-gray-800">
                    {s.spend}
                  </p>

                  <p className="text-xs mt-1 text-blue-500">
                    {s.status}
                  </p>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-6 flex items-center gap-4">

            <Button>
              All Segments
            </Button>

            <p className="text-sm text-gray-400">
              2.480 Total Customers
            </p>

          </div>

        </Card>

      </div>

    </div>
  );
}