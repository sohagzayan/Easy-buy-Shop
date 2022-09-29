import React from "react";
import { MdSwitchAccount } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const HowItWorks = () => {
  return (
    <div className="mt-20 mb-10">
      <div>
        <div className="flex justify-center">
          <span className="text-own-primary  block ml-20 sm:text-lg font-bold mb-2 relative before:absolute before:w-12 before:h-[2px] before:bg-own-primary sm:before:left-[-50%] before:top-[55%] before:left-[-10%] ">
            How To Start
          </span>
        </div>
        <h3 className="text-center text-4xl text-own-secondary dark:text-own-white">
          How It Works
        </h3>
        <p className="text-center text-own-text-light  dark:text-own-text-dark mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          optio.
        </p>
        <div className="grid grid-cols-3 gap-20">
          <div className="bg-own-ternary rounded-md p-4 flex items-center justify-center flex-col">
            <span className="mb-6  bg-[#2D3748] w-[100px] h-[100px] rounded-full flex items-center justify-center ">
              <MdSwitchAccount className="text-own-primary text-5xl" />
            </span>
            <h3 className="text-own-secondary dark:text-own-white text-xl mb-6">
              Register New Account
            </h3>
            <p className="text-own-text-light  dark:text-own-text-dark text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              rerum pariatur tenetur maxime esse asperiores, earum enim
              veritatis natus doloribus!
            </p>
          </div>
          <div className="bg-own-ternary p-4 flex items-center justify-center rounded-md flex-col">
            <span className="mb-6  bg-[#2D3748] w-[100px] h-[100px] rounded-full flex items-center justify-center ">
              <HiOutlineInformationCircle className="text-own-primary text-5xl" />
            </span>
            <h3 className="text-own-secondary dark:text-own-white text-xl mb-6">
              Setup Account Info
            </h3>
            <p className="text-own-text-light  dark:text-own-text-dark text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              rerum pariatur tenetur maxime esse asperiores, earum enim
              veritatis natus doloribus!
            </p>
          </div>
          <div className="bg-own-ternary rounded-md p-4 flex items-center justify-center flex-col">
            <span className="mb-6  bg-[#2D3748] w-[100px] h-[100px] rounded-full flex items-center justify-center  ">
              <AiOutlineShoppingCart className="text-own-primary text-5xl" />
            </span>
            <h3 className="text-own-secondary dark:text-own-white text-xl mb-6">
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
