import React from "react";
import heartIco from "../img/heart.png";
import retweetIco from "../img/retweet.png";
import './maincard.css';
import { Container, Row, Col } from "react-bootstrap";

export default function TweetCard({ date, profilePic, userName, screenName, tweetText, retweetCount, favoriteCount}) {
    
    function createDate(dateInfo) {
        return `${dateInfo.slice(4, 10)}, ${dateInfo.slice(26, 30)}`
    }

    return (
        <div className="card">
            <header>
                <Container>
                    <Row sm="auto" className="mt-3">
                        <Col>
                            <img src={profilePic} className="prof-img rounded-circle" />
                        </Col>
                        <Col className="p-0">
                            <p className="prof-name m-0 fw-bold">{userName} · {createDate(date)}</p>
                            <p className="prof-screen-name m-0">@{screenName}</p>
                        </Col>
                    </Row>
                </Container>          
            </header>
            <main className="card-body">
                <p className="post-text">{tweetText}</p>
            </main>
            <footer className="card-footer">
                <Container>
                    <Row>
                        <Col className="text-end pe-0">
                            <img src={retweetIco} className="retweet-img" />
                        </Col>
                        <Col>
                            <p className="retweet-count mb-0">{retweetCount}</p>
                        </Col>
                        <Col className="text-end pe-0">
                            <img src={heartIco} className="heart-img" />
                        </Col>
                        <Col>
                            <p className="favorite-count mb-0">{favoriteCount}</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}