import * as React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home  from './components/home-system'
import  List  from './components/user'

function App() {
  return (
    <div className="app">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;