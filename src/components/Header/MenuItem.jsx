import { Link } from "react-router-dom"

const MenuItem = ({ name, link, icon }) => {
    return (
        <>
            <li>
                <Link to={link} className="nav-link">
                    <img className="w-5 h-5" src={icon} />
                    <span className="ml-3">{name}</span>
                </Link>
            </li>
        </>
    )
}
export default MenuItem