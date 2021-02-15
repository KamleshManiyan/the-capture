import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

function ContactUs() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
}

export default ContactUs;
