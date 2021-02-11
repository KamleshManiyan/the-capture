import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import image1 from "../image/11.jpg";
import image2 from "../image/14.jpg";
import image3 from "../image/13.jpg";
// import image2 from "../img/theracer-small.png";
// import image3 from "../img/goodtimes-small.png";

function OurWork() {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={image1} alt="" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={image2} alt="" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={image3} alt="" />
        </Link>
      </Movie>
    </Work>
  );
}
const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    background: #cccccc;
    height: 0.5rem;
    margin-bottom: 3rem;
    width: 100%;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
