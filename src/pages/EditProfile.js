import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { NavLink, Outlet } from "react-router-dom";
import { useCurrentUserQuery } from "../store/API/user";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useLocation } from "react-router-dom";
const EditProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = Cookies.get("id");
  const response = useCurrentUserQuery(userId);
  // console.log(response?.data?.currentuser[0]);

  const handleDeleteAccount = async () => {
    swal({
      title: "Are you sure?",
      text: "Delete Your Account !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        axios
          .delete(
            `https://easy-buy-shop-server.onrender.com/api/v1/user/user/${response?.data?.currentuser[0]?._id}`
          )
          .then((res) => {
            alert("success");
            navigate("/");
            window.location.reload(true);
          })
          .catch((error) => console.log(error));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <>
      <Header />
      <div>
        <div className="w-[70%] mx-auto py-8">
          <div className="flex  items-center justify-between">
            <div className="flex items-center">
              <img
                style={{ borderRadius: "50px 50px 0px 50px" }}
                className="w-[50px] mr-6 border-[5px] border-[#101126]"
                src={response?.data?.currentuser[0].image}
                alt=""
              />
              <div>
                <h3 className="text-own-primary text-xl mb-1">
                  MD Sohag / Edit Profile
                </h3>
                <p className="text-own-text-light  dark:text-own-text-dark">
                  Set up your Qulality Coookie presence and hiring needs
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col border-2 border-own-primary  rounded-md border-dashed cursor-pointer group transition-all ease-in">
              <h2 className="text-own-secondary dark:text-own-white font-bold text-xl bg-[#0C0C18] w-full text-center py-1 group-hover:bg-own-primary transition-all ease-in">
                Go{" "}
                <span className="text-own-primary group-hover:text-[#FF5555] ">
                  Pro
                </span>
              </h2>
              <p className="text-own-secondary dark:text-own-white text-sm bg-own-primary px-2 py-2 group-hover:bg-[#0C0C18] transition-all ease-in">
                Add power features for just $5/month
              </p>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-12 gap-10">
            <div className="col-span-3">
              <ul className="text-own-secondary dark:text-own-white ">
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    location.pathname === "/account"
                      ? "text-own-primary font-bold "
                      : "font-bold "
                  }
                >
                  <li className="mb-2">General</li>
                </NavLink>
                <NavLink
                  to="edit_profile"
                  className={({ isActive }) =>
                    isActive ? "text-own-primary font-bold " : "font-bold "
                  }
                >
                  <li className="mb-2">Edit Profile</li>
                </NavLink>
                <NavLink
                  to="password"
                  className={({ isActive }) =>
                    isActive ? "text-own-primary font-bold " : "font-bold "
                  }
                >
                  <li className="mb-2">Password</li>
                </NavLink>
                <NavLink
                  to="social_profiles"
                  className={({ isActive }) =>
                    isActive ? "text-own-primary font-bold " : "font-bold "
                  }
                >
                  <li className="mb-2">Social Profile</li>
                </NavLink>

                <NavLink
                  to="email_notifications"
                  className={({ isActive }) =>
                    isActive ? "text-own-primary font-bold" : "font-bold "
                  }
                >
                  <li className="mb-2">Email Notification</li>
                </NavLink>
                <hr className="border-own-text mb-2 mt-2" />
                <li
                  onClick={handleDeleteAccount}
                  className="mb-1  text-own-soft-red font-bold cursor-pointer"
                >
                  Delete Account
                </li>
              </ul>
            </div>
            <div className="col-span-9">{<Outlet />}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
