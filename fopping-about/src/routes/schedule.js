import React from "react";
import Nav from "../Nav";
import Footer from "./footer";
import "../Schedule.css";

export default function Schedule() {
    return (
        <div>
            <Nav />
            <h1>My schedules for this month</h1>
            <div className="schedule__container">
                <WeekDay
                    day="Thursday 2/3/2022"
                    activities = {
                        [
                            <TimeSlot
                                Activity="Wake up"
                                Time="7:00am">    
                            </TimeSlot>,
                            <TimeSlot
                                Activity="Oblivion"
                                Time="8:00am"
                            ></TimeSlot>,
                            <TimeSlot
                                Activity="Lunch"
                                Time="11:00am"
                            ></TimeSlot>,
                            <TimeSlot
                                Activity="Oblivion"
                                Time="12:00pm"
                            ></TimeSlot>,
                             <TimeSlot
                                Activity="Exercise"
                                Time="3:00pm"
                            ></TimeSlot>,
                            <TimeSlot
                                Activity="Oblivion"
                                Time="3:30pm"
                            ></TimeSlot>,
                            <TimeSlot
                                Activity="Make Dinner"
                                Time="4:30pm"
                            ></TimeSlot>,
                            <TimeSlot
                                Activity="Eat Dinner"
                                Time="6:30pm"
                            ></TimeSlot>,
                            <TimeSlot
                                Activity="Oblivion"
                                Time="7:00pm"
                                ></TimeSlot>,
                            <TimeSlot
                            Activity="Web Programming"
                            Time="8:00pm"
                            ></TimeSlot>,
                            <TimeSlot
                            Activity="Oblivion"
                            Time="9:00pm"
                            ></TimeSlot>,
                            <TimeSlot
                                Activity="Go to Bed"
                                Time="10:30pm"
                            ></TimeSlot>
                        ]
                    }
                ></WeekDay>
                <WeekDay
                    day="Friday 2/4/2022"
                    activities=
                    {
                        [
                            <TimeSlot
                                Activity="Wake up"
                                Time="6:30am"
                            ></TimeSlot>
                        ]
                    }
                ></WeekDay>
                    
                <WeekDay
                    day="Wednesday 2/9/2022"
                    activities={
                        [
                            <TimeSlot
                                Activity="Wake up"
                                Time="8:30am"
                            />,
                            <TimeSlot
                                Activity="Doomscrolling through reddit"
                                Time="8:45am - 9:30am"
                            />,

                            <TimeSlot
                                Activity="Breakfast"
                                Time="9:30am - 9:45am"
                            />,
                            <TimeSlot  
                                Activity="Twitch"
                                Time="9:45am - 11:00am"
                            />,
                            <TimeSlot
                                Activity="Lunch"
                                Time="11:00am - 11:30am"
                            />,
                            <TimeSlot
                                Activity="Pulling Weeds"
                                Time="11:30am - 12:15am"
                            />,
                            <TimeSlot
                                Activity="Dishes"
                                Time="12:15pm - 12:45pm"
                            />,
                            <TimeSlot
                                Activity="Twitch"
                                Time="1:00pm - 2:15pm"
                            />,
                            <TimeSlot
                                Activity="Pee in my room due to bathroom occupancy, then clean up the mess"
                                Time="2:15pm - 2:45pm"
                            />,
                            <TimeSlot
                                Activity="Therapy"
                                Time="3:00pm - 4:00pm"
                                Notes="What did we learn today? Delete Facebook and Reddit!!!!"
                            />,
                            <TimeSlot
                                Activity="Further cleanup of pee"
                                Time="4:00pm - 4:15pm"
                            />,
                            <TimeSlot
                                Activity="Do Dishes while waiting for salt water for pasta to boil and turkey to defrost in microwave"
                                Time="4:15pm - 4:45pm"
                            />,
                            <TimeSlot  
                                Activity="Costco packup"
                                Time="4:45pm - 5:15pm"
                            />,
                            <TimeSlot
                                Activity="Cook dinner"
                                Time="5:15pm - 5:30pm"
                            />,
                            <TimeSlot
                                Activity="Eat dinner"
                                Time="5:30pm - 6:00pm"
                            />,
                            <TimeSlot
                                Activity="Body Crashes"
                                Time="6:00pm"
                            />,
                            <TimeSlot
                                Activity="Oblivion"
                                Time="6:34pm"
                            />,
                            <TimeSlot  
                                Activity="React"
                                Time="9:30pm"
                            />,
                            <TimeSlot
                                Activity="YouTube drain"
                                Time="10:30pm"
                            />,
                            <TimeSlot
                                Activity="Go to bed"
                                Time="1:00am"
                            ></TimeSlot>
                            /*
                            Prediction: 
                            <TimeSlot
                                Activity="YouTube"
                                Time="4:00pm - 6:30pm"
                            />,
                            <TimeSlot
                                Activity="Dinner and News with Mom"
                                Time="6:30pm - 7:00pm"
                            />,
                            <TimeSlot
                                Activity="Doomscrolling through Reddit"
                                Time="7:00pm - 1:00am"
                            />
                            */

                        ]
                    }
                ></WeekDay>
                <WeekDay
                    day="Thursday 2/10/2022"
                    activities=
                    {
                        [
                            <TimeSlot
                                Activity="Wake up"
                                Time="8:30am"
                            />,
                            <TimeSlot
                                Activity="Breakfast"
                                Time="8:40am - 9:00am"
                            />,
                            <TimeSlot
                                Activity="Pokemon Mystery Dungeon"
                                Time="9:00am - 10:00am"
                            />,
                            <TimeSlot
                                Activity="Walk around the garden"
                                Time="10:00am - 10:30am"
                            />,
                            <TimeSlot
                                Activity="YouTube drain and recover from Caffeine pump"
                                Time="10:30am - 11:30am"

                            />,
                            <TimeSlot
                                Activity="Fopping about with React"
                                Time="11:30am"
                            />
                        ]
                    }
                ></WeekDay>
            </div>
            <Footer />
        </div>
    );
}

class WeekDay extends React.Component {
    /*
        Pseudocode: 
        
        for activity in props.activities:
            place <tr>
            for deftail_text in activity:
                place <td>
                    place detail_text
                place </td>
            place </tr>
    */
    render() {
        return (
            <table className="schedule">
                <thead>
                    <th colspan="2">{this.props.day}</th>
                </thead>
                {
                    this.props.activities.map((slot, slot_key) => {
                        return <tr>{slot}</tr>
                    })
                }
            </table>
        )
    }
}

class TimeSlot extends React.Component {
    render() {
        return (
            <>
            <td>{this.props.Activity}</td>
            <td>{this.props.Time}</td>
            </>
        )
    }
}