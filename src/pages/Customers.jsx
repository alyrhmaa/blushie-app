import { useState } from "react";
import { Link } from "react-router-dom";

import data from "../data/Customers.json";

import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import Table from "../components/Table";
import SearchInput from "../components/SearchInput";
import LoyaltyBadge from "../components/LoyaltyBadge";
import Avatar from "../components/Avatar";

export default function Customers() {

  const [search, setSearch] = useState("");

  const headers = [
    "ID",
    "Customer",
    "Email",
    "Phone",
    "Status"
  ];

  const filtered = data.customers.filter((c) =>
    c.customer_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Container className="p-6 bg-[#F9FAFB] min-h-screen">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h1 className="text-3xl font-bold">
            Customers
          </h1>

          <p className="text-gray-400 mt-1">
            Home / Customers
          </p>
        </div>

        <Button className="bg-orange-500 text-white px-5 py-3 rounded-2xl">
          Add Customer
        </Button>

      </div>

      <div className="mb-5">
        <SearchInput
          placeholder="Search customer..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <Card>

        <Table headers={headers}>

          {filtered.map((item) => (
            <tr key={item.customer_id}>

              <td className="px-4 py-4">
                #{item.customer_id}
              </td>

              <td className="px-4 py-4">

                <div className="flex items-center gap-3">

                  <Avatar
                    name={item.customer_name}
                  />

                  <Link
                    to={`/customers/${item.customer_id}`}
                    className="text-[#5B6CFF] font-medium"
                  >
                    {item.customer_name}
                  </Link>

                </div>

              </td>

              <td className="px-4 py-4">
                {item.email}
              </td>

              <td className="px-4 py-4">
                {item.phone}
              </td>

              <td className="px-4 py-4">

                <LoyaltyBadge
                tier={item.loyalty}
              />

              </td>

            </tr>
          ))}

        </Table>

      </Card>

    </Container>
  );
}