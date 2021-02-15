import React from "react";
import styled from "styled-components";
import { About } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { fade } from "../pages/Animation";
import { motion } from "framer-motion";

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How DO I Start?">
          <motion.div className="answer" variants={fade}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </motion.div>
        </Toggle>
        <Toggle title="Daliy Schedule?">
          <motion.div className="answer" variants={fade}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              suscipit soluta enim amet?
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="Different Payment Methods?">
          <motion.div className="answer" variants={fade}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              impedit, illo harum voluptatibus voluptatem exercitationem! Est
              velit asperiores vel cum.
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <motion.div className="answer" variants={fade}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio perferendis ullam soluta officiis dignissimos illum
              doloribus explicabo expedita?
            </p>
          </motion.div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
