import Navbar from '../components/NavigationComponents/Navbar';
import ActivitiesContainer from '../components/ProfileWidgets/ActivitiesContainer';
import ProfileWidget from '../components/ProfileWidgets/ProfileWidget';
import Toolbar from '../components/Toolbar';
import "../styles/Profilepage.css";

export const ProfilePage = () => {  
    return (
        <> 
            <Navbar avatarSrc={require("../../public/images/profile.png")}/>
            <ProfileWidget />
            <ActivitiesContainer />
        </>
    )
}