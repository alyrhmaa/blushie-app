import {
  Search,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between mb-8">

      {/* LEFT */}
      <div>
        <h1 className="text-3xl font-bold text-[#111827]">
          Dashboard
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Welcome back, here's your analytics today
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* SEARCH */}
        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search here..."
            className="w-[240px] bg-white border border-gray-100 rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B6CFF]"
          />
        </div>

        {/* ICONS */}
        <button className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition">
          <Bell size={18} />
        </button>

        <button className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition">
          <Settings size={18} />
        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3 bg-white border border-gray-100 px-3 py-2 rounded-2xl">

          <img
            src="https://i.pravatar.cc/100"
            alt="avatar"
            className="w-11 h-11 rounded-xl object-cover"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[#111827]">
              CraftUI Admin
            </p>

            <p className="text-xs text-gray-400">
              Administrator
            </p>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="w-12 h-12 rounded-2xl bg-[#EEF1FF] text-[#5B6CFF] flex items-center justify-center hover:bg-[#dfe5ff] transition"
        >
          <LogOut size={18} />
        </button>

      </div>
    </div>
  );
}