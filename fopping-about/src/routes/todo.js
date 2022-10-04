/*
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { toolbarClasses } from '@mui/material';
//import "../components/CompletedTask.scss";
// import top100Films from "../files/top100Films.json";
import Nav from "../Nav";
*/

/* ********************************************************
                  Imports
****************************************************** */
import "../components/Test.scss";
import "../components/Todo.css";

import React from 'react';
import PropTypes from 'prop-types';
import "../Todo.css";
import Button from "../components/button";
import Todolist from "../components/todolist";
import AddTask from "../components/addtask";
import {useState, useEffect} from 'react';
import CompletedTasks from '../components/completedtasks';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ColorLensOutlined } from "@mui/icons-material";



/* *********************************************************
                    Variables
******************************************************** */
// address where our database is located.
const dbAddress = 'http://192.168.1.92:4000';

// The actual component we are exporting. This will be rendered every time we go to:
// https://{host}:{port}/todo, as defined in the BrowserRouter in index.js. 
const Todo = (props) => {

/* **********************************************************
                  State variables
************************************************************ */
  // State variable to determine whether or not to show the form to add a task.
  const [showAddTask, setShowAddTask] = useState(false);

  // Used as a variable to store. Starts out empty, and is filled in useEffect() on page load.
  const [tasks, setTasks] = useState([]);

  // Determines whether or not to show completed tasks.
  const [showCompleted, setShowCompleted] = useState(true);
  
  
/* ***********************************************************
                  Use Effect
    We're only triggering useEffect on the first page load.
    It fetches the current tasks, and then loads them onto the page.
********************************************************** */
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])

/* ***********************************************************
                  Database Fetch Calls 
*********************************************************** */
  // Fetch All Tasks from database.
  const fetchTasks = async () => {
    const res = await fetch(`${dbAddress}/todolist/`);
    const data = await res.json();
    return data;
  }
  // Fetch singular task from database (by id).
  // @arg id: id of task you want to fetch.
  const fetchTask = async (id) => {
    const res = await fetch(`${dbAddress}/todolist/${id}`);
    const data = await res.json();
    return data;
  }

  // Add Task to database and to current page.
  // @arg task: Task react object. 
  const addTask = async (task) => {
    // To create a task, you must use 'POST'. 
    const res = await fetch(`${dbAddress}/todolist`, {method: 'POST', 
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
    
    });
    const data = await res.json();
    // we don't need to create an ID for our new task in React, our database will do that for us.
    setTasks([...tasks, data])

  }

  // Delete Task from database and from current page,
  // then adds that task to the completed tasks database.
  const deleteTask = async (id) => {
    const resFetch = await fetchTask(id);
    // remove Todolist id, as it may result in id collisions in our database.
    delete resFetch.id;
    // add current date in milliseconds from epoch to our task to let us know when we completed the task.
    resFetch["datetime_completed"] = Date.now();
    // Create 'POST' request for our task to the completed tasks database.
    const resPost = await fetch(`${dbAddress}/completedtasks`, {
                        method: 'POST',
                        headers: {
                          'Content-type': 'application/json'
                        },
                        body: JSON.stringify(resFetch)
                        })
                        .catch((error) => {
                          console.error('Error', error);
                          alert('An error has occurred.');
                        });

    // Delete task from todolist database.
    const resDelete = await fetch(`${dbAddress}/todolist/${id}`, {method: 'DELETE'});
    
    // Delete task from current website.
    setTasks(tasks.filter((task)=>task.id !== id));
  }

  /* ******************************************
              Toggle Reminder on individual item

  @arg id: The id of the reminder you want to toggle.

  Throws a PUT request to the server to change the reminder status of the item on the server.

  Then, changes the reminder status of the item on the page. 
  ****************************************** */
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    console.log("Fetched task: ");
    console.log(taskToToggle);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
    console.log("Updated Fetched task:");
    console.log(updatedTask);
    /*
    const res = await fetch(`${dbAddress}/todolist/${id}`,
                        {
                          method: 'PUT',
                          headers: {
                            'Content-type': 'application/json'
                          },
                          body: JSON.stringify(updatedTask)
                        });
    */

    // set task grid with all current tasks and item with reminder toggled.
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder}: task))

    await fetch(`${dbAddress}/todolist/${id}`,
                        {
                          method: 'POST',
                          headers: {
                            'Content-type': 'application/json'
                          },
                          body: JSON.stringify(updatedTask)
                        }).then(response => {
                            if(!response.ok) {
                              throw Error(response.statusText)
                            }
                              response.json()
                          })
                          .then(data => console.log(data))
                          .catch(error => console.error("Something went wrong: " + error));

    
  } 
  /* *************************************************
    Updates the current task list. 
    Called on reordering the task list.
    No arguments. Fetches the component's "task" variable.
  *************************************************** */
  const updateTasksOnDatabase = async () => {
    console.log("I'm updating the tasks on the database with what I've got now.");
    console.log("Here's what I've got:");
    console.log(tasks);
    console.log("Typeof() tasks:");
    console.log(typeof tasks);
    let tempTasks = {};
    // https://simplernerd.com/js-iterate-json/#:~:text=We%E2%80%99ll%20go%20over%20a%20few%20ways%20JavaScript%20allows,and%20values%20in%20a%20bunch%20of%20different%20ways.
    for (let [index,task] of Object.entries(tasks)) {
      task.id = index;
      tempTasks[index] = task;
    }
    /*
    tasks.foreach((task, index) => {
      task.id = index;
    })
    */
    console.log("Here's what I've got after sorting them by index:");
    console.log(tasks);
    console.log("Here's my temporary task thing I created just for this function: ");
    console.log(tempTasks);

    for (let [index,taskA] of Object.entries(tempTasks)) {
      const address = `${dbAddress}/todolist/${index}`;
      console.log("Posting this task to ", address, ":");
      console.log(taskA);
      await fetch(address,
                {
              method: 'PUT',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(taskA)
            }).then(response => response.json())
              .then(() => {
                  
                  console.log("Happily posted.")
                  
              })
              .catch(error => console.error("Something went wrong: " + error))       
    }
    /*
    for(var key in tasks) {
      console.log(key);
      console.log(tasks[key]);
    }*/
  /*tasks.foreach((task, index) => {
    fetch(`${dbAddress}/todolist/${task.index}`,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({tasks})
    }).then(response => response.json())
      .then(() => console.log("Happily posted."))
      .catch(error => console.error("Something went wrong: " + error))
  })
  /*

    await fetch(`${dbAddress}/todolist/`,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({tasks})
    }).then(response => response.json())
      .then(() => console.log("Happily posted."))
      .catch(error => console.error("Something went wrong: " + error))
   */   
  }


  // Toggle the 'Add Task' form.
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  }

  // Toggle whether or not the completed tasks are shown at the bottom
  const toggleCompletedTasks = () => {
    setShowCompleted(!showCompleted);
  }

 

