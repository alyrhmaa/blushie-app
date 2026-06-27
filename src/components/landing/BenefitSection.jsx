import {
  CheckCircle,
  Users,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";

export default function BenefitSection() {
  const benefits = [
    {
      icon: Users,
      title: "Manajemen Pelanggan Lebih Terorganisir",
      description:
        "Simpan dan kelola seluruh data pelanggan dalam satu sistem yang terpusat.",
    },
    {
      icon: HeartHandshake,
      title: "Meningkatkan Loyalitas Pelanggan",
      description:
        "Program loyalty membantu pelanggan lebih sering melakukan pembelian ulang.",
    },
    {
      icon: TrendingUp,
      title: "Meningkatkan Pertumbuhan Bisnis",
      description:
        "Analisis data membantu pengambilan keputusan yang lebih tepat dan efektif.",
    },
  ];

  const advantages = [
    "Data pelanggan tersimpan dengan aman",
    "Mempermudah pengelolaan campaign marketing",
    "Meningkatkan kualitas pelayanan pelanggan",
    "Mendukung pengambilan keputusan berbasis data",
    "Monitoring performa bisnis secara realtime",
    "Menghemat waktu operasional",
  ];

  return (
    <section
      id="benefits"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-amber-600 font-semibold uppercase tracking-wider">
            Benefits
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Mengapa Memilih CRM Papi Coffee?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            CRM Papi Coffee membantu bisnis coffee shop dalam
            membangun hubungan pelanggan yang lebih baik dan
            meningkatkan efektivitas operasional.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <div className="space-y-8">

              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-5"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Icon
                        size={28}
                        className="text-amber-600"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Keunggulan Sistem
            </h3>

            <div className="space-y-5">

              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={22}
                    className="text-green-500"
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}