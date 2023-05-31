import React from "react";
import "../../styles/RecipeTitleBar.css"
import { Link } from 'react-router-dom';

export const RecipeTitleBar  = () => {

    return(
        <div className="title-bar">
            <div className="sidetab-left">
                <img className="sidetab-icon" src="frigde.png" alt="frigde-sprite"/>
            </div>

            <h2 className="page-title">Oppskrifter basert på ditt kjøleskap</h2>

            <Link to="/MyFridge">
                <div className="sidetab-right">
                    <img className="sidetab-icon" src="frigde.png" alt="frigde-sprite"/>
                </div>
            </Link>

        </div>
    )
}
