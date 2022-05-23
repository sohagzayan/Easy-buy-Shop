import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoart from "../DashBoart/DashBoart";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyProtFolio from "../pages/MyProtFolio";
import Purchase from "../pages/Purchase";
import SignUp from "../pages/SignUp";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/myProtFolio" element={<MyProtFolio />} />
      <Route path="/dashBoart" element={<DashBoart />} >
        
      </Route>
      <Route path="/purchase/:id" element={<Purchase />} />
    </Routes>
  );
};

export default AllRoutes;
