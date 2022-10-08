import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import { useCurrentUserQuery } from "../../store/API/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/cardSlice";

const BuyProductsModal = ({
  data,
  subTotal,
  subPrice,
  currentModalData,
  setCurrentModalData,
}) => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const userid = Cookies.get("id");
  const response = useCurrentUserQuery(userid);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cardData = useSelector((current) => current.card);
  const token = Cookies.get("token");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleProductBy = async (e) => {
    e.preventDefault();
    // toast.warning(" Quentity 0 or nagitive value not allaw!", {
    //   position: toast.POSITION.BOTTOM_CENTER,
    // });

    await axios
      .post(
        "http://localhost:5000/api/v1/purchase",
        {
          name: response?.currentData?.currentuser[0].name,
          email: response?.currentData?.currentuser[0].email,
          address: address,
          Number: phone,
          price: currentModalData?.price,
          totalPrice: currentModalData?.subTotal,
          productIds: currentModalData?.productId,
          orderAmount: currentModalData.quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(currentModalData?.productId);
        console.log(res);
        toast.success("Successfully Complete your order  !", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate(`/payment/${res?.data?.parchesId}`);
        setAddress("");
        setPhone("");
      });
  };

  const handleCloseModalRest = () => {
    setPhone("");
    setAddress("");
    setCurrentModalData({});
  };
  return (
    <div className="">
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />

      <div className="modal modal-bottom sm:modal-middle  modal-modifiy">
        <div className="modal-box  bg-own-white-special dark:bg-own-dark-bg-special">
          <label
            onClick={handleCloseModalRest}
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-own-primary text-own-white dark:text-own-white border-transparent"
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
              value={response?.currentData?.currentuser[0].email}
              className="w-full bg-own-white-special border-[1px] focus:outline-own-primary border-own-text-light dark:bg-own-dark-bg dark:text-own-white  text-own-secondary py-2 rounded-md px-4 mb-2 "
            />
            <input
              type="text"
              readOnly
              value={response?.currentData?.currentuser[0].name}
              className="w-full bg-own-white-special border-[1px] focus:outline-own-primary border-own-text-light dark:bg-own-dark-bg dark:text-own-white  text-own-secondary py-2 rounded-md px-4 mb-2"
            />
            <input
              type="text"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-own-white-special border-[1px] focus:outline-own-primary border-own-text-light dark:bg-own-dark-bg dark:text-own-white  text-own-secondary py-2 rounded-md px-4 mb-2"
              placeholder="You Address"
            />
            <input
              type="text"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-own-white-special border-[1px] focus:outline-own-primary border-own-text-light dark:bg-own-dark-bg dark:text-own-white  text-own-secondary py-2 rounded-md px-4 mb-2"
              placeholder="You Phone"
            />
            <button className="btn bg-own-primary text-own-white  dark:text-own-white border-transparent mt-4">
              Conform Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyProductsModal;
