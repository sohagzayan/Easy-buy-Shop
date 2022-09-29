import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Demo1 from "../../assets/clock1.png";
import Demo2 from "../../assets/clock2.png";
import Demo3 from "../../assets/clock3.png";
import { FiBookmark } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoBagAddOutline } from "react-icons/io";
import { BiBookmarkPlus } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";

const OurPartsProducts = ({ item, handleAddToBookmark, mutateAsync, own }) => {
  const { image, name, details, price, quantity, minimumOrder, _id, users } =
    item;
  const [alredyAddedBooks, setAlredyAddedBooks] = useState(false);
  return (
    <>
      <div>
        <div className="bg-[#18182F]  rounded-md relative">
          {own && (
            <span className=" text-own-secondary dark:text-own-white text-[11px] absolute -right-3 -bottom-3 p-2 flex flex-col justify-center items-center rounded-md cursor-pointer">
              Own
            </span>
          )}

          <div className="">
            <div className="inline-flex flex-col py-3 px-4 items-center justify-center gap-2 absolute top-0 left-0">
              <span
                onClick={async () => await mutateAsync(_id)}
                className="bg-[#0C0C18] p-2 rounded-full cursor-pointer"
              >
                <HiOutlineShoppingBag className=" text-own-primary text-xl" />
              </span>

              <span
                onClick={() =>
                  handleAddToBookmark(
                    _id,
                    alredyAddedBooks,
                    setAlredyAddedBooks
                  )
                }
                className="bg-[#0C0C18] p-2 rounded-full cursor-pointer"
              >
                <BiBookmarkPlus className=" text-own-primary text-xl" />
              </span>
            </div>

            <div
              className="flex items-center justify-center 
         rounded-lg"
            >
              <img className="h-[200px] " src={image} alt="" />
            </div>

            <div className="flex flex-col px-5 py-2 ">
              <h2 className="text-own-secondary dark:text-own-white mb-2 ">
                {name}
              </h2>
              <div className="flex items-center justify-between ">
                <span className="text-2xl text-own-primary font-bold">
                  ${price}
                </span>
                <NavLink
                  to={`/ProductsDetails/${_id}`}
                  className="bg-own-primary inline text-own-secondary dark:text-own-white font-bold px-2 py-1 rounded-md text-sm"
                >
                  Buy Products
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-between">
          <NavLink
            to={`/user_profile/${users?._id}`}
            className="flex items-center gap-3 mt-2 cursor-pointer"
          >
            <div>
              <img
                className="w-[30px] rounded-full "
                src={users?.image}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-own-secondary dark:text-own-white text-sm">
                {users?.name}
              </h3>
            </div>
          </NavLink>
          <div className="flex  items-center">
            <span className="bg-[#0C0C18] p-2 flex gap-1 items-center rounded-md cursor-pointer">
              <AiOutlineEye className=" text-own-primary  " />
              <sub className="pb-1  text-own-secondary dark:text-own-white">
                2.1k
              </sub>
              {/* <span className="">2.1k</span> */}
            </span>
            <span className="flex items-center justify-center  rounded-md text-own-secondary dark:text-own-white  bg-[#0C0C18] ">
              <FcLikePlaceholder className="text-sm" />
              500
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPartsProducts;
