import React from "react";
import { Dna } from "react-loader-spinner";

const LoadingSpener = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Dna
        visible={true}
        height="150"
        width="150"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperclassName="dna-wrapper"
      />
    </div>
  );
};

export default LoadingSpener;
