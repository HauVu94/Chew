import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export const HomePage = () => {  
    return (
        <>
            <Navbar avatarSrc="default-avatar.png"/>
            
            {/* Midlertidig link til pages/MyFridge.tsx */}
            <Link to="/MyFridge">My Fridge</Link>
        </>
    )
}