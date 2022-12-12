import React, {useEffect, useState} from "react";
import UserService from "../services/user.service";
import {Container} from "react-bootstrap";

const content = (
    <Container>
        Minecraft
    </Container>
);

export default function Minecraft() {
    const [status, setStatus] = useState("");

    useEffect(() => {
        UserService.getUserContent().then(response => {
            setStatus(response.status);
        }, error => {
            setStatus(error.response.status);
        });
    }, []);

    return status ? (
        status === 200 ? (
            content
        ) : <div>Unauthorized access.</div>
    ) : null;
}