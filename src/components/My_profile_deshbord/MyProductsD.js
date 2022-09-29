import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCurrentUserQuery } from "../../store/API/user";
import Loadings from "../Loading/Loading";
import LoadingSpener from "../LoadingSpener/LoadingSpener";
import MyProducts from "../MyProducts/MyProducts";

const MyProductsD = () => {
  const userId = Cookies.get("id");
  const token = Cookies.get("token");
  const response = useCurrentUserQuery(userId);
  const [myProduct, setMyProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:5000/api/v1/tools?currentUser=${response?.data?.currentuser[0]?._id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyProduct(data);
        setLoading(false);
      });
  }, []);

  console.log(response?.data?.currentuser[0]?.tools);

  if (loading) {
    return <LoadingSpener />;
  }

  return (
    <div>
      <div>
        <div>
          <div className=" container_c mx-auto grid grid-cols-3 gap-20 mt-10">
            {myProduct?.map((p, index) => (
              <MyProducts key={index} data={p} />
            ))}
          </div>
          {response?.data?.currentuser[0]?.tools?.length <= 0 && (
            <div className="border-2 border-dashed w-[320px] p-7 mt-7 flex flex-col">
              <h2 className="text-own-primary text-2xl mb-2">
                Upload your first shot
              </h2>
              <p className="text-own-secondary dark:text-own-white">
                Show off your best work. Get feedback, likes and be a part of a
                growing community.
              </p>
              <NavLink
                to="/add_new_products"
                className="btn-animation text-sm w-full ml-0 flex items-center justify-center "
              >
                Add Your Fast Products
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProductsD;
