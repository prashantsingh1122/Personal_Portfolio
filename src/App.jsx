import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
/*import Button from "./components/Button";*/
/*import ThreeDModel from './components/threeD';
*/
import './styles/App.css'; // Adjust the path if needed
import './styles/About.css'; // Adjust the path if needed
import './styles/Project.css';
import './components/DarkMode.css'; // Import Dark Mode styles as well
import './styles/Contact.css';

const App = () => {
  return (
    <Router>
      
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      
     
    </Router>
  );
};

export default App;