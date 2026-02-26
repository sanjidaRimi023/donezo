import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import LoginPage from "../pages/Login/Login";
import { ProtectedRoute } from "./ProtectRoute";
import DashboardLayout from "../Layouts/DashboardLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      // 🔒 Protected Routes Group
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <DashboardLayout />, // Sidebars, Topbars go here
            children: [
              {
                index: true,
                element: <div>hi</div>, // This is the actual data page
              },
              {
                path: "settings",
                element: <div>Settings Page</div>,
              },
            ],
          },
        ],
      },
    ],
  },
]);