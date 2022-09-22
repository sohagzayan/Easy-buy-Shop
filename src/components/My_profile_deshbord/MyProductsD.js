import React from "react";
import { NavLink } from "react-router-dom";

const MyProductsD = () => {
  return (
    <div>
      <div>
        <div>
          <div className="border-2 border-dashed w-[320px] p-7 mt-7 flex flex-col">
            <h2 className="text-own-primary text-2xl mb-2">
              Upload your first shot
            </h2>
            <p className="text-own-white">
              Show off your best work. Get feedback, likes and be a part of a
              growing community.
            </p>
            <NavLink
              to="/add_new_products"
              className="btn-animation text-sm w-full ml-0 flex items-center justify-center "
            >
              Add Your Fast Products
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductsD;
