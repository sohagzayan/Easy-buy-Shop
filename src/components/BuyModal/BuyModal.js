import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { format } from "date-fns";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import * as yup from "yup";
import { useAuthContext } from "../../context/AuthContextProvider";

const BuyModal = ({ yourQuantity, price }) => {
  const formattedDate = format(new Date(), "PP");
  const [orderAmount, setOrderAmount] = useState(0);
  const { username } = useAuthContext();
  let schema = yup.object().shape({
    name: yup.string().required(),
    phoneNumber: yup.number().required(),
    address: yup.string().required(),
    email: yup.string().required("Please enter your email !").email(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const { name, email, phoneNumber, address } = data;
    const purchaseData = {
      name,
      email,
      address,
      phoneNumber,
      price: price,
      orderAmount: yourQuantity,
      date: formattedDate,
    };
    await axios.post(`http://localhost:5000/api/purchase`, purchaseData);
    swal("Your Order Success");
  };
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle btn-secondary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-5">Conform Your Order Please </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              required
              type="text"
              placeholder="Name"
              value={username.displayName}
              className="input mb-3 input-bordered input-secondary w-full "
              {...register("name")}
            />
            <p className=" text-secondary">{errors.Name?.message}</p>
            <input
              required
              type="text"
              placeholder="Email"
              value={username.email}
              className="input mb-3 input-bordered input-secondary w-full"
              {...register("email")}
            />
            <p className=" text-secondary">{errors.email?.message}</p>

            <input
              required
              type="text"
              placeholder="Address"
              className="input mb-3 input-bordered input-secondary w-full "
              {...register("address")}
            />
            <p className=" text-secondary">{errors.address?.message}</p>

            <input
              required
              type="text"
              placeholder="Phone Number"
              className="input mb-3 input-bordered input-secondary w-full "
              {...register("phoneNumber")}
            />
            <p className=" text-secondary">{errors.phoneNumber?.message}</p>
            <span className="text-2xl block text-secondary mb-3 font-bold">
              Your Amount Of Product: {yourQuantity}
            </span>
            <span className="text-2xl block text-secondary mb-3 font-bold">
              Total Price : {yourQuantity * price}
            </span>
            <button className="btn-secondary text-white btn ">Purchase</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyModal;
