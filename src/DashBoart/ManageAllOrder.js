import React, { useEffect, useState } from "react";
import ManageAllOrderRow from "./ManageAllOrderRow";

const ManageAllOrder = () => {
  const [manageOrder, setManageOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/purchase`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setManageOrder(data));
  }, [manageOrder]);

  console.log(manageOrder);
  return (
    <div className="table-wrapper ">
      <table className="fl-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
            <th>Order Amount</th>
            <th>Email</th>
            <th>Address</th>
            <th>Pay</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {manageOrder?.map((order, index) => (
            <ManageAllOrderRow key={index} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrder;
