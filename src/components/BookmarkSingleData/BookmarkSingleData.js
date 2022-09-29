import React from "react";

const BookmarkSingleData = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="bg-own-ternary flex   rounded-md items-center">
        <img className="w-[150px]" src={data?.image} alt="" />
        <div className="text-own-secondary dark:text-own-white">
          <h3 className="text-xl">{data?.name}</h3>
          <h5 className="text-own-primary text-2xl">${data?.price}</h5>
          <button className="bg-[#0C0C18] text-own-secondary dark:text-own-white px-3 py-1 rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkSingleData;
