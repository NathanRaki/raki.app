import React, {useEffect, useState} from "react";
import SidebarButton from "./SidebarButton";
import "../../css/Sidebar/Sidebar.css";
import "../../css/icons-minecraft-0.5.css";
import { store } from "../../App";
import {useSelector} from "react-redux";

const homeIcon = <i className="fa-solid fa-house fa-xl"></i>
const minecraftIcon = <i className="icon-minecraft icon-minecraft-grass-block" />
const loginIcon = <i className="fa-solid fa-right-to-bracket fa-xl"></i>
const registerIcon = <i className="fa-solid fa-user-plus fa-xl"></i>

export default function Sidebar(props) {
    const user = useSelector(() => store.getState().user.currentUser);
    return (
        <div className="sidebar">
            <SidebarButton icon={homeIcon} to="/" text="Home" />
            <SidebarButton icon={minecraftIcon} to="/minecraft" text="Minecraft" />
            {!user && <SidebarButton icon={registerIcon} to="/register" text="Register" />}
            {!user && <SidebarButton icon={loginIcon} to="/login" text="Login" />}
            {user && <SidebarButton icon={loginIcon} to="/profile" text="Profile" />}
        </div>
    );
}