import { BsX } from "react-icons/bs";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Vocabulary from "../Vocabulary/Vocabulary";
import home from "../../assets/icons/home.png";
import vocabulary from "../../assets/icons/dictionary.png";
import pattern from "../../assets/icons/pattern.png";
import story from "../../assets/icons/book.png";
import VocabularyRendered from "../Vocabulary/VocabularyRendered";
import VocabularyCategory from "../Vocabulary/VocabularyCategory";
import Dashboard from "../dashboard/Dashboard";
import AddVocabulary from "../dashboard/AddVocabulary";
import Post from "../../components/Post/Post";
import { useContext } from "react";
import { AppContext } from "../../App";
import SignUp from "../Login/SignUp";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import RequireAuth from "../../Authentication/RequireAuth";
import ProfileUpdate from "../Profile/ProfileUpdate";



const Main = () => {
    const { handleHamburger, toggleHamburger } = useContext(AppContext)

    const pages = [
        { name: "Home", link: "/", icon: home },
        { name: "Vocabulary", link: "/vocabulary", icon: vocabulary },
        { name: "Story", link: "/story", icon: story },
        { name: "Pattern", link: "/pattern", icon: pattern },
        { name: "Dashboard", link: "/Dashboard", icon: pattern },
    ]

    const location = useLocation();
    const path = location.pathname;

    return (
        <main className={`w-full ${path === "/" ? "body-color" : "null"}`}>
            <div className="md:container ">
                <div className="flex md:gap-5 ">
                    <aside className={`sidebar ${toggleHamburger ? "left-0" : "left-[-300px]"} ${path === "/" ? "block" : "md:hidden"}`} aria-label="Sidebar">
                        <div className="pr-14 md:pr-4 py-3 rounded relative">
                            <div onClick={handleHamburger} className="hamburger">
                                <BsX className="text-3xl" />
                            </div>
                            <ul>
                                {
                                    pages.map((page, index) => <li key={index}>
                                        <Link to={page.link} className="nav-link">
                                            <img className="w-5 h-5" src={page.icon} />
                                            <span className="ml-3">{page.name}</span>
                                        </Link>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </aside>

                    <div className="mt-0 flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/vocabulary" element={<Vocabulary />} >
                                <Route index element={<VocabularyCategory />} />
                                <Route path=":category" element={<VocabularyRendered />} />
                            </Route>
                            <Route path="/dashboard" element={<Dashboard />}>
                                <Route path="addVocabulary" element={<AddVocabulary />} />
                            </Route>
                            <Route path="/post" element={<Post />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<RequireAuth>
                                <Profile />
                            </RequireAuth>} />
                            <Route path="/profileEdit" element={<RequireAuth>
                                <ProfileUpdate />
                            </RequireAuth>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main;
