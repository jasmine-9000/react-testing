 /*list": [
        {
            "id": 1,
            "text":"dr mario",
            "day":"feb 15 2022",
            "reminder": true
        },
        {
            "id": 2,
            "text": "dr dre",
            "day": "feb 16 2022",
            "reminder": true
        },
        {     
            "id":3,
            "text":"dr octopus",
            "day":"feb 17 2022",
            "reminder": false
        }*/
import {useState} from 'react';

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const onSubmit=(e) => {
      e.preventDefault();
      if(!text) {
          alert('Please add task.');
          return;
      }
      onAdd({text, day, reminder});
      setText('');
      setDay('');
      setReminder(false);
      // const id=Math.floor(Math.random() * 10000) + 1;
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        
        <div className="form-control">
            <label>Day and Time</label>
            <input type="text" placeholder="Add Day and Time" value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value='Save Task' className='btn btn-block'></input>
        
    </form>
  )
}

export default AddTask