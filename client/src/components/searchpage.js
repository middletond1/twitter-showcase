import React from "react";
import TweetCard from "./tweetcard";
import { Container, Row, Col } from "react-bootstrap";

import SearchBar from "./searchbar";

export default function SearchPage({ setSearchTerm, twitterData }) {

    // console.log(twitterData)

    return (
        <div>
            <SearchBar setSearchTerm={ setSearchTerm }/>
            <Container fluid="sm" className="mt-5">
                {twitterData.map((item, i) => {

                    let photos;
                    let video;
                    // let gif;

                    if(item.hasOwnProperty('extended_entities')) {
                        item.extended_entities.media.map(media => {
                            if(media.type === "photo") {
                                photos = item.extended_entities.media.map(media => {
                                    return media.media_url
                                })
                            } 
                            if(media.type === "video") {
                                item.extended_entities.media.map(media => {
                                    media.video_info.variants.map(variant => {
                                        if(variant.bitrate === 2176000) {
                                            video = variant.url
                                        }                                          
                                    })
                                })
                            }
                            // if(media.type === "animated_gif") {
                            //     item.extended_entities.media.map(media => {
                            //         media.video_info.variants.map(variant => {
                            //             if(variant.bitrate === 2176000) {
                            //                 video = variant.url
                            //             }                                          
                            //         })
                            //     })
                            // }
                        })            
                    }
                    
                    return (
                        <Row className="mt-3 w-50 mx-auto">
                            <Col>
                                <TweetCard
                                    date={item.created_at}
                                    profilePic={item.user.profile_image_url}
                                    userName={item.user.name}
                                    screenName={item.user.screen_name}
                                    tweetText={item.text}
                                    retweetCount={item.retweet_count}
                                    favoriteCount={item.favorite_count}
                                    photo={photos}
                                    video={video}
                                    // gif={}
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