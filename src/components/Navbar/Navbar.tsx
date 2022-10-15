import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css'

export const Navbar =()=>{
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/profile" activeClassName={c.activeLink}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/dialogs" activeClassName={c.activeLink}>Messages</NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <a>News</a>
            </div>
            <div className={c.item}>
                <a>Music</a>
            </div>
            <div className={c.item} >
                <a>Settings</a>
            </div>

        </nav>
    )
}