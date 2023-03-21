import baseURL from "../api/api";
import { fetchError, fetchStart, fetchSuccess } from "../state/actionCreators/postAction";
const { createContext, useReducer, useEffect, useContext } = require("react");
const { userReducer, initialState } = require("../state/reducers/userReducer");


export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        dispatch(fetchStart());
        const url = `${baseURL}/api/v1/userPost`;
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                dispatch(fetchSuccess(data.posts))
            } catch (error) {
                dispatch(fetchError(error))
            }
        }
        fetchData()
    }, [])


    const value = { state, dispatch }
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export const usePosts = () => {
    const posts = useContext(UserContext);
    return posts
}

export default UserProvider;