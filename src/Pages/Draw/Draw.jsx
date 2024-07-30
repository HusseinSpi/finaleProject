import React, { useEffect } from "react";
import "./Draw.css";

const Draw = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/Draw/Draw.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="draw-body">
      <canvas id="jsCanvas" className="drawcanvas"></canvas>
      <div className="draw-threshold"></div>
      <div className="controls">
        <div className="controls__range">
          <input
            type="range"
            id="jsRange"
            min="0.1"
            max="20.0"
            defaultValue="2.5"
            step="0.1"
          />
        </div>
        <div className="controls__btn">
          {/* <button id="jsMode">Draw</button> */}
          <button id="jsSave">Save</button>
          <input type="file" id="jsUpload" accept="image/*" />
        </div>
        <div className="controls__colors" id="jsColors">
          <div
            className="controls__colors jsColor"
            style={{ backgroundColor: "black" }}
          ></div>
          <div
            className="controls__colors jsColor"
            style={{ backgroundColor: "white" }}
          ></div>
          <div
            className="controls__colors jsColor"
            style={{ backgroundColor: "orange" }}
          ></div>
          <div
            className="controls__colors jsColor"
            style={{ backgroundColor: "red" }}
          ></div>
          <div
            className="controls__colors jsColor"
            style={{ backgroundColor: "yellow" }}
          ></div>
          <div
            className="controls__colors jsColor"
            style={{ backgroundColor: "green" }}
          ></div>
          <div
            className="controls__colors jsColor"
            style={{ backgroundColor: "rgb(79, 79, 177)" }}
          ></div>
          <div
            className="controls__colors jsColor"
            style={{ backgroundColor: "blue" }}
          ></div>
          <div
            className="controls__colors jsColor"
            style={{ backgroundColor: "rgb(187, 76, 187)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Draw;
