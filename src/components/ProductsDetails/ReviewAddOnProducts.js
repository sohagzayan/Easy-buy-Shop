import axios from "axios";
import React from "react";
import Rating from "react-rating";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-toastify";
import { BsCheckLg } from "react-icons/bs";
import { fetchProductReview } from "../../store/slices/reviewSlice";
import { useDispatch } from "react-redux";

const ReviewAddOnProducts = ({
  setReviewValue,
  reviewValue,
  setSendReviewActive,
  id,
  pageSize,
  currentPage,
  setCurrentPage,
  setPageCount,
  pageCount,
}) => {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const token = Cookies.get("token");
  const dispatch = useDispatch();

  const handleAddProductReview = async () => {
    if (message.length <= 0) {
      toast.warning("Message Emty Not Allaw!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else if (title.length <= 0) {
      toast.warning("Title Emty Not Allaw!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else if (reviewValue <= 0) {
      toast.warning("Rating Mimimum 1 star Requred!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      await axios
        .post(
          "https://easy-buy.onrender.com/api/v1/review",
          {
            heading: title,
            rating: reviewValue,
            message: message,
            productId: id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res?.data.status === 500) {
            toast.error(res?.data.message, {
              position: toast.POSITION.BOTTOM_CENTER,
              autoClose: 5000,
            });
          } else {
            dispatch(fetchProductReview(id, currentPage, pageSize));
            toast.success("Successfully Add Your Review This Product !", {
              position: toast.POSITION.TOP_CENTER,
            });
            setSendReviewActive(false);
            setReviewValue(0);
          }
        })
        .catch((error) => {
          toast.error(error.message, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        });
    }
  };

  return (
    <div className="">
      <div className="h-screen bg-own-dark-bg bg-opacity-50 fixed top-0 left-0 w-full z-50 flex items-center justify-center">
        <div className="modal-box">
          <h3 className=" text-center text-xl font-bold mb-5">
            Add Your Review
          </h3>
          <Rating
            onChange={(e) => setReviewValue(e)}
            initialRating={reviewValue}
          />
          <input
            type="text"
            placeholder="Heading..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="bg-own-white-special w-full border-[1px] border-own-text-light border-opacity-50 py-2 px-3 rounded-md mb-3  focus:outline-own-primary"
          />
          <textarea
            className="textarea w-full border-[1px] border-own-primary"
            placeholder="Message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="flex justify-between">
            <button
              onClick={handleAddProductReview}
              className="font-bold underline text-own-primary"
            >
              Send Review
            </button>
            <button
              onClick={() => setSendReviewActive(false)}
              className="font-bold underline text-own-primary"
            >
              letter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAddOnProducts;
