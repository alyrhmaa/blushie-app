function ServiceGuest() {
  const data = servicesData?.services || [];

  // 🔥 1. STATE
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  // 🔥 2. FILTER LOGIC
  const filtered = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || item.category === category) &&
      (city === "" || item.location?.city === city)
    );
  });

  return (
    <div>

      {/* 🔥 3. SEARCH + FILTER (WAJIB ADA DI ATAS) */}
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
        </select>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded-xl border"
        >
          <option value="">Semua Kota</option>
          <option value="Pekanbaru">Pekanbaru</option>
          <option value="Jakarta">Jakarta</option>
        </select>

      </div>

      {/* 🔥 4. INI TEMPAT KODE KAMU */}
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