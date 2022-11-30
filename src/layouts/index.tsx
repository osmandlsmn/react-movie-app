import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="xs:px-5 container mx-auto max-w-5xl px-3 2xl:max-w-[1440px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
