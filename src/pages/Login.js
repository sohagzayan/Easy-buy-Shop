/* External Import */
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import GoogleButton from "react-google-button";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import * as yup from "yup";
import axios from "axios";
import cookie from "js-cookie";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

/* Internal Import */
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import keyImage from "../assets/icons/key.png";
import Headers from "../components/Header/Header";
import { useAuthContext } from "../context/AuthContextProvider";
import useToken from "../hock/useToken";
import { useCurrentUserQuery } from "../store/API/user";
import Cookies from "js-cookie";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import LoadingSpenner from "../components/Loading/Loading";

const SignUp = () => {
  /* Hocks  */
  const { login, googleLogin, username } = useAuthContext();
  const [token, isLoading] = useToken(username);
  const [error, setError] = useState("");
  const [mainError, setMainError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  /* Orders  */
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const from = location.state?.from?.pathname || "/";
  const accessToken = Cookies.get("access");
  const userId = Cookies.get("id");
  const response = useCurrentUserQuery(userId);
  console.log(response);

  /* Form validation Yap schema  */
  let schema = yup.object().shape({
    password: yup.string().required().min(6).max(20),
    email: yup.string().required("Please enter your email !").email(),
  });

  /* Form validation Yap Resolver  */
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  /** Login User Handler */
  const onSubmit = async (data) => {
    setLoading(true);
    console.log("tart");
    const { email, password } = data;
    const url = "http://localhost:5000/api/v1/user/login";
    try {
      await axios
        .post(url, { email, password })
        .then((res) => {
          if (res.data.status === 500) {
            setLoading(false);
            if (res.data.message === "This User Not Valid") {
              setMainError(
                "We couldnt find an account matching the username and password you entered. Please check your username and password and try again"
              );
              swal("This User Not Valid! Please try again with Valid Email ");
            }
            if (
              res.data.message ===
              "Pleace Verify Your Account then again try to login"
            ) {
              console.log("verify ---");
              setMainError("Please verify your account and try again");
              swal("Please verify your account and try again");
            }
          } else {
            setMainError("");
            cookie.set("token", res.data.Access_Token);
            cookie.set("id", res.data.userId);
            navigate(from, { replace: true });
            setLoading(false);
            reset();
          }
        })
        .catch((error) => setMainError(error.message));

      setError("");
    } catch (error) {
      if (error.message) {
        console.log(error.message);
      }
      setError(error.message);
    }
  };

  const handleLoginWithGoogle = async () => {
    await googleLogin();
    // navigate(from , {replace : true})
  };

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <Headers />
      <div className="relative">
        {mainError && (
          <div className="">
            <p className="bg-[#FF5555] text-own-secondary dark:text-own-white text-center py-2 ">
              {mainError}
            </p>
          </div>
        )}
        <div className="login relative">
          {loading && (
            <div className="absolute left-0 top-0 h-full z-30 bg-[#101126a1] w-full">
              <LoadingSpenner />
            </div>
          )}
          <div className="relative">
            <p className="text-own-secondary dark:text-own-white absolute top-2 right-5 z-10">
              Not a member?{" "}
              <NavLink
                className="text-own-primary font-bold text-lg"
                to="/SignUp"
              >
                Sign up now
              </NavLink>
            </p>
            <div className=" sm:w-[40%] w-[90%]  mx-auto sm:mx-0 sm:ml-24 py-20">
              <div className=" z-20 relative">
                <h2 className="text-own-secondary dark:text-own-white font-semibold text-3xl mb-3">
                  Sign in to QualityCookie
                </h2>
                <div className="flex sm:flex-row flex-col sm:items-center mb-5">
                  <button
                    className=" bg-[#1a73e8] text-own-secondary dark:text-own-white rounded-md flex items-center justify-between w-[300px] p-1 mr-8 sm:mb-0 mb-3"
                    onClick={handleLoginWithGoogle}
                  >
                    <span className="block">Sign In Your Google Account</span>
                    <span className="block bg-own-white text-2xl py-2 px-3 rounded-r-md">
                      <FcGoogle className="" />
                    </span>
                  </button>
                  <a
                    href=""
                    className="bg-[#1a73e8] p-2 rounded-md sm:inline-block hidden"
                  >
                    <GrFacebookOption className="text-own-secondary dark:text-own-white text-2x " />
                  </a>
                  <a href="">
                    <span className="sm:hidden inline-block text-own-secondary dark:text-own-white bg-[#1a73e8] px-3 tracking-widest py-1 rounded-sm ">
                      Facebook
                    </span>
                  </a>
                </div>
                <div className="flex flex-col w-full]">
                  <div className="divider after:bg-[#484d61] before:bg-[#484d61] text-own-primary">
                    OR
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label
                    htmlFor=""
                    className="text-own-secondary dark:text-own-white mb-1"
                  >
                    Username or Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input text-own-primary font-semibold text-lg bg-[#323644] placeholder:text-[#5a5e70]  placeholder:font-bold w-full focus:outline-own-secondary  mb-3"
                    {...register("email")}
                  />
                  <p className=" text-secondary">{errors.email?.message}</p>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-own-secondary dark:text-own-white"
                    >
                      Password
                    </label>
                    <label className=" inline-block">
                      <a href="/" className=" text-own-primary">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="input text-own-primary font-semibold text-lg bg-[#323644] placeholder:text-[#5a5e70]  placeholder:font-bold w-full focus:outline-own-secondary "
                      {...register("password")}
                    />
                    <span
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-5 top-[20%]"
                    >
                      {showPassword ? (
                        <AiOutlineEye className="text-own-secondary dark:text-own-white text-3xl cursor-pointer" />
                      ) : (
                        <AiOutlineEyeInvisible className="text-own-secondary dark:text-own-white text-3xl cursor-pointer" />
                      )}
                    </span>
                  </div>
                  <p className=" text-secondary">{errors.password?.message}</p>

                  <p className="text-secondary text-sm">{error}</p>

                  <div className=" mt-2">
                    {/* <button className=" bg-own-primary text-own-secondary dark:text-own-white py-2 rounded-md text-white px-24 mt-3 ">
                      Sign In
                    </button> */}
                    <button className="btn-animation flex items-center justify-center ml-0">
                      Sign In
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </form>

                {/* <div className="w-[300px]"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default SignUp;
