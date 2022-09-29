import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { AiOutlineSearch } from "react-icons/ai";
import Footer from "../components/Footer/Footer";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import { BsArrowLeftCircle } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoBagAddOutline } from "react-icons/io";

import OurPartsProducts from "../components/OurPartsProducts/OurPartsProducts";
import axios from "axios";
import Cookies from "js-cookie";
import swal from "sweetalert";
import { useMutation, useQueryClient } from "react-query";
import { addToCardPost } from "../Querys/BookmarkQuery";
import Loading from "../components/Loading/Loading";
import { useCurrentUserQuery } from "../store/API/user";
const BuyProducts = () => {
  const token = Cookies.get("token");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [sorted, setSorted] = useState("");
  const [search, setSearch] = useState("");
  const userid = Cookies.get("id");
  const response = useCurrentUserQuery(userid);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/tools/tools_count")
      .then((res) => {
        const count = res?.data?.tools_count;
        const page = Math.ceil(count / pageSize);
        setPageCount(page - 1);
      })
      .catch((err) => console.log(err));
  }, [pageSize]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://localhost:5000/api/v1/tools?page=${currentPage}&size=${pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res?.data.message === "jwt expired") {
          Cookies.remove("token");
          Cookies.remove("id");
          swal({
            title: "Your session is expired!, Login Please",
          });
          navigate("/login");
        } else {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, [currentPage, pageSize, sorted]);

  /** Handle add to bookmark */

  const handleAddToBookmark = (id) => {
    console.log("adding continew bookmark");
    axios
      .post(
        `http://localhost:5000/api/v1/bookmark/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res?.data?.status === 500) {
          swal("Alredy Bookmark This Products!");
        } else {
          swal("Bookmark Success", "You clicked the button!", "success");
        }
      });
  };

  const cache = useQueryClient();
  const {
    isLoading,
    isError,
    mutateAsync,
    data: res,
  } = useMutation("postCard", addToCardPost, {
    onSuccess: () => {
      cache.invalidateQueries("addToCard");
    },
  });

  if (isLoading || loading) {
    return <Loading />;
  }

  if (res?.data?.status === 500) {
    swal("Alredy Added Your Card");
  } else if (res?.data?.status === "success") {
    swal("Card Add Success", "You clicked the button!", "success");
  }

  console.log(res?.data);

  return (
    <>
      <Header />
      <div>
        <div className="bg-[#18182F] py-10">
          <div className="flex items-center flex-col ">
            <h3 className="text-own-secondary dark:text-own-white text-3xl mb-2  ">
              Our Top Expensive Products
            </h3>
            <h4 className="text-own-secondary dark:text-own-white text-xl mb-2 ">
              200 Products{" "}
            </h4>
            <NavLink
              to="/add_new_products"
              className="px-7 py-2 text-own-secondary dark:text-own-white rounded-md cursor-pointer mb-5 bg-own-primary"
            >
              Add Your Own Products
            </NavLink>
          </div>
          <div className="flex justify-around sm:flex-row flex-col  items-center ">
            <div>
              <label className="text-own-secondary dark:text-own-white mr-2">
                Sort By :
              </label>
              <select
                name=""
                id=""
                onChange={(e) => setSorted(e.target.value)}
                className="bg-[#101126] py-2 rounded-sm px-6 placeholder:text-own-primary text-own-secondary dark:text-own-white outline-none focus:outline-own-primary sm:mb-0 mb-3"
              >
                <option value="">Select</option>
                <option value="1">Price-Low to High</option>
                <option value="-1">Price-Heigh to Low</option>
                <option value="-1">View-Heigh to Low</option>
                <option value="1">View-lo to High</option>
              </select>
            </div>

            <form action="" className="relative sm:ml-0 ml-[70px]">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                className="py-2 px-6 rounded-sm bg-[#101126] text-own-primary placeholder:text-own-primary font-semibold outline-none focus:outline-own-primary"
              />
              <span className="absolute top-[30%] right-3">
                <AiOutlineSearch className="text-own-primary" />
              </span>
            </form>
          </div>
        </div>
        <div>
          <div>
            <div className="  ">
              <div className="container_c mx-auto  grid md:grid-cols-3 grid-cols-1 gap-16 mt-10">
                {data?.map((item) => {
                  if (
                    item?.users?._id ===
                    response?.currentData?.currentuser[0]?._id
                  ) {
                    return (
                      <OurPartsProducts
                        item={item}
                        own={true}
                        handleAddToBookmark={handleAddToBookmark}
                        mutateAsync={mutateAsync}
                      />
                    );
                  } else {
                    return (
                      <OurPartsProducts
                        item={item}
                        own={false}
                        handleAddToBookmark={handleAddToBookmark}
                        mutateAsync={mutateAsync}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <div className="btn-group">
              <button
                className={
                  currentPage <= 0
                    ? " btn bg-[#18182F] text-own-secondary dark:text-own-white border-own-primary opacity-50 pointer-events-none"
                    : "btn bg-[#18182F] text-own-secondary dark:text-own-white border-own-primary"
                }
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                <BsArrowLeftCircle className="text-3xl" />
              </button>
              <button className="btn bg-[#18182F] text-own-secondary dark:text-own-white border-own-primary">
                Page {currentPage}
              </button>
              <button
                className={
                  currentPage >= pageCount
                    ? " btn bg-[#18182F] text-own-secondary dark:text-own-white border-own-primary opacity-50 pointer-events-none"
                    : "btn bg-[#18182F] text-own-secondary dark:text-own-white border-own-primary"
                }
                onClick={() => {
                  if (currentPage < pageCount) {
                    setCurrentPage((prev) => prev + 1);
                  } else {
                    console.log(pageCount, currentPage);
                    alert("max");
                  }
                }}
              >
                <BsArrowLeftCircle className="text-3xl rotate-180" />
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-3 ">
            <select
              name=""
              id=""
              onChange={(e) => setPageSize(e.target.value)}
              className="bg-[#18182F] px-3 py-2 rounded-md text-own-secondary dark:text-own-white"
            >
              <option value="5">Default</option>
              <option value="10">Per Page View 10</option>
              <option value="12">Per Page View 12</option>
              <option value="15">Per Page View 15</option>
            </select>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuyProducts;
