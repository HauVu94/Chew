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
                    <h2 className="social-title">social</h2>

                    <Link to="#" className="menu-bars"> 
                        <BiIcon.BiX />
                    </Link>
            </div>
        </>
    )
}