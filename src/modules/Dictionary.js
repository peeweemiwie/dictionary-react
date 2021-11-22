import axios from 'axios';
import React, { useState } from 'react';
import Results from './Results';
import 'material-icons/iconfont/material-icons.css';
import './Dictionary.scss';

const Dictionary = (props) => {
	const [keyword, setKeyword] = useState(props.defaultKeyword);
	const [data, setData] = useState(null);
	const [photoArray, setPhotoArray] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [focus, setFocus] = useState(false);

	const handleDictionaryResponse = (response) => {
		// console.log(response);
		setData(response.data[0]);
	};

	const handleImageResponse = (response) => {
		setPhotoArray(response.data.photos);
	};

	const handleInputFocus = () => {
		setFocus(true);
	};

	const sendDictionaryRequest = () => {
		// documentation: https://dictionaryapi.dev/
		const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleDictionaryResponse);
	};

	const sendImageRequest = () => {
		// documentation: https://www.pexels.com/api/documentation/
		const pexelApiKey =
			'563492ad6f91700001000001513e63f102864b409905ee9db0684aae';
		const apiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=20`;
		const authorization = { Authorization: `Bearer ${pexelApiKey}` };
		axios.get(apiUrl, { headers: authorization }).then(handleImageResponse);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		sendDictionaryRequest();
		sendImageRequest();
	};

	const handleKeywordChange = (event) => {
		setKeyword(event.target.value);
	};

	const load = () => {
		setLoaded(true);
		sendDictionaryRequest();
		sendImageRequest();
	};

	if (loaded) {
		return (
			<div className='Dictionary'>
				<form
					className='Form'
					onSubmit={handleSubmit}
					data-focus={focus || keyword.length > 0 ? true : false}
				>
					<div className='container-input-label'>
						<label className='label' htmlFor='input-search'>
							Search for a word
						</label>
						<input
							className='input-search'
							id='input-search'
							type='search'
							defaultValue={props.defaultKeyword}
							onChange={handleKeywordChange}
							onFocus={handleInputFocus}
						/>
					</div>
					<span className='icon material-icons-outlined'>search</span>
				</form>
				{data !== null && photoArray !== null && (
					<Results data={data} photoArray={photoArray} />
				)}
			</div>
		);
	} else {
		load();
		return 'Loading...';
	}
};

export default Dictionary;
