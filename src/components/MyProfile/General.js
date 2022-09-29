import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useCurrentUserQuery } from "../../store/API/user";

const General = () => {
  /** Hocks  */
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  /** Current User Info */
  const userId = Cookies.get("id");
  const response = useCurrentUserQuery(userId);
  // console.log(response?.data?.currentuser[0]);

  useEffect(() => {
    setUsername(response?.data?.currentuser[0]?.username);
    setEmail(response?.data?.currentuser[0]?.email);
  }, [response]);

  /** Handle Update User user name also user email */
  const handleGeneralUserUpdate = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `http://localhost:5000/api/v1/user/user/${response?.data?.currentuser[0]?._id}`,
        {
          username: username,
          email: email,
        }
      )
      .then((res) => {
        alert("success");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <form action="" onSubmit={handleGeneralUserUpdate}>
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="username"
          >
            Username <span className="text-own-primary">*</span>
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-secondary dark:text-own-white"
          />
          <label
            className="text-own-secondary dark:text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="email"
          >
            Email <span className="text-own-primary">*</span>
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-secondary dark:text-own-white"
          />
          <div className="my-4 text-own-secondary dark:text-own-white">
            <h3 className="mb-2">
              Disable ads{" "}
              <span className="uppercase bg-[#FF5555]  ml-3  text-sm px-1 rounded-md">
                pro
              </span>
            </h3>
            <p>
              With a <span className="text-[#FF5555]">Pro</span> or{" "}
              <span className="text-[#FF5555]">Pro Business</span> account, you
              can disable ads across the site.
            </p>
          </div>
          <div className="flex justify-end">
            <button className="bg-own-primary text-own-secondary dark:text-own-white px-3 py-2 rounded-md ">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default General;
