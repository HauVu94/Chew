import { FridgeSidetab } from "../components/MyFrigdeComponents/FridgeSidetab"
import Navbar from "../components/NavigationComponents/Navbar"
import MyFridgeIngredientsList from "../components/MyFrigdeComponents/MyFridgeIngredientsList"

export const MyFridge = () => {  
    return (
        <> 
            <Navbar avatarSrc={require("../../public/images/profile.png")}/>
            <FridgeSidetab />
            <MyFridgeIngredientsList />
        </>
    )
}