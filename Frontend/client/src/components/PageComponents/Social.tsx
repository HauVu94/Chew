import React, { useState } from "react";
import * as BiIcon from "react-icons/bi"
import { Link } from "react-router-dom";
import "../../styles/Social.css"

export const Social = () => {

    const friendsList = [{id: 1, name: "Svend Simen Svendsen"}, {id: 2, name: "Navn Navnessen"}, {id: 3, name: "Kjell Magne Gøber"}, {id: 4, name: "Pål Peil"}, {id: 5, name: "Fjell Bergsten"},{id: 6, name: "Ullen F"}]
    const [searchTerm, setSearchTerm] = useState('')
    
    const [social, setSocial] = useState(false)
    const showSocial = () => setSocial(!social)

    console.log(friendsList)

    

    return(
        <>  
            <Link to="#" className="social-icon" onClick={showSocial}>
                    <div className={social ? "sidetab sidetab-right active" : "sidetab sidetab-right"}>
                            <BiIcon.BiGroup />
                    </div>
            </Link>
            <div className={social ? "social-container active" : "social-container"}>
                <div className="social-header">
                    <Link to="#" className="social-cross" onClick={showSocial}> 
                        <BiIcon.BiX />
                    </Link>
                    <h2 className="social-title">Dine venner</h2>
                </div>
                <ul className="social-list">
                    {friendsList.filter((val) => {
                            if (searchTerm === ''){
                                return friendsList
                            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }
                        }).slice(0,5).map((val, key) => {
                            return (
                                <li key={key} className="social-item">{val.name}</li>
                            )
                    })}
                </ul>

                <input className="social-search" type="text" placeholder="Søk..." onChange={event => {setSearchTerm(event.target.value)}}></input>

            </div>
        </>
    )
}
