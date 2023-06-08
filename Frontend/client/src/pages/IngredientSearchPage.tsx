import React, { useState } from 'react';
import Navbar from '../components/NavigationComponents/Navbar';
import Sidetabs from '../components/Sidetabs';
import { PageTitle } from '../components/PageComponents/PageTitle';
import { Link } from 'react-router-dom';
// import Toolbar from '../components/Toolbar';
import IngredientSearch from '../components/SearchComponents/IngredientSearch';
import { SearchSidetab } from '../components/SearchComponents/SearchSidetab';
import '../styles/IngredientSearch.css'

const IngredientSearchPage = () => {

    // const [results, setResults] = useState([]);


    return (
        <>
        
        <Navbar avatarSrc={require("../../public/images/profile.png")}/>
        <SearchSidetab/>
        <PageTitle pageTitle="Legg til i kjøleskap"/>
        <IngredientSearch />
        
        </>
    )
}

export default IngredientSearchPage
