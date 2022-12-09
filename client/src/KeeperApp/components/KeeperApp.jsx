import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "../css/KeeperApp.css";

function KeeperApp() {
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        fetch("/api")
            .then(res => res.json())
            .then(data => setNotes(data));
    }, []);

    const noteElements = notes.map(note =>
        <Note key={note.title} title={note.title} content={note.content} />
    );

    return (
        <div className="KeeperApp">
            <Header />
            {(noteElements.length === 0) ?
                <p>Loading...</p>
                : noteElements
            }
            <Footer />
        </div>
    );
}
export default KeeperApp;