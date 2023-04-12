import { Link } from "react-router-dom";

const NavigationTabItem = (
    {
        tab = {
            "name": "for you",
            "last": false
        },
        active = "for-you"
    }
) => {
    let name = tab.name.replace(/-/g, ' ');
    name = name ? name[0].toUpperCase() + name.slice(1) : ""
    return (
        <li className={`nav-item ${tab.last ? "d-none d-md-block" : ""}`}>
            <Link to={`/tuiter/explore/${tab.name}`} className={`nav-link ${active === tab.name ? "active" : ""}`}>
                {name}
            </Link>
        </li>
    )
}

export default NavigationTabItem;