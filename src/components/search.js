import React from "react";
import MainCard from "./maincard";
import { Container, Row, Col } from "react-bootstrap";

export default function Search() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>This is our search page. Check out this Card!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MainCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}