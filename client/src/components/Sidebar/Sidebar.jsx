import React from "react";
import SidebarButton from "./SidebarButton";
import "../../css/Sidebar/Sidebar.css";
import "../../css/icons-minecraft-0.5.css";

const homeIcon = <i className="fa-solid fa-house fa-xl"></i>
const minecraftIcon = <i className="icon-minecraft icon-minecraft-grass-block" />

export default function Sidebar(props) {
    return (
        <div className="sidebar">
            <SidebarButton icon={homeIcon} to="/" text="Home" path={props.path} />
            <SidebarButton icon={minecraftIcon} to="/minecraft" text="Minecraft" path={props.path} />
        </div>
    );
}