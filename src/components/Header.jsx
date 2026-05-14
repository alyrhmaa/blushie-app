import {
  Search,
  Bell,
  Settings,
  LogOut,
  Sun,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

      {/* LEFT */}
      <div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
            <Sun size={24} className="text-orange-500" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#111827]">
              Dashboard
            </h1>

            <p className="text-sm text-gray-400 mt-1">
              Welcome back, here's your analytics today
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-wrap items-center gap-4">

        {/* SEARCH */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search here..."
            className="w-[260px] bg-white border border-gray-100 rounded-2xl pl-11 pr-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* NOTIFICATION */}
        <button className="relative w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-orange-50 hover:text-orange-500 transition shadow-sm">

          <Bell size={18} />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* SETTINGS */}
        <button className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-orange-50 hover:text-orange-500 transition shadow-sm">
          <Settings size={18} />
        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3 bg-white border border-gray-100 px-3 py-2 rounded-2xl shadow-sm">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="avatar"
            className="w-11 h-11 rounded-xl object-cover"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[#111827]">
              Aliya Admin
            </p>

            <p className="text-xs text-gray-400">
              Coffee Shop Manager
            </p>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center hover:bg-orange-200 transition shadow-sm"
        >
          <LogOut size={18} />
        </button>

      </div>
    </div>
  );
}