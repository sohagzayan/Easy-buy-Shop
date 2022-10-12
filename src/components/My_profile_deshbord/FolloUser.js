import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const FolloUser = ({ item, handleRemoveFollowList }) => {
  const {
    name,
    image,
    username,
    email,
    country,
    city,
    follor,
    AccountAccess,
    _id,
  } = item;
  return (
    <li className="dark:bg-own-dark-bg-special bg-own-white-special border-[1px] border-own-text-light border-opacity-10 shadow-md  mb-5 px-6 py-4 rounded-md  items-center relative">
      <span
        onClick={() => handleRemoveFollowList(_id)}
        className="absolute top-2 right-2 cursor-pointer"
      >
        <AiOutlineClose className="text-own-soft-red text-2xl" />
      </span>
      <div className=" gap-3 ">
        <img className="w-[50px] rounded-full mb-3" src={image} alt="" />
      </div>
      <div className="flex">
        <div className="dark:text-own-white c text-own-secondary">
          <h3>{name}</h3>
          <span>@{username}</span>
          <h5>{email}</h5>
        </div>
        <div>
          <h5 className="text-own-primary">Follower : {follor?.length}</h5>
          <h5 className="text-own-secondary dark:text-own-white">
            status : {AccountAccess}
          </h5>
        </div>
      </div>
    </li>
  );
};

export default FolloUser;
