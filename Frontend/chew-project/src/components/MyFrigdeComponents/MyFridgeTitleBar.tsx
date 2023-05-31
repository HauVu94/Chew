import React from "react";
import "../../styles/Sidetab.css"


export const MyFrigdeTitleBar  = () => {

    return(
        <div className="tab-wrapper">
            <div className="sidetab left">

                <img className="sidetab-icon" alt="calendar-icon" src="images/calendar-icon.png"/>

            </div>

            <div className="page-title">

                <h2>Ditt Kjøleskap</h2>

            </div>

            <div className="sidetab right">

                <img className="sidetab-icon" alt="calendar-icon" src="images/calendar-icon.png"/>

            </div>
        </div>
    )
}
