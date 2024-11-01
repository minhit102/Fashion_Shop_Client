// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Thay 'Switch' bằng 'Routes'
import TheHeader from "./containers/TheHeaderTest";
import Dashboard from "./view/Dashboard";
import About from "./view/About";

const App = () => {
  return (
    <div style={{ border: '1px solid black' }}>
      <div style={{ border: '1px solid green' }} >Minh</div>
    </div>
  );
};

export default App;
