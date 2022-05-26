import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import PrivateAdmin from "../components/PrivateRoute/PrivateAdmin";
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
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
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyProtFolio from "../pages/MyProtFolio";
import Purchase from "../pages/Purchase";
import SignUp from "../pages/SignUp";
const AllRoutes = () => {
  
  // const [admin] = useAdmin(username)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/myProtFolio" element={<MyProtFolio />} />
      <Route path="/dashBoart" element={ <PrivateAdmin><DashBoart /></PrivateAdmin>} >
          <Route index element={<MyProfile />} />
          <Route path="myProfile" element={<MyProfile />} />
          {/* <Route  element={<ManageAllOrder />} /> */}
          <Route path="manageAllOrder" element={<ManageAllOrder />} />
          <Route path="AddTools" element={<AddTools />} />
          <Route path="myOrder" element={<MyOrder />} >
          </Route>
          <Route path="addUserReview" element={<AddUserReview />} />
          <Route path="makeAdmin" element={<MakeAdmin />} />
          <Route path="manageProducts" element={<ManageAllProducts />} />
          
          <Route path="payment/:id" element={<Payment />} />
          {/* <Route path="manageAllOrder" element={<ManageAllOrder />} /> */}
      </Route>
      <Route path="/purchase/:id" element={<PrivateRoute> <Purchase /> </PrivateRoute> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
};

export default AllRoutes;
