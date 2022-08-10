
import * as React from 'react'
import './App.css';
import List from './components/user';
import Home from './components/home-system';

import { Route, Router, Routes } from 'react-router-dom';


function App() {
    return (
    <div className="app">
      
          <List/>
    </div>
      
    );
    
}

export default App;