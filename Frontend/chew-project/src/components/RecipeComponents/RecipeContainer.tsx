import React from "react";
import "../../styles/RecipeContainer.css"
import { PageTitle } from "../PageComponents/PageTitle";


export const RecipeContainer  = () => {

    return(
        <>

            

            <div className="info-wrapper">
                <div className="title-container">
                    <h2 className="page-title">Oppskrifter basert på ditt kjøleskap</h2>
                </div>
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
                            <img className='recipe-img' src="images/recipes/gryte.png" alt="image"/>
                            <div className='recipe-title'>
                                <div className="ingredients-avaliable green"></div>
                                <h4>Gryte med kjøttdeig</h4>
                            </div>
                            <p className='recipe-specs'>
                                Lett | 0-30 min | <span className="orange-text">4 xp</span>
                            </p>
                        </article>

                        {/*TEST RECIPES*/}

                        <article className='recipe-card'>
                            <img className='recipe-img' src="images/recipes/kjøttform.png" alt="image"/>
                            <div className='recipe-title'>
                                <div className="ingredients-avaliable green"></div>
                                <h4>Engelsk Hyrdepai</h4>
                            </div>
                            <p className='recipe-specs'>
                                Middels | 30-60 min | <span className="orange-text">6 xp</span>
                            </p>
                        </article>

                        <article className='recipe-card'>
                            <img className='recipe-img' src="images/recipes/kjøttkaker.png" alt="image"/>
                            <div className='recipe-title'>
                                <div className="ingredients-avaliable yellow"></div>
                                <h4>Hjemmelagde kjøttkaker</h4>
                            </div>
                            <p className='recipe-specs'>
                                Utfordrende | 1 time + | <span className="orange-text">8 xp</span>
                            </p>
                        </article>

                        <article className='recipe-card'>
                            <img className='recipe-img' src="images/recipes/taco.png" alt="image"/>
                            <div className='recipe-title'>
                                <div className="ingredients-avaliable red"></div>
                                <h4>Klassisk taco</h4>
                            </div>
                            <p className='recipe-specs'>
                                Lett | 0-30 min | <span className="orange-text">4 xp</span>
                            </p>
                        </article>

                        <article className='recipe-card'>
                            <img className='recipe-img' src="images/recipes/placeholder.png" alt="image"/>
                            <div className='recipe-title'>
                                <div className="ingredients-avaliable"></div>
                                <h4>Placeholder</h4>
                            </div>
                            <p className='recipe-specs'>
                                Vanskelighetsgrad | Tid | <span className="orange-text">0 xp</span>
                            </p>
                        </article>

                        <article className='recipe-card'>
                            <img className='recipe-img' src="images/recipes/placeholder.png" alt="image"/>
                            <div className='recipe-title'>
                                <div className="ingredients-avaliable"></div>
                                <h4>Placeholder</h4>
                            </div>
                            <p className='recipe-specs'>
                                Vanskelighetsgrad | Tid | <span className="orange-text">0 xp</span>
                            </p>
                        </article>

                        <article className='recipe-card'>
                            <img className='recipe-img' src="images/recipes/placeholder.png" alt="image"/>
                            <div className='recipe-title'>
                                <div className="ingredients-avaliable"></div>
                                <h4>Placeholder</h4>
                            </div>
                            <p className='recipe-specs'>
                                Vanskelighetsgrad | Tid | <span className="orange-text">0 xp</span>
                            </p>
                        </article>

                        <article className='recipe-card'>
                            <img className='recipe-img' src="images/recipes/placeholder.png" alt="image"/>
                            <div className='recipe-title'>
                                <div className="ingredients-avaliable"></div>
                                <h4>Placeholder</h4>
                            </div>
                            <p className='recipe-specs'>
                                Vanskelighetsgrad | Tid | <span className="orange-text">0 xp</span>
                            </p>
                        </article>

                        <article className='recipe-card'>
                            <img className='recipe-img' src="images/recipes/placeholder.png" alt="image"/>
                            <div className='recipe-title'>
                                <div className="ingredients-avaliable"></div>
                                <h4>Placeholder</h4>
                            </div>
                            <p className='recipe-specs'>
                                Vanskelighetsgrad | Tid | <span className="orange-text">0 xp</span>
                            </p>
                        </article>

                        <article className='recipe-card'>
                            <img className='recipe-img' src="images/recipes/placeholder.png" alt="image"/>
                            <div className='recipe-title'>
                                <div className="ingredients-avaliable"></div>
                                <h4>Placeholder</h4>
                            </div>
                            <p className='recipe-specs'>
                                Vanskelighetsgrad | Tid | <span className="orange-text">0 xp</span>
                            </p>
                        </article>

                        <article className='recipe-card'>
                            <img className='recipe-img' src="images/recipes/placeholder.png" alt="image"/>
                            <div className='recipe-title'>
                                <div className="ingredients-avaliable"></div>
                                <h4>Placeholder</h4>
                            </div>
                            <p className='recipe-specs'>
                                Vanskelighetsgrad | Tid | <span className="orange-text">0 xp</span>
                            </p>
                        </article>
                </div>
            </div>
        </>
    )
}
