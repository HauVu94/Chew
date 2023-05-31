import React from 'react';
import Navbar from '../components/Navbar';
import Sidetabs from '../components/Sidetabs';
import { Link } from 'react-router-dom';

export const HomePage = () => {  
    return (
        <>
            <Navbar avatarSrc="images/default-avatar.png"/>
            
            {/* Midlertidig link til pages/MyFridge.tsx */}
            <Link to="/MyFridge">My Fridge</Link>
            <Link to="/RecipePage">RecipePage</Link>
            <Link to="/LoginPage">Logg inn</Link>

            <Sidetabs />
            
            
        </>
    )
}