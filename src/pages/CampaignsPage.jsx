import campaigns from "../data/campaigns.json";

import Container from "../components/Container";
import Button from "../components/Button";
import StatsCard from "../components/StatsCard";
import CampaignCard from "../components/CampaignCard";
import Card from "../components/Card";

export default function CampaignsPage() {

  const active = campaigns.filter(
    (c) => c.status === "Active"
  ).length;

  const totalSent = campaigns.reduce(
    (acc, c) => acc + c.sent,
    0
  );

  const avgOpen = "68.5%";
  const clickRate = "22.3%";

  return (
    <Container className="min-h-screen bg-[#f5f6fa] p-6">

      {/* HEADER */}
      <div className="flex justify-between items-start mb-8">

        <div>
          <h1 className="text-5xl font-bold text-[#1f2937]">
            Campaigns
          </h1>

          <p className="text-gray-400 text-xl mt-2">
            Create and manage promotional campaigns
          </p>
        </div>

        <Button className="bg-[#5B7CFF] text-white px-6 py-3 rounded-2xl">
          + New Campaign
        </Button>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

        <StatsCard
          title="Active Campaigns"
          value={active}
        />

        <StatsCard
          title="Total Sent"
          value={totalSent.toLocaleString()}
        />

        <StatsCard
          title="Avg Open Rate"
          value={avgOpen}
        />

        <StatsCard
          title="Click Rate"
          value={clickRate}
        />

      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <Card className="p-5">

          <h2 className="font-semibold text-lg mb-5">
            Quick Start Templates
          </h2>

          <div className="space-y-4">

            {[
              {
                name: "Email Campaign",
                desc: "Send promotional emails",
                type: "Marketing"
              },
              {
                name: "Push Notification",
                desc: "Instant alerts",
                type: "Mobile"
              }
            ].map((t, i) => (
              <CampaignCard
                key={i}
                title={t.name}
                description={t.desc}
                type={t.type}
              />
            ))}

          </div>

        </Card>

        <Card className="p-5">

          <h2 className="font-semibold text-lg mb-5">
            All Campaigns
          </h2>

          <div className="space-y-5">

            {campaigns.map((c, i) => (
              <CampaignCard
                key={i}
                title={c.name}
                description={`${c.type} • ${c.created}`}
                type={c.status}
              />
            ))}

          </div>

        </Card>

      </div>

    </Container>
  );
}