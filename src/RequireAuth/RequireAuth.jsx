import { useNavigate } from "react-router-dom";
import useProfile from "../components/hooks/useProfile"

const RequireAuth = ({ children }) => {
    const { user } = useProfile();
    const navigate = useNavigate()
    if (!user) {
        navigate('/login')
    }
    return children
}
export default RequireAuth