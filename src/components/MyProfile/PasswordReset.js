import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCurrentUserQuery } from "../../store/API/user";

const PasswordReset = () => {
  /** Hocks  */
  const [oldpassword, setOldpassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const token = Cookies.get("token");
  /** Current User Info */
  const userId = Cookies.get("id");
  const response = useCurrentUserQuery(userId);

  const handleGeneralUserUpdate = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `https://easy-buy-shop-backend.vercel.app/api/v1/user/user/reset_password`,
        {
          oldpassword: oldpassword,
          newpassword: newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === 500 || res.data.message === "jwt expired") {
          Cookies.remove("token");
          Cookies.remove("id");
          navigate("/login");
          toast.success("You Access Token Expear!", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          if (res.data === "Old password don't match") {
            toast.error(res.data, {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          } else {
            toast.success("Change SuccessFully", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };

  return (
    <div>
      <div>
        <form action="" onSubmit={handleGeneralUserUpdate}>
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="username"
          >
            Old Password <span className="text-own-primary">*</span>
          </label>
          <input
            id="username"
            type="text"
            value={oldpassword}
            onChange={(e) => setOldpassword(e.target.value)}
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-secondary dark:text-own-white"
          />
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="email"
          >
            New Password <span className="text-own-primary">*</span>
          </label>
          <input
            id="email"
            type="text"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-secondary dark:text-own-white"
          />

          <div className="flex justify-end">
            <button className="bg-own-primary mt-4 text-own-secondary dark:text-own-white px-3 py-2 rounded-md ">
              Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
