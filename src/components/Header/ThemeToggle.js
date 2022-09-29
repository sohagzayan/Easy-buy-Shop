import React from "react";
import { useContext } from "react";
import { HiOutlineSun } from "react-icons/hi";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <span onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (
          <MdOutlineDarkMode className="text-[#62759d] text-3xl" />
        ) : (
          <HiOutlineSun className="text-[#62759d] text-3xl" />
        )}
      </span>
    </div>
  );
};

export default ThemeToggle;
