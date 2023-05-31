import React, { useState } from "react";

import "../styles/MainMenu.css"

const MainMenu = () => {
    const [button1Text, setButton1Text] = useState("Delta i skoletime")
    const [button2Text, setButton2Text] = useState("Kunngjøringer og meldinger")
    const [button3Text, setButton3Text] = useState("Utfordringer og spill")
    const [button4Text, setButton4Text] = useState("Trenger du hjelp?")

    const btn1Click = () => {
        console.log("Trykket på 'Delta i skoletime'")
    }

    const btn2Click = () => {
        console.log("Trykket på 'Kunngjøringer og meldinger'")
    }

    const btn3Click = () => {
        console.log("Trykket på 'Utfordringer og spill'")
    }

    const btn4Click = () => {
        console.log("Trykket på 'Trenger du hjelp?'")
    }

    return(
        <div className="main-menu">
            <h1>Kom i gang!</h1>
            <button className="main-menu-btn btn1" onClick={btn1Click}>{button1Text}</button>
            <button className="main-menu-btn btn2" onClick={btn2Click}>{button2Text}</button>
            <button className="main-menu-btn btn3" onClick={btn3Click}>{button3Text}</button>
            <button className="main-menu-btn btn4" onClick={btn4Click}>{button4Text}</button>
        </div>
    )
}

export default MainMenu;