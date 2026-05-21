import Avatar from "./Avatar";
import LoyaltyBadge from "./LoyaltyBadge";

export default function MemberTable({
  members,
}) {
  return (
    <tbody className="divide-y divide-gray-50">

      {members.map((m) => (

        <tr
          key={m.id}
          className="
            hover:bg-gray-50/50
            transition-colors
          "
        >

          <td className="px-8 py-5">

            <div className="flex items-center gap-3">

              <Avatar name={m.name} />

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
            <LoyaltyBadge tier={m.tier} />
          </td>

          <td className="px-8 py-5 text-sm font-medium text-gray-600">
            {m.point.toLocaleString()} pts
          </td>

        </tr>

      ))}

    </tbody>
  );
}