import Task from "./task";
import React, {useState, useCallback} from "react";
import {useDrop} from 'react-dnd';
import update from 'immutability-helper';

const Todolist = ({tasks, onDelete, onToggleReminder, changer, postMan}) => {

  //const [tasks1, setTasks1] = useState(tasks);
  // do not use "tasks.push()". Use setTasks() instead.
  
  const [{isOver}, drop] = useDrop(() => 
  ({
      accept: "task",
      drop: (item) => {
        console.log("Hello world")
        console.log(item);
        console.log('me')
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      }),
      receive: (arg) => {
        return;
      } 
    }),[]
  )

/* *******************************************************
Whenever a task is moved, use this callback function. It takes the drag index and the hover index.
It will set the state of "tasks" object in todo.js to the new task state.
******************************************************** */
  const moveTask = useCallback((dragIndex, hoverIndex) => {
    console.log("I'm calling the moveTask() function.")
    drop();
    changer((prevTasks) => {
      console.log("Previous Tasks: ");
      console.log(prevTasks)
      const newTasks = update(prevTasks, {
        $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, prevTasks[dragIndex]]
          ]
        });
      console.log("New Tasks: ");
      console.log(newTasks);

      return (newTasks);
      
        })
  });
/* *************************************************
    Instead of rendering it in the component, we call the callBack() function.
************************************************** */
  const renderTask = useCallback((task, index) => {
    return (<Task key={task.id} task={task} onDelete={onDelete} onToggleReminder={onToggleReminder} id={task.id} index={index} moveTask = {moveTask} postMan = {postMan}/>)
  }, []);
  return (
    <>
        {
            tasks.map((task, i) => (
                renderTask(task, i)
            ))
        }
    </>
  )
}

export default Todolist