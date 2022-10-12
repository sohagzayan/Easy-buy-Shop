import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
const BookmarkSingleData = ({ data, handleRemoveBookmark }) => {
  return (
    <div>
      <div className="dark:bg-own-dark-bg-special shadow-md  bg-own-white-special flex   relative flex-col  rounded-md items-center justify-between ">
        <span
          onClick={() => handleRemoveBookmark(data?._id)}
          className="absolute top-2 right-2 cursor-pointer "
        >
          <MdOutlineClose className="text-own-soft-red text-3xl" />
        </span>
        <div>
          <img className="rounded-md" src={data?.image} alt="" />
        </div>
        <div className="text-own-secondary dark:text-own-white py-3 px-3">
          <h3 className="text-xl">{data?.name}</h3>
          <h5 className="text-own-primary text-2xl font-bold py-1">
            ${data?.price}
          </h5>
          <div className="flex justify-between items-center">
            <NavLink
              to={`/ProductsDetails/${data.productId}`}
              className=" bg-own-primary dark:text-own-white px-2   py-1 rounded-md text-own-white"
            >
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkSingleData;
