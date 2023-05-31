import React from "react";
import "../../styles/RecipeTitleBar.css"
import { Link } from 'react-router-dom';

export const RecipeTitleBar  = () => {

    return(
        <div className="tab-wrapper">

            <h2 className="page-title">Oppskrifter basert på ditt kjøleskap</h2>

            <div className="sidetab fridge">
                <Link to="/MyFridge">
                    <img className="sidetab-icon" src="/images/frigde.png" alt="frigde-sprite"/>
                </Link>
            </div>

        </div>
    )
}
