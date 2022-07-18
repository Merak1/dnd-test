import React from 'react'
import {useDrag} from 'react-dnd'


function Picture({id, url}) {
  const [{isDragging},drag ]= useDrag(() => ({
    type: "image",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  return (
    <img 
    ref = {drag}
    src={url} 
    alt={id} 
    style={{
      height: "200px",
      border: isDragging ? "5px solid pink" : "0"
    
    }}/>
  )
}

export default Picture