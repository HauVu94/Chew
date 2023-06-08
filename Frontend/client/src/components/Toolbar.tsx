import React from "react";
import { Link } from "react-router-dom";
import "../styles/Toolbar.css"

const Toolbar = () => {
    return(
        <div className="toolbar">
            <Link to="/RecipePage" className="my-fridge">
                <button className="tool my-fridge">Mitt kjøleskap</button>
            </Link>
            <input className="tool search" placeholder="Søk"></input>
        </div>
    )
}

export default Toolbar;