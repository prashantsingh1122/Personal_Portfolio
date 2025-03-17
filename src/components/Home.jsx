'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { RotateWords } from "./Rotatewords"; // Adjust the path as necessary
import { LettersPullUp } from "./LettersPullup";
import { ForHeading } from "./ForHeading";
import CardSwitcher from "./CardSwitcher";
import TiltedCard from "./TiltedCard";
import GridMotion from "./GridMotion";
import Aurora from "./Aurora";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faThreads,
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
  const tiltedCardData = [
    {
      imageSrc: "/images/controller.jpeg",
      altText: "Controller",
      captionText: "Gaming Controller",
      description: "A bit of coder And a bit of a gamer, I love to play games in my free time. I am a big fan of the Assassin's Creed series and the Witcher series. I also love to play games like Valorant, GTA V, and many more."
    },
    {
      imageSrc: "/images/tt.jpeg",
      altText: "Table  Tennis",
      captionText: "Table Tennis",
      description: "I enjoy playing table tennis during my leisure time. It's a great way to stay active and have fun with friends."
    },
    {
      imageSrc: "/images/badminton.jpeg",
      altText: "Badminton",
      captionText: "Badminton",
      description: "Badminton is another sport I love. It helps me stay fit and improves my reflexes."
    },
  ];
  //  FOR SKILLS PART    -----------note: you'll need to make sure the parent container of this component is sized properly  
  const items = [
    'Item 1',
    <div key='jsx-item-1'></div>,
    'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',
    'https://media.wired.com/photos/66425c483aeee12d6ca99835/master/w_1920,c_limit/New-ChatGPT-Tier-Gear-GettyImages-2151457871.jpg ',
    <div key='jsx-item-2'>OS</div>,
    'Item 4',
    <div key='jsx-item-2'>HTML</div>,
    'Item 5',
    <div key='jsx-item-2'>CSS</div>,
    'https://verpex.com/assets/uploads/images/blog/Basic-HTML-Codes-for-Websites.webp?v=1691760654',
    'https://wpengine.com/wp-content/uploads/2021/07/jsheader.png',
    'https://devonblog.com/wp-content/uploads/2022/06/tailwind-thumb.jpg',
    'https://b2084911.smushcdn.com/2084911/wp-content/uploads/2016/08/nodejs-modules-webentwicklung-webdevelopment-webpunks.jpg?lossy=0&strip=1&webp=1',

    'Item 7',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'https://notes.edureify.com/wp-content/uploads/2024/10/python3.png',
    'https://www.openlogic.com/sites/default/files/image/2021-06/image-blog-openlogic-what-is-mongodb.png',
    'https://www.orientsoftware.com/Themes/Content/Images/blog/2024-09-23/cplusplus-usage-os.webp',
    'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',
    'https://media.wired.com/photos/66425c483aeee12d6ca99835/master/w_1920,c_limit/New-ChatGPT-Tier-Gear-GettyImages-2151457871.jpg',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 10',
    <div key='jsx-item-3'></div>,
    'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',

    <div key='jsx-item-2'>Custom JSX Content</div>,
    'https://b2084911.smushcdn.com/2084911/wp-content/uploads/2016/08/nodejs-modules-webentwicklung-webdevelopment-webpunks.jpg?lossy=0&strip=1&webp=1',

    'https://devonblog.com/wp-content/uploads/2022/06/tailwind-thumb.jpg',



    'https://wpengine.com/wp-content/uploads/2021/07/jsheader.png',


    // Add more items as needed
  ];

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated greeting using RotateWords */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
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

        <button className="CVbutton" onClick={() => { window.open("https://drive.google.com/file/d/1PxfoBu3I8HbJeCZbhs9qcaUtPG607fgf/view?usp=sharing"); }}>
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



      {/*<div className="button-container">
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
      </div>        /*}


      {/* GridMotion Component */}
      <div >


        <GridMotion items={items} />

      </div>

      {/* Buttons to Select Sections */}
      {/* <div className="aboutmeother">
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
      </div>    */}


      {/* -----------------Project----------------- */}

      <div className="Project-section">
        <h1 className="Title-project">
          <ForHeading text="PROJECTS" /></h1>
        <CardSwitcher />

      </div>

      {/* -----------------Contact----------------- */}
      <div className="Contact-section">
        <h1 className="Title">
          <ForHeading text="CONTACT" />
        </h1>


        {/* Keep your existing social-card section */}

        <div className="wrapper">
          <div className="icon github">
            <a href="https://github.com/prashantsingh1122" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <span className="tooltip">GitHub</span>
          </div>

          <div className="icon linkedin">
            <a href="https://www.linkedin.com/in/prashant-singh-a40907271/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <span className="tooltip">LinkedIn</span>
          </div>

          <div className="icon twitter">
            <a href="https://www.threads.net/@_rajput__1122" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faThreads} />
            </a>
            <span className="tooltip">Threads</span>
          </div>

          <div className="icon email">
            <a href="mailto:prashantsingh3517@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <span className="tooltip">Email</span>
          </div>

          <div className="icon instagram">
            <a href="https://www.instagram.com/_rajput__1122/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <span className="tooltip">Instagram</span>
          </div>
        </div>
      </div>



      {/* -----------------BEYOND CODE----------------- */}

      <div className="Beyond-section">
        <h1 className="Title-beyond">
          <ForHeading text={"BEYOND CODE"} />
        </h1>
        <div className="beyond-cards">
          {tiltedCardData.map((data, index) => (
            <div className="beyond-card" key={index}>
              <TiltedCard
                imageSrc={data.imageSrc}
                altText={data.altText}
                captionText={data.captionText}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    {data.captionText}
                  </p>
                }
              />
              <div className="beyond-description">
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </motion.div>
  );
};

export default Home;
