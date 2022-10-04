
//import './App.css';
import './Todo.css';
import Nav from "./Nav";
import React from "react";
import {Link} from "react-router-dom";


function App() {
  const [state, setState] = React.useState({
    darkmode: false
  });

  const handleChange = (event) => {
    console.log("Handling change in app");
    setState({
      ...state,
      darkmode: event.target.checked,
    });
  }
  return (
    <div className="App">
        <link
          rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
       />
      <Nav generalStateChange={handleChange} state={state}/>   
      <h1>This new React framework is complicated.</h1>
      <div style={{
        borderBottom: "solid 1px magenta",
        paddingBottom: "1rem"
      }}
      >
        <Link to ="./murders">Murders</Link> |{" "}
        <Link to ="./schedule">Schedule</Link> | {" "}
        <Link to ="./goals">My goals</Link> | {" "}
        <Link to="./todo">To do list</Link>
        </div>  
        <div className="usingDarkmodeTest">
          Are we using darkmode: <br></br>
          {state.darkmode ? "yes": "no"}.
        </div>
    </div>

  );
}

export default App;
