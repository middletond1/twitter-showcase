import React, { useState } from 'react';
import axios from 'axios';

import { 
  BrowserRouter as Router,
  Route,
  Routes
 } from 'react-router-dom';


import Home from './components/home';
import SearchPage from './components/searchpage';
import Random from './components/random';
import NavComponent from './components/navbar';

export default function App() {
  
  const [searchTerm, setSearchTerm] = useState([]);
  const [searchUser, setSearchUser] = useState([]);
  const [twitterData, setTwitterData] = useState([]);

  React.useEffect(() => {
    const options = {
      method: 'GET',
      url: '/api/twitter',
      params: {q: `from:${searchTerm}`}
    }
    const fetchTwitterAPI = async() => {
      const response = await axios.request(options)
      console.log(response.data);
      setTwitterData(response.data.statuses);
    }
    fetchTwitterAPI();
  }, [searchTerm])

  console.log(searchTerm);

  return (
    <Router>
      <div className="app">
        <NavComponent />
          <div className='content h-100'>
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='search' element={<SearchPage setSearchTerm={setSearchTerm} searchTerm={searchTerm} setSearchUser={setSearchUser} twitterData={twitterData}/>} />
                <Route path='random' element={<Random />} />
                <Route path="*" element={<Home />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}