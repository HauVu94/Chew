import { MyFrigdeTitleBar } from "../components/MyFrigdeComponents/MyFrigdeTitleBar"
import { MyFrigdeContainer } from "../components/MyFrigdeComponents/MyFrigdeContainer"
import Navbar from "../components/Navbar"

export const MyFridge = () => {  
    return (
        <> 
            <Navbar avatarSrc="default-avatar.png"/>   

            <MyFrigdeTitleBar />

            <MyFrigdeContainer />

            
        </>
    )
}