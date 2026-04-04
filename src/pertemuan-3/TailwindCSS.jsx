import { useState } from "react";

/* ================= REUSABLE COMPONENT ================= */

function InputField({ label, name, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && (
        <p className="text-red-400 text-sm mt-1 bg-red-900/30 p-1 rounded">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, error }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded-lg bg-slate-700 text-white"
      >
        <option value="">-- Pilih --</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-400 text-sm mt-1 bg-red-900/30 p-1 rounded">
          {error}
        </p>
      )}
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function TailwindCSS() {
  const [form, setForm] = useState({
    nama: "",
    noHp: "",
    jumlah: "",
    film: "",
    jam: "",
  });

  const [error, setError] = useState({});
  const [hasil, setHasil] = useState(null);

  /* ================= VALIDASI ================= */

  const validate = (name, value) => {
    let msg = "";

    if (!value) {
      msg = "Wajib diisi";
    } else if (name === "nama") {
      if (/\d/.test(value)) msg = "Tidak boleh angka";
      else if (value.length < 3) msg = "Minimal 3 huruf";
    } else if (name === "noHp") {
      if (!/^\d+$/.test(value)) msg = "Harus angka";
      else if (value.length < 10) msg = "Minimal 10 digit";
    } else if (name === "jumlah") {
      if (!/^\d+$/.test(value)) msg = "Harus angka";
      else if (value <= 0) msg = "Harus lebih dari 0";
    }

    return msg;
  };

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newError = {
      ...error,
      [name]: validate(name, value),
    };

    if (!newError[name]) delete newError[name];

    setForm({ ...form, [name]: value });
    setError(newError);
  };

  /* ================= VALID CHECK ================= */

  const isValid =
    Object.keys(error).length === 0 &&
    form.nama &&
    form.noHp &&
    form.jumlah &&
    form.film &&
    form.jam;

  /* ================= SUBMIT ================= */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setHasil(form);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-slate-800 p-6 rounded-xl w-full max-w-md shadow-lg">
        
        {/* Judul & Tujuan */}
        <h2 className="text-xl font-bold text-center mb-2">
          Booking Tiket Bioskop
        </h2>
        <p className="text-sm text-slate-400 text-center mb-4">
          Silakan isi data untuk memesan tiket film favorit Anda
        </p>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Nama"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            error={error.nama}
          />

          <InputField
            label="No HP"
            name="noHp"
            value={form.noHp}
            onChange={handleChange}
            error={error.noHp}
          />

          <InputField
            label="Jumlah Tiket"
            name="jumlah"
            value={form.jumlah}
            onChange={handleChange}
            error={error.jumlah}
          />

          <SelectField
            label="Film"
            name="film"
            value={form.film}
            onChange={handleChange}
            options={["Avengers", "Batman", "Spiderman"]}
            error={error.film}
          />

          <SelectField
            label="Jam Tayang"
            name="jam"
            value={form.jam}
            onChange={handleChange}
            options={["13:00", "16:00", "19:00"]}
            error={error.jam}
          />

          {/* CONDITIONAL BUTTON */}
          {isValid && (
            <button className="w-full bg-blue-500 p-2 rounded-lg mt-3 hover:bg-blue-600">
              Submit
            </button>
          )}
        </form>

        {/* HASIL */}
        {hasil && (
          <div className="mt-5 bg-slate-700 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Hasil Booking:</h3>
            <p>Nama: {hasil.nama}</p>
            <p>No HP: {hasil.noHp}</p>
            <p>Jumlah: {hasil.jumlah}</p>
            <p>Film: {hasil.film}</p>
            <p>Jam: {hasil.jam}</p>
          </div>
        )}
      </div>
    </div>
  );
}