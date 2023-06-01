import "../../styles/ShoppingListPage.css"
import { PageTitle } from "../PageComponents/PageTitle"

export const ShoppingList = () => {

    return (
        <> 
            <div className="shoppinglist-container">

                <div className="cross-container">
                    <img className="cross-icon" src="images/cross.png" />
                </div>
                
                <PageTitle pageTitle="Din Handleliste"/>

                <div className="grocery-container">

                    <input className="number-input" type="number" placeholder="0" />
                    <label className="grocery-label">Banan</label>

                    <input className="number-input" type="number" placeholder="0" />
                    <label className="grocery-label">Banan</label>


                   

                </div>

                <div className="pluss-container">
                    <img className="pluss-icon" src="images/pluss.png" />
                </div>



            </div>
        </>
    )
}
