import React from "react";
import { NavLink } from "react-router-dom";

const UserProductCard = ({ data }) => {
  return (
    <div className="flex items-center  justify-center bg-own-secondary mx-5 rounded-md ">
      <div className="flex  flex-col ">
        <img className="h-[200px]" src={data?.image} alt="" />
        <div className="w-full text-own-secondary dark:text-own-white px-3 py-1 ">
          <h2>{data?.name}</h2>
          <div className="flex justify-between items-center">
            <p className="text-xl text-own-primary">${data?.price}</p>
            <NavLink
              to={`/ProductsDetails/${data?._id}`}
              className="bg-own-primary inline text-own-secondary dark:text-own-white font-bold px-2 py-1 rounded-md text-sm"
            >
              Buy Products
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProductCard;
