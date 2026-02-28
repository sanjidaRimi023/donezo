import ProjectAnalytics from "./analytics/ProjectAnalytics";
import DashboardHeader from "./DashboardHeader";
import { ProjectList } from "./ProjectList";
import { ProjectProgress } from "./ProjectProgress";
import ReminderCard from "./ReminderCard";
import { TeamCollaboration } from "./TeamCollaboration";
import TimeTracker from "./TimeTracker";

export default function DashboardHome() {
  return (
    <div className="min-h-screen">
      <DashboardHeader />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-9 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <ProjectAnalytics />
            </div>
            <div className="md:col-span-1">
              <ReminderCard />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamCollaboration />
            <ProjectProgress />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 space-y-6">
          <ProjectList />
          <TimeTracker />
        </div>
      </div>
    </div>
  );
}
