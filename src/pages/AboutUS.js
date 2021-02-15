import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

function AboutUS() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="aboutUS"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
}

export default AboutUS;
