import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-[#F5F6FA] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <main className="ml-[90px] min-h-screen p-6">
        <Outlet />
      </main>

    </div>
  );
}