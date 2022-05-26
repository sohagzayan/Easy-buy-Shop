import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Reviews from "../Reviews/Reviews";
const OurReviewPart = () => {


  const [reviewsData , setReviewsData] = useState([])
  useEffect(()=>{
       fetch(`http://localhost:5000/api/review`)
       .then(data => data.json())
       .then(res =>setReviewsData(res))
  },[reviewsData])

  // const ReviewsData = [
  //   {
  //     img: user1,
  //     username: "Leanne Graham",
  //     position: "user",
  //     rating: "3",
  //     reviewMessage:
  //       "Je verificatie code is 5688760. Deel deze nooit met anderen! Probeerde je niet in te loggen? Wijzig dan je wachtwoord op Marktplaats.",
  //     date: "16 jon 2022",
  //   },
  //   {
  //     img: user2,
  //     username: "Ervin Howell",
  //     position: "user",
  //     rating: "2",
  //     reviewMessage:
  //       "Je verificatie code is 5593500. Deel deze nooit met anderen! Probeerde je niet in te loggen? Wijzig dan je wachtwoord op Marktplaats",
  //     date: "16 jon 2022",
  //   },
  //   {
  //     img: user3,
  //     username: "Clementine Bauch",
  //     position: "user",
  //     rating: "3",
  //     reviewMessage:
  //       "An existing Discord account is already using this number. Please remove it before it can be used with a new account.",
  //     date: "16 jon 2022",
  //   },
  //   {
  //     img: user3,
  //     username: "Clementine Bauch",
  //     position: "user",
  //     rating: "3",
  //     reviewMessage:
  //       "An existing Discord account is already using this number. Please remove it before it can be used with a new account.",
  //     date: "16 jon 2022",
  //   },
  //   {
  //     img: user3,
  //     username: "Clementine Bauch",
  //     position: "user",
  //     rating: "3",
  //     reviewMessage:
  //       "An existing Discord account is already using this number. Please remove it before it can be used with a new account.",
  //     date: "16 jon 2022",
  //   },
  // ];
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-secondary mb-2">
          Our Clients Reviews
        </h2>
        <p className="text-sm text-primary mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          harum?
        </p>

        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          onSlideChange={() => ("slide change")}
          onSwiper={(swiper) => (swiper)}
        >
          {reviewsData?.map((item) => (
            <SwiperSlide>
              <Reviews item={item} />{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurReviewPart;
