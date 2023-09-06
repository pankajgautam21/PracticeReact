import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css';
import Form from './Component/form';
import About from "./Component/about";
import Navbar from "./Component/Navbar";
import Page from "./Component/page";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <div className="container my-5">
       <Routes>
          <Route path="/Form" element={<Form heading="Write anything"/>}/> 
          <Route path="/About" element={<About />} />
          <Route path="/Page" element={<Page/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
