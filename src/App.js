import './App.css';
import Home from './home';
import Search from './search';
import Navcomp from './navbar';
import { Outlet } from 'react-router-dom';



export default function App() {
  return (
    <div className="app">
      <Navcomp />
      <Outlet />
    </div>
  );
}
