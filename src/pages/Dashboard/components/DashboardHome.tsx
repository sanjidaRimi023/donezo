import ProjectAnalytics from "./analytics/ProjectAnalytics";
import DashboardHeader from "./DashboardHeader";

export default function DashboardHome() {
  return (
    <div>
      <DashboardHeader />
      <ProjectAnalytics/>
    </div>
  );
}
