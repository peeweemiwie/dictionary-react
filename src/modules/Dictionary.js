import axios from 'axios';
import React, { useState } from 'react';
import Results from './Results';
const Dictionary = () => {
	const [keyword, setKeyword] = useState('');
	const [data, setData] = useState(null);
	const handleResponse = (response) => {
		setData(response.data[0]);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		// documentation: https://dictionaryapi.dev/
		const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	};

	const handleKeywordChange = (event) => {
		setKeyword(event.target.value);
	};
	return (
		<div className='Dictionary'>
			<div>{keyword}</div>
			<form onSubmit={handleSubmit}>
				<input type='search' onChange={handleKeywordChange} />
			</form>
			<div>{data != null && <Results data={data} />}</div>
		</div>
	);
};

export default Dictionary;
