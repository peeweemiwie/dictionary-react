import React from 'react';
import MeaningArray from './MeaningArray';
import Phonetics from './Phonetics';

const Results = (props) => {
	const data = props.data;
	const word = data.word;

	return (
		<div className='Meaning'>
			<h2>{word}</h2>
			{data.phonetics && <Phonetics data={data.phonetics} />}
			<MeaningArray array={data.meanings} />
			<pre>{JSON.stringify(props.data, null, 2)}</pre>
		</div>
	);
};

export default Results;
