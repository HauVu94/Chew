import React, { useState } from "react";
import NavbarProps from "../../interface/NavbarProps";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css"
import { SidebarData } from "./SidebarData";
import {IconContext} from "react-icons";

const Navbar: React.FC<NavbarProps> = (props) => {
    const {avatarSrc} = props;

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return(
        <IconContext.Provider value={{}}>
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
                                        {item.icon}
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
                
                <Link className="profile-btn" to="/ProfilePage">
                    <img className="profile-btn" src={avatarSrc}/>
                </Link>
            </div>
        </IconContext.Provider>
    )
}

export default Navbar;