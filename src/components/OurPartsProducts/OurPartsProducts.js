import React from "react";
import { NavLink } from 'react-router-dom';
const OurPartsProducts = ({ item }) => {
  const MF = "https://tranquil-shelf-42201.herokuapp.com/upload/"

  const { image , name , details , price , quantity , minimumOrder  , _id} = item;
  console.log(image);
  return (
    <div className="bg-base-100 border-2 rounded-2xl shadow-lg">
      <div className="p-4 flex flex-col justify-between items-center">
        <div style={{height : '300px', overflow : 'hidden'}} className="mb-3">
          <img className="max-w-sm" src={image} alt="imges" />
          {/* <img className="w-sm" src={image} alt="" /> */}
        </div>
        <div>
            <h2 className="text-primary text-lg">{name}</h2>
            <div className="flex flex-col my-2">
              <span className="text-primary font-medium">Minimum Order Quantity : <span className="text-2xl font-bold text-secondary">{minimumOrder}</span></span>
              <span className="text-primary font-medium">Available Quantity : <span className="text-2xl font-bold text-secondary">{quantity}</span></span>
            </div>
          
            <p className="text-sm font-light text-primary">{details}</p>
            <div className="flex items-center justify-between mt-5">
            <span className="text-2xl text-secondary font-bold">৳ {price}</span>
                <NavLink to={`/purchase/${_id}`} className="bg-secondary text-white font-bold px-4 py-2 rounded-lg">Purchase</NavLink>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartsProducts;
