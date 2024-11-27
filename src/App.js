import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import './CSS/App.css'
import Contact from "./components/Contact";

const App = () => {

  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={ <Home /> } />
          <Route path="/gallery" element={ <Gallery /> } />
          <Route path="/contact" element={ <Contact />} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
