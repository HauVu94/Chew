import "../../styles/ShoppingListPage.css"
import { PageTitle } from "../PageComponents/PageTitle"
import {Link} from "react-router-dom";
import * as BiIcons from 'react-icons/bi';

export const ShoppingList = () => {

    return (
        <> 
            <div className="shoppinglist-container">

                <div className="cross-container">
                    <Link to="/MyFridge">
                        <BiIcons.BiX />
                    </Link>
                </div>
                
                <PageTitle pageTitle="Din Handleliste"/>

                <div className="grocery-container">

                    <div className="grocery-item">
                        <input className="number-input" type="number" placeholder="0" />
                        <label className="grocery-label">Banan</label>
                        <input className="checkbox-input" type="checkbox"></input>
                        <BiIcons.BiTrash />
                    </div>

                    <div className="grocery-item">
                        <input className="number-input" type="number" placeholder="0" />
                        <label className="grocery-label">Banan</label>
                        <input className="checkbox-input" type="checkbox"></input>
                        <BiIcons.BiTrash />
                    </div>

                    <div className="grocery-item">
                        <input className="number-input" type="number" placeholder="0" />
                        <label className="grocery-label">Banan</label>
                        <input className="checkbox-input" type="checkbox"></input>
                        <BiIcons.BiTrash />
                    </div>

    


                   

                </div>

                <div className="pluss-container">
                    <BiIcons.BiPlus />
                </div>



            </div>
        </>
    )
}
