import React from "react";
import { Route, Routes } from "react-router-dom";
import EditProfileInfo from "../components/MyProfile/EditProfileInfo";
import General from "../components/MyProfile/General";
import SocialProfile from "../components/MyProfile/SocialProfile";
import NotFound from "../components/NotFound/NotFound";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import MyOrder from "../components/My_profile_deshbord/MyOrder";
import MyProfile from "../DashBoart/MyProfile";
import Payment from "../DashBoart/Payment";
import Blogs from "../pages/Blogs";
import BookMark from "../pages/BookMark";
import EditProfile from "../pages/EditProfile";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Shoops from "../pages/Shoops";
import MyProductsD from "../components/My_profile_deshbord/MyProductsD";
import MyBlogD from "../components/My_profile_deshbord/MyBlogD";
import MyBookMarkD from "../components/My_profile_deshbord/MyBookMarkD";
import PasswordReset from "../components/MyProfile/PasswordReset";
import EmailNotifecation from "../components/MyProfile/EmailNotifecation";
import AddNewProducts from "../pages/AddNewProducts";
import ProductsDetails from "../components/ProductsDetails/ProductsDetails";
import UserProfile from "../pages/UserProfile";
import UpdateProducts from "../pages/UpdateProducts";
import Contactus from "../pages/Contactus";
import About from "../pages/About";
import MyFolloerD from "../components/My_profile_deshbord/MyFolloerD";
import MyProductOrder from "../components/My_profile_deshbord/MyProductOrder";
import Card from "../pages/Card";
const AllRoutes = () => {
  return (
    <Routes>
      {/* Our Page Route  */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ProductsDetails/:id" element={<ProductsDetails />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment/:id" element={<Payment />} />
      <Route path="/user_profile/:id" element={<UserProfile />} />
      <Route path="/update_products/:id" element={<UpdateProducts />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/card" element={<Card />} />

      <Route
        path="/blogs"
        element={
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        }
      />
      <Route
        path="/shops"
        element={
          <PrivateRoute>
            <Shoops />
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
        path="/account"
        element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
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
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        }
      >
        <Route index element={<MyProductsD />} />
        <Route path="my_folloer" element={<MyFolloerD />} />
        <Route path="my_blog" element={<MyBlogD />} />
        <Route path="my_bookmark" element={<MyBookMarkD />} />
        <Route path="my_ordered" element={<MyOrder />} />
        <Route path="my_product_order" element={<MyProductOrder />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
