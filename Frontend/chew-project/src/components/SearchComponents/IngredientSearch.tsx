import React, { useState } from 'react'

// Dummy data, import from database

const ingredientsList = [{id: 1, name: 'Hodekål'}, {id: 2, ingr: 'Grønnkål'}, {id: 3, ingr: 'Spisskål'}, {id: 4, ingr: 'Kålrabi'}, {id: 5, ingr: 'Rødkål'}]

// const getFilteredItems = (query, items) => {
// 	if (!query){
// 		return items
// 	}
// 	return items.filter(ingredient => ingredient.name.incudes(query))
// } 


const IngredientSearch = () => {
	const [query, setQuery] = useState("")

	// const {ingredients} = ingredientsList
	// const {items} = ingr

	// const filteredItems = getFilteredItems(query, items)

	return (
		<div className='ingredient-search-container'>
			<h1>Finn matvare</h1>
			<input className='ingredeients-search-field' type='text' onChange={e => setQuery(e.target.value)} />
			<ul>
				{/* {filteredItems.map(value => <p key={value.id}>{value.name}</p>)} */}
			</ul>
		</div>
	)
}

export default IngredientSearch
