import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useCurrentUserQuery } from "../../store/API/user";
import { useState } from "react";
import TableRow from "../My_profile_deshbord/TableRow";
import LoadingSpener from "../LoadingSpener/LoadingSpener";
import MyProductOrderTableRow from "./MyProductOrderTableRow";
import { MutatingDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
const MyOrder = () => {
  /** component needed state and data */
  const token = Cookies.get("token");

  /** component state and hocks */
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/purchase/my_product_order`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (
          data.status === 500 ||
          data.message === "jwt expired" ||
          data.message === "jwt malformed"
        ) {
          Cookies.remove("id");
          Cookies.remove("token");
          navigate("/login");
          setLoading(false);
        } else {
          setOrder(data);
          setLoading(false);
        }
      });
  }, [order]);

  const handleDeleteMyOrder = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/v1/purchase/${id}`)
      .then((res) => console.log(res));
  };

  return (
    <div className="overflow-x-auto border-[1px] mt-6 border-own-text-light border-opacity-10">
      {loading ? (
        <div className="flex justify-center w-full h-[300px] items-center">
          <MutatingDots
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <table className="table w-full ">
          <thead>
            <tr className=" text-own-secondary text-[12px]">
              <th className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
                Date
              </th>
              <th className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
                Order Amount
              </th>
              <th className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
                Total Price
              </th>
              <th className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
                Email
              </th>
              <th className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
                TRAZATION ID
              </th>
              <th className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
                Payment
              </th>
              <th className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {order?.map((order, index) => (
              <MyProductOrderTableRow
                key={index}
                order={order}
                handleDeleteMyOrder={handleDeleteMyOrder}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyOrder;
