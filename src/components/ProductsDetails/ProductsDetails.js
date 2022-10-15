import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductReview from "../ProductReview/ProductReview";
import BuyProductsModal from "../BuyProducts/BuyProductsModal";
import Cookies from "js-cookie";
import { useCurrentUserQuery } from "../../store/API/user";
import ReviewAddOnProducts from "./ReviewAddOnProducts";
import { MdOutlineRemove } from "react-icons/md";
import { toast } from "react-toastify";
import { fetchProducts } from "../../store/slices/cardSlice";
import { useDispatch } from "react-redux";
import { HiPlusSm } from "react-icons/hi";
import { MagnifyingGlass } from "react-loader-spinner";
import BackButton from "../BackButton/BackButton";

const ProductsDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detailsProduct, setDetailsProduct] = useState({});
  const [quentity, setQuentity] = useState(1);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [reviewValue, setReviewValue] = useState(0);
  const [sendReviewActive, setSendReviewActive] = useState(false);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);
  const [alredyBuy, setAlredyBuy] = useState([]);
  const userid = Cookies.get("id");
  const token = Cookies.get("token");
  const response = useCurrentUserQuery(userid);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(response?.currentData?.currentuser[0].email    );
  useEffect(() => {
    setLoading(true);
    (async () => {
      const url = `http://localhost:5000/api/v1/tools/${id}`;
      await axios
        .get(url)
        .then((res) => {
          setDetailsProduct(res.data);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err?.message, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          setLoading(false);
        });
    })();
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/v1/purchase/alredy_purchase?productId=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setAlredyBuy(res.data);
      });
  }, [alredyBuy]);

  useEffect(() => {
    const productPrice = parseInt(detailsProduct?.price) || 0;
    const quentityAmount = parseInt(quentity) || 0;
    console.log(detailsProduct?.price);
    setSubTotalPrice(quentityAmount * productPrice);
  }, [quentity]);

  const addToCardProduct = async (id) => {
    if (quentity <= 0) {
      toast.error("Quantity 0 or Negative value not allow!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      await axios
        .post(
          `http://localhost:5000/api/v1/addToCard/${id}`,
          { quantity: quentity, subTotal: subTotalPrice },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (
            res.data.status === 5000 ||
            res.data.message === "This Product Already Exits!"
          ) {
            toast.warn("This Product already Added", {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          } else {
            toast.success("Success to add you card!", {
              position: toast.POSITION.TOP_CENTER,
            });
            navigate("/card");
            dispatch(fetchProducts(response?.currentData?.currentuser[0]?._id));
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleAddToBookmark = (id) => {
    console.log("adding continew bookmark");
    axios
      .post(
        `http://localhost:5000/api/v1/bookmark/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res?.data?.status === 500) {
          toast.warning("Already have this product your bookmark list!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
          });
        } else {
          toast.success("Bookmark Added SuccessFull", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
          });
          navigate("/card");
        }
      });
  };

  const handleIncremetntQuentity = () => {
    if (quentity >= detailsProduct?.InStock) {
      toast.warning("You Can't Buy more then product in stock", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1300,
      });
    } else {
      setQuentity((prev) => prev + 1);
    }
  };

  const handleDecrementQuentity = () => {
    if (quentity <= 1) {
      toast.warning("Mimimum 1 Quentity Required!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1300,
      });
    } else {
      setQuentity((prev) => prev - 1);
    }
  };

  return (
    <div key="23">
      <Header />
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <div>
          <div className="container_c mx-auto">
            <BackButton text="Product Deatils" />
            <div className="grid grid-cols-12 py-10 items-center">
              <div className="sm:col-span-6 col-span-12 flex flex-col  relative mb-10">
                <img
                  className="w-[40%] mx-auto"
                  src={detailsProduct?.image}
                  alt=""
                />
              </div>
              <div className="sm:col-span-6 col-span-12 text-own-secondary dark:text-own-white">
                <NavLink
                  data-title="User Profile"
                  to={`/user_profile/${detailsProduct?.users?._id}`}
                  className=" tooltip_c expand   profile-info inline-flex  gap-2 items-center mb-4 bg-own-white-special dark:bg-own-dark-bg-special py-2  rounded-md  border-[1px] border-own-text-light border-opacity-10 px-4"
                >
                  <img
                    className="w-[50px] rounded-full"
                    src={detailsProduct?.users?.image}
                    alt=""
                  />
                  <div className="text-left">
                    <h2 className=" dark:text-own-white-special text-own-secondary font-bold text-xl">
                      {detailsProduct?.users?.name}
                    </h2>
                    <span className="text-own-secondary text-sm dark:text-own-white">
                      {detailsProduct?.users?.country}
                    </span>
                  </div>
                </NavLink>

                <h2 className="text-2xl  font-semibold text-own-primary border-own-primary block mb-1">
                  {detailsProduct?.name}
                </h2>
                <sup className="block py-2">
                  7 Reviews /{" "}
                  {alredyBuy.length > 0 && (
                    <button
                      onClick={() => setSendReviewActive(true)}
                      className="underline cursor-pointer"
                      to="/review"
                    >
                      Write A Review
                    </button>
                  )}
                </sup>
                <p className="text-own-text-light  dark:text-own-text-dark py-1">
                  {detailsProduct?.details}
                </p>
                <hr className="border-[1px] border-own-primary border-opacity-20 my-1" />
                <p className="py-1">
                  Availability :{" "}
                  <span
                    className={
                      detailsProduct?.availability === "in-stock"
                        ? "text-own-primary mr-1 font-bold"
                        : "text-own-soft-red mr-1 font-bold"
                    }
                  >
                    {detailsProduct?.availability}
                  </span>
                  Brand :
                  <span className="text-own-primary">
                    {detailsProduct?.Brand}
                  </span>{" "}
                </p>
                <h3 className="text-2xl font-bold text-own-primary">
                  ${detailsProduct?.price}
                </h3>
                <div className="flex items-center gap-1 ">
                  <span className="font-bold">
                    InStock:{" "}
                    <span className="font-bold text-own-primary">
                      {detailsProduct?.InStock}
                    </span>
                  </span>
                  <span className="text-2xl font-semibold text-own-primary  ">
                    {detailsProduct?.quantity}
                  </span>
                </div>
                <h3>Our shop every product have 1 year warranty</h3>
                <div>
                  <h2 className="mt-4 text-sm tracking-widest">QUANTITY</h2>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center gap-4 dark:bg-own-dark-bg-special px-3 py-1 rounded-md mb-2 bg-own-white-special">
                      <button
                        onClick={handleIncremetntQuentity}
                        className="active:scale-75"
                      >
                        <HiPlusSm className="text-3xl" />
                      </button>
                      <h5 className="text-2xl font-bold">{quentity}</h5>
                      <button
                        onClick={handleDecrementQuentity}
                        className="active:scale-75"
                      >
                        <MdOutlineRemove className="text-3xl" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-bold">
                    SubTotal:{" "}
                    <span className="text-own-primary text-xl">
                      {/* {parseInt(quentity) * parseInt(detailsProduct?.price)} */}
                      {subTotalPrice}
                    </span>
                  </h3>
                </div>
                <div className="flex  md:flex-row flex-col justify-between md:items-center mt-4">
                  <button
                    onClick={() => addToCardProduct(id)}
                    className={
                      detailsProduct?.availability === "in-stock"
                        ? "btn modal-button border-transparent md:mb-0 mb-6 text-own-white dark:text-own-white bg-own-primary"
                        : "btn modal-button border-transparent md:mb-0 mb-6 text-own-white dark:text-own-white bg-own-primary opacity-10 pointer-events-none"
                    }
                  >
                    Add To Card
                  </button>
                  <button
                    onClick={() => handleAddToBookmark(id)}
                    className="btn  modal-button border-transparent md:mb-0 mb-6 text-own-white font-sm dark:text-own-white bg-own-primary"
                  >
                    Bookmark
                  </button>
                </div>
              </div>
            </div>
          </div>
          {sendReviewActive && (
            <ReviewAddOnProducts
              className=""
              setReviewValue={setReviewValue}
              reviewValue={reviewValue}
              setSendReviewActive={setSendReviewActive}
              id={id}
            />
          )}
          {showBuyNowModal && (
            <BuyProductsModal
              totalPrice={subTotalPrice}
              ProductId={detailsProduct?._id}
              email={response?.currentData?.currentuser[0].email}
              name={response?.currentData?.currentuser[0].name}
              price={detailsProduct?.price}
              quentity={quentity}
              setSendReviewActive={setSendReviewActive}
              setShowBuyNowModal={setShowBuyNowModal}
              showBuyNowModal={showBuyNowModal}
            />
          )}
          <ProductReview id={id} category={detailsProduct?.category} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductsDetails;
