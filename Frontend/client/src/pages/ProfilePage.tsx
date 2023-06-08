import Navbar from '../components/NavigationComponents/Navbar';
import ActivitiesContainer from '../components/ProfileWidgets/ActivitiesContainer';
import ProfileWidget from '../components/ProfileWidgets/ProfileWidget';
import ProgressionBar from '../components/ProfileWidgets/ProgressionBar';
import Toolbar from '../components/Toolbar';
import "../styles/Profilepage.css";
import "../styles/Progression.css"

export const ProfilePage = () => {  
    return (
        <> 
            <Navbar avatarSrc="images/profile.png"/>
            <ProfileWidget/>
            <ActivitiesContainer/>
            <ProgressionBar/>
        </>
    )
}