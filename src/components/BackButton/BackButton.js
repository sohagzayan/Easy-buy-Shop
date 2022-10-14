import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ text }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center dark:text-own-white text-own-secondary mb-6 mt-4">
      <div>
        <h3 className="font-bold">{text}</h3>
      </div>
      <div>
        <button
          onClick={() => navigate(-1)}
          className="dark:bg-own-soft-red px-4 rounded-md py-1 dark:text-own-white font-bold"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default BackButton;
