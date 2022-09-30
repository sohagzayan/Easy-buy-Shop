import React from "react";
import ecomerace from "../../assets/commerce-dark.svg";
import { AiOutlineHome } from "react-icons/ai";
import { FiWatch } from "react-icons/fi";
import { FaOpencart } from "react-icons/fa";
import { MdOutlineSell } from "react-icons/md";
const StartYourBusiness = () => {
  return (
    <div className="mt-10 mb-20">
      <div>
        <div className=" container_c mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 items-center justify-center">
          <div className="text-own-white">
            <span className="font-bold text-own-primary mb-1 inline-block ">
              Start your Business
            </span>
            <h3 className="text-3xl font-bold text-own-secondary dark:text-own-white">
              Sell Your Products
            </h3>
            <p className="text-own-text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos
              quidem tibi studiose et diligenter tractandos.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <span className="mb-1 inline-block">
                  <AiOutlineHome className="text-2xl text-own-primary " />
                </span>
                <h2 className="text-xl font-bold text-own-secondary dark:text-own-white">
                  Sell anywhere
                </h2>
                <p className="text-own-text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  videbimus.
                </p>
              </div>
              <div>
                <span className="mb-1 inline-block">
                  <FiWatch className="text-2xl text-own-primary " />
                </span>
                <h2 className="text-xl font-bold text-own-secondary dark:text-own-white">
                  Sell Clock
                </h2>
                <p className="text-own-text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  videbimus.
                </p>
              </div>
              <div>
                <span className="mb-1 inline-block">
                  <FaOpencart className="text-2xl text-own-primary " />
                </span>
                <h2 className="text-xl font-bold text-own-secondary dark:text-own-white">
                  Sell art
                </h2>
                <p className="text-own-text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  videbimus.
                </p>
              </div>
              <div>
                <span className="mb-1 inline-block">
                  <MdOutlineSell className="text-2xl text-own-primary " />
                </span>
                <h2 className="text-xl font-bold text-own-secondary dark:text-own-white">
                  Buy Product
                </h2>
                <p className="text-own-text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  videbimus.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={ecomerace} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartYourBusiness;
