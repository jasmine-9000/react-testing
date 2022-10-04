import {useDrag} from 'react-dnd';
import "./CompletedTask-1.scss";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const CompletedTask = ({task, index}) => {
  
  const dateFormatter = (inputdate) => {
      
      let newdate = new Date(parseInt(inputdate)); 
      let day = days[newdate.getDay()];
      let month = months[newdate.getMonth()];
      let date = newdate.getDate();
      let year = newdate.getFullYear();
      let hour =newdate.getHours();
      let minutes = newdate.getMinutes();
      let AMPM = hour >= 12 ? 'PM': 'AM'; 
      hour = (hour > 12) ? hour - 12 : hour;
      if (hour === 0){ hour = 12;}
      let formatted = `${day}, ${month} ${date} ${year} at ${hour}:${minutes} ${AMPM}`;
      return formatted;
  }
  return (
    <div className="completed-task" key={index}>
        <p className="completed-task-name">{task.text}</p>
        <p className="completed-task-day-container">Date set: <span className="completed-task-day">{task.day}</span></p>
        <p className="completed-task-datecompleted-container">Completed <span className="completed-task-datecompleted">{
                                                                  dateFormatter(task.datetime_completed)}</span>
        </p>
    </div>
  )
}



export default CompletedTask