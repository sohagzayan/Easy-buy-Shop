import React from "react";
import BusinessSummary from "../components/BusinessSummary/BusinessSummary";
import Capabilities from "../components/Capabilities/Capabilities";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import OurParts from "../components/OurParts/OurParts";
import OurReview from "../components/OurReview/OurReview";

const Home = () => {
  return (
    <div className="">
      <div className=" ">
        <div className="hero-wrapper">
          <div className="container mx-auto px-5 py-3">
            <Header />
            <Hero />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 py-3">
        <OurParts />
        <BusinessSummary />
        <OurReview />
        <Capabilities />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
