import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(sessionStorage.getItem("isLogin") === "true");

    useEffect(() => {
        sessionStorage.setItem("isLogin", isLogin);
    }, [isLogin]);

    return (
        <authContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </authContext.Provider>
    )
}

