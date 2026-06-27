import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-500">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
          Get Started Today
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
          Siap Meningkatkan Loyalitas Pelanggan?
        </h2>

        <p className="mt-6 text-lg text-amber-100 max-w-2xl mx-auto">
          Gunakan CRM Papi Coffee untuk mengelola pelanggan,
          menjalankan program loyalty, mengatur campaign,
          dan memantau performa bisnis dalam satu platform.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <Link
            to="/login"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Login CRM
            <ArrowRight size={18} />
          </Link>

          <a
            href="#features"
            className="inline-flex items-center border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-600 transition"
          >
            Pelajari Fitur
          </a>

        </div>

      </div>
    </section>
  );
}