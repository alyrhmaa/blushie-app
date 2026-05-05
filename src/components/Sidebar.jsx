import { NavLink } from "react-router-dom";
import { Coffee } from "lucide-react";

export default function Sidebar() {
  const menu =
    "block px-4 py-3 rounded-xl transition-all duration-200 text-sm";

  return (
    <div className="w-64 bg-gradient-to-b from-[#4E342E] to-[#3E2723] text-[#FBE9E7] shadow-2xl min-h-screen p-5">

      {/* LOGO */}
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-orange-500/20 p-2 rounded-xl">
          <Coffee size={22} className="text-orange-300" />
        </div>
        <h2 className="text-lg font-semibold tracking-wide">
          Papi Coffee
        </h2>
      </div>

      {/* MENU */}
      <div className="space-y-2">

        {[
          ["Dashboard", "/dashboard"],
          ["Members", "/members"],
          ["Orders", "/orders"],
          ["Loyalty", "/loyalty"],
          ["Segmentation", "/segmentation"],
          ["Campaigns", "/campaigns"],
          ["Queue", "/queue"],
          ["Feedback", "/feedback"],
          ["Analytics", "/analytics"],
        ].map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `${menu} ${
                isActive
                  ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md"
                  : "hover:bg-white/10 text-[#FBE9E7]/80"
              }`
            }
          >
            {label}
          </NavLink>
        ))}

      </div>
    </div>
  );
}