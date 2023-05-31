import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom';
import { MyFrigdeTitleBar } from "../components/MyFrigdeComponents/MyFrigdeTitleBar";
import { RecipeContainer } from "../components/MyFrigdeComponents/RecipeContainer";

export const RecipePage = () => {  
    return (
        <> 
            <Navbar avatarSrc="default-avatar.png"/>   

            <MyFrigdeTitleBar />     

            <RecipeContainer />

            <Link to="/MyFrigde">MyFridge</Link>       
        </>
    )
}