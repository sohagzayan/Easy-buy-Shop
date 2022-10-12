import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
const SocialProfile = () => {
  return (
    <div>
      <div>
        <form action="">
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="Twitter"
          >
            Twitter <span className="text-own-primary">*</span>
          </label>
          <input
            id="Twitter"
            type="text"
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-secondary dark:text-own-white"
          />
          <button className="bg-[#1da1f2] px-6 py-2 rounded-md text-own-secondary dark:text-own-white flex items-center mt-2">
            <FaTwitter className="mr-1" /> Connect to Twitter
          </button>
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="Facebook"
          >
            Facebook <span className="text-own-primary">*</span>
          </label>
          <input
            id="Facebook"
            type="text"
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-secondary dark:text-own-white"
          />
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="Facebook"
          >
            Google <span className="text-own-primary">*</span>
          </label>
          <button className="bg-[#1da1f2] px-6 py-2 rounded-md text-own-secondary dark:text-own-white flex items-center mt-2">
            <AiOutlineGoogle className="mr-1" /> Connect to Google
          </button>
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="linkedin"
          >
            Linkedin <span className="text-own-primary">*</span>
          </label>
          <input
            id="linkedin"
            type="text"
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-secondary dark:text-own-white"
          />
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="GitHub"
          >
            GitHub <span className="text-own-primary">*</span>
          </label>
          <input
            id="GitHub"
            type="text"
            placeholder=""
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-secondary dark:text-own-white"
          />
        </form>
      </div>
    </div>
  );
};

export default SocialProfile;
