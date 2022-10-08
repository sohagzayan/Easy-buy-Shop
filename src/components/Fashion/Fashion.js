import React from "react";
import ImageGirl from "../../assets/images/bn1.webp";
import ImageBoy from "../../assets/images/bn2.webp";
const Fashion = () => {
  return (
    <div className=" mt-10 mb-24 overflow-x-hidden">
      <div className=" container_c mx-auto grid md:grid-cols-2 grid-cols-1 items-center gap-16">
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="fashion after:bg-transparent"
        >
          <img src={ImageGirl} className="rounded-md  w-[100%] inner" alt="" />
          <div className="absolute top-[40%] left-[5%] ">
            <h4 className="text-6xl font-semibold text-own-white uppercase">
              Ladies
            </h4>
            <span className="text-4xl font-semibold text-own-primary uppercase">
              Watches
            </span>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="fashion inner after:bg-transparent"
        >
          <img src={ImageBoy} className="rounded-md  w-[100%] inner" alt="" />
          <div className="absolute top-[40%] left-[5%] ">
            <h4 className="text-6xl font-semibold text-own-white uppercase">
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
