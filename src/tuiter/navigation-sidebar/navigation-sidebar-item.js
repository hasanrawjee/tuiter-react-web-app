import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StackIcon from "./stack-icon";

const NavigationSideBarItem = ({
    sidebar = {
        stack: false,
        iconMain: "fa-brands fa-twitter",
        iconSub: "",
        name: ""
    },
    active = ""
}) => {
    return (
        <Link to={`/tuiter/${!sidebar.name ? "home" : sidebar.name}`}
            className={`list-group-item ${sidebar.name && active === sidebar.name ? 'active' : ''}`}>
            <div className="row">
                <div className="col-xl-2">
                    {!sidebar.stack && <FontAwesomeIcon icon={sidebar.iconMain} />}
                    {sidebar.stack && <StackIcon iconMain={sidebar.iconMain} iconSub={sidebar.iconSub} />}
                </div>
                <div className="d-none d-xl-inline col-xl-10">
                    {sidebar.name ? sidebar.name[0].toUpperCase() + sidebar.name.slice(1) : ""}
                </div>
            </div>
        </Link>
    )
}

export default NavigationSideBarItem;