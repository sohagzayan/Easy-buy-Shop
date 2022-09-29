import React from "react";
import BusinessSummary from "../components/BusinessSummary/BusinessSummary";
import Capabilities from "../components/Capabilities/Capabilities";
import Fashion from "../components/Fashion/Fashion";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import OurParts from "../components/OurParts/OurParts";
import OurReviewPart from "../components/OurReviewPart/OurReviewPart";
import Repair from "../components/Repair/Repair";

const Home = () => {
  return (
    <>
      <Header />
      <div className="">
        <div className=" ">
          <div className="">
            <div className="container mx-auto px-5 py-3">
              <Hero />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 py-3">
          <Fashion />
          <OurParts />

          <BusinessSummary />
          <Repair />
          {/* <OurReview /> */}
          <OurReviewPart />
          {/* <Capabilities /> */}
          <HowItWorks />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
