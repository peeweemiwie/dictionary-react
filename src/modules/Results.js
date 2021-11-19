import React from 'react';
import MeaningArray from './MeaningArray';
import Phonetics from './Phonetics';

const Results = (props) => {
	const data = props.data;
	const phonetics = data.phonetics;
	return (
		<div className='Meaning'>
			<h2>{data.word}</h2>
			{phonetics && <Phonetics data={phonetics} />}
			<MeaningArray array={data.meanings} />
		</div>
	);
};

export default Results;
