import Navbar from '../components/NavigationComponents/Navbar';
import Sidetabs from '../components/Sidetabs';
import Toolbar from '../components/Toolbar';
import MainMenu from '../components/MainMenu';
import SchoolPrivate from '../components/SchoolPrivate';

import { Link } from 'react-router-dom';

export const HomePage = () => {  
    return (
        <>
            <Navbar avatarSrc="images/default-avatar.png"/>
            <Toolbar />
            <Sidetabs />
            <MainMenu />
            <SchoolPrivate />

            {/* Midlertidig link til pages/MyFridge.tsx */}
            <Link to="/ProfilePage">Profile Page</Link>
            <Link to="/LoginPage">Logg inn</Link>
            <Link to="/IngredientSearchPage">Ingredient Search</Link>
            

        </>
    )
}