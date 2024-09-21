import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function AuthModal({ onClose }) {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            {isLogin ? (
                <Login onClose={onClose} onToggle={handleToggle} />
            ) : (
                <Register onClose={onClose} onToggle={handleToggle} />
            )}
        </>
    );
}

export default AuthModal;
