import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import Rating from "react-rating";
import { toast } from "react-toastify";
import { useCurrentUserQuery } from "../../store/API/user";

const AddShoopReview = () => {
  const [reviewValue, setReviewValue] = useState([]);
  const [message, setMessage] = useState("");
  const token = Cookies.get("token");
  const userid = Cookies.get("id");
  const response = useCurrentUserQuery(userid);

  const HandleShopReview = async () => {
    if (reviewValue) {
      try {
        axios
          .post(
            `http://localhost:5000/api/v1/shopReview/${response?.currentData?.currentuser[0]?._id}`,
            {
              rating: reviewValue,
              message: message,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            if (res?.data?.message) {
              toast.error(res?.data?.message, {
                position: toast.POSITION.BOTTOM_CENTER,
              });
            } else {
              toast.success(res?.data, {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          });
      } catch (error) {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } else {
      toast.error("Rating 0 not allaw", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  return (
    <div data-aos="zoom-out-down" data-aos-delay="300">
      <div className="flex justify-center text-center">
        <div>
          <div>
            <div className="bg-own-white-special py-6 rounded-md border-2 border-own-primary dark:bg-own-dark-bg-special my-4">
              <Rating
                onChange={(e) => setReviewValue(e)}
                initialRating={reviewValue}
              />
            </div>
            <div className="bg-own-white-special py-3 rounded-md border-2 border-own-primary dark:bg-own-dark-bg-special ">
              <textarea
                className="w-full bg-own-white-special outline-none px-3 text-xl dark:bg-own-dark-bg-special text-own-text-light"
                placeholder="Type Here..."
                name=""
                id=""
                cols="30"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              onClick={HandleShopReview}
              className="bg-own-primary text-own-white px-6 py-2 w-full font-bold rounded-md mt-4"
            >
              Submit You Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddShoopReview;
