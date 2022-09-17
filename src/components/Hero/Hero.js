import React from "react";
import { AiOutlineCaretRight, AiOutlineDoubleRight } from "react-icons/ai";
import clock from "../../assets/clock.png";
const Hero = () => {
  return (
    <>
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse py-16 relative ">
          <div className="w-full relative after:absolute after:bg-own-primary after:w-[30%] after:h-[100%] after:top-0 after:right-[25%] after:-z-[1] after:rounded-md after:opacity-50">
            <img src={clock} className="  rounded-lg mx-auto" alt="img" />
          </div>
          <div className="">
            <span className="text-own-primary ml-20 sm:text-lg font-bold mb-2 relative before:absolute before:w-16 before:h-[2px] before:bg-own-primary sm:before:left-[-20%] before:top-[50%] before:left-[-24%] ">
              Product Trending With Lowest Commission
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-own-white  mt-4">
              Exclusive Clock and Hardware Fair
            </h1>
            <p className="py-6 text-own-text text-sm font-medium tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              molestias illo odio. Sit ullam officiis sed minima culpa
              laboriosam? Tempore! sed minima culpa laboriosam? Tempore!{" "}
            </p>

            <div className="flex items-center ">
              <button className="bg-own-primary text-own-white px-8 py-3 rounded-md text-white mr-3 ">
                Best Selling Product
              </button>
              <button className="bg-own-primary text-own-white px-8 py-3 rounded-md text-white mr-3 ">
                Buy Token
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
