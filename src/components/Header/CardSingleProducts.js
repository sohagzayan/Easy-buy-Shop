import React from "react";
import { CgTrashEmpty } from "react-icons/cg";
import { MdSell } from "react-icons/md";
import { NavLink } from "react-router-dom";

const CardSingleProducts = ({ data, mutateAsync }) => {
  const { image, name, price, productId, _id } = data;
  return (
    <>
      <li className="flex items-center gap-3 mb-3">
        <img className="w-[50px]" src={image} alt="" />
        <div className="w-full">
          <h3 className="">{name}</h3>
          <h5 className="text-xl text-own-primary mb-1">${price}</h5>
          <div className="flex justify-between items-center w-full">
            <NavLink
              to={`/ProductsDetails/${productId}`}
              className="bg-own-primary px-2 py-1 rounded-md flex items-center gap-2"
            >
              Buy Now <MdSell />
            </NavLink>
            <button
              onClick={() => mutateAsync(_id)}
              className="text-[#C3575C] cursor-pointer group"
            >
              {" "}
              <CgTrashEmpty className="text-2xl group-hover:scale-125 transition-all ease-in" />{" "}
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CardSingleProducts;
