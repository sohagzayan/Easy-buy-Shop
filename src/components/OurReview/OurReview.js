import axios from "axios";
import React, { useEffect, useState } from "react";
// import user1 from '../../assets/images/userimg1.jpg';
// import user2 from '../../assets/images/userimg2.jpg';
// import user3 from '../../assets/images/userimg3.jpg';
import Reviews from "../Reviews/Reviews";
const OurReview = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://easy-buy-shop-server.onrender.com/api/v1/review`)
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-secondary mb-2">
          Our Clients Reviews
        </h2>
        <p className="text-sm text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          harum?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {reviewsData?.map((item) => (
            <Reviews item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurReview;
