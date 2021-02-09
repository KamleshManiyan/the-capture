import React from "react";
// Imgaes
import home1 from "../img/home1.png";

function AboutSection() {
  return (
    <div className="aboutSection">
      <div className="aboutSection__description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>comes true</h2>
          </div>
        </div>
        <p>
          Contact us for photography or videography ideas that you have. We have
          professions with amazing skills to help you achieve it.
        </p>
        <button>Contact US</button>
      </div>
      <div className="aboutSection__img">
        <img src={home1} alt="Image" />
      </div>
    </div>
  );
}

export default AboutSection;
