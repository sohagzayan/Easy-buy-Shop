import React from "react";
import { Dna } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen dark:bg-own-dark-bg-special bg-own-white-special bg-opacity-50">
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

export default Loading;
