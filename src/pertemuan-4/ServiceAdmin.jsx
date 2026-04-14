import servicesData from "./services.json";

export default function ServiceAdmin() {
  const data = servicesData?.services || [];

  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-5">

      {/* TITLE */}
      <h1 className="text-xl font-semibold text-gray-700 mb-4">
        Admin Panel - Data Layanan
      </h1>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full text-sm text-gray-600">
          
          {/* HEADER */}
          <thead className="bg-gradient-to-r from-pink-300 to-pink-200 text-gray-700">
            <tr>
              <th className="p-3 text-left">Nama</th>
              <th className="text-left">Kategori</th>
              <th>Harga</th>
              <th>Rating</th>
              <th>Kota</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`transition duration-200 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-pink-50`}
              >
                <td className="p-3 font-medium text-gray-800">
                  {item.name || "-"}
                </td>

                <td>{item.category || "-"}</td>

                <td className="text-center text-pink-500 font-medium">
                  Rp {item.price || 0}
                </td>

                <td className="text-center">
                  ⭐ {item.rating || 0}
                </td>

                <td className="text-center">
                  {item.location?.city || "-"}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* EMPTY */}
      {data.length === 0 && (
        <p className="text-center text-gray-400 mt-4">
          Data kosong 😢
        </p>
      )}
    </div>
  );
}