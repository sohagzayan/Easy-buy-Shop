import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import bannerImage from "../assets/services-details.jpg";
import videoImage from "../assets/video-bg.jpg";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { FiCheckCircle } from "react-icons/fi";
const ServicesDetails = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <div>
            <h2 className="text-2xl text-center font-bold text-own-secondary dark:text-own-white py-7">
              Services Details
            </h2>
            <div className=" container_c mx-auto gap-12 grid grid-cols-12">
              <div className="md:col-span-8 col-span-12">
                <img src={bannerImage} alt="" />
                <h2 className="text-2xl mt-4 dark:text-own-white text-own-secondary font-bold">
                  Services Details
                </h2>
                <p className="text-own-text-light dark:text-own-text-dark">
                  Phosfluorescently disseminate magnetic e-business for
                  user-centric "outside the box" thinking. Compellingly
                  integrate client-based synergy after cutting-edge solutions.
                  Objectively foster economically sound partnerships with timely
                  meta-services. Globally develop market positioning methods of
                  empowerment before ubiquitous niches. Energistically build
                  extensive experiences after real-time channels.{" "}
                  <br className="" />
                  Seamlessly coordinate high-quality functionalities and
                  bricks-and-clicks methods of empowerment. Authoritatively
                  cultivate adaptive bandwidth and collaborative intellectual
                  capital. Uniquely build open-source experiences without market
                  positioning customer service. Dramatically strategize resource
                  sucking outsourcing through state of the art vortals. Quickly
                  <br className="" />
                  aggregate enterprise portals with cross-platform e-business.
                  Enthusiastically matrix future-proof internal or "organic"
                  sources through covalent communities. Synergistically incubate
                  reliable metrics whereas client-focused technologies.
                  Completely embrace multifunctional scenarios without
                  orthogonal benefits. Competently enhance equity invested data
                  with performance based niches. Assertively aggregate
                  professional catalysts for change without emerging metrics.
                </p>
                <div className="grid mt-10 grid-cols-2 gap-4 items-center">
                  <div>
                    <img src={videoImage} alt="" />
                  </div>
                  <ul>
                    <li className="flex mb-2 items-center gap-3 text-own-secondary dark:text-own-white">
                      {" "}
                      <FiCheckCircle className="text-own-primary" /> Foreclosure
                      consultant Human consulting
                    </li>
                    <li className="flex mb-2 items-center gap-3 text-own-secondary dark:text-own-white">
                      {" "}
                      <FiCheckCircle className="text-own-primary" /> Corporate
                      Immigration, Information
                    </li>
                    <li className="flex mb-2 items-center gap-3 text-own-secondary dark:text-own-white">
                      {" "}
                      <FiCheckCircle className="text-own-primary" /> SEO
                      Optimization consultant
                    </li>
                    <li className="flex mb-2 items-center gap-3 text-own-secondary dark:text-own-white">
                      {" "}
                      <FiCheckCircle className="text-own-primary" /> Rapidiously
                      conceptualize communities
                    </li>
                    <li className="flex mb-2 items-center gap-3 text-own-secondary dark:text-own-white">
                      {" "}
                      <FiCheckCircle className="text-own-primary" /> Consultant
                      pharmacist Creative consultant
                    </li>
                    <li className="flex mb-2 items-center gap-3 text-own-secondary dark:text-own-white">
                      {" "}
                      <FiCheckCircle className="text-own-primary" />{" "}
                      Monotonectally customize competencies
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-4 col-span-12">
                <h3 className="text-own-secondary font-bold text-2xl dark:text-own-white mb-3">
                  All Services
                </h3>
                <ul className="text-own-secondary dark:text-own-white">
                  <li className="border-b-[1px] mb-2 py-1 border-own-text-light dark:border-own-text-dark">
                    Financial Services Consulting
                  </li>
                  <li className="border-b-[1px] mb-2 py-1 border-own-text-light dark:border-own-text-dark">
                    Consumer Product Consulting
                  </li>
                  <li className="border-b-[1px] mb-2 py-1 border-own-text-light dark:border-own-text-dark">
                    Global Consumer insights
                  </li>
                  <li className="border-b-[1px] mb-2 py-1 border-own-text-light dark:border-own-text-dark">
                    Independent contractor
                  </li>
                  <li className="border-b-[1px] mb-2 py-1 border-own-text-light dark:border-own-text-dark">
                    Creative Idea Development
                  </li>
                  <li className="border-b-[1px] mb-2 py-1 border-own-text-light dark:border-own-text-dark">
                    Social Media Marketing
                  </li>
                </ul>
                <h3 className="text-own-secondary font-bold text-2xl dark:text-own-white mb-3 mt-10">
                  Need Help?
                </h3>
                <p className="text-own-text-light dark:own-text-dark">
                  We are available in 24/7 hours for dedicated support
                </p>
                <ul className="dark:text-own-white text-own-secondary">
                  <li className="flex items-center gap-3 mb-2 mt-5">
                    <span>
                      <MdOutlineLocationOn />
                    </span>
                    123 Yellow House, Mn 9007
                  </li>
                  <li className="flex items-center gap-3 mb-2">
                    <span>
                      <HiPhone />
                    </span>
                    (+123) 456-789-012
                  </li>
                  <li className="flex items-center gap-3">
                    <span>
                      <HiOutlineMail />
                    </span>
                    youname@domail.com
                  </li>
                </ul>
                <h2 className="text-own-secondary font-bold text-2xl dark:text-own-white mb-3 mt-10">
                  Newsletter
                </h2>
                <p className="text-own-text-light dark:text-own-text-dark">
                  Enter your email address below to subscribe to my newsletter
                </p>
                <input
                  className="w-full border-[1px] border-own-primary py-2 px-4 rounded-md mt-5 bg-own-white-special dark:bg-own-dark-bg-special"
                  type="text"
                  placeholder="info@gmail.com"
                />
                <button className="mt-4 bg-own-primary text-own-white w-full py-3 rounded-md  font-bold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesDetails;
