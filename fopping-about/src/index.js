import React from 'react'; import {render} from 'react-dom';
import './index.css';
import { 
        BrowserRouter,
        Route, 
        Routes,
      } from "react-router-dom";
//      import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import App from './App';
import Murders from "./routes/murders";
import Schedule from "./routes/schedule";
import NotFound from "./NotFound";
import Goals from "./routes/goals";
import Todo from "./routes/todo";
import CompletedTaskTest from "./routes/testCompletedTasks";
import Animalcrossing from "./routes/animalcrossing";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CookiesProvider} from "react-cookie";
const rootElement = document.getElementById('root')



render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/murders" element={<Murders />} />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route exact path="/goals" element = {<Goals />} />
        <Route exact path="/todo" element = {<Todo />} />
        <Route path="/404" component={<NotFound/>} />
        <Route path="/404.html" component={<NotFound/>} />
        <Route path="/test" element={<CompletedTaskTest />} />
        <Route path="/animalcrossing" element={<Animalcrossing />} />
      </Routes>
    </BrowserRouter>
  </CookiesProvider>, rootElement
);
/*
reactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
