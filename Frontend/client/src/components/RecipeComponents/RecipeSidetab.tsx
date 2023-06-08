import React from "react";
import { Link } from 'react-router-dom';
import * as BiIcons from 'react-icons/bi'

export const RecipeSidetab = () => {

    return(
        <div className="tab-wrapper">

            <div className="sidetab sidetab-left">
                <Link to="/MyFridge">
                    <BiIcons.BiFridge />
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
