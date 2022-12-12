import React from "react";
import {Link} from "react-router-dom";
import "../../css//Sidebar/SidebarButton.css";
import {Col, Row} from "react-bootstrap";
import {withRouter} from "../../common/with-router";

const activeStyle = {
    color: "#fff"
};

function SidebarButton(props) {
    const path = props.router.location.pathname;
    return (
        <div className="sidebarButton">
            <Row>
                <Col xs={2} className="text-center">
                    {props.icon ? props.icon : null}
                </Col>
                <Col>
                    <Link
                        to={props.to}
                        style={path === props.to ? activeStyle : null}
                        onClick={props.cb}>
                        {props.text}
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default withRouter(SidebarButton);