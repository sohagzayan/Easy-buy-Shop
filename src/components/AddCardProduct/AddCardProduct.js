import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillDelete, AiOutlineMinus } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/cardSlice";
import BuyProductsModal from "../BuyProducts/BuyProductsModal";

const AddCardProduct = ({
  data,
  deleteFormCard,
  subPrice,
  handleBuySingleProduct,
}) => {
  const token = Cookies.get("token");
  const { image, name, category, price, quantity, _id, subTotal, productId } =
    data;
  const [quentitys, setQuentitys] = useState(quantity);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .put(
        `https://easy-buy-shop-server.onrender.com/api/v1/addToCard/${_id}`,
        {
          quantity: quentitys,
          subTotal: parseInt(price) * parseInt(quentitys),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res));
  }, [quentitys]);

  return (
    <tr className="">
      <td className="flex  gap-3 items-center   bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white border-b-0">
        <img src={image} className="w-[30px]" alt="" />
        <div className="">
          <h4 className="">{name.slice(0, 10)}...</h4>
          <sub className="">{category}</sub>
        </div>
      </td>
      <td className="bg-own-white-special border-b-0 dark:bg-own-dark-bg-special dark:text-own-white">
        ${price}
      </td>
      <td className="bg-own-white-special border-b-0 dark:bg-own-dark-bg-special dark:text-own-white">
        <button
          className="cursor-pointer"
          onClick={() => {
            setQuentitys((prev) => prev - 1);
            dispatch(fetchProducts());
          }}
        >
          <AiOutlineMinus />
        </button>
        <span className="font-bold mx-2 text-xl">{quentitys}</span>
        <button
          className="cursor-pointer"
          onClick={() => {
            setQuentitys((prev) => prev + 1);
            dispatch(fetchProducts());
          }}
        >
          <HiPlus />
        </button>
      </td>
      <td className="bg-own-white-special border-b-0 dark:bg-own-dark-bg-special dark:text-own-white">
        ${subTotal}
      </td>
      <td className="bg-own-white-special border-b-0 dark:bg-own-dark-bg-special dark:text-own-white">
        <span
          onClick={() => deleteFormCard(_id)}
          className="flex justify-center cursor-pointer"
        >
          <AiFillDelete className="text-xl text-own-soft-red" />
        </span>
      </td>
      <td className="bg-own-white-special border-b-0 dark:bg-own-dark-bg-special dark:text-own-white">
        <label
          onClick={() => handleBuySingleProduct(productId)}
          htmlFor="my-modal-6"
          className="  rounded-md font-bold px-2 py-1 inline-block modal-button border-transparent  text-sm  text-own-white dark:text-own-white cursor-pointer bg-own-primary "
        >
          Buy Now
        </label>
      </td>
    </tr>
  );
};

export default AddCardProduct;
