import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import demouser from ".././assets/demouser.png";
import General from "../components/MyProfile/General";
import EditProfileInfo from "../components/MyProfile/EditProfileInfo";
import SocialProfile from "../components/MyProfile/SocialProfile";

const EditProfile = () => {
  return (
    <>
      <Header />
      <div>
        <div className="w-[70%] mx-auto py-8">
          <div className="flex  items-center justify-between">
            <div className="flex items-center">
              <img className="w-[50px]" src={demouser} alt="" />
              <div>
                <h3 className="text-own-primary text-xl mb-1">
                  MD Sohag / Edit Profile
                </h3>
                <p className="text-own-text">
                  Set up your Qulality Coookie presence and hiring needs
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col border-2 border-own-primary p-2 rounded-md border-dashed">
              <h2 className="text-own-white text-2xl">
                Go <span className="text-own-primary">Pro</span>
              </h2>
              <p className="text-own-white">
                Add power features for just $5/month
              </p>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-12 gap-10">
            <div className="col-span-3">
              <ul className="text-own-white ">
                <li className="mb-2">General</li>
                <li className="mb-2">Edit Profile</li>
                <li className="mb-2">Social Profile</li>
                <hr className="border-own-text mb-2 mt-2" />
                <li className="mb-1 text-[#FF557B]">Delete Account</li>
              </ul>
            </div>
            <div className="col-span-9">
              <div className="flex items-end">
                <img className="w-[80px]" src={demouser} alt="" />
                <button className="px-6 py-2 rounded-md  bg-own-primary border-none text-own-white mr-10">
                  Upload new picture
                </button>
                <button className="text-own-white bg-[#FF557B]  px-6 py-2 rounded-md">
                  Delete
                </button>
              </div>
              {/* <General /> */}
              {/* <EditProfileInfo /> */}
              <SocialProfile />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
