import './App.css';
import Home from './home';
import Search from './search';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}
