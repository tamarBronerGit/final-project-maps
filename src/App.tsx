import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
// import Auto from './components/Maps';
import SignUpPage from './components/SingUp';
// import BasicButtons from './components/addSystem';
import Home from './components/system/home-system'
import EditSystem from './components/system/EditSystem';
import List from './components/userPage'
import Map from './components/maps/Map';
import '../src/css/app.css';

function App() {

  return (
    <div className="app">

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/map" element={<Map />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/EditSystem/:name/:id" element={< EditSystem />} />
          <Route path="/user" element={<List />} />
          {/* <Route path="/details" element={<ShowSystem />} /> */}

        </Routes>
      </Router>

    </div>
  );
}

export default App;