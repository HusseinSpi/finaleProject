import { useState, useEffect } from "react";
import "../FormingWordGame/FormingWordGame.css";
import Picture from "../FormingWordGame/Picture";
import DropZone from "../FormingWordGame/DropZone";
import DraggableLetter from "../FormingWordGame/DraggableLetter";
import { Howl, Howler } from "howler";
import { useDispatch, useSelector } from "react-redux";
import { getAllAnimalsGame } from "../../redux/thunk/animalsGameThunk";

Howler.volume(0.1);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const FormingWordGame = () => {
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animalsGame.data);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllAnimalsGame());
    };

    if (!animals || animals.length === 0) {
      fetchData();
    }
  }, [dispatch, animals]);

  const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);
  const [correctWord, setCorrectWord] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const currentAnimal =
    animals && animals.length > 0 ? animals[currentAnimalIndex] : null;

  const handleCorrectWord = () => {
    if (currentAnimal) {
      setCorrectWord(true);
      setShowPopup(true);
      const sound = new Audio(
        `https://finaleprojectbe.onrender.com/sounds/${currentAnimal.audioUrl}`
      );
      sound.play();
      setTimeout(() => {
        setCorrectWord(false);
        setShowPopup(false);
        setCurrentAnimalIndex((prevIndex) => (prevIndex + 1) % animals.length);
      }, 3000);
    }
  };

  const handleSkipAnimal = () => {
    setCurrentAnimalIndex((prevIndex) => (prevIndex + 1) % animals.length);
  };

  return (
    <div className="FormingWordGame">
      <h1>Form the Word</h1>
      {currentAnimal && <Picture url={currentAnimal.imgUrl} />}
      {currentAnimal && (
        <DropZone
          key={currentAnimalIndex}
          targetWord={currentAnimal.name}
          onCorrectWord={handleCorrectWord}
        />
      )}
      <div className="letters">
        {letters.map((letter, index) => (
          <DraggableLetter key={index} letter={letter} />
        ))}
      </div>
      <button onClick={handleSkipAnimal}>Skip Animal</button>
      {showPopup && <div className="popup">You did it!</div>}
    </div>
  );
};

export default FormingWordGame;
