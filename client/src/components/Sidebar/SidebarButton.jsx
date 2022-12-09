import React from "react";
import {Link} from "react-router-dom";
import "../../css//Sidebar/SidebarButton.css";
import {Col, Row} from "react-bootstrap";

const activeStyle = {
    color: "#fff"
};

export default function SidebarButton(props) {
    return (
        <div className="sidebarButton">
            <Row>
                <Col xs={2} className="text-center">
                    {props.icon ? props.icon : null}
                </Col>
                <Col>
                    <Link
                        to={props.to}
                        style={props.path === props.to ? activeStyle : null}>
                        {props.text}
                    </Link>
                </Col>
            </Row>
        </div>
    );
}