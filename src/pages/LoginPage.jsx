import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Coffee, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("Isi semua field");
      return;
    }

    localStorage.setItem("isLogin", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f1e8] via-[#f3e9dc] to-[#e6d3b3]">

      {/* CARD */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8">

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-orange-500 to-amber-700 p-4 rounded-2xl shadow-lg">
            <Coffee className="text-white" size={28} />
          </div>
        </div>

        {/* HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#8B4513]">
            Papi Coffe
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Welcome back, coffee lover ☕
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* EMAIL */}
          <div>
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full px-4 py-3 rounded-xl border border-[#d6c2a8] focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              onChange={(e) =>
                setData({ ...data, email: e.target.value })
              }
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              className="w-full px-4 py-3 rounded-xl border border-[#d6c2a8] focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              onChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
            />

            {/* ICON SHOW PASSWORD */}
            <div
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {/* OPTIONS */}
          <div className="flex justify-between items-center text-sm mt-2">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>

            <span className="text-orange-600 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-xl text-white font-semibold 
                       bg-gradient-to-r from-[#a0522d] to-[#d2691e] 
                       hover:opacity-90 transition shadow-md"
          >
            Sign In
          </button>

        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span className="text-orange-600 font-semibold cursor-pointer">
            Sign up now
          </span>
        </p>

      </div>
    </div>
  );
}   