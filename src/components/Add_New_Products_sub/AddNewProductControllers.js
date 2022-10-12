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
    <div className="flex  ml-32 ">
      <button
        onClick={handleCalcel}
        className="border-[1px] px-3 py-2 mr-3 rounded-md border-own-primary border-opacity-50 mb-3 bg-own-white font-bold dark:bg-own-dark-bg text-[#EA4C89]"
      >
        Chancel
      </button>
      <button
        onClick={resetHandleForm}
        className="border-[1px] px-3 py-2  rounded-md border-own-primary border-opacity-50 mb-3 text-own-primary font-bold bg-own-white dark:bg-own-dark-bg"
      >
        Reset Form
      </button>
    </div>
  );
};

export default AddNewProductControllers;
