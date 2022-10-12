import React from "react";
import { NavLink } from "react-router-dom";

const TableRow = ({ order, handleDeleteMyOrder }) => {
  const {
    date,
    name,
    email,
    address,
    totalPrice,
    orderAmount,
    payed,
    status,
    transactionId,
    _id,
  } = order;
  return (
    <tr className=" text-[13px]  ">
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        {date}
      </td>
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        {orderAmount}
      </td>
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        ${totalPrice}
      </td>
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        {email}
      </td>
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        {transactionId}
      </td>
      <td className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        {payed === "complete" ? (
          <button className="mr-2 text-[15px] cursor-text font-semibold text-[#14A16C]">
            Payment Successful
          </button>
        ) : (
          <div>
            <button
              onClick={() => handleDeleteMyOrder(_id)}
              className="mr-2 text-[15px] font-semibold text-[#FF5C58]"
            >
              Cancel
            </button>
            <NavLink to={`/payment/${_id}`} className="text-[15px]">
              Payment
            </NavLink>
          </div>
        )}
      </td>
      <td className="font-bold text-own-primary capitalize bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
        {status}
      </td>
    </tr>
  );
};

export default TableRow;
