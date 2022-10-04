//import Icon from '@mui/material/Icon';
// import DeleteIcon from "@mui/icons-material/Delete";
import { Delete, InsertEmoticon } from '@mui/icons-material';
import { fontFamily } from '@mui/system';
import React, {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import db from "../files/debug";

const Task = ({task, onDelete, onToggleReminder, moveTask, id, index, postMan}) => {
  const ref = useRef(null);
  const [{isDragging}, drag] = useDrag(() => ({
    type: "task",
    item: () => {
      return {id, index};
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging()
      }
    },
    
  }));
  const [{handlerId}, drop] = useDrop(() => 
  ({
      accept: "task",
      collect: (monitor) => ({
        /*isOver: !!monitor.isOver(),*/
        handlerId: monitor.getHandlerId()
      }),
      hover: (item, monitor) => {
        if(!ref.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        // Don't replace items with themselves
        if(dragIndex === hoverIndex) {
          return;
        }
        // determine rectangle on screen;
        const hoverBoundingRect = ref.current?.getBoundingClientRect();
        // get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        // determine mouse position
        const clientOffset = monitor.getClientOffset();
        // get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move wehn the cursor is below 50%.
        // when draggin upwards, only move when the cursor is above 50%.
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        // Dragging upwards;
        if(dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        console.log("I'm supposed to be replaced");
        moveTask(dragIndex, hoverIndex);
        item.index = hoverIndex;

        return;
      },
      drop: (item) => {
        //db();
        console.log("I'm posting to the database");
        console.log("This is being called from the task item being dropped.");
        //const postEvent = new Event('Build');
        //document.dispatchEvent(postEvent);
        console.log("Current task: ", item);
        //postMan();
      }
    }),[task]
    
  )
  drag(drop(ref));
  return (
    <div ref={ref} data-handler-id={handlerId} className = {`task ${task.reminder? 'reminder': ''}`} onDoubleClick={() => onToggleReminder(task.id)}>
        <h3>{task.text}<Delete style={{color: 'red', cursor: 'pointer'}}
                        onClick={() => onDelete(task.id)}/></h3>
        <p>{task.day}</p>
        <p>ID: {task.id}</p>
        <p>Index: {index}</p>
    </div>
  )
}

export default Task