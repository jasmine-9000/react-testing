import "./Nav.css";
import * as React from 'react';
import Switch from '@mui/material/Switch';
// import TextField from '@mui/material/TextField';


function Nav(props) {
  /*
  const [state, setState] = React.useState({
    darkmode: false
  });

  const handleChange = (event) => {
    setState({
      ...state,
      darkmode: event.target.checked,
    });
    console.log('Nav state changed');
    console.log("Event Target: ", event.target);
    console.log(event.target.checked);
    console.log(event.target.className);
    console.log(event.target.name);
    console.log(event);
  };
  */
  return (
    <div className="nav">
        <ul>
            <li><a className="nav__link" href="./">Home</a></li>
            <li><a className="nav__link" href="./murders">Murders</a></li>
            <li className="dropdown">
              <a className="nav__link" href="https://www.google.com/">Search Engines</a>
            
              <div className="dropdown-content">
                  <a className="nav__link" href="https://www.google.com">Google</a>
                  <a className="nav__link" href="https://www.bing.com">Bing</a>
                  <a className="nav__link" href="https://www.duckduckgo.com">Duck Duck Go</a>
              </div>
            </li>
                


            <li><a className="nav__link" href="./404.html">Contact Us</a></li>
            <li><Switch className="darkmode-toggle" checked={props.state.darkmode} onChange={props.generalStateChange}></Switch></li>
            <li>{props.state.darkmode ? 'dark mode': 'light mode'}</li>
        </ul>
    </div>
  );
}

export default Nav;