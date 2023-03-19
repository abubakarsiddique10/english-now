import { useEffect, useState } from "react"
import Card from "../../components/Card/Card"
import baseURL from "../../api/api";


const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`${baseURL}/api/v1/userPost`)
            .then(res => res.json())
            .then(data => setPosts(data?.posts))
    }, []);
    return (
        <>
            <div>
                {posts?.map(post => <Card key={post?._id} post={post} />)}
            </div>
        </>
    )
}
export default Home