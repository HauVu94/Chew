import React, { useState } from "react";

import "../styles/SchoolPrivate.css"

const SchoolPrivate = () => {
    const [button1Text, setButton1Text] = useState("Skole");
    const [button2Text, setButton2Text] = useState("Privat");
    const [activeButton, setActiveButton] = useState("Skole");

    const schoolClick = () => {
        console.log("Trykket på 'Delta i skoletime'")
        setActiveButton("School")
    }

    const privateClick = () => {
        console.log("Trykket på 'Kunngjøringer og meldinger'")
        setActiveButton("Private")
    }


    return(
        <>
            <div className="school-private">
                <button className={`swap-btn school-btn ${activeButton === "School" ? "clicked" : ""}`} onClick={schoolClick}>{button1Text}</button>
                <button className={`swap-btn private-btn ${activeButton === "Private" ? "clicked" : ""}`} onClick={privateClick}>{button2Text}</button>
            </div>
        </>
    )
}

export default SchoolPrivate;