import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";
import { Navigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { useCurrentUserQuery } from "../../store/API/user";
import MyProducts from "../MyProducts/MyProducts";

const MyProductsD = () => {
  const userId = Cookies.get("id");
  const token = Cookies.get("token");
  const response = useCurrentUserQuery(userId);
  const [myProduct, setMyProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/tools/get_Current_user_product`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (
          data?.message === "jwt expired" ||
          data?.message === "jwt malformed"
        ) {
          Cookies.remove("token");
          Cookies.remove("id");
          Navigate("/login");
        } else {
          setMyProduct(data);
          setLoading(false);
        }
      });
  }, [myProduct]);

  const handleRemoveTools = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, You Will Delete You Product! ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        axios
          .delete(`http://localhost:5000/api/v1/tools/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            toast.success("Delete SuccessFull Your Product!", {
              position: toast.POSITION.TOP_CENTER,
            });
          })
          .catch((err) => {
            toast.success(err.message, {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  // console.log(response?.data?.currentuser[0]?.tools);

  return (
    <div>
      <div>
        <div>
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
            <div className=" container_c mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-20 mt-10">
              {myProduct?.map((p, index) => (
                <MyProducts
                  key={index}
                  data={p}
                  handleRemoveTools={handleRemoveTools}
                />
              ))}
            </div>
          )}

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
