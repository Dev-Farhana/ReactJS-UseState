import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];
const COLORS2 = ["plum" , "indigo" , "orangered" , "salmon" , "bisque"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [backgroundColor2, setBackgroundColor2] = useState(COLORS2[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  const onBtnClick = (color2) => () => {
    setBackgroundColor2(color2)
  }

  return (
    <>
      <h1> Change the colors </h1>
    <div className="flex">
      <div style={{ backgroundColor,  }} >
        {COLORS.map((color) => (
          <button  key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </button>
        ))}
      </div>

      <div style={{backgroundColor : backgroundColor2}}>
        {COLORS2.map((color2) => (
          <button key={color2} onClick={onBtnClick(color2)} className={backgroundColor2 === color2 ? "selected" : ""} > 
            {color2} 
          </button>
        ))
        }

      </div> 
    </div>
   
    </>
  );
}

export default App;

