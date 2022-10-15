import React from "react";
import { AiFillStar, AiOutlineArrowRight, AiOutlineLike } from "react-icons/ai";
import { BsArrowLeftCircle, BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
const ProductReview = ({ id, category }) => {
  const token = Cookies.get("token");
  const [suggetion, setSuggetion] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const ratingStar = [1, 2, 3, 4, 5];

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/review/review_count?productId=${id}`)
      .then((res) => {
        const count = res?.data?.tools_count;
        const page = Math.ceil(count / pageSize);

        setPageCount(page - 1);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  useEffect(() => {
    const fetchReview = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/review?productId=${id}&page=${currentPage}&size=${pageSize}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      setReviews(data);
    };
    fetchReview();
  }, [reviews]);

  // console.log(reviews);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/v1/tools/toolsSuggetion?category=${category}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setSuggetion(res.data));
  }, [suggetion]);

  // console.log(pageCount);

  return (
    <div>
      <div className="container_c mx-auto grid grid-cols-12 gap-6  ">
        <div className="md:col-span-7 col-span-12">
          <div className="flex justify-between items-center text-own-secondary dark:text-own-white">
            <h2 className="sm:text-xl flex items-center gap-3 text-sm font-bold text-own-text-light">
              Ratings and reviews <AiOutlineArrowRight />
            </h2>
            <p className="flex items-center gap-1 text-sm font-bold text-own-text-light">
              Ratings and reviews are verified <HiOutlineInformationCircle />{" "}
            </p>
          </div>

          <ul className="mt-10">
            {reviews?.map((r, index) => (
              <li key={index} className="mb-6">
                <div className="flex justify-between items-center">
                  <NavLink
                    to={`/user_profile/${r?.user?._id}`}
                    className="flex items-center gap-2 text-own-secondary dark:text-own-white cursor-pointer"
                  >
                    <img
                      className="w-[40px] rounded-full"
                      src={r?.user?.image}
                      alt=""
                    />
                    <div>
                      <h5 className="-mb-2 text-xl font-bold">
                        {r?.user?.name}
                      </h5>
                      <span className="text-sm "> {r?.user?.country}</span>
                    </div>
                  </NavLink>
                  <span className="flex items-center gap-2 text-own-secondary dark:text-own-white">
                    <BsThreeDotsVertical className=" text-2xl" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex text-sm items-center text-own-text-light dark:text-own-white">
                      <span className="font-bold">{r?.date}</span>
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-2xl my-1  dark:text-own-white text-own-secondary">
                  {r?.heading}
                </h4>
                <p className="   dark:text-own-white text-own-white">
                  {r?.message}
                </p>
                <div className="rating rating-lg flex  items-center mt-1">
                  {ratingStar.slice(0, r?.rating).map((s) => (
                    <AiFillStar className="text-own-primary text-2xl" />
                  ))}
                  {/* <span className="text-own-primary">{r?.rating}</span> */}
                </div>
                <span className="bg-own-white-special border-[1px] border-own-primary cursor-pointer dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white px-3 py-2 rounded-md mt-2 inline-flex items-center gap-1">
                  <AiOutlineLike className="text-2xl" /> 5{" "}
                </span>
              </li>
            ))}
          </ul>
          <div className="btn-group flex justify-center">
            <button
              className={
                currentPage <= 0
                  ? " btn bg-own-white-special dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white border-own-primary opacity-50 pointer-events-none"
                  : "btn bg-own-white-special dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white border-own-primary"
              }
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              <BsArrowLeftCircle className="text-3xl" />
            </button>
            <button className="btn bg-own-white-special dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white border-own-primary hover:bg-own-primary hover:text-own-white transition-all ease-in">
              Page {currentPage}
            </button>
            <button
              className={
                currentPage >= pageCount
                  ? "btn bg-own-white-special dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white border-own-primary opacity-50 pointer-events-none"
                  : "btn bg-own-white-special dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white border-own-primary"
              }
              onClick={() => {
                if (currentPage < pageCount) {
                  setCurrentPage((prev) => prev + 1);
                } else {
                  console.log(pageCount, currentPage);
                  alert("max");
                }
              }}
            >
              <BsArrowLeftCircle className="text-3xl rotate-180" />
            </button>
          </div>
        </div>
        <div className="md:col-span-5 col-span-12 border-l-[1px] border-own-text-light pl-2 border-opacity-30">
          <h2 className="text-own-text-light font-bold dark:text-own-white">
            Related Products
          </h2>
          <div>
            {suggetion?.slice(0, 4)?.map((s) => (
              <div className="flex items-center gap-4 bg-own-white-special dark:bg-own-dark-bg-special rounded-md py-2 mt-3 border-[1px] border-own-primary border-opacity-50">
                <img className="w-[80px]" src={s?.image} alt="images" />
                <div className="text-own-secondary dark:text-own-white flex flex-col">
                  <h3>{s?.name}</h3>
                  <span className="text-own-primary text-xl py-1">
                    ${s?.price}
                  </span>
                  <NavLink
                    to={`/ProductsDetails/${s?._id}`}
                    className="w-[100px] py-1 rounded-md bg-own-white-special dark:bg-own-dark-bg-special text-center shadow-md border-[1px] border-own-primary font-bold"
                  >
                    Details
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
