import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircle, BsList } from "react-icons/bs";
import axios from "axios";
import Cookies from "js-cookie";
import swal from "sweetalert";
import { HiOutlineViewGrid } from "react-icons/hi";
import LoadingSpener from "../components/LoadingSpener/LoadingSpener";
import { category } from "../utiliti/Category";
import GridView from "../components/ShopProductView/GridView";
import RowView from "../components/ShopProductView/RowView";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
const Shoops = () => {
  const token = Cookies.get("token");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  // const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortedByPrice, setSortedByPrice] = useState(-1);
  const [shopView, setShopView] = useState(false);
  const [shopDataLoading, setShopDataLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    setShopDataLoading(true);
    axios
      .post(
        `http://localhost:5000/api/v1/tools/get_all_tools?page=${currentPage}&size=${pageSize}`,
        {
          priceRange: priceRange == 0 ? undefined : priceRange,
          category: activeCategory === "all" ? undefined : activeCategory,
          searchKeyword,
          sortedByPrice,
        },
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
          setShopDataLoading(false);
        } else {
          setData(res.data);
          setShopDataLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, [
    currentPage,
    pageSize,
    searchKeyword,
    activeCategory,
    priceRange,
    sortedByPrice,
  ]);

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

  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="mt-10">
        <div className="grid grid-cols-12 gap-10 container_c mx-auto">
          <div className="lg:col-span-3 col-span-12 flex  flex-col">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="bg-own-white-special dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white px-3 py-1 rounded-md w-full"
            />
            <ul className="mb-6 text-own-secondary dark:text-own-white">
              <h2 className="text-own-secondary dark:text-own-white font-bold mt-3 ">
                Category
              </h2>
              {category?.map((c, index) => (
                <li
                  key={index}
                  className={
                    activeCategory === c
                      ? "underline text-own-primary cursor-pointer"
                      : "cursor-pointer"
                  }
                  onClick={(e) => {
                    console.log(e.target.innerText);
                    setActiveCategory(e.target.innerText);
                  }}
                >
                  {c}
                </li>
              ))}
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
          <div className="lg:col-span-9 col-span-12">
            <div className="flex md:justify-between md:items-center container mx-auto md:flex-row flex-col ">
              <div className="flex items-center gap-5 md:mb-0 mb-3">
                <span
                  onClick={() => setShopView(false)}
                  className="bg-own-white-special p-1 rounded-sm dark:bg-own-dark-bg-special"
                >
                  <HiOutlineViewGrid
                    className={
                      shopView
                        ? "text-2xl text-own-text-light cursor-pointer"
                        : "text-2xl text-own-primary cursor-pointer"
                    }
                  />
                </span>
                <span
                  onClick={() => setShopView(true)}
                  className="bg-own-white-special p-1 rounded-sm dark:bg-own-dark-bg-special"
                >
                  <BsList
                    className={
                      shopView
                        ? "text-2xl  text-own-primary cursor-pointer"
                        : "text-2xl text-own-text-light cursor-pointer"
                    }
                  />
                </span>
              </div>
              <div className="md:mb-0 mb-3">
                <span className="text-own-text-light font-semibold">
                  {data?.length} total product
                </span>
              </div>
              <div>
                <select
                  className="bg-own-white-special dark:bg-own-dark-bg-special dark:text-own-white px-2 py-1"
                  name=""
                  id=""
                  onChange={(e) => setSortedByPrice(e.target.value)}
                >
                  {/* <option value="">Price Low To High</option> */}
                  <option value="-1">Price High To Low</option>
                  <option value="1">Price Low To High</option>
                </select>
              </div>
            </div>
            <div>
              {shopDataLoading ? (
                <div className="flex items-center justify-center h-[400px]">
                  <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor="#c0efff"
                    color="#e15b64"
                  />
                </div>
              ) : (
                <div className="  ">
                  {!data?.length <= 0 ? (
                    shopView ? (
                      <RowView data={data} />
                    ) : (
                      <GridView
                        data={data}
                        handleAddToBookmark={handleAddToBookmark}
                      />
                    )
                  ) : (
                    <div className="flex items-center justify-center flex-col h-[400px]">
                      <h2 className="text-own-primary font-bold text-2xl mb-1 ">
                        Product Not Found
                      </h2>
                      <button className="bg-own-primary text-own-white font-bold px-3 py-1 rounded-md">
                        Reset Filtering
                      </button>
                    </div>
                  )}
                </div>
              )}
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
