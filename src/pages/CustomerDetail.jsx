import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import data from "../data/Customers.json";

import Container from "../components/Container";
import Card from "../components/Card";
import Avatar from "../components/Avatar";
import LoyaltyBadge from "../components/LoyaltyBadge";

export default function CustomerDetail() {

  const { id } = useParams();

  const [lastViewed, setLastViewed] = useState("");

  const prevIdRef = useRef(null);


  const visitCountRef = useRef(0);

  const customer = data.customers.find(
    (item) => item.customer_id == id
  );

  useEffect(() => {
    const currentTime = new Date().toLocaleString("id-ID");
    setLastViewed(currentTime);

    if (prevIdRef.current !== id) {
      visitCountRef.current += 1;
      console.log(
        `Customer ke-${visitCountRef.current} yang dibuka: ID ${id}`
      );
    }

    prevIdRef.current = id;

  }, [id]);

  if (!customer) {
    return (
      <Container className="p-5">
        Customer tidak ditemukan
      </Container>
    );
  }

  return (
    <Container className="p-6 bg-[#F9FAFB] min-h-screen">

      <Card className="p-6">

        <div className="flex items-center gap-4 mb-6">

          <Avatar
            name={customer.customer_name}
            className="w-14 h-14 text-lg"
          />

          <div>

            <h1 className="text-2xl font-bold">
              {customer.customer_name}
            </h1>

            <p className="text-gray-400 text-sm">
              Customer ID: {customer.customer_id}
            </p>

            {/* HASIL useEffect */}
            <p className="text-xs text-blue-500 mt-1">
              Last Viewed: {lastViewed}
            </p>

          </div>
        </div>

        <div className="space-y-2 text-sm">

          <p>
            <span className="font-semibold">
              Email:
            </span>{" "}
            {customer.email}
          </p>

          <p>
            <span className="font-semibold">
              Phone:
            </span>{" "}
            {customer.phone}
          </p>

          <div className="flex items-center gap-2">

            <span className="font-semibold text-sm">
              Loyalty:
            </span>

            <LoyaltyBadge
              tier={customer.loyalty}
            />

          </div>

        </div>

      </Card>

    </Container>
  );
}