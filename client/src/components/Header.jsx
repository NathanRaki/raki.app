import React, {useCallback, useEffect, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavbarToggle from "react-bootstrap/NavbarToggle";
import {Button, Form, Nav, NavDropdown} from "react-bootstrap";
import SidebarButton from "./Sidebar/SidebarButton";
import "../css/Header.css";
import {withRouter} from "../common/with-router";
import { store } from "../App";
import {useSelector} from "react-redux";


const homeIcon = <i className="fa-solid fa-house fa-xl"></i>
const minecraftIcon = <i className="icon-minecraft icon-minecraft-grass-block" />
const loginIcon = <i className="fa-solid fa-right-to-bracket fa-xl"></i>
const registerIcon = <i className="fa-solid fa-user-plus fa-xl"></i>

function Header(props) {
    const user = useSelector(() => store.getState().user.currentUser);
    const path = props.router.location.pathname;

    function toggle() {
        const toggler = document.querySelector(".navbar-toggler");
        toggler.click();
    }

    return(
        <div className="header">
            <Navbar expand="xl" bg="none" variant="dark" fixed="top" className="py-3">
                <Container fluid>
                    <Navbar.Brand href="/" className="title">Raki</Navbar.Brand>
                    <Navbar.Toggle aria-controls={"offcanvasNavbar"} />
                </Container>
                <Navbar.Offcanvas id="offcanvasNavbar" placement="end" className="customOffCanvas text-bg-dark">
                    <Offcanvas.Header closeButton closeVariant="white">
                        <Offcanvas.Title id={"offcanvasNavbarLabel"}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 d-xl-none">
                            <SidebarButton icon={homeIcon} to="/" text="Home" path={path} cb={toggle} />
                            <SidebarButton icon={minecraftIcon} to="/minecraft" text="Minecraft" path={path} cb={toggle} />
                            {!user && <SidebarButton icon={registerIcon} to="/register" text="Register" cb={toggle} />}
                            {!user && <SidebarButton icon={loginIcon} to="/login" text="Login" cb={toggle} />}
                            {user && <SidebarButton icon={loginIcon} to="/profile" text="Profile" cb={toggle} />}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </div>
    );
}

export default withRouter(Header);