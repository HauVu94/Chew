import Navbar from '../components/NavigationComponents/Navbar';
import Sidetabs from '../components/Sidetabs';
import Toolbar from '../components/Toolbar';
import MainMenu from '../components/MainMenu';
import SchoolPrivate from '../components/SchoolPrivate';

import { Link } from 'react-router-dom';

export const HomePage = () => {  
    return (
        <>
            <Navbar avatarSrc="images/profile.png"/>
            <Sidetabs />
            <MainMenu />
            <SchoolPrivate />

            {/* Midlertidig link til pages/MyFridge.tsx */}
            <div className='footer'>
                <Link to="/LoginPage">Logg inn</Link> || 
                <Link to="/IngredientSearchPage">Ingredient Search</Link>
            </div>
        </>
    )
}