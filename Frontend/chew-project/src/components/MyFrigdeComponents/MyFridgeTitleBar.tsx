import React from "react";
import "../../styles/Sidetab.css"
import { Link } from 'react-router-dom';


export const MyFrigdeTitleBar  = () => {

    return(
        <div className="tab-wrapper">
            <div className="sidetab sidetab-left">
                <Link to="/RecipePage">
                <img className="sidetab-icon" alt="recipe-icon" src="images/recipe-white.png"/>
                </Link>
            </div>

            <div className="sidetab sidetab-right">
                <img className="sidetab-icon" alt="pluss-icon" src="images/pluss-white.png"/>
            </div>
        </div>
    )
}
