import React from "react";
import { AiFillStar, AiOutlineLogin } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdDriveFileMove } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Menu = ({ handleLogOut, setShowMenu }) => {
  return (
    <>
      <ul className="text-own-secondary dark:text-own-white dark:bg-own-dark-bg bg-own-white  rounded-md absolute top-3 shadow-md right-0 w-[250px] ">
        <li className="text-lg pointer-events-none rounded-sm bg-own-primary text-own-white font-bold py-1 px-5">
          Settings
        </li>
        <NavLink to="/myProfile" onClick={() => setShowMenu(false)}>
          <li className="text-lg cursor-pointer py-1 px-5 hover:bg-own-primary transition-all ease-in">
            Profile
          </li>
        </NavLink>
        <NavLink to="/account/edit_profile" onClick={() => setShowMenu(false)}>
          <li className="text-lg cursor-pointer py-1 px-5 hover:bg-own-primary transition-all ease-in">
            Edit Profile
          </li>
        </NavLink>
        <hr className="border-[#838282] cursor-pointer" />
        <NavLink to="/myProfile/my_folloer" onClick={() => setShowMenu(false)}>
          <li className="text-lg cursor-pointer py-1 px-5 hover:bg-own-primary transition-all ease-in flex items-center">
            <FcLikePlaceholder className="mr-1" /> Follower
          </li>
        </NavLink>
        <li className="text-lg cursor-pointer py-1 px-5 hover:bg-own-primary transition-all ease-in flex items-center">
          <AiFillStar className="mr-1" /> Go Pro
        </li>
        <NavLink
          to="/myProfile/my_bookmark"
          onClick={() => setShowMenu(false)}
          className="text-lg cursor-pointer py-1 px-5 hover:bg-own-primary transition-all ease-in flex items-center"
        >
          <MdDriveFileMove className="mr-1" /> Collections
        </NavLink>
        <hr className="border-[#838282]  cursor-pointer" />
        <li
          onClick={handleLogOut}
          className="text-lg cursor-pointer py-1 px-5 hover:bg-own-primary transition-all ease-in flex items-center "
        >
          <AiOutlineLogin className="mr-1" /> Sign Out
        </li>
      </ul>
    </>
  );
};

export default Menu;
