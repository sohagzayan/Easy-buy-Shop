import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const UpdateUserProfileModal = ({
  educationU,
  locationU,
  linkDinU,
  username,
}) => {
  // console.log(educationU);
  const [file, setFile] = useState(null);
  const [education, setEducation] = useState(educationU);
  const [location, setLocation] = useState(locationU);
  const [linkDin, setLinkDin] = useState(linkDinU);
  const imagebbKey = "0b8c4fea4eba3001acb5a66d0574e4b5";

  // console.log(education);

  useEffect(() => {
    setEducation(educationU);
    setLocation(locationU);
    setLinkDin(linkDinU);
  }, [educationU, locationU, linkDinU]);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const newPost = {
      education,
      location,
      linkDin,
      image: "",
    };

    try {
      await fetch(`https://easy-buy.onrender.com/api/user/${username.email}`, {
        method: "PUT",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          swal("success to update your profile");
        });
    } catch (error) {
      console.log(error);
    }

    if (file) {
      const fileName = file;
      console.log(file);
      const formData = new FormData();
      formData.append("image", fileName);
      const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`;
      await fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            console.log(result);
            fetch(`https://easy-buy.onrender.com/api/user/${username.email}`, {
              method: "PUT",
              body: JSON.stringify({
                education,
                location,
                linkDin,
                image: result.data.url,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                swal("success to update your profile");
              });
          }
        });
    }
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute bg-secondary text-white border-secondary right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">update Your Details</h3>

          <form onSubmit={handleUpdateUser}>
            <input
              type="file"
              className="my-3"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              required
              readOnly
              s
              value={username?.displayName}
              type="text"
              placeholder="Your Name"
              className="input input-bordered bg-slate-300 text-primary font-bold text-xl input-info w-full mb-4 mt-4"
            />
            <input
              required
              readOnly
              value={username?.email}
              type="email"
              placeholder="Your Email"
              className="input input-bordered input-info w-full bg-slate-300 text-primary  font-bold text-xl   mb-4"
            />
            <input
              required
              onChange={(e) => setEducation(e.target.value)}
              value={education}
              type="text"
              placeholder="Your Education"
              className="input input-bordered input-info  text-primary font-bold text-xl w-full  mb-4"
            />
            <input
              required
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              type="text"
              placeholder="Your Location"
              className="input input-bordered input-info w-full  text-primary font-bold text-xl  mb-4"
            />
            <input
              required
              onChange={(e) => setLinkDin(e.target.value)}
              value={linkDin}
              type="text"
              placeholder="Your LinkDin url"
              className="input input-bordered input-info w-full  text-primary font-bold text-xl mb-4"
            />
            <button className="btn btn-secondary text-white font-bold">
              Update Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfileModal;
