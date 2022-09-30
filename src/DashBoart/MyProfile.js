import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { useAuthContext } from "../context/AuthContextProvider";
import UpdateUserProfileModal from "./UpdateUserProfileModal";
import { AiOutlineMenu } from "react-icons/ai";
import demouser from ".././assets/demouser.png";
import Footer from "../components/Footer/Footer";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useCurrentUserQuery } from "../store/API/user";
import { useGetFetchQuery } from "../utiliti/GetFatchData";
import Loading from "../components/Loading/Loading";
import { useQuery } from "react-query";
import { getBookMarkData, getAddToCard } from "../Querys/BookmarkQuery";
import axios from "axios";
const MyProfile = () => {
  const { username } = useAuthContext();
  const [userP, setUserP] = useState([]);
  const [percess, setPercess] = useState([]);
  const userId = Cookies.get("id");
  const accesToken = Cookies.get("token");
  const response = useCurrentUserQuery(userId);
  const token = Cookies.get("token");
  const id = Cookies.get("id");
  const [bookmark, setBookmark] = useState([]);
  const [myProduct, setMyProduct] = useState([]);
  // console.log(response?.data?.currentuser[0]?.tools);
  const location = useLocation();

  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:5000/api/v1/tools?currentUser=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      fetch(
        `http://localhost:5000/api/v1/purchase?email=${response?.currentData?.currentuser[0]?.email}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ),
      fetch(`http://localhost:5000/api/v1/bookmark`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then((data) => {
        setMyProduct(data[0]);
        setPercess(data[1]);
        setBookmark(data[2]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [response, token]);

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
                src={response?.data?.currentuser[0]?.image}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-3xl text-own-primary font-bold">
                My Profile Info
              </h2>
              <span className="text-own-secondary dark:text-own-white py-2 inline-block">
                {response?.data?.currentuser[0]?.country}
              </span>
              <div className="flex items-center gap-10">
                <NavLink
                  to="/account/edit_profile"
                  className="text-own-secondary dark:text-own-white  py-1 rounded-md  bg-own-white-special dark:bg-own-dark-bg-special"
                >
                  Edit Profile
                </NavLink>
                <button className="text-own-secondary dark:text-own-white bg-own-white-special px-2 py-1 rounded-md dark:bg-own-dark-bg-special">
                  <AiOutlineMenu className="text-[23px]" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <ul className=" container_c mx-auto flex items-center text-own-secondary dark:text-own-white gap-10 border-b-[1px] border-own-primary font-bold">
              <NavLink
                to="/myProfile"
                className={({ isActive }) =>
                  location.pathname === "/myProfile" ? "text-own-primary" : ""
                }
              >
                <li>My Products ( {myProduct?.length} )</li>
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
                <li>BookMark ( {bookmark?.length} )</li>
              </NavLink>
              <NavLink
                to="my_favorite_sort"
                className={({ isActive }) =>
                  isActive ? "text-own-primary" : ""
                }
              >
                <li>My Products Ordered ( 0 )</li>
              </NavLink>
              <NavLink
                to="my_ordered"
                className={({ isActive }) =>
                  isActive ? "text-own-primary" : ""
                }
              >
                <li>My Ordered ( {percess?.length} )</li>
              </NavLink>
            </ul>
            <div>{<Outlet />}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyProfile;
