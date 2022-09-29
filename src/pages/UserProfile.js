import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import UserProductCard from "../components/UserProductCard/UserProductCard";

const UserProfile = () => {
  const token = Cookies.get("token");
  const [user, setUser] = useState({});
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:5000/api/v1/user/user/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      fetch(`http://localhost:5000/api/v1/tools?currentUser=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then((data) => {
        setUser(data[0][0]);
        setProduct(data[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/api/v1/user/user/${id}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setUser(data[0]));
  //   }, []);

  return (
    <>
      <Header />
      <div>
        <div className="container_c mx-auto">
          <div className="grid grid-cols-12 border-b-[1px] border-own-primary mb-5">
            <div className=" md:col-span-8 col-span-12 flex  gap-5 py-10">
              <div>
                <img
                  className="w-[200px] rounded-full"
                  src={user?.image}
                  alt=""
                />
              </div>
              <div className="text-own-secondary dark:text-own-white">
                <h2 className="text-2xl mb-1">{user?.name}</h2>
                <h4>@{user?.username}</h4>
                <h4>( {user?.country} )</h4>
                <p className="text-own-text-light  dark:text-own-text-dark">
                  {user?.bio}
                </p>
                <div className="text-own-secondary dark:text-own-white flex  items-center gap-10  py-3 rounded-md ">
                  <div>
                    <button className="text-own-secondary dark:text-own-white bg-own-primary px-8 rounded-md py-2">
                      +Follow
                    </button>
                  </div>
                  <div className="flex items-center flex-col">
                    <span className="text-xl font-semibold">232</span>
                    <span>Product</span>
                  </div>
                  <div className="flex items-center flex-col">
                    <span className="text-xl font-semibold">232</span>
                    <span>Flower</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 flex md:items-center flex-col gap-10 justify-center">
              <div className="flex items-center text-own-primary  gap-6">
                <span>
                  <GrFacebookOption className="text-2xl" />
                </span>
                <span>
                  <GrLinkedinOption className="text-2xl" />
                </span>
                <span>
                  <AiOutlineLink className="text-2xl" />
                </span>
              </div>
              <div>
                <button className="border-[1px] border-own-primary text-own-secondary dark:text-own-white px-3 py-1 rounded-md">
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 items-center gap-12">
              {product?.map((p) => (
                <UserProductCard data={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
