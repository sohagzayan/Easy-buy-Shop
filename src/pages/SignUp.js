import React from "react";
import GoogleButton from "react-google-button";
import { NavLink } from "react-router-dom";
import addUserIcons from "../assets/icons/add-user.png";
import Footer from "../components/Footer/Footer";
import Headers from "../components/Header/Header";

const SignUp = () => {
  return (
    <>
      <Headers />
      <div className="my-10">
        <div class="hero ">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center flex flex-col items-center">
              <h1 class="text-5xl font-bold">Sign Up Now</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem
              </p>
              <img width="200px" src={addUserIcons} alt="" />
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <div class="form-control">
                  <input
                    type="text"
                    placeholder="Your Name"
                    class="input input-bordered focus:outline-secondary"
                  />
                </div>
                <div class="form-control">
                  <input
                    type="text"
                    placeholder="email"
                    class="input input-bordered focus:outline-secondary"
                  />
                </div>
                <div class="form-control">
                  <input
                    type="text"
                    placeholder="Conform password"
                    class="input input-bordered focus:outline-secondary"
                  />
                </div>
                <div class="form-control ">
                  <input
                   
                    type="text"
                    placeholder="password"
                    className="input  input-bordered focus:outline-secondary"
                  />
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <p className="text-secondary text-sm">Error sms Here</p>
                <div class="form-control mt-2">
                  <button class="btn btn-primary">Login</button>
                </div>
                <div className="w-[300px]">
                  <GoogleButton
                 style={{width : "320px"}}
                 className="rounded-lg"
                    onClick={() => {
                      console.log("Google button clicked");
                    }}
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
