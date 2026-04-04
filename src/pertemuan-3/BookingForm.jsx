import React, { useState } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";

const BookingForm = () => {
  const [form, setForm] = useState({
    nama: "",
    noHp: "",
    jumlah: "",
    film: "",
    jam: ""
  });

  const [error, setError] = useState({});
  const [hasil, setHasil] = useState(null);

  const handleChange = (e) => {
    const updatedForm = {
      ...form,
      [e.target.name]: e.target.value
    };

    setForm(updatedForm);

    let err = {};

    if (!updatedForm.nama) err.nama = "Nama wajib diisi";
    else if (!isNaN(updatedForm.nama)) err.nama = "Tidak boleh angka";

    if (!updatedForm.noHp) err.noHp = "No HP wajib diisi";
    else if (isNaN(updatedForm.noHp)) err.noHp = "Harus angka";

    if (!updatedForm.jumlah) err.jumlah = "Jumlah wajib diisi";
    else if (isNaN(updatedForm.jumlah)) err.jumlah = "Harus angka";

    if (!updatedForm.film) err.film = "Pilih film";
    if (!updatedForm.jam) err.jam = "Pilih jam";

    setError(err);
  };

  const isValid =
    Object.keys(error).length === 0 &&
    form.nama &&
    form.noHp &&
    form.jumlah &&
    form.film &&
    form.jam;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setHasil(form);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl border border-gray-300">

        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          🎬 Booking Tiket Bioskop
        </h2>

        <form onSubmit={handleSubmit}>
          <InputField label="Nama" name="nama" value={form.nama} onChange={handleChange} error={error.nama} />
          <InputField label="No HP" name="noHp" value={form.noHp} onChange={handleChange} error={error.noHp} />
          <InputField label="Jumlah Tiket" name="jumlah" value={form.jumlah} onChange={handleChange} error={error.jumlah} />

          <SelectField label="Film" name="film" value={form.film} onChange={handleChange} options={["Avengers", "Batman", "Spiderman"]} error={error.film} />
          <SelectField label="Jam Tayang" name="jam" value={form.jam} onChange={handleChange} options={["10:00", "13:00", "18:00"]} error={error.jam} />

          {isValid && (
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded-lg mt-3 transition">
              Pesan Tiket
            </button>
          )}
        </form>

        {hasil && (
          <div className="mt-6 bg-green-100 border border-green-300 p-4 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2">
              ✅ Detail Pesanan
            </h3>
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
};

export default BookingForm;