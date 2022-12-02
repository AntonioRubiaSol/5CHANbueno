import React from "react";
import './PostCard.css';

export default function PostCard(props) {
    return (
        <div className="cardContainer">
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            <img src={props.image} alt="image" />
        </div>
    );
}