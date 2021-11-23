import React, { useState } from 'react';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import Images from './Images';
// import Figure from './Figure';
import Nav from './Nav';
import Backdrop from './Backdrop';
import './Results.scss';

const Results = (props) => {
	const data = props.data;
	const phonetics = data.phonetics;
	const [dataToShow, setDataToShow] = useState('definition');
	const [imgLarge, setImgLarge] = useState(null);

	const changeDataToShow = (section) => {
		setDataToShow(section);
	};

	const handleDisplayLargeImg = (imgData) => {
		setImgLarge(imgData);
	};

	const handleRemoveData = () => {
		setImgLarge(null);
	};

	return (
		<main className='Results'>
			{imgLarge && (
				<Backdrop
					data={imgLarge}
					onRemoveData={handleRemoveData}
					keyword={data.word}
				/>
			)}
			<div className='border'>
				<h2 className='searched-word'>{data.word}</h2>
				{phonetics && <Phonetics data={phonetics} />}
			</div>
			<Nav onReceiveTabChange={changeDataToShow} />
			{dataToShow === 'definition' ? (
				<Meaning array={data.meanings} />
			) : (
				<Images
					photoArray={props.photoArray}
					keyword={data.word}
					onReceiveLargeImg={handleDisplayLargeImg}
				/>
			)}
		</main>
	);
};

export default Results;
