import { useState } from "react";

import "./SingleWord.css";

const SingleWord = ({ handleChoosingWord, flip, word, disabled }) => {
  const [select, setSelect] = useState(false);

  const handleSelect = () => {
    setSelect(true);
    if (!disabled && !select) {
      handleChoosingWord(word);
    }
    setTimeout(() => setSelect(false), 500);
  };

  console.log(word);
  return (
    <div className="word-container">
      <div className={flip ? "flipped" : ""}>
        <div className="word-front">
          {word.word && <p className="word-text text-center">{word.word}</p>}
          {word.image && (
            <img
              src={`https://finaleprojectbe.onrender.com/images/${word.image}`}
              alt="word"
              className="word-image"
            />
          )}
        </div>
        <div className="word-back" onClick={handleSelect}></div>
      </div>
    </div>
  );
};

export default SingleWord;
