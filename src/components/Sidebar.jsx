import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Gift,
  PieChart,
  Megaphone,
  Clock3,
  MessageSquare,
  BarChart3,
  Coffee,
  Package,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Users, label: "Members", path: "/members" },
  { icon: ClipboardList, label: "Orders", path: "/orders" },

  { icon: Package, label: "Products", path: "/products" },

  { icon: Gift, label: "Loyalty", path: "/loyalty" },
  { icon: PieChart, label: "Segmentation", path: "/segmentation" },
  { icon: Megaphone, label: "Campaigns", path: "/campaigns" },
  { icon: Clock3, label: "Queue", path: "/queue" },
  { icon: MessageSquare, label: "Feedback", path: "/feedback" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
];

  return (
    <div className="fixed left-0 top-0 h-screen w-[95px] bg-white border-r flex flex-col items-center py-6 z-50">

      {/* LOGO */}
      <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center mb-10">
        <Coffee size={26} className="text-white" />
      </div>

      {/* MENU */}
      <div className="flex flex-col gap-5 flex-1">
        {menus.map((item, i) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={i}
              onClick={() => navigate(item.path)}
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center transition
                ${
                  isActive
                    ? "bg-[#EEF1FF] text-[#5B6CFF]"
                    : "text-gray-400 hover:bg-gray-100 hover:text-[#5B6CFF]"
                }`}
            >
              <Icon size={20} />

              {/* tooltip */}
              <div className="absolute left-16 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-3 py-1.5 rounded-lg pointer-events-none">
                {item.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* PROFILE */}
      <div className="mt-6">
        <img
          src="https://i.pravatar.cc/100?img=12"
          className="w-12 h-12 rounded-2xl border shadow-md"
        />
      </div>
    </div>
  );
}