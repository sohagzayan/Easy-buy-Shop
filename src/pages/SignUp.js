/* External Import */
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "react-country-dropdown/dist/index.css";
import { yupResolver } from "@hookform/resolvers/yup";
import GoogleButton from "react-google-button";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import * as yup from "yup";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

/* Internal Import*/
import Footer from "../components/Footer/Footer";
import Headers from "../components/Header/Header";
import { useAuthContext } from "../context/AuthContextProvider";
import React, { useState } from "react";
import useToken from "../hock/useToken";
import signupImage from "../assets/gif image/signup.gif";
import { useCurrentUserQuery } from "../store/API/user";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
const SignUp = () => {
  /* Hocks */
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  // const navigate = useNavigate();

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
  const { username, googleLogin } = useAuthContext();
  const from = location.state?.from?.pathname || "/";
  // const response = useCurrentUserQuery();
  // console.log("form Signup :", response);

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
    const { username, name, email, password, ConformPassword } = data;
    const url = "http://localhost:5000/api/user/signup";
    const newUser = {
      name,
      username,
      email,
      password,
      role: "user",
      education: "Your Academic Info",
      country: country,
      city: region,
      linkeDin: "url likedin url new",
      image: "image url new",
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
  const handleGoogleLogin = async () => {
    await googleLogin();
  };

  return (
    <>
      <Headers />
      <div className="">
        <div className="login ">
          <div className="relative">
            <p className="text-own-white absolute top-2 right-5 z-10">
              Already a member?{" "}
              <NavLink
                className="text-own-primary font-bold text-lg"
                to="/login"
              >
                Sign In
              </NavLink>
            </p>
            <div className="sm:w-[40%] w-[90%] mx-auto sm:mx-0 sm:ml-24 py-6 ">
              <div className="relative z-10">
                <h2 className="text-own-white font-semibold text-3xl mb-3">
                  Sign in to QualityCookie
                </h2>
                <div className="flex sm:flex-row flex-col sm:items-center mb-1">
                  <button className=" bg-[#1a73e8] text-own-white rounded-md flex items-center justify-between w-[300px] p-1 mr-8 sm:mb-0 mb-3">
                    <span className="block">Sign In Your Google Account</span>
                    <span className="block bg-own-white text-2xl py-2 px-3 rounded-r-md">
                      <FcGoogle className="" />
                    </span>
                  </button>
                  <a
                    href=""
                    className="bg-[#1a73e8] p-2 rounded-md sm:inline-block hidden"
                  >
                    <GrFacebookOption className="text-own-white text-2x " />
                  </a>
                  <a href="">
                    <span className="sm:hidden inline-block text-own-white bg-[#1a73e8] px-3 tracking-widest py-1 rounded-sm ">
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
                  <label htmlFor="" className="text-own-white mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Account Name"
                    className="px-3 rounded-md outline-none py-2 text-own-primary font-semibold text-lg bg-[#323644] placeholder:text-[#9AA5B5] w-full focus:outline-own-secondary placeholder:font-light mb-2"
                    {...register("name")}
                  />
                  <p className=" text-secondary">{errors.name?.message}</p>
                  <label htmlFor="" className="text-own-white mb-1">
                    Your Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username Must Be unique"
                    className="px-3 rounded-md outline-none py-2 text-own-primary font-semibold text-lg bg-[#323644] placeholder:text-[#9AA5B5] w-full focus:outline-own-secondary placeholder:font-light mb-2"
                    {...register("username")}
                  />

                  <p className=" text-secondary">{errors.username?.message}</p>
                  <label htmlFor="" className="text-own-white mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="Make Sure Add Your Valid Email"
                    className="px-3 rounded-md outline-none py-2 text-own-primary font-semibold text-lg bg-[#323644] placeholder:text-[#9AA5B5] w-full focus:outline-own-secondary placeholder:font-light mb-2"
                    {...register("email")}
                  />
                  <p className=" text-secondary">{errors.email?.message}</p>
                  <label htmlFor="" className="text-own-white mb-1">
                    Your Password
                  </label>
                  <input
                    type="text"
                    placeholder="6+ character"
                    className="px-3 rounded-md outline-none py-2 text-own-primary font-semibold text-lg bg-[#323644] placeholder:text-[#9AA5B5] w-full focus:outline-own-secondary placeholder:font-light mb-b"
                    {...register("password")}
                  />

                  <p className=" text-secondary">{errors.password?.message}</p>
                  <div className="flex gap-16">
                    <CountryDropdown
                      className="bg-[#323644] text-own-white py-2 mt-4 w-full px-3 rounded-md"
                      value={country}
                      onChange={(val) => selectCountry(val)}
                      required
                    />
                    <RegionDropdown
                      className="bg-[#323644] text-own-white py-2 mt-4 w-[160px] px-3 rounded-md"
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
                      className="text-own-white text-sm"
                    >
                      Creating an account means you’re okay with our{" "}
                      <a href="" className="text-own-primary">
                        Terms of Service, Privacy Policy,
                      </a>{" "}
                      and our default{" "}
                      <a href="" className="text-own-primary">
                        Notification Settings.
                      </a>
                    </label>
                  </div>
                  <div className=" mt-2">
                    <button className="bg-own-primary text-own-white py-2 rounded-md text-white px-24 mt-3 ">
                      Create Account
                    </button>
                  </div>
                  <p className="text-own-white text-sm mt-5">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a href="" className="text-own-primary">
                      {" "}
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="" className="text-own-primary">
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
