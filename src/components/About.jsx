import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>I am a front-end developer passionate about creating beautiful and functional websites.</p>
    </motion.div>
  );
};

export default About;