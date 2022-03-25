import React from "react";
import messageimg from "../img/message.png"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";

import { Link } from 'react-router-dom';

export default function Navcomp() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to='/home'><img style={{height: '50px'}} src={messageimg} /></Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to='/home' className="me-3">Home</Nav.Link>
                    <Nav.Link as={Link} to='/search' className="me-3">Search</Nav.Link>
                    <Nav.Link as={Link} to='/random' className="me-3">Random</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}