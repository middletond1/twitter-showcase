import React from "react";
import MainCard from "./maincard";
import Container from "react-bootstrap/Container";

export default function Search() {
    return (
        <div>
            <Container>
                <h1>This is our search page. Check out this Card!</h1>
                <MainCard />
            </Container>
        </div>
    )
}