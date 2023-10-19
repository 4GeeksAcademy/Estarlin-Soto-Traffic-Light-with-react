//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import TraficLight from "./component/TrafficLight.jsx";

//render your react application
ReactDOM.render(<TraficLight />, document.querySelector("#app"));
