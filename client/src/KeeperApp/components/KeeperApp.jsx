import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "../css/KeeperApp.css";

function KeeperApp() {
    return (
        <div className="KeeperApp">
            <Header />
            <Note title="This is the note title" content="This is the note content" />
            <Footer />
        </div>
    );
}
export default KeeperApp;