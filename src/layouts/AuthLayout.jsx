import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-[#f5f1e8] via-[#f3e9dc] to-[#e6d3b3]">
      
      {/* Container pembungkus halaman login */}
      <div className="w-full px-4">
        <Outlet />
      </div>

    </div>
  );
}