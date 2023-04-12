import React from "react";
import { useLocation } from "react-router";
import NavigationSidebarItem from "./navigation-sidebar-item";
import sidebars from "./sidebars.json";
import { Link } from "react-router-dom";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group sticky-top">
            <Link to="/a7" className="list-group-item">Labs</Link>
            {
                sidebars.map(sidebar => {
                    return (
                        <NavigationSidebarItem key={sidebar._id} sidebar={sidebar} active={active ? active : "home"} />)
                })
            }
            <div className="d-grid mt-2">
                <button className="btn btn-primary btn-block rounded-pill">Tuit</button>
            </div>
        </div>
    );
}

export default NavigationSidebar;