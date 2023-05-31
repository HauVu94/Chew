import React from "react";
import "../../styles/RecipeTitleBar.css"
import { Link } from 'react-router-dom';
import NavbarProps from "../../interface/NavbarProps";

export const RecipeTitleBar  = () => {

    return(
        <div className="tab-wrapper">

            <div className="sidetab fridge">
                <Link to="/MyFridge">
                    <img className="sidetab-icon" src="/images/fridge-white.png" alt="frigde-sprite"/>
                </Link>
            </div>

        </div>
    )
}
