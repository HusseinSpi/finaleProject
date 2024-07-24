import React, { useState, useEffect, useRef } from 'react'
import { useDrop } from 'react-dnd'

const DropZone = ({ targetWord, onCorrectWord }) => {
  const [droppedLetters, setDroppedLetters] = useState([])
  // const [showTryAgain, setShowTryAgain] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const tryAgainTimeoutRef = useRef(null)
  const welcomeTimeoutRef = useRef(null)

  useEffect(() => {
    setDroppedLetters([])
  }, [targetWord])

  useEffect(() => {
    // startTryAgainTimer()
    startWelcomeTimer()
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      clearTimeout(tryAgainTimeoutRef.current)
      clearTimeout(welcomeTimeoutRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (droppedLetters.length > 0) {
      clearTimeout(tryAgainTimeoutRef.current)
      clearTimeout(welcomeTimeoutRef.current)
      // startTryAgainTimer()
      startWelcomeTimer()
    }
  }, [droppedLetters])

  // const startTryAgainTimer = () => {
  //   clearTimeout(tryAgainTimeoutRef.current)
  //   tryAgainTimeoutRef.current = setTimeout(() => {
  //     // setShowTryAgain(true)
  //     // setTimeout(() => setShowTryAgain(false), 7000)
  //   }, 7000)
  // }

  const startWelcomeTimer = () => {
    clearTimeout(welcomeTimeoutRef.current)
    welcomeTimeoutRef.current = setTimeout(() => {
      setShowWelcome(true)
    }, 10000)
  }

  const handleMouseMove = () => {
    if (showWelcome) {
      setShowWelcome(false)
    }
  }

  const addLetterToZone = (letter) => {
    clearTimeout(tryAgainTimeoutRef.current)
    clearTimeout(welcomeTimeoutRef.current)
    setDroppedLetters((letters) => {
      const newLetters = [...letters, letter]
      if (newLetters.join('').toLowerCase() === targetWord.toLowerCase()) {
        onCorrectWord()
      }
      // startTryAgainTimer()
      startWelcomeTimer()
      return newLetters
    })
  }

  const handleEraseLastLetter = () => {
    setDroppedLetters((letters) => letters.slice(0, -1))
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'LETTER',
    drop: (item) => addLetterToZone(item.letter),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  startWelcomeTimer()

  return (
    <div>
      <div
        ref={drop}
        className="drop-zone"
        style={{ backgroundColor: isOver ? 'lightgreen' : 'white' }}
      >
        {droppedLetters.join('')}
      </div>
      <button className="erase" onClick={handleEraseLastLetter}>
        &#x2408;
      </button>
      {/* {showTryAgain && <div className="popup popup-two">Try again!</div>} */}
      {showWelcome && (
        <div className=" popup">
          Kindly drag letters to create a word that matches the name of the
          animal in the picture
        </div>
      )}
    </div>
  )
}

export default DropZone
