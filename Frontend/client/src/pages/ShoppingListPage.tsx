import Navbar from "../components/NavigationComponents/Navbar"
import { ShoppingList } from "../components/ShoppingListComponents/ShoppingList"

export const ShoppingListPage = () => {
    return (
        <>
            <Navbar avatarSrc={require("../../public/images/profile.png")}/>

            <ShoppingList />
        </>
    )
}