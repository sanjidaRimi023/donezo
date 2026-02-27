import { Award } from "lucide-react";

export default function SideButtomImage() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-cover bg-center flex items-end p-6 m-4 min-h-50"
      style={{ backgroundImage: "url('/sidebarImage.jpg')" }}
    >
     

      <div className="relative z-10 text-white w-full">
        <div className="mb-3 inline-flex items-center justify-center rounded-full bg-background p-2 text-primary">
          <Award size={18} />
        </div>

        <h1 className="text-lg text-white leading-tight">
          Download our mobile application
        </h1>

        <p className="text-sm text-gray-200 mt-1">
          Get easy access anytime
        </p>

        <button className="mt-4 w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
          Download
        </button>
      </div>
    </div>
  );
}