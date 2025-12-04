import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header() {
    const [lightMode, setLightMode] = useState(false);

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const toggleTheme = () => {
        setLightMode(!lightMode);
        document.body.className = lightMode ? "" : "light";
    };

    return (
        <header className="site-header">
            <h1 className="site-title">My Personal Blog</h1>
            <nav className="main-nav">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>

                {user ? (
                    <>
                        <span className="welcome-user">Welcome, {user.name}</span>
                        <button onClick={handleLogout} className="logout-link">
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}

            </nav>
            <button onClick={toggleTheme} className="theme-btn">
                {lightMode ? "Dark Mode" : "Light Mode"}
            </button>
        </header>
    );
}

export default Header;
