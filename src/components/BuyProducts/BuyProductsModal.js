import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import { useCurrentUserQuery } from "../../store/API/user";

const BuyProductsModal = ({
  ProductId,
  totalPrice,
  email,
  name,
  price,
  quentity,
}) => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleProductBy = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/v1/purchase", {
        name: name,
        email: email,
        address: address,
        Number: phone,
        price: price,
        totalPrice: totalPrice,
        productId: ProductId,
        orderAmount: quentity,
      })
      .then((res) => {
        swal("Your Order Successfuly Complete");
        setAddress("");
        setPhone("");
      });
  };

  return (
    <div className="">
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />

      <div className="modal modal-bottom sm:modal-middle  modal-modifiy">
        <div className="modal-box  bg-own-secondary">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-own-primary text-own-secondary dark:text-own-white border-transparent"
          >
            ✕
          </label>
          <form onSubmit={handleProductBy} action="" className="mt-6">
            <div>
              <h2 className="text-2xl text-center text-own-primary mb-5">
                Conform You Order
              </h2>
            </div>
            <input
              type="text"
              value={email}
              className="w-full mb-2 text-own-secondary dark:text-own-white bg-own-ternary py-2 rounded-md px-4 "
            />
            <input
              type="text"
              value={name}
              className="w-full bg-own-ternary py-2 rounded-md px-4 mb-2"
            />
            <input
              type="text"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-own-ternary py-2 rounded-md px-4 mb-2"
              placeholder="You Address"
            />
            <input
              type="text"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-own-ternary py-2 rounded-md px-4 "
              placeholder="You Phone"
            />
            <button className="btn bg-own-primary text-own-secondary dark:text-own-white border-transparent mt-4">
              Conform Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyProductsModal;
