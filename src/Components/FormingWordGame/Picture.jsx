import React from 'react'

const Picture = ({ url }) => {
  return (
    <div className="picture">
      <img src={url} alt="Form the word" />
    </div>
  )
}

export default Picture
