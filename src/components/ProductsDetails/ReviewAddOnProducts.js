import axios from "axios";
import React from "react";
import Rating from "react-rating";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-toastify";

const ReviewAddOnProducts = ({
  setReviewValue,
  reviewValue,
  setSendReviewActive,
  id,
}) => {
  const [title, setTitle] = useState("");
  const token = Cookies.get("token");
  const handleAddProductReview = async () => {
    await axios
      .post(
        "https://easy-buy.onrender.com/api/v1/review",
        {
          title: title,
          rating: reviewValue,
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
        setSendReviewActive(false);
        toast.success("Successfully Add Your Review This Product !", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
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
          <textarea
            className="textarea w-full border-[1px] border-own-primary"
            placeholder="Bio"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
