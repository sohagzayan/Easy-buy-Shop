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
    fetch(`https://tranquil-shelf-42201.herokuapp.com/api/purchase?email=${username.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
          localStorage.removeItem("accessToken");
          navigate("/");
        } else {
          return res.json();
        }
      })
      .then((data) => setMyOrder(data));
  }, [username , myOrder , logOut , navigate]);

  return (
    <div className="p-4 mt-5">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Total price</th>
              <th>email</th>
              <th>Trazation ID</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {myOrder.map((order) => (
              <MyOrderRow order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
