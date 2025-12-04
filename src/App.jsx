import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BlogPostsPage from "./Pages/BlogPostsPage";
import IndividualPostPage from "./Pages/IndividualPostPage";
import ContactPage from "./Pages/ContactPage";
import ThemeContext from "./ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./Pages/LoginPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import HomePage from "./Pages/HomePage";

function App() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        document.body.className = theme === "dark" ? "light" : "";
    };

    return (
        <AuthProvider>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <BrowserRouter>
                    <div className="app-container">
                        <Header />
                        <main className="main-content">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                
                                <Route 
                                    path="/blog" 
                                    element={
                                        <ProtectedRoute>
                                            <BlogPostsPage />
                                        </ProtectedRoute>
                                    } 
                                />
                                <Route 
                                    path="/post/:postId" 
                                    element={
                                        <ProtectedRoute>
                                            <IndividualPostPage />
                                        </ProtectedRoute>
                                    } 
                                />
                                
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/login" element={<LoginPage />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </BrowserRouter>
            </ThemeContext.Provider>
        </AuthProvider>
    );
}

export default App;
