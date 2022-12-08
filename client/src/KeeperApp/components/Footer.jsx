import React from "react";
import "../css/Footer.css";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {year} Raki. All Rights Reserved</p>
        </footer>
    );
}
export default Footer;