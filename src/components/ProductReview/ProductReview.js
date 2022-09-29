import React from "react";
import {
  AiFillStar,
  AiOutlineArrowRight,
  AiOutlineInfo,
  AiOutlineLike,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineInformationCircle, HiOutlineMenuAlt4 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import user1 from "../../assets/demouser.png";
import clock from "../../assets/clock.png";

const ProductReview = () => {
  return (
    <div>
      <div className="container_c mx-auto grid grid-cols-12 gap-6  ">
        <div className="col-span-8">
          <div className="flex justify-between items-center text-own-secondary dark:text-own-white">
            <h2 className="text-xl flex items-center gap-3">
              Ratings and reviews <AiOutlineArrowRight />
            </h2>
            <p className="flex items-center gap-1">
              Ratings and reviews are verified <HiOutlineInformationCircle />{" "}
            </p>
          </div>
          <ul className="mt-10">
            <li className="mb-6">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-own-secondary dark:text-own-white">
                  <img className="w-[40px] rounded-full" src={user1} alt="" />
                  <span>Sohag Hossain Zayan</span>
                </span>
                <span className="flex items-center gap-2 text-own-secondary dark:text-own-white">
                  <BsThreeDotsVertical className=" text-2xl" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="rating rating-lg flex  items-center">
                    <AiFillStar className="text-own-primary" />
                    <AiFillStar className="text-own-primary" />
                    <AiFillStar className="text-own-primary" />
                    <AiFillStar className="text-own-primary" />
                    <AiFillStar className="text-own-primary" />
                  </div>
                  <div className="flex items-center text-own-secondary dark:text-own-white">
                    <span className="">September 23, 2022</span>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-own-text-light  dark:text-own-text-dark">
                Recently it has crashed pretty much as soon as I open the app.
                Can't give a rating to an app that isn't even usable. Open?
                Instantly crashes. Very annoying and used to work perfectly.
                Quit changing things that do not need changed. All it does is
                cause more issues and bugs.
              </p>
              <span className="bg-own-ternary text-own-secondary dark:text-own-white px-3 py-2 rounded-md mt-2 inline-flex items-center gap-1">
                <AiOutlineLike className="text-2xl" /> 5{" "}
              </span>
            </li>
            <li className="mb-6">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-own-secondary dark:text-own-white">
                  <img className="w-[40px] rounded-full" src={user1} alt="" />
                  <span>Sohag Hossain Zayan</span>
                </span>
                <span className="flex items-center gap-2 text-own-secondary dark:text-own-white">
                  <BsThreeDotsVertical className=" text-2xl" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="rating rating-lg flex  items-center">
                    <AiFillStar className="text-own-primary" />
                    <AiFillStar className="text-own-primary" />
                    <AiFillStar className="text-own-primary" />
                    <AiFillStar className="text-own-primary" />
                    <AiFillStar className="text-own-primary" />
                  </div>
                  <div className="flex items-center text-own-secondary dark:text-own-white">
                    <span className="">September 23, 2022</span>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-own-text-light  dark:text-own-text-dark">
                Recently it has crashed pretty much as soon as I open the app.
                Can't give a rating to an app that isn't even usable. Open?
                Instantly crashes. Very annoying and used to work perfectly.
                Quit changing things that do not need changed. All it does is
                cause more issues and bugs.
              </p>
              <span className="bg-own-ternary text-own-secondary dark:text-own-white px-3 py-2 rounded-md mt-2 inline-flex items-center gap-1">
                <AiOutlineLike className="text-2xl" /> 5{" "}
              </span>
            </li>
            <li className="mb-6">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-own-secondary dark:text-own-white">
                  <img className="w-[40px] rounded-full" src={user1} alt="" />
                  <span>Sohag Hossain Zayan</span>
                </span>
                <span className="flex items-center gap-2 text-own-secondary dark:text-own-white">
                  <BsThreeDotsVertical className=" text-2xl" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="rating rating-lg flex  items-center">
                    <AiFillStar className="text-own-primary" />
                    <AiFillStar className="text-own-primary" />
                    <AiFillStar className="text-own-primary" />
                    <AiFillStar className="text-own-primary" />
                    <AiFillStar className="text-own-primary" />
                  </div>
                  <div className="flex items-center text-own-secondary dark:text-own-white">
                    <span className="">September 23, 2022</span>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-own-text-light  dark:text-own-text-dark">
                Recently it has crashed pretty much as soon as I open the app.
                Can't give a rating to an app that isn't even usable. Open?
                Instantly crashes. Very annoying and used to work perfectly.
                Quit changing things that do not need changed. All it does is
                cause more issues and bugs.
              </p>
              <span className="bg-own-ternary text-own-secondary dark:text-own-white px-3 py-2 rounded-md mt-2 inline-flex items-center gap-1">
                <AiOutlineLike className="text-2xl" /> 5{" "}
              </span>
            </li>
          </ul>

          <NavLink
            to="/all"
            className="text-own-primary underline mt-5 inline-block"
          >
            See all reviews
          </NavLink>
        </div>
        <div className="col-span-4 border-l-[1px] pl-2">
          <h2 className="text-own-secondary dark:text-own-white">
            Related Products
          </h2>
          <div>
            <div className="flex items-center gap-4 bg-own-ternary rounded-md py-2 mt-3 border-[1px] border-own-primary border-opacity-50">
              <img className="w-[80px]" src={clock} alt="" />
              <div className="text-own-secondary dark:text-own-white flex flex-col">
                <h3>With form-control and labels and labels</h3>
                <span className="text-own-primary text-xl py-1">$656</span>
                <button className="w-[100px] py-1 rounded-md bg-own-secondary">
                  Details
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-own-ternary rounded-md py-2 mt-3 border-[1px] border-own-primary border-opacity-50">
              <img className="w-[80px]" src={clock} alt="" />
              <div className="text-own-secondary dark:text-own-white flex flex-col">
                <h3>With form-control and labels and labels</h3>
                <span className="text-own-primary text-xl py-1">$656</span>
                <button className="w-[100px] py-1 rounded-md bg-own-secondary">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
