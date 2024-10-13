import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "~/services/getUser";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false)

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
        setLoading(true)
        async function fetchApi() {
            try {
                const currentUser = await getCurrentUser();
                if (currentUser) {
                    setUser(currentUser);
                    setLoading(false)
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                }
            }
        }
        fetchApi();
    }, []);
    // if (loading) return <div> loading... please wait </div>

    return (
        <UserContext.Provider value={{ user, logout, login }}>
            {children}
        </UserContext.Provider>
    )
}
