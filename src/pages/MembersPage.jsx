// src/pages/MembersPage.jsx

import { useState } from "react";
import members from "../data/members.json";

import Button from "../components/Button";
import SearchInput from "../components/SearchInput";
import StatsCard from "../components/StatsCard";
import StatusBadge from "../components/StatusBadge";
import Card from "../components/Card";

export default function MembersPage() {

  const [search, setSearch] = useState("");
  const [tier, setTier] = useState("All");

  const totalMembers = members.length;

  const platinumCount = members.filter(
    (m) => m.tier === "Platinum"
  ).length;

  const newThisMonth = 87;
  const activeMembers = members.length;

  const filteredMembers = members.filter((m) => {

    const matchSearch =
      m.name.toLowerCase().includes(
        search.toLowerCase()
      );

    const matchTier =
      tier === "All" || m.tier === tier;

    return matchSearch && matchTier;

  });

  const getTierVariant = (tier) => {

    if (tier === "Platinum") {
      return "purple";
    }

    if (tier === "Gold") {
      return "green";
    }

    if (tier === "Silver") {
      return "orange";
    }

    return "gray";

  };

  return (

    <div className="p-8 bg-[#FBFCFE] min-h-screen font-sans text-[#1A1D1F]">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">

        <div>

          <h1 className="text-2xl font-bold tracking-tight">
            Members Directory
          </h1>

          <p className="text-gray-400 text-sm">
            Monitor and manage your coffee shop loyalists
          </p>

        </div>

        <div className="flex gap-3 w-full md:w-auto">

          <div className="relative flex-1 md:w-64">

            <SearchInput
              placeholder="Search members..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <Button className="bg-[#6F4FF2] hover:bg-[#5b3fd1] text-white">
            + Add Member
          </Button>

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <StatsCard
          title="Total Members"
          value={totalMembers}
        />

        <StatsCard
          title="New This Month"
          value={newThisMonth}
        />

        <StatsCard
          title="Active Now"
          value={activeMembers}
        />

        <StatsCard
          title="Platinum"
          value={platinumCount}
        />

      </div>

      {/* TABLE */}
      <Card className="overflow-hidden">

        <div className="p-6 border-b border-gray-50 flex justify-between items-center">

          <h3 className="font-bold text-lg">
            Latest Members
          </h3>

          <select
            className="text-sm bg-gray-50 border-none rounded-lg px-3 py-1.5 focus:ring-0 text-gray-500 font-medium"
            value={tier}
            onChange={(e) =>
              setTier(e.target.value)
            }
          >

            <option value="All">
              All Tiers
            </option>

            <option value="Platinum">
              Platinum
            </option>

            <option value="Gold">
              Gold
            </option>

            <option value="Silver">
              Silver
            </option>

          </select>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="text-gray-400 text-xs uppercase text-left">

                <th className="px-8 py-4 font-medium">
                  Member Name
                </th>

                <th className="px-8 py-4 font-medium">
                  Tier Status
                </th>

                <th className="px-8 py-4 font-medium">
                  Total Points
                </th>

                <th className="px-8 py-4 font-medium text-right">
                  Action
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-gray-50">

              {filteredMembers.map((m) => (

                <tr
                  key={m.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >

                  <td className="px-8 py-5">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                        {m.name.charAt(0)}
                      </div>

                      <div>

                        <p className="font-semibold text-sm">
                          {m.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          ID: {m.id.toString().padStart(4, "0")}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-8 py-5">

                    <StatusBadge
                      status={m.tier}
                      variant={getTierVariant(m.tier)}
                    />

                  </td>

                  <td className="px-8 py-5 text-sm font-medium text-gray-600">

                    {m.point.toLocaleString()}

                    <span className="text-gray-400 font-normal ml-1">
                      pts
                    </span>

                  </td>

                  <td className="px-8 py-5 text-right">

                    <Button className="bg-[#6F4FF2] hover:bg-[#5b3fd1] text-white text-sm">
                      View
                    </Button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </Card>

    </div>

  );
}