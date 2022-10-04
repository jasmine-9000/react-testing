
import {useState, useEffect} from 'react';
import CompletedTask from './completedtask';

const dbAddress = 'http://192.168.1.92:4000'; // save Database address to constant so I can reference it and change it later when I deploy

/* current active tasks is only passed in so it Completed lists can update itself whenever it changes. */
const CompletedTasks = (tasks) => {
  // fetch ALL completed tasks
  const fetchCompletedTasks = async () => {
      const res = await fetch(`${dbAddress}/completedtasks/`);
      const data = await res.json();
      return data;
  }
/* ***********************************************
                  UseEffect

      This component's useEffect is to fetch.

      This useEffect triggers everytime the tasks array from the todo list changes.
          Tasks array changes when reminder is toggled, item is added to array, or item is deleted. 
******************************************* */
  useEffect(() => {
      const getCompletedTasks = async () => {
        const completedTasksFetch = await fetchCompletedTasks();
        setCompletedTasks(completedTasksFetch);
      } 
      getCompletedTasks();
  },[tasks]);
  const [completedTasks, setCompletedTasks] = useState([]);
  return (
    <div className="completed-task-grid">
        {
/* ***************************************************************
            Render the header of our completed tasks list.
******************************************************************/
        }
        <div className="completed-task-header">
                <div className="completed-task-name-header">
                    Task
                </div>
                <div className="completed-task-day-header">
                    Due Date
                </div>
                <div className="completed-task-datecompleted-header">
                    Date Completed
                </div>
            </div>
        {
/* ***************************************************************
        Render all completed tasks that are fetched in useEffect(). 
        Updates whenever the todo list is updated in any way. 
******************************************************************/
        }
        {
            completedTasks.map((completedTask) => (
                    <CompletedTask key={completedTask.id} task={completedTask} />
            ))
        } 
    </div>
  )
}

export default CompletedTasks