import React, { useState } from "react";
import * as BiIcon from "react-icons/bi"
import { Link } from "react-router-dom";
import "../styles/Sidetab.css"
import { Calender } from "./PageComponents/Calender";
import { Social } from "./PageComponents/Social";

const Sidetabs = () => {

    return(
        <div className="sidetab-container">
            <div className="tab-wrapper">
                
                <Calender />

                <Social />
            </div>
        </div>
    )
}

export default Sidetabs;