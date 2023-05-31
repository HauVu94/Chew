import React from 'react';
import Navbar from '../components/Navbar';
import Calendar from '../components/Calendar';
import { Link } from 'react-router-dom';

export const HomePage = () => {  
    return (
        <>
            <Navbar avatarSrc="default-avatar.png"/>
            
            {/* Midlertidig link til pages/MyFridge.tsx */}
            <Link to="/MyFridge">My Fridge</Link>
            <Link to="/RecipePage">RecipePage</Link>
            <Calendar/>
            
        </>
    )
}