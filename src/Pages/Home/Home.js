import React from "react";
import Achievements from "./Achievements";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import Contact from "./Contact";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools />
      <BusinessSummery />
      <Reviews />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Home;
