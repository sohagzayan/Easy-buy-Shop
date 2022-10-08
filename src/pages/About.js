import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WatchStyle from "../components/AboutUs/WatchStyle";
import OurJourney from "../components/AboutUs/OurJourney";
import OurTeam from "../components/AboutUs/OurTeam";
const About = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <h2 className="text-2xl font-bold text-own-primary underline  text-center py-10 ">
            ABOUT US
          </h2>
          <div>
            <WatchStyle />
            <OurJourney />
            <OurTeam />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
