import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const MobileView = ({ setShowMobileMenu }) => {
  const location = useLocation();
  return (
    <div className="absolute  top-[60px] left-0 bg-own-white w-full shadow-md ">
      <ul className="container">
        <NavLink
          to="/"
          onClick={() => setShowMobileMenu(false)}
          className={({ isActive }) =>
            location.pathname === "/" ? "text-own-primary " : " "
          }
        >
          <li className="text-[#62759d]    px-6 py-3 border-b-[1px] border-own-text-light border-opacity-20 w-full text-[17px]  ">
            Home
          </li>
        </NavLink>
        <NavLink
          onClick={() => setShowMobileMenu(false)}
          to="/shops"
          className={({ isActive }) => (isActive ? "text-own-primary" : " ")}
        >
          <li className="text-[#62759d]    px-6 py-3 border-b-[1px] border-own-text-light border-opacity-20 w-full text-[17px] ">
            Shops
          </li>
        </NavLink>
        <NavLink
          onClick={() => setShowMobileMenu(false)}
          to="/blogs"
          className={({ isActive }) => (isActive ? "text-own-primary" : " ")}
        >
          <li className="text-[#62759d]    px-6 py-3 border-b-[1px] border-own-text-light border-opacity-20 w-full text-[17px] ">
            Blogs
          </li>
        </NavLink>{" "}
        <NavLink
          onClick={() => setShowMobileMenu(false)}
          to="/service"
          className={({ isActive }) => (isActive ? "text-own-primary" : " ")}
        >
          <li className="text-[#62759d]    px-6 py-3 border-b-[1px] border-own-text-light border-opacity-20 w-full text-[17px] ">
            Service
          </li>
        </NavLink>
        <NavLink
          onClick={() => setShowMobileMenu(false)}
          to="/Contactus"
          className={({ isActive }) => (isActive ? "text-own-primary" : " ")}
        >
          <li className="text-[#62759d]    px-6 py-3 border-b-[1px] border-own-text-light border-opacity-20 w-full text-[17px] ">
            Contact Us
          </li>
        </NavLink>
        <NavLink
          onClick={() => setShowMobileMenu(false)}
          to="/aboutus"
          className={({ isActive }) => (isActive ? "text-own-primary" : " ")}
        >
          <li className="text-[#62759d]    px-6 py-3 border-b-[1px] border-own-text-light border-opacity-20 w-full text-[17px] ">
            About Us
          </li>
        </NavLink>
        <NavLink
          onClick={() => setShowMobileMenu(false)}
          to="/leaderboard"
          className={({ isActive }) => (isActive ? "text-own-primary" : " ")}
        >
          <li className="text-[#62759d]    px-6 py-3 border-b-[1px] border-own-text-light border-opacity-20 w-full text-[17px] ">
            Leaderboard
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default MobileView;
