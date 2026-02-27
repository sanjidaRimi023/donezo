import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosSecure.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosSecure.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
