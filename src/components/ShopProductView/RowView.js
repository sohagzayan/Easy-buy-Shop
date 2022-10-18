import React from "react";
import OurPartsProducts from "../OurPartsProductsRowView/OurPartsProductsRowView";

const RowView = ({ data }) => {
  return (
    <div className=" grid  grid-cols-1 md:gap-5 mt-10 gap-10">
      {data?.map((item, index) => (
        <OurPartsProducts key={index} item={item} own={false} />
      ))}
    </div>
  );
};

export default RowView;
