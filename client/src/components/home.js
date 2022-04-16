import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import TweetPic from "../img/tweetpic.png";
import './home.css'

export default function Home() {
    return (
        <Container className='h-100'>
            <Row>
                <Col className="text-center mt-5 mb-5">
                    <img src={TweetPic} className="img-fluid w-50" alt='Tweet Picture'/>
                </Col>
            </Row>
            <Row>
                <Col className='rounded bg-secondary text-light mt-5 mb-5'>
                    <h3 className='text-center mt-5'>Welcome to the Tweet Searcher!</h3>
                    <h3 className='text-center'>This app utilizes the Twitter API to grab and show tweets of your choosing.</h3>
                    <h3 className='text-center'>Use the user search to search your favorite Twitter user or search by a topic.</h3>
                    <h3 className='text-center mb-5'>You can also select from a recommended list of Twitter users and fetch a random tweet.</h3>
                </Col>
            </Row>
        </Container>
    )
}