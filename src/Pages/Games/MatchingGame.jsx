import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import RestructuringDataFormat from "../../Functions/RestructuringDataFormat";
import SingleWord from "../../Components/SingleWord/SingleWord";
import { getAllWords } from "../../redux/thunk/wordsThunk";

import "./Words.css";

function MatchingGame() {
  const wordsAPI = useSelector((state) => state.words.data);
  const [secondWord, setSecondWord] = useState(null);
  const [animation, setAnimation] = useState(true);
  const [firstWord, setFirstWord] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [words, setWords] = useState([]);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  // Random 6 objects
  const getRandomWords = useCallback((allData) => {
    const randomIndexes = [];
    while (randomIndexes.length < 6) {
      const randomIndex = Math.floor(Math.random() * allData.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    return randomIndexes.map((index) => allData[index]);
  }, []);

  // Shuffle words
  const shuffleArray = useCallback((array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }, []);

  // Get words from Redux
  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  // Restructure data
  useEffect(() => {
    if (wordsAPI.length) {
      const randomWords = getRandomWords(wordsAPI);
      const restructuredWords = RestructuringDataFormat(
        randomWords,
        i18n.language
      );
      setWords(
        shuffleArray([...restructuredWords.word, ...restructuredWords.image])
      );
    }
    setAnimation((prev) => !prev);
  }, [wordsAPI, i18n.language, getRandomWords, shuffleArray]);

  // Choosing a word
  const handleChoosingWord = (word) => {
    if (disabled) return;

    if (firstWord) {
      setSecondWord(word);
      setDisabled(true);

      // Check for match
      if (firstWord.id === word.id) {
        // Match found
        setWords((prevWords) =>
          prevWords.map((w) => (w.id === word.id ? { ...w, match: true } : w))
        );
      }

      // Reset the chosen words after a delay
      setTimeout(() => {
        handleResetChoosing();
      }, 1000);
    } else {
      setFirstWord(word);
    }
  };

  // Resetting the words
  const handleResetChoosing = () => {
    setSecondWord(null);
    setFirstWord(null);
    setDisabled(false);
  };

  // Gsap Animation
  useEffect(() => {
    gsap.set(".word-container", {
      scale: 0,
    });

    gsap.to(".word-container", {
      duration: 0.8,
      scale: 1,
      ease: "bounce.out",
      stagger: {
        from: "random",
        each: 0.2,
      },
    });
  }, [animation]);

  // Restart the game
  const handleRestart = () => {
    setWords([]);
    setFirstWord(null);
    setSecondWord(null);
    setDisabled(false);
    dispatch(getAllWords());
  };

  return (
    <section className="words-section">
      <div className="words-container">
        <div className="cards-grid">
          {words?.map((word, index) => (
            <SingleWord
              flip={word === firstWord || word === secondWord || word.match}
              handleChoosingWord={handleChoosingWord}
              disabled={disabled}
              key={index}
              word={word}
            />
          ))}
        </div>
        <button onClick={handleRestart} className="restart-button">
          Restart
        </button>
      </div>
    </section>
  );
}

export default MatchingGame;
