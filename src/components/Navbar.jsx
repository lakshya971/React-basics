import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="text-lg flex justify-evenly bg-gray-200 p-4">
        <button className="border-2 px-4 rounded-xl">
          <NavLink to="/"
          className={({ isActive }) => (isActive ? "text-blue-600" : "text-gray-700")}
          >HomePage</NavLink> 
        </button>
        <button className="border-2 px-4 rounded-xl">
          <NavLink to="/About"
          className={({ isActive }) => (isActive ? "text-blue-600" : "text-gray-700")}
          >About</NavLink>
        </button>
        <button className="border-2 px-4 rounded-xl">
          <NavLink to="/Dashboard"
          className={({ isActive }) => (isActive ? "text-blue-600" : "text-gray-700")}
          >Dashboard</NavLink>
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
