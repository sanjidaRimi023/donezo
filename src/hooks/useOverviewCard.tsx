import { useEffect, useState } from "react";
import { axiosPublic } from "../api/axios";

export default function useOverviewCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/overview");
        setData(response.data);
      } catch {
        setError("failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, loading, error };
}
