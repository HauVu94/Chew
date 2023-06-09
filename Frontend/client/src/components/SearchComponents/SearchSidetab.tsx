import React from "react";
import { Link } from 'react-router-dom';
import * as BiIcons from 'react-icons/bi'

export const SearchSidetab = () => {

    return(
        <div className="tab-wrapper">

            <div>
                
            </div>

            <div className="sidetab sidetab-right">
                <Link to="/MyFridge">
                    <BiIcons.BiFridge />
                </Link>
            </div>

        </div>
    )
}
