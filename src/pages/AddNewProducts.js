import React, { useState } from "react";
import Header from "../components/Header/Header";
import UploadImage from "../assets/image_upload.png";
import bannerImahe from "../assets/banner-img-1.png";
import axios from "axios";
import swal from "sweetalert";

import AddNewProductControllers from "../components/Add_New_Products_sub/AddNewProductControllers";
import { useCurrentUserQuery } from "../store/API/user";
import Cookies from "js-cookie";
import LoadingSpenner from "../components/Loading/Loading";
import prevImage from "../assets/preview.png";
const AddNewProducts = () => {
  /** Hocks */
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [minOrder, setMinOrder] = useState("");
  const [inStock, setInStock] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [bgColor, setBgColor] = useState("");
  const imagebbKey = "0b8c4fea4eba3001acb5a66d0574e4b5";
  /** Current User Info */
  const userId = Cookies.get("id");
  const accesToken = Cookies.get("token");
  const response = useCurrentUserQuery(userId);

  /** Hnalde Add Products */
  const handleAddNewProducts = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (file) {
      const fileName = file;
      console.log(file);
      const formData = new FormData();
      formData.append("image", fileName);
      const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`;
      await axios
        .post(url, formData)
        .then((result) => {
          if (result?.data?.success) {
            axios
              .post(
                `http://localhost:5000/api/v1/tools`,
                {
                  name,
                  details,
                  price,
                  inStock,
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
                if (res.data.message === "jwt expired") {
                  Cookies.remove("token");
                  Cookies.remove("id");
                  window.location.reload(true);
                  return;
                }

                setLoading(false);
                swal("success to update your profile");
                setName("");
                setDetails("");
                setPrice("");
                setMinOrder("");
                setInStock("");
                setFile(null);
                URL.createObjectURL({});
              })
              .catch((err) => {
                setLoading(false);
              });
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    } else {
      alert("select image");
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
      <div className="relative">
        {loading && (
          <div className="absolute  left-0 top-0 h-full z-30 bg-[#101126a1] w-full   ">
            <LoadingSpenner />
          </div>
        )}
        <div className="container mx-auto sm:px-0 px-6">
          <div className="py-5 ">
            <AddNewProductControllers resetHandleForm={resetHandleForm} />
            <div className="flex items-center lg:flex-row justify-between flex-col gap-10">
              <div>
                <label
                  htmlFor="imageadd"
                  className={
                    file
                      ? "flex flex-col justify-center items-center     "
                      : "flex flex-col justify-center items-center  border-2 border-dashed   "
                  }
                >
                  {file ? (
                    <div className="flex justify-between items-center w-full gap-10 border-[1px] border-dashed border-own-primary">
                      <img
                        className="w-[130px] mr-auto border-2 border-own-primary"
                        src={URL.createObjectURL(file)}
                        alt=""
                      />
                      <div className="text-own-secondary dark:text-own-white mr-10">
                        <h5 className="text-xl  text-own-primary ">
                          Preview Your Image{" "}
                        </h5>
                        <span>{file.name}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="py-2">
                      <img className="w-[50px]" src={UploadImage} alt="" />
                      <p className="text-own-secondary dark:text-own-white text-sm">
                        Drag and drop an image, or{" "}
                        <span className="text-own-primary ">Browse</span>
                      </p>
                      <p className="text-own-secondary dark:text-own-white text-sm">
                        1600x1200 or higher recommended. Max 5MB
                      </p>
                    </div>
                  )}
                </label>
                <input
                  id="imageadd"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="mb-2 text-own-secondary dark:text-own-white hidden"
                />

                <form onSubmit={handleAddNewProducts} className=" mt-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-own-secondary w-full py-2 text-own-secondary dark:text-own-white   px-4 outline-none focus:outline-own-primary mb-2  border-[1px] border-[#7703fc46] rounded-md"
                    placeholder="Give me a name"
                    required
                  />
                  <p className=" text-secondary  mt-1"></p>
                  <textarea
                    type="text"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="bg-own-secondary w-full py-2 text-own-secondary dark:text-own-white   px-4 outline-none focus:outline-own-primary mb-2  border-[1px] border-[#7703fc46] rounded-md"
                    placeholder="Deatils Your Products"
                    required
                  />
                  <p className=" text-secondary  "></p>
                  <div className="flex items-center  justify-between gap-10">
                    <input
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      className="bg-own-secondary w-full py-2 text-own-secondary dark:text-own-white   px-4 outline-none focus:outline-own-primary mt-1  border-[1px] border-[#7703fc46] rounded-md"
                      placeholder="Your Products Price"
                      required
                    />
                    <input
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      type="text"
                      className="bg-own-secondary w-full py-2 text-own-secondary dark:text-own-white   px-4 outline-none focus:outline-own-primary mt-1  border-[1px] border-[#7703fc46] rounded-md"
                      placeholder="Your Products Category"
                      required
                    />
                  </div>
                  <div className="flex items-center mt-2 gap-10">
                    <input
                      value={inStock}
                      onChange={(e) => setInStock(e.target.value)}
                      type="number"
                      className="bg-own-secondary w-full py-2 text-own-secondary dark:text-own-white   px-4 outline-none focus:outline-own-primary   border-[1px] border-[#7703fc46] rounded-md"
                      placeholder="In Stock"
                      required
                    />
                    <input
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      type="text"
                      className="bg-own-secondary w-full py-2 text-own-secondary dark:text-own-white   px-4 outline-none focus:outline-own-primary   border-[1px] border-[#7703fc46] rounded-md"
                      placeholder="Brand Name"
                      required
                    />
                  </div>

                  <button className="btn-animation flex items-center justify-center ml-0">
                    Add Product
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </form>
              </div>
              <div>
                <img className="w-[600px]" src={bannerImahe} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewProducts;
