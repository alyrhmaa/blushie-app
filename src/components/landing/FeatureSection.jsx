import {
  Users,
  Gift,
  Megaphone,
  MessageSquare,
  BarChart3,
  ClipboardList,
} from "lucide-react";

const features = [
  {
    title: "Customer Management",
    description:
      "Kelola data pelanggan dengan mudah dan terstruktur untuk meningkatkan hubungan bisnis.",
    icon: Users,
  },
  {
    title: "Loyalty Program",
    description:
      "Berikan reward dan poin kepada pelanggan untuk meningkatkan loyalitas.",
    icon: Gift,
  },
  {
    title: "Campaign Management",
    description:
      "Buat dan pantau kampanye promosi agar lebih efektif dan tepat sasaran.",
    icon: Megaphone,
  },
  {
    title: "Feedback Management",
    description:
      "Kumpulkan kritik dan saran pelanggan untuk meningkatkan kualitas layanan.",
    icon: MessageSquare,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Pantau performa bisnis melalui visualisasi data dan laporan realtime.",
    icon: BarChart3,
  },
  {
    title: "Queue Management",
    description:
      "Kelola antrean pelanggan dengan lebih cepat dan efisien.",
    icon: ClipboardList,
  },
];

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-amber-600 font-semibold uppercase tracking-wider">
            Features
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Fitur Utama CRM Papi Coffee
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Semua fitur yang Anda butuhkan untuk membangun
            hubungan pelanggan yang lebih kuat dan meningkatkan
            performa bisnis coffee shop.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center group-hover:bg-amber-600 transition">

                  <Icon
                    size={30}
                    className="text-amber-600 group-hover:text-white transition"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}