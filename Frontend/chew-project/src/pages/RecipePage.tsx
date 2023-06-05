import Navbar from "../components/NavigationComponents/Navbar"
import { RecipeContainer } from "../components/RecipeComponents/RecipeContainer";
import { RecipeTitleBar } from "../components/RecipeComponents/RecipeTitleBar";

export const RecipePage = () => {  
    return (
        <> 
            <Navbar avatarSrc="images/profile.png"/>   

            <RecipeTitleBar />     

            <RecipeContainer />
     
        </>
    )
}