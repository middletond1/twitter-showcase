import React from "react";
import MainCard from "./maincard";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function Search() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="text-center my-5">
                        <h1>This is our search page. Check out this Card!</h1>
                    </Col>
                </Row>
                <Row>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter Twitter User</Form.Label>
                            <Form.Control type="text" placeholder="Search..."/>
                        </Form.Group>
                    </Form>
                </Row>
                <Row className="m-3">
                    <Col>
                        <MainCard />
                    </Col>
                </Row>
                <Row className="m-3">
                    <Col>
                        <MainCard />
                    </Col>
                </Row>
                <Row className="m-3">
                    <Col>
                        <MainCard />
                    </Col>
                </Row>
                <Row className="m-3">
                    <Col>
                        <MainCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}