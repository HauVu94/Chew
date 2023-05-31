import Navbar from "../components/Navigation/Navbar"
import { RecipeContainer } from "../components/RecipeComponents/RecipeContainer";
import { RecipeTitleBar } from "../components/RecipeComponents/RecipeTitleBar";

export const RecipePage = () => {  
    return (
        <> 
            <Navbar avatarSrc="default-avatar.png"/>   

            <RecipeTitleBar />     

            <RecipeContainer />
     
        </>
    )
}