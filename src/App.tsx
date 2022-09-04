import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
// import Auto from './components/Maps';
import SignUpPage from './components/SingUp';
// import BasicButtons from './components/addSystem';
import  Home  from './components/system/home-system'
import EditSystem from './components/system/EditSystem';
import  List  from './components/userPage'
import Map from './components/maps/Map';
import '../src/css/app.css';
import { FormDialog } from './components/system/addSystem';


function App() {

  return (
    <div className="app">
      
       <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signUp" element={<SignUpPage />} />
            {/* <Route path="/"element={<Auto/>} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/EditSystem/:name/:id" element={< EditSystem/>} />
            <Route path="/user" element={<List />} />
            {/* <Route path="/details" element={<ShowSystem />} /> */}
        <Route path="/addLocation" element={< FormDialog/>} />
            {/* <Route path="/" element={<Login />} /> */}

            <Route path="/map" element={<Map />} />

          </Routes>
       </Router>

    </div>
  );
}

export default App;