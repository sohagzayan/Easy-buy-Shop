import React, { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { useAuthContext } from "../context/AuthContextProvider";
import UpdateUserProfileModal from "./UpdateUserProfileModal";

const MyProfile = () => {
  const MF = "https://tranquil-shelf-42201.herokuapp.com/upload/"

  const { username } = useAuthContext();
  const [userP, setUserP] = useState([]);
  useEffect(() => {
    fetch(`https://tranquil-shelf-42201.herokuapp.com/api/user/${username.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserP(data));
  }, [userP]);


// console.log(userP[0]?.image);
  // const { name ,education , location} = userP[0]



  return (
    <div className="p-4 pt-5 flex">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-primary font-bold">My Profile Info</h2>
        <div className="  bg-base-100 flex  shadow-sm">
          <div className="p-6">
            <img
            width="200px"
              src={userP[0]?.image}
              alt="Shoes"
              className="rounded-4"
            />
          </div>

          <div className="card-body  ">
            <ul>
              <li className="mb-2">
                <span className="text-xl font-bold text-primary">Name </span>
                <h2>{username?.displayName}</h2>
              </li>
              <li className="mb-2">
                <span className="text-xl font-bold text-primary">Email</span>
                <h2>{username?.email}</h2>
              </li>
              <li className="mb-2">
                <span className="text-xl font-bold text-primary">
                  Education{" "}
                </span>
                <h2>{userP[0]?.education}</h2>
              </li>

              <li className="mb-2">
                <span className="text-xl font-bold text-primary">
                  location{" "}
                </span>
                <h2>{userP[0]?.location}</h2>
              </li>

              <li className="mb-2 flex items-center mt-4">
                <a href={userP[0]?.linkDin} target="_blank" rel="noreferrer">
                  <FaLinkedinIn className="text-2xl text-primary mr-2" />
                </a>
              </li>
            </ul>
            {/* handleUpdateUser */}
            <label htmlFor="my-modal" className="btn modal-button bg-primary text-white">
              Update Your Details
   
            </label>
            {
              userP.length && 
            <UpdateUserProfileModal  educationU={userP[0]?.education}  image={userP[0]?.image} locationU={userP[0]?.location} linkDinU={userP[0]?.linkDin} setUserP={setUserP}  username={username} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
