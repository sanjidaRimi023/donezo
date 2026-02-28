import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { DashboardProvider } from "./context/DashboardContext";
import "./index.css";
import { router } from "./router/route";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DashboardProvider>
      <RouterProvider router={router} />
    </DashboardProvider>
  </StrictMode>,
);
