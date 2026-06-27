import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Apa itu CRM Papi Coffee?",
      answer:
        "CRM Papi Coffee adalah sistem Customer Relationship Management yang membantu mengelola pelanggan, loyalty program, campaign, feedback, dan analitik bisnis dalam satu platform.",
    },
    {
      question: "Siapa yang dapat menggunakan sistem ini?",
      answer:
        "Sistem ini dapat digunakan oleh Owner, Admin, Staff, maupun pihak yang memiliki hak akses untuk mengelola operasional dan hubungan pelanggan.",
    },
    {
      question: "Apakah data pelanggan aman?",
      answer:
        "Ya. Data pelanggan disimpan pada database yang aman dan hanya dapat diakses oleh pengguna yang memiliki izin akses sesuai perannya.",
    },
    {
      question: "Bagaimana loyalty program bekerja?",
      answer:
        "Pelanggan akan mendapatkan poin dari transaksi yang dilakukan. Poin tersebut dapat digunakan untuk mendapatkan reward atau penawaran khusus.",
    },
    {
      question: "Apakah sistem menyediakan laporan bisnis?",
      answer:
        "Ya. CRM menyediakan dashboard analitik yang menampilkan data pelanggan, transaksi, campaign, serta berbagai indikator performa bisnis lainnya.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-amber-600 font-semibold uppercase tracking-wider">
            FAQ
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-4 text-gray-600">
            Temukan jawaban dari pertanyaan umum mengenai
            CRM Papi Coffee.
          </p>

        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <ChevronUp className="text-amber-600" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}