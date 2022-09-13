import React, { useEffect, useState } from "react";
import ManageAllOrderRow from "./ManageAllOrderRow";
import "../Table.css";

const ManageAllOrder = () => {
  const [manageOrder, setManageOrder] = useState([]);
  useEffect(() => {
    fetch(`https://tranquil-shelf-42201.herokuapp.com/api/purchase`, {
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
    <div class="table-wrapper ">
      <table class="fl-table">
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
          {/* <tr>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
          </tr> */}
          {manageOrder?.map((order, index) => (
            <ManageAllOrderRow key={index} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrder;
