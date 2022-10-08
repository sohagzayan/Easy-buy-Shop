import React from "react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Contactus = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <h2 className="text-3xl text-own-secondary dark:text-own-white font-bold text-center mb-10 py-6">
            Contact Us
          </h2>
          <div className=" container_c mx-auto mt-10 relative after:absolute after:pointer-events-none  after:w-full after:h-full after:top-0 after:left-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29182.018106332016!2d90.30992364150786!3d23.898401945496683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c25a71cf5873%3A0xd64e6f32619e3132!2sAshulia!5e0!3m2!1sen!2sbd!4v1664696122993!5m2!1sen!2sbd"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="md:px-10 ">
            <div className=" container_c mx-auto flex lg:flex-row flex-col gap-16 ">
              <div className=" text-own-white bg-own-white-special shadow-md p-5 rounded-md dark:bg-own-dark-bg-special ">
                <h3 className="font-bold text-own-secondary  dark:text-own-white text-2xl mb-3">
                  Our Contacts & Location
                </h3>
                <p className="mb-10 text-own-text-light dark:text-own-text-dark text-sm">
                  Business consulting excepteur sint occaecat cupidatat
                  consulting non proident.
                </p>
                <h3 className="font-bold text-own-secondary  dark:text-own-white text-2xl mb-3">
                  Opening hours
                </h3>
                <p className="  text-own-text-light dark:text-own-text-dark text-sm">
                  Daily: 8.30 AM–8.00 PM
                </p>
                <p className="mb-10  text-own-text-light dark:text-own-text-dark text-sm">
                  Sunday & Holidays: Closed
                </p>
                <h3 className="font-bold text-own-secondary  dark:text-own-white text-2xl mb-3">
                  Contact info
                </h3>
                <p className="mb-10 text-own-text-light dark:text-own-text-dark text-sm">
                  3909 Witmer Rd, Niagara Falls, NY 14305, United States
                  gomeetup@gmail.com (+12)123-456-789
                </p>
                <div>
                  <h3 className="font-bold text-own-secondary  dark:text-own-white text-2xl mb-3">
                    Social contact
                  </h3>
                  <div className="flex gap-4">
                    <span className="bg-own-primary text-oen-white p-2 rounded-md ">
                      <FaFacebookF />
                    </span>
                    <span className="bg-own-primary text-oen-white p-2 rounded-md ">
                      <AiOutlineTwitter />
                    </span>
                    <span className="bg-own-primary text-oen-white p-2 rounded-md ">
                      <AiFillLinkedin />
                    </span>
                    <span className="bg-own-primary text-oen-white p-2 rounded-md ">
                      <FaPinterestP />
                    </span>
                  </div>
                </div>
              </div>
              <div className=" bg-own-white-special dark:bg-own-dark-bg-special shadow-md p-5 rounded-md ">
                <h3 className="dark:text-own-white text-own-secondary font-bold text-2xl mb-1">
                  Get in Touch
                </h3>
                <p className="text-own-text-light dark:text-own-text-dark  mb-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
                <form action="">
                  <div className="flex justify-between lg:gap-10">
                    <input
                      className="w-full focus:outline-own-primary bg-own-white-special border-[1px] border-own-text-dark dark:bg-own-dark-bg-special px-4 py-2 rounded-md mb-5"
                      type="text"
                      placeholder="Your Name"
                    />
                    <input
                      className="w-full focus:outline-own-primary bg-own-white-special border-[1px] border-own-text-dark dark:bg-own-dark-bg-special px-4 py-2 rounded-md mb-5"
                      type="text"
                      placeholder="Your Subject"
                    />
                  </div>
                  <div className="flex justify-between items-center gap-10">
                    <input
                      className="w-full focus:outline-own-primary bg-own-white-special border-[1px] border-own-text-dark dark:bg-own-dark-bg-special px-4 py-2 rounded-md mb-5"
                      type="text"
                      placeholder="Your Email"
                    />
                    <input
                      className="w-full focus:outline-own-primary bg-own-white-special border-[1px] border-own-text-dark dark:bg-own-dark-bg-special px-4 py-2 rounded-md mb-5"
                      type="text"
                      placeholder="Your Phone"
                    />
                  </div>
                  <textarea
                    className="w-full focus:outline-own-primary bg-own-white-special border-[1px] border-own-text-dark dark:bg-own-dark-bg-special px-4 py-2 rounded-md mb-5"
                    placeholder="You Message"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <button className="bg-own-primary text-own-white px-3 py-2 font-bold rounded-md">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
