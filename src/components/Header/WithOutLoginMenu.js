import React from "react";
import { NavLink } from "react-router-dom";

const WithOutLoginMenu = () => {
  return (
    <>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " text-own-primary uppercase font-bold mr-6 text-lg"
              : " text-own-secondary dark:text-own-white uppercase font-bold mr-6 text-lg"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? " text-own-primary uppercase font-bold mr-6 text-lg"
              : " text-own-secondary dark:text-own-white uppercase font-bold mr-6 text-lg"
          }
        >
          Join
        </NavLink>
      </div>
    </>
  );
};

export default WithOutLoginMenu;
