import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./modules/NavBar.js";
import OtherEvent from "./modules/OtherEvent.js";
import BottomBanner from "./modules/BottomBanner.js";

import Home from "./pages/Home.js";
import Information from "./pages/Information.js";
import MyStory from "./pages/MyStory.js";

import "../index.css";
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <div>
        <Routes>
          <Route exact path ="/" element={<Home />} />
          <Route path ="/information/:name" element={<Information />} />
          <Route path ="/information" element={<Information />} />
          <Route exact path ="/mystory" element={<MyStory />} />
        </Routes>
      </div>
      <OtherEvent />
      <BottomBanner />
  </Router>
  );
}

export default App;
