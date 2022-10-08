import React from "react";
import { MdSwitchAccount } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const HowItWorks = () => {
  return (
    <div className="mt-20 mb-10 overflow-hidden">
      <div>
        <div className="flex justify-center">
          <span className="text-own-primary  block marker:  sm:text-lg font-bold mb-1  ">
            How To Start
          </span>
        </div>
        <h3 className="text-center font-bold text-4xl text-own-secondary dark:text-own-white">
          How It Works
        </h3>
        <p className="text-center text-own-text-light  dark:text-own-text-dark mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          optio.
        </p>
        <div className=" container_c mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20">
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="bg-own-white dark:bg-own-dark-bg shadow-md rounded-md p-4 flex items-center justify-center flex-col"
          >
            <span className="mb-3  bg-own-white-special dark:bg-own-dark-bg-special w-[60px] h-[60px] rounded-full flex items-center justify-center ">
              <MdSwitchAccount className="text-own-primary text-3xl" />
            </span>
            <h3 className="text-own-secondary dark:text-own-white  text-xl mb-4 font-bold">
              Register New Account
            </h3>
            <p className="text-own-text-light  dark:text-own-text-dark text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              rerum pariatur tenetur maxime esse asperiores, earum enim
              veritatis natus doloribus!
            </p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="400"
            className="bg-own-white dark:bg-own-dark-bg shadow-md rounded-md p-4 flex items-center justify-center flex-col"
          >
            <span className="mb-3  bg-own-white-special dark:bg-own-dark-bg-special w-[60px] h-[60px] rounded-full flex items-center justify-center ">
              <HiOutlineInformationCircle className="text-own-primary text-3xl" />
            </span>
            <h3 className="text-own-secondary dark:text-own-white text-xl mb-3">
              Setup Account Info
            </h3>
            <p className="text-own-text-light  dark:text-own-text-dark text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              rerum pariatur tenetur maxime esse asperiores, earum enim
              veritatis natus doloribus!
            </p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="500"
            className="bg-own-white dark:bg-own-dark-bg shadow-md rounded-md p-4 flex items-center justify-center flex-col"
          >
            <span className="mb-3  bg-own-white-special dark:bg-own-dark-bg-special w-[60px] h-[60px] rounded-full flex items-center justify-center">
              <AiOutlineShoppingCart className="text-own-primary text-3xl" />
            </span>
            <h3 className="text-own-secondary dark:text-own-white text-xl mb-3">
              Start Buying & Selling
            </h3>
            <p className="text-own-text-light  dark:text-own-text-dark text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              rerum pariatur tenetur maxime esse asperiores, earum enim
              veritatis natus doloribus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
