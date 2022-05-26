import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useAuthContext } from "../context/AuthContextProvider";
import useAdmin from "../hock/useAdmin";

const DashBoart = () => {
  const { username } = useAuthContext();
  const [admin] = useAdmin(username);
  console.log(admin);
  console.log(admin);
  return (
    <>
      <Header />
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <NavLink to="myProfile">My Profile</NavLink>
            </li>
            {admin ? null : (
              <li>
                <NavLink to="myOrder">My Order</NavLink>
              </li>
            )}
            {admin ? null : (
              <li>
                <NavLink to="addUserReview">Add Review</NavLink>
              </li>
            )}
            {admin ? (
              <li>
                <NavLink to="manageAllOrder">Manage All Orders</NavLink>
              </li>
            ) : null}

            {admin ? (
              <li>
                <NavLink to="AddTools">Add A Product</NavLink>
              </li>
            ) : null}

            {admin ? (
              <li>
                <NavLink to="makeAdmin">Make Admin</NavLink>
              </li>
            ) : null}

            {admin ? (
              <li>
                <NavLink to="manageProducts">Manage Products</NavLink>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashBoart;
