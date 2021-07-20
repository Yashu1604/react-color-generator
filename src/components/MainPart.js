import React from "react";
import "../styles.css";

function MainPart(props) {
  // const [main, setMain] = useState("");
  // const [alt, setAlt] = useState("");

  return (
    <div className="MainPart">
      <h3 style={{ margin: "0" }}>
        Click circles to copy their color hashvalues
      </h3>
      <div
        className="MainColorBlock"
        style={{ backgroundColor: props.main, color: props.alt }}
        onClick={() => {
          navigator.clipboard.writeText(props.main);
        }}
      >
        <h1 className="MainColorHash">{props.main}</h1>
      </div>

      <div
        className="AltColorBlock"
        style={{ backgroundColor: props.alt, color: props.main }}
        onClick={() => {
          navigator.clipboard.writeText(props.alt);
        }}
      >
        <h1 className="AltColorHash">{props.alt}</h1>
      </div>

      {/* <p>Click on background to copy background color</p> */}
    </div>
  );
}

export default MainPart;
