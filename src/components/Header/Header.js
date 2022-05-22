import React from "react";

const Header = () => {
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
            <li >
              <a>My Order</a>
            </li>
            <li>
              <a>Add A Review</a>
            </li>
            <li>
              <a>My Profile</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>My Portfolio</a>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl text-base-100 font-semibold" href="/">
        <span className="text-secondary font-bold px-2">H</span>ardware <span className="text-secondary font-bold text-2xl">Fair </span>
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu  menu-horizontal p-0">
          <li className="text-neutral font-bold ">
            <a>My Order</a>
          </li>
          <li className="text-neutral font-bold ">
            <a>Add A Review</a>
          </li>
          <li className="text-neutral font-bold ">
            <a>My Profile</a>
          </li>
          <li className="text-neutral font-bold " >
            <a>Blog</a>
          </li>
          <li className="text-neutral font-bold ">
            <a>My Portfolio</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <a href="/" class=" text-neutral font-bold mr-6 text-lg">
          Login
        </a>
        <a href="/" class="px-4 py-2 rounded-lg btn-secondary font-bold ">
         Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
