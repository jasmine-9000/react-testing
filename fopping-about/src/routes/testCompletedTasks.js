// import { flexbox } from "@mui/system";
import CompletedTask from "../components/completedtask";
import "../components/CompletedTask-1.scss";
const TestTaskCompleted = {
    
        "text": "Task To Be Done",
        "day": "Anytime",
        "datetime_completed":1645264453472,
        "reminder": "true",
        "id": 12345
};

const LongerTestTaskCompleted = {
    
    "text": "Longer Task That Really Needed To Be Done",
    "day": "Anytime",
    "datetime_completed":1645260853472,
    "reminder": "true",
    "id": 12346
};

const ReallyLongTestTaskCompleted = {
    
    "text": "Really Really Long Task That Really Needed To Be Done ASAP",
    "day": "Anytime",
    "datetime_completed":1645253653472,
    "reminder": "true",
    "id": 12346
};
const AllCapsTestTaskCompleted = {
    "text": "TASK THAT NEEDS TO BE DONE ASAP",
    "day": "ANYTIME BITCHES",
    "datetime_completed":1645221053472,
    "reminder": "true",
    "id": 12346
}
const RealisticTestTaskCompleted = {
    "text": "Do the dishes",
    "day": "September 11, 2001 at 9:30am",
    "datetime_completed": 1645663463676,
    "reminder": "false",
    "id": 12347
}

const AllExclamationMarks = {
    "text": "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "day": "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "datetime_completed": "!!!!!!!!!!!!!!!!!!!!!!",
    "reminder": "false",
    "id": 12348
}


const CompletedTaskTest = () => {
  return (
    <div>
        <h1 style={{
            textAlign: "center"

        }}>
            All Completed Tasks</h1>
        <div style = {{
            display: "none",
            justifyContent: "center"
        }}>
            <p className="completed-task-day-container">
                Date set: 
                <span className="completed-task-day">
                    September 11, 2001 at 9:30am
                </span>
            </p>

        </div>
        <div style={{
                        display: "none",
                        justifyContent: "center"
                }}>

            <p className="completed-task-datecompleted-container">
                Completed 
                <span className="completed-task-datecompleted">Wednesday, February 23 2022 at 4:44 PM</span>
            </p>
        </div>
        

        <div className="completed-task-grid">
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
            <CompletedTask task={TestTaskCompleted} index="1"/>
            <CompletedTask task={LongerTestTaskCompleted} index="2"/>
            <CompletedTask task={ReallyLongTestTaskCompleted} index="3"/>
            <CompletedTask task={AllCapsTestTaskCompleted} index="4"/>
            <CompletedTask task={RealisticTestTaskCompleted} index="5"/>
            <CompletedTask task={AllExclamationMarks} index="6"/>
            
            <CompletedTask task={TestTaskCompleted} index="1"/>
            <CompletedTask task={LongerTestTaskCompleted} index="2"/>
            <CompletedTask task={ReallyLongTestTaskCompleted} index="3"/>
            <CompletedTask task={AllCapsTestTaskCompleted} index="4"/>
            <CompletedTask task={RealisticTestTaskCompleted} index="5"/>

            
            <CompletedTask task={TestTaskCompleted} index="1"/>
            <CompletedTask task={LongerTestTaskCompleted} index="2"/>
            <CompletedTask task={ReallyLongTestTaskCompleted} index="3"/>
            <CompletedTask task={AllCapsTestTaskCompleted} index="4"/>
            <CompletedTask task={RealisticTestTaskCompleted} index="5"/>
            
            <CompletedTask task={TestTaskCompleted} index="1"/>
            <CompletedTask task={LongerTestTaskCompleted} index="2"/>
            <CompletedTask task={ReallyLongTestTaskCompleted} index="3"/>
            <CompletedTask task={AllCapsTestTaskCompleted} index="4"/>
            <CompletedTask task={RealisticTestTaskCompleted} index="5"/>
        </div>
    </div>

  )
}


export default CompletedTaskTest;