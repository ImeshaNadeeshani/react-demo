import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TimetableConstraints from "./components/constraints";  
import Data from "./components/data";  
import FileDeletion from "./components/delete";  
import Generate from "./components/generate";  
import Login from "./components/index";  
import ManageData from "./components/manageData";  
import Signup from "./components/signup";  
import TimeTables from "./components/timetables";  

import "./App.css";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TimetableConstraints />} />
        <Route path="/data" element={<Data />} />
        <Route path="/delete" element={<FileDeletion />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/index" element={<Login />} />
        <Route path="/manageData" element={<ManageData />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/timetables" element={<TimeTables />} />
      </Routes>
    </Router>
  );
}

export default App;















