import { Plus } from "lucide-react";
import { useDashboard } from "../../../hooks/useDashboard";
import Button from "../../../components/Button";

export const ProjectList = () => {
  const { data, loading } = useDashboard();

  if (loading) return <div className="animate-pulse h-60  rounded-3xl" />;

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold ">Project</h3>
        <Button>
          <Plus size={16} /> New
        </Button>
      </div>

      <div className="space-y-5">
        {data?.products.map((project) => (
          <div key={project.id} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
               <span className="text-primary font-bold">P</span>
            </div>
           
            <div className="flex-1">
              <h4 className="text-sm font-semibold  leading-tight">{project.name}</h4>
              <p className="text-gray-400 text-[10px]">Due date: Nov 26, 2024</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};