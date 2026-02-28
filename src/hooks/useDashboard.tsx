import { createContext, useContext } from "react";
import type { DashboardContextType } from "../types/types";

export const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
