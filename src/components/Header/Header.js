import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useAuthContext } from "../../context/AuthContextProvider";

const Header = () => {
  const { username, logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    swal({
      title: "Are you sure?",
      text: "LogOut user and !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        logOut();
        localStorage.removeItem("accessToken");
        navigate("/login");
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div className="shadow-sm  sticky top-0 z-50  bg-[#ffffffdc]">
      <div className="navbar   container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex="0"
              className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              {/* <li>
              <NavLink to="/myProtFolio">My Portfolio</NavLink>
            </li> */}
              {username && (
                <li>
                  <NavLink to="/dashBoart">DashBoart</NavLink>
                </li>
              )}
            </ul>
          </div>
          <a
            className=" normal-case text-xl text-primary font-semibold"
            href="/"
          >
            Hardware
            <span className="text-secondary font-bold text-2xl">Fair </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="  menu-horizontal p-0">
            <li className="text-primary px-3 font-bold ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-primary px-3 font-bold ">
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li className="text-primary  px-3 font-bold ">
              <NavLink to="/myProtFolio">My Portfolio</NavLink>
            </li>
            {username && (
              <li className="text-primary px-3 font-bold ">
                <NavLink to="/dashBoart">DashBoart</NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <label
              htmlFor="my-drawer-2"
              className="px-5 py-2 swap drawer-button lg:hidden swap-rotate"
            >
              <input type="checkbox" />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          {username ? (
            <div>
              <span
                onClick={handleLogout}
                className="bg-secondary text-white font-bold px-4 py-2 rounded-lg cursor-pointer"
              >
                LogOut
              </span>
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
    </div>
  );
};

export default Header;
