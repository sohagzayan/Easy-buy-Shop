/** External Import */
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import swal from "sweetalert";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

/** Internal Import */
import { useCurrentUserQuery } from "../../store/API/user";
import logo from "../../assets/apple-touch-icon.png";
import Menu from "./Menu";
import WithOutLoginMenu from "./WithOutLoginMenu";
import Profile from "./Profile";
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/cardSlice";

const Header = () => {
  /** Hocks  */
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const token = Cookies.get("token");
  const dispatch = useDispatch();

  /** Variable  */
  const userid = Cookies.get("id");
  const response = useCurrentUserQuery(userid);
  const [card, setCard] = useState([]);

  // console.log(response);
  /** Handle Profile menu */

  const cardData = useSelector((current) => current.card);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleUserProfile = async () => {
    setShowMenu((prev) => !prev);
  };

  /** Out Out Func Handler */
  const handleLogOut = () => {
    swal({
      title: "Are you sure?",
      text: "LogOut user and !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        Cookies.remove("id");
        Cookies.remove("token");
        navigate("/login");
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div className=" shadow1  sticky top-0 z-50 bg-own-white dark:bg-own-dark-bg-special py-1">
      <div className="navbar   container_c  mx-auto">
        <div className="navbar-start ">
          <NavLink
            to="/"
            className=" text-own-primary dark:text-own-white font-bold flex items-center "
          >
            <img className="w-[30px] mr-3" src={logo} alt="" />
            Easy Buy
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          {response?.data?.status === "success" &&
            response?.data?.currentuser?.length > 0 && (
              <ul className="  menu-horizontal p-0">
                <li className="text-[#62759d]  px-3 font-semibold ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      location.pathname === "/" ? "text-own-primary" : " "
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-[#62759d]  px-3 font-semibold ">
                  <NavLink
                    to="/shops"
                    className={({ isActive }) =>
                      isActive ? "text-own-primary" : " "
                    }
                  >
                    Shops
                  </NavLink>
                </li>
                <li className="text-[#62759d] px-3 font-semibold ">
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive ? "text-own-primary" : " "
                    }
                  >
                    Blogs
                  </NavLink>{" "}
                </li>
                <li className="text-[#62759d]  px-3 font-semibold ">
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      isActive ? "text-own-primary" : " "
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li className="text-[#62759d]   px-3 font-semibold ">
                  <NavLink
                    to="/Contactus"
                    className={({ isActive }) =>
                      isActive ? "text-own-primary" : " "
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li className="text-[#62759d]  px-3 font-semibold ">
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      isActive ? "text-own-primary" : " "
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="text-[#62759d]  px-3 font-semibold ">
                  <NavLink
                    to="/dashBoart"
                    className={({ isActive }) =>
                      isActive ? "text-own-primary" : " "
                    }
                  >
                    Leaderboard
                  </NavLink>
                </li>
              </ul>
            )}
        </div>
        <div className="navbar-end">
          {response?.data?.status === "success" &&
          response?.data?.currentuser?.length > 0 ? (
            <div>
              <div className="flex items-center gap-5">
                <ThemeToggle />
                <Profile handleUserProfile={handleUserProfile} />
                <NavLink
                  to="/add_new_products"
                  className={({ isActive }) =>
                    isActive
                      ? "text-own-primary bg-transparent border-[1px] border-own-primary  px-1 py-1 rounded-md font-bold transition-all ease-in text-sm"
                      : " text-own-white bg-own-primary  px-1 py-1 border-[1px] border-transparent rounded-md font-bold transition-all ease-in text-sm"
                  }
                >
                  Upload
                </NavLink>
                <div className="text-own-secondary dark:text-own-white  py-2 rounded-md font-semibold relative">
                  <NavLink to="/card" className="cursor-pointer">
                    <AiOutlineShoppingCart className="text-3xl  text-own-primary" />
                    {cardData?.cardProduct?.length ? (
                      <span className="bg-own-primary  absolute top-0 right-3  dark:text-own-white w-[25px] h-[25px] flex items-center justify-center text-own-white  rounded-full text-sm">
                        {cardData?.cardProduct?.length}
                      </span>
                    ) : null}
                  </NavLink>
                </div>
              </div>
              <div className="relative">
                {showMenu && (
                  <Menu handleLogOut={handleLogOut} setShowMenu={setShowMenu} />
                )}
              </div>
            </div>
          ) : (
            <WithOutLoginMenu />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
