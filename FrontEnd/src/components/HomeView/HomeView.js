import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import PostBoard from "../PostBoard/PostBoard";
import './HomeView.css';
import axios from 'axios';

export default function HomeView() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [categoryCreate, setCategoryCreate] = useState("")
    const handleClick = (e) => {
        e.preventDefault();
        const post = { title, message, categoryCreate, id: "0", visibility: true };
        console.log('brooo', post);
        // axios
        //     .post("http://localhost:9991", {
        //         post
        //     }).then(() => {
        //         console.log("New post added")
        //     }).catch(function (error) {
        //         console.log(error);
        //     });
        // console.log("hello")
        axios.post('https://reqres.in/api/articles', post)
            .then(response => setShow(response.post));
        axios.post('http://localhost:9991', {
            title: { title },
            category: { categoryCreate },
            message: { message },
            id: "2",
            visibility: true

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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

                <Button variant="primary" onClick={handleShow} style={{ width: "30%" }} id="create">
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
                                <option id="question" value="question">Question</option>
                                <option value="suggestion">Suggestion</option>
                                <option value="clarification">Clarification</option>
                            </select>
                            <p className="nameInput">Title</p>
                            <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                            <p className="nameInput">Message</p>
                            <input id="message" type="text" style={{ marginBottom: "3%" }} value={message} onChange={(e) => setMessage(e.target.value)} />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleClick}>Create</Button>
                    </Modal.Footer>
                </Modal><br />
                <Button onClick={show}>Show</Button>
            </div>

            <PostBoard
            />
        </>
    );
}