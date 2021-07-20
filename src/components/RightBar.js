import React, { useState } from "react";
import "../styles.css";

function RightBar(props) {
  const [dallColors, setAllColors] = useState({
    mainColor: "",
    altColor: "",
    redColor: "",
    greenColor: "",
    blueColor: ""
  });

  function GenerateRandom(pos) {
    console.log("generate random");
    generateColor(pos);
    console.log(dallColors);
  }

  const generateColor = (pos) => {
    let col = [];
    let temp = Math.floor(Math.random() * 256);
    for (let i = 0; i < 3; i++) {
      if (i === pos) {
        col.push(temp);
      } else if (i < 3) {
        col.push(Math.floor(Math.random() * (temp + 1)));
      } else {
        col.push(Math.floor(Math.random() * 256));
      }
    }
    let rcol = col.map((value) => 255 - value);
    let main = conToString(col);
    let alt = conToString(rcol);
    let red = "#" + main.slice(1, 3) + "0000";
    let green = "#00" + main.slice(3, 5) + "00";
    let blue = "#0000" + main.slice(5);
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
    props.change(main, alt, red, green, blue);
  };

  const conToString = (arr) => {
    let colArr = arr.map((element) => {
      let temp = element.toString(16);
      temp = temp.length === 1 ? "0" + temp : temp;
      return temp;
    });
    let colString =
      "#" +
      colArr.reduce((val1, val2) => {
        return val1 + val2;
      });
    return colString;
  };

  return (
    <div className="RightBar">
      <button
        className="ButtonRandom"
        onClick={() => {
          GenerateRandom();
        }}
      >
        Generate Random Color
      </button>
      <button
        className="ButtonRed"
        onClick={() => {
          GenerateRandom(0);
        }}
      >
        Red Dominant Color
      </button>
      <button
        className="ButtonGreen"
        onClick={() => {
          GenerateRandom(1);
        }}
      >
        Green Dominant Color
      </button>
      <button
        className="ButtonBlue"
        onClick={() => {
          GenerateRandom(2);
        }}
      >
        Blue Dominant Color
      </button>
    </div>
  );
}

export default RightBar;
