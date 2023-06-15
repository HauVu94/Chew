import React, { useEffect, useState } from 'react'
import '../../styles/MyFridgeIngredientsList.css'
import { PageTitle } from '../PageComponents/PageTitle'
import * as TbIcon from 'react-icons/tb'
import {BsTrash} from 'react-icons/bs'
import * as LuIcons from 'react-icons/lu'
import {GiSaltShaker} from 'react-icons/gi'
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom'

const MyFridgeIngredientsList = () => {

  const [fridge, setFridge] = useState(1)

  const [meatFish, setMeatFish] = useState<{ingredient: string, quantity: string}[]>([]);
  const [dryCorn, setDryCorn] = useState<{ingredient: string, quantity: string}[]>([]);
  const [veggiesFruits, setVeggiesFruits] = useState<{ingredient: string, quantity: string}[]>([]);
  const [dairy, setDairy] = useState<{ingredient: string, quantity: string}[]>([]);
  const [spices, setSpices] = useState<{ingredient: string, quantity: string}[]>([]);
  const [leftovers, setLeftovers] = useState<{ingredient: string, quantity: string}[]>([]);
  const [other, setOther] = useState<{ingredient: string, quantity: string}[]>([]);

  useEffect(() => {
    // Fetch all fooditems from database
    fetch(`/api/foodItems`)
      .then((response) => response.json())
      .then((data) => {
  
        // Sort foodItems by category
        const ingredientsByCategory: {
          meatFish: {ingredient: string, quantity: string}[];
          dryCorn: {ingredient: string, quantity: string}[];
          veggiesFruits: {ingredient: string, quantity: string}[];
          dairy: {ingredient: string, quantity: string}[];
          spices: {ingredient: string, quantity: string}[];
          leftovers: {ingredient: string, quantity: string}[];
          other:  {ingredient: string, quantity: string}[];
        } = {
          meatFish: [],
          dryCorn: [],
          veggiesFruits: [],
          dairy: [],
          spices: [],
          leftovers: [],
          other: [],
        };
  
        data.forEach((item: { category: string, ingredient: string, quantity: string }) => {
          const { category, ingredient, quantity } = item;

          const foodItem = { ingredient, quantity }
          
          switch (category) {
            case 'Kjøtt/fisk':
              ingredientsByCategory.meatFish.push(foodItem);
              break;
            case 'Tørrvarer/kornvarer':
              ingredientsByCategory.dryCorn.push(foodItem);
              break;
            case 'Grønnsaker og frukt/bær':
              ingredientsByCategory.veggiesFruits.push(foodItem);
              break;
            case 'Meieriprodukter':
              ingredientsByCategory.dairy.push(foodItem);
              break;
            case 'Krydder/urter':
              ingredientsByCategory.spices.push(foodItem);
              break;
            case 'Restemat':
              ingredientsByCategory.leftovers.push(foodItem);
              break;
            default:
              ingredientsByCategory.other.push(foodItem);
              break;
          }
        });
  
        // Set category states
        setMeatFish(ingredientsByCategory.meatFish);
        setDryCorn(ingredientsByCategory.dryCorn);
        setVeggiesFruits(ingredientsByCategory.veggiesFruits);
        setDairy(ingredientsByCategory.dairy);
        setSpices(ingredientsByCategory.spices);
        setLeftovers(ingredientsByCategory.leftovers);
        setOther(ingredientsByCategory.other);
      })
      .catch((error) => {
        console.error('Error fetching ingredients:', error);
      });
  }, [fridge]);

  return (
    <>
      <div className='ingredient-container'>
      <div className='top-wrapper'>
          <PageTitle pageTitle='Mitt Kjøleskap' />
          <div className="add-item-container">
            <Link className="add-item-container" to="/IngredientSearchPage">
              <BiIcons.BiPlus/>  
            </Link>
          </div>
        </div>
        

        <div className='fridge-container'>
          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Kjøtt/fisk:</h2>
              {meatFish.map(product => 
              <li className='fridge-item'>
                <TbIcon.TbMeat className="food-icon"/>
                <span className='fridge-text'>{product.ingredient} {product.quantity}</span>
                <BsTrash className="trash-icon" onClick={() => alert("Denne funskjonen finnes ikke enda")}/>
              </li>)}
            </ul>
          </div>

          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Tørrvarer/kornvarer:</h2>
              {dryCorn.map(product => 
              <li className='fridge-item'>
                <TbIcon.TbBread className="food-icon"/>
                <span className='fridge-text'>{product.ingredient} {product.quantity}</span>
                <BsTrash className="trash-icon" onClick={() => alert("Denne funskjonen finnes ikke enda")}/>
              </li>)}
            </ul>
          </div>

          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Grønnsaker og frukt/bær: </h2>
              {veggiesFruits.map(product => 
              <li className='fridge-item'>
                <TbIcon.TbSalad className="food-icon"/>
                <span className='fridge-text'>{product.ingredient} {product.quantity}</span>
                <BsTrash className="trash-icon" onClick={() => alert("Denne funskjonen finnes ikke enda")}/>
              </li>)}
            </ul>
          </div>

          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Meieriprodukter:</h2>
              {dairy.map(product => 
              <li className='fridge-item'>
                <LuIcons.LuMilk className="food-icon"/>
                <span className='fridge-text'>{product.ingredient} {product.quantity}</span>
                <BsTrash className="trash-icon" onClick={() => alert("Denne funskjonen finnes ikke enda")}/>
              </li>)}
            </ul>
          </div>

          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Krydder/urter:</h2>
              {spices.map(product => 
              <li className='fridge-item'>
                <GiSaltShaker className="food-icon"/>
                <span className='fridge-text'>{product.ingredient} + {product.quantity}</span>
                <BsTrash className="trash-icon" onClick={() => alert("Denne funskjonen finnes ikke enda")}/>
              </li>)}
            </ul>
          </div>

          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Restemat:</h2>
              {leftovers.map(product => 
              <li className='fridge-item'>
                <LuIcons.LuPizza className="food-icon"/>
                <span className='fridge-text'>{product.ingredient} {product.quantity}</span>
                <BsTrash className="trash-icon" onClick={() => alert("Denne funskjonen finnes ikke enda")}/>
              </li>)}
            </ul>
          </div>

          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Annet:</h2>
              {other.map(product => 
              <li className='fridge-item'>
                <LuIcons.LuFileQuestion className="food-icon"/>
                <span className='fridge-text'>{product.ingredient} {product.quantity}</span>
                <BsTrash className="trash-icon" onClick={() => alert("Denne funskjonen finnes ikke enda")}/>
              </li>)}
            </ul>
          </div>

        </div>

      </div>
    </>
  )
}

export default MyFridgeIngredientsList
