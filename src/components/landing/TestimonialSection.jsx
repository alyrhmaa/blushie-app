export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Andi Pratama",
      role: "Owner Coffee Shop",
      message:
        "CRM Papi Coffee membantu kami memahami pelanggan dengan lebih baik. Program loyalty meningkatkan jumlah pelanggan yang kembali bertransaksi.",
    },
    {
      name: "Siti Rahma",
      role: "Marketing Staff",
      message:
        "Fitur campaign sangat membantu dalam menjalankan promosi. Semua data pelanggan tersusun dengan rapi dan mudah diakses.",
    },
    {
      name: "Budi Santoso",
      role: "Store Manager",
      message:
        "Dashboard analitik memberikan informasi yang jelas sehingga kami bisa mengambil keputusan bisnis lebih cepat.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-amber-600 font-semibold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Apa Kata Pengguna?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Pengalaman pengguna yang telah merasakan manfaat
            CRM Papi Coffee dalam mengelola hubungan pelanggan.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">

                <span className="text-5xl text-amber-500 leading-none">
                  "
                </span>

              </div>

              <p className="text-gray-600 leading-relaxed">
                {testimonial.message}
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">

                <h4 className="font-bold text-gray-900">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}