import React from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import discountimage from "../../assets/discount.png";
import { MdTitle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const MyProducts = ({ data, handleRemoveTools }) => {
  const {
    name,
    image,
    details,
    price,
    quantity,
    minimumOrder,
    discount,
    country,
    _id,
    users,
    availability,
    view,
  } = data;
  const token = Cookies.get("token");

  return (
    <div>
      <div className="bg-own-white dark:bg-own-dark-bg rounded-md relative shadow-md overflow-hidden group">
        <span
          onClick={() => handleRemoveTools(_id)}
          className="absolute top-2 right-2 cursor-pointer z-20 "
        >
          <AiOutlineDelete className="text-own-soft-red text-3xl" />
        </span>
        <div className="">
          <div
            className="flex items-center justify-center 
     rounded-lg relative "
          >
            <img className=" " src={image} alt="" />
          </div>

          <div className="flex flex-col px-5 py-2 ">
            <h2 className="text-own-secondary font-bold dark:text-own-white mb-1 text-xl text-left ">
              {name}
            </h2>

            <div className="flex items-center justify-between ">
              <div>
                <span className="text-3xl text-own-primary font-bold  mb-1">
                  ${price}
                </span>
                <p className="dark:text-own-white">
                  Stock:{" "}
                  <span
                    className={
                      availability === "in-stock"
                        ? "font-bold text-own-primary"
                        : "font-bold text-own-soft-red"
                    }
                  >
                    {availability}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <NavLink
                  to={`/update_products/${_id}`}
                  className=" inline text-own-white bg-own-primary text-sm  font-bold px-2 py-1 rounded-md te"
                >
                  Update
                </NavLink>
                <NavLink
                  to={`/ProductsDetails/${_id}`}
                  className=" inline text-own-white bg-own-primary   font-bold rounded-md te text-center text-[12px]"
                >
                  Buy
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
