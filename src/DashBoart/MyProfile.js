import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useCurrentUserQuery } from "../store/API/user";
import { toast } from "react-toastify";
const MyProfile = () => {
  /** component needed state and data */
  const userId = Cookies.get("id");
  const token = Cookies.get("token");
  const id = Cookies.get("id");
  const response = useCurrentUserQuery(userId);

  /** Component State and Hocks */
  const [myProductSell, setMyProductSell] = useState([]);
  const [percess, setPercess] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [myProduct, setMyProduct] = useState([]);
  const [follower, setFollower] = useState([]);
  const navigate = useNavigate();
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
      fetch(
        "http://localhost:5000/api/v1/user/user/follow_user?getMyFolloer=12",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ),
      fetch("http://localhost:5000/api/v1/purchase/my_product_order", {
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
        if (
          data[0].status === 500 ||
          data[0].message === "jwt malformed" ||
          data[0].message === "jwt expired"
        ) {
          Cookies.remove("id");
          Cookies.remove("token");
          navigate("/login");
          toast.error("Your Access Token Expired!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        } else {
          setMyProduct(data[0]);
          setPercess(data[1]);
          setBookmark(data[2]);
          setFollower(data[3]);
          setMyProductSell(data[4]);
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
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
              <div className="flex items-center  gap-10">
                <NavLink
                  to="/account/edit_profile"
                  className="text-own-secondary dark:text-own-white  py-1 rounded-md  bg-own-white-special dark:bg-own-dark-bg-special"
                >
                  Edit Profile
                </NavLink>
                <div className="">
                  <span className="animate-ping text-6xl text-own-primary">
                    •
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <ul className=" container_c mx-auto flex flex-wrap text-own-secondary dark:text-own-white gap-10 border-b-[1px] border-own-primary font-bold">
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
                to="my_folloer"
                className={({ isActive }) =>
                  isActive ? "text-own-primary" : ""
                }
              >
                <li>My Folloer ( {follower?.length} )</li>
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
                to="my_product_order"
                className={({ isActive }) =>
                  isActive ? "text-own-primary" : ""
                }
              >
                <li>Product_Sell ( {myProductSell?.length} )</li>
              </NavLink>
              <NavLink
                to="my_ordered"
                className={({ isActive }) =>
                  isActive ? "text-own-primary" : ""
                }
              >
                <li>Product_Buy ( {percess?.length} )</li>
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
