
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const RequireAuth = ({ children }) => {
    const loacation = useLocation();
    const { user } = useContext(AppContext)
    /*   const { user } = useAuth(); */
    const navitage = useNavigate()
    if (!user) {
        /* return <Navigate to="/login" state={{ from: loacation }} replace /> */
        navitage('/login')
    }
    return children;
}
export default RequireAuth