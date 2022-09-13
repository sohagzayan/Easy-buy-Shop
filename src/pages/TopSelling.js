import React from "react";
import Header from "../components/Header/Header";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from ".././components/Loading/Loading";
import OurPartsProducts from ".././components/OurPartsProducts/OurPartsProducts";
import Footer from "../components/Footer/Footer";

const TopSelling = () => {
  const {
    isLoading,
    error,
    data: partsData,
  } = useQuery("toolsData", () =>
    axios.get(`https://tranquil-shelf-42201.herokuapp.com/api/tools`)
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <div>
        <div className="bg-own-ternary py-10">
          <div className="flex items-center flex-col ">
            <h3 className="text-own-white text-3xl mb-2  ">
              Top Selling Product
            </h3>
            <h4 className="text-own-white text-xl mb-2 ">200 Products</h4>
            <button className="px-7 py-2 text-own-white rounded-md cursor-pointer mb-5 bg-own-primary">
              Create Your New List
            </button>
          </div>
          <div className="flex justify-around sm:flex-row flex-col  items-center ">
            <div>
              <label htmlFor="" className="text-own-white mr-2">
                Sort By :
              </label>
              <select
                name=""
                id=""
                className="bg-[#101126] py-2 rounded-sm px-6 placeholder:text-own-primary text-own-white outline-none focus:outline-own-primary sm:mb-0 mb-3"
              >
                <option value="">Select</option>
                <option value="">Best Seller</option>
                <option value="">Newly Released</option>
                <option value="">Price-Low to High</option>
                <option value="">Price-Heigh to Low</option>
                <option value="">Price-Heigh to Low</option>
                <option value="">Discount-Low to High</option>
                <option value="">Discount-Heigh to Low</option>
                <option value="">Most Reviewed</option>
                <option value="">Most Rated</option>
              </select>
            </div>

            <form action="" className="relative sm:ml-0 ml-[70px]">
              <input
                type="text"
                placeholder="Search"
                className="py-2 px-6 rounded-sm bg-[#101126] text-own-primary placeholder:text-own-primary font-semibold outline-none focus:outline-own-primary"
              />
              <span className="absolute top-[30%] right-3">
                <AiOutlineSearch className="text-own-primary" />
              </span>
            </form>
          </div>
        </div>
        <div>
          <div className="container  mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 mt-20">
            {partsData.data?.map((item) => (
              <OurPartsProducts item={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopSelling;
