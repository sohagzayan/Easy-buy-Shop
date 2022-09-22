import React, { useState } from "react";
import Header from "../components/Header/Header";
import UploadImage from "../assets/image_upload.png";
import bannerImahe from "../assets/banner-img-1.png";
import axios from "axios";
import swal from "sweetalert";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
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
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
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
          console.log(result?.data?.data?.url);
          console.log(result?.data?.success);
          if (result?.data?.success) {
            console.log("come inner");
            axios
              .post(
                `http://localhost:5000/api/v1/tools`,
                {
                  name,
                  details,
                  price,
                  quantity,
                  minimumOrder: minOrder,
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
                }

                console.log(res.data.message);
                setLoading(false);
                swal("success to update your profile");
                setName("");
                setDetails("");
                setPrice("");
                setMinOrder("");
                setQuantity("");
                setFile(null);
              })
              .catch((err) => {
                setLoading(false);
                console.log(err);
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
    setQuantity("");
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
                        className="w-[200px] mr-auto border-2 border-own-primary"
                        src={URL.createObjectURL(file)}
                        alt=""
                      />
                      <div className="text-own-white mr-10">
                        <h5 className="text-xl  text-own-primary ">
                          Preview Your Image{" "}
                        </h5>
                        <span>{file.name}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="py-2">
                      <img className="w-[100px]" src={UploadImage} alt="" />
                      <p className="text-own-white">
                        Drag and drop an image, or{" "}
                        <span className="text-own-primary">Browse</span>
                      </p>
                      <p className="text-own-white">
                        1600x1200 or higher recommended. Max 5MB
                      </p>
                    </div>
                  )}
                </label>
                <input
                  id="imageadd"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="mb-2 text-own-white hidden"
                />

                <form onSubmit={handleAddNewProducts} className=" mt-6">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-own-secondary w-full py-2 text-own-white   px-4 outline-none focus:outline-own-primary  border-[1px] border-[#7703fc46] rounded-md"
                    placeholder="Give me a name"
                    required
                  />
                  <p className=" text-secondary  mt-1"></p>
                  <textarea
                    type="text"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="bg-own-secondary w-full py-2 text-own-white   px-4 outline-none focus:outline-own-primary mt-4  border-[1px] border-[#7703fc46] rounded-md"
                    placeholder="Deatils Your Products"
                    required
                  />
                  <p className=" text-secondary  mt-1"></p>
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    className="bg-own-secondary w-full py-2 text-own-white   px-4 outline-none focus:outline-own-primary mt-4  border-[1px] border-[#7703fc46] rounded-md"
                    placeholder="Your Products Price"
                    required
                  />
                  <p className=" text-secondary  mt-1"></p>
                  <div className="flex items-center gap-10">
                    <input
                      value={minOrder}
                      onChange={(e) => setMinOrder(e.target.value)}
                      type="number"
                      className="bg-own-secondary w-full py-2 text-own-white   px-4 outline-none focus:outline-own-primary mt-4  border-[1px] border-[#7703fc46] rounded-md"
                      placeholder="Minimum Order Quantity"
                      required
                    />
                    <p className=" text-secondary  mt-1"></p>
                    <input
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      type="number"
                      className="bg-own-secondary w-full py-2 text-own-white   px-4 outline-none focus:outline-own-primary mt-4  border-[1px] border-[#7703fc46] rounded-md"
                      placeholder="Available Order Quentitie"
                      required
                    />
                    <p className=" text-secondary  mt-1"></p>
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
