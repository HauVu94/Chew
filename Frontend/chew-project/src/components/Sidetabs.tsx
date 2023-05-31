import React from "react";

import "../styles/Sidetab.css"

const Sidetabs = () => {

    return(
        <div className="tab-wrapper">
            <div className="sidetab calendar">
                <img className="sidetab-icon" alt="calendar-icon" src="images/calendar-icon.png"/>
            </div>
            <div className="sidetab social">
                <img className="sidetab-icon" alt="social-icon" src="images/social-icon.png"/>
            </div>
        </div>
    )
}

export default Sidetabs;