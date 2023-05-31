import { MyFrigdeTitleBar } from "../components/MyFrigdeComponents/MyFrigdeTitleBar"
import { MyFrigdeRecipes} from "../components/MyFrigdeComponents/MyFrigdeRecipes"
import Navbar from "../components/Navbar"

export const MyFridge = () => {  
    return (
        <> 
            <Navbar avatarSrc="default-avatar.png"/>   

            <MyFrigdeTitleBar />

            <MyFrigdeRecipes />

            
        </>
    )
}