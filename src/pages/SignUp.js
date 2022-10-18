/* External Import */
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "react-country-dropdown/dist/index.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import GoogleButton from "react-google-button";
import * as yup from "yup";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

/* Internal Import*/
import Headers from "../components/Header/Header";
import React, { useState } from "react";
import { useCurrentUserQuery } from "../store/API/user";
import Cookies from "js-cookie";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";

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
    const url = "https://easy-buy-shop-backend.vercel.app/api/v1/user/signin";
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
          console.log(res);
          setLoading(false);
          if (res?.data?.message) {
            toast.error(res?.data?.message, {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          } else {
            toast.success("Verification Email Send SuccessFull!", {
              position: toast.POSITION.TOP_CENTER,
            });
            navigate("/login");
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
            <div className="h-screen fixed top-0 left-0 z-40 dark:bg-[#1f2d3d67] w-full flex justify-center items-center pointer-events-none  ">
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
            <div className=" md:w-[60%] sm:w-[80%] w-[95%] mx-auto py-6 ">
              <div className="relative z-10">
                <h2 className="text-own-secondary dark:text-own-white font-semibold text-3xl mb-3 text-center">
                  Sign up to Easy Buy
                </h2>
                <div className="flex sm:flex-row flex-col sm:items-center justify-center mb-1">
                  <GoogleButton />
                  <div></div>
                </div>
                <div className="flex flex-col w-full]">
                  <div className="divider after:bg-own-primary before:bg-own-primary text-own-primary ">
                    OR
                  </div>
                </div>
                <div className="">
                  <form onSubmit={handleSubmit(onSubmit)} className=" ">
                    <input
                      type="text"
                      placeholder="Your Account Name"
                      className="input dark:text-own-white text-own-secondary font-semibold text-lg bg-own-white border-[1px] border-own-primary placeholder:text-own-text-light dark:bg-own-ternary  placeholder:font-bold w-full focus:outline-own-primary  mb-3"
                      {...register("name")}
                    />
                    <p className=" text-secondary">{errors.name?.message}</p>

                    <input
                      type="text"
                      placeholder="username must be unique"
                      className="input dark:text-own-white text-own-secondary font-semibold text-lg bg-own-white border-[1px] border-own-primary placeholder:text-own-text-light dark:bg-own-ternary  placeholder:font-bold w-full focus:outline-own-primary  mb-3"
                      {...register("username")}
                    />

                    <p className=" text-secondary">
                      {errors.username?.message}
                    </p>

                    <input
                      type="text"
                      placeholder="Make Sure Add Your Valid Email"
                      className="input dark:text-own-white text-own-secondary font-semibold text-lg bg-own-white border-[1px] border-own-primary placeholder:text-own-text-light dark:bg-own-ternary  placeholder:font-bold w-full focus:outline-own-primary  mb-3 "
                      {...register("email")}
                    />
                    <p className=" text-secondary">{errors.email?.message}</p>

                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="6+ Character"
                        className="input dark:text-own-white text-own-secondary font-semibold text-lg bg-own-white border-[1px] border-own-primary placeholder:text-own-text-light dark:bg-own-ternary  placeholder:font-bold w-full focus:outline-own-primary  mb-3"
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

                    <p className=" text-secondary">
                      {errors.password?.message}
                    </p>
                    <div className="flex gap-12 items-center justify-around mt-2">
                      <CountryDropdown
                        className=" dark:bg-own-dark-bg-special bg-own-white-special  font-semibold dark:text-own-white   text-own-secondary py-2  w-full focus:outline-own-primary px-3 rounded-md"
                        value={country}
                        onChange={(val) => selectCountry(val)}
                        required
                      />
                      <RegionDropdown
                        className="bg-own-white dark:bg-own-dark-bg-special text-own-secondary dark:text-own-white-special py-2  w-[160px] px-3 rounded-md focus:outline-own-primary font-semibold"
                        country={country}
                        value={region}
                        onChange={(val) => selectRegion(val)}
                        required
                      />
                    </div>

                    <p className="text-secondary text-sm">{error}</p>
                    <div className="flex items-center mt-4">
                      <input
                        type="checkbox"
                        name=""
                        id="tarms-condetion"
                        className="mr-3"
                      />
                      <label
                        htmlFor="tarms-condetion"
                        className="text-own-secondary dark:text-own-white text-[13px]"
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
                      <button className="btn-animation capitalize text-sm flex items-center justify-center ml-0">
                        Create Account
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </form>
                </div>
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
