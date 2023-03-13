import { memo, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../Button/Button";
import { BsBell } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { PostButton } from "../Button/Button";
import { AppContext } from "../../App";


const Header = () => {
    const { handlePost, handleHamburger, user } = useContext(AppContext);
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <header className="shadow py-4 bg-white sticky top-0 w-full z-10">
            <div className="md:container px-4">
                <div className="flex justify-between items-center">

                    <div className="flex items-center gap-2">
                        <FiMenu onClick={handleHamburger} className="text-lg md:hidden cursor-pointer" />
                        <Link to="/" className="font-medium cap text-lg">English Now</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* <BsBell className="text-xl" /> */}
                        {(pathName === "/" && user) && <PostButton handlePost={handlePost}>Create Post</PostButton>}

                        {user ?
                            <Link to="/profile" className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
                                <img className="rounded-full" src={`http://localhost:5000/assets/avater/${user?.userImgURL}`} alt="avatar" />
                            </Link> : <Link to="/login"> <Button>Login</Button></Link>}
                    </div>
                </div>
            </div>
        </header>
    )
}
export default memo(Header);