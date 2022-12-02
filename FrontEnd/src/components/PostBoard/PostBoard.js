import React, { useState, useEffect } from "react";
import { PostCard } from '../PostCard/PostCard';
import './PostBoard.css';

export default function PostBoard(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9991/")
            .then(res => res.json())
            .then((result) => {
                setPosts(result);
            })
    }, [])

    return (
        <>
            <h1>Hi there</h1>
            <div className="categoryContainer" bg="light">
                {
                    posts?.map(p => {
                        return < PostCard key={p.id} post={p} />
                    })
                }

            </div>
        </>
    );
}
