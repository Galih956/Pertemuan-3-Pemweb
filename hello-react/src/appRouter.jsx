import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import App from "./App"; 
import React from "react";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/Profile";
import {Container} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const appRouter = () => {
    return(
        <Router>
            <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Nav className="me-auto"> 
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Profile">Profile</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>           
            </Container>
            </Navbar>
            <Routes>
                <Route path = "/Contact" element={<Contact/>} />
                <Route path="/" element={<App/>}/>
                <Route path = "/About" element={<About/>} />
                <Route path = "/Profile" element={<Profile/>} />
            </Routes>
        </Router>
    )
}

export default appRouter;