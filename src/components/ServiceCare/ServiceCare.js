import React from "react";
import { NavLink } from "react-router-dom";
import Category1 from "../../assets/images/Apple-Watch.png";
import Category2 from "../../assets/images/iMac.png";
import Category3 from "../../assets/images/iphone.png";
import classes from "../../styles/Repair.module.css";
import repairimage from "../../assets/images/repairimage.png";
const ServiceCare = () => {
  return (
    <div>
      <div className={classes.repair}>
        <div className="flex items-center md:flex-row flex-col py-5">
          <div>
            <img className="mr-6" width="230px" src={repairimage} alt="" />
          </div>
          <div>
            <h3 className="text-own-secondary dark:text-own-white text-3xl mb-2  ">
              Repairs Apple Or Others Products
            </h3>
            <h4 className="text-own-secondary dark:text-own-white text-xl mb-2  ">
              Specialized service center
            </h4>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-own-secondary dark:text-own-white text-center text-2xl mt-10 ">
          Select a <span className="text-own-primary font-bold">Device</span> to
          find out the cost of repairs
        </h3>
        <div className="container mx-auto grid grid-cols-3 gap-10 my-20">
          <NavLink to="category/iphone">
            <div className="relative overflow-hidden  flex items-center justify-center after:absolute after:bg-[#00000093] after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:rounded-md mx-3 group after:hover:bg-own-primary after:hover:bg-opacity-30 after:transition-all after:ease-in">
              <img
                className="group-hover:scale-150 transition-all ease-in "
                src={Category1}
                alt=""
              />
              <div className="absolute  z-10 top-[50%] left-[30%]  text-own-secondary dark:text-own-white font-bold text-xl">
                <span className="text-2xl">Watch</span>
                <hr />
                <span className="text-2xl">Apple Watch</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="category/iphone">
            <div className="relative overflow-hidden  flex items-center justify-center after:absolute after:bg-[#00000093] after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:rounded-md mx-3 group after:hover:bg-own-primary after:hover:bg-opacity-30 after:transition-all after:ease-in">
              <img
                className="group-hover:scale-150 transition-all ease-in "
                src={Category2}
                alt=""
              />
              <div className="absolute  z-10 top-[50%] left-[30%]  text-own-secondary dark:text-own-white font-bold text-xl">
                <span className="text-2xl">iPad</span>
                <hr />
                <span className="text-2xl">Apple Mac</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="category/iphone">
            <div className="relative overflow-hidden  flex items-center justify-center after:absolute after:bg-[#00000093] after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:rounded-md mx-3 group after:hover:bg-own-primary after:hover:bg-opacity-30 after:transition-all after:ease-in group">
              <img
                className="group-hover:scale-150 transition-all ease-in "
                src={Category3}
                alt=""
              />
              <div className="absolute  z-10 top-[50%] left-[30%]  text-own-secondary dark:text-own-white font-bold text-xl">
                <span className="text-2xl">Phone</span>
                <hr />
                <span className="text-2xl">iPhone</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCare;
