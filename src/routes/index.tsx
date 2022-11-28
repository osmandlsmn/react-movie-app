import { createBrowserRouter } from "react-router-dom";

import Layout from "@/layouts/index";
import Home from "@/pages/Home/index";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
