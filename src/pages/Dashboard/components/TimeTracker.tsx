import { Pause, Square } from "lucide-react"; // lucide-react ব্যবহার করলে আইকনগুলো সুন্দর দেখাবে

export default function TimeTracker() {
  return (
    <div
      className="relative overflow-hidden rounded-4xl bg-cover bg-center p-6 text-white flex flex-col justify-between"
      style={{
        backgroundImage: "url('/sidebarImage.jpg')",
        backgroundColor: "#064E3B",
      }}
    >
      <div>
        <p className="text-lg font-medium opacity-90">Time Tracker</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h2 className="text-5xl font-bold tracking-tight">01:24:08</h2>

        <div className="flex items-center gap-4 mt-2">
          <button className="w-12 h-12 flex items-center justify-center bg-white text-emerald-900 rounded-full hover:bg-gray-100 transition-colors">
            <Pause size={24} fill="currentColor" />
          </button>

          <button className="w-12 h-12 flex items-center justify-center bg-[#E11D48] text-white rounded-full hover:bg-red-700 transition-colors">
            <Square size={20} fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
}
