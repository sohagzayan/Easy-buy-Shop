import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/newwhite.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/Watch10_600x.webp";
import image4 from "../../assets/Watch11_ee5e1559-77e0-4263-8837-da6a2f86265f_600x.webp";
import image5 from "../../assets/Watch15_600x.webp";
import image6 from "../../assets/Watch18_600x.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import "./styles.css";

// import required modules
import { EffectCreative } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className=""
      >
        <SwiperSlide>
          <img className="w-[260px]" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[260px]" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[260px]" src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[260px]" src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[260px]" src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[260px]" src={image6} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default HeroSlider;
