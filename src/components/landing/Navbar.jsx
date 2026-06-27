import { Link } from "react-router-dom";
import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 px-6">
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-3xl
          bg-white/70
          backdrop-blur-xl
          border
          border-white/40
          shadow-[0_8px_32px_rgba(0,0,0,0.08)]
          px-8
        "
      >
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <Coffee
              size={28}
              className="text-orange-400"
            />

            <span className="text-2xl font-bold text-orange-500">
              Papi Coffee CRM
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">

            <a
              href="#features"
              className="
                text-gray-700
                font-medium
                hover:text-orange-500
                transition-all
                duration-300
              "
            >
              Features
            </a>

            <a
              href="#benefits"
              className="
                text-gray-700
                font-medium
                hover:text-orange-500
                transition-all
                duration-300
              "
            >
              Benefits
            </a>

            <a
              href="#statistics"
              className="
                text-gray-700
                font-medium
                hover:text-orange-500
                transition-all
                duration-300
              "
            >
              Statistics
            </a>

            <a
              href="#testimonials"
              className="
                text-gray-700
                font-medium
                hover:text-orange-500
                transition-all
                duration-300
              "
            >
              Testimonials
            </a>

            <a
              href="#faq"
              className="
                text-gray-700
                font-medium
                hover:text-orange-500
                transition-all
                duration-300
              "
            >
              FAQ
            </a>

            <Link
              to="/login"
              className="
                bg-gradient-to-r
                from-orange-400
                to-orange-500
                hover:from-orange-500
                hover:to-orange-600
                text-white
                px-6
                py-2.5
                rounded-2xl
                font-semibold
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Login
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4">

              <a
                href="#features"
                className="text-gray-700"
              >
                Features
              </a>

              <a
                href="#benefits"
                className="text-gray-700"
              >
                Benefits
              </a>

              <a
                href="#statistics"
                className="text-gray-700"
              >
                Statistics
              </a>

              <a
                href="#testimonials"
                className="text-gray-700"
              >
                Testimonials
              </a>

              <a
                href="#faq"
                className="text-gray-700"
              >
                FAQ
              </a>

              <Link
                to="/login"
                className="
                  bg-orange-500
                  text-white
                  py-3
                  rounded-xl
                  text-center
                  font-semibold
                "
              >
                Login
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}