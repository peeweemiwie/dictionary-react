import axios from 'axios';
import React, { useState } from 'react';
import Results from './Results';
import 'material-icons/iconfont/material-icons.css';
import './Dictionary.scss';

const Dictionary = (props) => {
	const [keyword, setKeyword] = useState(props.defaultKeyword);
	const [data, setData] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [focus, setFocus] = useState(false);

	const handleResponse = (response) => {
		setData(response.data[0]);
	};

	const handleFocus = () => {
		setFocus(true);
	};

	const sendRequest = () => {
		// documentation: https://dictionaryapi.dev/
		const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		sendRequest();
	};

	const handleKeywordChange = (event) => {
		setKeyword(event.target.value);
	};

	const load = () => {
		setLoaded(true);
		sendRequest();
	};

	if (loaded) {
		return (
			<div className='Dictionary'>
				<form className='Form' onSubmit={handleSubmit} data-focus={focus}>
					<div className='container-input-label'>
						<label className='label' htmlFor='input-search'>
							Search for a word
						</label>
						<input
							className='input-search'
							id='input-search'
							type='search'
							onChange={handleKeywordChange}
							onFocus={handleFocus}
						/>
					</div>
					<span className='icon material-icons-outlined'>search</span>
				</form>
				{data && <Results data={data} />}
			</div>
		);
	} else {
		load();
		return 'Loading...';
	}
};

export default Dictionary;
