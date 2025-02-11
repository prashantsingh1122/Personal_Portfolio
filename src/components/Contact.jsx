import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact Me</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Message:</label>
        <textarea placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </form>
    </motion.div>
  );
};

export default Contact;