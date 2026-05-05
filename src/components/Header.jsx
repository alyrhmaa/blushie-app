import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center bg-white px-6 py-4 shadow">

      {/* ===== LEFT (SEARCH) ===== */}
      <div className="w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* ===== RIGHT (USER INFO) ===== */}
      <div className="flex items-center gap-4">

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
          BB
        </div>

        {/* Name + Role */}
        <div className="text-right">
          <p className="font-semibold text-sm">Barista Admin</p>
          <p className="text-xs text-gray-500">Manager</p>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-2 rounded-xl text-sm hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>
    </div>
  );
}