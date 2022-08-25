import React from "react";
import { AiFillStar } from 'react-icons/ai';

const Reviews = ({ item }) => {
  const blankImage = 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
  const { image, name, date, reviewMessage, rating, position ,  dese } = item;
  const ratingParse = parseInt(rating)


  const GetRating = (rating)=>{
      if(rating <= 1){

        return <div className="flex items-center">
                <span> <AiFillStar className="text-2xl text-secondary" /> </span>
                <span> <AiFillStar className="text-2xl text-slate-300" /> </span>
                <span> <AiFillStar className="text-2xl text-slate-300" /> </span>
                <span> <AiFillStar className="text-2xl text-slate-300" /> </span>
                <span> <AiFillStar className="text-2xl text-slate-300" /> </span>
        </div>
      }else if(rating <= 2){
        return <div className="flex items-center">
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-slate-300" /> </span>
        <span> <AiFillStar className="text-2xl text-slate-300" /> </span>
        <span> <AiFillStar className="text-2xl text-slate-300" /> </span>
      </div>
      }else if(rating <= 3){
        return <div className="flex items-center">
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-slate-300" /> </span>
        <span> <AiFillStar className="text-2xl text-slate-300" /> </span>
      </div>
      }else if(rating <= 4){
        return <div className="flex items-center">
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-slate-300" /> </span>
      </div>
      }else if(rating <= 5){
        return <div className="flex items-center">
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
        <span> <AiFillStar className="text-2xl text-secondary" /> </span>
      </div>
      }
  }
  return (
    <div className="m-4 p-4 bg-[#FFFFFF] shadow-xl shadow-[#D1D0DF] rounded-md">
      <div >
        <div className="flex justify-between items-center text-left">
          <div className="flex ">
            <div className="mr-3">
              <img width="50px" className="rounded-full" src={image ? image : blankImage} alt="" />
            </div>
            <div>
              <span className="text-primary font-bold ">{name}</span>
              <p className="text-sm text-left font-light">{position}</p>
            </div>
          </div>
          <div>
            <div className="rating">
              {
                GetRating(ratingParse)
              }
            </div>
          </div>
        </div>
        <div className="my-8 text-primary text-left">
          <p>{dese}</p>
        </div>
        <p className="font-bold text-primary text-left">{date}</p>
      </div>
    </div>
  );
};

export default Reviews;
