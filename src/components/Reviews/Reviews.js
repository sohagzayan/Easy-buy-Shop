import React from "react";
import { AiFillStar } from "react-icons/ai";

const Reviews = ({ item }) => {
  const blankImage =
    "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg";
  const { image, name, date, reviewMessage, rating, position, dese } = item;
  const ratingParse = parseInt(rating);

  const GetRating = (rating) => {
    if (rating <= 1) {
      return (
        <div className="flex items-center">
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-[#09be8b4b]" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-[#09be8b4b]" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-[#09be8b4b]" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-[#09be8b4b]" />{" "}
          </span>
        </div>
      );
    } else if (rating <= 2) {
      return (
        <div className="flex items-center">
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-[#09be8b4b]" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-[#09be8b4b]" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-[#09be8b4b]" />{" "}
          </span>
        </div>
      );
    } else if (rating <= 3) {
      return (
        <div className="flex items-center">
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-[#09be8b4b]" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-[#09be8b4b]" />{" "}
          </span>
        </div>
      );
    } else if (rating <= 4) {
      return (
        <div className="flex items-center">
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-[#09be8b4b]" />{" "}
          </span>
        </div>
      );
    } else if (rating <= 5) {
      return (
        <div className="flex items-center">
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
          <span>
            {" "}
            <AiFillStar className="text-2xl text-own-primary" />{" "}
          </span>
        </div>
      );
    }
  };
  return (
    <div className="m-4 p-4 bg-own-ternary border-4 border-transparent hover:border-[#283E4D] rounded-md transition-all ease-in">
      <div>
        <div className="flex justify-between items-center text-left">
          <div className="flex items-center">
            <div className="mr-3">
              <img
                width="50px"
                className="rounded-full"
                src={image ? image : blankImage}
                alt=""
              />
            </div>
            <div>
              <span className="text-own-primary font-bold ">{name}</span>
              <p className="text-sm text-left font-light">{position}</p>
            </div>
          </div>
          <div>
            <div className="rating">{GetRating(ratingParse)}</div>
          </div>
        </div>
        <div className="my-5 text-own-text-light  dark:text-own-text-dark text-left">
          <p>
            Completely agree with the first choice, i found the same kit a few
            weeks ago on Newegg, Viper RGB 3600 Mhz that was
          </p>
        </div>
        <p className="font-bold text-own-text-light  dark:text-own-text-dark text-left">
          {date}
        </p>
      </div>
    </div>
  );
};

export default Reviews;
