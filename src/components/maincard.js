import React from "react";
import heartIco from "../img/heart.png";
import retweetIco from "../img/retweet.png";
import './maincard.css';

export default function MainCard(props) {
    
    return (
        <div className="card">
            <header>
                <img src='../img/heart.png' className="prof-Img" />
                <h3 className="prof-name"></h3>
                <h3 className="prof-screen-name"></h3>
                <h3 className="post-time"></h3>
            </header>
            <main>
                <p className="post-text"></p>
            </main>
            <footer>
                <img src={retweetIco} className="retweet-img" />
                <p className="retweet-count"></p>
                <img src={heartIco} className="heart-img" />
                <p className="favorite-count"></p>
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