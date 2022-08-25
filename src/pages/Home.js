import React from "react";
import BusinessSummary from "../components/BusinessSummary/BusinessSummary";
import Capabilities from "../components/Capabilities/Capabilities";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import OpeningTable from "../components/OpaningTable/OpaingTable";
import OurParts from "../components/OurParts/OurParts";
import OurReviewPart from "../components/OurReviewPart/OurReviewPart";

const Home = () => {
  return (
    <>
        <Header />
 
    <div className="">
      <div className=" ">
        <div className="hero-wrapper">
      
          <div className="container mx-auto px-5 py-3">
            <Hero />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 py-3">
        <OurParts />
        <BusinessSummary />
        {/* <OurReview /> */}
        <OurReviewPart />
        <Capabilities />
        <OpeningTable />
        <Footer />
      </div>
    </div>
    </>
  );
};

export default Home;
