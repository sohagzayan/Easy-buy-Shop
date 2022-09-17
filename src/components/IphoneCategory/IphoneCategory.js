import React from "react";
import { NavLink } from "react-router-dom";
import clockImaghe from "../../assets/images/Apple-Watch.png";
import classes from "../../styles/Repair.module.css";
import service1 from "../../assets/images/Apple-Watch-Adhesive-Replacement-300x225.jpg";
import service2 from "../../assets/images/Apple-Watch-Battery-Replacement-300x225.jpg";
import service3 from "../../assets/images/Apple-Watch-Force-Touch-Sensor-Replacement-300x225.jpg";
import service4 from "../../assets/images/Apple-Watch-Screen-Replacement-300x225.jpg";
const IphoneCategory = () => {
  return (
    <div className="text-own-white">
      <div className={classes.category}>
        <div className="flex  items-center">
          <div>
            <img width="200px" src={clockImaghe} alt="" />
          </div>
          <div>
            <h3 className="text-own-white text-3xl mb-2  ">
              Apple Watch Repair
            </h3>
            <p className="text-own-white text-xl mb-2  ">
              Repair and disassembly guides for smartwatches designed by Apple.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto grid grid-cols-3 gap-10 mt-20">
          <div className="flex items-center justify-between bg-own-ternary pl-10 rounded-md">
            <h4 className="text-xl text-own-primary">Adhesive</h4>
            <img width="150px" src={service1} alt="" />
          </div>
          <div className="flex items-center justify-between bg-own-ternary pl-10 rounded-md">
            <h4 className="text-xl text-own-primary">Battery Replace</h4>
            <img width="150px" src={service2} alt="" />
          </div>
          <div className="flex items-center justify-between bg-own-ternary pl-10 rounded-md">
            <h4 className="text-xl text-own-primary">
              Force Touch Sensor Service
            </h4>
            <img width="150px" src={service3} alt="" />
          </div>
          <div className="flex items-center justify-between bg-own-ternary pl-10 rounded-md">
            <h4 className="text-xl text-own-primary font-bold ">
              Screen Service
            </h4>
            <img width="150px" src={service4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IphoneCategory;
