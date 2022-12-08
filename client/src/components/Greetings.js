import "../css/Greetings.css"
import React from "react";

const morningStyle = { color: "red" };
const afternoonStyle = { color: "green" };
const eveningStyle = { color: "blue" };

function Greetings() {
    const [date, setDate] = React.useState(new Date().getHours());

    function tick() {
        setDate(new Date().getHours());
    }

    React.useEffect(() => {
        const intervalId = setInterval(() => tick(), 1000);
        return () => clearInterval(intervalId);
    })

    let message = "Good morning";
    let style = morningStyle;
    if (date > 18) {
        message = "Good evening";
        style = eveningStyle;
    }
    else if (date > 12) {
        message = "Good afternoon";
        style = afternoonStyle;
    }

    return (
        <div className="App">
            <h1 className="heading" style={style}>{message}</h1>
        </div>
    );
}

export default Greetings;