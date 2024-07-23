import React from 'react'
import { useDrag } from 'react-dnd'

const DraggableLetter = ({ letter }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'LETTER',
    item: { letter },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className="draggable-letter"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {letter}
    </div>
  )
}

export default DraggableLetter
