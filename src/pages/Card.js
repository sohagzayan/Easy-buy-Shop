import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import AddCardProduct from "../components/AddCardProduct/AddCardProduct";
import BuyProductsModal from "../components/BuyProducts/BuyProductsModal";
import Header from "../components/Header/Header";
import LoadingSpener from "../components/LoadingSpener/LoadingSpener";
import { useCurrentUserQuery } from "../store/API/user";
import { fetchProducts } from "../store/slices/cardSlice";

const Card = () => {
  const userid = Cookies.get("id");
  const token = Cookies.get("token");
  const [currentModalData, setCurrentModalData] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const response = useCurrentUserQuery(userid);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const cardData = useSelector((current) => current.card);

  useEffect(() => {
    console.log("before dispatch");
    dispatch(fetchProducts());
    console.log("after dispatch dispatch");
  }, []);

  const deleteFormCard = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/v1/addToCard/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Remove Form Your Card", {
          position: toast.POSITION.TOP_CENTER,
        });
        dispatch(fetchProducts());
      });
  };

  const ResetCard = async () => {
    await axios
      .delete(`http://localhost:5000/api/v1/addToCard/23232`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          removeAll: true,
        },
      })
      .then((res) => {
        toast.success("Remove Form Your Card", {
          position: toast.POSITION.TOP_CENTER,
        });
        dispatch(fetchProducts());
      });
  };

  const handleBuySingleProduct = async (id) => {
    const current = cardData?.cardProduct?.find((c) => c.productId === id);

    if (current) {
      setCurrentModalData(current);
    }
  };
  console.log(cardData);
  return (
    <>
      <Header />
      <div className="min-h-screen">
        {cardData?.status === "loading" ? (
          <LoadingSpener />
        ) : (
          <div>
            <div className="container_c mx-auto ">
              <div className="flex items-center gap-5">
                <img
                  className="w-[50px] rounded-full"
                  src={response?.currentData?.currentuser[0].image}
                  alt=""
                />
                <div className="dark:text-own-white">
                  <h2 className="font-bold">
                    {response?.currentData?.currentuser[0].name}
                  </h2>
                  <span>{response?.currentData?.currentuser[0].country}</span>
                </div>
              </div>
              <div className="mt-10">
                <div className="overflow-x-auto border-[1px] border-own-text-light border-opacity-0 rounded-lg">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th className="bg-transparent border-b-[1px] border-own-text-light border-opacity-10 dark:bg-own-dark-bg-special dark:text-own-white">
                          Item
                        </th>
                        <th className="bg-transparent border-b-[1px] border-own-text-light border-opacity-10 dark:bg-own-dark-bg-special dark:text-own-white">
                          Price
                        </th>
                        <th className="bg-transparent border-b-[1px] border-own-text-light border-opacity-10 dark:bg-own-dark-bg-special dark:text-own-white">
                          Quantity
                        </th>
                        <th className="bg-transparent border-b-[1px] border-own-text-light border-opacity-10 dark:bg-own-dark-bg-special dark:text-own-white">
                          SubTotal
                        </th>
                        <th className="bg-transparent border-b-[1px] border-own-text-light border-opacity-10 dark:bg-own-dark-bg-special dark:text-own-white">
                          Remove
                        </th>
                        <th className="bg-transparent border-b-[1px] border-own-text-light border-opacity-10 dark:bg-own-dark-bg-special dark:text-own-white">
                          Buy
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cardData?.cardProduct?.map((c) => {
                        return (
                          <AddCardProduct
                            handleBuySingleProduct={handleBuySingleProduct}
                            data={c}
                            setSubTotal={setSubTotal}
                            deleteFormCard={deleteFormCard}
                            setTotal={setTotal}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {cardData?.cardProduct?.length <= 0 ? (
                  <div className="text-own-text-light text-2xl text-center py-10">
                    <h2 className="font-bold">Card Empty</h2>
                    <p>Add you product on card</p>
                  </div>
                ) : null}
                <div className="mt-3 flex justify-between items-center">
                  <NavLink
                    to="/shops"
                    className="bg-own-primary px-3 py-2  rounded-md text-own-white"
                  >
                    Continue Shopping
                  </NavLink>
                  <button
                    onClick={ResetCard}
                    className="bg-own-soft-red px-3 py-2  rounded-md text-own-white"
                  >
                    Clear Card
                  </button>
                </div>
                <div className="mt-5">
                  <div className="w-[300px] bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white p-5 rounded-md">
                    <h3>SubTotal : {cardData?.subTotal}</h3>
                    <h3 className="border-b-[1px] border-own-text-light border-opacity-20 mb-3 pb-1">
                      Shipping Fee: {total}
                    </h3>
                    <h3>OrderTotal : {cardData?.subTotal}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentModalData && (
          <BuyProductsModal
            setCurrentModalData={setCurrentModalData}
            currentModalData={currentModalData}
          />
        )}
      </div>
    </>
  );
};

export default Card;
