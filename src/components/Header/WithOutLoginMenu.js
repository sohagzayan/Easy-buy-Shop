import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const WithOutLoginMenu = () => {
  return (
    <>
      <div className="flex items-center gap-6">
        <ThemeToggle />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
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
