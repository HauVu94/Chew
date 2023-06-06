import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../styles/MainMenu.css"

const MainMenu = () => {
    const [button1Text, setButton1Text] = useState("")
    const [button2Text, setButton2Text] = useState("")
    const [button3Text, setButton3Text] = useState("")
    const [button4Text, setButton4Text] = useState("")

    const navigate = useNavigate();

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
        if(button1Text === "Delta i skoletime"){
            console.log("Trykket på 'Delta i skoletime'")
            alert("Ingenting her enda")
            navigate("/");
        } else{
            console.log("Trykket på 'Oppskrifter'");
            navigate("/RecipePage");
        }
    }

    const btn2Click = () => {
        if(button2Text === "Kunngjøringer og meldinger"){
            console.log("Trykket på 'Kunngjøringer og meldinger'")
            alert("Ingenting her enda")
            navigate("/");
        } else{
            console.log("Trykket på 'Handleliste'");
            navigate("/ShoppingListPage");
        }
    }

    const btn3Click = () => {
        
        if(button3Text === "Utfordringer og spill"){
            console.log("Trykket på 'Utfordringer og spill'")
            alert("Ingenting her enda")
            navigate("/");
        } else{
            console.log("Trykket på 'Videoleksjoner'");
            alert("Ingenting her enda")
            navigate("/");
        }
    }

    const btn4Click = () => {
        if(button4Text === "Trenger du hjelp?"){
            navigate("/QAPage");
        }
    }

    return(
            <div className="main-menu">
                <h1 className="main-menu-title">Kom i gang!</h1>
                <div className="main-menu-container">
                    <button className="main-menu-btn btn1" onClick={btn1Click}>{button1Text}</button>
                    <button className="main-menu-btn btn2" onClick={btn2Click}>{button2Text}</button>
                    <button className="main-menu-btn btn3" onClick={btn3Click}>{button3Text}</button>
                    <button className="main-menu-btn btn4" onClick={btn4Click}>{button4Text}</button>
                </div>
            </div>
    );
};

export default MainMenu;