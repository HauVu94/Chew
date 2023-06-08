import React, { useState, useEffect } from "react";

import "../styles/SchoolPrivate.css"

const SchoolPrivate = () => {
    const [activeMode, setActiveMode] = useState(localStorage.getItem("Mode") || "School"); // track across pages?

    useEffect(() => {
        localStorage.setItem("Mode", activeMode)
    }, [activeMode]);

    const schoolClick = () => {
        console.log("Trykket på 'Delta i skoletime'")
        setActiveMode("School")
        window.location.reload();
    }

    const privateClick = () => {
        console.log("Trykket på 'Kunngjøringer og meldinger'")
        setActiveMode("Private")
        window.location.reload();
    }

    return(
        <>
            <div className="school-private">
                <button className={`swap-btn school-btn ${activeMode === "School" ? "clicked" : ""}`} onClick={schoolClick}>Skole</button>
                <button className={`swap-btn private-btn ${activeMode === "Private" ? "clicked" : ""}`} onClick={privateClick}>Privat</button>
            </div>
        </>
    )
}

export default SchoolPrivate;