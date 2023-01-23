import { BsX } from "react-icons/bs";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Vocabulary from "../../pages/Vocabulary/Vocabulary";
import home from "../../assets/icons/home.png";
import vocabulary from "../../assets/icons/dictionary.png";
import pattern from "../../assets/icons/pattern.png";
import story from "../../assets/icons/book.png";



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
        <div className="w-full">
            <div className="md:container">
                <div className="flex md:gap-5 ">
                    <aside class={`md:side-bar fixed top-0 h-screen bg-white md:bg-inherit md:sticky md:top-[67px] w-full max-w-[300px] border-r transition-all ease-in duration-500 left-[-300px] ${toggle ? "left-0" : "left-[-300px]"}`} aria-label="Sidebar">
                        <div class="pr-14 md:pr-4 py-3 rounded relative">
                            <div onClick={() => setToggle(!toggle)} className="md:hidden w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full absolute top-4 right-4">
                                <BsX className="text-3xl" />
                            </div>
                            <ul class={`${path === "/vocabulary" && "hidden"}`}>
                                {
                                    pages.map((page, index) => <li key={index}>
                                        <Link to={page.link} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                                            <img class="w-5 h-5" src={page.icon} />
                                            <span class="ml-3">{page.name}</span>
                                        </Link>
                                    </li>)
                                }


                            </ul>
                        </div>
                    </aside>

                    <div className="mt-2">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/vocabulary" element={<Vocabulary />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;
