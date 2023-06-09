import Navbar from "../components/NavigationComponents/Navbar"
import { RecipeContainer } from "../components/RecipeComponents/RecipeContainer";
import { RecipeSidetab } from "../components/RecipeComponents/RecipeSidetab";

export const RecipePage = () => {  
    return (
        <> 
            <Navbar avatarSrc={require("../../public/images/profile.png")}/>

            <RecipeSidetab />     

            <RecipeContainer />
     
        </>
    )
}