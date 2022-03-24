import React from "react";
import heartIco from "../img/heart.png";
import retweetIco from "../img/retweet.png";
import './maincard.css';
import { Container, Row, Col } from "react-bootstrap";

export default function MainCard(props) {
    
    return (
        <div className="card">
            <header>
                <img src={heartIco} className="prof-img" />
                <h3 className="prof-name"></h3>
                <h3 className="prof-screen-name"></h3>
                <h3 className="post-time"></h3>
            </header>
            <main>
                <p className="post-text"></p>
            </main>
            <footer className="card-footer">
                <Container>
                    <Row>
                        <Col className="">
                            <img src={retweetIco} className="retweet-img" />
                        </Col>
                        <Col>
                            <p className="retweet-count mb-0">250</p>
                        </Col>
                        <Col>
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