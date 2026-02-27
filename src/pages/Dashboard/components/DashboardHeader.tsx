import { Plus } from "lucide-react";
import Button from "../../../components/Button";

export default function DashboardHeader() {
  return (
    <>
      <header className="flex justify-between">
        <div>
          <h2 className="text-4xl font-bold">Dashboard</h2>
          <p>Plan, Prioritize and accomplish your tasks with ease</p>
        </div>
        <div className="flex gap-2">
          <Button variant="primary" className="flex gap-2 items-center">
            {" "}
            <Plus size={20} />
            Add Project
          </Button>
          <Button variant="outline">Import Data</Button>
        </div>
      </header>
    </>
  );
}
