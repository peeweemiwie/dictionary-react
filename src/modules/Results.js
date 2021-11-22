import React, { useState } from 'react';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import Images from './Images';
import Figure from './Figure';
import './Results.scss';
// import axios from 'axios';

const Results = (props) => {
	const data = props.data;
	const phonetics = data.phonetics;
	const [displayLargeImg, setDisplayLargeImg] = useState(false);

	// const [dataToShow, setDataToShow] = useState('definition');
	// const handleClick = (event) => {
	// 	let targetElement = event.target.localName;
	// 	let value =
	// 		targetElement === 'button'
	// 			? event.target.value
	// 			: event.target.parentElement.value;
	// 	setDataToShow(value);
	// };
	// console.log(props);
	const [imgLarge, setImgLarge] = useState(null);
	const handleDisplayLargeImg = (imgData) => {
		setDisplayLargeImg(true);

		if (imgData) {
			setImgLarge({
				src: imgData.imgLargeSrc,
				alt: imgData.alt,
				originalUrl: imgData.originalUrl,
			});
		}
	};
	const handleClose = () => {
		setDisplayLargeImg(true);
		setImgLarge(null);
	};

	return (
		<main className='Results'>
			{imgLarge && (
				<div className='Backdrop' data-display-large={displayLargeImg}>
					<Figure
						// key={null}
						clickEvent={null}
						src={imgLarge.src}
						srcLarge={null}
						keyword={data.word}
						alt={imgLarge.alt}
						caption={[
							`${imgLarge.alt}`,
							<a
								className='button btn-primary link'
								href={imgLarge.originalUrl}
								target='_blank'
								rel='noreferrer'
							>
								Visit
							</a>,
						]}
					/>
					<button
						className='button btn-close btn-primary'
						onClick={handleClose}
					>
						<span className='material-icons-outlined icon'>close</span>
					</button>
				</div>
			)}

			<h2 className='searched-word'>{data.word}</h2>
			{phonetics && <Phonetics data={phonetics} />}
			{/* <nav className='navigation'>
				<button
					className='nav text btn-no-style'
					data-active={dataToShow === 'definition'}
					onClick={handleClick}
					type='button'
					value='definition'
				>
					<span className='material-icons-outlined'>description</span>
					<span className='title'>definition</span>
				</button>
				<button
					className='nav image btn-no-style'
					data-active={dataToShow === 'image'}
					onClick={handleClick}
					type='button'
					value='image'
				>
					<span className='material-icons-outlined'>image</span>
					<span className='title'>image</span>
				</button>
			</nav> */}
			{/* {dataToShow === 'definition' ? (
				<Meaning array={data.meanings} />
			) : (
				<Images data={'data'} />
			)} */}
			<Meaning array={data.meanings} />
			<Images
				photoArray={props.photoArray}
				keyword={data.word}
				onReceiveLargeImg={handleDisplayLargeImg}
			/>
		</main>
	);
};

export default Results;
