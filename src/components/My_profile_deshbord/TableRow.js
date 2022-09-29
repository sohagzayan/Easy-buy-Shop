import React from "react";
import { NavLink } from "react-router-dom";

const TableRow = ({ order }) => {
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
  return (
    <tr>
      <td className="">{date}</td>
      <td>{orderAmount}</td>
      <td>{price}</td>
      <td>{email}</td>
      <td>{transactionId}</td>
      <td className="">
        {payed === "complete" ? (
          <button className="mr-2 text-[15px] cursor-text font-semibold text-[#14A16C]">
            Payment Successful
          </button>
        ) : (
          <div>
            <button className="mr-2 text-[15px] font-semibold text-[#FF5C58]">
              Cancel
            </button>
            <NavLink to={`/payment/${_id}`} className="text-[15px]">
              Payment
            </NavLink>
          </div>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
