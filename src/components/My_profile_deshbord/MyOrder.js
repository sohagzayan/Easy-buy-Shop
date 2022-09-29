import axios from "axios";
import React from "react";
import { useEffect } from "react";
import "../../Table.css";
import Cookies from "js-cookie";
import { useCurrentUserQuery } from "../../store/API/user";
import { useState } from "react";
import TableRow from "../My_profile_deshbord/TableRow";
import LoadingSpener from "../LoadingSpener/LoadingSpener";
const MyOrder = () => {
  const userid = Cookies.get("id");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const token = Cookies.get("token");
  const response = useCurrentUserQuery(userid);
  const [data, setData] = useState([]);
  // console.log(response?.currentData?.currentuser[0].email);
  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:5000/api/v1/purchase?email=${response?.currentData?.currentuser[0]?.email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrder(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpener />;
  }

  return (
    <div className="table-wrapper mt-10 container_c mx-auto">
      <table className="fl-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Order Amount</th>
            <th>Total Price</th>
            <th>Email</th>
            <th>TRAZATION ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {order?.map((order, index) => (
            <TableRow key={index} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
