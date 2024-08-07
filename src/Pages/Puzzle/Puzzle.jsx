import React, { useState, useRef } from "react";
import "./puzzle.css";
import { initGame, refreshPage } from "../../../public/Puzzle/Puzzle.js";

const Puzzle = () => {
  const [turns, setTurns] = useState(0);
  const boardRef = useRef(null);
  const piecesRef = useRef(null);
  const audioContextRef = useRef(null);

  const handleInitGame = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
    } else if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }

    initGame(boardRef.current, piecesRef.current, setTurns);
  };

  return (
    <div className="puzzle-container">
      <div className="puzzle-controls">
        <input type="file" id="upload" accept="image/*" />
        <input type="number" id="gridSize" defaultValue="5" min="2" max="10" />
        <button onClick={handleInitGame}>Start Game</button>
      </div>
      <h2>
        Turns: <span>{turns}</span>
      </h2>
      <div id="board" ref={boardRef} className="puzzle-board"></div>
      <div id="pieces" ref={piecesRef} className="puzzle-pieces"></div>
      <div id="modal" className="puzzle-modal">
        <div className="puzzle-modal-content">
          <span className="puzzle-modal-close" onClick={refreshPage}>
            &times;
          </span>
          <h2>You won the game!</h2>
          <button onClick={refreshPage}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Puzzle;
