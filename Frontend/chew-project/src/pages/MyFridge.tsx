import { MyFrigdeTitleBar } from "../components/MyFrigdeComponents/MyFridgeTitleBar"
import Navbar from "../components/Navigation/Navbar"
import MyFridgeIngredientsList from "../components/MyFrigdeComponents/MyFridgeIngredientsList"

export const MyFridge = () => {  
    return (
        <> 
            <Navbar avatarSrc="images/default-avatar.png"/>
            <MyFrigdeTitleBar />
            <MyFridgeIngredientsList />
        </>
    )
}