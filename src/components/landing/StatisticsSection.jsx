import {
  Users,
  ShoppingBag,
  Gift,
  TrendingUp,
} from "lucide-react";

export default function StatisticsSection() {
  const statistics = [
    {
      icon: Users,
      value: "500+",
      label: "Pelanggan Aktif",
    },
    {
      icon: ShoppingBag,
      value: "1.200+",
      label: "Total Transaksi",
    },
    {
      icon: Gift,
      value: "320+",
      label: "Member Loyalty",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <section
      id="statistics"
      className="py-24 bg-amber-600"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center text-white mb-16">

          <span className="font-semibold uppercase tracking-wider">
            Statistics
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Pertumbuhan Bisnis Bersama CRM
          </h2>

          <p className="mt-4 text-amber-100 max-w-2xl mx-auto">
            Data statistik yang menunjukkan bagaimana CRM
            membantu meningkatkan hubungan pelanggan dan
            performa bisnis Papi Coffee.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 flex items-center justify-center">

                  <Icon
                    size={30}
                    className="text-amber-600"
                  />

                </div>

                <h3 className="mt-6 text-4xl font-bold text-gray-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-gray-600">
                  {item.label}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}