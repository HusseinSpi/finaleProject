<<<<<<< HEAD
import { useState, useEffect } from "react";
import "../FormingWordGame/FormingWordGame.css";
import Picture from "../FormingWordGame/Picture";
import DropZone from "../FormingWordGame/DropZone";
import DraggableLetter from "../FormingWordGame/DraggableLetter";
import { useDispatch, useSelector } from "react-redux";
import { getAllAnimalsGame } from "../../redux/thunk/animalsGameThunk";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
=======
import { useState, useEffect } from 'react'
import '../FormingWordGame/FormingWordGame.css'
import Picture from '../FormingWordGame/Picture'
import DropZone from '../FormingWordGame/DropZone'
import DraggableLetter from '../FormingWordGame/DraggableLetter'
import { Howl, Howler } from 'howler'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAnimalsGame } from '../../redux/thunk/animalsGameThunk'

Howler.volume(0.1)

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
>>>>>>> origin/DanielaBranch

const FormingWordGame = () => {
  const dispatch = useDispatch()
  const animals = useSelector((state) => state.animalsGame.data)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllAnimalsGame())
    }

    if (!animals || animals.length === 0) {
      fetchData()
    }
  }, [dispatch, animals])

  const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0)
  const [correctWord, setCorrectWord] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const currentAnimal =
    animals && animals.length > 0 ? animals[currentAnimalIndex] : null
  console.log(animals)
  const handleCorrectWord = () => {
    if (currentAnimal) {
      setCorrectWord(true)
      setShowPopup(true)
      const sound = new Audio(
        `https://finaleprojectbe.onrender.com/sounds/${currentAnimal.audioUrl}`
      )

      setTimeout(() => {
        sound.play()

        setTimeout(() => {
          sound.pause()
          sound.currentTime = 1
        }, 3000)

        setCorrectWord(false)
        setShowPopup(false)
        setCurrentAnimalIndex((prevIndex) => (prevIndex + 1) % animals.length)
      }, 4000)
    }
  }

  const handleSkipAnimal = () => {
    setCurrentAnimalIndex((prevIndex) => (prevIndex + 1) % animals.length)
  }
  console.log(currentAnimal)
  return (
    <div className="FormingWordGame-background">
      <div className="FormingWordGame">
        <h1 className="h1">Animals' Forming Word Game</h1>
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
        <button className="skip" onClick={handleSkipAnimal}>
          Skip &#10140;
        </button>
        {showPopup && <div className="popup-correct">You did it </div>}
      </div>
    </div>
  )
}

export default FormingWordGame
