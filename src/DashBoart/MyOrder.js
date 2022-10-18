import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";
import MyOrderRow from "./MyOrderRow";

const MyProducts = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();
  const [myOrder, setMyOrder] = useState([]);
  const { username } = useAuthContext();

  useEffect(() => {
    fetch(
      `https://easy-buy-shop-backend.vercel.app/api/purchase?email=gdsohag360`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("accessToken");
          // navigate("/");
        } else {
          return res.json();
        }
      })
      .then((data) => setMyOrder(data));
  }, [username, myOrder]);

  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Total Price</th>
            <th>Email</th>
            <th>TRAZATION ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {myOrder.map((order) => (
            <MyOrderRow order={order} />
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
