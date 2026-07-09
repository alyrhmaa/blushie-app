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
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Members", path: "/members" },
    { icon: ClipboardList, label: "Orders", path: "/orders" },
    { icon: Users, label: "Customers", path: "/customers" },
    { icon: Users, label: "Users", path: "/users" },


    { icon: Gift, label: "Loyalty", path: "/loyalty" },
    { icon: PieChart, label: "Segmentation", path: "/segmentation" },
    { icon: Megaphone, label: "Campaigns", path: "/campaigns" },
    { icon: Clock3, label: "Queue", path: "/queue" },
    { icon: MessageSquare, label: "Feedback", path: "/feedback" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[90px] bg-white border-r border-gray-200 flex flex-col items-center py-5 z-50">

      {/* LOGO */}
      <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center mb-7">
        <Coffee size={24} className="text-white" />
      </div>

      {/* MENU */}
<div className="flex flex-col gap-3 flex-1 w-full overflow-y-auto no-scrollbar items-center">
  {menus.map((item, i) => {
    const Icon = item.icon;
    const isActive =
      location.pathname === item.path ||
      location.pathname.startsWith(item.path + "/");

    return (
      <button
        key={i}
        onClick={() => navigate(item.path)}
        className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200 shrink-0
        ${
          isActive
            ? "bg-[#EEF1FF] text-[#5B6CFF]"
            : "text-gray-400 hover:bg-gray-100 hover:text-[#5B6CFF]"
        }`}
      >
        <Icon size={19} />
      </button>
    );
  })}
</div>
    </div>
  );
}