import React from "react";

const EditProfileInfo = () => {
  return (
    <div>
      <div>
        <form action="">
          <label
            className="text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="name"
          >
            Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-white"
          />
          <label
            className="text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="location"
          >
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-white"
          />
          <label
            className="text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="bio"
          >
            Bio
          </label>
          <textarea
            id="bio"
            type="text"
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-white"
          />
          <h3 className="text-own-white mt-3">ONLINE PRESENCE</h3>
          <hr className="border-own-text mt-1" />
          <label
            className="text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="website"
          >
            Personal website
          </label>
          <input
            id="website"
            type="text"
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-white"
          />
        </form>
      </div>
    </div>
  );
};

export default EditProfileInfo;
