import img from "../../assets/designer-avatar (1).png"
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { MdOutlineCreate, MdLogout } from "react-icons/md";
import { PrimaryButton } from "../../components/Button/Button";
import { memo, useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";

const Profile = () => {
    const { setUser, user } = useContext(AppContext);
    const [posts, setPosts] = useState([]);
    const phoneNumber = user?.phoneNumber;

    useEffect(() => {
        if (phoneNumber) {
            fetch(`http://localhost:5000/api/v1/userPost/${phoneNumber}`)
                .then(res => res.json())
                .then(data => setPosts(data?.posts))
        }

    }, [phoneNumber]);

    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        setUser(null)
        navigate('/');
    }

    const handleEditProfile = () => {
        navigate('/profileEdit')
    }


    return (
        <section>
            <div className="md:flex gap-5">
                <div className="max-w-[300px] h-full top-0 md:sticky md:top-[80px] mx-auto md:mx-0 md:my-0 my-5 md:b-0">
                    <img src={`http://localhost:5000/assets/avater/${user?.userImgURL}`} className="sm:max-w-[300px] sm:max-h-[300px] max-w-52 max-h-52 rounded-full object-cover mx-auto" />
                    <div className="relative">
                        <h5 className={`text-xl font-medium mt-4 text-center `}>{user?.userName}</h5>
                    </div>

                    <div className="flex md:flex-col gap-3 mt-2">
                        <PrimaryButton handleClick={handleEditProfile}><MdOutlineCreate /> Edit profile</PrimaryButton>
                        <PrimaryButton handleClick={handleLogOut}> <MdLogout />Log out</PrimaryButton>
                    </div>
                </div>
                <div className="flex-1">
                    {posts.map(post => <Card key={post?._id} post={post} />)}
                </div>
            </div>
        </section>
    )
}
export default memo(Profile);