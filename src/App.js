import React from 'react';
import './App.css';

// components
import MyNavbar from "./components/my-navbar/mynavbar.components";
import MyCrousel from "./components/my-crousel/my-crousel.components";
import TitleMessage from "./components/title-message/title-message";

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyCrousel />
      <TitleMessage />
    </div>
  );
}

export default App;
