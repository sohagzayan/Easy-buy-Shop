import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
const SocialProfile = () => {
  return (
    <div>
      <div>
        <form action="">
          <label
            className="text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="Twitter"
          >
            Twitter
          </label>
          <input
            id="Twitter"
            type="text"
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-white"
          />
          <button className="bg-[#1da1f2] px-6 py-2 rounded-md text-own-white flex items-center mt-2">
            <FaTwitter className="mr-1" /> Connect to Twitter
          </button>
          <label
            className="text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="Facebook"
          >
            Facebook
          </label>
          <input
            id="Facebook"
            type="text"
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-white"
          />
          <label
            className="text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="Facebook"
          >
            Google
          </label>
          <button className="bg-[#1da1f2] px-6 py-2 rounded-md text-own-white flex items-center mt-2">
            <AiOutlineGoogle className="mr-1" /> Connect to Google
          </button>
          <label
            className="text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="linkedin"
          >
            Linkedin
          </label>
          <input
            id="linkedin"
            type="text"
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-white"
          />
          <label
            className="text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="GitHub"
          >
            GitHub
          </label>
          <input
            id="GitHub"
            type="text"
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-white"
          />
        </form>
      </div>
    </div>
  );
};

export default SocialProfile;
