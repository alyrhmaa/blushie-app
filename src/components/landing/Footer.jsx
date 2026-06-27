import {
  Coffee,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">
              <Coffee
                size={30}
                className="text-amber-500"
              />

              <h2 className="text-2xl font-bold">
                Papi Coffee CRM
              </h2>
            </div>

            <p className="mt-5 text-gray-400 leading-relaxed">
              Platform Customer Relationship Management
              yang membantu coffee shop mengelola pelanggan,
              loyalty program, campaign, feedback,
              dan analitik bisnis secara efektif.
            </p>

          </div>

          {/* Menu */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Menu
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="#features"
                  className="hover:text-amber-500 transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#benefits"
                  className="hover:text-amber-500 transition"
                >
                  Benefits
                </a>
              </li>

              <li>
                <a
                  href="#statistics"
                  className="hover:text-amber-500 transition"
                >
                  Statistics
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="hover:text-amber-500 transition"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="hover:text-amber-500 transition"
                >
                  FAQ
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>papicoffee@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+62 812 3456 7890</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Pekanbaru, Indonesia</span>
              </div>

            </div>

          </div>

          {/* Social */}
          {/* Social */}
<div>
  <h3 className="text-lg font-semibold mb-5">
    Follow Us
  </h3>

  <div className="flex gap-4">

    <a
      href="#"
      className="bg-gray-800 hover:bg-amber-600 p-3 rounded-xl transition"
    >
      <Globe size={20} />
    </a>

    <a
      href="#"
      className="bg-gray-800 hover:bg-amber-600 p-3 rounded-xl transition"
    >
      <Mail size={20} />
    </a>

    <a
      href="#"
      className="bg-gray-800 hover:bg-amber-600 p-3 rounded-xl transition"
    >
      <Phone size={20} />
    </a>

  </div>
</div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Papi Coffee CRM.
            All Rights Reserved.
          </p>

        </div>

      </div>
  </div>
    </footer>
  );
}