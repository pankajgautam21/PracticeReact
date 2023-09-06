import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

//import Apptest from './App.test';

ReactDOM.render(
<BrowserRouter>
    <App/>
  </BrowserRouter>,
 
  document.getElementById("root")
);

