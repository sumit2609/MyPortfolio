import React from 'react';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";
import './App.css';
import Background from "./assests/img/parallex/background.webp";

// components
import MyNavbar from "./components/my-navbar/mynavbar.components";
import MyCrousel from "./components/my-crousel/my-crousel.components";
import TitleMessage from "./components/title-message/title-message";
import About from "./pages/about/about.components";
import Skills from "./pages/skills/skills.components";
import Experience from "./pages/experience/experience.components";
import ProjectTimeline from "../src/components/projects-timeline/projects-timeline.components";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCrousel />
      <TitleMessage />
      <div>
        <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={Background}
        bgImageAlt=""
        strength={-200}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      
      <div>
        <Container>
          <Slide bottom duration={500}>
            <hr/>
            <Skills />
          </Slide>
        </Container>
      </div>

      <div>
        <Container>
          <Fade duration={500}>
          <hr/>
          <Experience />
          </Fade>
        </Container>
      </div>

      <div>
        <Container>
          <Slide duration={500}>
          <hr/>
          <ProjectTimeline />
          </Slide>
        </Container>
      </div>

      </div>
  );
}

export default App;
