/* External Import */
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import GoogleButton from "react-google-button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import cookie from "js-cookie";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

/* Internal Import */
import React, { useState } from "react";
import Headers from "../components/Header/Header";
import { useCurrentUserQuery } from "../store/API/user";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

const SignUp = () => {
  /* Hocks  */
  const [error, setError] = useState("");
  const [mainError, setMainError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  /* Orders  */
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const from = location.state?.from?.pathname || "/";
  const userId = Cookies.get("id");
  const token = Cookies.get("token");
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
          console.log(res);
          if (res.data.status === 500) {
            setLoading(false);
            if (res.data.message === "This User Not Valid") {
              setMainError(
                "We couldnt find an account matching the username and password you entered. Please check your username and password and try again"
              );
              toast.error(
                "This User Not Valid! Please try again with Valid Email!",
                {
                  position: toast.POSITION.BOTTOM_CENTER,
                }
              );
            }
            if (
              res.data.message ===
              "Pleace Verify Your Account then again try to login"
            ) {
              setMainError("Please verify your account and try again");
              toast.error("Please verify your account and try again!", {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          } else {
            setMainError("");
            cookie.set("token", res.data.Access_Token);
            cookie.set("id", res.data.userId);
            navigate(from, { replace: true });
            setLoading(false);
            toast.success("Login SuccessFull", {
              position: toast.POSITION.TOP_CENTER,
            });
            reset();
          }
        })
        .catch((error) => setMainError(error.message));
      setError("");
    } catch (error) {
      if (error.message) {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
      setError(error.message);
    }
  };

  // const handleLoginWithGoogle = async () => {
  //   // await googleLogin();
  //   // navigate(from , {replace : true})
  // };

  if (token) {
    navigate(from, { replace: true });
  }

  // if (response?.currentData?.currentuser.length > 0) {
  //   navigate(from, { replace: true });
  // }

  return (
    <>
      <Headers />
      <div className="relative controlSmallPage">
        {mainError && (
          <div className="">
            <p className="bg-own-soft-red text-own-secondary dark:text-own-white text-center py-2 ">
              {mainError}
            </p>
          </div>
        )}
        <div className="login container_c mx-auto bg-own-white dark:bg-own-dark-bg relative">
          {loading && (
            <div className="h-screen absolute top-0 left-0 z-40 dark:bg-[#1f2d3d67] w-full flex justify-center items-center pointer-events-none  ">
              <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          )}
          <div className="relative">
            <p className="text-own-secondary font-semibold dark:text-own-white absolute top-2 right-5 z-10">
              Not a member?{" "}
              <NavLink
                className="text-own-primary font-bold text-lg"
                to="/SignUp"
              >
                Sign up now
              </NavLink>
            </p>
            <div className=" sm:w-[60%] w-[90%]  mx-auto sm:mx-0 sm:ml-24 py-20">
              <div className=" z-20 relative">
                <h2 className="text-own-secondary dark:text-own-white font-semibold text-3xl mb-3">
                  Sign in to Easy Buy
                </h2>
                <div className="flex sm:flex-row flex-col sm:items-center mb-2">
                  <GoogleButton />
                </div>
                <div className="flex flex-col w-full]">
                  <div className="divider after:bg-own-primary before:bg-own-primary text-own-primary">
                    OR
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="text-own-secondary font-bold dark:text-own-white mb-1">
                    Username or Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="@gmail.com"
                    className="input text-own-primary font-semibold text-lg bg-own-white border-[1px] border-own-primary placeholder:text-[#5a5e70] dark:bg-own-ternary  placeholder:font-bold w-full focus:outline-own-primary  mb-3"
                    {...register("email")}
                  />
                  <p className=" text-secondary">{errors.email?.message}</p>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-own-secondary font-bold dark:text-own-white"
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
                      className="input text-own-primary font-semibold text-lg bg-own-white dark:bg-own-ternary border-[1px] border-own-primary placeholder:text-[#5a5e70]  placeholder:font-bold w-full focus:outline-own-primary  mb-3 "
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
                    <button className="btn-animation capitalize flex items-center justify-center ml-0">
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
