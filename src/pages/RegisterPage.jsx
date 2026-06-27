import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Coffee, Eye, EyeOff, User, Mail, Lock } from "lucide-react";
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff8f0] via-[#f3e9dc] to-[#e6d3b3] p-6">

      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT: Illustration / Brand */}
        <div className="hidden md:flex flex-col items-center justify-center p-10 bg-gradient-to-br from-[#f6e6d8] to-[#f3dfc6]">
          <div className="rounded-xl p-6 bg-gradient-to-br from-amber-500 to-orange-600 shadow-inner mb-6">
            <Coffee className="text-white" size={40} />
          </div>
          <h2 className="text-2xl font-extrabold text-[#7a4528]">Selamat datang di</h2>
          <h1 className="text-4xl font-black text-[#8B4513] mt-1">Papi Coffee</h1>
          <p className="text-sm text-[#5b4638] mt-3 text-center">Nikmati kopi berkualitas dan penawaran spesial untuk member.</p>

          <div className="mt-6 w-full max-w-xs">
            <svg viewBox="0 0 200 80" className="w-full opacity-80" xmlns="http://www.w3.org/2000/svg">
              <g fill="#b27a4a">
                <ellipse cx="30" cy="60" rx="8" ry="4" />
                <ellipse cx="60" cy="50" rx="6" ry="3" />
                <ellipse cx="100" cy="62" rx="9" ry="4" />
                <ellipse cx="150" cy="48" rx="7" ry="3" />
                <ellipse cx="180" cy="58" rx="5" ry="2" />
              </g>
            </svg>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-[#a0522d] to-[#d2691e] p-3 rounded-lg shadow-md">
              <Coffee className="text-white" size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#7a4528]">Buat Akun Papi Coffee</h3>
              <p className="text-sm text-[#6b5a50]">Daftar sekarang dan dapatkan promo spesial ☕</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <label className="block text-sm text-[#6b5a50]">Nama Lengkap</label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-[#8b6a52]"><User size={18} /></div>
              <input
                type="text"
                placeholder="Nama lengkap"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#e6d7c6] focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
                value={data.fullname}
                onChange={(e) => setData({ ...data, fullname: e.target.value })}
              />
            </div>

            <label className="block text-sm text-[#6b5a50]">Email</label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-[#8b6a52]"><Mail size={18} /></div>
              <input
                type="email"
                placeholder="you@domain.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#e6d7c6] focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>

            <label className="block text-sm text-[#6b5a50]">Password</label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-[#8b6a52]"><Lock size={18} /></div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Minimal 6 karakter"
                className="w-full pl-11 pr-11 py-3 rounded-xl border border-[#e6d7c6] focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />

              <div
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#7a4528] to-[#c2692a] hover:opacity-95 transition shadow-md"
            >
              Daftar Sekarang
            </button>

            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-[#efe3d6]"></div>
              <div className="text-xs text-[#a0826a]">atau daftar dengan</div>
              <div className="flex-1 h-px bg-[#efe3d6]"></div>
            </div>

            <div className="flex gap-3">
              <button type="button" className="flex-1 py-2 rounded-xl border border-[#e6d7c6] bg-white text-sm text-[#6b5a50] hover:bg-[#fff7f2] transition">Google</button>
              <button type="button" className="flex-1 py-2 rounded-xl border border-[#e6d7c6] bg-white text-sm text-[#6b5a50] hover:bg-[#fff7f2] transition">Facebook</button>
            </div>

            <p className="text-center text-sm text-[#6b5a50]">
              Sudah punya akun?
              <span onClick={() => navigate("/login")} className="text-amber-600 font-semibold cursor-pointer ml-1">Login</span>
            </p>
          </form>
        </div>

      </div>

    </div>
  );
}