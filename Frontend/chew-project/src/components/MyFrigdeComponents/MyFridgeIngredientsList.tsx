import React from 'react'
import '../../styles/MyFridgeIngredientsList.css'
import { PageTitle } from '../PageComponents/PageTitle'



const ingredientsList = ['Hodekål', 'Grønnkål', 'Spisskål', 'Kålrabi', 'Rødkål', 'Kålruller', 'Kålstuing', 'Fårikål', 'Kålgrateng', 'Kålrotstappe']

const MyFridgeIngredientsList = () => {


  return (
    <>
      <div className='ingredient-container'>
      <PageTitle pageTitle='Ditt Kjøleskap' />
        <ul>
          {ingredientsList.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
        </ul>
      </div>
    </>
  )
}

export default MyFridgeIngredientsList
