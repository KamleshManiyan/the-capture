import React from "react";
import { motion } from "framer-motion";
// Imgaes
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../style";
import { titleAnim, fade, imgAnim } from "../pages/Animation";
import Wave from "./Wave";

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>comes true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for photography or videography ideas that you have. We have
          professions with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact US</motion.button>
      </Description>
      <Image>
        <motion.img variants={imgAnim} src={home1} alt="Image" />
      </Image>
      <Wave />
    </About>
  );
}

// Styled Components

export default AboutSection;
