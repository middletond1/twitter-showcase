import './App.css';
import Home from './home';
import Search from './search';
import { Link, Outlet } from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <nav className="Nav">
        <h1>Navbar</h1>
        <Link to='/home'>Home</Link>
        <Link to='/search'>Search</Link>
      </nav>
      <Outlet />
    </div>
  );
}
