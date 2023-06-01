import React from "react";
import "../../styles/RecipeTitleBar.css"
import { Link } from 'react-router-dom';
import {BiFridge} from 'react-icons/bi'

export const RecipeTitleBar  = () => {

    return(
        <div className="tab-wrapper">

            <div className="sidetab fridge">
                <Link to="/MyFridge">
                    <BiFridge/>
                </Link>
            </div>

        </div>
    )
}
