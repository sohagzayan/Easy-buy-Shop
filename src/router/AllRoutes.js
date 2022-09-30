import React from "react";
import { Route, Routes } from "react-router-dom";
import IphoneCategory from "../components/IphoneCategory/IphoneCategory";
import EditProfileInfo from "../components/MyProfile/EditProfileInfo";
import General from "../components/MyProfile/General";
import SocialProfile from "../components/MyProfile/SocialProfile";
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
import MyOrder from "../components/My_profile_deshbord/MyOrder";
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
import BuyProducts from "../pages/BuyProducts";
import MyProductsD from "../components/My_profile_deshbord/MyProductsD";
import MyBlogD from "../components/My_profile_deshbord/MyBlogD";
import MyBookMarkD from "../components/My_profile_deshbord/MyBookMarkD";
import MyFavoriteD from "../components/My_profile_deshbord/MyFavoriteD";
import PasswordReset from "../components/MyProfile/PasswordReset";
import EmailNotifecation from "../components/MyProfile/EmailNotifecation";
import AddNewProducts from "../pages/AddNewProducts";
import ProductsDetails from "../components/ProductsDetails/ProductsDetails";
import ProductMainInfo from "../components/AddNewProducts/ProductMainInfo";
import ProductsOthersInfo from "../components/AddNewProducts/ProductsOthersInfo";
import UserProfile from "../pages/UserProfile";
const AllRoutes = () => {
  // const [admin] = useAdmin(username)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ProductsDetails/:id" element={<ProductsDetails />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment/:id" element={<Payment />} />
      <Route path="/user_profile/:id" element={<UserProfile />} />

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
        path="/buy_products"
        element={
          <PrivateRoute>
            <BuyProducts />
          </PrivateRoute>
        }
      />
      <Route
        path="/add_new_products"
        element={
          <PrivateRoute>
            <AddNewProducts />
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
        path="/account"
        element={
          <PrivateAdmin>
            <EditProfile />
          </PrivateAdmin>
        }
      >
        <Route index={true} element={<General />} />
        <Route path="edit_profile" element={<EditProfileInfo />} />
        <Route path="social_profiles" element={<SocialProfile />} />
        <Route path="password" element={<PasswordReset />} />
        <Route path="email_notifications" element={<EmailNotifecation />} />
      </Route>
      <Route
        path="/myProfile"
        element={
          <PrivateAdmin>
            <MyProfile />
          </PrivateAdmin>
        }
      >
        <Route index element={<MyProductsD />} />
        <Route path="my_blog" element={<MyBlogD />} />
        <Route path="my_bookmark" element={<MyBookMarkD />} />
        <Route path="my_ordered" element={<MyOrder />} />
        {/* <Route index element={<MyProfile />} /> */}
        {/* <Route path="myProfile" element={<MyProfile />} /> */}
        {/* <Route  element={<ManageAllOrder />} /> */}
        {/* <Route path="manageAllOrder" element={<ManageAllOrder />} />
        <Route path="AddTools" element={<AddTools />} />
        <Route path="myOrder" element={<MyOrder />}></Route>
        <Route path="addUserReview" element={<AddUserReview />} />
        <Route path="makeAdmin" element={<MakeAdmin />} />
        <Route path="manageProducts" element={<ManageAllProducts />} />
        <Route path="payment/:id" element={<Payment />} /> */}
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
