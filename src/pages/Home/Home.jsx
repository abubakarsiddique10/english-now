import { useContext, useEffect, useState } from "react"
import Card from "../../components/Card/Card"
import { Loading } from "../../components/Loading/Loading";
import { usePosts, } from "../../context/userProvider";


const Home = () => {
    const { state: { loading, posts, error } } = usePosts();
    let content;
    if (loading) {
        content = <Loading />
    }
    if (error) {
        content = <p>Something erroe</p>
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
export default Home