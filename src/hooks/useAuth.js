import { useEffect, useState } from "react"

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/user/profile', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(({ data, error }) => {
                if (data) {
                    setUser(data)
                }
                else if (error) {
                    setError(error);
                }
            })
    }, [])
    return { user, error, setUser }
}
export default useAuth