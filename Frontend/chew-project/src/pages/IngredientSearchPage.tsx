import React, { useState } from 'react';
import Navbar from '../components/NavigationComponents/Navbar';
import Sidetabs from '../components/Sidetabs';
import { Link } from 'react-router-dom';
// import Toolbar from '../components/Toolbar';
import IngredientSearch from '../components/SearchComponents/IngredientSearch';
import '../styles/IngredientSearch.css'

const IngredientSearchPage = () => {

    // const [results, setResults] = useState([]);


    return (
        <>
            <Navbar avatarSrc="images/profile.png"/>
            <Sidetabs />
            

            {/* Midlertidig link til pages/MyFridge.tsx */}
            <Link to="/MyFridge">My Fridge</Link>
            <Link to="/RecipePage">RecipePage</Link>
            <Link to="/LoginPage">Logg inn</Link>

            <IngredientSearch />
        </>
    )
}

export default IngredientSearchPage
