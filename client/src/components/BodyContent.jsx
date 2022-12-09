import React from "react";
import "../css/BodyContent.css";
import Home from "./Home";
import Minecraft from "./Minecraft";

const r = {
    "/" : <Home />,
    "/minecraft" : <Minecraft />
}

export default function BodyContent(props) {
    return (
        <div className="content">
            {r[props.path]}
        </div>
    );
}