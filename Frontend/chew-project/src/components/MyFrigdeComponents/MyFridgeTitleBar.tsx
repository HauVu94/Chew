import React from "react";
import "../../styles/Sidetab.css"
import { Link } from 'react-router-dom';
import { BiRestaurant, BiPlusCircle } from 'react-icons/bi';


export const MyFrigdeTitleBar  = () => {

    return(
        <div className="tab-wrapper">
            <div className="sidetab sidetab-left">
                <Link to="/RecipePage">
                    <BiRestaurant/>
                </Link>
            </div>

            <div className="sidetab sidetab-right">
                <BiPlusCircle/>
            </div>
        </div>
    )
}
