import React, { Component } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
// import Home from "./components/pages/home/Home";
import Random from "./components/pages/random/Random";
import Statistics from "./components/pages/statistics/Statistics";
import Nav from "./components/layouts/nav/Nav";
import Search from "./components/pages/search/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/random" element={<Random />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    );
  }
}

export default App;
