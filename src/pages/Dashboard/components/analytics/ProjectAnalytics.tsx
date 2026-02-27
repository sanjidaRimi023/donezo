import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import useAnalyticsData from "../../../../hooks/useAnalyticsData";
import CustomCapsuleBar from "./CustomCapsuleBar";

const ProjectAnalytics: React.FC = () => {
  const { data, loading } = useAnalyticsData();
  if (loading)
    return <div className="h-80 w-full animate-pulse bg-gray-50 rounded-4xl" />;
  return (
    <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm mt-6">
      <h2 className="text-2xl font-bold">
        Project Analytics
      </h2>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 14, fontWeight: 500 }}
              dy={15}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={({ active, payload }) => {
                if (active && payload?.length) {
                  return (
                    <div className="bg-white px-3 py-1.5 shadow-xl rounded-xl border border-gray-50 text-xs font-bold text-primary">
                      {payload[0].value} units
                    </div>
                  );
                }
                return null;
              }}
            />

            <Bar dataKey="clicks" shape={<CustomCapsuleBar />} barSize={35}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.clicks > 600 ? "#064e3b" : "#10b981"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectAnalytics;
