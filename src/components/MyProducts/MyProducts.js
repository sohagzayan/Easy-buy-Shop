import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import discountimage from "../../assets/discount.png";
import { MdTitle } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MyProducts = ({ data }) => {
  const { name, image, details, price, quantity, minimumOrder, discount, _id } =
    data;
  return (
    <div>
      <div className="bg-own-secondary rounded-lg flex items-center justify-center flex-col py-3 relative ">
        <span className="flex items-center gap-1 bg-[#0C0C18] px-2 py-1 rounded-lg absolute top-2 left-3 text-own-secondary dark:text-own-white">
          <FcLike />
          8.3k
        </span>
        <span className="flex items-center gap-1 bg-[#0C0C18] px-2 py-1 rounded-lg absolute top-12 left-3 text-own-secondary dark:text-own-white">
          <AiOutlineEye />
          8.3k
        </span>
        {/* <span className="flex items-center gap-1 bg-[#0C0C18] px-2 py-1 rounded-lg absolute top-20 left-0 text-own-secondary dark:text-own-white">
          10
          <img className="w-[40px]" src={discountimage} alt="discount" />
        </span> */}
        <img className="h-[150px] mt-3" src={image} alt="" />
        <div className="px-3 mt-3 w-full">
          <h3 className="text-own-secondary dark:text-own-white flex text-xl items-center">
            {name}
          </h3>
          <div className="flex items-center justify-between text-own-secondary dark:text-own-white mt-2">
            <span>
              Price: <span className="text-own-primary text-xl">${price}</span>
            </span>
            <span>
              in-Stock:{" "}
              <span className="text-own-primary text-xl">{quantity}</span>
            </span>
          </div>
          <div className="flex items-center  text-own-secondary dark:text-own-white mt-2 gap-2">
            <NavLink
              to={`/ProductsDetails/${_id}`}
              className="bg-own-primary text-own-secondary dark:text-own-white px-2 py-1 rounded-md cursor-pointer"
            >
              Details
            </NavLink>
            <span className="bg-own-primary text-own-secondary dark:text-own-white px-2 py-1 rounded-md cursor-pointer">
              Update{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
