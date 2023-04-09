import { memo, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { BsX } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AppContext } from "../../App";
import baseURL from "../../api/api";
import { pages, profilPages } from "./menuItems";
import { MdLogout } from "react-icons/md";
import useAuth from "../../hooks/useAuth";


const Header = () => {
    const { user, setUser } = useAuth()
    const [toggle, setToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        setUser(null)
        navigate('/');
        window.location.reload();
    }

    return (
        <header className="shadow py-4 bg-white sticky top-0 w-full z-20">
            <div className="md:container px-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">

                        <div>
                            <FiMenu onClick={() => setToggle(!toggle)} className="text-xl md:hidden cursor-pointer" />

                            <ul className={`hamburger-menu ${toggle ? "left-0" : "left-[-200px]"}`}>
                                {
                                    pages.map((page, index) => <li onClick={() => setToggle(!toggle)} key={index} className="nav-link">
                                        <page.icon className="nav-icon" />
                                        <Link to={page.link} className="ml-3 text-black">{page.name}</Link>
                                    </li>)
                                }
                                <BsX onClick={() => setToggle(!toggle)} className="hamburger" />
                            </ul>
                        </div>

                        <Link to="/" className="logo">English Now</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* <BsBell className="text-xl" /> */}

                        {!user ? <Link to="/login"> <Button>Login</Button></Link> :

                            <div className="relative">
                                <Link onClick={() => setProfileToggle(!profileToggle)} className="flex items-center justify-center">
                                    <img className="w-8 h-8 rounded-full ring-2 p-[3px]" src={`${baseURL}/assets/avater/${user?.userImgURL}`} alt="avatar" />
                                </Link>

                                <ul className={`profile-menu ${profileToggle ? "block" : "hidden"}`}>
                                    {
                                        profilPages.map((page, index) => <li onClick={() => setProfileToggle(!profileToggle)} key={index} className="nav-link">
                                            <Link to={page.link} className="ml-3 text-black">{page.name}</Link>
                                        </li>)
                                    }
                                    <button onClick={handleLogOut} className="flex items-center gap-1 pl-5 py-1.5 hover:bg-gray-200 block w-full"><MdLogout className="text-sm" />Log out</button>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
export default memo(Header);

