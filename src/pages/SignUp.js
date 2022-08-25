import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import * as yup from 'yup';
import addUserIcons from "../assets/icons/add-user.png";
import Footer from "../components/Footer/Footer";
import Headers from "../components/Header/Header";
import { useAuthContext } from '../context/AuthContextProvider';
import useToken from '../hock/useToken';


const SignUp = () => {
  const [error , setError] = useState('')
  const {username , sinUp , googleLogin} = useAuthContext()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  let schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(6).max(20),
    ConformPassword: yup.string().required(),
    email: yup.string().required("Please enter your email !").email(),
  });

const {register, formState: { errors }, handleSubmit,} = useForm({resolver: yupResolver(schema),});
  
const [toekn] = useToken(username)


const onSubmit = async (data) => {
  const { username, email, password, firstName, ConformPassword } = data
    if(password === ConformPassword){
      try {
        await sinUp(email , password , username )
        navigate("/login");
        setError('')
      } catch (error) {
        setError(error.message)
      }
    }else{
      setError("Your password and  conform password don't match")
      swal("Your password and  conform password don't match!");

    }
  };

  const handleGoogleLogin = async()=>{
    await googleLogin()
    // navigate("/login");
  }
  return (
    <>
      <Headers />
      <div className="my-10">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center flex flex-col items-center">
              <h1 className="text-5xl font-bold">Sign Up Now</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem
              </p>
              <img width="200px" src={addUserIcons} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full mb-2 focus:outline-secondary"
                    {...register("username")}
                  />
                     <p className=" text-secondary">{errors.username?.message}</p>
                     <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered w-full mb-2 focus:outline-secondary"
                    {...register("email")}
                  />
                    <p className=" text-secondary">{errors.email?.message}</p>
                     <input
                    type="text"
                    placeholder="Conform password"
                    className="input input-bordered w-full mb-2 focus:outline-secondary"
                    {...register("password")}

                  />
                     <p className=" text-secondary">{errors.ConformPassword?.message}</p>
                
                
         
                  <input
                   
                    type="text"
                    placeholder="password"
                    className="input  input-bordered w-full mb-2 focus:outline-secondary"
                    {...register("ConformPassword")}
                  />
                     <p className=" text-secondary">{errors.password?.message}</p>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <p className="text-secondary text-sm">{error}</p>
                <div className="form-control mt-2">
                  <button className="btn btn-primary text-white">Sign Up</button>
                </div>
                </form>
                <div className="w-[300px]">
                  <GoogleButton
                 style={{width : "320px"}}
                 className="rounded-lg"
                    onClick={handleGoogleLogin}
                  />
                </div>
                <p>AlReady Have a Account ? <NavLink className="text-secondary font-bold text-lg" to="/login">Login</NavLink></p>

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
