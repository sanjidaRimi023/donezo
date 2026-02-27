export type TStats = {
    totalUsers: number,
  activeUsers: number,
  revenue: number,
  growth: number
}

// analyitics
export interface AnalyticsRawData {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
}

export interface ChartData extends AnalyticsRawData {
  day: string;
}