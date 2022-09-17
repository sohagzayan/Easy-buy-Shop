import React from "react";
import Header from "../components/Header/Header";
// import classes from "./Repair.module.css";

import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
const Repair = () => {
  return (
    <>
      <Header />
      <div className="bg-[#141a28] ">
        <div></div>
        <div>{<Outlet />}</div>
      </div>
      <Footer />
    </>
  );
};

export default Repair;
