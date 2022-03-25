import React from "react";
import heartIco from "../img/heart.png";
import retweetIco from "../img/retweet.png";
import './maincard.css';
import { Container, Row, Col } from "react-bootstrap";

export default function MainCard(props) {
    
    return (
        <div className="card">
            <header>
                <Container>
                    <Row sm="auto" className="mt-3">
                        <Col>
                            <img src='http://pbs.twimg.com/profile_images/1478410389276745728/nD4Bb09L_normal.jpg' className="prof-img rounded-circle" />
                        </Col>
                        <Col className="p-0">
                            <p className="prof-name m-0">Dan Ryckert · 8/1/2021 - 6:55pm</p>
                            <p className="prof-screen-name m-0">@DanRyckert</p>
                        </Col>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>          
            </header>
            <main className="card-body">
                <p className="post-text">Here is some content posted by the creator. Neato Burrito!</p>
            </main>
            <footer className="card-footer">
                <Container>
                    <Row>
                        <Col className="text-end pe-0">
                            <img src={retweetIco} className="retweet-img" />
                        </Col>
                        <Col>
                            <p className="retweet-count mb-0">250</p>
                        </Col>
                        <Col className="text-end pe-0">
                            <img src={heartIco} className="heart-img" />
                        </Col>
                        <Col>
                            <p className="favorite-count mb-0">400</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

// {`${props.img}`}
// {props.name}
// {props.screenName}
// {props.time}
// {props.retweetCount}
// {props.favoriteCount}