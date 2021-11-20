import React from 'react';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import './Results.scss';

const Results = (props) => {
	const data = props.data;
	const phonetics = data.phonetics;
	return (
		<main className='Results'>
			<h2 className='searched-word'>{data.word}</h2>
			{phonetics && <Phonetics data={phonetics} />}
			<Meaning array={data.meanings} />
		</main>
	);
};

export default Results;
