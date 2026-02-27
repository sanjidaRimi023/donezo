import { ArrowUp, ArrowUpRight } from "lucide-react";

import { OverviewCardSkeleton } from "./OverviewCardSkeleton";
import useOverviewCardData from "../../../../hooks/useOverviewCardData";

const OverViewCard = () => {
  const { data, loading, error } = useOverviewCardData();
  if (loading) return <OverviewCardSkeleton />;
  if (error) return <div className="text-red-500 p-6">{error}</div>;

  const cards = [
    {
      title: "Total Users",
      value: data?.totalUsers.toLocaleString(),
      change: "12%",
    },
    {
      title: "Active Users",
      value: data?.activeUsers.toLocaleString(),
      change: "5%",
    },
    {
      title: "Total Revenue",
      value: `$${data?.revenue.toLocaleString()}`,
      change: "8%",
    },
    { title: "Growth Rate", value: `${data?.growth}%`, change: "2.4%" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5 ">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="group relative cursor-pointer overflow-hidden rounded-4xl bg-white p-8 transition-all duration-500 hover:bg-linear-to-br hover:from-primary hover:to-accent text-black hover:text-white space-y-4 border border-gray-100 shadow-sm"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium tracking-tight opacity-80 group-hover:opacity-100">
              {card.title}
            </h3>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black transition-all duration-300 group-hover:bg-white group-hover:text-primary group-hover:border-white">
              <ArrowUpRight size={22} strokeWidth={2.5} />
            </div>
          </div>

          <div>
            <span className="text-5xl font-bold tracking-tighter">
              {card.value}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center justify-center rounded bg-gray-100 text-primary transition-colors duration-300 group-hover:bg-[#d4ff3f]/20 group-hover:text-[#d4ff3f]">
              <ArrowUp size={14} strokeWidth={3} />
            </div>

            <span className=" font-medium transition-colors duration-300 text-primary group-hover:text-[#d4ff3f]">
              {card.change} Increased from last month
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverViewCard;
