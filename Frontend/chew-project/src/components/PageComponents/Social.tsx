import React, { useState } from "react";
import * as BiIcon from "react-icons/bi"
import { Link } from "react-router-dom";
import "../../styles/Social.css"

export const Social = () => {
    const [social, setSocial] = useState(false)

    const showSocial = () => setSocial(!social)

    return(
        <>  
            <Link to="#" className="social-icon" onClick={showSocial}>
                    <div className="sidetab sidetab-right">
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
                <div className="social-list">
                    <div className="social-item">
                        <h3 className="social-name">Navn1</h3>
                    </div>
                    <div className="social-item">
                        <h3 className="social-name">Navn1</h3>
                    </div>
                    <div className="social-item">
                        <h3 className="social-name">Navn1</h3>
                    </div>
                    <div className="social-item">
                        <h3 className="social-name">Navn1</h3>
                    </div>
                </div>

                <input className="social-search" type="text" placeholder="Søk..."></input>
                
            </div>
        </>
    )
}