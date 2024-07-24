import React, { useEffect } from "react";

const Tetris = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/Tetris/js/index.js";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="game-container">
      <div className="game-content"></div>
    </div>
  );
};

export default Tetris;
