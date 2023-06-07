import React from "react";
import "../../styles/Sidetab.css"
import { Link } from 'react-router-dom';
import * as BiIcons from 'react-icons/bi';


export const MyFrigdeTitleBar  = () => {

    return(
        <div className="tab-wrapper">
            <div className="sidetab sidetab-left">
                <Link to="/RecipePage">
                    <BiIcons.BiRestaurant/>
                </Link>
            </div>

            <div className="sidetab sidetab-right">
                <Link to="/ShoppingListPage">
                    <BiIcons.BiShoppingBag/>
                </Link>
            </div>
        </div>
    )
}
