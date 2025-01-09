import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return (
        <nav className="navbar1">
            <ul className="navbar-nav1">
                <li className="nav-item1">
                    <NavLink
                        to="/"
                        className="nav-link1"
                        activeClassName="active"
                        exact
                    >
                        MyPenang
                    </NavLink>
                </li>
              
            </ul>
        </nav>
    );
}

export default Navbar;
