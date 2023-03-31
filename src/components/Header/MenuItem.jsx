import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../App"
import { AiFillHome } from "react-icons/ai";
const MenuItem = ({ name, link, icon }) => {
    console.log(icon)
    const { handleHamburger } = useContext(AppContext)
    // 
    return (
        <>
            <li>
                <Link onClick={handleHamburger} to={link} className="nav-link">
                    <span>{icon}</span>
                    {/*  <img className="w-5 h-5" src={icon} /> */}
                    <span className="ml-3 text-black">{name}</span>
                </Link>
            </li>
        </>
    )
}
export default MenuItem