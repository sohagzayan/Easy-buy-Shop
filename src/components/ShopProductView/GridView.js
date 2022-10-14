import React from "react";
import OurPartsProducts from "../OurPartsProducts/OurPartsProducts";

const GridView = ({ handleAddToBookmark, data }) => {
  return (
    <div className=" mx-auto  grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
      {data?.map((item, index) => (
        <OurPartsProducts
          key={index}
          item={item}
          own={false}
          handleAddToBookmark={handleAddToBookmark}
        />
      ))}
    </div>
  );
};

export default GridView;
