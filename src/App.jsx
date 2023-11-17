import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="container">
      <h1 className="welcome">Hello React Router!</h1>
      <div id="navbar">
        <Link to="/red">Red</Link> <Link to="/">Home</Link>{" "}
        <Link to="/blue">Blue</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/Red" element={<Red />} />
          <Route path="/" element={<Home />} />
          <Route path="/Blue" element={<Blue />} />
        </Routes>
      </div>
      <footer id="navbar">
        <Link to="/red">Red</Link> <Link to="/">Home</Link>{" "}
        <Link to="/blue">Blue</Link>
      </footer>
    </div>
  );
}

export default App;
