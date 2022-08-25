import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import keyImage from "../assets/icons/key.png";
import Footer from "../components/Footer/Footer";
import Headers from "../components/Header/Header";
import { useAuthContext } from "../context/AuthContextProvider";
import useToken from "../hock/useToken";
const SignUp = () => {
  const [error, setError] = useState("");
  const { login, googleLogin, username , ForGotPassWord } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email , setEmail] = useState('')
  
  const [token, isLoading] = useToken(username);

 




  if (token) {
    navigate(from, { replace: true });
  }

  const handleForgotPassword = async(e)=>{
      e.preventDefault()
    console.log(email);
    try {
      
      await ForGotPassWord(email)
      swal("Check Your Gmail please");
      setError('')
    } catch (error) {
      setError(error.message)
    }
    
  } 
  
  
  // ForGotPassWord



  return (
    <>
      <Headers />
      <div className="my-10">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center flex flex-col items-center">
              <h1 className="text-5xl font-bold">ForGot Your Password</h1>
              <p className="py-6">
                forgot your password than check your gmail and set a new password
              </p>
              <img width="200px" src={keyImage} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleForgotPassword}>
                  <input
                      
                    type="email"
                    placeholder="email"
                    className="input input-bordered w-full mb-2 focus:outline-secondary"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                  />
                    <button className="btn btn-primary">Reset</button>
                  <p className="text-secondary text-sm">{error}</p>

                
                </form>

             
                <p>
                  Allready have a password ?{" "}
                  <NavLink
                    className="text-secondary font-bold text-lg"
                    to="/login"
                  >
                    Login
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
