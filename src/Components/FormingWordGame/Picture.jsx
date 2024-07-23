import React from 'react'

const Picture = ({ url }) => {
  return (
    <div className="picture">
      <img src={url} alt="Animal pic that is loading..." />
    </div>
  )
}

export default Picture
