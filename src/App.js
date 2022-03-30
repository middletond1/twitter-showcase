import React, { useState } from 'react';

import { 
  BrowserRouter as Router,
  Route,
  Routes
 } from 'react-router-dom';


import Home from './components/home';
import SearchPage from './components/searchpage';
import Random from './components/random';
import mockData from './mockdata';
import NavComponent from './components/navbar';

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
                <Route path='search' element={<SearchPage setSearchTerm={setSearchTerm} tweetData={mockData}/>} />
                <Route path='random' element={<Random />} />
                <Route path="*" element={<p>There's nothing here!</p>}/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}