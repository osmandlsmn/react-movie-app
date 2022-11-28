import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
