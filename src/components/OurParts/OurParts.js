import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Loading from "../Loading/Loading";
import OurPartsProducts from "../OurPartsProducts/OurPartsProducts";
import { addToCardPost } from "../../Querys/BookmarkQuery";

const OurParts = () => {
  const [data, setData] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    axios
      .get(
        `https://easy-buy-shop-server.onrender.com/api/v1/tools/getToolswithOutAuth/?limit=6`
      )
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <div className="mt-10  overflow-x-hidden dark:bg-own-dark-bg-special py-5 bg-own-white-special">
      <div>
        <h2 className=" text-own-secondary dark:text-own-white text-3xl  text-center block tracking-widest font-semibold ">
          Our Products
        </h2>
        <span className="text-own-secondary dark:text-own-white   text-center block tracking-widest font-semibold mb-6">
          Popular Items
        </span>
        <div className=" container_c mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
          {data?.map((item, index) => (
            <OurPartsProducts key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center ">
        <NavLink
          to="/shops"
          className="btn-animation flex justify-center items-center"
        >
          All Products
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </NavLink>
      </div>
    </div>
  );
};

export default OurParts;
