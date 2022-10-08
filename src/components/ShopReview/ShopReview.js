import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { TbQuote } from "react-icons/tb";
import { BsPatchCheck } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useCurrentUserQuery } from "../../store/API/user";

const ShopReview = () => {
  const token = Cookies.get("token");
  const [review, setReview] = useState([]);
  const userid = Cookies.get("id");
  const response = useCurrentUserQuery(userid);
  const retingArray = [1, 2, 3, 4, 5];
  useEffect(() => {
    const fetchShopReview = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/shopReview`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReview(data);
    };

    fetchShopReview();
  }, [review]);

  // console.log(review);
  return (
    <>
      {/* <div className="text-center">
        <h2 className="text-2xl text-own-white font-bold">Our Shop Review </h2>
        <p className="text-own-text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          sunt.
        </p>
      </div> */}
      <Swiper
        data-aos="zoom-out-down"
        data-aos-delay="300"
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full"
      >
        {review?.map((r, index) => (
          <SwiperSlide key={index} className="">
            <div className="flex  flex-col  py-10 px-4  dark:bg-own-dark-bg-special bg-own-white-special text-own-secondary dark:text-own-white  rounded-md ">
              <div className="flex  items-center flex-col text-center  ">
                <img
                  className="w-[150px] mx-auto bg-own-dark-bg-special  rounded-full"
                  src={r?.user?.image}
                  alt=""
                />
                <div className="mt-3">
                  <h3 className="text-sm -mb-3 font-bold flex items-center gap-3">
                    {r?.user?.name}{" "}
                    <BsPatchCheck className="text-own-primary" />
                  </h3>
                  <span className="text-sm">{r?.user?.country}</span>
                </div>
              </div>
              <div className="flex items-center  gap-1 mb-2  dark:bg-own-dark-bg py-3 rounded-lg  justify-center w-full bg-own-white">
                {retingArray.slice(0, r?.rating).map((r, index) => (
                  <span>
                    <AiFillStar className="text-own-primary" />
                  </span>
                ))}
              </div>
              <p className="text-sm text-center font-light">{r?.message}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ShopReview;
