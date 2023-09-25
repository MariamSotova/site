import React from "react";
// import { neonCursor } from "threejs-toys";

// neonCursor({
//   el: document.getElementById("about"),
//   shaderPoints: 16,
//   curvePoints: 80,
//   curveLerp: 0.5,
//   radius1: 5,
//   radius2: 30,
//   velocityTreshold: 10,
//   sleepRadiusX: 100,
//   sleepRadiusY: 100,
//   sleepTimeCoefX: 0.0025,
//   sleepTimeCoefY: 0.0025,
// });
export const Neon = () => {
  return (
    <div id="about">
      <div id="header-about">
        <h1>Mariam Yan</h1>
        <p>
          Hi, my name is Mariam Yan, and I am Front End Developer based in
          Rotterdam, Netherlands. I love creating interactive digital
          experiences on the web.
        </p>
        <a
          className="App-link"
          href="https://github.com/MariamSotova"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/mariam-sotova-1467ba272/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};
