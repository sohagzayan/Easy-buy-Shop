import React from "react";

const Reviews = ({ item }) => {
  console.log(item);
  const { img, username, date, reviewMessage, rating, position } = item;
  return (
    <div className="m-4 p-4 bg-[#FFFFFF] shadow-xl shadow-[#D1D0DF] rounded-md">
      <div >
        <div className="flex justify-between items-center text-left">
          <div className="flex ">
            <div className="mr-3">
              <img width="50px" className="rounded-full" src={img} alt="" />
            </div>
            <div>
              <span className="text-primary font-bold ">{username}</span>
              <p className="text-sm text-left font-light">{position}</p>
            </div>
          </div>
          <div>
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-secondary"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-secondary"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-secondary"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-secondary"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-secondary"
              />
            </div>
          </div>
        </div>
        <div className="my-8 text-primary text-left">
          <p>{reviewMessage}</p>
        </div>
        <p className="font-bold text-primary text-left">{date}</p>
      </div>
    </div>
  );
};

export default Reviews;
