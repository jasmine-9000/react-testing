
import Nav from "../Nav";
import Footer from "./footer";
/*
const FeetCubed = (val) => {
    return (<span>{val}&nbsp;ft<sup>3</sup></span>)
}
*/
export default function Goals()
{
    return (
        <div>
            <Nav />
            <h1>My Potential goals</h1>
            <ul>
                <li>Get a job of some kind</li>
                <li>Make money</li>
                <li>Lose 80 pounds
                    <ul>
                        <li>Exercise More
                        </li>
                    </ul>
                </li>
                <li>Make a great website</li>
                <li>Break my Social Media Addiction</li>
                <li>Work in the garden at least once a day</li>
                <li>Find alternative living arrangements
                    <ul>
                        <li>A single bathroom simply will not do anymore, due to having too many accidents from bathroom occupancy.</li>
                    </ul>
                </li>
            </ul>
            <h2>Potential subgoals</h2>
            <h3>Lose 80 pounds</h3>
            <p style={{fontSize: "20px"}}>Subgoals:</p>
            <p className="indent-me">
                Exercise more
            </p>
            <p className="indent-me-2">
                Turn compost every day
            </p>
            <p className="indent-me">
                Go on diet
            </p>
            <p className="indent-me-2">
                2400 Calories per day
            </p>
            <p className="indent-me-2">
                Make meals with vegetables to reduce hunger.
            </p>




            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br></br>
            <h3>This is a test of CSS hover effects.</h3>
            <div className="dropdown2">           
                <span>Mouse over me</span>
                <div className="dropdown-content2">
                    <p>Hello World </p> 
                </div>
            </div>
            <Footer />
        </div>
    )
}