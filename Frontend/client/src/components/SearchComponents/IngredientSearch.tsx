import React, { useState, useEffect, ChangeEvent } from 'react'

// Dummy data, import from database
// const ingredientsList = [
// 	{ id: 1, name: 'Hodekål' },
// 	{ id: 2, name: 'Grønnkål' },
// 	{ id: 3, name: 'Spisskål' },
// 	{ id: 4, name: 'Kålrabi' },
// 	{ id: 5, name: 'Rødkål' },
// 	{ id: 6, name: 'Gulrot' },
// 	{ id: 7, name: 'Potet' },
// 	{ id: 8, name: 'Blomkål' },
// 	{ id: 9, name: 'Brokkoli' },
// 	{ id: 10, name: 'Sellerirot' },
// 	{ id: 11, name: 'Purreløk' },
// 	{ id: 12, name: 'Løk' },
// 	{ id: 13, name: 'Tomat' },
// 	{ id: 14, name: 'Agurk' },
// 	{ id: 15, name: 'Aubergine' },
// 	{ id: 16, name: 'Rødbete' },
// 	{ id: 17, name: 'Pastinakk' },
// 	{ id: 18, name: 'Persillerot' },
// 	{ id: 19, name: 'Squash' },
// 	{ id: 20, name: 'Gresskar' },
// 	{ id: 21, name: 'Søtpotet' },
// 	{ id: 22, name: 'Pepperrot' },
// 	{ id: 23, name: 'Grønnkålsrot' },
// 	{ id: 24, name: 'Fennikel' },
// 	{ id: 25, name: 'Rosenkål' },
// 	{ id: 26, name: 'Sukkererter' },
// 	{ id: 27, name: 'Grønne bønner' },
// 	{ id: 28, name: 'Røde bønner' },
// 	{ id: 29, name: 'Mais' },
// 	{ id: 30, name: 'Gul løk' },
// 	{ id: 31, name: 'Gulrot' },
// 	{ id: 32, name: 'Løksalat' },
// 	{ id: 33, name: 'Gressløk' },
// 	{ id: 34, name: 'Dill' },
// 	{ id: 35, name: 'Persille' },
// 	{ id: 36, name: 'Koriander' },
// 	{ id: 37, name: 'Basilikum' },
// 	{ id: 38, name: 'Timian' },
// 	{ id: 39, name: 'Oregano' },
// 	{ id: 40, name: 'Rosmarin' },
// 	{ id: 41, name: 'Salvie' },
// 	{ id: 42, name: 'Laurbærblad' },
// 	{ id: 43, name: 'Hvitløk' },
// 	{ id: 44, name: 'Cherrytomater' },
// 	{ id: 45, name: 'Paprika' },
// 	{ id: 46, name: 'Chilipepper' },
// 	{ id: 47, name: 'Squashblomst' },
// 	{ id: 48, name: 'Spinat' },
// 	{ id: 49, name: 'Mangold' },
// 	{ id: 50, name: 'Norsk kålrot' }
//   ];



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
		setSelectedCategory("i " + event.target.value);
	};

	const ingredientHandler = (ingredient: string) => {
		setSelectedIngredient(ingredient);
		setSearchTerm('');
	};

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

				<div className="output">Legg til {selectedIngredient} {selectedCategory}</div>
				<button className="add-btn">Bekreft</button>
			</div>
		</div>
	)
}

export default IngredientSearch
