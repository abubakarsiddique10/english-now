import { AiFillHome } from "react-icons/ai";
import { RiBookFill, RiDashboardFill } from "react-icons/ri";
import { SiStorybook } from "react-icons/si";


export const pages = [
    { name: "Home", link: "/", icon: AiFillHome },
    { name: "Vocabulary", link: "/vocabulary", icon: RiBookFill },
    { name: "Story", link: "/story", icon: SiStorybook },
    { name: "Dashboard", link: "/Dashboard", icon: RiDashboardFill },
]

export const profilPages = [
    { name: "Create Post", link: "/postForm", },
    { name: "Profile", link: "/profile", },
]