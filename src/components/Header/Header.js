/** External Import */
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import Cookies from "js-cookie";
import swal from "sweetalert";
import React, { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { MdDriveFileMove, MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";

/** Internal Import */
import Icons from "../.././assets/icons/guarantee.png";
import { useAuthContext } from "../../context/AuthContextProvider";
import { useCurrentUserQuery } from "../../store/API/user";
import demouser from "../../assets/clock.png";
import { getAddToCard } from "../../Querys/BookmarkQuery";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import Card from "./Card";
import Menu from "./Menu";
import WithOutLoginMenu from "./WithOutLoginMenu";
import Profile from "./Profile";
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  /** Hocks  */
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const token = Cookies.get("token");

  /** Variable  */
  const userid = Cookies.get("id");
  const response = useCurrentUserQuery(userid);
  const [card, setCard] = useState([]);

  // console.log(response);
  /** Handle Profile menu */

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/addToCard", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, [card]);

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
    <div className=" shadow1  sticky top-0 z-50 bg-own-white dark:bg-own-dark-bg">
      <div className="navbar   container mx-auto">
        <div className="navbar-start">
          <a
            className="btn text-own-primary btn-ghost normal-case text-xl text-own-secondary dark:text-own-white font-semibold"
            href="/"
          >
            Digital{" "}
            <span className="text-own-secondary dark:text-own-white font-semibold text-xl">
              Store
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {response?.data?.status === "success" &&
            response?.data?.currentuser?.length > 0 && (
              <ul className="  menu-horizontal p-0">
                <li className="text-[#62759d] dark:text-own-white px-3 font-semibold ">
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
                    to="/buy_products"
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
                    to="/repair"
                    className={({ isActive }) =>
                      isActive ? "text-own-primary" : " "
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li className="text-[#62759d]   px-3 font-semibold ">
                  <NavLink
                    to="/bookmark"
                    className={({ isActive }) =>
                      isActive ? "text-own-primary" : " "
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li className="text-[#62759d]  px-3 font-semibold ">
                  <NavLink
                    to="/dashBoart"
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
                      ? "text-own-primary bg-transparent border-[1px] border-own-primary  px-3 py-2 rounded-md font-bold transition-all ease-in"
                      : " text-own-white bg-own-primary  px-3 py-2 border-[1px] border-transparent rounded-md font-bold transition-all ease-in"
                  }
                >
                  Upload
                </NavLink>
                <div className="text-own-secondary dark:text-own-white  py-2 rounded-md font-semibold relative">
                  <div
                    onClick={() => setShowCard((prev) => !prev)}
                    className="cursor-pointer"
                  >
                    <AiOutlineShoppingCart className="text-3xl  " />
                    {card?.length ? (
                      <span className="bg-own-primary  absolute top-0 right-3 text-own-secondary dark:text-own-white w-[25px] h-[25px] flex items-center justify-center  rounded-full text-sm">
                        {card?.length}
                      </span>
                    ) : null}
                  </div>
                  {showCard && <Card card={card} />}
                </div>
              </div>
              <div className="relative">
                {showMenu && <Menu handleLogOut={handleLogOut} />}
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
