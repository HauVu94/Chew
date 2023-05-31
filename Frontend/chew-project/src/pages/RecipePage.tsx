import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom';

export const RecipePage = () => {  
    return (
        <> 
            <Navbar avatarSrc="default-avatar.png"/>        

            <Link to="/MyFrigde">MyFridge</Link>       
        </>
    )
}