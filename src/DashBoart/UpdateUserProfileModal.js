import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from 'sweetalert';

const UpdateUserProfileModal = ({ educationU, locationU , linkDinU, username , setUserP ,image}) => {
  
  // console.log(educationU);
  const [file , setFile] = useState(null)
  const [profileImage , setProfileImage] = useState('')
    const [education , setEducation] = useState(educationU)
    const [location , setLocation] = useState(locationU)
    const [linkDin , setLinkDin] = useState(linkDinU)
    // console.log(education);
    

    useEffect(()=>{
      setEducation(educationU)
      setLocation(locationU)
      setLinkDin(linkDinU)
      setProfileImage(image)
    },[educationU ,locationU , linkDinU])
    
    const handleUpdateUser = async (e) => {
        e.preventDefault()
          const newPost = {
            education,
            location,
            linkDin,
            image : profileImage
          }
        
        if (file) {
   
          const data = new FormData();
          const fileName = Date.now() + file.name;
          data.append("name", fileName);
          data.append("file", file);
          // newPost.image = fileName;
    
          try {
      
            const imgInfo = await axios.post("https://tranquil-shelf-42201.herokuapp.com/upload/", data);
          } catch (error) {
           console.log(error) 
          }
        }


        try {
          await fetch(`https://tranquil-shelf-42201.herokuapp.com/api/user/${username.email}`, {
            method: "PUT",
            body: JSON.stringify(newPost),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setUserP([])
              swal("success to update your profile");
            });
    
        } catch (error) {
         console.log(error);      
        }








      await fetch(`https://tranquil-shelf-42201.herokuapp.com/api/user/${username.email}`, {
        method: "PUT",
        body: JSON.stringify({
          education,
          location,
          linkDin
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
  };


  return (
    <div>
    
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
        <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute bg-secondary text-white border-secondary right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-center">
            update Your Details
          </h3>
        
        <form onSubmit={handleUpdateUser}>
        <label className="text-lg text-primary font-bold px-2" htmlFor="/">Profile image url</label>
           <input value={profileImage} className="input input-bordered bg-slate-300 text-primary font-bold text-xl input-info w-full mb-1 mt-1"  type="text" required  onChange={(e)=> setProfileImage(e.target.value)} placeholder="Profile Image" />
           {/* <label className="text-lg text-primary font-bold px-2" htmlFor="/">Name</label> */}
            <input required  readOnly s value={username?.displayName} type="text" placeholder="Your Name" className="input input-bordered bg-slate-300 text-primary font-bold text-xl input-info w-full mb-1 mt-1" />
            {/* <label className="text-lg text-primary font-bold px-2" htmlFor="/">Email</label> */}
            <input required readOnly value={username?.email} type="email" placeholder="Your Email" className="input input-bordered input-info w-full bg-slate-300 text-primary  font-bold text-xl   mb-1" />
            {/* <label className="text-lg text-primary font-bold px-2" htmlFor="/">Education</label> */}
            <input required  onChange={(e)=> setEducation(e.target.value)} value={education} type="text" placeholder="Your Education" className="input input-bordered input-info  text-primary font-bold text-xl w-full  mb-1" />
            {/* <label className="text-lg text-primary font-bold px-2" htmlFor="/">Location</label> */}
            <input required  onChange={(e)=> setLocation(e.target.value)} value={location} type="text" placeholder="Your Location" className="input input-bordered input-info w-full  text-primary font-bold text-xl  mb-1" />
            <label className="text-lg text-primary font-bold px-2" htmlFor="/">Linkedin url</label>
            <input required  onChange={(e)=> setLinkDin(e.target.value)} value={linkDin} type="text" placeholder="Your LinkDin url" className="input input-bordered input-info w-full  text-primary font-bold text-xl mb-1" />
            <button className="btn btn-secondary text-white font-bold">Update Details</button>
        </form>
        
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfileModal;
