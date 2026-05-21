import Badge from "./Badge";

export default function LoyaltyBadge({
  tier,
}) {

  const getStyle = () => {

    if (tier === "Platinum") {
      return "bg-purple-100 text-purple-600";
    }

    if (tier === "Gold") {
      return "bg-green-100 text-green-600";
    }

    if (tier === "Silver") {
      return "bg-orange-100 text-orange-600";
    }

    return "bg-gray-100 text-gray-600";
  };

  return (
    <Badge className={getStyle()}>
      {tier}
    </Badge>
  );
}