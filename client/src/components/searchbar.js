import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap"

export default function SearchBar({ setSearchTerm }) {
    return (
        <div className="bg-secondary pb-5">
            <Container>
                <Row>
                    <Col className="text-center my-5">
                        <h1 className="text-light">Search Twitter</h1>
                    </Col>
                </Row>
                <Row className="w-50 mx-auto">
                    <Form className="d-flex">
                        <Form.Group className="flex-grow-1">
                            <Form.Control type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by User or Content"/>
                        </Form.Group>
                        <Form.Group controlId="formButton" className="">
                            <Button variant="dark">User</Button>
                        </Form.Group>
                        <Form.Group controlId="formButton" className="">
                            <Button variant="dark">Content</Button>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}