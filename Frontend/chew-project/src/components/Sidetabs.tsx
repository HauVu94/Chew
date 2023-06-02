import React from "react";
import * as BiIcon from "react-icons/bi"

import "../styles/Sidetab.css"

const Sidetabs = () => {

    return(
        <div className="sidetab-container">
            <div className="tab-wrapper">
                <div className="sidetab sidetab-left">
                    <BiIcon.BiCalendar />
                </div>
                <div className="sidetab sidetab-right">
                    <BiIcon.BiUser />
                </div>
            </div>
        </div>
    )
}

export default Sidetabs;