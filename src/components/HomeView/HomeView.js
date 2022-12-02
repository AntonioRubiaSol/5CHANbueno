import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import PostBoard from "../PostBoard/PostBoard";
import './HomeView.css';


export default function HomeView() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [categoryBoard, setCategoryBoard] = useState("Question");
    const changeCategory = (e) => setCategoryBoard(e.target.value);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [categoryCreate, setCategoryCreate] = useState("")
    const handleClick = (e) => {
        e.preventDefault();
        const post = { title, message, categoryCreate };
        console.log(post);
        fetch("http://localhost:9991/", {
            method: "POST",
            headers: { "Content-Type": "application" },
            body: JSON.stringify(post)
        }).then(() => {
            console.log("New post added")
        })
    }

    return (
        <>
            <Navbar bg="light" expand="lg" className="nav">
                <div className="container-fluid justify-content-center">
                    <Navbar.Brand className="brand" style={{ fontSize: "60px" }}>5CHAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
            </Navbar>

            <div className="buttonContainer d-flex flex-column">

                <Button variant="primary" onClick={handleShow} style={{ width: "30%" }}>
                    Create Post
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>New Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="newPost">
                            <label for="category" className="nameInput">Category</label><br />
                            <select name="category" id="category" value={categoryCreate} onChange={(e) => setCategoryCreate(e.target.value)}>
                                <option value="question">Question</option>
                                <option value="suggestion">Suggestion</option>
                                <option value="clarification">Clarification</option>
                            </select>
                            <p className="nameInput">Title</p>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                            <p className="nameInput">Message</p>
                            <input type="text" style={{ marginBottom: "3%" }} value={message} onChange={(e) => setMessage(e.target.value)} />
                            <p>Image</p>
                            <input type="file" id="image" accept="image/png, image/jpeg" />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleClick}>Create</Button>
                    </Modal.Footer>
                </Modal><br />

                <label for="category" className="nameInput" style={{ marginTop: "1%" }}>Category</label><br />
                <select name="category" id="category" style={{ height: "14%", width: "30%" }} defaultValue={categoryBoard} onChange={changeCategory}>
                    <option value="Question">Question</option>
                    <option value="Suggestion">Suggestion</option>
                    <option value="Clarification">Clarification</option>
                </select>

            </div>

            <PostBoard
                category={categoryBoard}
            />
        </>
    );
}