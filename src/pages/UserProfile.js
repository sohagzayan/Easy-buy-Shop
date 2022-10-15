import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { FaBackward } from "react-icons/fa";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { HiCheck } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header/Header";
import LoadingSpener from "../components/LoadingSpener/LoadingSpener";
import OurPartsProducts from "../components/OurPartsProducts/OurPartsProducts";
import { useCurrentUserQuery } from "../store/API/user";

const UserProfile = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [user, setUser] = useState({});
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const userid = Cookies.get("id");
  const response = useCurrentUserQuery(userid);
  const [loading, setLoading] = useState(true);

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
        if (data[1].status === 500 || data[1].message === "jwt expired") {
          Cookies.remove("token");
          Cookies.remove("id");
          navigate("/login");
        } else {
          setProduct(data[1]);
          setUser(data[0][0]);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const handleFollowUser = async (id) => {
    axios
      .get(`http://localhost:5000/api/v1/user/user/follow_user?add=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(`You Folloing ${user?.name}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => {
        toast.error(err.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };

  const handleUnFollowUser = async (id) => {
    axios
      .get(`http://localhost:5000/api/v1/user/user/follow_user?remove=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.info(`You unFolloing ${user?.name}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return <LoadingSpener />;
  }
  return (
    <>
      <Header />
      <div className="min-h-screen mx-h-[100%]">
        <div className="container_c mx-auto">
          <div className="mb-2">
            <span
              className="text-own-primary underline font-bold text-lg cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <FaBackward className="text-3xl" />
            </span>
          </div>
          <div className=" border-b-[1px] dark:bg-own-dark-bg-special bg-own-white-special px-3 rounded-md border-[1px] border-own-text-light border-opacity-20  mb-5 md:py-0 py-5 relative">
            <div className=" flex sm:flex-row flex-col sm:justify-start justify-center items-center   gap-5 py-10 ">
              <div>
                <img
                  className="w-[200px] rounded-full"
                  src={user?.image}
                  alt=""
                />
              </div>
              <div className="text-own-secondary dark:text-own-white sm:text-left text-center">
                <h2 className="text-2xl mb-1 font-bold">{user?.name}</h2>
                <h4>@{user?.username}</h4>
                <h4 className="font-semibold">( {user?.country} )</h4>
                <p className="text-own-text-light  dark:text-own-text-dark">
                  {user?.bio}
                </p>
                <div className="text-own-secondary dark:text-own-white flex  items-center gap-10  py-3 rounded-md ">
                  <div>
                    {user?.follor?.indexOf(
                      response?.currentData?.currentuser[0]?._id
                    ) === -1 ? (
                      <button
                        onClick={() => handleFollowUser(id)}
                        className="text-own-white font-bold border-[1px]  border-transparent bg-own-primary px-5 rounded-md py-2"
                      >
                        + Follow
                      </button>
                    ) : (
                      <button
                        onClick={() => handleUnFollowUser(id)}
                        className="dark:text-own-white text-own-secondary bg-transparent border-[1px] border-own-primary  px-5 rounded-md py-2 flex items-center gap-2"
                      >
                        <HiCheck className="text-2xl" />
                        Following
                      </button>
                    )}
                  </div>
                  <div className="flex items-center flex-col">
                    <span className="text-xl font-semibold">
                      {product?.length}
                    </span>
                    <span>Product</span>
                  </div>
                  <div className="flex items-center flex-col">
                    <span className="text-xl font-semibold">
                      {user?.follor?.length}
                    </span>
                    <span>Flower</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 absolute bottom-5 sm:right-5 right-[20%] ">
              <div>
                <button className="border-[1px] border-own-primary text-own-secondary dark:text-own-white px-3 py-1 rounded-md">
                  Send Message
                </button>
              </div>
              <div className="flex items-center text-own-primary  gap-6 ">
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
            </div>
          </div>
          <div>
            {product.length <= 0 ? (
              <div className="border-2 border-dashed w-[320px] p-7 mt-7 flex flex-col">
                <h2 className="text-own-primary text-2xl mb-2">
                  User Don't add Product Yet
                </h2>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-12">
                {product?.map((item) => (
                  <OurPartsProducts item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
