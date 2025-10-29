import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("comedyMineUser");
        return saved ? JSON.parse(saved) : null;
    });

    const login = (username, role) => {
        const newUser = { username, role };
        localStorage.setItem("comedyMineUser", JSON.stringify(newUser));
        setUser(newUser);
    };

    const logout = () => {
        localStorage.removeItem("comedyMineUser");
        setUser(null);
    };

    useEffect(() => {
        const saved = localStorage.getItem("comedyMineUser");
        if (saved && !user) setUser(JSON.parse(saved));
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
