import { memo, useContext } from "react"
import Card from "../../components/Card/Card"
import { Loading } from "../../components/Loading/Loading";
import PostsProvider, { PostsContext, usePosts } from "../../context/postsProvider";



const Home = () => {
    const { state: { loading, posts, error } } = usePosts()
    let content;

    if (loading) {
        content = <Loading />
    }
    if (error) {
        content = <p>Something was erroe</p>
    }
    if (!loading && !error && posts?.length) {
        content = posts?.map(post => <Card key={post?._id} post={post} />)
    }

    return (
        <div>
            {content}
        </div>
    )
}
export default memo(Home)