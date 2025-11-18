import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if (username && password) {
            const userData = {
                username: username,
                name: username
            };
            setUser(userData);
            return true;
        }
        
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};