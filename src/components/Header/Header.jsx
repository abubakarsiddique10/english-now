import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { BsBell } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const Header = ({ toggle, setToggle }) => {
    const pages = [
        { name: "home", link: "/" },
        { name: "vocabulary", link: "/vocabulary" },
        { name: "story", link: "/story" },
        { name: "pattern", link: "/pattern" },
    ]

    let content = <ul className="flex gap-5 justify-center flex-wrap">{pages.map((page, index) => <li key={index}><Link to={`${page.link}`} className="font-medium capitalize">{page.name}</Link></li>)}</ul>

    return (
        <header className="shadow py-4 bg-white sticky top-0 w-full">
            <div className="md:container px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <FiMenu onClick={() => setToggle(!toggle)} className="text-lg md:hidden cursor-pointer" />
                        <Link to="/" className="font-medium cap text-lg">English Now</Link>
                    </div>
                    <nav className="">
                        {/*  {content} */}
                    </nav>
                    <div className="flex items-center gap-4">
                        <BsBell className="text-xl" />
                        <Button>Login</Button>
                    </div>
                </div>
                <nav className="sm:hidden mt-3">
                    <ul className="flex gap-5 justify-center flex-wrap">
                        {/*  {content} */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;