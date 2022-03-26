import React, { useState } from 'react';
import Home from './components/home';
import Search from './components/search';
import Random from './components/random';
import NavComponent from './components/navbar';
import { 
  BrowserRouter as Router,
  Route,
  Routes
 } from 'react-router-dom';

export default function App() {
  
  const [searchTerm, setSearchTerm] = useState([]);

  console.log(searchTerm);

  return (
    <Router>
      <div className="app">
        <NavComponent />
          <div className='content'>
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='search' element={<Search setSearchTerm={setSearchTerm}/>} />
                <Route path='random' element={<Random />} />
                <Route path="*" element={<p>There's nothing here!</p>}/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}