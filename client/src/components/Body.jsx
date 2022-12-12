import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "../css/Body.css"
import BodyContent from "./BodyContent";
import Sidebar from "./Sidebar/sidebar.component";

export default function Body(props) {
    return(
        <div className="body">
            <Container fluid style={{height: "100%"}}>
                <Row className="mx-5" style={{height: "100%"}}>
                    <Col xs={2}  className="d-none d-xl-block section sidebarCol text-bg-primary">
                        <Sidebar />
                    </Col>
                    <Col className="section bodyContent">
                        <BodyContent />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}