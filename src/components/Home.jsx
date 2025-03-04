'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { RotateWords } from "./Rotatewords"; // Adjust the path as necessary
import { LettersPullUp } from "./LettersPullup";
import { ForHeading } from "./ForHeading";
import CardSwitcher from "./CardSwitcher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faThreads ,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

/*import Button from "./Button";*/




const Home = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState(null);

  // Handler to set the active section
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated greeting using RotateWords */}
      <div className="Prashant">
        <RotateWords
          text="Hi, I'm"
          words={["PRASHANT", "Web Developer", "Programmer", "Gamer"]}
        />
      </div>

      {/* Photo and Description Section */}
      <div className="photo_about">
        <div className="textforabout">
          <p className="description">
            A front-end developer with a passion for building seamless digital experiences. With expertise in JavaScript, React, and UI/UX design.
          </p>
        </div>

        <div className="image">
          <img src="/images/portfoliofoto.jpeg" alt="U CAN'T SEE ME" />
        </div>
      </div>

      {/* Action Buttons */}

      
      <div className="CV-button">
      
        <button className="CVbutton" onClick={() => {window.open("https://drive.google.com/file/d/1PxfoBu3I8HbJeCZbhs9qcaUtPG607fgf/view?usp=sharing");}}>
          Download CV
        </button>
      </div>



      {/* About Section */}
      <div className="about">
        <ForHeading text="ABOUT" />
      </div>
      <div className="aboutdivide">
        <div className="image2">
          <img src="/images/photo.png" alt="About Me" />
        </div>
        <div className="written">
          <LettersPullUp text="Hi, I'm Prashant Singh, a United Institute of Technology CSE student
           graduating in 2025. I like to develop websites and web apps,
          passionate about React and Node. Currently crafting my portfolio,
           I've tackled various projects showcasing my skills." />
        </div>
      </div>
      {/* Action Buttons */}
      <div className="button-container">
        <button className={`secbutton ${activeSection === "skills" ? "active" : ""}`} onClick={() => handleSectionClick("skills")}>
          <ForHeading text="SKILLS" />
        </button>
        <button className={`secbutton ${activeSection === "education" ? "active" : ""}`} onClick={() => handleSectionClick("education")}>
          <ForHeading text="EDUCATION" />
        </button>
        <button className={`secbutton ${activeSection === "softskills" ? "active" : ""}`} onClick={() => handleSectionClick("softskills")}>
          <ForHeading text="SOFT-SKILLS" />
        </button>
        <button className={`secbutton ${activeSection === "coursework" ? "active" : ""}`} onClick={() => handleSectionClick("coursework")}>
          <ForHeading text="COURSE WORK" />
        </button>
      </div>

      {/* Buttons to Select Sections */}
      <div className="aboutmeother">
        {activeSection === "skills" && (
          <div className="Skillspart">
            <ul>
              <li><ForHeading text="HTML" /></li>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: "90%" }}></div>
              </div>
              <li><ForHeading text="CSS" /></li>
              <div className="progress-bar-container">
                <div className="progress-bar2" style={{ width: "80%" }}></div>
              </div>
              <li><ForHeading text="JAVASCRIPT" /></li>
              <div className="progress-bar-container">
                <div className="progress-bar3" style={{ width: "85%" }}></div>
              </div>
              <li><ForHeading text="REACT" /></li>
              <div className="progress-bar-container">
                <div className="progress-bar4" style={{ width: "90%" }}></div>
              </div>
            </ul>
          </div>
        )}

        {activeSection === "education" && (
          <div className="Education">
            <ul>
              <li><LettersPullUp text="Ewing Christian Public School" /></li>
              <li><LettersPullUp text="United Institute of Technology" /></li>
            </ul>
          </div>
        )}

        {activeSection === "coursework" && (
          <div className="CourseWork">
            <ul>
              <li><ForHeading text="DBMS" /></li>
              <li><ForHeading text="OS" /></li>
              <li><ForHeading text="CN" /></li>
            </ul>
          </div>
        )}
      </div>

      <div className="Project">
        <div className="image2">

        </div>
      </div>


      {/* -----------------Project----------------- */}

      <div className="Project-section">
        <h1 className="Title-project">
          <ForHeading text="PROJECTS"/></h1>
        <CardSwitcher />

      </div>

        {/* -----------------Contact----------------- */}
        <div className="Contact-section">
  <h1 className="Title">
    <ForHeading text="CONTACT"/>
  </h1>
  
    
    {/* Keep your existing social-card section */}
    <div className="contact-container" >
    
  <div className="social-links">
    <a href="https://github.com/prashantsingh1122" className="social-link">
      <FontAwesomeIcon icon={faGithub} />
      
    </a>
    <a href="https://www.linkedin.com/in/prashant-singh-a40907271/" className="social-link">
      <FontAwesomeIcon icon={faLinkedin} />
      
    </a>
    <a href="https://www.threads.net/@_rajput__1122" className="social-link">
    <FontAwesomeIcon icon={faThreads} />
      
    </a>
    <a href="prashantsingh3517@gmail.com" className="social-link">
      <FontAwesomeIcon icon={faEnvelope} />
      
    </a>
    <a href="hhttps://www.instagram.com/_rajput__1122/" className="social-link">
    <FontAwesomeIcon icon={faInstagram} />
       
      </a>
  </div>
  </div>
</div>



{/* -----------------BEYOND CODE----------------- */}
<div className="Beyond-section">
  <h1 className="Title-beyond">
  <ForHeading text={"BEYOND CODE"} />
 </h1> 
    
  </div>
    </motion.div>
  );
};

export default Home;
