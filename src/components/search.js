import React from "react";
import TweetCard from "./tweetcard";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Search({ setSearchTerm, mockData }) {
    return (
        <div>
            <Container fluid="sm">
                <Row>
                    <Col className="text-center my-5">
                        <h1>Search Twitter</h1>
                    </Col>
                </Row>
                <Row className="w-50 mx-auto">
                    <Form className="d-flex">
                        <Form.Group className="flex-grow-1">
                            <Form.Control type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by User or Content"/>
                        </Form.Group>
                        <Form.Group controlId="formButton" className="">
                            <Button variant="secondary">User</Button>
                        </Form.Group>
                        <Form.Group controlId="formButton" className="">
                            <Button variant="secondary">Content</Button>
                        </Form.Group>
                    </Form>
                </Row>
                <Row className="mt-3 w-50 mx-auto">
                    <Col>
                        <TweetCard />
                    </Col>
                </Row>
                {/* {mockData.map((item) => {
                    <Row className="mt-3 w-50 mx-auto">
                        <Col>
                            <TweetCard />
                        </Col>
                    </Row>
                })
                } */}
            </Container>
        </div>
    )
}