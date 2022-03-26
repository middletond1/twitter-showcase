import React from "react";
import TweetCard from "./tweetcard";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Search({ setSearchTerm, tweetData }) {

    console.log(tweetData)

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
                {tweetData.statuses.map((item, i) => {
                        return (
                            <Row className="mt-3 w-50 mx-auto">
                                <Col>
                                    <TweetCard 
                                        profilePic={item.user.profile_image_url}
                                        userName={item.user.name}
                                        screenName={item.user.screen_name}
                                        tweetText={item.text}
                                        retweetCount={item.retweet_count}
                                        favoriteCount={item.favorite_count}
                                    />
                                </Col>
                            </Row>
                        )   
                    })
                }
            </Container>
        </div>
    )
}