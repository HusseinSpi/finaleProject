import RestructuringDataFormat from "../../Functions/RestructuringDataFormat";
import { SingleWord } from "../../Components/SingleWord/SingleWord";
import { getAllWords } from "../../redux/thunk/wordsThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { increaseScore } from "../../redux/features/scoreSlice";

import "./Words.css";

function MatchingGame() {
  const score = useSelector((state) => state.score.value);

  const constTime = 80;
  const [timeLeft, setTimeLeft] = useState(constTime);
  const wordsAPI = useSelector((state) => state.words.data);
  const [secondWord, setSecondWord] = useState(null);
  const [animation, setAnimation] = useState(true);
  const [firstWord, setFirstWord] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [words, setWords] = useState([]);
  const dispatch = useDispatch();
  gsap.registerPlugin(useGSAP);

  // Random 6 objects
  const getRandomWords = (allData) => {
    const randomIndexes = [];
    while (randomIndexes.length < 6) {
      const randomIndex = Math.floor(Math.random() * allData.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    return randomIndexes.map((index) => allData[index]);
  };

  // Shuffle words
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  // Get words from Redux
  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  //Restructure data
  useEffect(() => {
    if (wordsAPI.length) {
      const randomWords = getRandomWords(wordsAPI);
      const restructuredWords = RestructuringDataFormat(randomWords);
      setWords(
        shuffleArray([...restructuredWords.arabic, ...restructuredWords.hebrew])
      );
    }
    setAnimation((prev) => !prev);
  }, [wordsAPI]);

  // Choosing a word Word
  const handleChoosingWord = (word) => {
    if (timeLeft > 0) firstWord ? setSecondWord(word) : setFirstWord(word);
  };

  // resetting the words
  const handleResetChoosing = () => {
    setSecondWord(null);
    setFirstWord(null);
    setDisabled(false);
  };

  //  Words logic
  useEffect(() => {
    let isFinished = 0;
    if (words.length > 0) {
      words.forEach((word) => {
        if (word.match == false) isFinished++;
      });
      if (isFinished == 0) {
        dispatch(increaseScore(timeLeft));
        setTimeLeft(0);
      }
    }
  }, [words]);
  useEffect(() => {
    let timeout;

    if (firstWord && secondWord) {
      setDisabled(true);

      if (firstWord.id === secondWord.id) {
        dispatch(increaseScore(10));
        setWords((prev) =>
          prev.map((word) =>
            word.id === firstWord.id ? { ...word, match: true } : word
          )
        );
      }
      timeout = setTimeout(() => handleResetChoosing(), 2000);
    }
    return () => clearTimeout(timeout);
  }, [firstWord, secondWord]);

  // Gsap Animation
  useEffect(() => {
    gsap.set(".word-container ", {
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

  return (
    <section className="words-section">
      <div className="words-container">
        <div className="letters-overlay"></div>
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
      </div>
    </section>
  );
}

export default MatchingGame;
