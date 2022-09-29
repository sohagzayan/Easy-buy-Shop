import React from "react";
import ImageGirl from "../../assets/images/bn1.webp";
import ImageBoy from "../../assets/images/bn2.webp";
const Fashion = () => {
  return (
    <div className=" mt-24 mb-24">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-16">
        <div className="fashion">
          <img src={ImageGirl} className="rounded-md inner" alt="" />
          <div className="absolute top-[40%] left-[5%] ">
            <h4 className="text-6xl font-semibold text-own-secondary dark:text-own-white uppercase">
              Ladies
            </h4>
            <span className="text-4xl font-semibold text-own-primary uppercase">
              Watches
            </span>
          </div>
        </div>
        <div className="fashion">
          <img src={ImageBoy} className="rounded-md inner" alt="" />
          <div className="absolute top-[40%] left-[5%] ">
            <h4 className="text-6xl font-semibold text-own-secondary dark:text-own-white uppercase">
              Mens
            </h4>
            <span className="text-4xl font-semibold text-own-primary uppercase">
              Watches
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
