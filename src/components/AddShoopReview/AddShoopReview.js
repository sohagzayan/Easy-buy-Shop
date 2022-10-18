import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import Rating from "react-rating";
import { toast } from "react-toastify";
import { useCurrentUserQuery } from "../../store/API/user";

const AddShoopReview = ({ setShopReviewModalTrue }) => {
  const [reviewValue, setReviewValue] = useState([]);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
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
              heading: title,
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
              setShopReviewModalTrue(false);
              setTitle("");
              setMessage("");
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
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle modal-modifiy">
        <div className="modal-box dark:bg-own-dark-bg-special shadow-md">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle bg-own-primary text-own-white absolute right-2 border-own-primary top-2"
          >
            ✕
          </label>
          <div
            data-aos="zoom-out-in"
            data-aos-delay="300"
            className="overflow-hidden"
          >
            <div className="">
              <div>
                <div>
                  <div className="   my-3">
                    <Rating
                      className="ratingFunc"
                      onChange={(e) => setReviewValue(e)}
                      initialRating={reviewValue}
                    />
                  </div>
                  <div className="bg-own-white-special py-3   dark:bg-own-dark-bg-special ">
                    <input
                      type="Title"
                      placeholder="Title.."
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                      className="bg-own-white-special outline-none px-3 text-xl dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white w-full border-[1px] border-own-primary py-2 rounded-md border-opacity-20 mb-3"
                    />
                    <textarea
                      className=" bg-own-white-special outline-none px-3 text-xl dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white w-full"
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
                    className="bg-own-primary hover:bg-transparent border-2 border-transparent hover:border-own-primary  text-own-white px-6 py-2 w-full font-bold rounded-md mt-4 hover:text-own-primary transition-all ease-in"
                  >
                    Submit You Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddShoopReview;
