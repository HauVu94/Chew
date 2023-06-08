import Navbar from '../components/NavigationComponents/Navbar';
import Sidetabs from '../components/Sidetabs';
import Toolbar from '../components/Toolbar';
import MainMenu from '../components/MainMenu';
import SchoolPrivate from '../components/SchoolPrivate';

import axios from "axios"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { async } from 'q';





export const HomePage = () => { 


  const[loading, setLoading] = useState(true);
  const[user, setUser] = useState([{}])

  useEffect(() => {
    fetch("/api/login").then(
      reponse => reponse.json()
    ).then(data =>
      setUser(data))

      setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(user.username)


  return (
    <>
            <Navbar avatarSrc={require("../../public/images/profile.png")}/>

            <Sidetabs />
            <MainMenu />
            <SchoolPrivate />
            {user ? <h1>{user.username}</h1> : <h1>ss</h1>}


                <div className='footer'>
                <Link to="/ProfilePage">Profile Page</Link> | 
                | <Link to="/LoginPage">Logg inn</Link> |
                | <Link to="/IngredientSearchPage">Ingredient Search</Link>
                </div> 
                
        </>
  );
}