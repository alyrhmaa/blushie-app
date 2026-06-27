import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-40 pb-24 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              Customer Relationship Management
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Tingkatkan Loyalitas Pelanggan dengan
              <span className="block text-amber-600">
                Papi Coffee CRM
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Kelola pelanggan, loyalty program, campaign,
              feedback, dan analitik bisnis dalam satu sistem
              yang terintegrasi untuk membantu pertumbuhan
              bisnis coffee shop Anda.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/login"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-7 py-4 rounded-xl font-semibold transition"
              >
                Login CRM
                <ArrowRight size={18} />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center border border-amber-600 text-amber-600 hover:bg-amber-50 px-7 py-4 rounded-xl font-semibold transition"
              >
                Lihat Fitur
              </a>

            </div>

            {/* Stats Mini */}
            <div className="grid grid-cols-3 gap-6 mt-12">

              <div>
                <h3 className="text-3xl font-bold text-amber-600">
                  500+
                </h3>
                <p className="text-gray-600 text-sm">
                  Pelanggan Aktif
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-amber-600">
                  95%
                </h3>
                <p className="text-gray-600 text-sm">
                  Kepuasan Pelanggan
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-amber-600">
                  50+
                </h3>
                <p className="text-gray-600 text-sm">
                  Campaign
                </p>
              </div>

            </div>

          </div>

          {/* Right Content */}
          <div className="relative">

            <div className="bg-white rounded-3xl shadow-2xl border p-6">

              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">
                  CRM Dashboard
                </h3>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-amber-50 p-5 rounded-xl">
                  <p className="text-gray-500 text-sm">
                    Customers
                  </p>
                  <h4 className="text-3xl font-bold mt-2">
                    500+
                  </h4>
                </div>

                <div className="bg-orange-50 p-5 rounded-xl">
                  <p className="text-gray-500 text-sm">
                    Loyalty Members
                  </p>
                  <h4 className="text-3xl font-bold mt-2">
                    320
                  </h4>
                </div>

                <div className="bg-yellow-50 p-5 rounded-xl">
                  <p className="text-gray-500 text-sm">
                    Campaign
                  </p>
                  <h4 className="text-3xl font-bold mt-2">
                    50+
                  </h4>
                </div>

                <div className="bg-green-50 p-5 rounded-xl">
                  <p className="text-gray-500 text-sm">
                    Satisfaction
                  </p>
                  <h4 className="text-3xl font-bold mt-2">
                    95%
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}