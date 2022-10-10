import React from "react";
import AddShoopReview from "../components/AddShoopReview/AddShoopReview";
import BusinessSummary from "../components/BusinessSummary/BusinessSummary";
import Fashion from "../components/Fashion/Fashion";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import ManageYourBusiness from "../components/ManageYourBusiness/ManageYourBusiness";
import OurParts from "../components/OurParts/OurParts";
import Repair from "../components/Repair/Repair";
import ShopReview from "../components/ShopReview/ShopReview";
import StartYourBusiness from "../components/StartYourBusiness/StartYourBusiness";

const Home = () => {
  return (
    <>
      <Header />
      <div className="">
        <div className=" ">
          <div className="dark:bg-own-dark-bg-special bg-own-white-special ">
            <div className="container_c mx-auto  py-3">
              <Hero />
            </div>
          </div>
        </div>
        <div className=" py-3">
          <StartYourBusiness />
          <ManageYourBusiness />
          <Fashion />
          <OurParts />
          <BusinessSummary />
          <Repair />
          <ShopReview />
          <AddShoopReview />
          {/* <Capabilities /> */}
          <HowItWorks />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
