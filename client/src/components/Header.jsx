import React, {useState} from "react";
import "../css/Header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar expand="lg" bg="none" variant="dark" fixed="top" className="py-3">
            <Container fluid>
                <Navbar.Brand href="/" className="title">Raki</Navbar.Brand>
            </Container>
        </Navbar>
    );
}