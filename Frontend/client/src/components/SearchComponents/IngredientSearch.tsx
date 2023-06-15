import React, { useState, useEffect, ChangeEvent, useRef } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const IngredientSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedCategory, setSelectedCategory] = useState("")
	const [selectedIngredient, setSelectedIngredient] = useState("")

	const [selectedQuantity, setSelectedQuantity] = useState("")
	const [selectedMeasure, setSelectedMeasure] = useState("")

	const [ingredients, setIngredients] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);

	const [inputActive, setInputActive] = useState(false)

	useEffect(() => {
		fetch("/api/ingredients")
		  .then(response => response.json())
		  .then((data: {ingredientName: string}[]) => {
			if (data.length > 0) {
				const temp: string[] = [];
				data.forEach((item) => {
					temp.push(item.ingredientName)
				});
			  	setIngredients(temp); // henter rad på index 0
			}
			setLoading(false);
		  })
		  .catch(error => {
			console.error(error);
			setLoading(false);
		  });
	  }, []);
	
	  if (loading) {
		return <div>Loading...</div>;
	  }


	const inputActiveHandler = () => {
		setInputActive(true);
	}

	const inputNotActiveHandler = () => {
		setTimeout(() => {
			setInputActive(false);
		}, 100) // 100 millisekunder = 0.1 sekunder
		
	}

	const categoryHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedCategory(event.target.value);
	};

	const measureHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedMeasure(event.target.value);
	};
	
	const ingredientHandler = (ingredient: string) => {
		setSelectedIngredient(ingredient);
	};

	const confirmHandler = () => {
		if(selectedCategory && selectedIngredient && selectedQuantity){
			addNew();
		}
		else{
			alert("Du må velge KATEGORI, INGREDIENS OG KVANTITET før du kan legge til i kjøleskapet. Prøv igjen")
		}
	}

	const addNew = () => {
		const newItem = {
			quantity: (selectedQuantity + selectedMeasure) as string, 
			category: selectedCategory as string, 
			fridgeId: 1 as number,
			ingredient: selectedIngredient as string
		};

		fetch('/api/foodItems', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newItem)
		})
			.then(response => {
				if(!response.ok){
					console.log("error: cant add new food item")
				}
				if(selectedCategory && selectedIngredient && selectedQuantity){
					
					setSelectedCategory("");
					setSelectedIngredient("");
					setSelectedQuantity("");
					setSelectedMeasure("");
					
				}
				console.log("added new food item successfully")
			}).catch(err => {
				console.error(err)
			})
	}

	return(
		<div className='search-wrapper'>
			<div className='ingredient-search-container'>
				<article className='top-text'>
				
					<select className="custom-select category" onChange={categoryHandler}>
						<option value="option0" disabled selected>Velg kategori:</option>
						<option value="Kjøtt/fisk">Kjøtt/fisk</option>
						<option value="Tørrvarer/kornvarer">Tørrvarer/kornvarer</option>
						<option value="Grønnsaker og frukt/bær">Grønnsaker og frukt/bær</option>
						<option value="Meieriprodukter">Meieriprodukter</option>
						<option value="Krydder/urter">Krydder/urter</option>
						<option value="Restemat">Restemat</option>
						<option value="Annet">Annet</option>
					</select>
						
				</article>
				<input type='text' onChange={event => {setSearchTerm(event.target.value)}} onFocus={inputActiveHandler} onBlur={inputNotActiveHandler} placeholder='Søk...' className='ingredients-search-field' value={searchTerm}/>
				
					<ul className={inputActive ? 'search-result-ul-visible' : 'search-result-ul-hidden'}>
						{ingredients ? ingredients.filter((ingr) => {
							if (searchTerm === ''){
								return ""
							} else if (ingr.toLowerCase().includes(searchTerm.toLowerCase())){
								return ingr
							}
						}).slice(0,50).map((ingr) => {
							return (
								<div className='search-results-tab' onClick={() => ingredientHandler(ingr)}>
									<li className='search-result-li'>{ingr}</li>
								</div>
							)
					}) : null}
					</ul>

					<div className="quantity-container">
						<input type="number" min="1" placeholder='Kvantitet:' onChange={event => {setSelectedQuantity(event.target.value)}}></input>

						<select className="custom-select quantity" onChange={measureHandler}>
							<option value=" stk" disabled selected>Mål</option>
							<option value=" stk">Stykk</option>
							<option value="g">Gram</option>
							<option value="kg">Kilo</option>
							<option value="ml">Milliliter</option>
							<option value="dl">Desiliter</option>
							<option value="L">Liter</option>
						</select>

					</div>

				<div className="output">Legg til {selectedQuantity ? selectedQuantity + selectedMeasure : ""} {selectedIngredient ? selectedIngredient : "..."}{selectedCategory ? " i " + selectedCategory  : "..."}</div>

					{selectedCategory && selectedIngredient && selectedQuantity ? 
					<Link to="/MyFridge">
						<button className={selectedCategory && selectedIngredient && selectedQuantity ? "add-btn-active" : 'add-btn-inactive'} onClick={confirmHandler}> Bekreft </button>
					</Link> : 
						<button className={selectedCategory && selectedIngredient && selectedQuantity ? "add-btn-active" : 'add-btn-inactive'}> Bekreft </button>
					}
				

			</div>
		</div>
	)
}

export default IngredientSearch
