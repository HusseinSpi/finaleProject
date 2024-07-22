import React, { useState } from 'react'
import '../FormingWordGame/FormingWordGame.css'
import Picture from '../FormingWordGame/Picture'
import DropZone from '../FormingWordGame/DropZone'
import DraggableLetter from '../FormingWordGame/DraggableLetter'
import { Howl, Howler } from 'howler'

Howler.volume(0.1)

const animals = [
  {
    _id: '669e0f4cdacb28ee3cb8ba29',
    name: 'cow',
    imgUrl:
      'https://img.freepik.com/free-photo/photorealistic-view-cow-grazing-outdoors_23-2151294223.jpg?t=st=1721633203~exp=1721636803~hmac=864c6cd501d08da1e75479ea43e676aefa056c93ef82373fa6528771b933e569&w=900',
    audioUrl: 'https://www.youtube.com/watch?v=xAJeaAbpv6I&ab_channel=NoiseTop',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba27',
    name: 'cat',
    imgUrl:
      'https://img.freepik.com/free-photo/gray-kitty-with-monochrome-wall-her_23-2148955126.jpg?t=st=1721633102~exp=1721636702~hmac=70fa26c8bbbe306737cbcc96d71ff0770382c732508939927b6f8b60fe2be2d7&w=1060',
    audioUrl: 'https://www.youtube.com/watch?v=WXYDKehhMXk&ab_channel=NoiseTop',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba28',
    name: 'dog',
    imgUrl:
      'https://img.freepik.com/free-photo/cute-dog-sleeping-ai-generated_23-2150651493.jpg?t=st=1721633161~exp=1721636761~hmac=54e34402ae63e9b34bde6e9f1314674ba11ebae11f1a4c06c5c1ff4183f49f3d&w=740',
    audioUrl: 'https://www.youtube.com/watch?v=TMKLYDfLNG8&ab_channel=NoiseTop',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba2c',
    name: 'wolf',
    imgUrl:
      'https://images.pexels.com/photos/6695358/pexels-photo-6695358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: 'https://www.youtube.com/watch?v=IBi23yGdbg8&ab_channel=NoiseTop',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba2d',
    name: 'lion',
    imgUrl:
      'https://images.pexels.com/photos/2220337/pexels-photo-2220337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: 'https://www.youtube.com/watch?v=RuNp767Uego&ab_channel=NoiseTop',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba2e',
    name: 'mosquito',
    imgUrl:
      'https://img.freepik.com/free-photo/highly-detailed-mosquito_23-2151547810.jpg?t=st=1721633494~exp=1721637094~hmac=881e0eeb5ca73cb54d38dad405af6e23df6ec0cf4a8cd3eb520681fbc27fa26d&w=1060',
    audioUrl: 'https://www.youtube.com/watch?v=mqsAQyH8maU&ab_channel=NoiseTop',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba2f',
    name: 'owl',
    imgUrl:
      'https://images.pexels.com/photos/11512545/pexels-photo-11512545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: 'https://www.youtube.com/watch?v=ThBtHTu47XA&ab_channel=NoiseTop',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba30',
    name: 'horse',
    imgUrl:
      'https://images.pexels.com/photos/15153684/pexels-photo-15153684/free-photo-of-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: 'https://www.youtube.com/watch?v=ikXRLWMQD4g&ab_channel=NoiseTop',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba31',
    name: 'crow',
    imgUrl:
      'https://images.pexels.com/photos/7260931/pexels-photo-7260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl:
      'https://www.youtube.com/watch?v=vsU-mGFp5l0&ab_channel=SegoNature',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba32',
    name: 'mouse',
    imgUrl:
      'https://images.pexels.com/photos/15170421/pexels-photo-15170421/free-photo-of-mouse-with-cheese.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl:
      'https://www.youtube.com/watch?v=YLF1q-31Ymw&ab_channel=SoundLibrary',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba33',
    name: 'peacock',
    imgUrl:
      'https://images.pexels.com/photos/638738/pexels-photo-638738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: 'https://www.youtube.com/watch?v=zTcHGJk6vos&ab_channel=NoiseTop',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba34',
    name: 'ant',
    imgUrl:
      'https://images.pexels.com/photos/20736158/pexels-photo-20736158/free-photo-of-ant-on-stem.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl:
      'https://www.youtube.com/watch?v=YtNEjsGWP6w&ab_channel=sonidosKMD',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba35',
    name: 'pig',
    imgUrl:
      'https://images.pexels.com/photos/63285/pig-alp-rona-furna-sow-63285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: 'https://www.youtube.com/watch?v=NknoT4GkRcM&ab_channel=NoiseTop',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba36',
    name: 'sheep',
    imgUrl:
      'https://images.pexels.com/photos/8317133/pexels-photo-8317133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: 'https://www.youtube.com/watch?v=lr5RZBByBm8&ab_channel=NoiseTop',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba37',
    name: 'bull',
    imgUrl:
      'https://images.pexels.com/photos/139399/bull-landscape-nature-mammal-139399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: 'https://www.youtube.com/watch?v=WJd8zQ8vUEM&ab_channel=Star',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba38',
    name: 'duck',
    imgUrl:
      'https://images.pexels.com/photos/14281966/pexels-photo-14281966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: 'https://www.youtube.com/watch?v=PKXEvQ8DhRc&ab_channel=NoiseTop',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba39',
    name: 'fish',
    imgUrl:
      'https://images.pexels.com/photos/8970785/pexels-photo-8970785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl:
      'https://www.youtube.com/watch?v=iRKbxIUTsRY&ab_channel=SoundLibrary',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba3a',
    name: 'dolphin',
    imgUrl:
      'https://images.pexels.com/photos/11740705/pexels-photo-11740705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    audioUrl:
      'https://www.youtube.com/watch?v=M5AJah09Jh8&ab_channel=TheDolphinCompany',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba2b',
    name: 'fox',
    imgUrl:
      'https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl:
      'https://www.youtube.com/watch?v=qjuuVub8bQ4&ab_channel=4KWildlifeBangladesh',
    __v: 0,
  },
  {
    _id: '669e0f4cdacb28ee3cb8ba2a',
    name: 'frog',
    imgUrl:
      'https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: 'https://www.youtube.com/watch?v=AelURrL6RPA&ab_channel=NoiseTop',
    __v: 0,
  },
]

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const FormingWordGame = () => {
  const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0)
  const [correctWord, setCorrectWord] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const currentAnimal = animals[currentAnimalIndex]

  const handleCorrectWord = () => {
    setCorrectWord(true)
    setShowPopup(true)
    const sound = new Howl({
      src: ['Cow Sounds Effects.mp3'],
    })
    sound.play()
    setTimeout(() => {
      setCorrectWord(false)
      setShowPopup(false)
      setCurrentAnimalIndex((prevIndex) => (prevIndex + 1) % animals.length)
    }, 3000)
  }

  const handleSkipAnimal = () => {
    setCurrentAnimalIndex((prevIndex) => (prevIndex + 1) % animals.length)
  }

  return (
    <div className="FormingWordGame">
      <h1>Form the Word</h1>
      <Picture url={currentAnimal.imgUrl} />
      <DropZone
        key={currentAnimalIndex}
        targetWord={currentAnimal.name}
        onCorrectWord={handleCorrectWord}
      />
      <div className="letters">
        {letters.map((letter, index) => (
          <DraggableLetter key={index} letter={letter} />
        ))}
      </div>
      <button onClick={handleSkipAnimal}>Skip Animal</button>
      {showPopup && <div className="popup">You did it!</div>}
    </div>
  )
}

export default FormingWordGame
