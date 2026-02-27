import { useState, useEffect } from 'react';
import { axiosPublic } from '../api/axios';
import type { AnalyticsRawData, ChartData } from '../types/types';


const useAnalyticsData = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const { data: rawData } = await axiosPublic.get<AnalyticsRawData[]>('/analytics');
        const formattedData: ChartData[] = rawData.map(item => ({
          ...item,
          day: new Date(item.date).toLocaleDateString('en-US', { weekday: 'short' }).charAt(0)
        }));
        setData(formattedData);
      } catch (err) {
        console.error("Analytics Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  return { data, loading };
};

export default useAnalyticsData;