import React from "react";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const WithOutLoginMenu = ({ setShowMobileMenu }) => {
  const location = useLocation();
  return (
    <>
      <div className="flex items-center gap-6">
        <span className="lg:hidden block">
          <MdMenu
            onClick={() => setShowMobileMenu((prev) => !prev)}
            className="text-own-secondary text-2xl cursor-pointer"
          />
        </span>
        <ThemeToggle />
        <NavLink
          to="/"
          className={
            location.pathname === "/"
              ? " text-own-primary uppercase font-bold text-lg"
              : " text-own-secondary dark:text-own-white uppercase font-bold  text-lg"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? " text-own-primary uppercase font-bold  text-lg"
              : " text-own-secondary dark:text-own-white uppercase font-bold  text-lg"
          }
        >
          Join
        </NavLink>
      </div>
    </>
  );
};

export default WithOutLoginMenu;
