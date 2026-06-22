import { useParams } from "react-router-dom";
import { useRef } from "react";

import orders from "../data/orders.json";

export default function OrderDetail() {
  const { id } = useParams();

  const printRef = useRef(null);

  const order = orders.find(
    (item) => item.id === id
  );

  const handlePrint = () => {
    const printContent = printRef.current.innerHTML;

    const printWindow = window.open(
      "",
      "",
      "width=800,height=600"
    );

    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt</title>
        </head>
        <body style="font-family: Arial; padding:20px;">
          ${printContent}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  if (!order) {
    return (
      <div className="p-6">
        Order tidak ditemukan
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#F9FAFB] min-h-screen">

      <div className="max-w-2xl mx-auto">

        <div className="flex justify-between items-center mb-6">

          <div>
            <h1 className="text-3xl font-bold">
              Order Detail
            </h1>

            <p className="text-gray-500">
              {order.id}
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-2xl"
          >
            Print Receipt
          </button>

        </div>

        <div
          ref={printRef}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6"
        >

          <div className="mb-6">
            <h2 className="font-bold text-xl">
              Papi Coffee ☕
            </h2>

            <p className="text-gray-500">
              Order Receipt
            </p>
          </div>

          <div className="space-y-3">

            <p>
              <span className="font-semibold">
                Order ID:
              </span>{" "}
              {order.id}
            </p>

            <p>
              <span className="font-semibold">
                Customer:
              </span>{" "}
              {order.customer}
            </p>

            <p>
              <span className="font-semibold">
                Status:
              </span>{" "}
              {order.status}
            </p>

            <p>
              <span className="font-semibold">
                Time:
              </span>{" "}
              {order.time}
            </p>

          </div>

          <div className="mt-6">

            <h3 className="font-semibold mb-3">
              Items
            </h3>

            <div className="space-y-2">

              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl px-3 py-2"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

          <div className="border-t mt-6 pt-6">

            <p className="text-xl font-bold text-orange-500">
              Total : ${order.total.toFixed(2)}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}