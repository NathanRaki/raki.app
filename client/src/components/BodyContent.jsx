import React from "react";
import "../css/BodyContent.css";
import Home from "./Home";
import Minecraft from "./Minecraft";
import Login from "./login.component";
import {Route, Routes} from "react-router-dom";
import Register from "./register.component";
import Profile from "./profile.component";
import { setUser } from "../actions";
import { connect } from "react-redux";

export default function BodyContent(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/minecraft" element={<Minecraft />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}