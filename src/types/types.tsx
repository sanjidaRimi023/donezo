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

// dashboard types

export interface Overview {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growth: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
  joinDate: string; 
}

export interface Analytics {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  sales: number;
  category: "subscription" | "addon";
}

export interface DashboardData {
  overview: Overview;
  users: User[];
  analytics: Analytics[];
  products: Product[];
}

export interface DashboardContextType {
  data: DashboardData | null;
  loading: boolean;
  error: string | null;
  refreshData: () => void;
}