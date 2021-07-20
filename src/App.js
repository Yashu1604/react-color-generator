import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import MainPart from "./components/MainPart";
import RightBar from "./components/RightBar";

function App() {
  const [allColors, setAllColors] = useState({
    mainColor: "Red",
    altColor: "aqua",
    redColor: "red",
    greenColor: "green",
    blueColor: "blue"
  });

  const handleColorChange = (main, alt, red, green, blue) => {
    setAllColors((prevState) => {
      return {
        ...prevState,
        mainColor: main,
        altColor: alt,
        redColor: red,
        greenColor: green,
        blueColor: blue
      };
    });
  };

  return (
    <div className="App" style={{ backgroundColor: allColors.altColor }}>
      <Header />
      <div className="Main-block">
        <LeftBar
          red={allColors.redColor}
          green={allColors.greenColor}
          blue={allColors.blueColor}
          alt={allColors.altColor}
          main={allColors.mainColor}
        />
        <MainPart main={allColors.mainColor} alt={allColors.altColor} />
        <RightBar change={handleColorChange} />
      </div>
    </div>
  );
}

export default App;
