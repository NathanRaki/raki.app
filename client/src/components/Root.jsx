import React from "react";
import Header from "./Header";
import Body from "./Body";
import {useLocation} from "react-router-dom";
import "../css/Root.css"

export default function Root() {
    const location = useLocation();
    return(
        <div>
            <Header />
            <Body path={location.pathname}/>
        </div>
    );
}