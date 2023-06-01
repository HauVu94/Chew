import React from "react";
import "../../styles/RecipeContainer.css"


export const RecipeContainer  = () => {

    return(
        <>
            <div className="title-container">
                <h2 className="page-title">Oppskrifter basert på ditt kjøleskap</h2>
            </div>

            <div className="info-wrapper">
            <div className="info">
                <div className="info-field">
                    <div className="ingredients-avaliable green"/>
                    <p>Du har alle ingrediensene</p>
                </div>
                <div className="info-field">
                    <div className="ingredients-avaliable yellow"/>
                    <p>Du mangler kun noen ingredienser</p>
                </div>
                <div className="info-field">
                    <div className="ingredients-avaliable red"/>
                    <p>Du mangler mange ingredienser</p>
                </div>
            </div>
                <div className="recipe-container">
                    <article className='recipe-card'>
                        <img className='recipe-img' src="images/test-oppskrift.png" alt="image"/>
                        <div className='recipe-title'>
                            <div className="ingredients-avaliable yellow"></div>
                            <h4>Gryte med kjøttdeig</h4>
                        </div>
                        <p className='recipe-specs'>Enkel | Medium | 2xp </p>
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
            </div>
        </>
    )
}
