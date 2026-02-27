import { Plus } from "lucide-react";
import Button from "../../../components/Button";
import OverViewCard from "./overcards/OverViewCard";


export default function DashboardHeader() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Dashboard
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md">
            Plan, Prioritize and accomplish your tasks with ease
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <Button
            variant="primary"
            className="flex-1 md:flex-none flex gap-2 justify-center items-center"
          >
            <Plus size={20} />
            <span className="whitespace-nowrap">Add Project</span>
          </Button>
          <Button variant="outline" className="flex-1 md:flex-none">
            Import Data
          </Button>
        </div>
      </section>

      <div className="mt-8">
        <OverViewCard />
      </div>
    </>
  );
}
