import React from "react";
import NavbarProps from "../interface/NavbarProps";

const Navbar: React.FC<NavbarProps> = (props) => {
    const {title} = props;

    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Navbar;