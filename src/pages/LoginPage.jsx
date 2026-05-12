import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Coffee, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.username || !data.password) {
      alert("Isi semua field");
      return;
    }

    try {
      const response = await fetch(
        "https://dummyjson.com/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: data.username,
            password: data.password,
            expiresInMins: 30,
          }),
        }
      );

      const result = await response.json();

      console.log(result);

      // kalau login gagal
      if (!response.ok) {
        alert(result.message || "Login gagal");
        return;
      }

      // simpan data user
      localStorage.setItem("token", result.accessToken);
      localStorage.setItem("user", JSON.stringify(result));

      alert("Login berhasil!");

      navigate("/dashboard");

    } catch (error) {
      console.log(error);
      alert("Terjadi error");
    }
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

          {/* USERNAME */}
          <div>
            <input
              type="text"
              placeholder="Username *"
              className="w-full px-4 py-3 rounded-xl border border-[#d6c2a8] focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              value={data.username}
              onChange={(e) =>
                setData({
                  ...data,
                  username: e.target.value,
                })
              }
            />
          </div>

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

            {/* ICON */}
            <div
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </div>
          </div>

          {/* LOGIN INFO */}
          <div className="text-sm text-gray-600 bg-orange-50 border border-orange-200 p-3 rounded-xl">
            <p>Gunakan akun demo:</p>
            <p><b>Username:</b> emilys</p>
            <p><b>Password:</b> emilyspass</p>
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

      </div>
    </div>
  );
}