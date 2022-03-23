import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import Home from './components/home';
import Search from './components/search';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='home' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path="*" element={<p>There's nothing here!</p>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

