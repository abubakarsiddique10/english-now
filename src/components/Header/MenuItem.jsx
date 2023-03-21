import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../App"

const MenuItem = ({ name, link, icon }) => {
    const { handleHamburger } = useContext(AppContext)

    return (
        <>
            <li>
                <Link onClick={handleHamburger} to={link} className="nav-link">
                    <img className="w-5 h-5" src={icon} />
                    <span className="ml-3 text-black">{name}</span>
                </Link>
            </li>
        </>
    )
}
export default MenuItem