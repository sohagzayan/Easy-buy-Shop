import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import { useAuthContext } from "../context/AuthContextProvider";
import useAdmin from "../hock/useAdmin";
const DashBoart = () => {
  const { username } = useAuthContext();
  const [admin] = useAdmin(username);

  return (
    <>
      <Header />
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2 " className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-own-ternary text-own-white">
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
      {/* <Footer /> */}
    </>
  );
};

export default DashBoart;
