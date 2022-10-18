import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FiBookmark } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoBagAddOutline } from "react-icons/io";
import { BiBookmarkPlus } from "react-icons/bi";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { useCurrentUserQuery } from "../../store/API/user";
import Cookies from "js-cookie";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-toastify";

const OurPartsProducts = ({ item }) => {
  const {
    image,
    name,
    details,
    price,
    quantity,
    minimumOrder,
    view,
    _id,
    users,
    availability,
  } = item;
  const token = Cookies.get("token");
  const reting = [1, 2, 3, 4, 5];

  const addToCardProduct = async (id) => {
    console.log("addToCardProduct");
    await axios
      .post(
        `https://easy-buy-shop-backend.vercel.app/api/v1/addToCard/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (
          res.data.status === 5000 ||
          res.data.message === "This Product Already Exits!"
        ) {
          toast.warn("This Product already Added", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        } else {
          toast.success("Success to add you card!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        console.log(res);
        // setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavLink
        data-aos="zoom-in"
        data-aos-offset="100"
        data-aos-delay="300"
        to={`/ProductsDetails/${_id}`}
        className="transition-all ease-in"
      >
        <div className="bg-own-white border-[1px] border-own-text-light border-opacity-10 dark:bg-own-dark-bg rounded-md relative shadow-md overflow-hidden group  px-2">
          <div className="md:grid md:grid-cols-12 grid-cols-1 items-center ">
            <div className="md:col-span-3 ">
              <img className="  " src={image} alt="" />
            </div>

            <div className="flex flex-col px-5 py-4 md:col-span-9 ">
              <h2 className="text-own-primary font-bold dark:text-own-white mb-1 md:text-2xl text-xl ">
                {name}
              </h2>
              <p className="text-own-white">{details.slice(0, 150)}....</p>
              <div className="flex  justify-between">
                <div className="flex flex-col">
                  <span className="text-xl text-own-soft-red font-bold mb-1">
                    ${price}
                  </span>
                  <span className="dark:text-own-white font-semibold text-own-secondary">
                    Stock:{" "}
                    <span
                      className={
                        availability === "in-stock"
                          ? "text-own-primary"
                          : "text-own-soft-red"
                      }
                    >
                      {availability}
                    </span>
                  </span>
                </div>
                <div className="flex flex-col justify-end items-end">
                  <div className="flex items-center">
                    {reting.slice(0, 3).map((r, index) => (
                      <AiFillStar key={index} className="text-[#FACA51]" />
                    ))}
                  </div>
                  <span className="text-sm text-own-secondary dark:text-own-white">
                    Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default OurPartsProducts;
