import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import "../styles/MainMenu.css"

const MainMenu = () => {
    const [button1Text, setButton1Text] = useState("")
    const [button2Text, setButton2Text] = useState("")
    const [button3Text, setButton3Text] = useState("")
    const [button4Text, setButton4Text] = useState("")

    useEffect(() => {
        const mode = localStorage.getItem("Mode")

        if(mode === "School"){
            setButton1Text("Delta i skoletime")
            setButton2Text("Kunngjøringer og meldinger")
            setButton3Text("Utfordringer og spill")
            setButton4Text("Trenger du hjelp?") 
        } else {
            setButton1Text("Oppskrifter")
            setButton2Text("Handleliste")
            setButton3Text("Videoleksjoner")
            setButton4Text("Trenger du hjelp?")
        }
    }, []);

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

            <Link to="ShoppingListPage" className="main-menu-btn btn2">
                <button className="main-menu-btn btn2" onClick={btn2Click}>{button2Text}</button>
            </Link>

            <button className="main-menu-btn btn3" onClick={btn3Click}>{button3Text}</button>

            <button className="main-menu-btn btn4" onClick={btn4Click}>{button4Text}</button>
        </div>
    );
};

export default MainMenu;