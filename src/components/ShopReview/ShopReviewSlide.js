import React from "react";
import { AiFillStar } from "react-icons/ai";

const ShopReviewSlide = ({ data, retingArray }) => {
  //   console.log(data);
  return (
    <div className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white text-own-secondary shadow-md h-[250px] w-[400px] p-4">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-4">
            <img
              src={data?.user?.image}
              className="w-[50px] rounded-full"
              alt=""
            />
            <div>
              <h3 className="text-[16px] -mb-3">{data?.user?.name}</h3>
              <span className="text-[12px]">{data?.user?.country}</span>
            </div>
          </div>
          <h3 className="my-3">{data?.heading}</h3>
          <p className="text-sm">{data?.message}</p>
        </div>
        <div className="flex items-center gap-2 ">
          {retingArray.slice(0, data?.rating).map((r, index) => (
            <AiFillStar
              key={index}
              className="text-own-primary text-[1.6rem]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopReviewSlide;
