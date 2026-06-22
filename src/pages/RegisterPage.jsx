import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Coffee, Eye, EyeOff } from "lucide-react";
import { usersAPI } from "../services/usersAPI";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.fullname || !data.email || !data.password) {
      alert("Isi semua field");
      return;
    }

    try {
      await usersAPI.createUser({
        fullname: data.fullname,
        email: data.email,
        password: data.password,
        role: "customer",
      });

      alert("Registrasi berhasil");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registrasi gagal");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f1e8] via-[#f3e9dc] to-[#e6d3b3]">

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
            Papi Coffee
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Create your coffee lover account ☕
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* FULLNAME */}
          <input
            type="text"
            placeholder="Full Name *"
            className="w-full px-4 py-3 rounded-xl border border-[#d6c2a8] focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            value={data.fullname}
            onChange={(e) =>
              setData({
                ...data,
                fullname: e.target.value,
              })
            }
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email *"
            className="w-full px-4 py-3 rounded-xl border border-[#d6c2a8] focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            value={data.email}
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              className="w-full px-4 py-3 rounded-xl border border-[#d6c2a8] focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              value={data.password}
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
            />

            <div
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#a0522d] to-[#d2691e] hover:opacity-90 transition shadow-md"
          >
            Create Account
          </button>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-gray-600">
            Sudah punya akun?
            <span
              onClick={() => navigate("/login")}
              className="text-orange-600 font-semibold cursor-pointer ml-1 hover:underline"
            >
              Login
            </span>
          </p>

        </form>
      </div>

    </div>
  );
}