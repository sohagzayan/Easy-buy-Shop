import React from "react";

const EmailNotifecation = () => {
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-between items-center text-own-primary font-semibold">
            <h3 className="text-own-white">Alerts & Notifications</h3>
            <h3>Toggle all</h3>
          </div>
          <hr className="border-[1px] border-[#ffffff36] mt-2" />
          <div className="mt-4">
            <span className="text-own-white mb-3 inline-block">Send me:</span>
            <div>
              <input type="checkbox" className="mr-2" />
              <label htmlFor="" className="text-own-white">
                Dribbble Communication
              </label>
              <p className="text-own-white text-sm my-3">
                Get Dribbble news, announcements, and product updates
              </p>
              <hr />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-own-white mb-3 inline-block">Send me:</span>
            <div>
              <input type="checkbox" className="mr-2" />
              <label htmlFor="" className="text-own-white">
                Account Activity
              </label>
              <p className="text-own-white text-sm my-3">
                Get important notifications about you or activity you've missed
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailNotifecation;
