/* External Import */
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "react-country-dropdown/dist/index.css";
import { yupResolver } from "@hookform/resolvers/yup";
// import GoogleButton from "react-google-button";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import * as yup from "yup";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

/* Internal Import*/
import Headers from "../components/Header/Header";
import { useAuthContext } from "../context/AuthContextProvider";
import React, { useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import LoadingSpenner from "../components/Loading/Loading";
import { useCurrentUserQuery } from "../store/API/user";
import Cookies from "js-cookie";
import { TailSpin } from "react-loader-spinner";

const SignUp = () => {
  /* Hocks */
  const userId = Cookies.get("id");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const response = useCurrentUserQuery(userId);
  const navigate = useNavigate();

  /* select Country  Func */
  const selectCountry = (val) => {
    console.log(val);
    setCountry(val);
  };
  /* select Region Func */
  const selectRegion = (val) => {
    setRegion(val);
  };

  /* Others */
  const { googleLogin } = useAuthContext();
  const from = location.state?.from?.pathname || "/";

  /* React Hock Form yup validation Schema*/
  let schema = yup.object().shape({
    name: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required().min(6).max(20),
    email: yup.string().required("Please enter your email !").email(),
  });
  /* React Hock Form Resolver*/
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  /*Custom Hocks*/
  // const [toekn] = useToken(username);
  /** SingUp Func  */
  const onSubmit = async (data) => {
    setLoading(true);
    const { username, name, email, password } = data;
    const url = "http://localhost:5000/api/v1/user/signin";
    const newUser = {
      name,
      username,
      email,
      bio: "Nothing Here bio ",
      personalSite: "url",
      socialAccount: [
        { name: "Facebook", url: "google" },
        { name: "twitter", url: "twitter" },
      ],
      AccountAccess: "freeUser",
      password,
      role: "user",
      education: "Your Academic Info",
      country: country,
      city: region,
      linkeDin: "url likedin url new",
      image: "https://i.ibb.co/ZK5CBDW/demouser.png",
    };
    try {
      await axios
        .post(url, newUser)
        .then((res) => {
          if (res?.data?.status) {
            swal(
              "Your Account Create Successful Pleace Verify Your Email",
              "Your Account pending pleace chack your email and click to verify",
              "success"
            );
            setLoading(false);
          }
        })
        .catch((err) => console.log(err));
      // navigate("/login");
      setError("");
      reset();
      setCountry();
      setRegion();
    } catch (error) {
      setError(error.message);
    }
  };

  /* Google SingUp*/
  // const handleGoogleLogin = async () => {
  //   await googleLogin();
  // };

  if (response?.currentData?.currentuser.length > 0) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <Headers />
      <div className="controlSmallPage">
        <div className="login container_c mx-auto relative">
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
            <p className="text-own-secondary font-bold dark:text-own-white absolute top-2 right-5 z-10">
              Already a member?{" "}
              <NavLink
                className="text-own-primary font-bold text-lg"
                to="/login"
              >
                Sign In
              </NavLink>
            </p>
            <div className="sm:w-[60%] w-[90%] mx-auto sm:mx-0 sm:ml-24 py-6 ">
              <div className="relative z-10">
                <h2 className="text-own-secondary dark:text-own-white font-semibold text-3xl mb-3">
                  Sign in to QualityCookie
                </h2>
                <div className="flex sm:flex-row flex-col sm:items-center mb-1">
                  <button className=" bg-own-primary text-own-white rounded-md flex items-center justify-between w-[300px] p-1 mr-8 sm:mb-0 mb-3">
                    <span className="block ml-3 font-bold">
                      Sign In Your Google Account
                    </span>
                    <span className="block bg-own-white text-2xl py-2 px-3 rounded-r-md">
                      <FcGoogle className="" />
                    </span>
                  </button>
                  <a
                    href="/facebook"
                    className="bg-own-primary  p-2 rounded-md sm:inline-block hidden"
                  >
                    <GrFacebookOption className="text-own-secondary dark:text-own-white text-2x " />
                  </a>
                  <a href="/facebook">
                    <span className="sm:hidden inline-block text-own-secondary dark:text-own-white bg-[#1a73e8] px-3 tracking-widest py-1 rounded-sm ">
                      Facebook
                    </span>
                  </a>
                </div>
                <div className="flex flex-col w-full]">
                  <div className="divider after:bg-[#484d61] before:bg-[#484d61] text-own-primary ">
                    OR
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label
                    htmlFor=""
                    className="text-own-secondary dark:text-own-white mb-1  "
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Account Name"
                    className="input text-own-primary font-semibold text-lg bg-own-white border-[1px] border-own-primary placeholder:text-[#5a5e70] dark:bg-own-ternary  placeholder:font-bold w-full focus:outline-own-primary  mb-3"
                    {...register("name")}
                  />
                  <p className=" text-secondary">{errors.name?.message}</p>
                  <label
                    htmlFor=""
                    className="text-own-secondary dark:text-own-white mb-1"
                  >
                    Your Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username Must Be unique"
                    className="input text-own-primary font-semibold text-lg bg-own-white border-[1px] border-own-primary placeholder:text-[#5a5e70] dark:bg-own-ternary  placeholder:font-bold w-full focus:outline-own-primary  mb-3"
                    {...register("username")}
                  />

                  <p className=" text-secondary">{errors.username?.message}</p>
                  <label
                    htmlFor=""
                    className="text-own-secondary dark:text-own-white mb-1"
                  >
                    Your Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="Make Sure Add Your Valid Email"
                    className="input text-own-primary font-semibold text-lg bg-own-white border-[1px] border-own-primary placeholder:text-[#5a5e70] dark:bg-own-ternary  placeholder:font-bold w-full focus:outline-own-primary  mb-3 "
                    {...register("email")}
                  />
                  <p className=" text-secondary">{errors.email?.message}</p>
                  <label
                    htmlFor=""
                    className="text-own-secondary dark:text-own-white mb-1"
                  >
                    Your Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="6+ Character"
                      className="input text-own-primary font-semibold text-lg bg-own-white border-[1px] border-own-primary placeholder:text-[#5a5e70] dark:bg-own-ternary  placeholder:font-bold w-full focus:outline-own-primary  "
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
                  <div className="flex gap-12">
                    <CountryDropdown
                      className="bg-own-white text-own-secondary dark:bg-own-secondary font-semibold dark:text-own-white py-2 mt-2 w-full focus:outline-own-primary px-3 rounded-md"
                      value={country}
                      onChange={(val) => selectCountry(val)}
                      required
                    />
                    <RegionDropdown
                      className="bg-own-white dark:bg-own-secondary text-own-secondary dark:text-own-white py-2 mt-4 w-[160px] px-3 rounded-md focus:outline-own-primary font-semibold"
                      country={country}
                      value={region}
                      onChange={(val) => selectRegion(val)}
                      required
                    />
                  </div>

                  <p className="text-secondary text-sm">{error}</p>
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      name=""
                      id="tarms-condetion"
                      className="mr-3"
                    />
                    <label
                      htmlFor="tarms-condetion"
                      className="text-own-secondary dark:text-own-white text-sm"
                    >
                      Creating an account means you’re okay with our{" "}
                      <a href="/facebook" className="text-own-primary">
                        Terms of Service, Privacy Policy,
                      </a>{" "}
                      and our default{" "}
                      <a href="/facebook" className="text-own-primary">
                        Notification Settings.
                      </a>
                    </label>
                  </div>
                  <div className=" mt-2">
                    <button className="btn-animation text-sm flex items-center justify-center ml-0">
                      Create Account
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                  <p className="text-own-secondary dark:text-own-white text-sm mt-5">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a href="/facebook" className="text-own-primary">
                      {" "}
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/facebook" className="text-own-primary">
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </form>
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
