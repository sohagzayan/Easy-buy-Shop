import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Reviews from "../Reviews/Reviews";
const OurReviewPart = () => {
  const [reviewsData, setReviewsData] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/v1/review`)
  //     .then((data) => data.json())
  //     .then((res) => setReviewsData(res));
  // }, [reviewsData]);

  return (
    <div className="mt-20 overflow-x-hidden">
      <div className="text-center">
        <div className="flex justify-center">
          <span className="text-own-primary  block ml-20 sm:text-lg font-bold mb-2 relative before:absolute before:w-12 before:h-[2px] before:bg-own-primary sm:before:left-[-35%] before:top-[55%] before:left-[-10%] ">
            Our Clients Reviews
          </span>
        </div>
        <p className="text-sm text-own-text-light  dark:text-own-text-dark mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          harum?
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          speed={500}
          Autoplay={{
            delay: 10,
            disableOnInteraction: false,
          }}
          onSlideChange={() => "slide change"}
          onSwiper={(swiper) => swiper}
        >
          {/* {reviewsData?.map((item) => (
            <SwiperSlide>
              <Reviews item={item} />{" "}
            </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
    </div>
  );
};

export default OurReviewPart;
