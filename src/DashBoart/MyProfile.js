import React, { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import Header from "../components/Header/Header";
import { useAuthContext } from "../context/AuthContextProvider";
import UpdateUserProfileModal from "./UpdateUserProfileModal";
import { AiOutlineMenu } from "react-icons/ai";
import demouser from ".././assets/demouser.png";
import Footer from "../components/Footer/Footer";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const MyProfile = () => {
  const { username } = useAuthContext();
  const [userP, setUserP] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch(`http://localhost:5000/api/user/gdsohag360`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserP(data));
  }, [userP]);

  // console.log(userP[0]?.image);
  // const { name ,education , location} = userP[0]

  return (
    <>
      <Header />
      <div className="p-4 pt-5 flex">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-10 py-10">
            <div>
              <img
                style={{ backgroundClip: "padding-box" }}
                className="w-[100px] rounded-full  border-2"
                src={demouser}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-3xl text-own-primary font-bold">
                My Profile Info
              </h2>
              <span className="text-own-white py-2 inline-block">
                Bangladesh
              </span>
              <div className="flex items-center gap-10">
                <NavLink
                  to="/editProfile"
                  className="text-own-white  b px-2 py-1 rounded-md  bg-own-ternary"
                >
                  Edit Profile
                </NavLink>
                <button className="text-own-white bg-own-ternary px-2 py-1 rounded-md">
                  <AiOutlineMenu className="text-[23px]" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <ul className="flex items-center text-own-white gap-10">
              <NavLink
                to="/myProfile"
                className={({ isActive }) =>
                  location.pathname === "/myProfile" ? "text-own-primary" : ""
                }
              >
                <li>My Products 0</li>
              </NavLink>
              <NavLink
                to="my_blog"
                className={({ isActive }) =>
                  isActive ? "text-own-primary" : ""
                }
              >
                <li>My Blogs 0</li>
              </NavLink>
              <NavLink
                to="my_bookmark"
                className={({ isActive }) =>
                  isActive ? "text-own-primary" : ""
                }
              >
                <li>BookMark 0</li>
              </NavLink>
              <NavLink
                to="my_favorite_sort"
                className={({ isActive }) =>
                  isActive ? "text-own-primary" : ""
                }
              >
                <li>My Favorite Short ( 0 )</li>
              </NavLink>
            </ul>
            <hr className="border-own-primary mt-3 border-[1px]" />
            <div>{<Outlet />}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyProfile;
