import React from "react";

export default function MainCard(props) {
    
    return (
        <div className="card">
            <header>
                <img src={props.img} className="prof-Img" />
                <h3 className="prof-name">{props.screenName}</h3>
                <h3 className="prof-screen-name">{props.screenName}</h3>
                <h3 className="post-time">{props.time}</h3>
            </header>
            <main>
                <p className="post-text"></p>
            </main>
            <footer>
                <img src='../img/retweet.jpg' className="retweet-img" />
                <p className="retweet-count">{props.retweetCount}</p>
                <img src='../img/heart.jpg' className="heart-img" />
                <p className="favorite-count">{props.favoriteCount}</p>
            </footer>
        </div>
    )
}