import React from "react";

const OurPartsProducts = ({ item }) => {
  const { image , name , details , price , quantity} = item;
  return (
    <div className="bg-base-100 border-2 rounded-2xl shadow-lg">
      <div className="p-4 flex flex-col justify-between items-center">
        <div className="mb-3">
          <img className="w-sm" src={image} alt="" />
        </div>
        <div>
            <h2 className="text-primary ">{name}</h2>
            <span className="text-2xl text-secondary font-bold">৳ {price}</span>
            <p className="text-sm font-light text-primary">{details}</p>
            <div className="flex items-center justify-between mt-5">
                <p className="text-primary">Quantity : <span className="text-2xl text-secondary font-bold">{quantity}</span></p>
                <button className="bg-secondary text-white font-bold px-4 py-2 rounded-lg">Purchase</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartsProducts;
