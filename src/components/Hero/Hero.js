import Cookies from "js-cookie";
import React from "react";
import { AiOutlineCaretRight, AiOutlineDoubleRight } from "react-icons/ai";
import commerce from "../../assets/commerce-dark.svg";
import { useCurrentUserQuery } from "../../store/API/user";
const Hero = () => {
  const userId = Cookies.get("id");
  const response = useCurrentUserQuery(userId);
  console.log(response?.data?.currentuser[0].image);
  return (
    <>
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse py-16 relative ">
          <div className="w-full relative   ">
            <img src={commerce} className="  rounded-lg mx-auto" alt="img" />
          </div>
          <div className="">
            <span className="text-own-primary ml-20 sm:text-lg font-bold  relative before:absolute before:w-16 before:h-[2px] before:bg-own-primary sm:before:left-[-20%] before:top-[50%] before:left-[-24%] ">
              Product Trending With Lowest Commission
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-own-white  mt-2 ">
              Sell{" "}
              <span className="text-own-primary border-b-[7px] mb-2 inline-block">
                Digital-Goods
              </span>{" "}
              Products and Buy
            </h1>
            <p className="py-3 text-own-text  font-medium tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              molestias illo odio. Sit ullam officiis sed minima culpa
              laboriosam? Tempore! sed minima culpa laboriosam? Tempore!{" "}
            </p>

            <div className="flex items-center ">
              <button className="bg-own-primary hover:shadow-md shadow-own-primary text-own-white px-3 py-3 rounded-lg text-white mr-3 ">
                Best Selling Product
              </button>
              <button className="bg-own-secondary border-[1px] border-opacity-50 border-own-primary rounded-lg text-own-white px-5  py-3  text-white mr-3">
                Buy Token
              </button>
            </div>
            <p className="text-own-text md:w-[70%] mt-6">
              "Vulk made it incredibly simple for me to start earning money with
              online selling. It's a game changer!"
            </p>
            <div className="flex items-center  mt-2">
              <img
                className="w-[50px] rounded-full mr-2"
                src={response?.data?.currentuser[0]?.image}
                alt=""
              />
              <div>
                <h3 className="text-own-white">
                  {response?.data?.currentuser[0]?.name}
                </h3>
                <span className="text-own-text">
                  CEO @{response?.data?.currentuser[0]?.username}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
