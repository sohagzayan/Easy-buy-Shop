import React from "react";
import { Route, Routes } from "react-router-dom";
import IphoneCategory from "../components/IphoneCategory/IphoneCategory";
import NotFound from "../components/NotFound/NotFound";
import PrivateAdmin from "../components/PrivateRoute/PrivateAdmin";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ServiceCare from "../components/ServiceCare/ServiceCare";
import AddTools from "../DashBoart/AddTools";
import AddUserReview from "../DashBoart/AddUserReview";
import DashBoart from "../DashBoart/DashBoart";
import MakeAdmin from "../DashBoart/MakeAdmin";
import ManageAllOrder from "../DashBoart/ManageAllOrder";
import ManageAllProducts from "../DashBoart/ManageAllProducts";
import MyOrder from "../DashBoart/MyOrder";
import MyProfile from "../DashBoart/MyProfile";
import Payment from "../DashBoart/Payment";
import Blogs from "../pages/Blogs";
import BookMark from "../pages/BookMark";
import EditProfile from "../pages/EditProfile";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Purchase from "../pages/Purchase";
import Repair from "../pages/Repair";
import SignUp from "../pages/SignUp";
import TopSelling from "../pages/TopSelling";

const AllRoutes = () => {
  // const [admin] = useAdmin(username)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/blogs"
        element={
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        }
      />
      <Route
        path="/repair"
        element={
          <PrivateRoute>
            <Repair />
          </PrivateRoute>
        }
      >
        <Route
          index={true}
          element={
            <PrivateRoute>
              <ServiceCare />
            </PrivateRoute>
          }
        />
        <Route path="category/iphone" element={<IphoneCategory />} />
      </Route>
      <Route
        path="/topselling"
        element={
          <PrivateRoute>
            <TopSelling />
          </PrivateRoute>
        }
      />
      <Route
        path="/bookmark"
        element={
          <PrivateRoute>
            <BookMark />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashBoart"
        element={
          <PrivateAdmin>
            <DashBoart />
          </PrivateAdmin>
        }
      />
      <Route
        path="/editProfile"
        element={
          <PrivateAdmin>
            <EditProfile />
          </PrivateAdmin>
        }
      />
      <Route
        path="/myProfile"
        element={
          <PrivateAdmin>
            <MyProfile />
          </PrivateAdmin>
        }
      >
        <Route index element={<MyProfile />} />
        <Route path="myProfile" element={<MyProfile />} />
        {/* <Route  element={<ManageAllOrder />} /> */}
        <Route path="manageAllOrder" element={<ManageAllOrder />} />
        <Route path="AddTools" element={<AddTools />} />
        <Route path="myOrder" element={<MyOrder />}></Route>
        <Route path="addUserReview" element={<AddUserReview />} />
        <Route path="makeAdmin" element={<MakeAdmin />} />
        <Route path="manageProducts" element={<ManageAllProducts />} />
        <Route path="payment/:id" element={<Payment />} />
        {/* <Route path="manageAllOrder" element={<ManageAllOrder />} /> */}
      </Route>
      <Route
        path="/purchase/:id"
        element={
          <PrivateRoute>
            {" "}
            <Purchase />{" "}
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
