import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLogin, setLogin] = useState(false);

    return (
        <AuthContext.Provider value={{ isLogin, setLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);