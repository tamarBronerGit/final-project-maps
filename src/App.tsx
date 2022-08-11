import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BasicButtons from './components/addSystem';
import  Home  from './components/home-system'
import  List  from './components/user'

function App() {
  return (
    <div className="app">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;