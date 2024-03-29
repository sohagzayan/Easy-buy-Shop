import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BlogImage1 from "../assets/images/blog-4_239ddfeb-e121-41e1-bda0-5516ce719db3 (1).webp";
import classes from "./Blog.module.css";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
const Blogs = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <div>
        <div className="bg-own-white-special dark:bg-own-dark-bg-special py-10">
          <div className="flex items-center flex-col ">
            <h3 className="text-own-secondary dark:text-own-white text-3xl mb-2  ">
              Our Products blog
            </h3>
            <h4 className="text-own-secondary dark:text-own-white text-xl mb-2 ">
              20 Blog
            </h4>
            <button className="px-7 py-2 text-own-white rounded-md cursor-pointer mb-5 bg-own-primary">
              Add Your Own Blog
            </button>
          </div>
          <div className="">
            <form
              action=""
              className="relative flex items-center justify-center bg-own-white-special border-[1px] border-own-text-light rounded-md dark:bg-own-dark-bg-special sm:w-[50%] mx-auto w-[90%]"
            >
              <input
                type="text"
                placeholder="Search"
                className=" py-3 w-full block  px-6 rounded-sm bg-transparent text-own-primary placeholder:text-own-primary font-semibold outline-none focus:outline-own-primary"
              />
              <span className="absolute top-[30%] right-3">
                <AiOutlineSearch className="text-own-primary" />
              </span>
            </form>
          </div>
        </div>
        <div>
          <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
            <div className="bg-own-white-special shadow-md rounded-md dark:bg-own-dark-bg-special">
              <div className={`${classes.blogCard} ${classes.blogCard1}`}>
                <img
                  src={BlogImage1}
                  alt="rounded"
                  className="invisible rounded-none"
                />
              </div>
              <div className="text-own-secondary dark:text-own-white p-3">
                <span className="text-own-primary mb-3 block">
                  Jul 24, 2020
                </span>
                <h3>Polaroid Lab instantly prints smartphone pics</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable ...{" "}
                </p>
                <button className="bg-own-primary  text-own-white px-7 py-1 rounded-md mt-4">
                  Details
                </button>
              </div>
            </div>
            <div className="bg-own-white-special shadow-md rounded-md dark:bg-own-dark-bg-special">
              <div className={`${classes.blogCard} ${classes.blogCard2}`}>
                <img src={BlogImage1} alt="" className="invisible" />
              </div>
              <div className="text-own-secondary dark:text-own-white p-3">
                <span className="text-own-primary mb-3 block">
                  Jul 24, 2020
                </span>
                <h3>Polaroid Lab instantly prints smartphone pics</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable ...{" "}
                </p>
                <button className="bg-own-primary  text-own-white px-7 py-1 rounded-md mt-4">
                  Details
                </button>
              </div>
            </div>
            <div className="bg-own-white-special shadow-md rounded-md dark:bg-own-dark-bg-special">
              <div className={`${classes.blogCard} ${classes.blogCard3}`}>
                <img src={BlogImage1} alt="" className="invisible" />
              </div>
              <div className="text-own-secondary dark:text-own-white p-3">
                <span className="text-own-primary mb-3 block">
                  Jul 24, 2020
                </span>
                <h3>Polaroid Lab instantly prints smartphone pics</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable ...{" "}
                </p>
                <button className="bg-own-primary  text-own-white px-7 py-1 rounded-md mt-4">
                  Details
                </button>
              </div>
            </div>
            <div className="bg-own-white-special shadow-md rounded-md dark:bg-own-dark-bg-special">
              <div className={`${classes.blogCard} ${classes.blogCard4}`}>
                <img src={BlogImage1} alt="" className="invisible" />
              </div>
              <div className="text-own-secondary dark:text-own-white p-3">
                <span className="text-own-primary mb-3 block">
                  Jul 24, 2020
                </span>
                <h3>Polaroid Lab instantly prints smartphone pics</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable ...{" "}
                </p>
                <button className="bg-own-primary  text-own-white px-7 py-1 rounded-md mt-4">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
