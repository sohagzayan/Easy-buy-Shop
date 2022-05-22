// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import user1 from '../../assets/images/userimg1.jpg';
// import user2 from '../../assets/images/userimg2.jpg';
// import user3 from '../../assets/images/userimg3.jpg';
// import Reviews from '../Reviews/Reviews';

const ReviewSlider = () => {
  
const ReviewsData = [
      {name : 'sohag'},
      {name : 'sohag'},
      {name : 'sohag'},
      {name : 'sohag'},
      {name : 'sohag'},
      {name : 'sohag'},
      {name : 'sohag'}
    ]


  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
     {
         ReviewsData.map(item => <SwiperSlide>Slide 1</SwiperSlide> )
     }
    </Swiper>
  );
}

export default ReviewSlider