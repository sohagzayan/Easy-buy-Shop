import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const MyProductOrderTableRow = ({ order }) => {
  const {
    date,
    name,
    email,
    address,
    price,
    orderAmount,
    payed,
    status,
    transactionId,
    _id,
  } = order;
  const token = Cookies.get("token");

  const handleStatusUpdate = (text) => {
    axios
      .put(
        `https://easy-buy-shop-server.onrender.com/api/v1/purchase/${_id}`,
        { status: text },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Change Status SuccessFull", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  //   console.log(status);
  return (
    <tr className="relative text-[13px]">
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        {date}
      </td>
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        {orderAmount}
      </td>
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        {price}
      </td>
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        {email}
      </td>
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        {transactionId}
      </td>
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        {payed}
      </td>
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        <div>
          <select
            className="  bg-own-white-special dark:bg-own-dark-bg-special text-[16px] "
            name=""
            id=""
            onChange={(e) => handleStatusUpdate(e.target.value)}
          >
            <option value={status === "pending"}>Pending</option>
            <option selected={status === "shift"} value="shift">
              Shift{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-own-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            </option>
          </select>
        </div>
      </td>
      {status === "shift" && (
        <span className="absolute top-3 -left-5 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-own-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            />
          </svg>
        </span>
      )}
    </tr>
  );
};

export default MyProductOrderTableRow;
