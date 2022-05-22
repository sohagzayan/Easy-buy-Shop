import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import * as yup from "yup";
import keyImage from "../assets/icons/key.png";
import Footer from "../components/Footer/Footer";
import Headers from "../components/Header/Header";
import { useAuthContext } from "../context/AuthContextProvider";
const SignUp = () => {
  const [error , setError] = useState('')
    const {login} = useAuthContext()
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


  let schema = yup.object().shape({
    password: yup.string().required().min(6).max(20),
    email: yup.string().required("Please enter your email !").email(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
  const { username, email, password, firstName, ConformPassword } = data
    try {
        await login(email , password)
        swal("Good job!", "Your Login success!", "success");
        navigate(from , {replace : true})
        setError('')
    } catch (error) {
        setError(error.message)
    }
  };
  return (
    <>
      <Headers />
      <div className="my-10">
        <div class="hero ">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center flex flex-col items-center">
              <h1 class="text-5xl font-bold">Login Now</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem
              </p>
              <img width="200px" src={keyImage} alt="" />
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="email"
                    class="input input-bordered w-full mb-2 focus:outline-secondary"
                    {...register("email")}
                  />
                  <p className=" text-secondary">{errors.email?.message}</p>
                  <input
                    type="text"
                    placeholder="password"
                    class="input input-bordered w-full focus:outline-secondary"
                    {...register("password")}
                  />
                  <p className=" text-secondary">{errors.password?.message}</p>
                  <label class="label">
                    <a href="/" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <p className="text-secondary text-sm">{error}</p>

                  <div class="form-control mt-2">
                    <button class="btn btn-primary text-white ">Login</button>
                  </div>
                </form>

                <div className="w-[300px]">
                  <GoogleButton
                    style={{ width: "320px" }}
                    className="rounded-lg"
                    onClick={() => {
                      console.log("Google button clicked");
                    }}
                  />
                </div>
                <p>
                  Not Have a account ?{" "}
                  <NavLink
                    className="text-secondary font-bold text-lg"
                    to="/SignUp"
                  >
                    SignUp
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
