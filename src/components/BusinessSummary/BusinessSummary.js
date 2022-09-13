import React from "react";
import handshake from "../../assets/icons/handshake.png";
import help from "../../assets/icons/help (1).png";
import revenue from "../../assets/icons/increased-revenue.png";
import review from "../../assets/icons/review.png";
import settings from "../../assets/icons/settings.png";
import win from "../../assets/icons/win.png";
const BusinessSummary = () => {
  return (
    <div className="mt-20">
      <div>
        <div className="flex justify-center">
          <span className="text-own-primary  block ml-20 sm:text-lg font-bold mb-2 relative before:absolute before:w-12 before:h-[2px] before:bg-own-primary sm:before:left-[-45%] before:top-[52%] before:left-[-10%] ">
            Why choose Us
          </span>
        </div>
        <span className="text-2xl font-medium mb-2 block text-center text-own-white">
          Many Business Trust Us
        </span>
        <p className="text-sm text-own-text text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          reiciendis.
        </p>
        <div className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-own-ternary border-4 border-transparent hover:border-[#283E4D] transition-all ease-in   text-center p-2  py-6 flex flex-col items-center rounded-lg ">
            <span className="text-2xl font-bold text-own-primary bg-[#39f1a8] animate-pulse w-[80px] h-[80px] rounded-full flex items-center justify-center  mb-3 bg-opacity-25">
              100+
            </span>
            <span className="  text-lg text-own-white mb-2 font-bold">
              We served customers
            </span>
            <p className="text-own-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="bg-own-ternary  border-4 border-transparent hover:border-[#283E4D] transition-all ease-in  text-center p-2  py-6 flex flex-col items-center rounded-lg ">
            <span className="text-2xl font-bold text-own-primary bg-[#39f1a8] animate-pulse w-[80px] h-[80px] rounded-full flex items-center justify-center  mb-3 bg-opacity-25">
              120+
            </span>
            <span className="  text-lg text-own-white mb-2 font-bold">
              Annual revenue
            </span>
            <p className="text-own-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="bg-own-ternary border-4 border-transparent hover:border-[#283E4D] transition-all ease-in   text-center p-2  py-6 flex flex-col items-center rounded-lg ">
            <span className="text-2xl font-bold text-own-primary bg-[#39f1a8] animate-pulse w-[80px] h-[80px] rounded-full flex items-center justify-center  mb-3 bg-opacity-25">
              2+
            </span>
            <span className="  text-lg text-own-white mb-2 font-bold">
              Reviews
            </span>
            <p className="text-own-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="bg-own-ternary border-4 border-transparent hover:border-[#283E4D] transition-all ease-in   text-center p-2  py-6 flex flex-col items-center rounded-lg ">
            <span className="text-2xl font-bold text-own-primary bg-[#39f1a8] animate-pulse w-[80px] h-[80px] rounded-full flex items-center justify-center   mb-3 bg-opacity-25">
              100+
            </span>
            <span className="  text-lg text-own-white mb-2 font-bold">
              Total User
            </span>
            <p className="text-own-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
