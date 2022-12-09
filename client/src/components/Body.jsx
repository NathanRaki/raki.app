import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import {Col, Container, Row} from "react-bootstrap";
import "../css/Body.css"
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Minecraft from "./Minecraft";
import BodyContent from "./BodyContent";

export default function Body(props) {
    return(
        <div className="body">
            <Container fluid style={{height: "100%"}}>
                <Row className="mx-5" style={{height: "100%"}}>
                    <Col xs={2}  className="d-none d-xl-block section sidebarCol bg-primary text-bg-primary">
                        <Sidebar path={props.path} />
                    </Col>
                    <Col className="section bodyContent">
                        <BodyContent path={props.path} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}