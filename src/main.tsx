import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "@/routes/index";

import "@/styles/tailwind.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={routes} />
);
