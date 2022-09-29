import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AddNewProductControllers = ({ resetHandleForm }) => {
  const navigate = useNavigate();
  const handleCalcel = () => {
    swal({
      title: "Chancel Your Products Added Process!",
      text: "if you click ok navigate your profile ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        navigate("/myProfile");
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <div>
      <div className="flex sm:items-center sm:justify-center   sm:flex-row flex-col">
        <button
          onClick={handleCalcel}
          className="border-[1px] px-6 py-3    rounded-md border-own-primary border-opacity-50 bg-own-secondary text-[#EA4C89]"
        >
          Chancel
        </button>

        <div className="text-own-secondary dark:text-own-white flex sm:justify-end items-center mb-4  container mx-auto py-3">
          <button
            onClick={resetHandleForm}
            className="border-[1px] px-6 py-3  rounded-md border-own-primary border-opacity-50 bg-own-secondary"
          >
            Reset Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewProductControllers;
