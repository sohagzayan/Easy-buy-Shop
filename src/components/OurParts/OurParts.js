import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import OurPartsProducts from "../OurPartsProducts/OurPartsProducts";
const OurParts = () => {
  const {
    isLoading,
    error,
    data: partsData,
  } = useQuery("toolsData", () =>
    axios.get(`https://tranquil-shelf-42201.herokuapp.com/api/tools`)
  );

  if (isLoading) {
    return <Loading />;
  }
  console.log(partsData);
  return (
    <div className="mt-10">
      <div>
        <h2 className=" text-own-white text-3xl  text-center block tracking-widest font-semibold mb-3">
          Our Products
        </h2>
        <div className="">
          <ul className="flex  item-center list-disc justify-center mb-6">
            <span className="text-own-text  px-4 hover:text-own-primary transition-all ease-in  cursor-pointer">
              All
            </span>
            <li className="text-own-text  mx-4 hover:text-own-primary transition-all ease-in cursor-pointer ">
              New Arrivals
            </li>
            <li className="text-own-text  mx-4 hover:text-own-primary transition-all ease-in cursor-pointer  ">
              Best Seller
            </li>
            <li className="text-own-text  mx-4 hover:text-own-primary transition-all ease-in cursor-pointer ">
              Sale Off
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {partsData.data?.map((item) => (
            <OurPartsProducts item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurParts;
