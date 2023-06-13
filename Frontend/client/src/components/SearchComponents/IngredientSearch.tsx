import React, { useState, useEffect, ChangeEvent } from 'react'

const IngredientSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedCategory, setSelectedCategory] = useState("")
	const [selectedIngredient, setSelectedIngredient] = useState("")

	const [ingredients, setIngredients] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);

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

	const categoryHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedCategory(event.target.value);
	};

	const ingredientHandler = (ingredient: string) => {
		setSelectedIngredient(ingredient);
		setSearchTerm('');
	};

	const addNew = () => {
		const newItem = {quantity: 1, category: selectedCategory, fridgeId: 1, ingredient: selectedIngredient};

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
				if(selectedCategory && selectedIngredient){
					setSelectedCategory("");
					setSelectedIngredient("");
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
				
					<select className="custom-select" onChange={categoryHandler}>
						<option value="option0" disabled selected>Legg til i</option>
						<option value="Kjøtt/fisk">Kjøtt/fisk</option>
						<option value="Tørrvarer/kornvarer">Tørrvarer/kornvarer</option>
						<option value="Grønnsaker og frukt/bær">Grønnsaker og frukt/bær</option>
						<option value="Meieriprodukter">Meieriprodukter</option>
						<option value="Krydder/urter">Krydder/urter</option>
						<option value="Restemat">Restemat</option>
						<option value="Annet">Annet</option>
					</select>
						
				</article>
				<input type='text' onChange={event => {setSearchTerm(event.target.value)}} placeholder='Søk...' className='ingredients-search-field' value={searchTerm}/>
				
					<ul className='search-result-ul'>
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

				<div className="output">Legg til {selectedIngredient} {selectedCategory ? "i " : ""} {selectedCategory}</div>

				<button className="add-btn" onClick={
					selectedCategory && selectedIngredient ? addNew : 
					() => {alert("Du må velge både kategori og ingrediens før du kan legge til i kjøleskapet. Prøv igjen")}}>
				Bekreft </button>

			</div>
		</div>
	)
}

export default IngredientSearch
