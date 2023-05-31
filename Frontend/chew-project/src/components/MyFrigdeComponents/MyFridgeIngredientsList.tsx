import React from 'react'
import '../../styles/MyFridgeIngredientsList.css'



const ingredientsList = ['Hodekål', 'Grønnkål', 'Spisskål', 'Kålrabi', 'Rødkål', 'Kålruller', 'Kålstuing', 'Fårikål', 'Kålgrateng', 'Kålrotstappe']

const MyFridgeIngredientsList = () => {


  return (
    <>
      <div className='title-container'>
        <h2 className='page-title'>Ditt Kjøleskap</h2>
      </div>

      <div className='ingredient-container'>
        <ul>
          {ingredientsList.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
        </ul>
      </div>
    </>
  )
}

export default MyFridgeIngredientsList
