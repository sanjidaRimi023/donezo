import { useEffect, useState, type ReactNode } from "react";
import { axiosPublic } from "../api/axios";
import { DashboardContext } from "../hooks/useDashboard";
import type { DashboardData } from "../types/types";

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const response = await axiosPublic.get("/dashboard");
      setData(response.data);
      setError(null);
    } catch (err) {
      setError("Dashboard data loading failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <DashboardContext.Provider
      value={{ data, loading, error, refreshData: fetchDashboardData }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
