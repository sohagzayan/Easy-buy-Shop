import Cookies from "js-cookie";
import React from "react";
import { AiOutlineCaretRight, AiOutlineDoubleRight } from "react-icons/ai";
import commerce from "../../assets/commerce-dark.svg";
import { useCurrentUserQuery } from "../../store/API/user";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { FiArrowRight } from "react-icons/fi";
import HeroSlider from "../HeroSlider/HeroSlider";
import HeroAnimation from "../HeroAnimation/HeroAnimation";
const Hero = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const userId = Cookies.get("id");
  const response = useCurrentUserQuery(userId);
  // console.log(response?.data?.currentuser[0].image);
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="hero-content mx-auto flex-col lg:flex-row-reverse  relative ">
          <HeroAnimation />
          <div className=" ">
            <HeroSlider />
            {/* <img src={commerce} className="  rounded-lg mx-auto" alt="img" /> */}
          </div>
          <div className="">
            <span className="text-own-primary ml-20 sm:text-lg font-bold  relative before:absolute before:w-16 before:h-[2px] before:bg-own-primary sm:before:left-[-20%] before:top-[50%] before:left-[-24%] ">
              Product Trending With Lowest Commission
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-own-secondary dark:text-own-white  mt-2 ">
              Sell{" "}
              <span className="text-own-primary  border-b-[7px] mb-2 inline-block">
                Digital-Goods
              </span>{" "}
              Products and Buy
            </h1>

            <p className="py-3 text-own-text-light  dark:text-own-text-dark  font-medium tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              molestias illo odio. Sit ullam officiis sed minima culpa
              laboriosam? Tempore! sed minima culpa laboriosam? Tempore!{" "}
            </p>

            <div className="flex items-center ">
              <button className="bg-own-primary text-own-white  font-bold px-3 py-3 rounded-lg text-white mr-3 flex items-center gap-3 ">
                Buy Product
                <FiArrowRight className="font-bold text-xl" />
              </button>
              <button className=" border-[1px]  border-own-primary rounded-lg text-own-secondary dark:text-own-white font-bold px-5  py-3  text-white mr-3">
                Add Product
              </button>
            </div>
            <p className="text-own-text-light  dark:text-own-text-dark md:w-[70%] mt-6">
              "Vulk made it incredibly simple for me to start earning money with
              online selling. It's a game changer!"
            </p>
            <div className="flex items-center  mt-2">
              <img
                className="w-[35px] rounded-full mr-2"
                src={response?.data?.currentuser[0]?.image}
                alt=""
              />
              <div>
                <h3 className="text-own-secondary text-[12px] dark:text-own-white">
                  {response?.data?.currentuser[0]?.name}
                </h3>
                <span className="text-own-text-light text-[12px] dark:text-own-text-dark">
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
