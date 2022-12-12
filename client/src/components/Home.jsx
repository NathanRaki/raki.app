import React, {useEffect, useState} from "react";
import UserService from "../services/user.service";
import {Container} from "react-bootstrap";

const content = (
    <Container>
        Welcome
    </Container>
);

export default function Home() {
    const [status, setStatus] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(response => {
            setStatus(response.status);
        });
    }, []);

    return status ? (
            status === 200 ? (
                content
            ) : <Container>Unauthorized access.</Container>
        ) : null;
}