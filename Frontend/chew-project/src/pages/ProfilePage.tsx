import Navbar from "../components/NavigationComponents/Navbar"
import Toolbar from '../components/Toolbar';
import "../styles/Profilepage.css";

export const ProfilePage = () => {  
    return (
        <> 
            <Navbar avatarSrc="images/default-avatar.png"/>
            <Toolbar />

            <div className='profilecard-container'>
                <div className='banner-orange'></div>
                <div className='profile-picture'></div>
                <div className='information'>
                    <label>Navn: Ola Nordmann</label>
                    <label>Skole: Norges kuleste skole</label>
                </div>
            </div>

            <img className="background-blue" src="../images/Dividerblue.png"></img>
            
        </>
    )
}