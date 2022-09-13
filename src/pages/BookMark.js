import axios from "axios";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "react-query";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import OurPartsProducts from "../components/OurPartsProducts/OurPartsProducts";

const BookMark = () => {
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
            <div className="w-[60%] mx-auto ">
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
            </div>
          </div>
          <div>
            <div className=" mt-10 w-[50%] mx-auto grid grid-cols-1">
              {partsData.data?.map((item) => (
                <OurPartsProducts item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookMark;
