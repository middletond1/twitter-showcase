import React from "react";
import MainCard from "./maincard";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function Search() {
    return (
        <div>
            <Container fluid="sm" >
                <Row>
                    <Col className="text-center my-5">
                        <h1>This is our search page. Check out these Cards!</h1>
                    </Col>
                </Row>
                <Row className="w-50 mx-auto">
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter Twitter User</Form.Label>
                            <Form.Control type="text" placeholder="Search..."/>
                        </Form.Group>
                    </Form>
                </Row>
                <Row className="mt-3 w-50 mx-auto">
                    <Col>
                        <MainCard />
                    </Col>
                </Row>
                <Row className="mt-3 w-50 mx-auto">
                    <Col>
                        <MainCard />
                    </Col>
                </Row>
                <Row className="mt-3 w-50 mx-auto">
                    <Col>
                        <MainCard />
                    </Col>
                </Row>
                <Row className="mt-3 w-50 mx-auto">
                    <Col>
                        <MainCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}