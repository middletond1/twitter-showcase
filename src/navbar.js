import React from "react";
import './navbar.css'
import { NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="Nav">
            <h1>Navbar</h1>
            <NavLink activeClassName="active" to='/home'>Home</NavLink>
            <NavLink activeClassName="active" to='/search'>Search</NavLink>
        </nav>
    )
}