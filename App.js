import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Image22 from "./component/images/image22.jpg";
export default function App() {
  function handleClick() {
    console.log("I was clicked");
  }
  function handleOnMouseOver() {
    console.log("MouseOver");
  }
  return (
    <div className="container">
      <img src={Image22} alt="image" onMouseOver={handleOnMouseOver} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
