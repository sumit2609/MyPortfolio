import React from 'react';
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";
import './App.css';
import Background from "./assests/img/parallex/background.webp";

// components
import MyNavbar from "./components/my-navbar/mynavbar.components";
import MyCrousel from "./components/my-crousel/my-crousel.components";
import TitleMessage from "./components/title-message/title-message";
import About from "./pages/about/about.components";

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
      </div>
  );
}

export default App;
