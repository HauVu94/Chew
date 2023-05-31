import React from "react";
import "../../styles/RecipeContainer.css"


export const RecipeContainer  = () => {

    return(
        <div className="recipe-container">
            <article className='recipe-card'>
                <h3 className='recipe-title'>Title</h3>
                <img className='recipe-img' src="" alt="image" width="300px" height="300px"/>
            </article>
            <article className='recipe-card'>
                <h3 className='recipe-title'>Title</h3>
                <img className='recipe-img' src="" alt="image" width="300px" height="300px"/>
            </article>
            <article className='recipe-card'>
                <h3 className='recipe-title'>Title</h3>
                <img className='recipe-img' src="" alt="image" width="300px" height="300px"/>
            </article>
            <article className='recipe-card'>
                <h3 className='recipe-title'>Title</h3>
                <img className='recipe-img' src="" alt="image" width="300px" height="300px"/>
            </article>
           
        </div>
    )
}
