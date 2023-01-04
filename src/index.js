// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import './index.css'
// import App from './App';

// ReactDOM.render(

//   <Router>
//     <Routes>
//       <Route path='/' element={<App/>}/>
//     </Routes>
//   </Router>,

//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
