import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircle, BsList } from "react-icons/bs";
import OurPartsProducts from "../components/OurPartsProducts/OurPartsProducts";
import axios from "axios";
import Cookies from "js-cookie";
import swal from "sweetalert";
import { useCurrentUserQuery } from "../store/API/user";
import { HiOutlineViewGrid } from "react-icons/hi";
import LoadingSpener from "../components/LoadingSpener/LoadingSpener";
const Shoops = () => {
  const token = Cookies.get("token");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [sorted, setSorted] = useState("");
  const userid = Cookies.get("id");
  const response = useCurrentUserQuery(userid);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState(0);

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
          setLoading(false);
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

  if (loading) {
    return <LoadingSpener />;
  }

  return (
    <>
      <Header />
      <div className="mt-10">
        <div className="grid grid-cols-12 gap-10 container_c mx-auto">
          <div className="lg:col-span-2 col-span-12 flex  flex-col">
            <input
              type="text"
              placeholder="Search"
              className="bg-own-white-special dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white px-3 py-1 rounded-md w-[50%]"
            />
            <ul className="mb-6 text-own-secondary dark:text-own-white">
              <h2 className="text-own-secondary dark:text-own-white font-bold mt-3 ">
                Category
              </h2>
              <li className="cursor-pointer">All</li>
              <li className="cursor-pointer">Watch</li>
              <li className="cursor-pointer">Mobile</li>
              <li className="cursor-pointer">Laptop</li>
              <li className="cursor-pointer">Computer</li>
              <li className="cursor-pointer">Accessories</li>
            </ul>
            <div>
              <h2 className="font-bold text-own-secondary dark:text-own-white">
                Price
              </h2>
              <h4 className="text-own-primary">{priceRange}</h4>
              <input
                onChange={(e) => setPriceRange(e.target.value)}
                type="range"
                min={0}
                max={5000}
              />
            </div>
          </div>
          <div className="lg:col-span-10 col-span-12">
            <div className="flex md:justify-between md:items-center container mx-auto md:flex-row flex-col ">
              <div className="flex items-center gap-5 md:mb-0 mb-3">
                <span className="bg-own-white-special p-1 rounded-sm dark:bg-own-dark-bg-special">
                  <HiOutlineViewGrid className="text-2xl text-own-text-light" />
                </span>
                <span className="bg-own-white-special p-1 rounded-sm dark:bg-own-dark-bg-special">
                  <BsList className="text-2xl text-own-text-light" />
                </span>
              </div>
              <div className="md:mb-0 mb-3">
                <span className="text-own-text-light font-semibold">
                  10 total product
                </span>
              </div>
              <div>
                <select
                  className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white px-2 py-1"
                  name=""
                  id=""
                >
                  <option value="a-z">Price(a-z)</option>
                  <option value="z-a">Price(z-a)</option>
                </select>
              </div>
            </div>
            <div>
              <div className="  ">
                <div className=" mx-auto  grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
                  {data?.map((item, index) => {
                    if (
                      item?.users?._id ===
                      response?.currentData?.currentuser[0]?._id
                    ) {
                      return (
                        <OurPartsProducts
                          key={index}
                          item={item}
                          own={true}
                          handleAddToBookmark={handleAddToBookmark}
                        />
                      );
                    } else {
                      return (
                        <OurPartsProducts
                          key={index}
                          item={item}
                          own={false}
                          handleAddToBookmark={handleAddToBookmark}
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
                      ? " btn bg-own-white-special dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white border-own-primary opacity-50 pointer-events-none"
                      : "btn bg-own-white-special dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white border-own-primary"
                  }
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  <BsArrowLeftCircle className="text-3xl" />
                </button>
                <button className="btn bg-own-white-special dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white border-own-primary hover:bg-own-primary hover:text-own-white transition-all ease-in">
                  Page {currentPage}
                </button>
                <button
                  className={
                    currentPage >= pageCount
                      ? "btn bg-own-white-special dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white border-own-primary opacity-50 pointer-events-none"
                      : "btn bg-own-white-special dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white border-own-primary"
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
                className="bg-own-white-special dark:bg-own-dark-bg-special px-3 py-2 rounded-md text-own-secondary dark:text-own-white"
              >
                <option value="5">Default</option>
                <option value="10">Per Page View 10</option>
                <option value="12">Per Page View 12</option>
                <option value="15">Per Page View 15</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shoops;
