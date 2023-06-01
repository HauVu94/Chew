import React, { useState } from "react";
import NavbarProps from "../../interface/NavbarProps";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css"
import { SidebarData } from "./SidebarData";

const Navbar: React.FC<NavbarProps> = (props) => {
    const {avatarSrc} = props;

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return(
        <div className="navbar">

            <Link to="#" className="menu-bars">
                <img className="burger-menu" src="images/burger-menu.png" onClick={showSidebar}/>
            </Link>

            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <img className="menu-cross" src="images/cross.png"></img>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <img className={item.title} src={item.icon} />
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>


            <Link to="/" className="chew-logo chew-logo-btn">
                <img className="chew-logo" src="images/chew-logo.png"/>
            </Link>

            <img className="profile-btn" src={avatarSrc}/>
        </div>
    )
}

export default Navbar;