import React from 'react';
import {
  BrowserRouter,
  Route,
 Routes
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/"
           element={<Home/>} 
          />

          <Route path="/dash"
          element={<Dashboard/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
