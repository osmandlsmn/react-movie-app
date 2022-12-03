import * as React from "react";
import { Link } from "react-router-dom";
import SearchBox from "@/components/SearchBox/index";

const Header: React.FC = () => {
  return (
    <div className="container mt-5 flex flex-col items-center justify-between px-2 md:mx-auto md:flex-row">
      <div className="mb-6 flex flex-col items-center md:mb-0 md:flex-row">
        <div>
          <h1 className="text-4xl font-bold tracking-wider text-white">
            Anonime
          </h1>
        </div>
        <nav className="space-x-4 md:ml-24">
          <Link to="/">Home</Link>
          <Link to="/latest">List anime</Link>
        </nav>
      </div>
      <SearchBox />
    </div>
  );
};

export default Header;
