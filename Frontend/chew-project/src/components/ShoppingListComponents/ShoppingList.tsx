import "../../styles/ShoppingListPage.css"
import { PageTitle } from "../PageComponents/PageTitle"
import {Link} from "react-router-dom";
import { ShoppingListSidetab } from "./ShoppingListSidetab";
import * as BiIcons from 'react-icons/bi';
import {v4 as uuid} from 'uuid'; // unique id
import { useState } from "react";

interface shoppingListItem{
    id: string;
    name: string | null;
    quantity: number;
    isChecked: boolean;
}

export const ShoppingList = () => {

    const [shoppingList, setShoppingList] = useState<shoppingListItem[]>([
        // {
        //     id: uuid(),
        //     name: '1,5L Melk',
        //     quantity: 2,
        //     isChecked: false
        // },
        // {
        //     id: uuid(),
        //     name: '400gr Kjøttdeig',
        //     quantity: 1,
        //     isChecked: false
        // },
        // {
        //     id: uuid(),
        //     name: '1kg Beatepoteter',
        //     quantity: 1,
        //     isChecked: false
        // },
        // {
        //     id: uuid(),
        //     name: 'Kattemat',
        //     quantity: 4,
        //     isChecked: false
        // },
    ]);

    const addItemToList = () => {
        const foodName = prompt("Food:") || "";
        const foodQuantityPrompt = prompt("Quantity:") || "0";
        const foodQuantity = parseInt(foodQuantityPrompt)

        const newItem: shoppingListItem = {
            id: uuid(), //makes unique id every time
            name: foodName,
            quantity: foodQuantity,
            isChecked: false
        };
        setShoppingList([...shoppingList, newItem]);
    }

    const removeItemFromList = (itemId: string) => {
        const updatedShoppingList = shoppingList.filter(item => item.id !== itemId);
        setShoppingList(updatedShoppingList);
    }

    return (
        <> 
            
            <ShoppingListSidetab />
        
            <PageTitle pageTitle="Handleliste"/>
            <div className="shoppinglist-container">
                
                <div className="wrapper">
                   

                    <div className="grocery-container">
                        
                        {shoppingList.map((item) => (
                            <>
                                <div className="grocery-item" key={item.id}>
                                    <label className="number-input" placeholder="0">{item.quantity.toString()} x</label>
                                    <label className="grocery-label">{item.name}</label>
                                    <input className="checkbox-input" type="checkbox"></input>
                                    <div className="item-buttons">
                                    <BiIcons.BiEdit onClick={() => alert("ikke laget enda")}></BiIcons.BiEdit>
                                    <BiIcons.BiTrash onClick={() => removeItemFromList(item.id)}/>
                                    </div>
                                </div>
                            </>
                        ))}

                    </div>    
                
                </div>

                <div className="pluss-container">
                    <BiIcons.BiPlus onClick={() => addItemToList()}/>
                </div>

            </div>
        </>
    )
}
