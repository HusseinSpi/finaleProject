import React from 'react'
import './CulinaryKids.css'

const recipes = [
  'Recipe 1: Spaghetti',
  'Recipe 2: Tacos',
  'Recipe 3: Pizza',
  // Add more recipes here
]

const CulinaryKids = () => {
  return (
    <div className="culinary-main-container">
      <h1>Recipes</h1>
      <div className="card-grid">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">FLIP CARD</p>
                <p>Hover Me</p>
              </div>
              <div className="flip-card-back">
                <p className="title">BACK</p>
                <p>{recipes[index % recipes.length]}</p> {/* Display recipe */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CulinaryKids
