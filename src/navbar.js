import React from "react";
import './navbar.css'
import { NavLink } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

export default function Navbar() {
    return (
        <nav className="Nav">
            <h1>Navbar</h1>
            <LinkContainer to='/home'>
                <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to='/search'>
                <Button>Search</Button>
            </LinkContainer>
        </nav>
    )
}