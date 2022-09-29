import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { NavLink, useParams } from "react-router-dom";
import { TbShoppingCartDiscount } from "react-icons/tb";
import axios from "axios";
import discountimage from "../../assets/discount.png";
import ProductReview from "../ProductReview/ProductReview";
import demouser from "../../assets/demouser.png";
import { FcLikePlaceholder } from "react-icons/fc";
import BuyProductsModal from "../BuyProducts/BuyProductsModal";
import Cookies from "js-cookie";
import { useCurrentUserQuery } from "../../store/API/user";

const ProductsDetails = () => {
  const { id } = useParams();
  const [detailsProduct, setDetailsProduct] = useState({});
  const [quentity, setQuentity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const userid = Cookies.get("id");
  const response = useCurrentUserQuery(userid);
  // console.log(response?.currentData?.currentuser[0].email    );
  useEffect(() => {
    const url = `http://localhost:5000/api/v1/tools/${id}`;
    axios
      .get(url)
      .then((res) => setDetailsProduct(res.data))
      .catch((err) => console.log(err));
  }, [detailsProduct]);

  useEffect(() => {
    const productPrice = parseInt(detailsProduct?.price) || 0;
    const quentityAmount = parseInt(quentity) || 0;
    setTotalPrice(quentityAmount * productPrice);
  }, [quentity]);

  // console.log(detailsProduct?.users?.name);

  return (
    <>
      <Header />
      <div>
        <div className="container_c mx-auto">
          <div className="text-own-secondary dark:text-own-white text-center py-7">
            <h3 className="text-2xl  font-semibold mb-1">Products Details</h3>
            <p className=" text-own-text-light  dark:text-own-text-dark">
              Congratulations, your new shot is live and looking good.
            </p>
          </div>
          <div className="grid grid-cols-12 py-10 items-center">
            <div className="col-span-6 flex flex-col  relative">
              <img className="w-[70%]" src={detailsProduct?.image} alt="" />
              {/* <span className="flex items-center text-own-secondary dark:text-own-white text-2xl font-bold bg-[#18182F] px-3 rounded-md py-2 absolute top-0 left-20">
                10
                <img className="w-[60px] ml-3" src={discountimage} alt="" />
              </span> */}
            </div>
            <div className="col-span-6 text-own-secondary dark:text-own-white">
              <div className="profile-info flex gap-2 items-center mb-4">
                <img
                  className="w-[50px] rounded-full"
                  src={detailsProduct?.users?.image}
                  alt=""
                />
                <div className="">
                  <h2 className="text-own-secondary dark:text-own-white">
                    {detailsProduct?.users?.name}
                  </h2>
                  <span className="text-own-secondary dark:text-own-white">
                    {detailsProduct?.users?.country}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-own-primary border-own-primary inline-block mb-1">
                {/* {detailsProduct?.name} */}
                {detailsProduct?.name}
              </h2>
              <sup className="block py-2">
                7 Reviews /{" "}
                <NavLink className="underline cursor-pointer" to="/review">
                  Write A Review
                </NavLink>
              </sup>
              <p className="text-own-text-light  dark:text-own-text-dark py-1">
                {detailsProduct?.details}
              </p>
              <hr className="border-[1px] border-own-primary border-opacity-20 my-1" />
              <p className="py-1">
                Availability:{" "}
                <span className="text-own-primary">
                  {detailsProduct?.availability}
                </span>{" "}
                Brand:{" "}
                <span className="text-own-primary">
                  {detailsProduct?.Brand}
                </span>{" "}
                SKU:
                <span className="text-own-primary"> 83690/32</span>
              </p>
              <h3 className="text-2xl text-own-primary">
                ${detailsProduct?.price}
              </h3>
              <div className="flex items-center gap-1 ">
                <span>In Stock:{detailsProduct?.InStock}</span>
                <span className="text-2xl font-semibold text-own-primary  ">
                  {detailsProduct?.quantity}
                </span>
              </div>
              <h3>
                Products Warranty{" "}
                <span className="text-xl text-own-primary">
                  {detailsProduct?.Warranty}
                </span>{" "}
                Year
              </h3>
              <div>
                <h2 className="mt-4">QUANTITY</h2>
                <div className="flex items-center mt-1">
                  <input
                    min="1"
                    value={quentity}
                    onChange={(e) => setQuentity(e.target.value)}
                    className="w-[80px] py-1 bg-own-ternary text-center rounded-md border-[1px] border-own-primary mr-2"
                    type="number"
                  />
                  <button
                    title="Add Your Wish list"
                    className="bg-own-ternary p-3 rounded-md flex items-center gap-1"
                  >
                    <FcLikePlaceholder />
                    <span>{detailsProduct?.like}</span>
                  </button>
                </div>
                <h3>
                  Total Price :{" "}
                  <span className="text-own-primary text-xl">
                    {/* {parseInt(quentity) * parseInt(detailsProduct?.price)} */}
                    {totalPrice}
                  </span>
                </h3>
              </div>
              <div className="flex justify-between items-center mt-4">
                <label
                  htmlFor="my-modal-6"
                  className="btn modal-button border-transparent text-own-secondary dark:text-own-white bg-own-primary"
                >
                  Buy Now
                </label>

                <button className="flex items-center gap-3 bg-own-primary px-3 py-2 rounded-md ">
                  {" "}
                  <TbShoppingCartDiscount /> Add To Card
                </button>
              </div>
            </div>
          </div>
        </div>

        <ProductReview />
        <BuyProductsModal
          totalPrice={totalPrice}
          ProductId={detailsProduct?._id}
          email={response?.currentData?.currentuser[0].email}
          name={response?.currentData?.currentuser[0].name}
          price={detailsProduct?.price}
          quentity={quentity}
        />
      </div>
      <Footer />
    </>
  );
};

export default ProductsDetails;
