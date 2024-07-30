import React, { useState, useRef } from 'react'
import circle_icon from '../../assets/circle.png'
import cross_icon from '../../assets/cross.png'
import click_sound from '../../../public/click-sound.mp3'
import win_sound from '../../../public/win-sound-sea.mp3'

import './TicTacToe.css'

let data = ['', '', '', '', '', '', '', '', '']

const TicTacToe = () => {
  let [count, setCount] = useState(0)
  let [lock, setLock] = useState(false)
  let titleRef = useRef(null)
  let box1 = useRef(null)
  let box2 = useRef(null)
  let box3 = useRef(null)
  let box4 = useRef(null)
  let box5 = useRef(null)
  let box6 = useRef(null)
  let box7 = useRef(null)
  let box8 = useRef(null)
  let box9 = useRef(null)

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

  const clickSound = new Audio(click_sound)
  const winSound = new Audio(win_sound)

  const toggle = (e, num) => {
    if (lock) {
      return 0
    }
    clickSound.play() // Play click sound on every move
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`
      data[num] = 'x'
      setCount(++count)
    } else {
      e.target.innerHTML = `<img  src='${circle_icon}' className="imgCircle">`
      data[num] = 'o'
      setCount(++count)
    }
    checkWin()
  }

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
      won(data[2], [box1, box2, box3], 'horizontal')
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== '') {
      won(data[5], [box4, box5, box6], 'horizontal')
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== '') {
      won(data[8], [box7, box8, box9], 'horizontal')
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== '') {
      won(data[6], [box1, box4, box7], 'vertical')
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== '') {
      won(data[7], [box2, box5, box8], 'vertical')
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== '') {
      won(data[8], [box3, box6, box9], 'vertical')
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== '') {
      won(data[8], [box1, box5, box9], 'diagonal-right')
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== '') {
      won(data[6], [box3, box5, box7], 'diagonal-left')
    }
  }

  const won = (winner, winningBoxes, directionClass) => {
    setLock(true)
    winSound.play() // Play win sound
    if (winner === 'x') {
      titleRef.current.innerHTML = ` The Winner    <img src=${cross_icon}>  `
    } else {
      titleRef.current.innerHTML = ` The Winner    <img src=${circle_icon}>  `
    }
    winningBoxes.forEach((box) => {
      box.current.classList.add('winning-line', directionClass) // Add the winning line animation
    })
  }

  const reset = () => {
    setLock(false)
    data = ['', '', '', '', '', '', '', '', '']
    titleRef.current.innerHTML = ' Tic Tac Toe Fun Game'
    box_array.map((e) => {
      e.current.innerHTML = ''
      e.current.classList.remove(
        'winning-line',
        'horizontal',
        'vertical',
        'diagonal-right',
        'diagonal-left'
      ) // Remove the winning line animation
    })
  }
  return (
    <div className="TicTacToe-main-container ">
      <div className="TicTacToe-container">
        <h1 className="TicTacToe-title" ref={titleRef}>
          Tic Tac Toe Fun Game
        </h1>
        <div className="TicTacToe-board">
          <div className="row1">
            <div
              className="TicTacToe-boxes"
              ref={box1}
              onClick={(e) => {
                toggle(e, 0)
              }}
            ></div>
            <div
              className="TicTacToe-boxes"
              ref={box2}
              onClick={(e) => {
                toggle(e, 1)
              }}
            ></div>
            <div
              className="TicTacToe-boxes"
              ref={box3}
              onClick={(e) => {
                toggle(e, 2)
              }}
            ></div>
          </div>
          <div className="row2">
            <div
              className="TicTacToe-boxes"
              ref={box4}
              onClick={(e) => {
                toggle(e, 3)
              }}
            ></div>
            <div
              className="TicTacToe-boxes"
              ref={box5}
              onClick={(e) => {
                toggle(e, 4)
              }}
            ></div>
            <div
              className="TicTacToe-boxes"
              ref={box6}
              onClick={(e) => {
                toggle(e, 5)
              }}
            ></div>
          </div>
          <div className="row3">
            <div
              className="TicTacToe-boxes"
              ref={box7}
              onClick={(e) => {
                toggle(e, 6)
              }}
            ></div>
            <div
              className="TicTacToe-boxes"
              ref={box8}
              onClick={(e) => {
                toggle(e, 7)
              }}
            ></div>
            <div
              className="TicTacToe-boxes"
              ref={box9}
              onClick={(e) => {
                toggle(e, 8)
              }}
            ></div>
          </div>
        </div>
        <img
          className="bubble-class-for-tic-tac-toe"
          alt="bubble-img-one"
          src="/public/bubble.png"
        ></img>

        <img
          className="bubble-class-for-tic-tac-toe-two"
          alt="bubble-img-two"
          src="/public/bubble.png"
        ></img>

        <img
          className="bubble-class-for-tic-tac-toe-three"
          alt="bubble-img-three"
          src="/public/bubble.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-four"
          alt="bubble-img-four"
          src="/public/bubble.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-five"
          alt="bubble-img-five"
          src="/public/bubble.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-six"
          alt="bubble-img-five"
          src="/public/bubble.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-seven"
          alt="bubble-img-five"
          src="/public/bubble.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-green-squid"
          alt="green-squid"
          src="/public/green-squid.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-horse-sea"
          alt="horse-sea"
          src="/public/horse-sea.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-blue-trigon"
          alt="blue-trigon"
          src="/public/blue-trigon.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-blue-fish"
          alt="blue-fish"
          src="/public/blue-fish.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-lighter-star"
          alt="lighter-star"
          src="/public/lighter-star.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-red-fish"
          alt="red-fish"
          src="/public/red-fish.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-red-star"
          alt="red-star"
          src="/public/red-star.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-pink"
          alt="pink-algaes"
          src="/public/pink.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-purple"
          alt="purple-algaes"
          src="/public/purple.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-yellow"
          alt="yellow"
          src="/public/yellow.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-green-3"
          alt="green-3"
          src="/public/green-3.png"
        ></img>
        <img
          className="bubble-class-for-tic-tac-toe-green-1"
          alt="green-1"
          src="/public/green-1.png"
        ></img>

        <button
          className="TicTacToe-reset"
          onClick={() => {
            reset()
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default TicTacToe
