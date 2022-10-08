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
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const userId = Cookies.get("id");
  const response = useCurrentUserQuery(userId);
  const navigate = useNavigate();
  // console.log(response?.data?.currentuser[0].image);
  return (
    <>
      <div className="overflow-x-hidden h-[100%]">
        <div className="hero-content mx-auto flex-col lg:flex-row-reverse  relative ">
          <HeroAnimation />
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="0"
            data-aos-duration="500"
            className=" "
          >
            <HeroSlider />
            {/* <img src={commerce} className="  rounded-lg mx-auto" alt="img" /> */}
          </div>
          <div className="">
            <span
              data-aos="zoom-in"
              data-aos-offset="0"
              className="text-own-primary ml-20 sm:text-lg font-bold  relative before:absolute text-sm  before:w-16 before:h-[2px] before:bg-own-primary sm:before:left-[-20%] before:top-[50%] before:left-[-24%] "
            >
              Product Trending With Lowest Commission
            </span>
            <h1
              data-aos="zoom-in-left"
              data-aos-offset="0"
              className="text-5xl lg:text-6xl font-bold text-own-secondary dark:text-own-white  mt-2 "
            >
              Sell{" "}
              <span className="text-own-primary  border-b-[7px] mb-2 inline-block">
                Digital-Goods
              </span>{" "}
              Products and Buy
            </h1>

            <p
              data-aos="zoom-in-right"
              className="py-3 text-own-text-light  dark:text-own-text-dark  font-medium tracking-wider"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              molestias illo odio. Sit ullam officiis sed minima culpa
              laboriosam? Tempore! sed minima culpa laboriosam? Tempore!{" "}
            </p>

            <div className="flex items-center ">
              <button
                onClick={() => navigate("/shops")}
                data-aos="zoom-out-down"
                data-aos-easing="linear"
                data-aos-delay="400"
                data-aos-offset="0"
                className="bg-own-primary text-own-white  font-bold px-3 py-3 rounded-lg text-white mr-3 flex items-center gap-3 "
              >
                Buy Product
                <FiArrowRight className="font-bold text-xl" />
              </button>
              <button
                onClick={() => navigate("/add_new_products")}
                data-aos="zoom-out-down"
                data-aos-easing="linear"
                data-aos-delay="500"
                data-aos-offset="0"
                className=" border-[1px]  border-own-primary rounded-lg text-own-secondary dark:text-own-white font-bold px-5  py-3  text-white mr-3"
              >
                Add Product
              </button>
            </div>
            <p
              data-aos="zoom-out-down"
              data-aos-easing="linear"
              data-aos-delay="600"
              data-aos-offset="0"
              className="text-own-text-light  dark:text-own-text-dark md:w-[70%] mt-6"
            >
              "Vulk made it incredibly simple for me to start earning money with
              online selling. It's a game changer!"
            </p>
            <div
              data-aos="zoom-out-down"
              data-aos-easing="linear"
              data-aos-delay="700"
              data-aos-offset="0"
              className="flex items-center  mt-2"
            >
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
