import React,{useState} from 'react'
import { useDrop } from 'react-dnd'

import angery from "../src/images/angery.jpg"
import law from "../src/images/law.jpg"
import pout from "../src/images/pout.png"

import Picture from './Picture'


const PictureList = [{
  id: "angery",
  url: angery
},
{
  id: "law",
  url: law
},
{
  id: "pout",
  url: pout
}]

function DragDrop() {
const [board, setBoard] = useState([]);

const [{isOver}, drop] = useDrop(()=> ({
  accept: "image",
  drop: (item) => addImageToBoard(item.id),
  collect: (monitor) => ({
    isOver: !!monitor.isOver(),
  })
}))

let addImageToBoard = (id) => {
  console.log("id from addImageToBoard", id)
    const pictureList = PictureList.filter((picture) => id === picture.id)

    // setBoard((board)=> [...board, pictureList[0]])
    setBoard([pictureList[0]])
}
  return (
    <>
    <div className="pictures">
      {PictureList.map((picture) => {
          return <Picture id={picture.id} url={picture.url}/>
      })}
    </div>
    <div className="board" ref={drop}>
    {board.map((picture) => {
          return <Picture id={picture.id} url={picture.url}/>
      })}
    </div>
    </>
  )
}

export default DragDrop