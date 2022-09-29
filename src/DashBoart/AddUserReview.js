import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";
import { useAuthContext } from "../context/AuthContextProvider";
const AddUserReview = () => {
  const possibleRate = [1, 2, 3, 4, 5];
  const [dase, setDase] = useState("");
  const [selectedRate, setSelectedRate] = useState(1);
  const { username } = useAuthContext();
  //  const {displayName, email ,  photoURL} = username

  const reviewPost = {
    name: username?.displayName,
    email: username?.email,
    rating: selectedRate,
    dese: dase,
    image: username?.photoURL,
  };
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:5000/api/review`, reviewPost)
      .then((res) => res);
    setDase("");
    swal("add to review success");

    setSelectedRate(1);
  };

  return (
    <div className="flex justify-center items-center mt-20 px-5">
      <div className="w-full">
        <span className="text-own-secondary dark:text-own-white text-2xl mb-3 inline-block">
          Give a Review{" "}
        </span>
        <div className="flex my-4">
          <div className="rating">
            {possibleRate.map((rate) => (
              <input
                onClick={() => setSelectedRate(rate)}
                value="2"
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-own-primary -500"
              />
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmitReview}>
          <textarea
            onChange={(e) => setDase(e.target.value)}
            value={dase}
            className="textarea text-own-primary font-semibold text-lg bg-own-ternary placeholder:text-own-primary w-full focus:outline-own-secondary"
            placeholder="Bio"
          ></textarea>
          <button className="bg-own-primary  text-own-secondary dark:text-own-white text-white font-bold px-4 py-2 rounded-md">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserReview;
