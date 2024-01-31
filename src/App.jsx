import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/home"><button>Home</button></Link>
          <Link to="/weather"><button>Weather App</button></Link>
        </nav>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/weather" element={<SearchBar />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