/* ***************************************************
              To do list rendering
*************************************************** */
  return (
    // Todo must return a DndProvider for it to have drag and drop functionality.
    <DndProvider backend={HTML5Backend}>
    {
/* ***************************************************
          Render the header with the "Add" and "Close" Button.
******************************************************/
    }
    <header className='header'>
      <h1>{props.title}</h1>
      <Button color={showAddTask ? 'red': 'green'}
              text={showAddTask ? 'Close': 'Add' }
              onClick={toggleAddTask}></Button>
      
    </header>
    
    {
/* ***************************************************
    Render the "Add Task" form when we click the "Add Button", and remove it when we click the "Close Button".

******************************************************/
    }
    {
      showAddTask && <AddTask onAdd = {addTask}/>
    }
    {
/*************************************************************
    Render tasks currently to do. If there are no tasks, show "No tasks to show" message. 
* ***********************************************************/
    }
    
    {
      tasks.length > 0 ? 
            <Todolist tasks={tasks} 
                      onDelete={deleteTask}
                      onToggleReminder={toggleReminder}    
                      changer = {setTasks}
                      postMan = {updateTasksOnDatabase}
                      /> 
            : 'No Tasks to Show'
    }
    {
/* ****************************************** 
Show Completed tasks only when we want to. Have a button in place for when we want to show buttons.
    ********************************************* */
    }
    <Button 
      text={showCompleted ? "Hide Completed Tasks": "Show Completed Tasks"}
      color={showCompleted ? 'steelblue': '#1eb9b9'}
      onClick={toggleCompletedTasks}></Button>
     {showCompleted && <CompletedTasks tasks={tasks}/>}
    </DndProvider>
  )
}

Todo.defaultProps = {
  title: 'To do list',
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Todo;