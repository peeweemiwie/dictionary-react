import React from 'react';
import MeaningArray from './MeaningArray';
import Phonetics from './Phonetics';
import './Results.scss';
const Results = (props) => {
	const data = props.data;
	const phonetics = data.phonetics;
	return (
		<main className='Results'>
			<h2 className='searched-word'>{data.word}</h2>
			{phonetics && <Phonetics data={phonetics} />}
			<MeaningArray array={data.meanings} />
		</main>
	);
};

export default Results;
