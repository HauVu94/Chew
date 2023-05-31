import React from "react";
import NavbarProps from "../interface/NavbarProps";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar: React.FC<NavbarProps> = (props) => {
    const {avatarSrc} = props;

    return(
        <div className="navbar">
            <img className="burger-menu" src="images/burger-menu.png"/>
            <Link to="/" className="chew-logo chew-logo-btn">
                <img className="chew-logo" src="images/chew-logo.png"/>
            </Link>
            <img className="profile-btn" src={avatarSrc}/>
        </div>
    )
}

export default Navbar;