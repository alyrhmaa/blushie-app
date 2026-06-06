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

import Container from "../components/Container";
import StatsCard from "../components/StatsCard";
import Card from "../components/Card";
import Button from "../components/Button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function AnalyticsPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$91,000",
    },
    {
      title: "Total Orders",
      value: "3,148",
    },
    {
      title: "Active Customers",
      value: "1,234",
    },
    {
      title: "Avg Order Value",
      value: "$28.90",
    },
  ];

  return (
    <Container className="min-h-screen bg-[#f5f6fa] p-6">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-5xl font-bold">Analytics</h1>

          <p className="text-gray-400 text-xl mt-2">
            Comprehensive business insights
          </p>
        </div>

        <Button className="bg-[#5B7CFF] text-white px-6 py-3 rounded-2xl">
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {stats.map((s, i) => (
          <StatsCard key={i} title={s.title} value={s.value} />
        ))}
      </div>

      <Card className="p-5">
        <h2 className="font-semibold text-lg mb-5">Revenue Trend</h2>

        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={[]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#5B7CFF"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      <Card className="p-5 mt-6">
        <h2 className="font-semibold text-lg mb-4">Business Insights</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Revenue Insight</AccordionTrigger>

            <AccordionContent>
              Revenue menunjukkan tren positif dibandingkan periode sebelumnya.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Customer Growth</AccordionTrigger>

            <AccordionContent>
              Jumlah pelanggan aktif meningkat secara konsisten setiap bulan.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Order Performance</AccordionTrigger>

            <AccordionContent>
              Rata-rata nilai transaksi dan jumlah pesanan terus mengalami
              peningkatan.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </Container>
  );
}
