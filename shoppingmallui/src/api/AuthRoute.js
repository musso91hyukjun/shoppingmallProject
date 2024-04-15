import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"

const AuthRoute = ({ children }) => {

    const { isLogin } = useAuth();

    if (!isLogin) {
        return <Navigate to="/login" />
    }
    return children;
}

export default AuthRoute;