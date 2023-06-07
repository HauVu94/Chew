import React, { useState, useEffect } from 'react'

// Dummy data, import from database
const ingredientsList = [{id: 1, name: 'Hodekål'}, {id: 2, name: 'Grønnkål'}, {id: 3, name: 'Spisskål'}, {id: 4, name: 'Kålrabi'}, {id: 5, name: 'Rødkål'}, {id: 6, name: 'Rødkål'}, {id: 7, name: 'Rødkål'}, {id: 8, name: 'Rødkål'}]


const IngredientSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return(
		<div className='ingredient-search-container'>
			<input type='text' onChange={event => {setSearchTerm(event.target.value)}} placeholder='Søk...' className='ingredeients-search-field'/>
			
				<ul className='search-result-ul'>
					{ingredientsList.filter((val) => {
						if (searchTerm === ''){
							return ""
						} else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
							return val
						}
					}).slice(0,5).map((val, key) => {
						return (
							<div className='search-results-tab'>
								<li className='search-result-li'>{val.name}</li>
							</div>
						)
				})}
				</ul>
		</div>
	)
}

export default IngredientSearch
