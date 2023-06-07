import Navbar from '../components/NavigationComponents/Navbar';
import Sidetabs from '../components/Sidetabs';
import Toolbar from '../components/Toolbar';
import MainMenu from '../components/MainMenu';
import SchoolPrivate from '../components/SchoolPrivate';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { async } from 'q';

function homePage(){
    const[user, setUser] = useState();

    useEffect(async () => {
        const res = await fetch("/api/login");
        setUser(await res.json());
    })
}

export const HomePage = () => { 

    return (
        <>
            <Navbar avatarSrc="images/profile.png"/>
            <Sidetabs />
            <MainMenu />
            <SchoolPrivate />

                <div className='footer'>
                <Link to="/ProfilePage">Profile Page</Link> | 
                | <Link to="/LoginPage">Logg inn</Link> |
                | <Link to="/IngredientSearchPage">Ingredient Search</Link>
                </div> 
                
        </>
    )
}