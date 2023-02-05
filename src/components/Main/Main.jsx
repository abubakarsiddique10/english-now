import { BsX } from "react-icons/bs";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Vocabulary from "../../pages/Vocabulary/Vocabulary";
import home from "../../assets/icons/home.png";
import vocabulary from "../../assets/icons/dictionary.png";
import pattern from "../../assets/icons/pattern.png";
import story from "../../assets/icons/book.png";
import VocabularyRendered from "../../pages/Vocabulary/VocabularyRendered";
import VocabularyCategory from "../../pages/Vocabulary/VocabularyCategory";



const Main = ({ setToggle, toggle }) => {

    const pages = [
        { name: "Home", link: "/", icon: home },
        { name: "Vocabulary", link: "/vocabulary", icon: vocabulary },
        { name: "Story", link: "/story", icon: story },
        { name: "Pattern", link: "/pattern", icon: pattern },
    ]

    const location = useLocation();
    const path = location.pathname;

    return (
        <div className={`w-full ${path === "/" ? "body-color" : "null"}`}>
            <div className="md:container">
                <div className="flex md:gap-5 ">
                    <aside class={`sidebar ${toggle ? "left-0" : "left-[-300px]"} ${path === "/" ? "block" : "md:hidden"}`} aria-label="Sidebar">
                        <div class="pr-14 md:pr-4 py-3 rounded relative">
                            <div onClick={() => setToggle(!toggle)} className="hamburger">
                                <BsX className="text-3xl" />
                            </div>
                            <ul>
                                {
                                    pages.map((page, index) => <li key={index}>
                                        <Link to={page.link} class="nav-link">
                                            <img class="w-5 h-5" src={page.icon} />
                                            <span class="ml-3">{page.name}</span>
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
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;
