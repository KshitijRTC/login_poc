import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import Login from "./Login";
import { useSelector } from "react-redux";
import * as React from 'react';

function App() {
  
  const user = useSelector(state => state.login.data)
  
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path={`/UserDashboard`} element={<UserDashboard />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
