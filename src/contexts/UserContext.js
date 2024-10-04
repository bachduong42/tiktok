import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = (user) => {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);


    return (
        <UserContext.Provider value={{ user, logout, login }}>
            {children}
        </UserContext.Provider>
    )
}
