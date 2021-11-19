import axios from 'axios';
import React, { useState } from 'react';

const Dictionary = () => {
	const [keyword, setKeyword] = useState('');
	const [data, setData] = useState({});
	const handleResponse = (response) => {
		setData(response.data[0]);
		console.log(response.data[0]);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
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
			<div>
				<pre>{JSON.stringify(data)}</pre>
			</div>
		</div>
	);
};

export default Dictionary;
