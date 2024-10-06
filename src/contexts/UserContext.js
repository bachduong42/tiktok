import { createContext, useEffect, useState } from "react";
import getCurrentUser from "~/services/getCurrentUser";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = (user) => {
        setUser(user);
        localStorage.setItem('isLogin', true);

    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('isLogin');
        localStorage.removeItem('token');
    };
    useEffect(() => {
        async function fetchApi() {
            try {
                const currentUser = await getCurrentUser();
                if (currentUser) {
                    setUser(currentUser);
                }
            } catch (error) {
                // console.error('Failed to fetch current user:', error); // Log the error
                // Handle 401 error (e.g., log out the user)
                if (error.response && error.response.status === 401) {
                    // logout(); // Call logout if unauthorized
                }
            }
        }
        fetchApi();
    }, []);

    return (
        <UserContext.Provider value={{ user, logout, login }}>
            {children}
        </UserContext.Provider>
    )
}
