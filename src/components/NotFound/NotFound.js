import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen text-own-secondary dark:text-own-white flex justify-center items-center text-center relative after:absolute after:content-['404'] md:after:text-[20rem] after:text-[10rem]  z-50 after:-z-10 after:opacity-10 after:font-extrabold ">
      <div>
        <h2 className="text-4xl font-bold mb-2">Page Not Found</h2>
        <p className="md:text-xl text-md">
          Oops, something went wrong and we couldn't find that page at
        </p>
        <div className="flex  justify-around mt-4">
          <button
            onClick={() => navigate("/")}
            className="border-[2px] border-own-text-dark bg-transparent transition-all ease-in px-3 py-3 font-bold rounded-md hover:bg-own-white hover:text-own-secondary"
          >
            Homepage
          </button>
          <button
            onClick={() => navigate(-1)}
            className="border-[2px] border-own-text-dark bg-transparent transition-all ease-in px-6 py-1 font-bold rounded-md hover:bg-own-white hover:text-own-secondary"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
