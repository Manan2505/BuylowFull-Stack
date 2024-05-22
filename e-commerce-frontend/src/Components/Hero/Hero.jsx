import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Lowest Costs</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Best</p>
            {/* <img src={hand_icon} alt="" /> */}
          </div>
          <p>Deals for</p>
          <p> everyone</p>
        </div>
        <div className="hero-latest-btn">
          <Link to='/LatestCollections'><div className="hero-button">Latest Collection</div>
          </Link>
          {/* <Link to='/Exploremore'><button className="hero-button">Latest Collection</button></Link> */}
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
