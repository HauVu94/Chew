import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Sidetabs from '../components/Sidetabs';
import { Link } from 'react-router-dom';
import Toolbar from '../components/Toolbar';
import MainMenu from '../components/MainMenu';

export const HomePage = () => {  
    return (
        <>
            <Navbar avatarSrc="images/default-avatar.png"/>
            <Toolbar />
            <Sidetabs />
            <MainMenu />

            {/* Midlertidig link til pages/MyFridge.tsx */}
            <Link to="/MyFridge">My Fridge</Link>
            <Link to="/RecipePage">RecipePage</Link>
            <Link to="/LoginPage">Logg inn</Link>

        </>
    )
}