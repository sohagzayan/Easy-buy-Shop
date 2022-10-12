import React from "react";
const BusinessSummary = () => {
  return (
    <div className="mt-20 overflow-x-hidden">
      <div>
        <div className="flex justify-center">
          <span className="text-own-primary  block  sm:text-lg font-bold  relative ">
            Why choose Us
          </span>
        </div>
        <span className="text-2xl  mb-2 block text-center text-own-secondary dark:text-own-white font-bold">
          Many Business Trust Us
        </span>
        <p className="text-sm text-own-text-light  dark:text-own-text-dark text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          reiciendis.
        </p>
        <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4">
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="bg-own-white dark:bg-own-dark-bg shadow  transition-all ease-in   text-center p-2  py-6 flex flex-col items-center rounded-lg "
          >
            <span className="text-2xl font-bold text-own-white bg-own-primary w-[80px] h-[80px] rounded-full flex items-center justify-center  mb-2 ">
              100+
            </span>
            <span className="  text-lg text-own-secondary dark:text-own-white mb-2 font-bold">
              We served customers
            </span>
            <p className="text-own-text-light  dark:text-own-text-dark">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="bg-own-white dark:bg-own-dark-bg shadow  transition-all ease-in   text-center p-2  py-6 flex flex-col items-center rounded-lg "
          >
            <span className="text-2xl font-bold text-own-white bg-own-primary w-[80px] h-[80px] rounded-full flex items-center justify-center  mb-2">
              120+
            </span>
            <span className="  text-lg text-own-secondary dark:text-own-white mb-2 font-bold">
              Annual revenue
            </span>
            <p className="text-own-text-light  dark:text-own-text-dark">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="bg-own-white dark:bg-own-dark-bg shadow  transition-all ease-in   text-center p-2  py-6 flex flex-col items-center rounded-lg "
          >
            <span className="text-2xl font-bold text-own-white bg-own-primary w-[80px] h-[80px] rounded-full flex items-center justify-center  mb-2">
              22+
            </span>
            <span className="  text-lg text-own-secondary dark:text-own-white mb-2 font-bold">
              Reviews
            </span>
            <p className="text-own-text-light  dark:text-own-text-dark">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="bg-own-white dark:bg-own-dark-bg shadow  transition-all ease-in   text-center p-2  py-6 flex flex-col items-center rounded-lg  "
          >
            <span className="text-2xl font-bold text-own-white bg-own-primary w-[80px] h-[80px] rounded-full flex items-center justify-center  mb-2">
              100+
            </span>
            <span className="  text-lg text-own-secondary dark:text-own-white mb-2 font-bold">
              Total User
            </span>
            <p className="text-own-text-light  dark:text-own-text-dark">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
