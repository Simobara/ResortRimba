import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="lose yourself.. to find Yourself">
            
              <div className="banner1"><h5><span>THE </span><span>I</span><span>M</span><span>POSSIBLE</span></h5></div>
            
          <Link to="/rooms" className="btn-primary">
            >
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;