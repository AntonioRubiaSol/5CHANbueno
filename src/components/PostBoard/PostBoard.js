import React, { useState, useEffect } from "react";
import PostCard from '../PostCard/PostCard';
import './PostBoard.css';

export default function PostBoard(props) {
    const categoryBoard = props.category;
    const [posts, setPosts] = useState([]);



    useEffect(() => {
        fetch("http://localhost:9991/")
            .then(res => res.json())
            .then((result) => {
                setPosts(result);
            })
    }, [])


    if (categoryBoard === "Question" && posts.map((post) => post.category) == categoryBoard) {
        return (
            <div className="categoryContainer" bg="light">
                <h1>{props.category}<span class="material-symbols-outlined">question_mark</span></h1>
                <PostCard>
                    title:{posts.title}
                    category:{posts.category}
                    message:{posts.message}
                </PostCard>

            </div>
        );
    }
    else if (categoryBoard === "Suggestion" && posts.map((post) => post.category) == categoryBoard) {
        return (
            <div className="categoryContainer" bg="light">
                <h1>{props.category}<span class="material-symbols-outlined">speaker</span></h1>
                <PostCard>
                    title:{posts.title}
                    category:{posts.category}
                    message:{posts.message}
                </PostCard>
            </div>
        );
    }
    else if (categoryBoard === "Clarification" && posts.map((post) => post.category) == categoryBoard) {
        return (
            <div className="categoryContainer" bg="light"><h1>{props.category}<span class="material-symbols-outlined">edit</span></h1>
                <PostCard>

                </PostCard>
            </div>
        );
    }
}
