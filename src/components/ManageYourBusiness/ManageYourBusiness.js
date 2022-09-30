import React from "react";
import ManageBssness from "../../assets/commerce-feature-3-dark.png";
import { AiFillFileAdd, AiOutlineHome } from "react-icons/ai";
import { FiGift, FiWatch } from "react-icons/fi";
import { FaLayerGroup, FaOpencart } from "react-icons/fa";
import { MdOutlineMarkEmailUnread, MdOutlineSell } from "react-icons/md";
const ManageYourBusiness = () => {
  return (
    <div className="mt-10 mb-20">
      <div>
        <div className=" container_c mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 items-center justify-center">
          <div className="flex items-center justify-center">
            <img src={ManageBssness} alt="" />
          </div>
          <div className="text-own-white">
            <span className="font-bold text-own-primary mb-1 inline-block ">
              Manage your Business
            </span>
            <h3 className="text-3xl font-bold text-own-secondary dark:text-own-white">
              One Simple Platform
            </h3>
            <p className="text-own-text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos
              quidem tibi studiose et diligenter tractandos.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <span className="mb-1 inline-block">
                  <MdOutlineMarkEmailUnread className="text-2xl text-own-primary " />
                </span>
                <h2 className="text-xl font-bold text-own-secondary dark:text-own-white">
                  Email marketing
                </h2>
                <p className="text-own-text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  videbimus.
                </p>
              </div>
              <div>
                <span className="mb-1 inline-block">
                  <FaLayerGroup className="text-2xl text-own-primary " />
                </span>
                <h2 className="text-xl font-bold text-own-secondary dark:text-own-white">
                  Bundles & upsells
                </h2>
                <p className="text-own-text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  videbimus.
                </p>
              </div>
              <div>
                <span className="mb-1 inline-block">
                  <AiFillFileAdd className="text-2xl text-own-primary " />
                </span>
                <h2 className="text-xl font-bold text-own-secondary dark:text-own-white">
                  Lead magnets
                </h2>
                <p className="text-own-text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  videbimus.
                </p>
              </div>
              <div>
                <span className="mb-1 inline-block">
                  <FiGift className="text-2xl text-own-primary " />
                </span>
                <h2 className="text-xl font-bold text-own-secondary dark:text-own-white">
                  Discount codes
                </h2>
                <p className="text-own-text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  videbimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageYourBusiness;
