import { useEffect, useState } from "react"
import Card from "../../components/Card/Card"

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/userPost')
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