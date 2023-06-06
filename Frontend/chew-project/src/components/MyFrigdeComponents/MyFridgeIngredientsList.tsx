import React from 'react'
import '../../styles/MyFridgeIngredientsList.css'
import { PageTitle } from '../PageComponents/PageTitle'
import * as TbIcon from 'react-icons/tb'
import {BsTrash} from 'react-icons/bs'
import * as LuIcons from 'react-icons/lu'




const ingredientsList = ['Hodekål', 'Grønnkål', 'Spisskål', 'Kålrabi', 'Rødkål', 'Kålruller', 'Kålstuing', 'Fårikål', 'Kålgrateng', 'Kålrotstappe']

const MyFridgeIngredientsList = () => {


  return (
    <>
      <div className='ingredient-container'>
      <PageTitle pageTitle='Ditt Kjøleskap' />
        <div className='fridge-container'>
          <div className='fridge-section'>
          <ul className='fridge-list'>
            <h2 className='fridge-title'>Grønnsaker:</h2>
            {ingredientsList.map(ingredient => <li className='fridge-item' key={ingredient}>
              <TbIcon.TbCarrot />
              <span className='fridge-text'>{ingredient}</span>
              <BsTrash/>
              </li>)}
          </ul>
        </div>
        <div className='fridge-section'>
          <ul className='fridge-list'>
            <h2 className='fridge-title'>Frukt:</h2>
            {ingredientsList.map(ingredient => 
            <li className='fridge-item' key={ingredient}>
              <LuIcons.LuApple />
              <span className='fridge-text'>{ingredient}</span>
              <BsTrash/>
            </li>)}
          </ul>
        </div>
        <div className='fridge-section'>
          <ul className='fridge-list'>
            <h2 className='fridge-title'>Kjøtt:</h2>
            {ingredientsList.map(ingredient => 
            <li className='fridge-item' key={ingredient}>
              <TbIcon.TbMeat />
              <span className='fridge-text'>{ingredient}</span>
              <BsTrash/>
              </li>)}
          </ul>
        </div>
        <div className='fridge-section'>
          <ul className='fridge-list'>
            <h2 className='fridge-title'>Rester:</h2>
            {ingredientsList.map(ingredient => 
            <li className='fridge-item' key={ingredient}>
              <LuIcons.LuPizza />
              <span className='fridge-text'>{ingredient}</span>
              <BsTrash/>
              </li>)}
          </ul>
        </div>
        <div className='fridge-section'>
          <ul className='fridge-list'>
            <h2 className='fridge-title'>Diverse:</h2>
            {ingredientsList.map(ingredient => 
            <li className='fridge-item' key={ingredient}>
              <TbIcon.TbSalad />
              <span className='fridge-text'>{ingredient}</span>
              <BsTrash/>
              </li>)}
          </ul>
        </div>
      </div>
      </div>
    </>
  )
}

export default MyFridgeIngredientsList
