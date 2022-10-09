import axios from "axios";
import React from "react";
import swal from "sweetalert";
const MF = "https://easy-buy.onrender.com/upload/";
const ManageAllProdutsCard = ({ data }) => {
  const { image, name, price, details, minimumOrder, quantity, _id } = data;
  console.log(data);

  const handleDeleteProducts = async () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        axios.delete(`https://easy-buy.onrender.com/api/tools/${_id}`);
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <div className="mb-6">
      <div className="card rounded-md card-side flex md:flex-row flex-col bg-own-ternary shadow-xl">
        <img width="200px" src={image ? MF + image : null} alt="Movie" />

        <div className="card-body">
          <h2 className="card-title text-own-secondary dark:text-own-white">
            {name}
          </h2>
          <p className="text-own-secondary dark:text-own-white">{details}</p>
          <span className="text-own-secondary dark:text-own-white">
            Price : {price}
          </span>
          <div className="card-actions justify-end">
            <div className="flex flex-col text-own-secondary dark:text-own-white">
              <span>Available : {quantity}</span>
              <span>MinimumOrder : {minimumOrder}</span>
            </div>
            <button
              onClick={handleDeleteProducts}
              className="btn  bg-own-primary text-own-secondary dark:text-own-white text-white items-center"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllProdutsCard;
