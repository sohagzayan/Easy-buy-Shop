import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Leaderboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className=" text-own-text-light flex items-center flex-col justify-center h-screen ">
        <h2 className="md:text-4xl text-2xl ">Leaderboard</h2>
        <p className="md:text-2xl text-xl ">Come in Soon</p>
      </div>
      <Footer />
    </>
  );
};

export default Leaderboard;
