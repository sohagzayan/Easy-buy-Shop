import React, { useState } from "react";
import Header from "../components/Header/Header";
import axios from "axios";
import swal from "sweetalert";
import coverImage from "../assets/5.jpg";
import AddNewProductControllers from "../components/Add_New_Products_sub/AddNewProductControllers";
import { useCurrentUserQuery } from "../store/API/user";
import Cookies from "js-cookie";
import { Puff } from "react-loader-spinner";
import { useLayoutEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AddNewProducts = () => {
  /** Hocks */
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [minOrder, setMinOrder] = useState("");
  const [inStock, setInStock] = useState("");
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const imagebbKey = "0b8c4fea4eba3001acb5a66d0574e4b5";
  /** Current User Info */
  const userId = Cookies.get("id");
  const accesToken = Cookies.get("token");
  const response = useCurrentUserQuery(userId);

  // useLayoutEffect(() => {
  //   if (loading) {
  //     document.body.style.overflow = "hidden";
  //     document.body.style.height = "100%";
  //   }
  //   if (!loading) {
  //     document.body.style.overflow = "auto";
  //     document.body.style.height = "auto";
  //   }
  // }, [loading]);

  /** Hnalde Add Products */
  const handleAddNewProducts = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (file) {
      const fileName = file;
      const formData = new FormData();
      formData.append("image", fileName);
      const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`;
      await axios
        .post(url, formData)
        .then((result) => {
          if (result?.data?.success) {
            axios
              .post(
                `https://easy-buy-shop-server.onrender.com/api/v1/tools`,
                {
                  name,
                  details,
                  price,
                  InStock: inStock,
                  Brand: brand,
                  category,
                  image: result?.data?.data?.url,
                },
                {
                  headers: {
                    Authorization: `Bearer ${accesToken}`,
                  },
                }
              )
              .then((res) => {
                console.log(res?.data);
                if (res?.data.status === 500 || res?.data?.message) {
                  setLoading(false);
                  toast.error(res?.data?.message, {
                    position: toast.POSITION.BOTTOM_CENTER,
                  });
                } else if (
                  res?.data.status === 500 ||
                  res?.data?.message === "jwt expired"
                ) {
                  Cookies.remove("token");
                  Cookies.remove("id");
                  window.location.reload(true);
                  setLoading(false);
                  return;
                } else {
                  toast.success("SuccessFull To Add Your Product", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                  setLoading(false);
                  navigate("/myProfile");
                }
              })
              .catch((err) => {
                toast.error(err.message, {
                  position: toast.POSITION.BOTTOM_CENTER,
                });
                setLoading(false);
              });
          }
        })
        .catch((error) => {
          toast.error(error.message, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          setLoading(false);
        });
    } else {
      setLoading(false);
      toast.error("Select Image Must", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  /** Reset Form */
  const resetHandleForm = () => {
    setName("");
    setDetails("");
    setPrice("");
    setMinOrder("");
    setInStock("");
    setFile(null);
    swal("Reset Your Form Successful");
  };

  return (
    <>
      <Header />
      <div className="relative  bg-own-white-special dark:bg-own-dark-bg-special">
        {loading && (
          <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-screen bg-[#152c5b46] pointer-events-none overflow-hidden">
            <Puff
              height="80"
              width="80"
              radisu={1}
              color="#4fa94d"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
        <div className="container mx-auto sm:px-0 px-6">
          <div className="py-5 ">
            <AddNewProductControllers resetHandleForm={resetHandleForm} />
            <div className="flex justify-center md:w-[80%] w-[98%] mx-auto md:flex-row  flex-col-reverse gap-6 items-start">
              <div className="">
                <h2 className="text-xl font-bold text-own-secondary dark:text-own-white mb-2">
                  Upload Item
                </h2>
                <div className="bg-own-white dark:bg-own-dark-bg shadow-md p-7 rounded-md">
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
                  <input
                    id="imageadd"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="mb-2 text-own-text-light mt-4 dark:text-own-white "
                  />
                  <form onSubmit={handleAddNewProducts} className=" mt-3">
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
                    </div>

                    <button className="btn-animation w-full mt-5 flex items-center justify-center ml-0">
                      Add Product
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="">
                <h2 className="text-xl font-bold text-own-secondary dark:text-own-white mb-2">
                  Preview
                </h2>
                <div className="bg-own-white dark:bg-own-dark-bg shadow-md p-7 rounded-md">
                  {file ? (
                    <img
                      className="w-[130px] mr-auto border-2 border-own-primary"
                      src={URL.createObjectURL(file)}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[250px] mr-auto border-2 border-own-primary"
                      src={coverImage}
                      alt=""
                    />
                  )}
                  <div>
                    <h3 className="text-own-text-light font-bold mt-2">
                      Title
                    </h3>
                    <div className="flex text-own-text-light mt-1 justify-between font-semibold">
                      <span>Category</span>
                      <span>Price</span>
                    </div>
                    <div className="flex text-sm mt-3 text-own-text-light  justify-between font-semibold">
                      <span>in stock</span>
                      <span>Brand Name</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewProducts;
