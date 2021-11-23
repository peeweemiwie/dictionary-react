import React, { useState, useEffect } from 'react';
import './Nav.scss';

const Nav = (props) => {
	const [dataToShow, setDataToShow] = useState('definition');

	const handleClick = (event) => {
		let targetElement = event.target.localName;
		let value =
			targetElement === 'button'
				? event.target.value
				: event.target.parentElement.value;
		setDataToShow(value);
	};

	useEffect(() => {
		props.onReceiveTabChange(dataToShow);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataToShow]);

	return (
		<nav className='Nav'>
			<button
				className='button text btn-no-style'
				data-active={dataToShow === 'definition'}
				onClick={handleClick}
				type='button'
				value='definition'
			>
				<span className='material-icons-outlined'>description</span>
				<span className='title'>definition</span>
			</button>
			<button
				className='button image btn-no-style'
				data-active={dataToShow === 'image'}
				onClick={handleClick}
				type='button'
				value='image'
			>
				<span className='material-icons-outlined'>image</span>
				<span className='title'>image</span>
			</button>
		</nav>
	);
};

export default Nav;
