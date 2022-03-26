import Home from './components/home';
import Search from './components/search';
import NavComponent from './components/navbar';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="app">
      <NavComponent />
      <Outlet />
    </div>
  );
}
