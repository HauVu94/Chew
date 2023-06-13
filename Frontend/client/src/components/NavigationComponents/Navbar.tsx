import React, { useEffect, useState } from "react";
import NavbarProps from "../../interface/NavbarProps";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css"
import { SidebarData } from "./SidebarData";
import {IconContext} from "react-icons";
import {BiX} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar: React.FC<NavbarProps> = (props) => {
    const {avatarSrc} = props;

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    
    interface User {
        id: number;
        firstName: string;
        lastName: string;
        birthDate: number;
        email: string;
        phone: number;
        roles: string;
        profilePic: string;
        username: string;
        password: string;
    }

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetch("/api/users")
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                console.log(data[0])
            setUser(data[0]); // henter rad på index 0
            }
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    return(
        <IconContext.Provider value={{}}>
            <div className="navbar">

                <Link to="#" className="menu-bars">
                    <GiHamburgerMenu onClick={showSidebar}/>
                </Link>

                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <BiX />
                            </Link>
                        </li>

                        {SidebarData.map((item, index) => {
                            return ( 
                                <li key={index} className={item.cName}>
                                    { user ? (
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                            ) : (
                                <>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>


                <Link to="/" className="chew-logo chew-logo-btn">
                    <img className="chew-logo" src={require("../../../public/images/chew-logo.png")}/>
                </Link>
                
                {user 
                ? 
                <Link className="profile-btn" to="/ProfilePage">
                    <img className="profile-btn" src={avatarSrc}/>
                </Link> 
                : 
                <img className="profile-btn" src={avatarSrc}/>}

            </div>
        </IconContext.Provider>
    )
}

export default Navbar;