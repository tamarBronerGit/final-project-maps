import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Auto from './components/Maps';
import SignUpPage from './components/SingUp';
// import BasicButtons from './components/addSystem';
import  Home  from './components/system/home-system'
import ShowSystem from './components/system/showSystem';
import  List  from './components/userPage'
import Map from './components/Map';
import SearchPage from './components/SearchPage';

function App() {

  return (
    <div className="app">
      
       <Router>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/signUp" element={<SignUpPage />} />
            {/* <Route path="/"element={<Auto/>} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/ShowSystem/:name/:id" element={< ShowSystem/>} />
            <Route path="/user" element={<List />} />
<<<<<<< HEAD

            {/* <Route path="/details" element={<ShowSystem />} /> */}
            

=======
            <Route path="/" element={<SearchPage />} />
>>>>>>> d184bacffaf27c1a847b70f54dfc9764e6e9d0de
          </Routes>
       </Router>
    </div>
  );
}

export default App;