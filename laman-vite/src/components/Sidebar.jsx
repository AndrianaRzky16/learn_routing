import React from "react";
import Case from "./Case";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-blue-600 py-2 h-screen">
      <Case>
        <div className="flex flex-col items-center">
          <Link
            className="mb-4 text-sm font-semibold uppercase text-white"
            to="/"
          >
            React Starter
          </Link>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
        </div>
      </Case>
    </div>
  );
};

export default Sidebar;
