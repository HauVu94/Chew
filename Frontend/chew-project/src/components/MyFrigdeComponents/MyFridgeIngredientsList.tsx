import React from 'react'
import '../../styles/MyFridgeIngredientsList.css'
import { PageTitle } from '../PageComponents/PageTitle'
import * as TbIcon from 'react-icons/tb'
import {BsTrash} from 'react-icons/bs'
import * as LuIcons from 'react-icons/lu'
import {GiSaltShaker} from 'react-icons/gi'


const myFridge = ['Hodekål', 'Grønnkål', 'Spisskål', 'Kålrabi', 'Rødkål', 'Kålruller', 'Kålstuing', 'Fårikål', 'Kålgrateng', 'Kålrotstappe']

const MyFridgeIngredientsList = () => {


  return (
    <>
      <div className='ingredient-container'>
      <PageTitle pageTitle='Ditt Kjøleskap' />
        <div className='fridge-container'>
          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Kjøtt/fisk:</h2>
              {myFridge.map(product => 
              <li className='fridge-item' key={product}>
                <TbIcon.TbMeat className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon"/>
              </li>)}
            </ul>
          </div>
          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Tørrvarer/kornvarer:</h2>
              {myFridge.map(product => 
              <li className='fridge-item' key={product}>
                <TbIcon.TbBread className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon"/>
              </li>)}
            </ul>
          </div>
          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Grønnsaker og frukt/bær: </h2>
              {myFridge.map(product => 
              <li className='fridge-item' key={product}>
                <TbIcon.TbSalad className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon"/>
              </li>)}
            </ul>
          </div>
          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Meieriprodukter:</h2>
              {myFridge.map(product => 
              <li className='fridge-item' key={product}>
                <LuIcons.LuMilk className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon"/>
              </li>)}
            </ul>
          </div>
          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Krydder/urter:</h2>
              {myFridge.map(product => 
              <li className='fridge-item' key={product}>
                <GiSaltShaker className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon"/>
              </li>)}
            </ul>
          </div>
          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Restemat:</h2>
              {myFridge.map(product => 
              <li className='fridge-item' key={product}>
                <LuIcons.LuPizza className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon"/>
              </li>)}
            </ul>
          </div>
          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Annet:</h2>
              {myFridge.map(product => 
              <li className='fridge-item' key={product}>
                <LuIcons.LuFileQuestion className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon"/>
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyFridgeIngredientsList
