import { memo, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { AppContext } from "../../App";
import baseURL from "../../api/api";
import { pages, profilPages } from "./menuItems";
import { MdLogout } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";


const Header = () => {
    const { user, setUser } = useContext(AppContext)
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
        <header className="shadow py-4 bg-white sticky top-0 w-full z-50">
            <div className="md:container px-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div>
                            <button onClick={() => setToggle(!toggle)} className="hamburger">
                                {toggle ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
                            </button>

                            <ul className={`hamburger-menu md:hidden ${toggle ? "block" : "hidden"}`}>
                                {
                                    pages.map((page, index) => <li onClick={() => setToggle(!toggle)} key={index}>
                                        <Link to={page.link} className="nav-link"> <page.icon className="nav-icon" /> {page.name}</Link>
                                    </li>)
                                }
                            </ul>
                        </div>
                        <Link to="/" className="logo z-50">English Now</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {!user ? <Link to="/login"> <Button>Login</Button></Link> :

                            <div className="relative">
                                <Link onClick={() => setProfileToggle(!profileToggle)} className="flex items-center justify-center">
                                    <img className="w-8 h-8 rounded-full ring-2 p-[3px]" src={`${baseURL}/assets/avater/${user?.userImgURL}`} alt="avatar" />
                                </Link>

                                <ul className={`profile-menu ${profileToggle ? "block" : "hidden"}`}>
                                    {
                                        profilPages.map((page, index) => <li onClick={() => setProfileToggle(!profileToggle)} key={index} className="flex items-center">
                                            <Link to={page.link} className="nav-link">{page.name}</Link>
                                        </li>)
                                    }
                                    <button onClick={handleLogOut} className="logout-btn"><MdLogout className="text-sm" />Log out</button>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </header >
    )
}
export default memo(Header);

