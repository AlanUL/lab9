import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import ContactPage from "./Pages/ContactPage";
import ThemeContext from "./ThemeContext";

function App() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        document.body.className = theme === "dark" ? "light" : "";
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <BrowserRouter>
                <div className="app-container">
                    <Header />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<BlogPostsPage />} />
                            <Route path="/post/:postId" element={<IndividualPostPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;
