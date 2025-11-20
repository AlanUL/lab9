import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HomePage() {
    const { user } = useAuth();

    return (
        <div className="homepage">
            <div className="hero">
                <div className="hero-content">
                    <h1>Welcome to My Personal Blog</h1>
                    <p>Discover amazing stories, share your thoughts, and connect with other readers. Join our community of writers and enthusiasts.</p>
                    
                    <div className="action-buttons">
                        {user ? (
                            <Link to="/blog" className="btn primary">View Blog Posts</Link>
                        ) : (
                            <Link to="/login" className="btn primary">Get Started</Link>
                        )}
                        <Link to="/contact" className="btn secondary">Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className="features">
                <h2>What We Offer</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3>Quality Content</h3>
                        <p>Read carefully curated blog posts on various topics from our community of writers.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Engage & Discuss</h3>
                        <p>Join conversations by commenting on posts that interest you and share your perspective.</p>
                    </div>
                    <div className="feature-item">
                        <h3>User Friendly</h3>
                        <p>Clean, intuitive interface that works perfectly on all your devices.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
