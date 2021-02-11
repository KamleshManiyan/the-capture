import React from "react";
import { motion } from "framer-motion";
// Imgaes
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../style";

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>comes true</h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for photography or videography ideas that you have. We have
          professions with amazing skills to help you achieve it.
        </p>
        <button>Contact US</button>
      </Description>
      <Image>
        <img src={home1} alt="Image" />
      </Image>
    </About>
  );
}

// Styled Components

export default AboutSection;
