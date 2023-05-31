import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom';
import { RecipeContainer } from "../components/RecipeComponents/RecipeContainer";
import { RecipeTitleBar } from "../components/RecipeComponents/RecipeTitleBar";

export const RecipePage = () => {  
    return (
        <> 
            <Navbar avatarSrc="default-avatar.png"/>   

            <RecipeTitleBar />     

            <RecipeContainer />

            <Link to="/MyFrigde">MyFridge</Link>       
        </>
    )
}