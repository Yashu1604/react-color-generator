import React from "react";
import "../styles.css";

function LeftBar(props) {
  return (
    <div className="LeftBar">
      <div className="individual-colors">
        <h2 style={{ color: props.main }}>RED</h2>
        <div
          className="individual-colors-red"
          style={{ backgroundColor: props.red, color: props.alt }}
          onClick={() => {
            navigator.clipboard.writeText(props.red);
          }}
        >
          <h2 className="RedColorBlock">{props.red}</h2>
        </div>
      </div>
      <div className="individual-colors">
        <h2 style={{ color: props.main }}>GREEN</h2>
        <div
          className="individual-colors-green"
          style={{ backgroundColor: props.green, color: props.alt }}
          onClick={() => {
            navigator.clipboard.writeText(props.green);
          }}
        >
          <h2 className="GreenColorBlock">{props.green}</h2>
        </div>
      </div>
      <div className="individual-colors">
        <h2 style={{ color: props.main }}>BLUE</h2>
        <div
          className="individual-colors-blue"
          style={{ backgroundColor: props.blue, color: props.alt }}
          onClick={() => {
            navigator.clipboard.writeText(props.blue);
          }}
        >
          <h2 className="BlueColorBlock">{props.blue}</h2>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
