import React from 'react';
import Navbar from '../components/Navbar';
import Sidetabs from '../components/Sidetabs';
import { Link } from 'react-router-dom';
import Toolbar from '../components/Toolbar';

export const HomePage = () => {  
    return (
        <>
            <Navbar avatarSrc="images/default-avatar.png"/>
            <Toolbar />
            <Sidetabs />

            {/* Midlertidig link til pages/MyFridge.tsx */}
            <Link to="/MyFridge">My Fridge</Link>
            <Link to="/RecipePage">RecipePage</Link>

        </>
    )
}