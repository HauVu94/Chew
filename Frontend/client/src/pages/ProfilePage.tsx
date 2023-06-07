import Navbar from '../components/NavigationComponents/Navbar';
import ProfileWidget from '../components/ProfileWidgets/ProfileWidget';
import Toolbar from '../components/Toolbar';
import "../styles/Profilepage.css";

export const ProfilePage = () => {  
    return (
        <> 
            <Navbar avatarSrc="images/profile.png"/>
           <ProfileWidget />


            <div className='background-beige'></div>
            <div className='background-foods'></div>
            <div className='background-blue'></div>
            
            
            
        </>
    )
}