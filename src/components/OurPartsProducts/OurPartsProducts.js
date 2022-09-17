import React from "react";
import { NavLink } from "react-router-dom";
import Demo1 from "../../assets/clock1.png";
import Demo2 from "../../assets/clock2.png";
import Demo3 from "../../assets/clock3.png";
import { FiBookmark } from "react-icons/fi";

const OurPartsProducts = ({ item }) => {
  const { image, name, details, price, quantity, minimumOrder, _id } = item;
  return (
    <div className="bg-own-ternary border-[6px] rounded-md shadow-lg   border-transparent hover:border-[#283E4D] overflow-hidden transition-all ease-in relative after:absolute after:w-[400px] after:h-[40px] after:bg-own-primary after:top-0 after:left-0 after:z-10 after:content-['AddToCard'] after:flex after:items-center after:justify-center after:text-own-white after:cursor-pointer after:translate-y-[-40px] hover:after:translate-y-[0px] after:ease-in after:transition-all mb-10">
      <div className="absolute left-1 bottom-1 z-20">
        <FiBookmark className="text-own-white text-2xl cursor-pointer" />
      </div>
      <div className="flex  justify-between items-center">
        <div className="p-1 relative after:absolute after:w-[100%] after:h-[100%] after:bg-[#2D3748] after:top-0 after:left-0 after:-z-0 mr-2 after:opacity-20">
          <img width="" className="relative z-10" src={image} alt="" />
        </div>
        <div className="p-2 px-3">
          <h2 className="text-own-white mb-2">
            Khaki Field Mechanical Brown Dial Men's Watch
          </h2>

          <p className="text-sm  text-own-text">
            Model: Silicon Power 4GB DDR4 2400 Bus Ram Capacity: 4GB Type: DDR4
            Bus speed: 2400MHz Number of pin: 288-Pin
          </p>
          {/* <div className="flex justify-between my-2">
            <span className="text-own-white font-medium flex flex-col items-center">
              <span className="text-2xl font-bold text-own-primary block">
                {minimumOrder}
              </span>
              Minimum Order
            </span>
            <span className="text-own-white font-medium flex items-center flex-col">
              <span className="text-2xl font-bold text-own-primary block">
                {quantity}
              </span>
              Available Quantity
            </span>
          </div> */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-2xl text-own-primary font-bold">
              ${price}
            </span>
            <NavLink
              to={`/purchase/${_id}`}
              className="bg-own-primary text-own-white font-bold px-2 py-1 rounded-md text-sm"
            >
              Purchase
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartsProducts;
