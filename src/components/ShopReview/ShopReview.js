import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";

// import "./styles.css";
import "./styles_review_slider.css";

// import required modules
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { TbQuote } from "react-icons/tb";
import { BsPatchCheck } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useCurrentUserQuery } from "../../store/API/user";
import ShopReviewSlide from "./ShopReviewSlide";
import { MdRateReview } from "react-icons/md";

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
    <div>
      <div className="text-2xl dark:text-own-white text-center text-own-secondary">
        Our Shop Review
      </div>
      <div className="relative">
        <div className="">
          <label
            htmlFor="my-modal-6"
            className=" modal-button absolute -top-2 gap-3 cursor-pointer  right-20 modal-modify-add-review text-own-text-light font-bold flex items-center "
          >
            Add your reviw
            <MdRateReview className="text-4xl cursor-pointer text-own-primary relative z-20  " />
          </label>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            1058: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper container_c mx-auto"
        >
          {review?.map((data, index) => (
            <SwiperSlide key={index}>
              <ShopReviewSlide data={data} retingArray={retingArray} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShopReview;
