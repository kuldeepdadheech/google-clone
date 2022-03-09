import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SearchPage from './pages/SearchPage';


function App() {
  return (
    // BEM 
    <div className="app">
      <Router>
        <Routes>
          <Route path='/search' element={<SearchPage/>}>
           
          </Route>
          <Route path='/' element={<Home/>}>
            
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
