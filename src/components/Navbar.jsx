import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./DarkMode.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <nav className="Navbar">
      <ul>
        <li><Link to="home" smooth={true} duration={500}>HOME</Link></li>
        <li><Link to="about" smooth={true} duration={500}>ABOUT</Link></li>
        <li><Link to="Project-section" smooth={true} duration={1100}>PROJECT</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      <div className="switch" data-isOn={darkMode} onClick={toggleDarkMode}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </nav>
  );
};

export default Navbar;