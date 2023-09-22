import React from "react";

import { neonCursor } from "threejs-toys";

neonCursor({
  el: document.getElementById("app"),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025,
});
export const Neon = () => {
  return (
    <div id="app">
      <div id="hero">
        <h1>Mariam Yan</h1>
        <a
          className="App-link"
          href="https://github.com/MariamSotova"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
