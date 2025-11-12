import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/post/1">Sample Post</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;

