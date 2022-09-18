import React from "react";

const General = () => {
  return (
    <div>
      <div>
        <form action="">
          <label
            className="text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="username"
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-white"
          />
          <label
            className="text-own-white cursor-pointer mt-6 inline-block mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="email"
            className="w-full py-2 px-3 bg-transparent border-[1px] border-own-primary rounded-md text-own-white"
          />
        </form>
        <div className="my-4 text-own-white">
          <h3>Disable ads</h3>
          <p>
            With a Pro or Pro Business account, you can disable ads across the
            site.
          </p>
        </div>
        <div className="flex justify-end">
          <button className="bg-own-primary text-own-white px-3 py-2 rounded-md ">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default General;
