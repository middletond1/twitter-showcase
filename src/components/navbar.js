import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";

import { Link } from 'react-router-dom';

export default function Navcomp() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to='/home'>Navbar</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/search'>Search</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}