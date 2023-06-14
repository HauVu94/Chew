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

  const [meatFish, setMeatFish] = useState<string[]>([]);
  const [dryCorn, setDryCorn] = useState<string[]>([]);
  const [veggiesFruits, setVeggiesFruits] = useState<string[]>([]);
  const [dairy, setDairy] = useState<string[]>([]);
  const [spices, setSpices] = useState<string[]>([]);
  const [leftovers, setLeftovers] = useState<string[]>([]);
  const [other, setOther] = useState<string[]>([]);

  useEffect(() => {
    // Fetch all fooditems from database
    fetch(`/api/foodItems?fridgeId=${fridge}`)
      .then((response) => response.json())
      .then((data) => {
  
        // Sort foodItems by category
        const ingredientsByCategory: {
          meatFish: string[];
          dryCorn: string[];
          veggiesFruits: string[];
          dairy: string[];
          spices: string[];
          leftovers: string[];
          other:  string[];
        } = {
          meatFish: [],
          dryCorn: [],
          veggiesFruits: [],
          dairy: [],
          spices: [],
          leftovers: [],
          other: [],
        };
  
        data.forEach((item: { category: string, ingredient: string }) => {
          const { category, ingredient } = item;
          
          switch (category) {
            case 'Kjøtt/fisk':
              ingredientsByCategory.meatFish.push(ingredient);
              break;
            case 'Tørrvarer/kornvarer':
              ingredientsByCategory.dryCorn.push(ingredient);
              break;
            case 'Grønnsaker og frukt/bær':
              ingredientsByCategory.veggiesFruits.push(ingredient);
              break;
            case 'Meieriprodukter':
              ingredientsByCategory.dairy.push(ingredient);
              break;
            case 'Krydder/urter':
              ingredientsByCategory.spices.push(ingredient);
              break;
            case 'Restemat':
              ingredientsByCategory.leftovers.push(ingredient);
              break;
            default:
              ingredientsByCategory.other.push(ingredient);
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


  // fiks
  const removeItem = (category: string, item: string) => {
    if(window.confirm('Er du sikker på at du vil slette dette produktet?')){
      switch (category){
        case 'meatFish': // lager ny liste, med alle objektene untatt det valgte objektet (dermed "sletter det") og setter inn ny liste med useState           <------
          setMeatFish(prevList => prevList.filter(i => i !== item));
          break;
        case 'dryCorn':
          setDryCorn(prevList => prevList.filter(i => i !== item));
          break;
        case 'veggiesFruits':
          setVeggiesFruits(prevList => prevList.filter(i => i !== item));
          break;
        case 'dairy':
          setDairy(prevList => prevList.filter(i => i !== item));
          break;
        case 'spices':
          setSpices(prevList => prevList.filter(i => i !== item));
          break;
        case 'leftovers':
          setLeftovers(prevList => prevList.filter(i => i !== item));
          break;
        case 'other':
          setOther(prevList => prevList.filter(i => i !== item));
          break;
        default:
          break;
      }
    };
  }

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
              <li className='fridge-item' key={product}>
                <TbIcon.TbMeat className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon" onClick={() => removeItem('meatFish', product)}/>
              </li>)}
            </ul>
          </div>

          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Tørrvarer/kornvarer:</h2>
              {dryCorn.map(product => 
              <li className='fridge-item' key={product}>
                <TbIcon.TbBread className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon" onClick={() => removeItem('dryCorn', product)}/>
              </li>)}
            </ul>
          </div>

          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Grønnsaker og frukt/bær: </h2>
              {veggiesFruits.map(product => 
              <li className='fridge-item' key={product}>
                <TbIcon.TbSalad className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon" onClick={() => removeItem('veggiesFruits', product)}/>
              </li>)}
            </ul>
          </div>

          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Meieriprodukter:</h2>
              {dairy.map(product => 
              <li className='fridge-item' key={product}>
                <LuIcons.LuMilk className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon" onClick={() => removeItem('dairy', product)}/>
              </li>)}
            </ul>
          </div>

          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Krydder/urter:</h2>
              {spices.map(product => 
              <li className='fridge-item' key={product}>
                <GiSaltShaker className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon" onClick={() => removeItem('spices', product)}/>
              </li>)}
            </ul>
          </div>

          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Restemat:</h2>
              {leftovers.map(product => 
              <li className='fridge-item' key={product}>
                <LuIcons.LuPizza className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon" onClick={() => removeItem('leftovers', product)}/>
              </li>)}
            </ul>
          </div>

          <div className='fridge-section'>
            <ul className='fridge-list'>
              <h2 className='fridge-title'>Annet:</h2>
              {other.map(product => 
              <li className='fridge-item' key={product}>
                <LuIcons.LuFileQuestion className="food-icon"/>
                <span className='fridge-text'>{product}</span>
                <BsTrash className="trash-icon" onClick={() => removeItem('other', product)}/>
              </li>)}
            </ul>
          </div>

        </div>

      </div>
    </>
  )
}

export default MyFridgeIngredientsList
