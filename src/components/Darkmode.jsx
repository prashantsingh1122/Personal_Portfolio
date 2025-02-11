import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./DarkMode.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="switch" data-isOn={darkMode} onClick={toggleDarkMode}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default DarkModeToggle;