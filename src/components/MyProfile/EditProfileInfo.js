import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";
import {
  useCurrentUserQuery,
  useLazyCurrentUserQuery,
} from "../../store/API/user";

const EditProfileInfo = () => {
  /** Hocks  */
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [personalWeb, setPersonalWeb] = useState("");
  const [file, setFile] = useState(null);
  const imagebbKey = "0b8c4fea4eba3001acb5a66d0574e4b5";
  const [pictureUpdateMode, setPictureUpdateMode] = useState(false);
  /** Current User Info */
  const userId = Cookies.get("id");
  const response = useCurrentUserQuery(userId);

  useEffect(() => {
    setName(response?.data?.currentuser[0].name);
    setLocation(response?.data?.currentuser[0].country);
    setBio(response?.data?.currentuser[0].bio);
    setPersonalWeb(response?.data?.currentuser[0].personalSite);
  }, [response]);

  /** Handle Update User */

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `http://localhost:5000/api/v1/user/user/${response?.data?.currentuser[0]?._id}`,
        {
          name: name,
          country: location,
          bio: bio,
          personalWeb: personalWeb,
        }
      )
      .then((res) => {
        toast.success("Change SuccessFull", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };

  const handleuploadPicture = async (e) => {
    if (file) {
      const fileName = file;
      const formData = new FormData();
      formData.append("image", fileName);
      const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`;
      await axios
        .post(url, formData)
        .then((result) => {
          if (result?.data?.success) {
            console.log("come inner");
            axios
              .put(
                `http://localhost:5000/api/v1/user/user/${response?.data?.currentuser[0]?._id}`,
                { image: result?.data?.data?.url }
              )
              .then((res) => {
                toast.success("success to update your profile", {
                  position: toast.POSITION.TOP_CENTER,
                });
                window.location.reload(true);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((error) => {
          toast.error(error.message, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        });
    } else {
      toast.error("Selected image", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const defaultPictureSet = () => {
    axios
      .put(
        `http://localhost:5000/api/v1/user/user/${response?.data?.currentuser[0]?._id}`,
        { image: "https://i.ibb.co/ZK5CBDW/demouser.png" }
      )
      .then((res) => {
        toast.success("Change Successfull", {
          position: toast.POSITION.TOP_CENTER,
        });
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };

  return (
    <div>
      <div>
        <div className="flex items-center">
          <img
            className="w-[80px] rounded-full mr-10 border-[5px] border-own-white-special dark:border-own-dark-bg-special"
            src={response?.data?.currentuser[0].image}
            alt=""
          />
          <div className="flex">
            {pictureUpdateMode ? (
              <div className="flex flex-col">
                <button className="inline-block mb-2 bg-[#FF557B] text-own-secondary dark:text-own-white px-6 rounded-md w-[100px]">
                  Delete
                </button>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="mb-2 text-own-secondary dark:text-own-white"
                />
                <p className="text-own-secondary dark:text-own-white text-sm my-2">
                  JPG, GIF or PNG. Max size of 800K
                </p>
                <button
                  onClick={() => handleuploadPicture()}
                  className={
                    file
                      ? "btn-animation text-sm flex items-center justify-center  ml-0"
                      : "btn-animation text-sm flex items-center justify-center opacity-50 pointer-events-none ml-0"
                  }
                >
                  Upload Now
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <button
                  onClick={() => setPictureUpdateMode(true)}
                  className="px-6 block py-2 rounded-md  bg-own-primary text-own-white border-none  dark:text-own-white mr-10"
                >
                  Upload new Picture
                </button>
                <button
                  onClick={defaultPictureSet}
                  className="block  bg-own-soft-red text-own-white  dark:text-own-white px-6 rounded-md py-2"
                >
                  Reset Picture
                </button>
              </div>
            )}
          </div>
        </div>
        <form action="">
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="name"
          >
            Name <span className="text-own-primary">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-secondary dark:text-own-white"
          />
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="location"
          >
            Location <span className="text-own-primary">*</span>
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-secondary dark:text-own-white"
          />
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="bio"
          >
            Bio <span className="text-own-primary">*</span>
          </label>
          <textarea
            id="bio"
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-secondary dark:text-own-white"
          />
          <h3 className="text-own-secondary dark:text-own-white mt-3">
            ONLINE PRESENCE
          </h3>
          <hr className="border-own-text mt-1" />
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="website"
          >
            Personal website <span className="text-own-primary">*</span>
          </label>
          <input
            id="website"
            type="text"
            value={personalWeb}
            onChange={(e) => setPersonalWeb(e.target.value)}
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-secondary dark:text-own-white"
          />
          <div className="flex justify-end mt-6">
            <button
              onClick={handleUpdateProfile}
              className="bg-own-primary text-own-white dark:text-own-white px-3 py-2 rounded-md "
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileInfo;
