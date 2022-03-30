import React from "react";
import TweetCard from "./tweetcard";
import { Container, Row, Col } from "react-bootstrap";

import SearchBar from "./searchbar";

export default function SearchPage({ setSearchTerm, tweetData }) {

    // console.log(tweetData)

    return (
        <div>
            <SearchBar setSearchTerm={ setSearchTerm }/>
            <Container fluid="sm" className="mt-5">
                {tweetData.statuses.map((item, i) => {
                        return (
                            <Row className="mt-3 w-50 mx-auto">
                                <Col>
                                    <TweetCard
                                        date ={item.created_at}
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