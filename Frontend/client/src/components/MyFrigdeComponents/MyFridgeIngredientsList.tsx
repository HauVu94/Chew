import React, { useState } from 'react'
import '../../styles/MyFridgeIngredientsList.css'
import { PageTitle } from '../PageComponents/PageTitle'
import * as TbIcon from 'react-icons/tb'
import {BsTrash} from 'react-icons/bs'
import * as LuIcons from 'react-icons/lu'
import {GiSaltShaker} from 'react-icons/gi'
import * as BiIcons from 'react-icons/bi';

const MyFridgeIngredientsList = () => {

  const [meatFish, setMeatFish] = useState(['Kylling', 'Laks', 'Biff', 'Svinekjøtt', 'Tunfisk', 'Torsk']);
  const [dryCorn, setDryCorn] = useState(['Pasta', 'Ris', 'Brød', 'Quinoa', 'Havregryn', 'Bygg', 'Couscous']);
  const [veggiesFruits, setVeggiesFruits] = useState(['Gulrøtter', 'Epler', 'Tomater', 'Brokkoli', 'Paprika', 'Agurk', 'Rødløk', 'Gul løk']);
  const [dairy, setDairy] = useState(['Melk', 'Gulost', 'Yoghurt', 'Smør', 'Egg', 'Krem', 'Rømme']);
  const [spices, setSpices] = useState(['Salt', 'Pepper', 'Kanel', 'Hvitløkspulver', 'Paprika', 'Oregano', 'Gurkemeie', 'Chilipulver', 'Koriander', 'Kajennepepper', 'Ingefær', 'Kardemomme', 'Nellik', 'Muskatnøtt', 'Kanelbark']);
  const [leftovers, setLeftovers] = useState(['Ris (kokt)', 'Pasta (kokt)', 'Kraft (kylling)']);
  const [other, setOther] = useState(['Vaniljeis', 'Sjokolade']);

          ////
          // add new    ( alt dette kan slettes og byttes ut med link til 'ingredientSearch' kanskje, når vi får koblet opp mot databasen?? )
          const [selectedCategory, setSelectedCategory] = useState('');

          const addNewItem = () => {
            const categoryOptions = ["1", "2", "3", "4", "5", "6", "7"];
            const categoryInput = prompt('(Midlertidig løsning)\nHva slags type produkt skal du legge til?:\n1. Kjøtt/fisk\n2. Tørrvarer/kornvarer\n3. Grønnsaker og frukt/bær\n4. Meieriprodukter\n5. Krydder/urter\n6. Restemat\n7. Annet');
            if(categoryInput && categoryOptions.includes(categoryInput)){
              setSelectedCategory(categoryInput);
              const productInput = prompt('(Midlertidig løsning)\nHvilket produkt skal du legge til?:');
              if(productInput){
                const tempCategory = categoryInput;
                switch (tempCategory) {
                  case '1':
                    setMeatFish(prevList => [...prevList, productInput]);
                    break;
                  case '2':
                    setDryCorn(prevList => [...prevList, productInput]);
                    break;
                  case '3':
                    setVeggiesFruits(prevList => [...prevList, productInput]);
                    break;
                  case '4':
                    setDairy(prevList => [...prevList, productInput]);
                    break;
                  case '5':
                    setSpices(prevList => [...prevList, productInput]);
                    break;
                  case '6':
                    setLeftovers(prevList => [...prevList, productInput]);
                    break;
                  case '7':
                    setOther(prevList => [...prevList, productInput]);
                    break;
                  default:
                    break;
                }
              } else {
                  if(window.confirm('(Midlertidig løsning)\nFEIL: Feltet kan ikke være blankt. Prøv igjen?')){
                    addNewItem();
                  }
                }
            } else {
                if(window.confirm('(Midlertidig løsning)\nFEIL: Du må velge 1-7. Prøv igjen?')){
                  addNewItem();
                }
            }
            setSelectedCategory('');
          };
          ////

  //remove from list
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
            {/* bytte ut med link til ingredientSearch?             <------ */}
            <BiIcons.BiPlus onClick={() => addNewItem()}/>  
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
