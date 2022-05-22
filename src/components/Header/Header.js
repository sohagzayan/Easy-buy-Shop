import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";

const Header = () => {
  const { username } = useAuthContext();
  return (
    <div class="navbar ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabindex="0"
            class="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/">My Portfolio</NavLink>
            </li>
            {username && (
              <li>
                <NavLink to="/">DashBoart</NavLink>
              </li>
            )}
          </ul>
        </div>
        <a
          class="btn btn-ghost normal-case text-xl text-primary font-semibold"
          href="/"
        >
          Hardware{" "}
          <span className="text-secondary font-bold text-2xl">Fair </span>
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="  menu-horizontal p-0">
          <li className="text-primary px-3 font-bold ">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-primary px-3 font-bold ">
            <NavLink to="/">Blogs</NavLink>
          </li>
          <li className="text-primary  px-3 font-bold ">
            <NavLink to="/">My Portfolio</NavLink>
          </li>
          <li className="text-primary px-3 font-bold ">
            <NavLink to="/">DashBoart</NavLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        {username ? (
          <div>
            <span className="bg-secondary text-white font-bold px-4 py-2 rounded-lg cursor-pointer">LogOut</span>
          </div>
        ) : (
          <div>
            <NavLink
              to="/login"
              className=" text-primary font-bold mr-6 text-lg"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="px-4 py-2 rounded-lg btn-secondary text-white font-bold "
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
