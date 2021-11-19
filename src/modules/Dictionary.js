import React, { useState } from 'react';

const Dictionary = () => {
	const [keyword, setKeyword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(keyword);
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
		</div>
	);
};

export default Dictionary;
