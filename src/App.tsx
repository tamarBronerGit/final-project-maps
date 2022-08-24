import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Auto from './components/Maps';
import SignUpPage from './components/SingUp';
// import BasicButtons from './components/addSystem';
import  Home  from './components/system/home-system'
import ShowSystem from './components/system/showSystem';
import  List  from './components/userPage'

function App() {

  return (
    <div className="app">
      
       <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/maps"element={<Auto/>} />
            <Route path="/home" element={<Home />} />
       
            <Route path="/ShowSystem/:name/:id" element={< ShowSystem/>} />
            <Route path="/user" element={<List />} />
<<<<<<< HEAD
            {/* <Route path="/details" element={<ShowSystem />} /> */}
            
=======
>>>>>>> 83641428192533be7b1593d7585f681209a375f4
          </Routes>
       </Router>
    </div>
  );
}

export default App;