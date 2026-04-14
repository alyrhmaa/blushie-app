import React, { useState } from "react";
import servicesData from "./services.json";


// Component Guest (Tampilan Card)
function ServiceGuest() {
  const data = servicesData?.services || [];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  const filtered = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || item.category === category) &&
      (city === "" || item.location?.city === city)
    );
  });

  return (
    <div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row gap-3 mb-5">

        <input
          type="text"
          placeholder="Search layanan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 p-2 rounded-xl border"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-xl border"
        >
          <option value="">Semua Kategori</option>
          <option value="Hair Care">Hair Care</option>
          <option value="Face Care">Face Care</option>
          <option value="Nail Care">Nail Care</option>
          <option value="Makeup">Makeup</option>
          <option value="Body Care">Body Care</option>
        </select>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded-xl border"
        >
          <option value="">Semua Kota</option>
          <option value="Pekanbaru">Pekanbaru</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Bandung">Bandung</option>
          <option value="Medan">Medan</option>
        </select>

      </div>

      {/* CARD */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl p-3 hover:scale-105 transition"
          >
            <img
              src={item.image}
              className="w-full h-40 object-cover rounded-xl"
            />

            <div className="mt-3">
              <h2 className="font-semibold text-gray-700">
                {item.name || "No Name"}
              </h2>

              <p className="text-xs text-gray-400">
                {item.category || "-"}
              </p>

              <div className="flex justify-between mt-2">
                <span className="text-pink-500 font-medium">
                  Rp {item.price || 0}
                </span>
                <span className="text-xs text-gray-500">
                  ⭐ {item.rating || 0}
                </span>
              </div>

              <div className="mt-2 text-xs text-gray-400">
                {item.location?.city || "-"} • {item.staff?.name || "-"}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

// Component Admin (Tampilan Table)
function ServiceAdmin() {
  const data = servicesData?.services || [];
  
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-5">
      <h1 className="text-xl font-semibold text-gray-700 mb-4">Admin Panel - Data Layanan</h1>
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full text-sm text-gray-600">
          <thead className="bg-gradient-to-r from-pink-300 to-pink-200 text-gray-700">
            <tr>
              <th className="p-3 text-left">Nama</th>
              <th className="text-left">Kategori</th>
              <th>Harga</th>
              <th>Rating</th>
              <th>Kota</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className={`transition duration-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-pink-50`}>
                <td className="p-3 font-medium text-gray-800">{item.name || "-"}</td>
                <td>{item.category || "-"}</td>
                <td className="text-center text-pink-500 font-medium">Rp {item.price?.toLocaleString() || 0}</td>
                <td className="text-center">⭐ {item.rating || 0}</td>
                <td className="text-center">{item.location?.city || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.length === 0 && <p className="text-center text-gray-400 mt-4">Data kosong 😢</p>}
    </div>
  );
}

// Main App Component
export default function ServiceApp() {
  const [view, setView] = useState("guest");
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex flex-col items-center">
      <h1 className="text-3xl font-semibold mt-6 text-gray-700">Beauty Service Dashboard</h1>
      <div className="mt-4 bg-white p-1 rounded-full shadow flex">
        <button 
          onClick={() => setView("guest")} 
          className={`px-6 py-1 rounded-full ${view === "guest" ? "bg-pink-400 text-white" : "text-gray-500"}`}
        >
          Guest
        </button>
        <button 
          onClick={() => setView("admin")} 
          className={`px-6 py-1 rounded-full ${view === "admin" ? "bg-gray-700 text-white" : "text-gray-500"}`}
        >
          Admin
        </button>
      </div>
      <div className="w-full max-w-6xl mt-6 px-4">
        {view === "guest" ? <ServiceGuest /> : <ServiceAdmin />}
      </div>
    </div>
  );
}