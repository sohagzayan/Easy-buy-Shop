import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Cookies from "js-cookie";
import TransferImage from "../assets/3diocns.png";
import { FaBackward } from "react-icons/fa";
import { toast } from "react-toastify";
import { useCurrentUserQuery } from "../store/API/user";

const UpdateProducts = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [currentProduct, setCurrentProduct] = useState({});
  const [inStock, setInStock] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [availability, setAvailability] = useState("");
  const userId = Cookies.get("id");
  const response = useCurrentUserQuery(userId);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://easy-buy-shop-server.onrender.com/api/v1/tools/${id}`)
      .then((res) => {
        setCurrentProduct(res.data);
      });
  }, []);

  useEffect(() => {
    setName(currentProduct?.name);
    setDetails(currentProduct?.details);
    setInStock(currentProduct?.InStock);
    setBrand(currentProduct?.Brand);
    setPrice(currentProduct?.price);
    setCategory(currentProduct?.category);
    setAvailability(currentProduct?.availability);
  }, [currentProduct]);

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://easy-buy-shop-server.onrender.com/api/v1/tools/${id}`, {
        name,
        details,
        InStock: availability === "in-stock" ? inStock : 0,
        Brand: brand,
        price,
        category,
        availability,
      })
      .then((res) => {
        if (res?.data === "SuccessFully Update Product") {
          toast.success("Update SuccessFully Complete", {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/myProfile");
        } else {
          toast.error("Product Update Fail!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      });
  };

  return (
    <>
      <Header />
      <div className="lg:w-[70%] lg:flex-row flex-col-reverse  mx-auto flex gap-6 lg:items-start w-[95%] mt-10">
        <span
          className="text-own-primary underline font-bold text-lg cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <FaBackward className="text-3xl" />
        </span>
        <div>
          <div className="">
            <div className="bg-own-white-special dark:bg-own-dark-bg-special shadow-md p-7 rounded-md">
              <div className="flex items-center gap-4">
                <img
                  src={response?.currentData?.currentuser[0]?.image}
                  alt=""
                  className="w-[40px] rounded-full"
                />
                <div>
                  <h2 className="text-own-text-light font-bold">
                    {response?.currentData?.currentuser[0]?.name}
                  </h2>
                  <h2 className="text-own-secondary dark:text-own-white">
                    {response?.currentData?.currentuser[0]?.country}
                  </h2>
                </div>
              </div>
              <form onSubmit={updateProduct} className=" mt-3">
                <label
                  htmlFor="productname"
                  className="font-bold text-own-text-light"
                >
                  Product Name
                </label>
                <input
                  id="productname"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-own-white-special text-own-text-light font-bold dark:bg-own-dark-bg-special w-full py-2  dark:text-own-white   px-4 outline-none focus:outline-own-primary mt-1  border-[1px] border-own-text-light border-opacity-20 rounded-md"
                  required
                />
                <p className=" text-secondary  mt-1"></p>
                <label
                  htmlFor="productname"
                  className="font-bold text-own-text-light"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="bg-own-white-special  font-bold dark:bg-own-dark-bg-special w-full py-2 text-own-secondary dark:text-own-white   px-4 outline-none focus:outline-own-primary mt-1  border-[1px] border-own-text-light border-opacity-20 rounded-md"
                  required
                />
                <p className=" text-secondary  "></p>
                <label
                  htmlFor="productname"
                  className="font-bold text-own-text-light"
                >
                  Brand Name
                </label>
                <input
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  type="text"
                  className="bg-own-white-special text-own-text-light font-bold dark:bg-own-dark-bg-special w-full py-2  dark:text-own-white   px-4 outline-none focus:outline-own-primary mt-1  border-[1px] border-own-text-light border-opacity-20 rounded-md"
                  required
                />
                <label
                  htmlFor="productname"
                  className="font-bold text-own-text-light mt-2 inline-block"
                >
                  In Stock
                </label>
                <input
                  value={inStock}
                  onChange={(e) => setInStock(e.target.value)}
                  type="number"
                  className="bg-own-white-special text-own-text-light font-bold dark:bg-own-dark-bg-special w-full py-2  dark:text-own-white   px-4 outline-none focus:outline-own-primary mt-1  border-[1px] border-own-text-light border-opacity-20 rounded-md"
                  required
                />
                <label
                  htmlFor="productname"
                  className="font-bold text-own-text-light mt-2 inline-block"
                >
                  Price
                </label>
                <div className="flex items-center  justify-between gap-10 mt-2">
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    className="bg-own-white-special text-own-text-light font-bold dark:bg-own-dark-bg-special w-full py-2  dark:text-own-white   px-4 outline-none focus:outline-own-primary mt-1  border-[1px] border-own-text-light border-opacity-20 rounded-md"
                    required
                  />

                  <select
                    className="border-[1px] border-own-text-light px-6 py-2 w-full border-opacity-20 rounded-md bg-own-white-special text-own-text-light font-bold dark:bg-own-dark-bg-special"
                    name=""
                    id=""
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="clock">Clock</option>
                    <option value="clock">Phone</option>
                    <option value="gadget">Gadget</option>
                    <option value="module">Module</option>
                    <option value="others">Others</option>
                  </select>
                  <select
                    className="border-[1px] border-own-text-light px-6 py-2 w-full border-opacity-20 rounded-md bg-own-white-special text-own-text-light font-bold dark:bg-own-dark-bg-special"
                    name=""
                    id=""
                    onChange={(e) => setAvailability(e.target.value)}
                  >
                    <option value="">{availability}</option>
                    <option value="in-stock">In-Stock</option>
                    <option value="out-of-stock">Out-of-Stock</option>
                  </select>
                </div>

                <button className="btn-animation w-full mt-5 flex items-center justify-center ml-0">
                  Update Info
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-own-white-special dark:bg-own-dark-bg-special rounded-md shadow-md p-5">
          <img src={TransferImage} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateProducts;
