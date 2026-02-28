import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export const ProjectProgress = () => {
  const chartData = [
    { name: "Completed", value: 41, color: "#065f46" }, 
    { name: "In Progress", value: 30, color: "#064e3b" }, 
    { name: "Pending", value: 29, color: "#e5e7eb" },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 h-full text-center">
      <h3 className="text-xl font-bold text-gray-800 text-left mb-2">
        Project Progress
      </h3>

      <div className="h-64 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="70%"
              startAngle={180}
              endAngle={0}
              innerRadius={80}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Central Percentage Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2">
          <h2 className="text-5xl font-black text-gray-800">41%</h2>
          <p className="text-gray-400 font-medium">Project Ended</p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
          <div className="w-4 h-4 rounded-full bg-emerald-600"></div> Completed
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
          <div className="w-4 h-4 rounded-full bg-emerald-900"></div> In
          Progress
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
          <div className="w-4 h-4 rounded-full bg-gray-200"></div> Pending
        </div>
      </div>
    </div>
  );
};
